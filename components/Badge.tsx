import type { ReactNode } from "react";

type Variant = "default" | "info" | "success" | "warn";

const variantClass: Record<Variant, string> = {
  default: "bg-muted text-muted-foreground",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  success: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
  warn: "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variantClass[variant]}`}>
      {children}
    </span>
  );
}
