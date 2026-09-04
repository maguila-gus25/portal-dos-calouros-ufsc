import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { getSection, listSections, type Section } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { DatasSection } from "@/components/sections/DatasSection";
import { HistoriasSection } from "@/components/sections/HistoriasSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LinksSection } from "@/components/sections/LinksSection";
import { RuSection } from "@/components/sections/RuSection";

// Slugs with dedicated, structured UI. Everything else keeps the `.prose-content` fallback.
const SECTION_COMPONENTS: Record<string, (props: { section: Section }) => ReactElement> = {
  links: ({ section }) => <LinksSection blocks={section.blocks} />,
  datas: ({ section }) => <DatasSection blocks={section.blocks} />,
  ru: ({ section }) => <RuSection blocks={section.blocks} />,
  instagrams: ({ section }) => <InstagramSection blocks={section.blocks} />,
  historias: ({ section }) => <HistoriasSection blocks={section.blocks} />,
};

/**
 * Seções que também têm uma rota dedicada e mais rica. Servir as duas URLs com
 * o mesmo texto dividia o sinal de busca entre elas (conteúdo duplicado), e as
 * duas estavam no sitemap. A rota dedicada é a canônica; esta redireciona.
 */
const DEDICATED_ROUTES: Record<string, string> = {
  faq: "/faq",
  checklist: "/checklist",
  mapa: "/mapa",
};

export function generateStaticParams() {
  return listSections()
    .filter((s) => !(s.slug in DEDICATED_ROUTES))
    .map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return { title: "Seção não encontrada" };
  const title = `${section.title} — ${SITE_NAME}`;
  const description = section.description;
  return {
    title,
    description,
    alternates: { canonical: `/secoes/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(`/secoes/${slug}`),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;

  const dedicated = DEDICATED_ROUTES[slug];
  if (dedicated) permanentRedirect(dedicated);

  const section = getSection(slug);
  if (!section) notFound();

  const DedicatedComponent = SECTION_COMPONENTS[slug];

  return (
    <article className="space-y-4">
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: section.title, path: `/secoes/${slug}` },
        ])}
      />

      <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{section.title}</h1>
        <p className="text-muted-foreground mt-1">{section.description}</p>
      </header>

      {DedicatedComponent ? (
        <DedicatedComponent section={section} />
      ) : (
        <div className="card p-6 sm:p-8">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: section.content_html }}
          />
        </div>
      )}
    </article>
  );
}
