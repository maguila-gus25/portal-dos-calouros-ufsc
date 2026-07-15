import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="card p-10 text-center max-w-md mx-auto">
      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
        <GraduationCap size={28} />
      </div>
      <h1 className="text-xl font-bold">Página não encontrada</h1>
      <p className="text-ink-secondary mt-2 text-sm leading-relaxed">
        O endereço que você tentou acessar não existe. Pode ser que você tenha digitado errado — acontece com todo mundo, especialmente na primeira semana.
      </p>
      <Link to="/" className="btn-primary mt-6 no-underline text-white">
        Ir para o início
      </Link>
    </section>
  );
}
