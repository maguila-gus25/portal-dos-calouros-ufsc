import { GitFork } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-1">
            <p className="font-semibold text-foreground">
              Projeto independente feito por estudantes. Não é um site oficial da UFSC.
            </p>
            <p>Informações oficiais devem sempre ser confirmadas nos canais da UFSC.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap rounded-full border border-border bg-background px-3 py-1.5">
            <span>Esse projeto é de código livre, aberto e 100% gratuito!</span>
            <a
              href="https://github.com/maguila-gus25/portal-dos-calouros-ufsc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
            >
              <GitFork size={14} aria-hidden="true" />
              Repositório
            </a>
          </div>
        </div>
        <p className="text-xs mt-4 text-muted-foreground">
          © {year} Portal dos Calouros UFSC — Conteúdo aberto e mantido pela comunidade estudantil.
        </p>
        <p className="text-xs mt-1 text-muted-foreground">
          Usamos Vercel Analytics para contar visitas sem armazenar dados pessoais.
        </p>
      </div>
    </footer>
  );
}
