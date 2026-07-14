# Portal dos Calouros UFSC

Projeto de estudantes para estudantes da UFSC. Reúne em um só lugar tudo que um calouro do CTC precisa: coordenações, RU, links, datas, atléticas, mapa e histórias de veteranos.

**Regra inegociável:** este é um projeto **não oficial**. Em toda página do site haverá rodapé fixo: *"Projeto independente feito por estudantes. Não é um site oficial da UFSC."* Nunca usar brasão, logotipo ou cores oficiais da UFSC de forma que sugira ser o site deles.

## Estado atual

- **v0.5 (atual):** documentação completa em `docs/` — conteúdo institucional do CTC, arquitetura definida, identidade visual definida.
- **v1 (próximo):** plataforma React + Python — frontend Vite/TS/Tailwind na Vercel, backend FastAPI no Render.

## Arquitetura planejada

```
Calouro ──HTTPS──> React (Vercel) ──JSON──> FastAPI (Render)
                                              ├── docs/*.md  ← fonte única (conteúdo institucional)
                                              └── banco SQLite→Postgres (histórias, feedback)
```

**Princípio de fonte única:** o conteúdo institucional vive **apenas** em `docs/`. O backend lê esses arquivos e os expõe como JSON. Nunca duplicar o conteúdo em outro lugar.

### Stack

| Camada | Tecnologia | Deploy |
|--------|-----------|--------|
| Frontend | React 18 + Vite + TypeScript + Tailwind CSS | Vercel |
| Backend | Python + FastAPI + Pydantic v2 + SQLAlchemy | Render |
| Banco | SQLite (dev) → PostgreSQL (prod) | Render |
| Conteúdo | Markdown em `docs/` | Fonte única |

## Estrutura do repositório

```
portal-dos-calouros-ufsc/
├── docs/                      ← FONTE ÚNICA do conteúdo (Markdown)
│   │   ── conteúdo servido pela API ──
│   ├── coordenacoes.md        ← contatos das coordenações do CTC
│   ├── carteira-ru.md         ← como usar o RU e isenção
│   ├── links-importantes.md   ← CAGR, Moodle, e-mail institucional, PRAE...
│   ├── datas-importantes.md   ← calendário acadêmico
│   ├── atleticas-e-festas.md  ← atléticas de cada curso e festas tradicionais
│   ├── instagrams.md          ← perfis oficiais e estudantis para acompanhar
│   ├── mapa.md                ← orientação no campus (prédios, RU, BU)
│   ├── historias-e-feedbacks.md ← relatos de veteranos
│   └── cursos/                ← fichas por curso (frontmatter YAML)
│       └── <slug-do-curso>.md
│   │   ── documentação de dev (NÃO servida pela API) ──
│   ├── README.md
│   ├── arquitetura.md
│   ├── identidade-visual.md
│   ├── product-backlog.md
│   └── _modelo-curso.md       ← template para criar novo curso
│
├── backend/                   ← API Python (FastAPI) — a criar (B-30)
│   └── app/
│       ├── main.py            ← app, CORS, routers
│       ├── core/config.py     ← settings via env vars
│       ├── api/routes/        ← content.py, courses.py, search.py
│       ├── content/loader.py  ← lê docs/*.md → JSON (mapa slug→arquivo)
│       ├── models/            ← schemas Pydantic + models SQLAlchemy
│       └── db/session.py
│
├── frontend/                  ← App React (Vite) — a criar (B-32)
│   └── src/
│       ├── pages/             ← Home, Coordenacoes, RU, Curso, Busca...
│       ├── components/        ← Layout, Footer ("não oficial"), Card...
│       └── lib/api.ts         ← client da API (usa VITE_API_URL)
│
├── CLAUDE.md                  ← este arquivo
├── README.md
└── CONTRIBUTING.md
```

## Convenções de conteúdo (`docs/`)

