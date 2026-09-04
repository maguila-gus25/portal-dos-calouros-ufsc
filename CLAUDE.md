# Portal dos Calouros UFSC

Projeto de estudantes para estudantes da UFSC. Reúne em um só lugar tudo que um calouro do CTC precisa: coordenações, RU, links, datas, atléticas, mapa e histórias de veteranos.

**Regra inegociável:** este é um projeto **não oficial**. Em toda página do site haverá rodapé fixo: *"Projeto independente feito por estudantes. Não é um site oficial da UFSC."* Nunca usar brasão, logotipo ou cores oficiais da UFSC de forma que sugira ser o site deles.

## Estado atual

- **v1 (atual, v1.23 — pós-Sprint 29):** plataforma Next.js 15 App Router full-stack — frontend e API no mesmo projeto, hospedado inteiramente na Vercel.
- **13 centros publicados** com fichas de curso completas (71 fichas em `docs/cursos/`, 13 em `docs/centros/`).
- Conteúdo institucional completo em `docs/` (fonte única).

## Arquitetura

```
Calouro ──HTTPS──> Next.js 15 App Router (Vercel)
                    ├── app/           ← páginas (SSG/SSR) e Route Handlers (API)
                    ├── lib/content.ts ← lê docs/*.md com gray-matter + marked
                    └── docs/*.md      ← FONTE ÚNICA do conteúdo institucional
```

**Princípio de fonte única:** o conteúdo institucional vive **apenas** em `docs/`. O loader em `lib/content.ts` lê esses arquivos e os expõe como JSON via Route Handlers. Nunca duplicar o conteúdo em outro lugar.

### Stack

| Camada | Tecnologia | Deploy |
|--------|-----------|--------|
| Framework | Next.js 15 App Router | Vercel |
| Linguagem | TypeScript | — |
| Estilo | Tailwind CSS | — |
| Loader de Markdown | gray-matter + marked | — |
| Conteúdo | Markdown em `docs/` | Fonte única |

## Estrutura do repositório

```
portal-dos-calouros-ufsc/
├── app/
│   ├── api/
│   │   ├── health/route.ts
│   │   ├── sections/route.ts
│   │   ├── sections/[slug]/route.ts
│   │   ├── courses/route.ts
│   │   ├── courses/[slug]/route.ts
│   │   ├── centros/route.ts
│   │   ├── centros/[slug]/route.ts
│   │   └── search/route.ts
│   ├── busca/page.tsx        ← noindex (gera URLs infinitas via ?q=)
│   ├── centros/page.tsx      ← índice de todos os centros
│   ├── centros/[slug]/page.tsx ← página do centro + cursos daquele centro
│   ├── cursos/page.tsx       ← listagem de cursos agrupada por centro
│   ├── cursos/[slug]/page.tsx
│   ├── secoes/[slug]/page.tsx ← faq/checklist/mapa daqui redirecionam 308
│   ├── faq/page.tsx          ← rota canônica do FAQ
│   ├── checklist/page.tsx    ← rota canônica do checklist
│   ├── mapa/page.tsx         ← rota canônica do mapa (com mapa interativo)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              ← Home
│   ├── providers.tsx
│   └── not-found.tsx
│
├── components/               ← Header, Footer, SearchInput, Badge, NavLinks,
│   │                            ThemeToggle, SearchResults, MapView, JsonLd…
│   └── sections/             ← UI estruturada por seção (Faq, Checklist, Ru,
│                                Links, Datas, Instagram, Historias…)
│
├── lib/
│   ├── content.ts            ← loader de Markdown (mapa slug→arquivo; listCenters/getCenter)
│   └── seo.ts                ← SITE_URL, absoluteUrl e builders de JSON-LD
│
├── docs/                     ← FONTE ÚNICA do conteúdo (Markdown)
│   │   ── conteúdo servido pela API ──
│   ├── coordenacoes.md       ← contatos das coordenações do CTC
│   ├── carteira-ru.md        ← como usar o RU e isenção
│   ├── links-importantes.md  ← CAGR, Moodle, e-mail institucional, PRAE...
│   ├── datas-importantes.md  ← calendário acadêmico
│   ├── atleticas-e-festas.md ← atléticas de cada curso e festas tradicionais
│   ├── instagrams.md         ← perfis oficiais e estudantis para acompanhar
│   ├── mapa.md               ← orientação no campus (prédios, RU, BU)
│   ├── historias-e-feedbacks.md ← relatos de veteranos
│   ├── faq.md                ← perguntas frequentes (H2 = categoria, H3 = pergunta)
│   ├── checklist-primeira-semana.md ← passo a passo dos primeiros dias
│   ├── centros/              ← fichas por centro de ensino (frontmatter YAML)
│   │   └── <slug-do-centro>.md    (ctc, cca, cse, cce, ccs)
│   └── cursos/               ← fichas por curso (frontmatter YAML)
│       └── <slug-do-curso>.md
│   │   ── documentação de dev (NÃO servida pela API) ──
│   ├── README.md
│   ├── arquitetura.md
│   ├── identidade-visual.md
│   ├── product-backlog.md
│   ├── SPRINT.md             ← sprint atual + histórico (mantido pelo Product Owner)
│   ├── deploy.md
│   └── _modelo-curso.md      ← template para criar novo curso
│
├── e2e/                      ← testes Playwright
├── scripts/                  ← geração de ícones do PWA
├── public/icons/
├── playwright.config.ts
├── lighthouserc.json         ← thresholds do Lighthouse CI
├── eslint.config.mjs
├── postcss.config.mjs
├── next.config.ts
├── package.json
├── skills-lock.json          ← skills instaladas via `npx skills`
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
├── CLAUDE.md                 ← este arquivo
├── README.md
└── CONTRIBUTING.md
```

