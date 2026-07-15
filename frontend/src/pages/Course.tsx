import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { ErrorBox, Loading } from "@/components/StateMessages";
import { api } from "@/lib/api";

interface CoordenacaoMeta {
  email?: string;
  telefone?: string;
  site?: string;
}

function getCoordenacao(metadata: Record<string, unknown>): CoordenacaoMeta | null {
  const raw = metadata.coordenacao;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    return raw as CoordenacaoMeta;
  }
  return null;
}

export function CoursePage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["course", slug],
    queryFn: () => api.getCourse(slug),
    enabled: Boolean(slug),
  });

  if (isLoading) return <Loading />;
  if (isError) {
    const message =
      error instanceof Error && error.message.includes("404")
        ? `Ficha do curso "${slug}" não foi encontrada.`
        : undefined;
    return (
      <div className="space-y-3">
        <BackLink />
        <ErrorBox message={message} />
      </div>
    );
  }
  if (!data) return null;

  const coordenacao = getCoordenacao(data.metadata);

  return (
    <article className="space-y-4">
      <BackLink />
      <header className="card p-6">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-ink-secondary text-sm mt-1">
          {[data.grau, data.turno, data.centro].filter(Boolean).join(" • ")}
        </p>

        {coordenacao && (
          <dl className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
            {coordenacao.email && (
              <div>
                <dt className="text-ink-secondary">E-mail</dt>
                <dd>
                  <a href={`mailto:${coordenacao.email}`}>{coordenacao.email}</a>
                </dd>
              </div>
            )}
            {coordenacao.telefone && (
              <div>
                <dt className="text-ink-secondary">Telefone</dt>
                <dd>{coordenacao.telefone}</dd>
              </div>
            )}
            {coordenacao.site && (
              <div>
                <dt className="text-ink-secondary">Site</dt>
                <dd>
                  <a
                    href={coordenacao.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {coordenacao.site}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        )}
      </header>

      <div className="card p-6">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: data.content_html }}
        />
      </div>
    </article>
  );
}

function BackLink() {
  return (
    <Link to="/cursos" className="text-sm text-brand-blue hover:underline">
      ← Voltar para todos os cursos
    </Link>
  );
}
