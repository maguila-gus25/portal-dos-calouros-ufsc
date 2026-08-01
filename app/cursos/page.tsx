import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { listCenters, listCourses } from "@/lib/content";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export const metadata: Metadata = {
  title: "Cursos — Portal dos Calouros UFSC",
  description: "Todos os cursos de graduação da UFSC, agrupados por centro de ensino.",
  openGraph: {
    title: "Cursos — Portal dos Calouros UFSC",
    description: "Todos os cursos de graduação da UFSC, agrupados por centro de ensino.",
    type: "website",
    url: `${BASE_URL}/cursos`,
  },
};

export default function CoursesPage() {
  const centers = listCenters();
  const courses = listCourses();

  const centersBySlug = new Map(centers.map((c) => [c.slug.toUpperCase(), c]));

  const groups = new Map<string, { title: string; courses: typeof courses }>();
  for (const course of courses) {
    const centroSlug = (course.centro ?? "").toUpperCase();
    const center = centersBySlug.get(centroSlug);
    const key = center ? center.slug : centroSlug || "outros";
    const title = center ? center.title : course.centro || "Outros";
    if (!groups.has(key)) {
      groups.set(key, { title, courses: [] });
    }
    groups.get(key)!.courses.push(course);
  }

  const sortedGroups = Array.from(groups.entries()).sort((a, b) =>
    a[1].title.localeCompare(b[1].title, "pt-BR")
  );

  return (
    <div className="space-y-6">
      <Link href="/centros" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Todos os centros
      </Link>

      <section className="bg-hero-gradient rounded-lg px-8 py-10 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <GraduationCap size={20} aria-hidden />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Cursos da UFSC</h1>
        <p className="text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] mt-1 max-w-md leading-relaxed text-sm">
          Todos os cursos de graduação, agrupados por centro de ensino.
        </p>
      </section>

      {sortedGroups.map(([key, group]) => (
        <section key={key} className="space-y-3" aria-labelledby={`grupo-${key}`}>
          <h2 id={`grupo-${key}`} className="text-lg font-bold text-foreground">
            {group.title}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.courses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/cursos/${course.slug}`}
                  className="card p-4 flex items-start gap-3 no-underline hover:border-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 group h-full"
                >
                  <div className="section-icon-wrapper icon-blue mt-0.5">
                    <GraduationCap size={18} aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm leading-snug">{course.title}</p>
                    {course.turno && (
                      <p className="text-xs text-muted-foreground mt-0.5">{course.turno}</p>
                    )}
                  </div>
                  <ChevronRight
                    size={15}
                    className="text-gray-400 group-hover:text-primary flex-shrink-0 mt-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
