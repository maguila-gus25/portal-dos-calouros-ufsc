import { GraduationCap } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors duration-150 ${
    isActive
      ? "text-brand-blue"
      : "text-ink-secondary hover:text-ink-primary"
  }`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-bg-darkSurface/90 backdrop-blur-md border-b border-surface-border shadow-card">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 no-underline">
          <div
            aria-hidden
            className="w-9 h-9 rounded-xl bg-hero-gradient text-white flex items-center justify-center shadow-sm"
          >
            <GraduationCap size={18} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-sm text-ink-primary">
              Portal dos Calouros
            </span>
            <span className="text-ink-secondary text-xs">UFSC — CTC</span>
          </div>
        </Link>

        <SearchInput
          className="order-3 sm:order-2 basis-full sm:basis-auto sm:ml-4 sm:flex-1 sm:max-w-sm"
          placeholder="Buscar…"
        />

        <nav className="order-2 sm:order-3 ml-auto flex items-center gap-2 sm:gap-4">
          <NavLink to="/" end className={navLinkClass}>
            Início
          </NavLink>
          <NavLink to="/cursos" className={navLinkClass}>
            Cursos
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
