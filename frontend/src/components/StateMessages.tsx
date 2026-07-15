import { AlertCircle, Loader2 } from "lucide-react";

interface LoadingProps {
  label?: string;
}

export function Loading({ label = "Carregando informações…" }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="card p-8 flex items-center gap-3 text-ink-secondary"
    >
      <Loader2 size={18} className="animate-spin text-brand-blue flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
}

interface ErrorBoxProps {
  message?: string;
}

export function ErrorBox({
  message = "Tente recarregar a página. Se o problema persistir, a API pode estar temporariamente fora do ar.",
}: ErrorBoxProps) {
  return (
    <div
      role="alert"
      className="card p-6 border-ink-alert/30 flex gap-3"
    >
      <AlertCircle size={20} className="text-ink-alert flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-ink-alert">Algo deu errado</p>
        <p className="text-ink-secondary text-sm mt-1">{message}</p>
      </div>
    </div>
  );
}
