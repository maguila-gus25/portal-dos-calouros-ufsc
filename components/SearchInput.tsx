"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

interface SearchInputProps {
  initialQuery?: string;
  className?: string;
  placeholder?: string;
}

export function SearchInput({ initialQuery = "", className = "", placeholder = "Buscar coordenação, curso, RU…" }: SearchInputProps) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const query = value.trim();
    if (query.length < 2) return;
    router.push(`/busca?q=${encodeURIComponent(query)}`);
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={`relative flex items-center ${className}`}>
      <label htmlFor="search-input" className="sr-only">Buscar no portal</label>
      <Search size={15} className="absolute left-3 text-muted-foreground pointer-events-none" aria-hidden />
      <input
        id="search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        minLength={2}
        className="w-full rounded-full bg-muted border border-transparent focus:border-primary focus:bg-card pl-8 pr-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      />
    </form>
  );
}
