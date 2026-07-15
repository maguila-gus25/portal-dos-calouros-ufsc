"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const linkClass = (href: string, exact = false) => {
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return `text-sm font-medium transition-colors duration-150 ${
      isActive ? "text-brand-blue" : "text-ink-secondary hover:text-ink-primary"
    }`;
  };

  return (
    <>
      <Link href="/" className={linkClass("/", true)}>Início</Link>
      <Link href="/cursos" className={linkClass("/cursos")}>Cursos</Link>
    </>
  );
}
