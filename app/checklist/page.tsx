import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/content";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { SugerirCorrecao } from "@/components/SugerirCorrecao";
import { breadcrumbSchema, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const section = getSection("checklist");
  if (!section) return { title: "Checklist não encontrado" };
  const title = `${section.title} — ${SITE_NAME}`;
  const description = section.description;
  return {
    title,
    description,
    alternates: { canonical: "/checklist" },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl("/checklist"),
      // Ver comentário equivalente em app/faq/page.tsx: `openGraph` aqui
      // substitui o herdado do layout raiz, então a imagem precisa ser
      // reafirmada para não perder o og:image/twitter:image do card padrão.
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ChecklistPage() {
  const section = getSection("checklist");
  if (!section) notFound();

  return (
    <article className="space-y-4">
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: section.title, path: "/checklist" },
        ])}
      />

      <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary-link hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{section.title}</h1>
        <p className="text-muted-foreground mt-1">{section.description}</p>
      </header>

      <ChecklistSection blocks={section.blocks} />

      <SugerirCorrecao titulo={section.title} caminho="/checklist" />
    </article>
  );
}
