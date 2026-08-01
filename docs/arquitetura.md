# Arquitetura — Portal dos Calouros UFSC

Documento de arquitetura da plataforma web do portal.

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
│   Next.js 15 App Router (Vercel)               │
│   ├── app/           ← páginas SSG/SSR         │
│   ├── app/api/       ← Route Handlers (JSON)   │
│   ├── lib/content.ts ← loader Markdown         │
│   └── docs/*.md      ← FONTE ÚNICA             │
└──────────┬───────────────────────┬─────────────┘
           │                       │
   ┌───────▼────────┐     ┌────────▼─────────┐
   │   docs/*.md     │     │  Banco de dados  │
   │ (institucional) │     │ (futuro: Prisma) │
   │  FONTE ÚNICA    │     │  v1.1 em diante  │
   └────────────────┘     └──────────────────┘
```

**Princípio de fonte única:** o conteúdo institucional (coordenações, RU, links,
datas, mapa) vive em **um único lugar** — os arquivos Markdown de `docs/`. O loader
em `lib/content.ts` lê esses arquivos com `gray-matter` + `marked` e os expõe como
JSON via Route Handlers. Contribuição por Pull Request. Os dados **dinâmicos**
(histórias, feedback) ficarão no banco de dados a partir da v1.1.

### Navegação por centro (Sprint 15+)

O portal cresceu de "só CTC" para todos os centros de ensino da UFSC. A
navegação do calouro segue o fluxo:

```
/  ──>  /centros  ──>  /centros/[slug]  ──>  /cursos/[slug]
(home)   (índice de     (ficha do centro,      (ficha do
         centros)        já lista os cursos     curso)
                         daquele centro)
```

- `/centros` (`app/centros/page.tsx`) lista todos os centros via `listCenters()`.
- `/centros/[slug]` (`app/centros/[slug]/page.tsx`) renderiza a ficha do centro
  (`getCenter(slug)`) **e** os cursos daquele centro, filtrando
  `listCourses()` pelo campo `centro` do frontmatter de cada curso.
- `/cursos` (`app/cursos/page.tsx`) hoje é apenas um `permanentRedirect("/centros")`
  — a listagem de cursos "solta" foi substituída pela navegação por centro.
- Redirects 301 legados em `next.config.ts` (`/secoes/coordenacoes` e
  `/secoes/atleticas` → `/centros/ctc`) preservam links antigos apontados para o
  CTC, já que esse conteúdo virou parte da ficha do centro.
- Conteúdo dos centros vive em `docs/centros/<slug>.md` (frontmatter YAML, mesmo
  padrão das fichas de curso). O loader expõe `listCenters()` / `getCenter()` em
  `lib/content.ts`, e as rotas `GET /api/centros` e `GET /api/centros/{slug}`
  servem esses dados como JSON — mesma arquitetura de fonte única do restante do
  conteúdo institucional.

---

## Stack

| Item | Escolha | Porquê |
|------|---------|--------|
| Framework | **Next.js 15 App Router** | Full-stack em um serviço; SSG nativo para docs/; Route Handlers para API |
| Linguagem | **TypeScript** | Segurança de tipos, menos bugs |
| Estilo | **Tailwind CSS** | Mobile-first, rápido, consistente |
| Loader de Markdown | **gray-matter + marked** | Ler `docs/*.md` com frontmatter YAML |
| Deploy | **Vercel** | Deploy automático por push, sem backend separado |
| Banco (v1.1+) | **Prisma** + SQLite (dev) → **PostgreSQL** (prod) | Simples no início, robusto na produção |

---

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
│   ├── busca/page.tsx
│   ├── centros/page.tsx      ← índice de todos os centros (listCenters)
│   ├── centros/[slug]/page.tsx ← ficha do centro + cursos daquele centro
│   ├── cursos/page.tsx       ← permanentRedirect("/centros")
│   ├── cursos/[slug]/page.tsx
│   ├── secoes/[slug]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              ← Home
│   ├── providers.tsx
│   └── not-found.tsx
│
├── components/               ← Header, Footer, SearchInput, Badge, NavLinks,
│                                ThemeToggle, SearchResults…
│
├── lib/
│   └── content.ts            ← loader de Markdown (mapa slug→arquivo; listCenters/getCenter)
│
├── docs/                     ← FONTE ÚNICA do conteúdo (Markdown) — editar aqui
│   │   ── conteúdo servido pela API (mapeado por slug no loader) ──
│   ├── coordenacoes.md
│   ├── carteira-ru.md
│   ├── links-importantes.md
│   ├── datas-importantes.md
│   ├── atleticas-e-festas.md
│   ├── instagrams.md
│   ├── mapa.md
│   ├── historias-e-feedbacks.md
│   ├── centros/
│   │   └── <centro>.md       ← fichas por centro (com frontmatter): ctc, cca, cse, cce, ccs
│   ├── cursos/
│   │   └── <curso>.md        ← fichas por curso (com frontmatter)
│   │   ── documentação de dev (NÃO servida pela API) ──
│   ├── README.md             ← índice
│   ├── arquitetura.md        ← este arquivo
│   ├── identidade-visual.md
│   ├── product-backlog.md
│   └── _modelo-curso.md
│
├── public/
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

> **Fonte única:** o conteúdo **fica em `docs/`**. O loader em `lib/content.ts` tem
> um **mapa explícito `slug → arquivo`** (ex.: `coordenacoes` →
> `docs/coordenacoes.md`). Os arquivos de documentação de dev (`arquitetura.md`,
> `product-backlog.md`, `identidade-visual.md`, `README.md`, `_modelo-curso.md`)
> **não** são servidos como conteúdo.

---

## API (v1)

Base: `/api`. Route Handlers Next.js. Respostas em JSON.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Healthcheck |
| GET | `/api/sections` | Lista as seções de conteúdo disponíveis |
| GET | `/api/sections/{slug}` | Conteúdo de uma seção (ex.: `coordenacoes`, `ru`, `links`) em HTML/estruturado |
| GET | `/api/courses` | Lista dos cursos do CTC (a partir do frontmatter das fichas) |
| GET | `/api/courses/{slug}` | Ficha de um curso |
| GET | `/api/centros` | Lista os centros de ensino disponíveis (`docs/centros/`) |
| GET | `/api/centros/{slug}` | Ficha de um centro |
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

| Serviço | Variáveis de ambiente |
|---------|-----------------------|
| **Vercel** | Nenhuma obrigatória no momento; `NEXT_PUBLIC_SITE_URL` para SEO (opcional) |

- **CI/CD:** push para `main` → Vercel builda e deploya automaticamente.
- **Domínio:** começa com o subdomínio grátis `*.vercel.app`; domínio próprio é opcional depois.
- **Banco (v1.1+):** SQLite em dev (arquivo local); PostgreSQL gerenciado em prod.

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
| 8 | Migração para Next.js 15 App Router full-stack | Manter Vite + FastAPI separados | Elimina latência de rede entre frontend e backend; simplifica para um único serviço na Vercel; aproveita SSG nativo do Next.js para servir `docs/` sem backend separado |
| 9 | Navegação reestruturada por centro de ensino (`/centros/[slug]` lista cursos do centro) | Manter `/cursos` como listagem plana de todos os cursos | Portal deixou de ser só do CTC (épico E14); navegar por centro escala melhor conforme mais centros/cursos são adicionados |

### ADR-8: Migração para Next.js 15 App Router (2026-07-15)

**Contexto:** a stack Vite (frontend) + FastAPI/Render (backend) exigia dois serviços
independentes, latência de rede entre eles, configuração de CORS e variáveis de
ambiente de URL. O conteúdo do portal é majoritariamente estático (Markdown em
`docs/`), o que favorece SSG.

**Decisão:** migrar para Next.js 15 App Router full-stack hospedado inteiramente na
Vercel. O frontend usa SSG/SSR nativo; a API é implementada como Route Handlers em
`app/api/`. O loader de Markdown (`lib/content.ts`) usa `gray-matter` + `marked` —
equivalente funcional ao `python-frontmatter` + `markdown-it-py` do backend Python
descartado.

**Consequências:**
- Não há mais backend Python nem deploy no Render.
- Todos os agentes (backend-dev, frontend-dev) devem operar no mesmo projeto Next.js.
- Banco de dados futuro (v1.1+) será integrado via Prisma, não SQLAlchemy.
- ADR-4 (Vite em vez de Next.js) e ADR-6 (Vercel + Render) ficam supersedidos por este ADR.

### ADR-9: Navegação reestruturada por centro de ensino (2026-07-29, Sprint 15)

**Contexto:** o portal nasceu focado só no CTC (Centro Tecnológico), com `/cursos`
listando todas as fichas de curso em uma lista plana e `/secoes/coordenacoes` +
`/secoes/atleticas` cobrindo só o CTC. O épico **E14** expandiu o escopo para
todos os centros de ensino da UFSC (CCA, CSE, CCE, CCS publicados até o Sprint 15,
além do CTC), o que tornou a listagem plana de cursos pouco escalável e a
identidade "portal do CTC" desatualizada.

**Decisão:** introduzir `docs/centros/<slug>.md` como fonte única do conteúdo de
cada centro (mesmo padrão de frontmatter YAML das fichas de curso), com
`listCenters()`/`getCenter()` em `lib/content.ts` e as rotas `GET /api/centros` e
`GET /api/centros/{slug}`. A navegação do calouro passa a ser
`/ → /centros → /centros/[slug] → /cursos/[slug]`: a página de cada centro lista
os cursos daquele centro (filtrando `listCourses()` pelo campo `centro`).
`/cursos` vira um `permanentRedirect("/centros")`, e os links legados
`/secoes/coordenacoes` e `/secoes/atleticas` (conteúdo específico do CTC) recebem
redirect 301 para `/centros/ctc` em `next.config.ts`. Header, hero e navegação
deixam de mencionar "CTC" como identidade do portal.

**Consequências:**
- `docs/cursos/<slug>.md` continua sendo a fonte única das fichas de curso; o
  campo `centro` do frontmatter agora determina em qual página de centro o curso
  aparece listado.
- Links antigos para `/cursos` e para as seções de coordenações/atléticas do CTC
  continuam funcionando via redirect permanente (301), sem quebrar SEO nem
  favoritos salvos por usuários.
- Novos centros (B-60: CCJ, CFH, CFM) só exigem criar `docs/centros/<slug>.md` —
  nenhuma mudança de código é necessária para listá-los em `/centros`.

> Este documento é vivo. Mudou uma decisão? Atualize a tabela acima e o diagrama.