## Convenções de conteúdo (`docs/`)

- Campos não confirmados ficam como `_A preencher_` — **nunca inventar dados**.
- Toda informação exige fonte oficial (link da UFSC, página da coordenação, PDF oficial).
- Fichas de curso em `docs/cursos/<slug>.md` usam frontmatter YAML (ver `docs/_modelo-curso.md`).
- Arquivos **não servidos** pela API: `arquitetura.md`, `identidade-visual.md`, `product-backlog.md`, `SPRINT.md`, `deploy.md`, `README.md`, `_modelo-curso.md`.

## Mapa de slugs da API

O loader em `lib/content.ts` mapeia slugs para arquivos em `docs/`:

| Slug | Arquivo |
|------|---------|
| `coordenacoes` | `docs/coordenacoes.md` |
| `ru` | `docs/carteira-ru.md` |
| `links` | `docs/links-importantes.md` |
| `datas` | `docs/datas-importantes.md` |
| `atleticas` | `docs/atleticas-e-festas.md` |
| `instagrams` | `docs/instagrams.md` |
| `mapa` | `docs/mapa.md` |
| `faq` | `docs/faq.md` |
| `checklist` | `docs/checklist-primeira-semana.md` |
| `historias` | `docs/historias-e-feedbacks.md` |

## API (Route Handlers em `app/api/`)

Base: `/api`.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Healthcheck |
| GET | `/api/sections` | Lista seções disponíveis |
| GET | `/api/sections/{slug}` | Conteúdo de uma seção |
| GET | `/api/courses` | Lista cursos do CTC |
| GET | `/api/courses/{slug}` | Ficha de um curso |
| GET | `/api/centros` | Lista centros de ensino disponíveis |
| GET | `/api/centros/{slug}` | Ficha de um centro (com seus cursos) |
| GET | `/api/search?q=` | Busca no conteúdo |

## Identidade visual

Paleta principal (`docs/identidade-visual.md` tem o detalhamento completo):

| Papel | Hex |
|-------|-----|
| Azul primário | `#1877F2` |
| Fundo do app | `#F0F2F5` |
| Superfície (cartões) | `#FFFFFF` |
| Texto principal | `#1C1E21` |
| Texto secundário | `#65676B` |

- Fontes: Poppins (headings) + `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` (corpo).
- Estilo: branco + azul, estilo Facebook — familiar, limpo, confiável.
- Mobile-first: o calouro lê no celular, na fila do RU.

## Comandos de desenvolvimento

```bash
npm install
npm run dev       # Next.js dev server em localhost:3000
npm run build     # build de produção
npm run lint      # ESLint
npm run test:e2e  # Playwright (e2e/)
```

