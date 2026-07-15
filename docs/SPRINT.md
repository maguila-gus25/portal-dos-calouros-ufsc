# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

Nenhum sprint ativo no momento. Rode `/sprint-plan` para começar.

---

## Sprints Anteriores

### Sprint 4 — Conteúdo pesado: calendário, atléticas e Instagrams (concluído em 2026-07-15)

**Objetivo:** Preencher o que estava travado por falta de fonte — datas do
calendário 2026 completo, atléticas de cada curso do CTC e Instagrams oficiais
confirmados — sem inventar dados.

| História | ID | Status |
|----------|----|--------|
| Datas completas 2026 do calendário oficial (Res. 214/2025/CUn) | B-06 | ✅ |
| Preencher 9 atléticas do CTC + festas tradicionais | — | ✅ |
| Confirmar @s oficiais PRAE, RU, CTC, PROAFE | — | ✅ |
| Enriquecer 13 fichas de curso com CA + atlética + IG | B-08 (parcial) | 🚧 |

**Retrospectiva:**
- **Entregue:** Extração completa do PDF do calendário oficial 2026 (Res.
  Normativa 214/2025/CUn) — todas as datas de matrícula, ajustes, trancamentos
  (22/05 e 23/09), recuperação e recesso; feriados de Florianópolis; previsão
  2027. Ficha do calendário-academico-2026 movida do lugar errado. Nove
  atléticas do CTC confirmadas via WebSearch nos Instagrams oficiais:
  A5, ATEC, ATACA, LE (@ateelufsc), ATM, A7, ATEQA, AESA, ATARQ. Festas
  tradicionais documentadas (Copa CTC, Copa Calouro, Trotes Integrados,
  Interatléticas). Perfis oficiais UFSC (PRAE, RU, CTC, PROAFE) confirmados
  em `instagrams.md`. Cada uma das 13 fichas de curso agora traz atlética,
  CA (onde há) e IG do curso, sempre com link para a fonte.
- **Não entregou (mantém 🚧):** "vida do curso" ainda tem `_A preencher_` em
  empresa júnior, dicas de veterano, resumo do curso e onde estudar. Isso
  precisa vir de veteranos reais, não de busca web.
- **Para o próximo sprint:** deploy real (Vercel + Render), preenchimento
  dos campos de PRAE/RU não críticos (`_A preencher_` restantes), e começar
  as dicas de veterano via canal de contribuição comunitária.

### Sprint 3 — Deploy, CI e testes (concluído em 2026-07-15)

**Objetivo:** Deixar o projeto pronto para publicar (Vercel + Render), colocar
validação automática de links e blindar o backend com testes.

| História | ID | Status |
|----------|----|--------|
| Configs de deploy Vercel (frontend) + Render (backend) | B-36 | ✅ (código pronto; contas a criar) |
| Link-checker no CI com lychee (PR + schedule semanal) | B-24 | ✅ |
| Suite pytest para health, sections, courses e search | — | ✅ |

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
