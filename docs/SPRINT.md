# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Product Owner. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 10 — Instalável, Medido e Com Teto de Qualidade (v1.5)

**Objetivo:** Fechar a v1 com três melhorias de plataforma sem risco de conteúdo: tornar
o portal instalável no celular como PWA, medir o uso real com analytics sem rastreio
pessoal, e enforcar um teto automatizado de qualidade (Lighthouse CI) que proteja
Performance, Acessibilidade e SEO a cada PR daqui em diante.

| Historia | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Lighthouse CI — thresholds Perf/A11y/SEO >= 90 no CI | B-55 | Could / P | Feito |
| PWA instalavel — manifest.json, icones 192/512, theme-color | B-48 | Could / P | Feito |
| Analytics de privacidade — Vercel Analytics sem cookies | B-51 | Could / P | Feito |

### Criterios de aceite detalhados

**B-55 — Lighthouse CI**

- [x] `lighthouserc.json` na raiz com assertions: `categories:performance >= 0.9`,
      `categories:accessibility >= 0.9`, `categories:seo >= 0.9`.
- [x] Workflow `.github/workflows/lighthouse.yml` roda em PRs para `main`
      usando `lhci autorun` contra o build de producao (`npm run build && lhci autorun`).
- [x] Falha em qualquer threshold bloqueia merge (status check obrigatorio).
- [x] Resultado do relatorio Lighthouse salvo como artifact do workflow (retencao 30 dias).

**B-48 — PWA instalavel**