## Fluxo de trabalho com Git

**Estratégia obrigatória: [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow).**
Nunca use Git Flow, trunk-based sem branch, ou qualquer outra estratégia.

Regras inegociáveis:
- **`main` é sempre deployável** — nunca commitar ou dar push direto em `main`.
- **Todo trabalho vai em branch de feature** criada a partir de `main`:
  - `feat/nome-descritivo` — nova funcionalidade
  - `fix/nome-do-bug` — correção de bug
  - `docs/o-que-mudou` — documentação técnica
  - `content/o-que-mudou` — conteúdo do portal (`docs/*.md`)
- Commits atômicos e frequentes na branch (ver `.claude/skills/commit-conventions/`).
- Ao terminar: abrir **Pull Request** para `main` com descrição clara do que mudou e por quê.
- Merge para `main` após revisão. **Deletar a branch após o merge.**
- Push para `main` dispara auto-deploy na Vercel.

## Deploy

| Serviço | Env vars |
|---------|---------|
| Vercel | Nenhuma obrigatória no momento; `NEXT_PUBLIC_SITE_URL` para SEO (opcional) |

- CI/CD: push para `main` → Vercel builda e deploya automaticamente.

## SEO / AEO / GEO

O portal tem structured data (JSON-LD) montado em `lib/seo.ts` e injetado por
`components/JsonLd.tsx`: `Organization` + `WebSite` sitewide, `FAQPage` em `/faq`,
`Course` nas fichas de curso e `BreadcrumbList` nas páginas aninhadas.

Regras ao mexer nisso:

- O portal é `Organization`, **nunca** `EducationalOrganization`/`CollegeOrUniversity`.
  Marcá-lo como instituição de ensino faz buscadores e assistentes de IA tratarem
  ele como fonte oficial da UFSC — viola a regra inegociável.
- Não declarar `offers`, `hasCourseInstance` ou `courseCode` em `Course`: o portal
  não tem esses dados confirmados, e structured data inventada é pior que ausente.
- `robots.ts` libera os crawlers de IA (GPTBot, ClaudeBot, PerplexityBot…) de
  propósito — ser citado por eles é objetivo do projeto.
- Cada rota tem uma única URL canônica. `/secoes/faq`, `/secoes/checklist` e
  `/secoes/mapa` respondem 308 para as rotas dedicadas; não reintroduzir as duas.

Skills disponíveis para esse trabalho: `seo`, `seo-geo`, `seo-aeo-best-practices`.

## Próximos passos (pós-Sprint 29)

Sprint 29 entregou: mensagem de contribuição estilo MyUFSC no rodapé e a auditoria
dos ~460 campos `_A preencher_` das 97 fichas.

**13 centros publicados:** CTC, CCA, CSE, CCE, CCS, CCJ, CFH, CFM, CCB, CED, CDS, CTJ, CTS.

**B-60 ✅ fechado** (todos os centros publicados). **B-61 ✅ fechado** (fichas para todos os centros).

**Estado do B-08 (qualidade das fichas):** campos localizáveis preenchidos com fonte
oficial na auditoria do Sprint 29 · dicas de veterano e "onde estudar" seguem
bloqueados (aguardam submissões reais).

Ver `docs/SPRINT.md` para o sprint atual e `docs/product-backlog.md` para o backlog
completo. Próximas frentes:

1. **B-08 (cauda)** — dicas de veterano e "onde estudar" quando houver submissões reais.
2. **B-13** — histórias de veteranos (desbloqueado assim que houver submissões via `historia-veterano.yml`).
3. **B-37 + B-50 + E13** — formulário de histórias + banco de dados + auth OAuth (v2.0, planejamento conjunto necessário).

Lacunas técnicas conhecidas, já no backlog:

- **B-79 — sem favicon.** Não existe `app/icon.*` nem `public/favicon.ico`.
- **B-80 — sem imagem de OG.** `openGraph.images` não está definido; links compartilhados
  no WhatsApp e Discord aparecem sem preview visual.
- **B-81 — sem testes unitários.** Existe e2e em Playwright, mas o loader de `lib/content.ts`
  não tem cobertura unitária.
