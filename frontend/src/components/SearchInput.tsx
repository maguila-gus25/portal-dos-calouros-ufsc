import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  initialQuery?: string;
  className?: string;
  placeholder?: string;
}

export function SearchInput({
  initialQuery = "",
  className = "",
  placeholder = "Buscar coordenação, curso, RU…",
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
      className={`relative flex items-center ${className}`}
    >
      <label htmlFor="search-input" className="sr-only">
        Buscar no portal
      </label>
      <Search
        size={15}
        className="absolute left-3 text-ink-secondary pointer-events-none"
        aria-hidden
      />
      <input
        id="search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        minLength={2}
        className="w-full rounded-full bg-bg-app border border-transparent focus:border-brand-blue focus:bg-surface pl-8 pr-4 py-1.5 text-sm text-ink-primary placeholder-ink-secondary outline-none transition-colors duration-150"
      />
    </form>
  );
}
