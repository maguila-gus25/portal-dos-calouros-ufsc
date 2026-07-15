import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { Badge } from "@/components/Badge";
import { ErrorBox, Loading } from "@/components/StateMessages";
import { api, type CourseSummary } from "@/lib/api";

export function CoursesPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: api.listCourses,
  });

  return (
    <div className="space-y-6">
      <section className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold">Cursos do CTC</h1>
        <p className="text-ink-secondary mt-2 leading-relaxed">
          Fichas completas por curso — coordenação, atlética, centro acadêmico, dicas de veterano e mais.
        </p>
      </section>

      {isLoading && <Loading label="Carregando fichas dos cursos…" />}
      {isError && <ErrorBox />}
      {data && data.length === 0 && (
        <div className="card p-8 text-center text-ink-secondary">
          <p className="font-medium">Nenhuma ficha publicada ainda.</p>
          <p className="text-sm mt-1">Em breve as fichas de todos os cursos do CTC estarão aqui.</p>
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
  const isPending = (v: unknown) =>
    typeof v === "string" && v.startsWith("_A preencher_");

  return (
    <li>
      <Link
        to={`/cursos/${course.slug}`}
        className="card p-4 flex items-center gap-3 no-underline hover:border-brand-blue hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-ink-primary text-sm leading-snug">{course.title}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {course.grau && !isPending(course.grau) && (
              <Badge variant="info">{course.grau}</Badge>
            )}
            {course.turno && !isPending(course.turno) && (
              <Badge>{course.turno}</Badge>
            )}
            {course.centro && <Badge>{course.centro}</Badge>}
          </div>
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
