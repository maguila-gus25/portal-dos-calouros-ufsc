import fs from "fs";
import { describe, expect, it, vi, afterEach } from "vitest";
import {
  parseBlocks,
  listSections,
  getSection,
  listCourses,
  getCourse,
  listCenters,
  getCenter,
  search,
} from "@/lib/content";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("parseBlocks", () => {
  it("markdown vazio não gera blocos", () => {
    expect(parseBlocks("")).toEqual([]);
  });

  it("um H1 isolado no início não vira bloco (é renderizado como <h1> pela página)", () => {
    // Espelha o comportamento de renderMd: o H1 do topo é descartado porque os
    // componentes de página já renderizam section.title como <h1>.
    expect(parseBlocks("# Título da página\n")).toEqual([]);
  });

  it("heading (H2+) vira bloco heading com texto e html", () => {
    const blocks = parseBlocks("## Uma categoria\n");
    expect(blocks).toEqual([
      { type: "heading", depth: 2, text: "Uma categoria", html: "Uma categoria" },
    ]);
  });

  it("parágrafo vira bloco paragraph com inline markdown renderizado", () => {
    const blocks = parseBlocks("Isto é um **parágrafo** com destaque.\n");
    expect(blocks).toHaveLength(1);
    expect(blocks[0]).toMatchObject({ type: "paragraph" });
    if (blocks[0].type === "paragraph") {
      expect(blocks[0].html).toContain("<strong>parágrafo</strong>");
    }
  });

  it("lista não ordenada vira bloco list com ordered=false e itens renderizados", () => {
    const blocks = parseBlocks("- item um\n- item **dois**\n");
    expect(blocks).toHaveLength(1);
    const block = blocks[0];
    expect(block).toMatchObject({ type: "list", ordered: false });
    if (block.type === "list") {
      expect(block.items).toHaveLength(2);
      expect(block.items[0]).toEqual({ text: "item um", html: "item um" });
      expect(block.items[1].html).toContain("<strong>dois</strong>");
    }
  });

  it("lista ordenada vira bloco list com ordered=true", () => {
    const blocks = parseBlocks("1. primeiro\n2. segundo\n");
    expect(blocks[0]).toMatchObject({ type: "list", ordered: true });
  });

  it("tabela vira bloco table com header, rows e align preservados", () => {
    const md = [
      "| Período | Início |",
      "|---------|:------:|",
      "| 2026.1 | março |",
      "| 2026.2 | agosto |",
      "",
    ].join("\n");
    const blocks = parseBlocks(md);
    expect(blocks).toHaveLength(1);
    const block = blocks[0];
    expect(block.type).toBe("table");
    if (block.type === "table") {
      expect(block.header).toEqual([
        { text: "Período", html: "Período" },
        { text: "Início", html: "Início" },
      ]);
      expect(block.align).toEqual([null, "center"]);
      expect(block.rows).toHaveLength(2);
      expect(block.rows[0]).toEqual([
        { text: "2026.1", html: "2026.1" },
        { text: "março", html: "março" },
      ]);
    }
  });

  it("bloco de código preserva texto e linguagem", () => {
    const blocks = parseBlocks("```js\nconst x = 1;\n```\n");
    expect(blocks).toEqual([{ type: "code", text: "const x = 1;", lang: "js" }]);
  });

  it("bloco de código sem linguagem informada", () => {
    const blocks = parseBlocks("```\nsem linguagem\n```\n");
    expect(blocks[0]).toMatchObject({ type: "code", text: "sem linguagem" });
  });

  it("linha horizontal vira bloco hr", () => {
    const blocks = parseBlocks("Texto antes.\n\n---\n\nTexto depois.\n");
    expect(blocks.map((b) => b.type)).toEqual(["paragraph", "hr", "paragraph"]);
  });

  it("blockquote vira bloco blockquote com html renderizado", () => {
    const blocks = parseBlocks("> uma nota importante\n");
    expect(blocks).toHaveLength(1);
    expect(blocks[0].type).toBe("blockquote");
    if (blocks[0].type === "blockquote") {
      expect(blocks[0].html).toContain("uma nota importante");
    }
  });
});

describe("getSection", () => {
  it("retorna conteúdo completo para um slug válido do SLUG_MAP", () => {
    const section = getSection("faq");
    expect(section).not.toBeNull();
    expect(section?.slug).toBe("faq");
    expect(section?.title).toBeTruthy();
    expect(section?.description).toBeTruthy();
    expect(section?.icon).toBeTruthy();
    expect(section?.content_md.length).toBeGreaterThan(0);
    expect(section?.content_html.length).toBeGreaterThan(0);
    expect(Array.isArray(section?.blocks)).toBe(true);
    expect(section?.blocks.length).toBeGreaterThan(0);
    expect(typeof section?.metadata).toBe("object");
  });

  it("cada slug listado em listSections também resolve via getSection", () => {
    for (const summary of listSections()) {
      const section = getSection(summary.slug);
      expect(section, `getSection("${summary.slug}") não deveria ser null`).not.toBeNull();
    }
  });

  it("slug inexistente retorna null em vez de lançar", () => {
    expect(() => getSection("isso-nao-existe")).not.toThrow();
    expect(getSection("isso-nao-existe")).toBeNull();
  });

  it("frontmatter ausente não derruba o loader — content_md fica igual ao arquivo inteiro", () => {
    const semFrontmatter = "# Título\n\nTexto sem frontmatter algum.\n";
    vi.spyOn(fs, "readFileSync").mockReturnValueOnce(semFrontmatter);

    const section = getSection("faq");

    expect(section).not.toBeNull();
    expect(section?.metadata).toEqual({});
    expect(section?.content_md).toBe(semFrontmatter);
  });

  // BUG REAL encontrado durante a escrita desta suíte: gray-matter lança uma
  // exceção quando o bloco `---...---` do frontmatter contém YAML inválido
  // (ex.: uma lista não fechada), e nenhuma das funções deste loader
  // (getSection/getCourse/getCenter/listCourses/listCenters) protege a
  // chamada a `matter()` com try/catch. O comportamento correto seria não
  // derrubar o loader — mas hoje ele derruba. `test.fails` documenta a
  // expectativa correta sem quebrar o `npm test`; ver relatório do sprint
  // para o `debugger` acionar o fix.
  it.fails(
    "frontmatter malformado não deveria derrubar o loader (bug conhecido — ver relatório)",
    () => {
      const frontmatterInvalido = "---\nfoo: [nao fechado\nbar: baz\n---\n\n# Título\n\nTexto.\n";
      vi.spyOn(fs, "readFileSync").mockReturnValueOnce(frontmatterInvalido);

      expect(() => getSection("faq")).not.toThrow();
    }
  );
});

