interface LoadingProps {
  label?: string;
}

export function Loading({ label = "Carregando…" }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="card p-6 text-ink-secondary"
    >
      {label}
    </div>
  );
}

interface ErrorBoxProps {
  message?: string;
}

export function ErrorBox({
  message = "Não foi possível carregar. Verifique se a API está rodando.",
}: ErrorBoxProps) {
  return (
    <div
      role="alert"
      className="card p-6 border-ink-alert/40"
    >
      <p className="font-medium text-ink-alert">Algo deu errado</p>
      <p className="text-ink-secondary text-sm mt-1">{message}</p>
    </div>
  );
}
