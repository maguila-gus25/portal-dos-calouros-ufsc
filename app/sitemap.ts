import type { MetadataRoute } from "next";
import { listSections, listCourses } from "@/lib/content";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portal-dos-calouros-ufsc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = listSections();
  const courses = listCourses();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/cursos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/busca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/checklist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const sectionRoutes: MetadataRoute.Sitemap = sections.map((section) => ({
    url: `${BASE_URL}/secoes/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/cursos/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...sectionRoutes, ...courseRoutes];
}