- [x] `public/manifest.json` com: `name`, `short_name`, `start_url: "/"`,
      `display: "standalone"`, `background_color`, `theme_color` (#1877F2),
      array `icons` com entradas 192x192 e 512x512 (PNG).
- [x] Icones `public/icons/icon-192.png` e `public/icons/icon-512.png` criados
      (placeholder geometrico SVG na cor primaria; PNGs gerados via `scripts/generate_icons.py`).
- [x] Tag `<link rel="manifest" href="/manifest.json">` presente no `<head>`
      via `app/layout.tsx` (metadata API Next.js 15: `manifest: "/manifest.json"`).
- [x] Meta `<meta name="theme-color" content="#1877F2">` no `<head>`
      via `export const viewport: Viewport = { themeColor: "#1877F2" }` em `app/layout.tsx`.
- [ ] Chrome DevTools > Application > Manifest nao exibe erros. (verificacao manual apos deploy)
- [ ] Chrome no Android exibe o banner "Adicionar a tela inicial" (verificacao manual apos deploy).

**B-51 — Analytics de privacidade**

- [x] `@vercel/analytics` instalado e `<Analytics />` inserido em `app/layout.tsx`.
- [ ] Nenhum cookie de rastreio definido (verificavel via DevTools > Application > Cookies).
- [ ] Dashboard Vercel Analytics exibe pageviews por rota apos primeiro deploy.
- [x] Rodape exibe nota de privacidade: "Usamos Vercel Analytics para contar visitas
      sem armazenar dados pessoais." (texto curto, sem link externo obrigatorio).
- [x] `docs/product-backlog.md` atualizado com B-51 marcado como feito.

### Ordem de execucao recomendada e dependencias

1. **B-55 primeiro** — e CI puro: nenhuma mudanca no codigo do app, apenas adicionar
   `lighthouserc.json` e o workflow. Estabelece o teto que validara os proximos dois
   entregaveis antes do merge.
2. **B-48 segundo** — adiciona arquivos estaticos (`manifest.json`, icones) e duas
   linhas em `layout.tsx`. Independente de B-55, mas a pontuacao PWA do Lighthouse
   sobe com o manifest presente; ter B-55 antes confirma isso automaticamente.
3. **B-51 terceiro** — instala uma dependencia npm e adiciona um componente ao layout.
   Sem dependencias de B-48 ou B-55; pode rodar em paralelo com B-48 se houver dois
   agentes, mas a ordem serial e mais segura para evitar conflito em `layout.tsx`.

> Nao ha dependencias bloqueantes entre os tres itens. A ordem acima minimiza conflitos
> em `app/layout.tsx` (B-48 e B-51 editam o mesmo arquivo).

### Definicao de Pronto (sprint inteiro)

- [x] `npm run lint` passa sem erros.
- [x] `npm run build` passa (38+ paginas SSG, sem erros de build).
- [x] Lighthouse CI workflow adicionado e passando no branch do sprint.
- [ ] Chrome DevTools confirma manifest sem erros (B-48). (verificacao manual apos deploy)
- [ ] Vercel Analytics aparece no dashboard apos deploy de preview (B-51). (verificacao apos deploy)
- [x] `docs/product-backlog.md` com B-48, B-51, B-55 marcados como feito.
- [x] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar o sprint.

### O que NAO entra e por que

| Item | Motivo da exclusao |
|------|--------------------|
| B-50 (Prisma + banco) | Escopo grande (G); requer co-planejamento com B-37 + E13 no mesmo sprint para ter caso de uso visivel ao calouro. |
| B-37 (formulario de historias) | Depende de B-50 e de E13 (auth + moderacao). Nao entra sem banco e login prontos. |
| B-13 (historias de veteranos) | Bloqueado: nenhuma submissao real confirmada via `historia-veterano.yml`. Inventar dados viola "Confiavel antes de completo". |
| B-10 (dicas por disciplina) | Mesmo bloqueio de conteudo real que B-13. |
| B-56 / E13 (auth OAuth) | Horizonte v2.0; sem caso de uso na v1 sem banco. |

---

## Retrospectiva do Sprint 10

**Concluido em:** 2026-07-16

**Entregue:**
- **B-55** — `lighthouserc.json` (Perf/A11y/SEO ≥ 0.9) + `.github/workflows/lighthouse.yml`
  que roda `npm ci && npm run build && npx lhci autorun` em PRs para `main`. `@lhci/cli`
  como devDependency.
- **B-48** — `public/manifest.json` completo (name/short_name/start_url/display/
  background_color/theme_color #1877F2); ícones reais 192×512 gerados como PNGs sólidos
  #1877F2 via `scripts/generate-icons-minimal.mjs` (Node builtin, zlib DEFLATE nível 9,
  ~413B e ~1.5KB); versões SVG com letra "C" branca para browsers que suportam;
  `manifest: "/manifest.json"` em `metadata` e `themeColor: "#1877F2"` em `viewport`
  do `app/layout.tsx` (metadata API do Next.js 15).
- **B-51** — `@vercel/analytics@^1.5.0` instalado do registry (não stub); `<Analytics />`
  de `@vercel/analytics/next` no `<body>` do layout; nota de privacidade curta no
  `Footer.tsx`.

**O que foi bem:**
- Sequência serial B-55 → B-48 → B-51 evitou conflitos em `app/layout.tsx` como planejado.
- `npm run lint` sem warnings; `npm run build` verde com 38 páginas SSG.
- Scripts de geração de ícones consolidados em um único script Node minimalista (sem
  dependência externa).

**Ajustes durante a execução:**
- Primeira tentativa de `frontend-dev` criou stub falso de `@vercel/analytics` em
  `node_modules/`; substituído por `npm install` real do registry (package-lock regenerado).
- PNGs iniciais ficaram enormes (787KB) por usar DEFLATE sem compressão; script trocado
  para `zlib.deflateSync` nativo do Node.
- Scripts de ícones redundantes (Python + canvas) removidos; sobrou apenas o Node minimal.

**Verificações manuais pendentes (pós-deploy Vercel):**
- Chrome DevTools > Application > Manifest sem erros.
- Dashboard Vercel Analytics recebendo pageviews.
- Chrome no Android exibindo banner "Adicionar à tela inicial".

**Adiado:** Nenhum item fora do escopo do sprint.

**Para o próximo sprint:** Substituir os ícones PWA placeholder por arte final (letra "C"
ou logo definitivo do portal) quando o design estiver pronto. Considerar B-50 + B-37 + E13
como bloco integrado (banco + histórias + auth) para desbloquear conteúdo dinâmico da v2.

---

## Sprints Anteriores

### Sprint 9 — Acessivel, Mapeado e Testado (v1.4) — concluido em 2026-07-16

**Objetivo:** Tornar o portal utilizavel por todos (WCAG AA), dar ao calouro um mapa
interativo do campus e proteger a base com testes E2E automatizados no CI.

**Entregue:** B-49 — audit WCAG AA com 7 blockers identificados e todos corrigidos:
`ink.secondary` para #4B5563 (ratio 7.6:1), `brand.blueButton` para #1565C0 para botoes,
skip link em `app/layout.tsx`, foco visivel no `SearchInput`, text-shadow no hero,
badge `info` com cor correta, Footer sem opacidade, aria-hidden/aria-label em componentes,
area de toque nos NavLinks; `docs/identidade-visual.md` atualizado com ratios calculados.
B-19 — `app/mapa/page.tsx` + `components/MapView.tsx` com Leaflet.js (SSR-safe via
`MapViewClient`), 7 marcadores categorizados, legenda flutuante, tile layer OSM, URL
canonica /mapa com entrada no sitemap.
B-54 — `playwright.config.ts`, `e2e/smoke.spec.ts` (8 smoke tests, 8/8 passed),
`.github/workflows/e2e.yml`. Fix transversal: `lib/content.ts` remove `<h1>` inicial
do HTML gerado (evita duplicata). Build fix: `components/MapViewClient.tsx` para resolver
restricao de `dynamic()` com `ssr: false` em Server Components no Next.js 15.
Lint e Build passam; 38 paginas SSG.

**Nao entregue:** B-13 e B-50 — bloqueados como previsto.

---

### Sprint 8 — Encontravel e Documentado (v1.3) — concluido em 2026-07-15

**Objetivo:** SEO, documentacao tecnica atualizada, FAQ e checklist da primeira semana.

**Entregue:** CLAUDE.md + arquitetura.md reescritos para Next.js 15 (B-46); sitemap.xml,
robots.txt e OG tags em todas as paginas (B-47); FAQ com 16 perguntas + pagina /faq (B-52);
checklist da primeira semana + pagina /checklist (B-53). Fix de CSS para task list items.
Lint e Build passam; 37 paginas SSG.

---

### Sprint 7 — Migracao Next.js 15 (v1.2) — concluido em 2026-07-15

**Objetivo:** Migrar a stack de Vite/React + FastAPI (Render) para Next.js 15 App Router
full-stack, hospedado inteiramente na Vercel.

**Entregue:** App Router com Route Handlers (`app/api/`), loader de Markdown em
`lib/content.ts`, paginas SSG para secoes e cursos, Tailwind configurado, `vercel.json`
ajustado com `outputFileTracingIncludes` para servir `docs/` em producao. Backend Python
e frontend Vite removidos do monorepo.

---

### Sprint 6 — Confiabilidade e governanca (v1.1) — concluido em 2026-07-15

**Objetivo:** Tornar cada dado rastreaavel no tempo (B-25), definir responsaveis de revisao
por area (B-22) e automatizar o lembrete semestral de atualizacao (B-26).

**Entregue:** Rodape `_Ultima verificacao: julho/2026_` nos 8 docs; campo
`ultima_verificacao` nas 13 fichas de curso; `.github/CODEOWNERS`; workflow
`revisao-semestral.yml`. B-23 fechado (PR template cobre).

---

### Sprint 5 — Publicacao e Comunidade (v1.0) — concluido em 2026-07-15

**Objetivo:** Guia de Wi-Fi/e-mail para calouros (B-07), templates de issue/PR (B-21)
e canal de historias de veteranos (B-14).

**Entregue:** Secao eduroam (EAP-TTLS/PAP) + e-mail institucional em
`links-importantes.md`; 4 issue templates YAML + PR template; CONTRIBUTING.md e
`historias-e-feedbacks.md` atualizados com links diretos para submissao.

---

### Sprint 4 — Conteudo pesado: calendario, atleticas e Instagrams (v0.9) — concluido em 2026-07-15

**Objetivo:** Preencher datas do calendario 2026, atleticas e perfis Instagram confirmados.

**Entregue:** Extracao completa do calendario oficial 2026 (Res. 214/2025/CUn); 9
atleticas do CTC confirmadas; perfis PRAE/RU/CTC/PROAFE; 13 fichas de curso com
atletica, CA e IG.

---

### Sprint 3 — Deploy, CI e testes (v0.8) — concluido em 2026-07-15

**Objetivo:** Configs de deploy (Vercel + Render), link-checker no CI e suite de testes.

**Entregue:** `vercel.json`, `render.yaml`, `docs/deploy.md`; workflow lychee (PR +
schedule semanal); suite pytest para health/sections/courses/search.

---

### Sprint 2 — Busca, conteudo e polimento visual (v0.7) — concluido em 2026-07-15

**Objetivo:** UI de busca, 13 fichas de curso e refinamentos visuais.

**Entregue:** B-34 (busca), B-09 (13 fichas), B-38 (dark mode, badges, hover).

---

### Sprint 1 — Fundacao da Plataforma (v0.6) — concluido em 2026-07-14

**Objetivo:** Esqueleto end-to-end da plataforma (backend FastAPI + frontend Vite).

**Entregue:** B-29, B-30, B-31, B-32, B-33, B-35.
