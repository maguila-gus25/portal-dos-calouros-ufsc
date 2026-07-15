import {
  BookOpen,
  Building2,
  Calendar,
  Camera,
  ChevronRight,
  Link2,
  Map,
  Trophy,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { SearchInput } from "@/components/SearchInput";
import { ErrorBox, Loading } from "@/components/StateMessages";
import { api, type SectionSummary } from "@/lib/api";

const SECTION_ICONS: Record<string, LucideIcon> = {
  coordenacoes: Building2,
  ru: Utensils,
  links: Link2,
  datas: Calendar,
  atleticas: Trophy,
  instagrams: Camera,
  mapa: Map,
  historias: BookOpen,
};

export function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sections"],
    queryFn: api.listSections,
  });

  return (
    <div className="space-y-8">
      <section className="card p-8 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-primary leading-tight">
          Tudo que você precisa saber
          <br />
          <span className="text-brand-blue">para começar na UFSC</span>
        </h1>
        <p className="text-ink-secondary mt-3 text-base max-w-lg mx-auto leading-relaxed">
          Guia feito por estudantes para estudantes do{" "}
          <strong className="text-ink-primary">CTC — Campus Trindade</strong>,
          Florianópolis. Não oficial, mas feito com carinho.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <SearchInput
            placeholder="Busque por RU, coordenação, atlética, datas…"
            className="w-full"
          />
        </div>
      </section>

      <section aria-labelledby="secoes-heading">
        <h2 id="secoes-heading" className="text-lg font-bold mb-4 text-ink-primary">
          Explorar por tema
        </h2>

        {isLoading && <Loading label="Carregando seções…" />}
        {isError && <ErrorBox />}
        {data && (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((section) => (
              <SectionCard key={section.slug} section={section} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function SectionCard({ section }: { section: SectionSummary }) {
  const Icon = SECTION_ICONS[section.slug] ?? BookOpen;

  return (
    <li>
      <Link
        to={`/secoes/${section.slug}`}
        className="card p-4 flex items-center gap-4 no-underline hover:border-brand-blue hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group"
      >
        <div className="section-icon-wrapper">
          <Icon size={20} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-ink-primary text-sm">{section.title}</h3>
          <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed line-clamp-2">
            {section.description}
          </p>
        </div>
        <ChevronRight
          size={16}
          className="text-ink-secondary/40 group-hover:text-brand-blue flex-shrink-0 transition-colors duration-150"
          aria-hidden
        />
      </Link>
    </li>
  );
}
