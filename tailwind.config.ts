import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1877F2",
          blueHover: "#166FE5",
          green: "#42B72A",
          violet: "#7C3AED",
          violetHover: "#6D28D9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          border: "#E4E7EC",
        },
        bg: {
          app: "#F5F7FF",
          dark: "#18191A",
          darkSurface: "#242526",
        },
        ink: {
          primary: "#111827",
          secondary: "#6B7280",
          alert: "#B45309",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.06)",
        hero: "0 20px 60px rgba(24, 119, 242, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1877F2 0%, #7C3AED 100%)",
        "hero-gradient-dark": "linear-gradient(135deg, #1565C0 0%, #5B21B6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
