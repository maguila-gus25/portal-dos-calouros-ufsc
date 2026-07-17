# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Product Owner. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 11 — Confiável e Documentada de Verdade (v1.6)

**Objetivo:** Fechar as dívidas de confiabilidade que sobraram da v1 — sem inventar
conteúdo de veterano nem depender de banco/auth (v2). Alinhar a documentação de deploy à
arquitetura real (Next.js/Vercel), blindar o coração da fonte única (`lib/content.ts`) com
testes unitários, e completar apenas os campos de curso que têm fonte oficial checável.

| História | ID | Agente | Prioridade / Tam. | Status |
|----------|----|--------|-------------------|--------|
| Corrigir `docs/deploy.md` + `docs/README.md` para a arquitetura real (Next.js/Vercel-only) | B-60 | content-editor | Should / P | Not Started |
| Testes unitários (Vitest) para `lib/content.ts` — o loader da fonte única | B-62 | backend-dev | Should / M | Not Started |
| Preencher campos de curso verificáveis via fonte oficial (duração, e-mail SIN, CA, Instagram) | B-61 | content-editor | Should / M | Not Started |

### Critérios de aceite detalhados

**B-60 — `docs/deploy.md` e `docs/README.md` atualizados para Next.js/Vercel**

- [ ] `docs/deploy.md` descreve **apenas** deploy Next.js full-stack na Vercel — nenhuma
      menção a Render, `render.yaml`, `frontend/vercel.json`, `VITE_API_URL` ou CORS entre serviços.
- [ ] Seção de banco de dados do `deploy.md` reescrita para o plano real (Prisma + SQLite dev
      → Postgres gerenciado tipo Neon/Supabase em prod), referenciando B-50.
- [ ] `docs/README.md`: linha do épico "Arquitetura" não diz mais "React + Python"; linha
      "Deploy" não diz mais "Vercel (frontend) + Render (backend)".
- [ ] Nenhum arquivo servido pela API (`SLUG_MAP` de `lib/content.ts`) é alterado — mudança
      restrita a docs de desenvolvedor.

**B-62 — Testes unitários para `lib/content.ts`**

- [ ] Vitest instalado como devDependency, com config mínima rodando contra `lib/`.
- [ ] Casos: `listSections()` retorna as seções mapeadas; `getSection()` retorna `null` para
      slug inexistente e dados corretos para slug válido; `listCourses()` retorna os cursos de
      `docs/cursos/`; `getCourse()` resolve pelo campo `slug` do frontmatter e retorna `null`
      para slug inexistente; `search("")` retorna `[]`; `search()` encontra por título de curso
      e por conteúdo de seção.
- [ ] Novo script `npm run test:unit` roda a suíte localmente.
- [ ] CI roda `test:unit` em PRs para `main` e bloqueia merge em falha.
- [ ] Nenhum arquivo em `docs/*.md` é alterado por esta história.

**B-61 — Campos de curso verificáveis via fonte oficial**

- [ ] Duração (semestres) preenchida nas fichas ainda `_A preencher_`, com página oficial do
      curso (PPC/grade) como fonte.
- [ ] Centro Acadêmico preenchido onde falta, com fonte oficial.
- [ ] E-mail de coordenação de Sistemas de Informação preenchido a partir de fonte oficial.
- [ ] `instagram_curso` preenchido **apenas** onde existir perfil oficial confirmável; sem
      perfil identificável, o campo **permanece** `_A preencher_` — proibido inventar.
- [ ] `ultima_verificacao` atualizado em todo arquivo tocado.
- [ ] "Dicas de veterano", "Onde estudar" e "Empresa júnior" **não** são alterados (fora de
      escopo — ver B-08/B-10).
- [ ] Commit cita a URL da fonte oficial usada para cada dado novo.

### Ordem de execução e dependências

1. **B-60 primeiro** — texto puro, zero dependências; corrige uma fonte ativa de confusão
   para contribuidores. Toca `docs/deploy.md` e `docs/README.md`.
2. **B-62 segundo** — toca `package.json`/CI e `lib/`; não toca `docs/*.md`. Serial após
   B-60 para evitar conflito de PR, mas independente em arquivos.
3. **B-61 por último** — único item que exige pesquisa externa contra páginas oficiais da
   UFSC; maior risco de conclusão parcial. Os outros dois entregam valor mesmo se B-61 não
   fechar 100%. Toca `docs/cursos/*.md`.

> Sem dependências bloqueantes entre os três. B-60 e B-61 são ambos content-editor mas
> tocam arquivos disjuntos (`deploy.md`/`README.md` vs. `cursos/*.md`).

### Definition of Done (sprint inteiro)

- [ ] `npm run lint` passa (frontend)
- [ ] `npm run build` passa (frontend)
- [ ] `npm run test:unit` passa (novo — B-62)
- [ ] ui-ux-review sem findings bloqueadores (ou N/A: sprint sem mudança de UI)
- [ ] `docs/product-backlog.md` atualizado com novos status
- [ ] README atualizado se houve mudança estrutural

### O que NÃO entra e por quê

| Item | Motivo da exclusão |
|------|--------------------|
| B-50 / B-37 / E13 (banco + form + auth) | Escopo grande; precisa co-planejamento como um bloco único. Sem caso de uso visível ao calouro isolado. |
| B-13 (histórias de veteranos) | Sem submissão real via `historia-veterano.yml`. Inventar viola "confiável antes de completo". |
| B-10 (dicas por disciplina) | Mesmo bloqueio de conteúdo real. |
| B-08 (fechamento total da ficha) | Só a fatia verificável (B-61) entra; a fatia dependente de veterano permanece aberta. |

---

## Sprints Anteriores

### Sprint 10 — Instalável, Medido e Com Teto de Qualidade (v1.5) — concluído em 2026-07-16

**Objetivo:** Fechar a v1 com três melhorias de plataforma sem risco de conteúdo — PWA
instalável, analytics sem rastreio pessoal e um teto automatizado de qualidade (Lighthouse CI).

**Entregue:** B-48 (PWA idiomático via `app/manifest.ts` + ícones 192/512), B-51 (Vercel
Analytics sem cookies + nota de privacidade no Footer), B-55 (`lighthouserc.json` +
`.github/workflows/lighthouse.yml`). Pós-merge: reconciliação de implementação duplicada
(PWA migrado para `app/manifest.ts`; Lighthouse corrigido para `startServerCommand`;
Performance como `warn` para evitar flakiness, Accessibility/SEO como `error ≥ 0.9`).

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
