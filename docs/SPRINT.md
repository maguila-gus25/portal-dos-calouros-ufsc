# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Scrum Master. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 5 — Publicação e Comunidade (v1.0) — concluído em 2026-07-15

**Objetivo:** Tornar o portal público e pronto para receber contribuições — deploy real
(Vercel + Render), guia de Wi‑Fi/e-mail para calouros (B-07), templates de issue/PR
(B-21) e canal oficial para envio de histórias de veteranos (B-14).

| História | ID | Status |
|----------|----|--------|
| Wi‑Fi eduroam + e‑mail no celular | B-07 | ✅ |
| Templates de issue e PR no GitHub | B-21 | ✅ |
| Canal de contribuição de histórias | B-14 | ✅ |
| Deploy real Vercel + Render | — | ⬜ (aguardando criação de contas) |

**Retrospectiva:**
- **Entregue:** Seção completa de eduroam em `links-importantes.md` com configuração
  passo a passo (EAP-TTLS/PAP, credencial `idufsc@ufsc.br`) e links para tutoriais
  oficiais da SeTIC. Seção de e-mail institucional com links para os FAQs de Android
  (Gmail + app E-mail) e iPhone. Quatro issue templates YAML (história de veterano,
  atualização de conteúdo, link quebrado, sugestão) e PR template com checklist de
  fonte oficial. CONTRIBUTING.md atualizado com instrução direta de envio de histórias.
  `historias-e-feedbacks.md` atualizado com links diretos para cada template.
- **Não entregou:** Deploy real — requer que o mantenedor crie as contas Vercel e
  Render e siga o playbook em `docs/deploy.md`. Configs de código já prontas (B-36 ✅).
- **Para o próximo sprint:** deploy real (ação humana), B-13 (coletar primeiras histórias
  via issues), B-25 (data de verificação nos dados), B-22 (CODEOWNERS).

---

## Sprint 6 — Confiabilidade e governança (v1.1) — concluído em 2026-07-15

**Objetivo:** Tornar cada dado rastreável no tempo (B-25), definir responsáveis de
revisão por área (B-22), automatizar o lembrete semestral de atualização (B-26) e
fechar B-23 (já coberto pelo PR template do Sprint 5).

| História | ID | Status |
|----------|----|--------|
| Data da última verificação em cada seção/curso | B-25 | ✅ |
| CODEOWNERS — responsáveis por área | B-22 | ✅ |
| Rotina semestral de revisão (issue recorrente no CI) | B-26 | ✅ |
| Checklist "fonte oficial" no PR | B-23 | ✅ (PR template já cobre) |

**Retrospectiva:**
- **Entregue:** Rodapé `_Última verificação: julho/2026_` adicionado aos 8 docs de
  conteúdo (coordenações, RU, datas, atléticas, instagrams, mapa, links, histórias).
  Campo `ultima_verificacao: "julho/2026"` adicionado ao frontmatter das 13 fichas
  de curso. `.github/CODEOWNERS` criado com `@maguila-gus25` como responsável por
  todas as áreas. Workflow `revisao-semestral.yml` criado: abre issue automática todo
  1º de fevereiro e 1º de agosto com checklist de itens críticos e menos críticos.
  B-23 fechado — PR template já inclui checklist "fonte oficial" desde o Sprint 5.
  Corrigido URL errado (gustavohramos → maguila-gus25) em `historias-e-feedbacks.md`.
- **Para o próximo sprint:** deploy real (Vercel + Render — ação humana), B-13
  (primeiras histórias via issues), B-15/B-17 (fechar como cobertos por E8).

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
