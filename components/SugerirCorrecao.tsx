import { PencilLine } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

const REPO_URL = "https://github.com/maguila-gus25/portal-dos-calouros-ufsc";
const TEMPLATE = "atualizacao-conteudo.yml";

interface SugerirCorrecaoProps {
  /** Título da página onde o link aparece — vira o título da issue. */
  titulo: string;
  /**
   * Caminho da página de origem (ex.: `/cursos/engenharia-eletrica`).
   * Vira a URL canônica que entra no corpo da issue, como referência de onde
   * o calouro encontrou a informação.
   */
  caminho: string;
  /** Classe extra opcional para ajustar o encaixe no layout do chamador. */
  className?: string;
  /**
   * Nome acessível do link. Só precisa ser passado quando o link não se refere
   * à página em que aparece — é o caso da instância do rodapé, que é global e
   * aponta sempre para a home, mesmo quando o leitor está numa ficha de curso.
   */
  rotulo?: string;
  /**
   * Texto de introdução, antes do link. Sobrescreve o padrão pensado para o
   * rodapé do site (link genérico, sem contexto de página específica), onde
   * é importante deixar explícito que o destino são os mantenedores
   * estudantis — não um canal da UFSC.
   */
  contexto?: string;
}

/**
 * Monta a URL de "nova issue" do GitHub pré-preenchida com o template
 * `atualizacao-conteudo.yml`. Deliberadamente não pré-preenchemos o campo
 * `arquivo` (dropdown): o GitHub só aceita um valor que bata exatamente com
 * uma das opções e ignora qualquer outro silenciosamente. A página de origem
 * vai no corpo (`dado_atual`) para dar contexto ao mantenedor de qualquer
 * forma.
 */
function buildIssueUrl(titulo: string, caminho: string): string {
  const origem = absoluteUrl(caminho);
  const title = `[Conteúdo] ${titulo}`;
  const dadoAtual = `Página de origem: ${origem}\n\nDescreva aqui o que está errado ou desatualizado:\n`;

  const params = new URLSearchParams({
    template: TEMPLATE,
    title,
    dado_atual: dadoAtual,
  });

  return `${REPO_URL}/issues/new?${params.toString()}`;
}

/**
 * Link discreto (não é um CTA primário) para abrir, em nova aba, uma issue
 * do GitHub já preenchida com o contexto da página. Deixa claro que a
 * sugestão vai para os estudantes que mantêm o portal, não para a UFSC.
 */
export function SugerirCorrecao({
  titulo,
  caminho,
  className = "",
  contexto = "Achou algo errado ou desatualizado nesta página?",
  rotulo = "Sugerir correção para esta página aos mantenedores estudantis (abre uma issue no GitHub em nova aba)",
}: SugerirCorrecaoProps) {
  const href = buildIssueUrl(titulo, caminho);

  return (
    <p className={`text-sm text-foreground flex flex-wrap items-center gap-1.5 ${className}`}>
      <span>{contexto}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={rotulo}
        className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-primary-link hover:underline font-semibold"
      >
        <PencilLine size={16} aria-hidden="true" />
        Sugerir correção
      </a>
    </p>
  );
}
