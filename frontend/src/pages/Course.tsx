import { ChevronLeft, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { type ElementType, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { ErrorBox, Loading } from "@/components/StateMessages";
import { api } from "@/lib/api";

interface CoordenacaoMeta {
  email?: string;
  telefone?: string;
  site?: string;
  sala?: string;
  atendimento?: string;
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

  if (isLoading) return <Loading label="Carregando ficha do curso…" />;
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

      <header className="card p-6 sm:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-brand-blue uppercase tracking-wide">
            {data.centro}
          </p>
          <h1 className="text-2xl font-bold leading-snug">{data.title}</h1>
          <p className="text-ink-secondary text-sm mt-0.5">
            {[data.grau, data.turno].filter(Boolean).join(" · ")}
          </p>
        </div>

        {coordenacao && (
          <div className="mt-6 pt-5 border-t border-surface-border">
            <h2 className="text-xs font-semibold text-ink-secondary uppercase tracking-wide mb-3">
              Coordenação
            </h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              {coordenacao.email && (
                <ContactItem icon={Mail} label="E-mail">
                  <a href={`mailto:${coordenacao.email}`}>{coordenacao.email}</a>
                </ContactItem>
              )}
              {coordenacao.telefone && (
                <ContactItem icon={Phone} label="Telefone">
                  <a href={`tel:${coordenacao.telefone.replace(/\D/g, "")}`}>
                    {coordenacao.telefone}
                  </a>
                </ContactItem>
              )}
              {coordenacao.sala && (
                <ContactItem icon={MapPin} label="Sala">
                  {coordenacao.sala}
                </ContactItem>
              )}
              {coordenacao.atendimento && (
                <ContactItem icon={Clock} label="Atendimento">
                  {coordenacao.atendimento}
                </ContactItem>
              )}
              {coordenacao.site && (
                <ContactItem icon={Globe} label="Site" className="sm:col-span-2">
                  <a href={coordenacao.site} target="_blank" rel="noopener noreferrer">
                    {coordenacao.site}
                  </a>
                </ContactItem>
              )}
            </dl>
          </div>
        )}
      </header>

      <div className="card p-6 sm:p-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: data.content_html }}
        />
      </div>
    </article>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
  className = "",
}: {
  icon: ElementType;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-2.5 ${className}`}>
      <Icon size={15} className="text-brand-blue flex-shrink-0 mt-0.5" aria-hidden />
      <div className="min-w-0">
        <dt className="text-xs text-ink-secondary">{label}</dt>
        <dd className="text-sm text-ink-primary mt-0.5 font-medium">{children}</dd>
      </div>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      to="/cursos"
      className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline"
    >
      <ChevronLeft size={15} aria-hidden />
      Todos os cursos
    </Link>
  );
}
