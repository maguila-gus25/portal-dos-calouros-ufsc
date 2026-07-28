import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/content";
import MapViewClient from "@/components/MapViewClient";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const section = getSection("mapa");
  if (!section) return { title: "Mapa não encontrado" };
  const title = `${section.title} — Portal dos Calouros UFSC`;
  const description = section.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/mapa`,
    },
  };
}

export default function MapaPage() {
  const section = getSection("mapa");
  if (!section) notFound();

  return (
    <article className="space-y-4">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
      >
        <ChevronLeft size={15} aria-hidden />
        Voltar para o início
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{section.title}</h1>
        <p className="text-muted-foreground mt-1">{section.description}</p>
      </header>

      <section aria-label="Mapa interativo do campus" className="card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Pontos de interesse do Campus Trindade
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Clique nos marcadores para ver o nome e a descrição de cada local. Coordenadas
          aproximadas baseadas no Campus Reitor João David Ferreira Lima, Florianópolis – SC.
        </p>
        <MapViewClient />
      </section>

      <div className="card p-6 sm:p-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: section.content_html }}
        />
      </div>
    </article>
  );
}
