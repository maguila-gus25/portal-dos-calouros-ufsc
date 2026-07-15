# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

Nenhum sprint ativo no momento. Rode `/sprint-plan` para começar.

---

## Sprints Anteriores

### Sprint 2 — Busca, conteúdo e polimento visual (concluído em 2026-07-15)

**Objetivo:** UI de busca conectada ao endpoint existente, geração de todas as 13
fichas de curso do CTC com dados de coordenação já verificados, e refinamentos
visuais (dark mode, badges).

| História | ID | Status |
|----------|----|--------|
| UI de busca (input no header + página de resultados) | B-34 | ✅ |
| 13 fichas de curso do CTC com coordenação verificada | B-09 | ✅ |
| Refinamentos visuais (dark mode, badges, hover) | B-38 | ✅ |

**Retrospectiva:**
- **Entregue:** `SearchInput` no header + `SearchPage` consumindo `/api/search` com
  destaque do termo via `<mark>`. Todos os 13 cursos do CTC agora têm ficha em
  `docs/cursos/` com frontmatter YAML (coordenação com fonte oficial) e corpo
  seguindo o modelo com `_A preencher_` onde ainda falta info. Dark mode toggle
  no header, tokens Tailwind atualizados, componente `Badge` reutilizável nos
  cards de curso, hover mais evidente (translate + shadow-lg).
- **Adiado:** `B-36` (deploy Vercel + Render) — precisa de contas configuradas
  pelo usuário. `B-37` (envio de histórias/feedback) — v1.1.
- **Para o próximo sprint:** validar tudo rodando end-to-end (`pip install` +
  `npm install` + `npm run dev` + `uvicorn`), começar preenchimento dos campos
  `_A preencher_` nas fichas (turno de cada curso, atlética, empresa júnior,
  dicas), e planejar deploy.

### Sprint 1 — Fundação da Plataforma (concluído em 2026-07-14)

**Objetivo:** Levantar o esqueleto end-to-end da plataforma: backend FastAPI
lendo `docs/*.md` como JSON e frontend React+Vite consumindo essa API, com o
rodapé "não oficial" desde o dia 1.

| História | ID | Status |
|----------|----|--------|
| Mapa slug→arquivo sobre `docs/` | B-29 | ✅ |
| Esqueleto do backend FastAPI | B-30 | ✅ |
| Loader que lê `docs/*.md` e serve como JSON | B-31 | ✅ |
| Esqueleto do frontend Vite/React/Tailwind | B-32 | ✅ |
| Páginas de seções e curso consumindo a API | B-33 | ✅ |
| Rodapé fixo "não é site oficial da UFSC" | B-35 | ✅ |

**Retrospectiva:** backend FastAPI completo (health, sections, courses, search)
com loader de Markdown e mapa `SLUG_MAP` explícito. Frontend Vite+React+TS+
Tailwind com Layout (Header + Footer obrigatório), páginas Home/Section/Courses/
Course consumindo a API via TanStack Query. Identidade Facebook aplicada como
tokens Tailwind.
