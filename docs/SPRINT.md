# Sprint 1 — Fundação da Plataforma

## Objetivo
Levantar o esqueleto end-to-end da plataforma: backend FastAPI lendo `docs/*.md` como JSON e frontend React+Vite consumindo essa API, com o rodapé "não oficial" desde o dia 1.

## Histórias
| História | ID | Agente | Status |
|----------|----|--------|--------|
| Mapa slug→arquivo sobre `docs/` | B-29 | backend-dev | ✅ Done |
| Esqueleto do backend FastAPI (health, config, CORS) | B-30 | backend-dev | ✅ Done |
| Loader que lê `docs/*.md` e serve como JSON | B-31 | backend-dev | ✅ Done |
| Esqueleto do frontend Vite/React/Tailwind | B-32 | frontend-dev | ✅ Done |
| Páginas de seções e curso consumindo a API | B-33 | frontend-dev | ✅ Done |
| Rodapé fixo "não é site oficial da UFSC" | B-35 | frontend-dev | ✅ Done |

## Definition of Done
- [x] Backend implementado em `backend/` com estrutura FastAPI padrão
- [x] `/api/sections/coordenacoes` retorna o conteúdo de `docs/coordenacoes.md` como JSON
- [x] Frontend implementado em `frontend/` com Vite + React + TS + Tailwind
- [x] Home lista as seções; página de seção renderiza o Markdown
- [x] Rodapé "não é site oficial da UFSC" aparece em todas as páginas
- [x] `README.md` atualizado com a nova estrutura

## Retrospectiva

- **Entregue:** backend FastAPI completo (health, sections, courses, search) com loader
  de Markdown e mapa `SLUG_MAP` explícito; frontend Vite+React+TS+Tailwind com Layout
  (Header + Footer obrigatório), páginas Home/Section/Courses/Course consumindo a API
  via TanStack Query; identidade visual Facebook aplicada como tokens Tailwind
  customizados; ambos os README de cada pacote.
- **Adiado:**
  - **B-34** (busca `/api/search` na UI) — endpoint já existe no backend, falta o
    componente de busca no header e a `SearchPage`.
  - **B-36** (deploy Vercel + Render) — código pronto, falta configurar os projetos.
  - **B-37** (envio de histórias/feedback com banco) — v1.1, ainda sem urgência.
  - **B-38** (aplicação plena da identidade visual em todos os componentes) —
    parcialmente já feito via tokens; refinamentos ficam pro próximo sprint.
- **Para o próximo sprint:** rodar `npm install` + `pip install -r requirements.txt`
  e validar a integração ponta a ponta manualmente (ou via skill `verify`) antes
  de mais features. Considerar adicionar `pytest` mínimo no backend.

---

## Sprints Anteriores

_Nenhum sprint concluído antes do Sprint 1._
