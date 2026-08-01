import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Token, Tokens } from "marked";

const DOCS_DIR = path.join(process.cwd(), "docs");

export interface SectionSummary {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

/** Rendered inline markdown (bold, links, code…) alongside the raw source text. */
export interface InlineContent {
  text: string;
  html: string;
}

export type SectionBlock =
  | { type: "heading"; depth: number; text: string; html: string }
  | { type: "paragraph"; html: string }
  | { type: "list"; ordered: boolean; items: InlineContent[] }
  | {
      type: "table";
      align: Array<"left" | "center" | "right" | null>;
      header: InlineContent[];
      rows: InlineContent[][];
    }
  | { type: "blockquote"; html: string }
  | { type: "code"; text: string; lang?: string }
  | { type: "hr" };

export interface Section extends SectionSummary {
  content_md: string;
  content_html: string;
  /** Structured blocks derived from parsing content_md — used by dedicated UI components. */
  blocks: SectionBlock[];
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

/** Renders raw inline markdown (e.g. a heading/paragraph/table-cell's `.text`) to HTML. */
function inlineHtml(text: string): string {
  return marked.parseInline(text, { async: false }) as string;
}

/** Renders a list item's tokens (which may include nested block content) to HTML, unwrapping a single wrapping <p> for tight lists. */
function listItemHtml(tokens: Token[]): string {
  const html = marked.parser(tokens, { async: false }) as string;
  const match = html.match(/^<p>([\s\S]*)<\/p>\s*$/);
  return (match ? match[1] : html).trim();
}

/**
 * Parses raw markdown into structured blocks (headings, paragraphs, lists, tables…) using
 * marked's own lexer — no content is duplicated or hand-authored here, it's all derived from
 * the same docs/*.md source used for content_html.
 */
export function parseBlocks(md: string): SectionBlock[] {
  const tokens = marked.lexer(md, { gfm: true });
  const blocks: SectionBlock[] = [];

  for (const token of tokens) {
    switch (token.type) {
      case "heading": {
        const heading = token as Tokens.Heading;
        // Strip the leading H1 — page components render section.title as <h1> already.
        if (heading.depth === 1 && blocks.length === 0) continue;
        blocks.push({ type: "heading", depth: heading.depth, text: heading.text, html: inlineHtml(heading.text) });
        break;
      }
      case "paragraph": {
        const paragraph = token as Tokens.Paragraph;
        blocks.push({ type: "paragraph", html: inlineHtml(paragraph.text) });
        break;
      }
      case "list": {
        const list = token as Tokens.List;
        blocks.push({
          type: "list",
          ordered: list.ordered,
          items: list.items.map((item: Tokens.ListItem) => ({ text: item.text, html: listItemHtml(item.tokens) })),
        });
        break;
      }
      case "table": {
        const table = token as Tokens.Table;
        blocks.push({
          type: "table",
          align: table.align,
          header: table.header.map((cell: Tokens.TableCell) => ({ text: cell.text, html: inlineHtml(cell.text) })),
          rows: table.rows.map((row: Tokens.TableCell[]) =>
            row.map((cell) => ({ text: cell.text, html: inlineHtml(cell.text) }))
          ),
        });
        break;
      }
      case "blockquote": {
        const blockquote = token as Tokens.Blockquote;
        blocks.push({ type: "blockquote", html: marked.parser(blockquote.tokens, { async: false }) as string });
        break;
      }
      case "code": {
        const code = token as Tokens.Code;
        blocks.push({ type: "code", text: code.text, lang: code.lang });
        break;
      }
      case "hr":
        blocks.push({ type: "hr" });
        break;
      // "space" and any other block types are not meaningful for structured UI — skip them.
      default:
        break;
    }
  }

  return blocks;
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
    blocks: parseBlocks(content),
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
