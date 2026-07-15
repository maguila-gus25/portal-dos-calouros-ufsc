from pathlib import Path
from typing import Optional

import frontmatter
from markdown_it import MarkdownIt

from app.core.config import settings
from app.models.schemas import Course, CourseSummary, SearchResult, Section, SectionSummary

# Mapa slug → arquivo (FONTE ÚNICA).
# Só arquivos aqui são servidos como "seções" via /api/sections.
# Arquivos de dev (arquitetura.md, product-backlog.md, identidade-visual.md,
# README.md, _modelo-curso.md) NÃO aparecem na API por design.
SLUG_MAP: dict[str, dict] = {
    "coordenacoes": {
        "file": "coordenacoes.md",
        "title": "Coordenações",
        "description": "Contatos das coordenações de cada curso do CTC.",
        "icon": "🏛️",
    },
    "ru": {
        "file": "carteira-ru.md",
        "title": "Carteira do RU",
        "description": "Como se cadastrar e usar o Restaurante Universitário.",
        "icon": "🍽️",
    },
    "links": {
        "file": "links-importantes.md",
        "title": "Links importantes",
        "description": "CAGR, Moodle, SETIC, e-mail institucional e afins.",
        "icon": "🔗",
    },
    "datas": {
        "file": "datas-importantes.md",
        "title": "Datas importantes",
        "description": "Calendário acadêmico, matrícula, recesso.",
        "icon": "📅",
    },
    "atleticas": {
        "file": "atleticas-e-festas.md",
        "title": "Atléticas e festas",
        "description": "Atléticas de cada curso e festas tradicionais.",
        "icon": "🎉",
    },
    "instagrams": {
        "file": "instagrams.md",
        "title": "Instagrams e perfis",
        "description": "Perfis oficiais e estudantis para acompanhar.",
        "icon": "📸",
    },
    "mapa": {
        "file": "mapa.md",
        "title": "Mapa da universidade",
        "description": "Onde ficam os prédios, RU, biblioteca, coordenações.",
        "icon": "🗺️",
    },
    "historias": {
        "file": "historias-e-feedbacks.md",
        "title": "Histórias e feedbacks",
        "description": "Relatos de veteranos e como enviar o seu.",
        "icon": "💬",
    },
}

_md = MarkdownIt("commonmark", {"html": False, "linkify": True, "typographer": True})


def list_sections() -> list[SectionSummary]:
    return [
        SectionSummary(
            slug=slug,
            title=meta["title"],
            description=meta["description"],
            icon=meta["icon"],
        )
        for slug, meta in SLUG_MAP.items()
    ]


def get_section(slug: str) -> Optional[Section]:
    meta = SLUG_MAP.get(slug)
    if not meta:
        return None
    path = settings.docs_dir / meta["file"]
    if not path.exists():
        return None
    post = frontmatter.load(path)
    return Section(
        slug=slug,
        title=meta["title"],
        description=meta["description"],
        icon=meta["icon"],
        content_md=post.content,
        content_html=_md.render(post.content),
        metadata=dict(post.metadata),
    )


def _iter_course_files() -> list[Path]:
    courses_dir = settings.docs_dir / "cursos"
    if not courses_dir.exists():
        return []
    return sorted(
        p for p in courses_dir.glob("*.md") if not p.stem.startswith("_")
    )


def list_courses_summary() -> list[CourseSummary]:
    result: list[CourseSummary] = []
    for path in _iter_course_files():
        post = frontmatter.load(path)
        meta = post.metadata
        result.append(
            CourseSummary(
                slug=str(meta.get("slug") or path.stem),
                title=str(meta.get("curso") or path.stem),
                centro=meta.get("centro"),
                grau=meta.get("grau"),
                turno=meta.get("turno"),
            )
        )
    return result


def get_course(slug: str) -> Optional[Course]:
    for path in _iter_course_files():
        post = frontmatter.load(path)
        meta = post.metadata
        current_slug = str(meta.get("slug") or path.stem)
        if current_slug != slug:
            continue
        return Course(
            slug=current_slug,
            title=str(meta.get("curso") or path.stem),
            centro=meta.get("centro"),
            grau=meta.get("grau"),
            turno=meta.get("turno"),
            metadata=dict(meta),
            content_md=post.content,
            content_html=_md.render(post.content),
        )
    return None


def search(query: str) -> list[SearchResult]:
    """Busca simples e case-insensitive no conteúdo Markdown."""
    q = query.lower().strip()
    if not q:
        return []
    results: list[SearchResult] = []

    for slug in SLUG_MAP:
        section = get_section(slug)
        if section and q in section.content_md.lower():
            results.append(
                SearchResult(
                    type="section",
                    slug=section.slug,
                    title=section.title,
                    snippet=_snippet(section.content_md, q),
                )
            )

    for path in _iter_course_files():
        post = frontmatter.load(path)
        meta = post.metadata
        title = str(meta.get("curso") or path.stem)
        if q in post.content.lower() or q in title.lower():
            results.append(
                SearchResult(
                    type="course",
                    slug=str(meta.get("slug") or path.stem),
                    title=title,
                    snippet=_snippet(post.content, q),
                )
            )
    return results


def _snippet(text: str, query: str, context: int = 80) -> str:
    lower = text.lower()
    idx = lower.find(query)
    if idx == -1:
        return (text[:context] + "…").strip()
    start = max(0, idx - context)
    end = min(len(text), idx + len(query) + context)
    prefix = "…" if start > 0 else ""
    suffix = "…" if end < len(text) else ""
    return (prefix + text[start:end].strip() + suffix).replace("\n", " ")
