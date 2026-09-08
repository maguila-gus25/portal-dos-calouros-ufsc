/**
 * Valida o frontmatter YAML das fichas de curso (`docs/cursos/*.md`) e
 * de centro (`docs/centros/*.md`).
 *
 * Por que este script existe: `gray-matter` lança exceção quando o YAML do
 * frontmatter está malformado. Em produção, `lib/content.ts` usa
 * `safeMatter()` para degradar graciosamente — um arquivo quebrado é
 * simplesmente pulado, e a ficha some do site sem erro visível em lugar
 * nenhum. Esse comportamento é o correto em runtime, mas significa que um
 * PR de conteúdo com YAML quebrado ou campo obrigatório ausente pode
 * mergear sem o CI reclamar. Este script é a rede de segurança: roda no CI
 * a cada PR e falha de forma visível antes do merge.
 *
 * Regra importante: um campo com valor "_A preencher_" NÃO é erro — é a
 * convenção do projeto para dado ainda não confirmado (ver CLAUDE.md).
 * Este script nunca deve criar pressão para inventar dado.
 *
 * Uso: node scripts/validate-frontmatter.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");

/** @type {{ dir: string, campos: string[] }[]} */
const ALVOS = [
  { dir: "docs/cursos", campos: ["curso", "slug", "centro"] },
  { dir: "docs/centros", campos: ["slug", "titulo"] },
];

/** Lista os arquivos .md de um diretório (não recursivo), em ordem alfabética. */
function listarMarkdown(dirRelativo) {
  const dirAbsoluto = join(rootDir, dirRelativo);
  return readdirSync(dirAbsoluto)
    .filter((nome) => nome.endsWith(".md"))
    .sort()
    .map((nome) => join(dirAbsoluto, nome));
}

/**
 * Verifica se um valor de campo obrigatório está "vazio" — não conta o
 * placeholder "_A preencher_" (nem variações com espaço em volta) como
 * ausente, pois essa é a convenção do projeto para dado não confirmado.
 */
function campoAusente(valor) {
  if (valor === undefined || valor === null) return true;
  if (typeof valor === "string" && valor.trim() === "") return true;
  return false;
}

let totalArquivos = 0;
const erros = [];

for (const { dir, campos } of ALVOS) {
  const arquivos = listarMarkdown(dir);

  for (const caminhoAbsoluto of arquivos) {
    totalArquivos += 1;
    const caminhoRelativo = relative(rootDir, caminhoAbsoluto);
    const conteudoBruto = readFileSync(caminhoAbsoluto, "utf-8");

    let dados;
    try {
      ({ data: dados } = matter(conteudoBruto));
    } catch (err) {
      erros.push(
        `${caminhoRelativo}\n` +
          `  O frontmatter (o bloco entre "---" no topo do arquivo) não pôde ser lido.\n` +
          `  Provavelmente falta um espaço depois dos ":", uma indentação está errada,\n` +
          `  ou um texto com ":" ou aspas não está entre aspas.\n` +
          `  Mensagem original do parser: ${err.message}`
      );
      continue;
    }

    for (const campo of campos) {
      if (campoAusente(dados[campo])) {
        erros.push(
          `${caminhoRelativo}\n` +
            `  Campo obrigatório "${campo}" está ausente ou vazio no frontmatter.\n` +
            `  Se o dado ainda não foi confirmado, use o valor "_A preencher_" em vez de deixar em branco.`
        );
      }
    }
  }
}

if (erros.length > 0) {
  console.error(`\nValidação de frontmatter falhou (${erros.length} problema(s) em ${totalArquivos} arquivo(s) verificados):\n`);
  for (const erro of erros) {
    console.error(`✗ ${erro}\n`);
  }
  console.error(
    "Corrija o frontmatter dos arquivos acima. Consulte docs/_modelo-curso.md como referência\n" +
      "de estrutura, e lembre-se: campos não confirmados devem usar \"_A preencher_\", nunca ser\n" +
      "inventados nem deixados em branco."
  );
  process.exit(1);
}

console.log(`✓ Frontmatter válido em todos os ${totalArquivos} arquivos verificados (docs/cursos/ e docs/centros/).`);
