# 🏗️ Arquitetura — Portal dos Calouros UFSC

Documento de arquitetura da evolução do portal de um repositório de Markdown para
uma **aplicação web React + Python**.

> **Projeto independente, feito por estudantes. NÃO é um site oficial da UFSC.**
> Esse aviso é parte da arquitetura: aparece no rodapé de toda página (ver
> [Identidade Visual](identidade-visual.md)).

## Visão geral

```
┌───────────────────────────────────────────────┐
│                Calouro (celular)               │
└───────────────────────┬───────────────────────┘
                        │ HTTPS
┌───────────────────────▼───────────────────────┐
│   FRONTEND — React + Vite + TS + Tailwind      │
│   Hospedagem: Vercel                            │
│   Consome a API por fetch (TanStack Query)      │
└───────────────────────┬───────────────────────┘
                        │ HTTPS (JSON) — VITE_API_URL
┌───────────────────────▼───────────────────────┐
│   BACKEND — Python + FastAPI                    │
│   Hospedagem: Render                            │
│   ├── Content layer: lê Markdown de docs/       │
│   └── DB layer: SQLite→Postgres (dados dinâmicos)│
└──────────┬───────────────────────┬─────────────┘
           │                       │
   ┌───────▼────────┐     ┌────────▼─────────┐
   │   docs/*.md     │     │  Banco de dados  │
   │ (institucional) │     │ (histórias, etc.)│
   │ FONTE ÚNICA/PR  │     │  v1.1 em diante  │
   └────────────────┘     └──────────────────┘
```

**Princípio híbrido + fonte única:** o conteúdo institucional (coordenações, RU,
links, datas, mapa) vive em **um único lugar** — os arquivos Markdown de `docs/`.
Você edita **um arquivo** e o site inteiro atualiza; não há conteúdo duplicado. O
backend lê esses arquivos e os expõe como JSON (contribuição por Pull Request). Os
dados **dinâmicos** (histórias, feedback e, no futuro, comentários e avaliações)
vivem no **banco de dados**.

---

## Stack

### Frontend
| Item | Escolha | Porquê |
|------|---------|--------|
| Framework | **React 18 + Vite** | SPA rápida, build simples, ótimo DX |
| Linguagem | **TypeScript** | Segurança de tipos, menos bugs |
| Estilo | **Tailwind CSS** | Mobile-first, rápido, consistente |
| Roteamento | **React Router** | Páginas por seção/curso |
| Dados | **TanStack Query** | Cache e estado de requisições à API |
| Deploy | **Vercel** | Grátis, deploy automático por push |

### Backend
| Item | Escolha | Porquê |
|------|---------|--------|
| Framework | **FastAPI** | Rápido, tipado (Pydantic), docs automáticas (OpenAPI) |
| Runtime | **Uvicorn** | Servidor ASGI |
| Markdown | **python-frontmatter + markdown-it-py** | Ler `docs/*.md` com metadados |
| Banco | **SQLAlchemy** + SQLite (dev) → **PostgreSQL** (prod) | Simples no início, robusto na produção |
| Validação | **Pydantic v2** | Schemas de entrada/saída |
| Deploy | **Render** | Web service Python grátis |

> A API já vem com documentação interativa em `/docs` (Swagger) e `/redoc`,
> nativas do FastAPI.

---

## Estrutura do repositório (monorepo)

