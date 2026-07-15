import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium ${
    isActive ? "text-brand-blue" : "text-ink-secondary hover:text-ink-primary"
  }`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-surface-border shadow-card">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 no-underline">
          <div
            aria-hidden
            className="w-9 h-9 rounded-lg bg-brand-blue text-white grid place-items-center font-bold"
          >
            C
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-ink-primary font-bold">Portal dos Calouros</span>
            <span className="text-ink-secondary text-xs">UFSC — CTC</span>
          </div>
        </Link>

        <nav className="ml-auto flex items-center gap-4">
          <NavLink to="/" end className={navLinkClass}>
            Início
          </NavLink>
          <NavLink to="/cursos" className={navLinkClass}>
            Cursos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
