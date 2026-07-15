import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { ErrorBox, Loading } from "@/components/StateMessages";
import { api, type CourseSummary } from "@/lib/api";

export function CoursesPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: api.listCourses,
  });

  return (
    <div className="space-y-6">
      <section className="card p-6">
        <h1 className="text-2xl font-bold">Cursos do CTC</h1>
        <p className="text-ink-secondary mt-2">
          Fichas por curso com coordenação, atlética, dicas de veterano e mais.
        </p>
      </section>

      {isLoading && <Loading />}
      {isError && <ErrorBox />}
      {data && data.length === 0 && (
        <div className="card p-6 text-ink-secondary">
          Nenhuma ficha de curso publicada ainda. Em breve.
        </div>
      )}
      {data && data.length > 0 && (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </ul>
      )}
    </div>
  );
}

function CourseCard({ course }: { course: CourseSummary }) {
  return (
    <li>
      <Link
        to={`/cursos/${course.slug}`}
        className="card p-4 block no-underline hover:border-brand-blue transition-colors"
      >
        <h3 className="font-semibold text-ink-primary">{course.title}</h3>
        <p className="text-sm text-ink-secondary mt-1">
          {[course.grau, course.turno].filter(Boolean).join(" • ") || "—"}
        </p>
      </Link>
    </li>
  );
}
