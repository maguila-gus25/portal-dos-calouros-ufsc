export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-secondary">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-1">
            <p className="font-semibold text-ink-primary">
              Projeto independente feito por estudantes. Não é um site oficial da UFSC.
            </p>
            <p>Informações oficiais devem sempre ser confirmadas nos canais da UFSC.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/maguila-gus25/portal-dos-calouros-ufsc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline font-medium"
            >
              Contribuir no GitHub
            </a>
          </div>
        </div>
        <p className="text-xs mt-4 text-ink-secondary">
          © {year} Portal dos Calouros UFSC — Conteúdo aberto e mantido pela comunidade estudantil.
        </p>
      </div>
    </footer>
  );
}
