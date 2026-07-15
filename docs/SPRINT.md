# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 9 — Acessível, Mapeado e Testado (v1.4)

**Objetivo:** Tornar o portal utilizável por todos (WCAG AA), dar ao calouro um mapa
interativo do campus e proteger a base com testes E2E automatizados no CI.

| História | ID | Agente | Status |
|----------|----|--------|--------|
| Audit de acessibilidade WCAG AA — contraste, foco, aria-labels, landmarks | B-49 | ui-ux-designer → frontend-dev | Done ✅ |
| Mapa interativo com marcadores do campus (Leaflet.js + docs/mapa.md) | B-19 | frontend-dev | Done ✅ |
| Testes E2E com Playwright — smoke tests + CI no GitHub Actions | B-54 | tester | Done ✅ |

**Ordem de execução (dependências):**
1. `ui-ux-designer` (B-49) roda primeiro — produz specs de contraste, foco e aria.
2. `frontend-dev` (B-49 implementação) e `frontend-dev` (B-19) rodam **em paralelo** após
   as specs de acessibilidade estarem prontas (sem sobreposição de arquivos).
3. `tester` (B-54) roda **após** B-49 e B-19 — garante que as novas páginas entram
   na suíte de smoke tests antes de fechar o sprint.

## Definition of Done

- [x] `npm run lint` passa
- [x] `npm run build` passa (38 páginas geradas, sem erros)
- [x] `ui-ux-review` sem findings bloqueadores (3 warnings cosméticos, nenhum blocker)
- [x] Playwright smoke tests passam (8/8 passed) — CI configurado no GitHub Actions
- [x] `docs/product-backlog.md` atualizado com ✅ para B-19, B-49, B-54
- [x] README atualizado (nova página /mapa, Playwright, roadmap v1.4 ✅)

> Lighthouse Accessibility ≥ 90: não verificado em CI neste sprint (B-55 não entrou);
> as correções de contraste e landmarks tornam a pontuação improvável de cair abaixo de 90,
> mas a medição formal fica para B-55 no Sprint 10.

## Retrospectiva

- **Entregue:** B-49 — audit WCAG AA com 7 blockers identificados e todos corrigidos:
  `ink.secondary` → `#4B5563` (ratio 7.6:1), `brand.blueButton` → `#1565C0` para botões,
  skip link em `app/layout.tsx`, foco visível no `SearchInput`, text-shadow no hero,
  badge `info` com cor correta, Footer sem opacidade, `aria-hidden`/`aria-label` em
  componentes, área de toque nos NavLinks; `docs/identidade-visual.md` atualizado com
  ratios calculados e diretriz de foco.
  B-19 — `app/mapa/page.tsx` + `components/MapView.tsx` com Leaflet.js (SSR-safe via
  `MapViewClient`), 7 marcadores categorizados, legenda flutuante, tile layer OSM, URL
  canônica `/mapa` com entrada no sitemap e SECTION_DEDICATED_ROUTES na home.
  B-54 — `playwright.config.ts`, `e2e/smoke.spec.ts` (8 smoke tests, 8/8 passed),
  `.github/workflows/e2e.yml`. Fix transversal: `lib/content.ts` strips `<h1>` inicial
  do HTML gerado (evita duplicata com o `<h1>` do componente em todas as páginas).
  Build fix: `components/MapViewClient.tsx` criado para resolver restrição de `dynamic()`
  com `ssr: false` dentro de Server Components no Next.js 15.
- **Adiado:** B-13 (histórias de veteranos) e B-50 (Prisma DB) — bloqueados, como
  previsto no planejamento.
- **Para o próximo sprint (v1.5):** B-55 (Lighthouse CI), B-51 (analytics), B-48 (PWA),
  B-50 + B-37 + E13 (banco + formulário + auth, co-planejados). B-13 quando houver
  submissões reais de veteranos.

---

## Sprints Anteriores

### Sprint 9 — Acessível, Mapeado e Testado (v1.4) — concluído em 2026-07-15

**Objetivo:** Acessibilidade WCAG AA, mapa interativo do campus e testes E2E no CI.

