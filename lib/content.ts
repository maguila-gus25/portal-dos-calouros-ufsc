import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const DOCS_DIR = path.join(process.cwd(), "docs");

export interface SectionSummary {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface Section extends SectionSummary {
  content_md: string;
  content_html: string;
  metadata: Record<string, unknown>;
}

export interface CourseSummary {
  slug: string;
  title: string;
  centro?: string | null;
  grau?: string | null;
  turno?: string | null;
}

export interface Course extends CourseSummary {
  metadata: Record<string, unknown>;
  content_md: string;
  content_html: string;
}

export interface SearchResult {
  type: "section" | "course";
  slug: string;
  title: string;
  snippet: string;
}

export interface CenterSummary {
  slug: string;
  title: string;
  description: string;
}

export interface Center extends CenterSummary {
  metadata: Record<string, unknown>;
  content_md: string;
  content_html: string;
}

const SLUG_MAP: Record<string, { file: string; title: string; description: string; icon: string }> = {
  coordenacoes: { file: "coordenacoes.md", title: "Coordenações", description: "Contatos das coordenações de cada curso do CTC.", icon: "🏛️" },
  ru: { file: "carteira-ru.md", title: "Carteira do RU", description: "Como se cadastrar e usar o Restaurante Universitário.", icon: "🍽️" },
  links: { file: "links-importantes.md", title: "Links importantes", description: "CAGR, Moodle, SETIC, e-mail institucional e afins.", icon: "🔗" },
  datas: { file: "datas-importantes.md", title: "Datas importantes", description: "Calendário acadêmico, matrícula, recesso.", icon: "📅" },
  atleticas: { file: "atleticas-e-festas.md", title: "Atléticas e festas", description: "Atléticas de cada curso e festas tradicionais.", icon: "🎉" },
  instagrams: { file: "instagrams.md", title: "Instagrams e perfis", description: "Perfis oficiais e estudantis para acompanhar.", icon: "📸" },
  mapa: { file: "mapa.md", title: "Mapa da universidade", description: "Onde ficam os prédios, RU, biblioteca, coordenações.", icon: "🗺️" },
  historias: { file: "historias-e-feedbacks.md", title: "Histórias e feedbacks", description: "Relatos de veteranos e como enviar o seu.", icon: "💬" },
  faq: { file: "faq.md", title: "FAQ — Perguntas frequentes", description: "Respostas rápidas para as dúvidas mais comuns dos calouros do CTC da UFSC.", icon: "❓" },
  checklist: {
    file: "checklist-primeira-semana.md",
    title: "Checklist da primeira semana",
    description: "O que fazer nos primeiros dias como calouro do CTC da UFSC — passo a passo, em ordem de urgência.",
    icon: "✅"
  },
};

function renderMd(md: string): string {
  const html = marked(md, { async: false }) as string;
  // Strip the leading <h1> — page components render section.title as <h1> already
  return html.replace(/^<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

export function listSections(): SectionSummary[] {
  return Object.entries(SLUG_MAP).map(([slug, meta]) => ({
    slug,
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
  }));
}

export function getSection(slug: string): Section | null {
  const meta = SLUG_MAP[slug];
  if (!meta) return null;
  const filePath = path.join(DOCS_DIR, meta.file);
  if (!fs.existsSync(filePath)) return null;
  const { content, data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    slug,
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
    content_md: content,
    content_html: renderMd(content),
    metadata: data as Record<string, unknown>,
  };
}

function iterCourseFiles(): string[] {
  const coursesDir = path.join(DOCS_DIR, "cursos");
  if (!fs.existsSync(coursesDir)) return [];
  return fs.readdirSync(coursesDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => path.join(coursesDir, f));
}

export function listCourses(): CourseSummary[] {
  return iterCourseFiles().map((filePath) => {
    const { data } = matter(fs.readFileSync(filePath, "utf-8"));
    const slug = String(data.slug ?? path.basename(filePath, ".md"));
    return {
      slug,
      title: String(data.curso ?? slug),
      centro: data.centro ?? null,
      grau: data.grau ?? null,
      turno: data.turno ?? null,
    };
  });
}

export function getCourse(slug: string): Course | null {
  for (const filePath of iterCourseFiles()) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(raw);
    const currentSlug = String(data.slug ?? path.basename(filePath, ".md"));
    if (currentSlug !== slug) continue;
    return {
      slug: currentSlug,
      title: String(data.curso ?? slug),
      centro: data.centro ?? null,
      grau: data.grau ?? null,
      turno: data.turno ?? null,
      metadata: data as Record<string, unknown>,
      content_md: content,
      content_html: renderMd(content),
    };
  }
  return null;
}

function iterCenterFiles(): string[] {
  const centersDir = path.join(DOCS_DIR, "centros");
  if (!fs.existsSync(centersDir)) return [];
  return fs.readdirSync(centersDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => path.join(centersDir, f));
}

export function listCenters(): CenterSummary[] {
  return iterCenterFiles().map((filePath) => {
    const { data } = matter(fs.readFileSync(filePath, "utf-8"));
    const slug = String(data.slug ?? path.basename(filePath, ".md"));
    return {
      slug,
      title: String(data.titulo ?? slug),
      description: String(data.descricao ?? ""),
    };
  });
}

export function getCenter(slug: string): Center | null {
  for (const filePath of iterCenterFiles()) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(raw);
    const currentSlug = String(data.slug ?? path.basename(filePath, ".md"));
    if (currentSlug !== slug) continue;
    return {
      slug: currentSlug,
      title: String(data.titulo ?? slug),
      description: String(data.descricao ?? ""),
      metadata: data as Record<string, unknown>,
      content_md: content,
      content_html: renderMd(content),
    };
  }
  return null;
}

function snippet(text: string, query: string, context = 80): string {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query);
  if (idx === -1) return (text.slice(0, context) + "…").trim();
  const start = Math.max(0, idx - context);
  const end = Math.min(text.length, idx + query.length + context);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return (prefix + text.slice(start, end).trim() + suffix).replace(/\n/g, " ");
}

export function search(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: SearchResult[] = [];

  for (const slug of Object.keys(SLUG_MAP)) {
    const section = getSection(slug);
    if (section && section.content_md.toLowerCase().includes(q)) {
      results.push({ type: "section", slug: section.slug, title: section.title, snippet: snippet(section.content_md, q) });
    }
  }

  for (const filePath of iterCourseFiles()) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(raw);
    const title = String(data.curso ?? path.basename(filePath, ".md"));
    const courseSlug = String(data.slug ?? path.basename(filePath, ".md"));
    if (content.toLowerCase().includes(q) || title.toLowerCase().includes(q)) {
      results.push({ type: "course", slug: courseSlug, title, snippet: snippet(content, q) });
    }
  }

  return results;
}