describe("getCourse", () => {
  it("uma ficha existente (a partir de listCourses) resolve com os mesmos campos do resumo", () => {
    const [primeiro] = listCourses();
    expect(primeiro).toBeDefined();
    const curso = getCourse(primeiro.slug);
    expect(curso).not.toBeNull();
    expect(curso?.slug).toBe(primeiro.slug);
    expect(curso?.title).toBe(primeiro.title);
    expect(curso?.centro).toBe(primeiro.centro);
    expect(curso?.content_md.length).toBeGreaterThan(0);
    expect(curso?.content_html.length).toBeGreaterThan(0);
    expect(typeof curso?.metadata).toBe("object");
  });

  it("slug inexistente retorna null em vez de lançar", () => {
    expect(() => getCourse("curso-que-nao-existe-xyz")).not.toThrow();
    expect(getCourse("curso-que-nao-existe-xyz")).toBeNull();
  });
});

describe("getCenter", () => {
  it("uma ficha existente (a partir de listCenters) resolve com os mesmos campos do resumo", () => {
    const [primeiro] = listCenters();
    expect(primeiro).toBeDefined();
    const centro = getCenter(primeiro.slug);
    expect(centro).not.toBeNull();
    expect(centro?.slug).toBe(primeiro.slug);
    expect(centro?.title).toBe(primeiro.title);
    expect(centro?.description).toBe(primeiro.description);
    expect(centro?.content_md.length).toBeGreaterThan(0);
    expect(centro?.content_html.length).toBeGreaterThan(0);
  });

  it("slug inexistente retorna null em vez de lançar", () => {
    expect(() => getCenter("centro-que-nao-existe-xyz")).not.toThrow();
    expect(getCenter("centro-que-nao-existe-xyz")).toBeNull();
  });
});

describe("listSections / listCourses / listCenters", () => {
  it("listSections retorna um array não vazio com os campos de resumo esperados", () => {
    const sections = listSections();
    expect(sections.length).toBeGreaterThan(0);
    for (const section of sections) {
      expect(typeof section.slug).toBe("string");
      expect(typeof section.title).toBe("string");
      expect(typeof section.description).toBe("string");
      expect(typeof section.icon).toBe("string");
      expect(section.slug.length).toBeGreaterThan(0);
    }
  });

  it("listCourses retorna um array não vazio com os campos de frontmatter esperados", () => {
    const courses = listCourses();
    expect(courses.length).toBeGreaterThan(0);
    for (const course of courses) {
      expect(typeof course.slug).toBe("string");
      expect(typeof course.title).toBe("string");
      expect(course.slug.length).toBeGreaterThan(0);
      expect(["string", "undefined"].includes(typeof course.centro) || course.centro === null).toBe(
        true
      );
    }
  });

  it("listCenters retorna um array não vazio com os campos de frontmatter esperados", () => {
    const centers = listCenters();
    expect(centers.length).toBeGreaterThan(0);
    for (const center of centers) {
      expect(typeof center.slug).toBe("string");
      expect(typeof center.title).toBe("string");
      expect(typeof center.description).toBe("string");
      expect(center.slug.length).toBeGreaterThan(0);
    }
  });
});

describe("search", () => {
  it("termo existente retorna resultados com snippet não vazio", () => {
    const results = search("CAGR");
    expect(results.length).toBeGreaterThan(0);
    for (const result of results) {
      expect(["section", "course"]).toContain(result.type);
      expect(result.slug.length).toBeGreaterThan(0);
      expect(result.title.length).toBeGreaterThan(0);
      expect(result.snippet.length).toBeGreaterThan(0);
    }
  });

  it("termo inexistente retorna array vazio", () => {
    expect(search("zzzznaoexistenaconteudonenhum12345")).toEqual([]);
  });

  it("string vazia não explode e retorna array vazio", () => {
    expect(() => search("")).not.toThrow();
    expect(search("")).toEqual([]);
  });

  it("string só com espaços também retorna array vazio", () => {
    expect(search("   ")).toEqual([]);
  });

  it("busca é case-insensitive", () => {
    const upper = search("CAGR");
    const lower = search("cagr");
    expect(lower.length).toBe(upper.length);
  });
});
