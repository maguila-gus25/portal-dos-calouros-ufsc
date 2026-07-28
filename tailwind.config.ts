import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,.07), 0 1px 2px rgba(0,0,0,.04)",
        "card-hover": "0 4px 6px rgba(0,0,0,.12)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, hsl(217 91% 52%) 0%, hsl(270 76% 55%) 100%)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".card": {
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "var(--radius)",
          boxShadow: "0 1px 3px rgba(0,0,0,.07), 0 1px 2px rgba(0,0,0,.04)",
        },
        ".section-icon-wrapper": {
          flexShrink: "0",
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".icon-blue":   { backgroundColor: "hsl(217 91% 52% / 0.12)", color: "hsl(217 91% 45%)" },
        ".icon-green":  { backgroundColor: "hsl(142 76% 36% / 0.12)", color: "hsl(142 76% 32%)" },
        ".icon-violet": { backgroundColor: "hsl(270 76% 65% / 0.12)", color: "hsl(270 76% 50%)" },
        ".icon-orange": { backgroundColor: "hsl(27 96% 60% / 0.12)",  color: "hsl(27 96% 42%)" },
        ".icon-rose":   { backgroundColor: "hsl(0 84% 60% / 0.12)",   color: "hsl(0 84% 50%)" },
        ".icon-pink":   { backgroundColor: "hsl(331 86% 60% / 0.12)", color: "hsl(331 86% 48%)" },
        ".icon-teal":   { backgroundColor: "hsl(173 80% 40% / 0.12)", color: "hsl(173 80% 33%)" },
        ".icon-amber":  { backgroundColor: "hsl(38 92% 50% / 0.12)",  color: "hsl(38 92% 38%)" },
        ".btn-primary": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          borderRadius: "var(--radius)",
          backgroundColor: "hsl(var(--primary))",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          fontWeight: "600",
          color: "hsl(var(--primary-foreground))",
          transition: "all .15s ease",
          textDecoration: "none",
          "&:hover": {
            opacity: "0.9",
            boxShadow: "0 4px 6px rgba(0,0,0,.12)",
          },
        },
      });
    }),
  ],
};

export default config;