**Entregue:** 7 blockers WCAG AA corrigidos (B-49); `/mapa` com Leaflet.js + 7 marcadores
(B-19); Playwright 8/8 testes + GitHub Actions (B-54). Fix transversal: h1 duplicado em
todas as páginas de seção. Lint ✅ Build ✅ 38 páginas SSG.

## Sprints Anteriores

### Sprint 8 — Encontrável e Documentado (v1.3) — concluído em 2026-07-15

**Objetivo:** SEO, documentação técnica atualizada, FAQ e checklist da primeira semana.

**Entregue:** CLAUDE.md + arquitetura.md reescritos para Next.js 15 (B-46); sitemap.xml,
robots.txt e OG tags em todas as páginas (B-47); FAQ com 16 perguntas + página /faq (B-52);
checklist da primeira semana + página /checklist (B-53). Fix de CSS para task list items.
README regenerado. Lint ✅ Build ✅ 37 páginas SSG.

---

### Sprint 7 — Migração Next.js 15 (v1.2) — concluído em 2026-07-15

**Objetivo:** Migrar a stack de Vite/React + FastAPI (Render) para Next.js 15 App Router
full-stack, hospedado inteiramente na Vercel.

**Entregue:** App Router com Route Handlers (`app/api/`), loader de Markdown em
`lib/content.ts`, páginas SSG para seções e cursos, Tailwind configurado, `vercel.json`
ajustado com `outputFileTracingIncludes` para servir `docs/` em produção. Backend Python
e frontend Vite removidos do monorepo.

---

### Sprint 6 — Confiabilidade e governança (v1.1) — concluído em 2026-07-15

**Objetivo:** Tornar cada dado rastreável no tempo (B-25), definir responsáveis de revisão
por área (B-22) e automatizar o lembrete semestral de atualização (B-26).

**Entregue:** Rodapé `_Última verificação: julho/2026_` nos 8 docs; campo
`ultima_verificacao` nas 13 fichas de curso; `.github/CODEOWNERS`; workflow
`revisao-semestral.yml`. B-23 fechado (PR template cobre).

---

### Sprint 5 — Publicação e Comunidade (v1.0) — concluído em 2026-07-15

**Objetivo:** Guia de Wi-Fi/e-mail para calouros (B-07), templates de issue/PR (B-21)
e canal de histórias de veteranos (B-14).

**Entregue:** Seção eduroam (EAP-TTLS/PAP) + e-mail institucional em
`links-importantes.md`; 4 issue templates YAML + PR template; CONTRIBUTING.md e
`historias-e-feedbacks.md` atualizados com links diretos para submissão.
Não entregou: deploy real (aguarda criação de contas Vercel/Render — ação humana).

---

### Sprint 4 — Conteúdo pesado: calendário, atléticas e Instagrams (v0.9) — concluído em 2026-07-15

**Objetivo:** Preencher datas do calendário 2026, atléticas e perfis Instagram confirmados.

**Entregue:** Extração completa do calendário oficial 2026 (Res. 214/2025/CUn); 9
atléticas do CTC confirmadas; perfis PRAE/RU/CTC/PROAFE; 13 fichas de curso com
atlética, CA e IG. Mantém 🚧: empresa júnior, dicas de veterano, resumo e onde
estudar — precisam vir de veteranos reais.

---

### Sprint 3 — Deploy, CI e testes (v0.8) — concluído em 2026-07-15

**Objetivo:** Configs de deploy (Vercel + Render), link-checker no CI e suite de testes.

**Entregue:** `vercel.json`, `render.yaml`, `docs/deploy.md`; workflow lychee (PR +
schedule semanal); suite pytest para health/sections/courses/search.

---

### Sprint 2 — Busca, conteúdo e polimento visual (v0.7) — concluído em 2026-07-15

**Objetivo:** UI de busca, 13 fichas de curso e refinamentos visuais.

**Entregue:** B-34 (busca), B-09 (13 fichas), B-38 (dark mode, badges, hover).

---

### Sprint 1 — Fundação da Plataforma (v0.6) — concluído em 2026-07-14

**Objetivo:** Esqueleto end-to-end da plataforma (backend FastAPI + frontend Vite).

**Entregue:** B-29, B-30, B-31, B-32, B-33, B-35.