- Campos não confirmados ficam como `_A preencher_` — **nunca inventar dados**.
- Toda informação exige fonte oficial (link da UFSC, página da coordenação, PDF oficial).
- Fichas de curso em `docs/cursos/<slug>.md` usam frontmatter YAML (ver `docs/_modelo-curso.md`).
- Arquivos **não servidos** pela API: `arquitetura.md`, `identidade-visual.md`, `product-backlog.md`, `README.md`, `_modelo-curso.md`.

## Mapa de slugs da API

O loader do backend mapeia slugs para arquivos em `docs/`:

| Slug | Arquivo |
|------|---------|
| `coordenacoes` | `docs/coordenacoes.md` |
| `ru` | `docs/carteira-ru.md` |
| `links` | `docs/links-importantes.md` |
| `datas` | `docs/datas-importantes.md` |
| `atleticas` | `docs/atleticas-e-festas.md` |
| `instagrams` | `docs/instagrams.md` |
| `mapa` | `docs/mapa.md` |
| `historias` | `docs/historias-e-feedbacks.md` |

## API (backend FastAPI)

Base: `/api`. Documentação automática em `/docs` (Swagger).

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Healthcheck |
| GET | `/api/sections` | Lista seções disponíveis |
| GET | `/api/sections/{slug}` | Conteúdo de uma seção |
| GET | `/api/courses` | Lista cursos do CTC |
| GET | `/api/courses/{slug}` | Ficha de um curso |
| GET | `/api/search?q=` | Busca no conteúdo |

v1.1 (com banco): `POST /api/stories`, `GET /api/stories`, `POST /api/feedback`.

## Identidade visual

Paleta principal (`docs/identidade-visual.md` tem o detalhamento completo):

| Papel | Hex |
|-------|-----|
| Azul primário | `#1877F2` |
| Fundo do app | `#F0F2F5` |
| Superfície (cartões) | `#FFFFFF` |
| Texto principal | `#1C1E21` |
| Texto secundário | `#65676B` |

- Fonte: `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- Estilo: branco + azul, estilo Facebook — familiar, limpo, confiável.
- Mobile-first: o calouro lê no celular, na fila do RU.

## Comandos de desenvolvimento

> Os diretórios `backend/` e `frontend/` ainda não existem (próximo sprint).
> Atualizar esta seção quando forem criados.

```bash
# Backend (quando existir)
cd backend
python -m uvicorn app.main:app --reload --port 8000

# Frontend (quando existir)
cd frontend
npm run dev
```

## Fluxo de trabalho com Git (GitHub Flow)

- **`main` é sempre deployável** — nunca commitar diretamente nela.
- Todo trabalho vai em uma **branch de feature** criada a partir de `main`:
  - `feat/nome-descritivo` — nova funcionalidade
  - `fix/nome-do-bug` — correção de bug
  - `docs/o-que-mudou` — documentação técnica
  - `content/o-que-mudou` — conteúdo do portal (`docs/*.md`)
- Commits atômicos e frequentes na branch (ver `.claude/skills/commit-conventions/`).
- Ao terminar: abrir **Pull Request** para `main` com descrição clara do que mudou e por quê.
- Merge para `main` após revisão. Deletar a branch após o merge.
- Push para `main` dispara auto-deploy: Vercel (frontend) e Render (backend).

## Deploy

| Camada | Serviço | Env vars necessárias |
|--------|---------|---------------------|
| Frontend | Vercel | `VITE_API_URL` |
| Backend | Render | `DATABASE_URL`, `CORS_ORIGINS`, `ENV` |

- CORS: backend libera apenas a origem do frontend (`CORS_ORIGINS`).
- CI/CD: push → Vercel builda frontend; Render redeploya backend.

## Próximos passos (sprint atual — E8)

Ver `docs/product-backlog.md` para o backlog completo. Prioridade imediata:

1. **B-29** — mapa `slug → arquivo` sobre `docs/` (sem mover nada)
2. **B-30 + B-31** — esqueleto FastAPI + loader de Markdown
3. **B-32 + B-33** — esqueleto frontend + páginas consumindo a API
4. **B-35** — rodapé fixo "não é site oficial da UFSC"

Em paralelo (conteúdo): **B-06** (datas do calendário) e **B-09** (13 fichas de curso).
