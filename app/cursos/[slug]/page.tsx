import { ChevronLeft, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse, listCourses } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, courseSchema, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return listCourses().map((c) => ({ slug: c.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

/** Descrição usada tanto na meta tag quanto no JSON-LD — mantém as duas iguais. */
function courseDescription(course: {
  title: string;
  grau?: string | null;
  centro?: string | null;
}): string {
  const grauPart = course.grau ? ` (${course.grau})` : "";
  const centroPart = course.centro ? ` no ${course.centro}` : "";
  return `Ficha do curso de ${course.title}${grauPart}${centroPart} da UFSC — coordenação, atlética, CA e dicas para calouros.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Curso não encontrado" };
  const titleBase = course.centro
    ? `${course.title} — ${course.centro}`
    : course.title;
  const title = `${titleBase} — ${SITE_NAME}`;
  const description = courseDescription(course);
  return {
    title,
    description,
    alternates: { canonical: `/cursos/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/cursos/${slug}`),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

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

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const coordenacao = getCoordenacao(course.metadata);

  return (
    <article className="space-y-4" aria-labelledby="titulo-curso">
      <JsonLd
        schema={courseSchema({
          slug: course.slug,
          title: course.title,
          grau: course.grau,
          description: courseDescription(course),
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Cursos", path: "/cursos" },
          { name: course.title, path: `/cursos/${course.slug}` },
        ])}
      />

      <Link href="/cursos" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Todos os cursos
      </Link>

      <header className="card p-6 sm:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-primary uppercase tracking-wide">{course.centro}</p>
          <h1 id="titulo-curso" className="text-2xl font-bold leading-snug">{course.title}</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            {[course.grau, course.turno].filter(Boolean).join(" · ")}
          </p>
        </div>

        {coordenacao && (
          <div className="mt-6 pt-5 border-t border-border">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Coordenação</h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              {coordenacao.email && (
                <ContactItem icon={Mail} label="E-mail">
                  <a href={`mailto:${coordenacao.email}`}>{coordenacao.email}</a>
                </ContactItem>
              )}
              {coordenacao.telefone && (
                <ContactItem icon={Phone} label="Telefone">
                  <a href={`tel:${coordenacao.telefone.replace(/\D/g, "")}`}>{coordenacao.telefone}</a>
                </ContactItem>
              )}
              {coordenacao.sala && (
                <ContactItem icon={MapPin} label="Sala">{coordenacao.sala}</ContactItem>
              )}
              {coordenacao.atendimento && (
                <ContactItem icon={Clock} label="Atendimento">{coordenacao.atendimento}</ContactItem>
              )}
              {coordenacao.site && (
                <ContactItem icon={Globe} label="Site" className="sm:col-span-2">
                  <a
                    href={coordenacao.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Site da coordenação de ${course.title} (abre em nova aba)`}
                  >
                    {coordenacao.site}
                  </a>
                </ContactItem>
              )}
            </dl>
          </div>
        )}
      </header>

      <div className="card p-6 sm:p-8">
        <div className="prose-content" dangerouslySetInnerHTML={{ __html: course.content_html }} />
      </div>
    </article>
  );
}

function ContactItem({
  icon: Icon, label, children, className = "",
}: {
  icon: ElementType; label: string; children: ReactNode; className?: string;
}) {
  return (
    <div className={`flex items-start gap-2.5 ${className}`}>
      <Icon size={15} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
      <div className="min-w-0">
        <dt className="text-xs text-muted-foreground">{label}</dt>
        <dd className="text-sm text-foreground mt-0.5 font-medium">{children}</dd>
      </div>
    </div>
  );
}
