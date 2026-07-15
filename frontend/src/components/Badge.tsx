import type { ReactNode } from "react";

type Variant = "default" | "info" | "success" | "warn";

const variantClass: Record<Variant, string> = {
  default: "bg-bg-app text-ink-secondary",
  info: "bg-brand-blue/10 text-brand-blue",
  success: "bg-brand-green/10 text-brand-green",
  warn: "bg-ink-alert/10 text-ink-alert",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variantClass[variant]}`}
    >
      {children}
    </span>
  );
}
