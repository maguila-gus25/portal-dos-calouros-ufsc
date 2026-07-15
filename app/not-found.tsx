import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="card p-12 flex flex-col items-center text-center gap-4 mt-8">
      <SearchX size={40} className="text-ink-secondary/40" />
      <div>
        <h1 className="font-heading text-2xl font-bold text-ink-primary">Página não encontrada</h1>
        <p className="text-ink-secondary mt-2">A página que você procura não existe ou foi movida.</p>
      </div>
      <Link href="/" className="btn-primary mt-2">Voltar para o início</Link>
    </div>
  );
}
