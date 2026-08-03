import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection, listSections, type Section } from "@/lib/content";
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

export function generateStaticParams() {
  return listSections().map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return { title: "Seção não encontrada" };
  const title = `${section.title} — Portal dos Calouros UFSC`;
  const description = section.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/secoes/${slug}`,
    },
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  const DedicatedComponent = SECTION_COMPONENTS[slug];

  return (
    <article className="space-y-4">
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
