import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCenter, listCenters, listCourses } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return listCenters().map((c) => ({ slug: c.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const center = getCenter(slug);
  if (!center) return { title: "Centro não encontrado" };
  const title = `${center.title} — Portal dos Calouros UFSC`;
  const description = center.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/centros/${slug}`,
    },
  };
}

export default async function CenterPage({ params }: Props) {
  const { slug } = await params;
  const center = getCenter(slug);
  if (!center) notFound();

  const courses = listCourses().filter(
    (c) => (c.centro ?? "").toUpperCase() === slug.toUpperCase()
  );

  return (
    <article className="space-y-4">
      <Link href="/centros" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ChevronLeft size={15} aria-hidden />
        Todos os centros
      </Link>

      <header className="card p-6 sm:p-8">
        <h1 className="text-2xl font-bold leading-snug">{center.title}</h1>
        <p className="text-muted-foreground mt-1">{center.description}</p>
      </header>

      {courses.length > 0 && (
        <Link
          href="#cursos-do-centro"
          className="btn-primary min-h-[44px] w-full sm:w-auto"
        >
          Ver os cursos do {center.title}
          <ArrowRight size={16} aria-hidden />
        </Link>
      )}

      <div className="card p-6 sm:p-8">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: center.content_html }}
        />
      </div>

      {courses.length > 0 && (
        <section className="space-y-3" aria-labelledby="cursos-do-centro">
          <h2 id="cursos-do-centro" className="text-lg font-bold text-foreground">Cursos deste centro</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
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
      )}
    </article>
  );
}
