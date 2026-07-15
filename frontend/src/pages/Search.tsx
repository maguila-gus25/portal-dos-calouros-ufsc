import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";

import { SearchInput } from "@/components/SearchInput";
import { ErrorBox, Loading } from "@/components/StateMessages";
import { api, type SearchResult } from "@/lib/api";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim();

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["search", q],
    queryFn: () => api.search(q),
    enabled: q.length >= 2,
  });

  return (
    <div className="space-y-4">
      <section className="card p-6">
        <h1 className="text-2xl font-bold">Buscar</h1>
        <p className="text-ink-secondary text-sm mt-1">
          Procure por coordenação, curso, atlética, disciplina, data…
        </p>
        <SearchInput initialQuery={q} className="mt-4" />
      </section>

      {q.length < 2 && (
        <div className="card p-6 text-ink-secondary">
          Digite pelo menos 2 caracteres para buscar.
        </div>
      )}

      {q.length >= 2 && (isLoading || isFetching) && <Loading />}
      {q.length >= 2 && isError && <ErrorBox />}

      {q.length >= 2 && data && data.length === 0 && !isLoading && (
        <div className="card p-6 text-ink-secondary">
          Nenhum resultado para <strong>&ldquo;{q}&rdquo;</strong>.
        </div>
      )}

      {data && data.length > 0 && (
        <section aria-label="Resultados">
          <p className="text-sm text-ink-secondary mb-3">
            {data.length} resultado{data.length > 1 ? "s" : ""} para{" "}
            <strong>&ldquo;{q}&rdquo;</strong>
          </p>
          <ul className="space-y-3">
            {data.map((result) => (
              <ResultItem key={`${result.type}-${result.slug}`} result={result} query={q} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function ResultItem({ result, query }: { result: SearchResult; query: string }) {
  const to =
    result.type === "section"
      ? `/secoes/${result.slug}`
      : `/cursos/${result.slug}`;
  const badge = result.type === "section" ? "Seção" : "Curso";

  return (
    <li>
      <Link
        to={to}
        className="card p-4 block no-underline hover:border-brand-blue transition-colors"
      >
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-blue/10 text-brand-blue px-2 py-0.5 font-medium">
            {badge}
          </span>
          <span className="text-ink-secondary">{result.slug}</span>
        </div>
        <h3 className="font-semibold text-ink-primary mt-2">{result.title}</h3>
        <p className="text-sm text-ink-secondary mt-1">
          <Highlight text={result.snippet} query={query} />
        </p>
      </Link>
    </li>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.toLowerCase();
  const lower = text.toLowerCase();
  const parts: Array<{ text: string; match: boolean }> = [];
  let cursor = 0;
  while (cursor < text.length) {
    const idx = lower.indexOf(q, cursor);
    if (idx === -1) {
      parts.push({ text: text.slice(cursor), match: false });
      break;
    }
    if (idx > cursor) parts.push({ text: text.slice(cursor, idx), match: false });
    parts.push({ text: text.slice(idx, idx + q.length), match: true });
    cursor = idx + q.length;
  }
  return (
    <>
      {parts.map((p, i) =>
        p.match ? (
          <mark key={i} className="bg-brand-blue/20 text-ink-primary rounded px-0.5">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}
