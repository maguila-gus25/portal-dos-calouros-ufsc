import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="card p-6 text-center">
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <p className="text-ink-secondary mt-2">
        O endereço que você tentou acessar não existe (ou ainda não existe).
      </p>
      <Link to="/" className="btn-primary mt-4 no-underline text-white">
        Voltar para o início
      </Link>
    </section>
  );
}
