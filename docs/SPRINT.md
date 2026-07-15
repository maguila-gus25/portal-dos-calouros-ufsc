# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 8 — Encontrável e Documentado (v1.3)

**Objetivo:** Tornar o portal encontrável na web (SEO) e a base técnica confiável
(documentação atualizada para Next.js 15), além de entregar o FAQ e o checklist da
primeira semana — o conteúdo que o calouro mais precisa nos primeiros dias.

| História | ID | Agente | Status |
|----------|----|--------|--------|
| Atualizar CLAUDE.md e arquitetura.md para Next.js 15 | B-46 | architect | Done ✅ |
| SEO: generateMetadata por página + sitemap.xml + robots.txt | B-47 | frontend-dev | Done ✅ |
| FAQ dos calouros — docs/faq.md + página /faq | B-52 | content-editor → frontend-dev | Done ✅ |
| Checklist da primeira semana — docs/ + página /checklist | B-53 | content-editor → frontend-dev | Done ✅ |

> **B-53 é condicional:** entra se B-52 terminar sem consumir toda a capacidade do sprint.
> Em caso de restrição de tempo, B-53 vai para o radar do Sprint 9.

**Ordem de execução (dependências):**
1. B-46 e a parte `content-editor` de B-52 rodam **em paralelo** (ambos são tarefas de
   documentação/conteúdo sem sobreposição de arquivos).
2. B-47 (frontend-dev SEO) roda **em paralelo** com B-46 e B-52 content-editor.
3. A parte `frontend-dev` de B-52 roda **após** o content-editor entregar `docs/faq.md`.
4. B-53 roda **após** B-52 ser concluído, se houver capacidade.

## Definition of Done

- [x] `npm run lint` passa
- [x] `npm run build` passa (37 páginas geradas, sem erros)
- [x] `ui-ux-review` sem findings bloqueadores (1 blocker de task list CSS corrigido)
- [x] `docs/product-backlog.md` atualizado com novos status (✅ para itens concluídos)
- [x] README atualizado — stack, estrutura, roadmap e equipe de agentes atualizados

## Retrospectiva

- **Entregue:** B-46 — CLAUDE.md e arquitetura.md reescritos para Next.js 15 (ADR-8 adicionado).
  B-47 — `app/sitemap.ts`, `app/robots.ts` criados; `generateMetadata` com `description` e
  `openGraph` em todas as páginas (home, busca, cursos, seções, cursos/[slug]).
  B-52 — `docs/faq.md` com 16 perguntas verificadas, página `/faq`, entrada no SLUG_MAP e
  sitemap; FAQ aparece na home como 9ª seção e é indexado pela busca.
  B-53 — `docs/checklist-primeira-semana.md`, página `/checklist`, ícone na home grid.
  Fix de blocker UI/UX: task list items (`- [ ]`) estilizados corretamente no
  `prose-content` via CSS com `accent-color` brand-blue.
  README regenerado com stack, estrutura, roadmap v1.3 e equipe de agentes.
- **Adiado:** B-13 (histórias de veteranos) — bloqueado por conteúdo externo (nenhuma
  submissão real via issue template ainda). B-50 (banco Prisma) — item G preservado para
  sprint dedicado junto com B-37.
- **Para o próximo sprint (v1.4):** B-50 (banco), B-13 (histórias), B-19 (mapa interativo),
  B-49 (acessibilidade WCAG AA). Minor pendente: alinhar `docs/identidade-visual.md` para
  refletir uso de Poppins via Google Fonts (decisão tomada em sprint anterior, doc não
  atualizado).

---

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
