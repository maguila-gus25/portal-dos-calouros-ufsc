import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/content";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const section = getSection("faq");
  if (!section) return { title: "FAQ não encontrado" };
  const title = `${section.title} — ${SITE_NAME}`;
  const description = section.description;
  return {
    title,
    description,
    alternates: { canonical: "/faq" },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl("/faq"),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function FaqPage() {
  const section = getSection("faq");
  if (!section) notFound();

  const faqSchema = faqPageSchema(section.blocks);

  return (
    <article className="space-y-4">
      {faqSchema && <JsonLd schema={faqSchema} />}
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: section.title, path: "/faq" },
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

      <FaqSection blocks={section.blocks} />
    </article>
  );
}
