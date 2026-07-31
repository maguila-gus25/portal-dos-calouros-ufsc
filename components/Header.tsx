import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-3">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
          <div
            aria-hidden
            className="w-9 h-9 rounded-lg bg-hero-gradient text-white flex items-center justify-center shadow-sm"
          >
            <GraduationCap size={18} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm text-foreground">Portal dos Calouros</span>
            <span className="text-muted-foreground text-xs">UFSC</span>
          </div>
        </Link>

        <SearchInput
          className="order-3 sm:order-2 basis-full sm:basis-auto sm:ml-4 sm:flex-1 sm:max-w-sm"
          placeholder="Buscar…"
        />

        <nav aria-label="Navegação principal" className="order-2 sm:order-3 ml-auto flex items-center gap-2 sm:gap-4">
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
