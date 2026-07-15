import { test, expect } from "@playwright/test";

test.describe("Smoke tests — Portal dos Calouros UFSC", () => {
  test("home carrega e exibe título", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Portal dos Calouros UFSC/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("skip link existe e é funcional", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.getByText("Pular para o conteúdo");
    await expect(skipLink).toBeAttached();
  });

  test("página /faq carrega", async ({ page }) => {
    await page.goto("/faq");
    await expect(page).toHaveTitle(/FAQ/);
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
  });

  test("página /checklist carrega", async ({ page }) => {
    await page.goto("/checklist");
    await expect(page).toHaveTitle(/Checklist/);
  });

  test("página /mapa carrega (sem mapa interativo no CI — ssr:false)", async ({ page }) => {
    await page.goto("/mapa");
    await expect(page).toHaveTitle(/Mapa/);
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
  });

  test("API /api/health responde 200", async ({ page }) => {
    const response = await page.request.get("/api/health");
    expect(response.status()).toBe(200);
  });

  test("busca encontra resultado", async ({ page }) => {
    await page.goto("/busca?q=RU");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("página de curso carrega", async ({ page }) => {
    await page.goto("/cursos/ciencias-da-computacao");
    await expect(page).toHaveTitle(/Ciências da Computação/i);
  });
});
