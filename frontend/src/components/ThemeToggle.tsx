import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-ink-secondary hover:text-ink-primary hover:bg-bg-app focus-visible:outline-brand-blue transition-colors"
    >
      <span aria-hidden className="text-lg">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
