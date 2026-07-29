import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCenter, listCenters } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return listCenters().map((c) => ({ slug: c.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const center = getCenter(slug);
  if (!center) return { title: "Centro não encontrado" };
  const title = `${center.title} — Portal dos Calouros UFSC`;
  const description = center.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/centros/${slug}`,
    },
  };
}

export default async function CenterPage({ params }: Props) {
  const { slug } = await params;
  const center = getCenter(slug);
  if (!center) notFound();

  return (
    <article className="space-y-4">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{center.title}</h1>
        <p className="text-muted-foreground mt-1">{center.description}</p>
      </header>

      <div className="card p-6 sm:p-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: center.content_html }}
        />
      </div>
    </article>
  );
}