```
portal-dos-calouros-ufsc/
├── docs/                    ← FONTE ÚNICA do conteúdo (Markdown) — editar aqui
│   │   ── conteúdo servido pela API (mapeado por slug no loader) ──
│   ├── coordenacoes.md
│   ├── carteira-ru.md
│   ├── links-importantes.md
│   ├── datas-importantes.md
│   ├── atleticas-e-festas.md
│   ├── instagrams.md
│   ├── mapa.md
│   ├── historias-e-feedbacks.md
│   ├── cursos/
│   │   └── <curso>.md       ← fichas por curso (com frontmatter)
│   │   ── documentação de dev (NÃO servida pela API) ──
│   ├── README.md            ← índice
│   ├── arquitetura.md       ← este arquivo
│   ├── identidade-visual.md
│   ├── product-backlog.md
│   └── _modelo-curso.md
│
├── backend/                 ← API Python (FastAPI)
│   ├── app/
│   │   ├── main.py          ← cria o app, CORS, inclui routers
│   │   ├── core/config.py   ← settings (env vars): DOCS_DIR, CORS, DB
│   │   ├── api/routes/      ← content.py, courses.py, search.py, (v1.1) stories.py
│   │   ├── content/loader.py← lê e parseia docs/*.md → modelos (mapa slug→arquivo)
│   │   ├── models/          ← schemas Pydantic + models SQLAlchemy
│   │   └── db/session.py    ← engine e sessão do banco
│   ├── tests/
│   ├── requirements.txt (ou pyproject.toml)
│   └── README.md
│
├── frontend/                ← App React (Vite)
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages/           ← Home, Coordenacoes, RU, Curso, Busca...
│   │   ├── components/      ← Layout, Footer (com o aviso "não oficial"), Card...
│   │   ├── lib/api.ts       ← client da API (usa VITE_API_URL)
│   │   └── styles/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── README.md
```

> **Fonte única:** o conteúdo **fica em `docs/`** — sem pasta `content/` separada.
> Assim você altera a informação em **um só lugar** e o site reflete. O loader do
> backend tem um **mapa explícito `slug → arquivo`** (ex.: `coordenacoes` →
> `docs/coordenacoes.md`); os arquivos de documentação de dev (`arquitetura.md`,
> `product-backlog.md`, `identidade-visual.md`, `README.md`, `_modelo-curso.md`)
> **não** são servidos como conteúdo.

---

## API (v1)

Base: `/api`. Respostas em JSON. Documentação automática em `/docs`.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Healthcheck |
| GET | `/api/sections` | Lista as seções de conteúdo disponíveis |
| GET | `/api/sections/{slug}` | Conteúdo de uma seção (ex.: `coordenacoes`, `ru`, `links`) em HTML/estruturado |
| GET | `/api/courses` | Lista dos cursos do CTC (a partir do frontmatter das fichas) |
| GET | `/api/courses/{slug}` | Ficha de um curso |
| GET | `/api/search?q=` | Busca no conteúdo institucional |

