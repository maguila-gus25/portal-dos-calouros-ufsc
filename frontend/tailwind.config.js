/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1877F2",
          blueHover: "#166FE5",
          green: "#42B72A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          border: "#CED0D4",
        },
        bg: {
          app: "#F0F2F5",
          dark: "#18191A",
          darkSurface: "#242526",
        },
        ink: {
          primary: "#1C1E21",
          secondary: "#65676B",
          alert: "#B26A00",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
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
        card: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
