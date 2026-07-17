# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 10 — Instalável, Medido e Auditado (v1.5)

**Objetivo:** Deixar o portal instalável no celular (PWA), medir o uso de forma
privada (sem cookies/rastreio) e criar um gate de qualidade automático (Lighthouse CI)
que protege os ganhos de acessibilidade, SEO e performance a cada PR.

| História | ID | Agente | Status |
|----------|----|--------|--------|
| Analytics de privacidade (Vercel Analytics, sem cookies) + aviso de privacidade | B-51 | frontend-dev | Done ✅ |
| PWA instalável (`manifest.json`, ícones 192/512, `theme-color`, `<link rel="manifest">`) | B-48 | frontend-dev | Done ✅ |
| Lighthouse CI (Performance/Accessibility/SEO ≥ 90) em PRs para `main` | B-55 | tester | Done ✅ |

**Ordem de execução (dependências):**
1. `frontend-dev` (B-51) roda primeiro — script único no `app/layout.tsx`, zero risco de UI,
   começa a coletar dados reais de uso desde já.
2. `frontend-dev` (B-48) — `manifest.json`, ícones e `theme-color`; usa a paleta de
   `docs/identidade-visual.md`. Roda depois de B-51 (ambos tocam `app/layout.tsx`, então
   **sequencial**, não paralelo, para evitar conflito de arquivo).
3. `tester` (B-55) roda **por último** — audita o estado final do sprint (já com analytics
   e PWA) e configura o gate `lhci autorun` em `.github/workflows/`.

## Definition of Done

- [x] `npm run lint` passa (sem warnings/erros)
- [x] `npm run build` passa (39 páginas SSG, incl. `/manifest.webmanifest`)
- [x] `ui-ux-review` sem findings bloqueadores (1 nota informativa sobre `themeColor` no `viewport` export — correto/inevitável)
- [x] Lighthouse CI configurado com thresholds ≥ 90 (Performance/Accessibility/SEO), nível `error`
- [x] `docs/product-backlog.md` atualizado com ✅ para B-48, B-51, B-55
- [x] README atualizado (PWA, analytics, Lighthouse CI)

## Retrospectiva

- **Entregue:**
  - **B-51 (analytics de privacidade):** `@vercel/analytics` instalado; `<Analytics />` em
    `app/layout.tsx` (sem cookies, sem PII); aviso "Usamos analytics sem cookies e sem
    rastreamento pessoal." no rodapé (`components/Footer.tsx`).
  - **B-48 (PWA instalável):** `app/manifest.ts` gera `/manifest.webmanifest` (display
    standalone, `start_url: "/"`, `theme_color`/`background_color` da paleta); `export const
    viewport: Viewport = { themeColor: "#1877F2" }` no layout (forma idiomática Next.js 15,
    sem warning de build); ícones `public/icon-192.png` e `public/icon-512.png` gerados via
    gerador PNG puro em Node (fundo `#1877F2` + marca "C" branca, `purpose: any` + `maskable`).
  - **B-55 (Lighthouse CI):** `lighthouserc.json` (assertions `error`, `minScore: 0.9` em
    performance/accessibility/seo) + `.github/workflows/lighthouse.yml` (`lhci autorun` em
    push/PR → main, via `npx @lhci/cli`, sem poluir `package.json`). Audita `/`, `/faq` e
    `/cursos/ciencias-da-computacao`.
- **Adiado:** B-50 (Prisma/DB) e B-13 (histórias de veteranos) — bloqueados, como previsto:
  B-50 aguarda co-planejamento com B-37 + E13 (auth/moderação); B-13 aguarda submissões reais.
- **Percalços de processo:** o agente do B-48 travou (stream watchdog, 600s) após escrever
  `manifest.ts` + `viewport`, mas antes de gerar os ícones PNG. O Scrum Master inspecionou o
  working tree, confirmou o que já estava pronto e gerou os ícones diretamente (sem
  ImageMagick no ambiente — usou um encoder PNG puro em Node). Lição: em stall, verificar o
  estado parcial no disco antes de re-despachar; muitas vezes falta só o passo final.
- **`/mapa` fora do gate Lighthouse:** Leaflet + tiles externos do OpenStreetMap tornam o
  score de Performance instável em CI. Auditar o mapa exigiria um budget de performance
  separado — dívida técnica registrada para uma futura rodada (possível B-55b).
- **Para o próximo sprint (v1.6):** radar vazio de itens Could/P sem dependência. Próximo
  grooming deve reavaliar B-10 (dicas de veterano por disciplina) ou puxar do Horizonte v2.0
  se B-13/E13 destravarem. O gate Lighthouse agora protege a11y/SEO/perf a cada PR.

---

## Sprints Anteriores

### Sprint 10 — Instalável, Medido e Auditado (v1.5) — concluído em 2026-07-16

**Objetivo:** PWA instalável, analytics sem cookies e gate de qualidade Lighthouse CI.

**Entregue:** B-51 (`@vercel/analytics` + aviso de privacidade no rodapé); B-48 (PWA —
`app/manifest.ts`, `viewport.themeColor`, ícones 192/512); B-55 (Lighthouse CI com
thresholds ≥ 90 em Perf/A11y/SEO). Lint ✅ Build ✅ 39 páginas SSG.

---

### Sprint 9 — Acessível, Mapeado e Testado (v1.4) — concluído em 2026-07-15

**Objetivo:** Acessibilidade WCAG AA, mapa interativo do campus e testes E2E no CI.

**Entregue:** 7 blockers WCAG AA corrigidos (B-49); `/mapa` com Leaflet.js + 7 marcadores
(B-19); Playwright 8/8 testes + GitHub Actions (B-54). Fix transversal: h1 duplicado em
todas as páginas de seção. Lint ✅ Build ✅ 38 páginas SSG.

---

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
