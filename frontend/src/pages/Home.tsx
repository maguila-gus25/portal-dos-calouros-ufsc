import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { ErrorBox, Loading } from "@/components/StateMessages";
import { api, type SectionSummary } from "@/lib/api";

export function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sections"],
    queryFn: api.listSections,
  });

  return (
    <div className="space-y-6">
      <section className="card p-6">
        <h1 className="text-2xl font-bold">Bem-vindo ao Portal dos Calouros</h1>
        <p className="text-ink-secondary mt-2">
          Tudo o que quem acaba de chegar na UFSC precisa saber, reunido em um
          lugar só. Foco atual: <strong>CTC — Centro Tecnológico</strong>
          (Campus Trindade, Florianópolis).
        </p>
      </section>

      <section aria-labelledby="secoes-heading">
        <h2 id="secoes-heading" className="text-xl font-bold mb-3">
          Explorar por tema
        </h2>

        {isLoading && <Loading />}
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
  return (
    <li>
      <Link
        to={`/secoes/${section.slug}`}
        className="card p-4 flex gap-3 items-start no-underline hover:border-brand-blue transition-colors"
      >
        <span aria-hidden className="text-2xl">
          {section.icon}
        </span>
        <div>
          <h3 className="font-semibold text-ink-primary">{section.title}</h3>
          <p className="text-sm text-ink-secondary mt-1">
            {section.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
