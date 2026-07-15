import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection, listSections } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return listSections().map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return { title: "Seção não encontrada" };
  return { title: `${section.title} — Portal dos Calouros UFSC` };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return (
    <article className="space-y-4">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="font-heading text-2xl font-bold leading-snug">{section.title}</h1>
        <p className="text-ink-secondary mt-1">{section.description}</p>
      </header>

      <div className="card p-6 sm:p-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: section.content_html }}
        />
      </div>
    </article>
  );
}
