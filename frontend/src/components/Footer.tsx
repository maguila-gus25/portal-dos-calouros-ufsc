export function Footer() {
  return (
    <footer className="mt-16 border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-ink-secondary space-y-2">
        <p className="font-medium text-ink-primary">
          Projeto independente feito por estudantes. Não é um site oficial da UFSC.
        </p>
        <p>
          Conteúdo aberto e mantido pela comunidade —{" "}
          <a
            href="https://github.com/maguila-gus25/portal-dos-calouros-ufsc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline"
          >
            veja no GitHub
          </a>{" "}
          ou envie uma correção com fonte oficial.
        </p>
        <p className="text-xs">
          Informações oficiais devem sempre ser confirmadas nos canais da UFSC.
        </p>
      </div>
    </footer>
  );
}
