export interface SectionSummary {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface Section extends SectionSummary {
  content_md: string;
  content_html: string;
  metadata: Record<string, unknown>;
}

export interface CourseSummary {
  slug: string;
  title: string;
  centro?: string | null;
  grau?: string | null;
  turno?: string | null;
}

export interface Course extends CourseSummary {
  metadata: Record<string, unknown>;
  content_md: string;
  content_html: string;
}

export interface SearchResult {
  type: "section" | "course";
  slug: string;
  title: string;
  snippet: string;
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  health: () => get<{ status: string; version: string; env: string }>("/api/health"),
  listSections: () => get<SectionSummary[]>("/api/sections"),
  getSection: (slug: string) => get<Section>(`/api/sections/${encodeURIComponent(slug)}`),
  listCourses: () => get<CourseSummary[]>("/api/courses"),
  getCourse: (slug: string) => get<Course>(`/api/courses/${encodeURIComponent(slug)}`),
  search: (q: string) =>
    get<SearchResult[]>(`/api/search?q=${encodeURIComponent(q)}`),
};
