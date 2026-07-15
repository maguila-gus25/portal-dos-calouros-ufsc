import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";

function Placeholder({ title }: { title: string }) {
  return (
    <section className="card p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-ink-secondary mt-2">
        Página em construção — próximo passo do sprint.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Placeholder title="Início" />} />
        <Route
          path="/secoes/:slug"
          element={<Placeholder title="Seção" />}
        />
        <Route path="/cursos" element={<Placeholder title="Cursos" />} />
        <Route
          path="/cursos/:slug"
          element={<Placeholder title="Curso" />}
        />
        <Route
          path="*"
          element={<Placeholder title="Página não encontrada" />}
        />
      </Routes>
    </Layout>
  );
}
