import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { CoursePage } from "@/pages/Course";
import { CoursesPage } from "@/pages/Courses";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { SearchPage } from "@/pages/Search";
import { SectionPage } from "@/pages/Section";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secoes/:slug" element={<SectionPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/cursos/:slug" element={<CoursePage />} />
        <Route path="/busca" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
