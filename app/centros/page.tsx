import { Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { listCenters } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centros da UFSC — Portal dos Calouros",
  description: "Escolha seu centro para encontrar coordenações, cursos, atléticas e dicas.",
};

export default function CentrosPage() {
  const centers = listCenters();
  return (
    <div className="space-y-6">
      {/* Hero igual ao padrão do site */}
      <section className="bg-hero-gradient rounded-lg px-8 py-10 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <Building2 size={20} aria-hidden />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Centros da UFSC</h1>
        <p className="text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] mt-1 max-w-md leading-relaxed text-sm">
          Escolha o seu centro para ver coordenações, cursos, atléticas e muito mais.
        </p>
      </section>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => (
          <li key={center.slug}>
            <Link
              href={`/centros/${center.slug}`}
              className="card p-5 flex items-start gap-3 no-underline hover:border-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group h-full"
            >
              <div className="section-icon-wrapper icon-blue mt-0.5">
                <Building2 size={18} aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm leading-snug">{center.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">{center.description}</p>
              </div>
              <ChevronRight
                size={15}
                className="text-gray-400 group-hover:text-primary flex-shrink-0 mt-1 transition-colors duration-150"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
