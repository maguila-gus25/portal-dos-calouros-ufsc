import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Serve o build de produção, não `npm run dev`. No dev server cada rota compila
    // sob demanda na primeira visita, e com vários workers em paralelo essas primeiras
    // navegações estouravam o timeout — a suíte falhava em 2 ou 3 testes diferentes a
    // cada rodada, sempre por compilação, nunca por regressão real. Mesma abordagem já
    // usada pelo Lighthouse CI em `lighthouserc.json`; de quebra, testa o artefato que
    // de fato vai para a Vercel.
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000,
  },
});
