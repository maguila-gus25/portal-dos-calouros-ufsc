import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/content";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const section = getSection("checklist");
  if (!section) return { title: "Checklist não encontrado" };
  const title = `${section.title} — Portal dos Calouros UFSC`;
  const description = section.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/checklist`,
    },
  };
}

export default function ChecklistPage() {
  const section = getSection("checklist");
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
