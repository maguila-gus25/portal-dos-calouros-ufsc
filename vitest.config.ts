import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    // Vitest's defaults already exclude node_modules etc., but e2e/ holds
    // Playwright specs (a different test runner with a different API) —
    // without this, `vitest run` collects them too and the run breaks.
    exclude: ["e2e/**", "node_modules/**", ".next/**"],
  },
});
