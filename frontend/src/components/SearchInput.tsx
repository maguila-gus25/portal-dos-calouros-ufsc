import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  initialQuery?: string;
  className?: string;
}

export function SearchInput({
  initialQuery = "",
  className = "",
}: SearchInputProps) {
  const [value, setValue] = useState(initialQuery);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const query = value.trim();
    if (query.length < 2) return;
    navigate(`/busca?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`flex items-center ${className}`}
    >
      <label htmlFor="search-input" className="sr-only">
        Buscar no portal
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Buscar…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        minLength={2}
        className="w-full sm:w-56 rounded-full bg-bg-app border border-transparent focus:border-brand-blue focus:bg-surface px-4 py-1.5 text-sm text-ink-primary placeholder-ink-secondary outline-none transition-colors"
      />
    </form>
  );
}
