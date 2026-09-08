import { describe, expect, it } from "vitest";
import { getSection } from "@/lib/content";
import {
  absoluteUrl,
  breadcrumbSchema,
  courseSchema,
  faqPageSchema,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

describe("absoluteUrl", () => {
  it("raiz retorna a SITE_URL sem barra dobrada", () => {
    expect(absoluteUrl("/")).toBe(SITE_URL);
  });

  it("caminho com barra inicial é concatenado direto", () => {
    expect(absoluteUrl("/faq")).toBe(`${SITE_URL}/faq`);
  });

  it("caminho sem barra inicial recebe uma barra", () => {
    expect(absoluteUrl("faq")).toBe(`${SITE_URL}/faq`);
  });
});

describe("organizationSchema / websiteSchema", () => {
  it("o portal nunca é marcado como EducationalOrganization/CollegeOrUniversity", () => {
    const org = organizationSchema();
    expect(org["@type"]).toBe("Organization");
  });

  it("websiteSchema referencia a organização pelo mesmo @id", () => {
    const org = organizationSchema();
    const site = websiteSchema();
    expect((site.publisher as { "@id": string })["@id"]).toBe(org["@id"]);
  });
});

describe("breadcrumbSchema", () => {
  it("gera um ListItem por crumb, com posição 1-based e URL absoluta", () => {
    const schema = breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]);
    const items = schema.itemListElement as Array<Record<string, unknown>>;
    expect(items).toHaveLength(2);
    expect(items[0]).toMatchObject({ position: 1, name: "Início", item: SITE_URL });
    expect(items[1]).toMatchObject({ position: 2, name: "FAQ", item: `${SITE_URL}/faq` });
  });
});

describe("courseSchema", () => {
  it("nunca declara offers, hasCourseInstance ou courseCode (dados não confirmados)", () => {
    const schema = courseSchema({
      slug: "ciencias-da-computacao",
      title: "Ciências da Computação",
      grau: "Bacharelado",
      description: "Descrição do curso.",
    });
    expect(schema).not.toHaveProperty("offers");
    expect(schema).not.toHaveProperty("hasCourseInstance");
    expect(schema).not.toHaveProperty("courseCode");
    expect(schema.educationalCredentialAwarded).toBe("Bacharelado");
    expect(schema.provider).toMatchObject({ "@type": "CollegeOrUniversity" });
  });

  it("sem grau informado, não declara educationalCredentialAwarded", () => {
    const schema = courseSchema({
      slug: "curso-sem-grau",
      title: "Curso sem grau",
      description: "Descrição.",
    });
    expect(schema).not.toHaveProperty("educationalCredentialAwarded");
  });
});

describe("faqPageSchema (cobre stripHtml indiretamente — a função não é exportada)", () => {
  it("a partir do FAQ real em docs/faq.md, gera perguntas e respostas em texto puro", () => {
    const section = getSection("faq");
    expect(section).not.toBeNull();

    const schema = faqPageSchema(section!.blocks);
    expect(schema).not.toBeNull();
    expect(schema?.["@type"]).toBe("FAQPage");

    const questions = schema?.mainEntity as Array<{
      name: string;
      acceptedAnswer: { text: string };
    }>;
    expect(questions.length).toBeGreaterThan(0);

    for (const question of questions) {
      expect(question.name.length).toBeGreaterThan(0);
      expect(question.acceptedAnswer.text.length).toBeGreaterThan(0);
      // stripHtml precisa ter removido toda marcação HTML e entidades.
      expect(question.name).not.toMatch(/<[^>]+>/);
      expect(question.acceptedAnswer.text).not.toMatch(/<[^>]+>/);
      expect(question.acceptedAnswer.text).not.toMatch(/&(nbsp|amp|lt|gt|quot|#39);/);
    }
  });

  it("sem H3 nenhum, não há perguntas — retorna null", () => {
    expect(faqPageSchema([{ type: "paragraph", html: "Só um parágrafo, sem perguntas." }])).toBeNull();
  });

  it("blocks vazio retorna null", () => {
    expect(faqPageSchema([])).toBeNull();
  });

  it("uma pergunta (H3) seguida de parágrafo com HTML inline vira texto puro na resposta", () => {
    const schema = faqPageSchema([
      { type: "heading", depth: 3, text: "Pergunta?", html: "Pergunta?" },
      { type: "paragraph", html: "Resposta com <strong>negrito</strong> e um &amp; comercial." },
    ]);
    expect(schema?.mainEntity).toEqual([
      {
        "@type": "Question",
        name: "Pergunta?",
        acceptedAnswer: { "@type": "Answer", text: "Resposta com negrito e um & comercial." },
      },
    ]);
  });

  it("H3 sem nenhum bloco de resposta depois não vira pergunta (resposta vazia é descartada)", () => {
    const schema = faqPageSchema([{ type: "heading", depth: 3, text: "Pergunta órfã", html: "Pergunta órfã" }]);
    expect(schema).toBeNull();
  });
});
