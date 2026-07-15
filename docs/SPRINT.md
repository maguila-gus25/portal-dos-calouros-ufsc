# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

Nenhum sprint ativo no momento. Rode `/sprint-plan` para começar.

---

## Sprints Anteriores

### Sprint 3 — Deploy, CI e testes (concluído em 2026-07-15)

**Objetivo:** Deixar o projeto pronto para publicar (Vercel + Render), colocar
validação automática de links e blindar o backend com testes.

| História | ID | Status |
|----------|----|--------|
| Configs de deploy Vercel (frontend) + Render (backend) | B-36 | ✅ (código pronto; contas a criar) |
| Link-checker no CI com lychee (PR + schedule semanal) | B-24 | ✅ |
| Suite pytest para health, sections, courses e search | — | ✅ |

**Retrospectiva:**
- **Entregue:** `frontend/vercel.json` + `render.yaml` como Blueprint,
  `docs/deploy.md` com o passo a passo dos dois serviços incluindo a amarra
  CORS_ORIGINS ↔ VITE_API_URL. Workflow `link-check.yml` roda lychee em push/PR
  e semanalmente (abre issue no schedule quando quebra). `.lycheeignore` cobre
  placeholders, Instagram e URLs de deploy futuras. Suite pytest com 15+ testes
  cobrindo health, listagem e leitura de seções (com validação da fonte única),
  cursos e busca; `requirements-dev.txt` e `pyproject.toml` configuram o
  ambiente de teste.
- **Adiado:** Deploy real (precisa que o usuário crie as contas Vercel + Render).
- **Para o próximo sprint:** rodar o deploy real e amarrar as URLs, começar a
  preencher os `_A preencher_` das atléticas/instagrams (destravar B-08), e
  iniciar B-06 (datas exatas do calendário acadêmico via PDF oficial).

### Sprint 2 — Busca, conteúdo e polimento visual (concluído em 2026-07-15)

**Objetivo:** UI de busca conectada ao endpoint existente, geração de todas as 13
fichas de curso do CTC com dados de coordenação já verificados, e refinamentos
visuais (dark mode, badges).

| História | ID | Status |
|----------|----|--------|
| UI de busca (input no header + página de resultados) | B-34 | ✅ |
| 13 fichas de curso do CTC com coordenação verificada | B-09 | ✅ |
| Refinamentos visuais (dark mode, badges, hover) | B-38 | ✅ |

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
