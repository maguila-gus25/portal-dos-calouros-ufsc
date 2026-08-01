# Portal dos Calouros UFSC

<!-- manual:start -->
> Tudo o que quem acaba de chegar na UFSC precisa saber, reunido em um lugar só.

O **Portal dos Calouros** é uma iniciativa feita por estudantes, para estudantes.
A ideia é acabar com a caça a informação espalhada em grupos de WhatsApp, PDFs
perdidos e "boca a boca" de veterano. Aqui o calouro encontra, de forma
organizada e confiável: contatos das coordenações, como tirar a carteira do RU,
links importantes, atléticas e festas, perfis para acompanhar, o mapa do campus,
datas que não pode perder e histórias de quem já passou por isso.

**Primeira versão:** foco no **CTC — Centro Tecnológico** (Campus Trindade,
Florianópolis). A estrutura foi pensada para crescer e cobrir outros centros
depois.

> **Projeto independente feito por estudantes. Não é um site oficial da UFSC.**
<!-- manual:end -->

---

## Stack

| Camada | Tecnologia | Deploy |
|--------|-----------|--------|
| **Aplicação** | Next.js 15 App Router + TypeScript + Tailwind CSS | Vercel (auto-deploy em `main`) |
| **Conteúdo** | Markdown em `docs/` lido via `lib/content.ts` (gray-matter + marked) | Fonte única |
| **API** | Next.js Route Handlers em `app/api/` | Embutido no Next.js |

Sem backend separado. Sem banco de dados na v1 (Prisma + Postgres planejado para v1.1 — ver [backlog](docs/product-backlog.md)).

## Como rodar localmente

```bash
npm install
npm run dev      # servidor Next.js em localhost:3000
npm run build    # build de produção (SSG)
npm run lint     # ESLint
```

## Estrutura

```
portal-dos-calouros-ufsc/
├── app/                  ← páginas e Route Handlers (Next.js App Router)
│   ├── api/              ← /api/health, /api/sections, /api/courses, /api/centros, /api/search
│   ├── busca/            ← página de busca
│   ├── centros/          ← índice de centros (/centros) e página por centro (/centros/[slug])
│   ├── checklist/        ← checklist da primeira semana
│   ├── cursos/           ← fichas por curso (/cursos redireciona para /centros)
│   ├── faq/              ← perguntas frequentes
│   ├── mapa/             ← mapa interativo do campus (Leaflet.js)
│   └── secoes/[slug]/    ← seções de conteúdo (RU, links, datas…)
├── components/           ← Header, Footer, SearchInput, Badge…
│   └── sections/         ← UI dedicada por seção (links, datas, RU) + fallback prose
├── lib/
│   └── content.ts        ← loader de Markdown: slug → docs/*.md
├── docs/                 ← FONTE ÚNICA do conteúdo (Markdown)
│   ├── centros/          ← fichas por centro (ctc, cca, cse, cce, ccs)
│   ├── cursos/           ← fichas por curso (CTC + CCA + CSE)
│   ├── arquitetura.md    ← decisões técnicas e ADRs
│   ├── identidade-visual.md
│   ├── product-backlog.md
│   └── SPRINT.md         ← sprint atual e histórico
└── .claude/              ← equipe de agentes, skills e comandos Scrum
```

## Conteúdo (`docs/`)

| Seção | O que você encontra | Arquivo |
|-------|---------------------|---------|
| 🏛️ Coordenações | E-mail, telefone, sala e horário das coordenações do CTC | [`coordenacoes.md`](docs/coordenacoes.md) |
| 🍽️ Carteira do RU | Como se cadastrar e usar o Restaurante Universitário | [`carteira-ru.md`](docs/carteira-ru.md) |
| 🔗 Links importantes | CAGR, Moodle, e-mail, eduroam, PRAE | [`links-importantes.md`](docs/links-importantes.md) |
| 📅 Datas importantes | Calendário acadêmico 2026 completo | [`datas-importantes.md`](docs/datas-importantes.md) |
| 🎉 Atléticas e festas | Atléticas de cada curso, festas tradicionais | [`atleticas-e-festas.md`](docs/atleticas-e-festas.md) |
| 📸 Instagrams e perfis | Perfis oficiais e estudantis para seguir | [`instagrams.md`](docs/instagrams.md) |
| 🗺️ Mapa da universidade | Mapa interativo com marcadores do campus (Leaflet.js) | [`mapa.md`](docs/mapa.md) |
| 💬 Histórias e feedbacks | Relatos de veteranos e como enviar o seu | [`historias-e-feedbacks.md`](docs/historias-e-feedbacks.md) |
| ❓ FAQ | Perguntas frequentes dos calouros | [`faq.md`](docs/faq.md) |
| ✅ Checklist | O que fazer na primeira semana | [`checklist-primeira-semana.md`](docs/checklist-primeira-semana.md) |

O portal é organizado por **centro**: `/centros` lista todos os centros publicados (CTC, CCA, CSE, CCE, CCS) e cada `/centros/<slug>` mostra o conteúdo do centro e os seus cursos. Cada curso tem sua ficha em `docs/cursos/<slug>.md` com coordenação, atlética, CA e dicas.

