import {
  BookOpen, Building2, Calendar, Camera, CheckSquare, ChevronRight,
  HelpCircle, Link2, Map, Trophy, Utensils, type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";
import { listSections, type SectionSummary } from "@/lib/content";

const SECTION_ICONS: Record<string, LucideIcon> = {
  coordenacoes: Building2,
  ru: Utensils,
  links: Link2,
  datas: Calendar,
  atleticas: Trophy,
  instagrams: Camera,
  mapa: Map,
  historias: BookOpen,
  faq: HelpCircle,
  checklist: CheckSquare,
};

const SECTION_COLORS: Record<string, string> = {
  coordenacoes: "icon-blue",
  ru: "icon-green",
  links: "icon-violet",
  datas: "icon-orange",
  atleticas: "icon-rose",
  instagrams: "icon-pink",
  mapa: "icon-teal",
  historias: "icon-amber",
  faq: "icon-teal",
  checklist: "icon-green",
};

export default function Home() {
  const sections = listSections();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-hero-gradient rounded-2xl px-8 py-12 sm:py-16 text-center shadow-hero overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
            CTC · Campus Trindade · Florianópolis
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
            Tudo que você precisa
            <br />
            <span className="text-blue-200">para começar na UFSC</span>
          </h1>
          <p className="text-white/75 mt-4 text-base max-w-md mx-auto leading-relaxed">
            Guia feito por estudantes, sem complicação. Não é oficial, mas é feito com carinho pra você.
          </p>
          <div className="mt-7 max-w-md mx-auto hero-search">
            <SearchInput
              placeholder="Busque por RU, coordenação, atlética, datas…"
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Grid de seções */}
      <section aria-labelledby="secoes-heading">
        <h2 id="secoes-heading" className="font-heading text-xl font-bold mb-4 text-ink-primary">
          O que você quer saber?
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <SectionCard key={section.slug} section={section} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function SectionCard({ section }: { section: SectionSummary }) {
  const Icon = SECTION_ICONS[section.slug] ?? BookOpen;
  const colorClass = SECTION_COLORS[section.slug] ?? "icon-blue";

  return (
    <li>
      <Link
        href={`/secoes/${section.slug}`}
        className="card p-5 flex flex-col gap-3 no-underline hover:border-brand-blue hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group h-full"
      >
        <div className={`section-icon-wrapper ${colorClass}`}>
          <Icon size={22} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-ink-primary text-sm leading-snug">{section.title}</h3>
          <p className="text-xs text-ink-secondary mt-1 leading-relaxed line-clamp-2">{section.description}</p>
        </div>
        <ChevronRight
          size={15}
          className="text-ink-secondary/30 group-hover:text-brand-blue self-end transition-colors duration-150"
          aria-hidden
        />
      </Link>
    </li>
  );
}
