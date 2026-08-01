"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const linkClass = (href: string, exact = false) => {
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return `text-sm font-medium transition-colors duration-150 py-2 px-1 ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;
  };

  return (
    <>
      <Link href="/" className={linkClass("/", true)}>Início</Link>
      <Link href="/centros" className={linkClass("/centros")}>Centros</Link>
      <Link href="/cursos" className={linkClass("/cursos")}>Cursos</Link>
    </>
  );
}
