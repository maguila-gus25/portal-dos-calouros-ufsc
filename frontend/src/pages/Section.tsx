import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { ErrorBox, Loading } from "@/components/StateMessages";
import { api } from "@/lib/api";

export function SectionPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section", slug],
    queryFn: () => api.getSection(slug),
    enabled: Boolean(slug),
  });

  if (isLoading) return <Loading />;
  if (isError) {
    const message =
      error instanceof Error && error.message.includes("404")
        ? `Seção "${slug}" não foi encontrada.`
        : undefined;
    return (
      <div className="space-y-3">
        <BackLink />
        <ErrorBox message={message} />
      </div>
    );
  }
  if (!data) return null;

  return (
    <article className="space-y-4">
      <BackLink />
      <header className="card p-6">
        <div className="flex items-center gap-3">
          <span aria-hidden className="text-3xl">
            {data.icon}
          </span>
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-ink-secondary text-sm">{data.description}</p>
          </div>
        </div>
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
    <Link to="/" className="text-sm text-brand-blue hover:underline">
      ← Voltar para o início
    </Link>
  );
}