## Equipe de Agentes

Este projeto é construído e mantido por uma equipe de subagentes do Claude Code seguindo um processo Scrum leve.

| Agente | Papel |
|--------|-------|
| `scrum-master` | Coordena a equipe e conduz rituais Scrum — sprint planning, run e review |
| `product-owner` | Mantém o backlog priorizado e define critérios de aceite |
| `architect` | Decisões técnicas de design — estrutura, escolha de libs, ADRs |
| `frontend-dev` | Implementa e modifica UI — páginas Next.js, componentes, Tailwind |
| `backend-dev` | Lógica server-side — Route Handlers, loader de Markdown, schemas |
| `content-editor` | Cria e revisa conteúdo em `docs/*.md` com fontes verificadas |
| `tester` | Roda `npm run lint` + `npm run build` e reporta pass/fail |
| `debugger` | Investiga e corrige falhas de build, tipo e lint |
| `ui-ux-designer` | Decisões de design visual, paleta, tipografia, acessibilidade |

**Slash commands disponíveis:**

| Comando | O que faz |
|---------|-----------|
| `/sprint-plan` | Grooming do backlog e planejamento do próximo sprint em `docs/SPRINT.md` |
| `/sprint-run` | Executa o sprint planejado despachando subagentes em ordem de dependência |
| `/sprint-review` | Fecha o sprint: lint/build/ui-ux-review, atualiza backlog e README |
| `/sprint-cycle` | Ciclo completo: plan → (confirmação) → run → review |
| `/standup` | Check de progresso/bloqueios (read-only) |

Veja [`docs/product-backlog.md`](docs/product-backlog.md) e [`docs/SPRINT.md`](docs/SPRINT.md) para o trabalho atual.

## Roadmap

- [x] **v0–v0.5** — Conteúdo do CTC, arquitetura e identidade visual definidos
- [x] **v0.6** — Fundação: Next.js 15 App Router + loader de Markdown + API routes (Sprint 1)
- [x] **v0.7** — Busca, 13 fichas de curso, dark mode (Sprint 2)
- [x] **v0.8** — Deploy Vercel, CI link-checker (Sprint 3)
- [x] **v0.9** — Calendário 2026, atléticas, Instagrams, fichas enriquecidas (Sprint 4)
- [x] **v1.0** — eduroam, templates de issue/PR, canal de histórias (Sprint 5)
- [x] **v1.1** — Data de verificação, CODEOWNERS, rotina semestral (Sprint 6)
- [x] **v1.2** — Migração para Next.js 15 App Router full-stack na Vercel (Sprint 7)
- [x] **v1.3** — SEO (sitemap, robots, OG tags), FAQ, checklist 1ª semana, docs atualizados (Sprint 8)
- [x] **v1.4** — Acessibilidade WCAG AA, mapa interativo (Leaflet.js), testes E2E Playwright no CI (Sprint 9)
- [x] **v1.5** — PWA instalável (manifest + ícones), Vercel Analytics, Lighthouse CI (Sprint 10)
- [x] **v1.6** — Mapa com todos os centros da UFSC + filtro por categoria (Sprint 12)
- [x] **v1.7–v1.8** — Infraestrutura multi-centro + CCA, CSE, CCE, CCS publicados (Sprints 13–14)
- [x] **v1.9** — Navegação por centro: `/centros` como raiz, header sem "CTC" (Sprint 15)
- [x] **v1.10** — Fichas dos cursos do CSE + atalho de cursos na página de centro (Sprint 16)
- [x] **v1.11** — Fixes (mapa CFM, nome do site), aba "Cursos" + listagem global, ferramentas da comunidade, UI estruturada das seções (Sprint 17)
- [ ] **Próximo** — Mais centros (CCJ, CFH, CFM…) e fichas de curso restantes (CCE, CCS)
- [ ] **v2.0** — Banco de dados (Prisma), formulário de histórias, autenticação OAuth, moderação
- [ ] **Futuro** — Simulador de grade, blog, avaliação de professores

## Como contribuir

Toda contribuição é bem-vinda — principalmente preencher os campos `_A preencher_`
com informação **verificada**. Veja o [guia de contribuição](CONTRIBUTING.md) e o
[Product Backlog](docs/product-backlog.md) para saber o que priorizar.

Regra de ouro: **cite a fonte** (link da coordenação, print do e-mail oficial,
página da UFSC). Sem fonte, o campo fica em branco.

## Princípios do conteúdo

1. **Confiável antes de completo** — melhor faltar do que estar errado.
2. **Fonte oficial sempre que possível** — link para a página da UFSC/coordenação.
3. **Linguagem de quem está chegando** — sem jargão, explicando as siglas.
4. **Mobile-first** — o calouro vai ler isso no celular, na fila do RU.
5. **Fácil de manter** — Markdown simples, fonte única em `docs/`.

## Licença

Conteúdo sob [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-BR).
Projeto **não oficial**, feito por estudantes, sem vínculo com a administração da UFSC.
Informações oficiais devem sempre ser confirmadas nos canais da universidade.
