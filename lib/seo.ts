import type { SectionBlock } from "./content";

/**
 * URL base do site. Fonte única — antes estava duplicada em cada página.
 * Definir NEXT_PUBLIC_SITE_URL na Vercel para ambientes de preview.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export const SITE_NAME = "Portal dos Calouros UFSC";

/**
 * Aviso obrigatório do projeto (ver CLAUDE.md). Entra no JSON-LD para que
 * buscadores e assistentes de IA que citarem o portal não o apresentem como
 * fonte oficial da UFSC.
 */
export const DISCLAIMER =
  "Projeto independente feito por estudantes. Não é um site oficial da UFSC.";

/** Caminho relativo → URL absoluta. */
export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/* ────────────────────────────── JSON-LD ────────────────────────────── */

type JsonLdObject = Record<string, unknown>;

/**
 * Identidade do portal. Deliberadamente `Organization` e NÃO
 * `CollegeOrUniversity`/`EducationalOrganization`: o portal não é a UFSC nem
 * uma instituição de ensino, e marcá-lo como tal induziria buscadores e
 * assistentes de IA a tratá-lo como fonte oficial.
 */
export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DISCLAIMER,
    disambiguatingDescription: DISCLAIMER,
    knowsAbout: [
      "Universidade Federal de Santa Catarina",
      "vida universitária",
      "ingresso na universidade",
      "Restaurante Universitário",
      "calendário acadêmico",
    ],
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/**
 * BreadcrumbList. Ajuda buscadores a entender a hierarquia e faz o caminho
 * aparecer no lugar da URL crua no resultado de busca.
 */
export function breadcrumbSchema(crumbs: Crumb[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Remove tags HTML e normaliza espaços — JSON-LD espera texto puro. */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * FAQPage a partir dos blocos do FAQ em Markdown.
 *
 * Espelha a estrutura que `FaqSection` já assume: H2 = categoria, H3 =
 * pergunta, blocos seguintes = resposta. Blockquotes (as notas de fonte) ficam
 * de fora — são metadados de procedência, não parte da resposta.
 */
export function faqPageSchema(blocks: SectionBlock[]): JsonLdObject | null {
  const questions: Array<{ question: string; answer: string }> = [];

  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = currentAnswer.join(" ").trim();
      if (answer) questions.push({ question: currentQuestion, answer });
    }
    currentQuestion = null;
    currentAnswer = [];
  };

  for (const block of blocks) {
    if (block.type === "heading" && block.depth === 3) {
      flush();
      currentQuestion = stripHtml(block.html);
    } else if (block.type === "heading" && block.depth <= 2) {
      flush();
    } else if (currentQuestion) {
      if (block.type === "paragraph") {
        currentAnswer.push(stripHtml(block.html));
      } else if (block.type === "list") {
        currentAnswer.push(block.items.map((item) => stripHtml(item.html)).join(" "));
      }
    }
  }
  flush();

  if (questions.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "pt-BR",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export interface CourseSchemaInput {
  slug: string;
  title: string;
  grau?: string | null;
  description: string;
}

/**
 * Course. `provider` é a UFSC — ela oferece o curso, o portal apenas o
 * documenta. Sem `offers`/`hasCourseInstance`: o portal não tem dado
 * confirmado de preço ou de turma, e inventá-lo violaria a regra de nunca
 * publicar informação sem fonte.
 */
export function courseSchema(course: CourseSchemaInput): JsonLdObject {
  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: absoluteUrl(`/cursos/${course.slug}`),
    inLanguage: "pt-BR",
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Santa Catarina",
      url: "https://ufsc.br/",
    },
    isAccessibleForFree: true,
  };

  // Sem `courseCode`: o portal não conhece o código do curso no CAGR, e o
  // centro (CTC, CCE…) não é um — preenchê-lo com ele seria dado incorreto.
  if (course.grau) schema.educationalCredentialAwarded = course.grau;

  return schema;
}
