import { Suspense } from "react";
import { SearchInput } from "@/components/SearchInput";
import { SearchResults } from "@/components/SearchResults";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Busca — Portal dos Calouros UFSC",
  description: "Busque por coordenação, RU, datas, atléticas, cursos e muito mais no Portal dos Calouros UFSC.",
  alternates: { canonical: "/busca" },
  // A busca gera URLs infinitas via ?q=. Indexá-las enche o índice de páginas
  // finas e quase idênticas; o "follow" mantém os links internos sendo seguidos.
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  return (
    <div className="space-y-4">
      <section className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold">Busca</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Procure por coordenação, curso, atlética, RU, datas…
        </p>
        <SearchInput initialQuery={query} className="mt-4" placeholder="O que você quer saber?" />
      </section>

      <Suspense fallback={<div className="card p-6 text-muted-foreground text-sm">Carregando resultados…</div>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}