### v1.1 (com banco de dados)
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/stories` | Enviar história de veterano (entra como *pendente*) |
| GET | `/api/stories` | Listar histórias **aprovadas** |
| POST | `/api/feedback` | Enviar feedback sobre o portal |

Moderação de histórias/feedback: simples no começo (aprovação manual via flag no
banco); painel de moderação é item de backlog.

---

## Modelo de dados

### Conteúdo (Markdown → API, sem banco)
Fichas de curso usam frontmatter (já definido em `_modelo-curso.md`):
```yaml
---
curso: Ciências da Computação
slug: ciencias-da-computacao
centro: CTC
grau: Bacharelado
turno: Diurno
coordenacao: { email: cco@contato.ufsc.br, telefone: "(48) 3721-7553", site: https://cco.ufsc.br/ }
---
```

### Banco de dados (v1.1+)
```
Story
  id            PK
  curso         string (slug do curso)
  autor         string | null   (pode ser anônimo)
  texto         text
  status        enum(pending, approved, rejected)   default pending
  created_at    datetime

Feedback
  id, mensagem, contato?(opcional), created_at

# Futuro (ver roadmap)
ProfessorReview  id, professor, disciplina, nota, texto, status, created_at
Comment          id, entity_type, entity_id, autor, texto, status, created_at
Post (blog)      id, titulo, slug, corpo_md, autor, publicado_em
```

---

## Deploy e ambientes

| Camada | Serviço | Variáveis de ambiente |
|--------|---------|-----------------------|
| Frontend | **Vercel** | `VITE_API_URL` (URL do backend) |
| Backend | **Render** | `DATABASE_URL`, `CORS_ORIGINS`, `ENV` |

- **CORS:** o backend libera apenas a origem do frontend (`CORS_ORIGINS`).
- **CI/CD:** push na branch → Vercel builda o frontend; Render redeploya o backend.
- **Domínio:** começa com os subdomínios grátis (`*.vercel.app` / `*.onrender.com`);
  domínio próprio é opcional depois.
- **Banco:** SQLite em dev (arquivo local); PostgreSQL gerenciado no Render em prod.

---

## Segurança, ética e conformidade

Pontos que a arquitetura precisa respeitar desde já:

1. **Não oficial:** rodapé fixo em toda página — *"Projeto independente feito por
   estudantes. Não é um site oficial da UFSC."* Nada de brasão/marca oficial.
2. **Dados pessoais:** não publicar dado pessoal de terceiros sem consentimento;
   contatos são apenas os **institucionais** já públicos.
3. **Conteúdo enviado por usuários** (histórias, futuramente comentários e
   avaliações de professores): passa por **moderação** antes de publicar —
   proteção contra difamação e conteúdo ofensivo.
4. **Monetização por divulgação:** anúncios/parcerias devem ser **claramente
   marcados** como publicidade e nunca sugerir endosso da UFSC.

---

## Roadmap de arquitetura (futuras funcionalidades)

Funcionalidades que você pediu para já deixar mapeadas. Não entram na v1, mas a
arquitetura acima comporta todas (ver épicos novos no [backlog](product-backlog.md)):

| Funcionalidade | O que exige | Cuidados |
|----------------|-------------|----------|
| **Avaliação de professores** | Tabela `ProfessorReview`, moderação, autenticação leve | Difamação: moderar; considerar termos de uso |
| **Simulador de grade (tipo MatrUFSC)** | Dados de turmas/horários (fonte: CAGR), motor de conflitos no front | Obter dados de horários de forma sustentável; respeitar termos da UFSC |
| **Blog** | Tabela `Post` (ou Markdown em `docs/blog/`), página de listagem | Curadoria editorial |
| **Comentários** | Tabela `Comment`, moderação, autenticação | Spam e moderação |
| **Monetização (divulgação)** | Slots de anúncio/parceria no front, painel simples | Transparência (marcar como publicidade), LGPD se houver rastreio |

> **Autenticação:** a v1 não tem login. Quando entrarem avaliações/comentários,
> a recomendação é auth leve (ex.: OAuth com Google, ou login institucional) para
> reduzir spam e responsabilizar contribuições.

---

## Decisões registradas (ADR resumido)

| # | Decisão | Alternativa descartada | Motivo |
|---|---------|------------------------|--------|
| 1 | Backend = API só de conteúdo na v1 | Backend com CMS/admin desde já | Menor complexidade; conteúdo institucional muda pouco |
| 2 | Conteúdo híbrido (Markdown + DB) | Tudo no banco | Mantém contribuição por PR e simplicidade |
| 3 | Conteúdo é **fonte única em `docs/`** | Pasta `content/` separada | Editar a informação em **um só lugar**; o site reflete |
| 4 | Vite/React em vez de Next.js | Next.js (SSR) | Simplicidade; SEO resolvível depois se necessário |
| 5 | SQLite → PostgreSQL | Postgres desde o dia 1 | Zero setup no início |
| 6 | Front na Vercel, back no Render | Tudo serverless na Vercel | FastAPI roda melhor como serviço dedicado |
| 7 | Identidade branco + azul (estilo Facebook) | Identidade da UFSC / paleta autoral chamativa | Familiar e limpa; deixa claro que **não** é oficial |

> Este documento é vivo. Mudou uma decisão? Atualize a tabela acima e o diagrama.
