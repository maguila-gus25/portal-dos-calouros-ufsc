import { ChevronRight, GraduationCap } from "lucide-react";
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
      {/* Hero da página */}
      <section className="bg-hero-gradient rounded-2xl px-8 py-10 text-white shadow-hero">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <span className="text-white/70 text-sm font-medium">CTC — Centro Tecnológico</span>
        </div>
        <h1 className="font-heading text-3xl font-bold">Cursos do CTC</h1>
        <p className="text-white/75 mt-1 max-w-md leading-relaxed text-sm">
          Fichas por curso — coordenação, atlética, centro acadêmico, dicas de veterano e muito mais.
        </p>
      </section>

      {isLoading && <Loading label="Carregando fichas dos cursos…" />}
      {isError && <ErrorBox />}
      {data && data.length === 0 && (
        <div className="card p-10 text-center text-ink-secondary">
          <GraduationCap size={32} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium text-ink-primary">Nenhuma ficha publicada ainda.</p>
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
        className="card p-5 flex items-start gap-3 no-underline hover:border-brand-blue hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group h-full"
      >
        <div className="section-icon-wrapper icon-blue mt-0.5">
          <GraduationCap size={18} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-ink-primary text-sm leading-snug">{course.title}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {course.grau && !isPending(course.grau) && (
              <Badge variant="info">{course.grau}</Badge>
            )}
            {course.turno && !isPending(course.turno) && (
              <Badge>{course.turno}</Badge>
            )}
          </div>
        </div>
        <ChevronRight
          size={15}
          className="text-ink-secondary/30 group-hover:text-brand-blue flex-shrink-0 mt-1 transition-colors duration-150"
          aria-hidden
        />
      </Link>
    </li>
  );
}
