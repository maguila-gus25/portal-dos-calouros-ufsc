import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/content";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
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

      <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{section.title}</h1>
        <p className="text-muted-foreground mt-1">{section.description}</p>
      </header>

      <ChecklistSection blocks={section.blocks} />
    </article>
  );
}
