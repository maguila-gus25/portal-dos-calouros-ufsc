# Portal dos Calouros UFSC

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

---

## Índice

- [Para quem é isso](#para-quem-é-isso)
- [O que o portal oferece](#o-que-o-portal-oferece)
- [Como o conteúdo está organizado](#como-o-conteúdo-está-organizado)
- [O portal como site (visão de produto)](#o-portal-como-site-visão-de-produto)
  - [Arquitetura proposta](#arquitetura-proposta)
  - [Stack sugerida](#stack-sugerida)
  - [Modelo de dados](#modelo-de-dados)
- [Roadmap](#roadmap)
- [Como contribuir](#como-contribuir)
- [Princípios](#princípios-do-conteúdo)
- [Licença](#licença)

---

## Para quem é isso

- **Calouros do CTC** que chegaram agora e estão perdidos.
- **Veteranos e centros/atléticas** que querem ajudar a manter as informações.
- **Coordenações e servidores** que queiram divulgar dados oficiais para os novos alunos.

## O que o portal oferece

| Seção | O que você encontra | Arquivo |
|-------|---------------------|---------|
| 🏛️ Coordenações | Nome, e-mail, telefone, sala e horário de atendimento das coordenações de cada curso do CTC | [`docs/coordenacoes.md`](docs/coordenacoes.md) |
| 🍽️ Carteira do RU | Passo a passo para se cadastrar e usar o Restaurante Universitário | [`docs/carteira-ru.md`](docs/carteira-ru.md) |
| 🔗 Links importantes | CAGR, Moodle, SETIC, e-mail institucional, PRAE, biblioteca e afins | [`docs/links-importantes.md`](docs/links-importantes.md) |
| 🎉 Atléticas e festas | As atléticas de cada curso e as festas tradicionais | [`docs/atleticas-e-festas.md`](docs/atleticas-e-festas.md) |
| 📸 Instagrams e perfis | Perfis oficiais e estudantis para acompanhar a UFSC | [`docs/instagrams.md`](docs/instagrams.md) |
| 🗺️ Mapa da universidade | Onde ficam os prédios, RU, biblioteca, coordenações | [`docs/mapa.md`](docs/mapa.md) |
| 📅 Datas importantes | Matrícula, início das aulas, trancamento, recesso, calendário acadêmico | [`docs/datas-importantes.md`](docs/datas-importantes.md) |
| 💬 Histórias e feedbacks | Relatos de veteranos e como enviar o seu | [`docs/historias-e-feedbacks.md`](docs/historias-e-feedbacks.md) |

> Cada curso do CTC também tem sua ficha própria, seguindo o
> [modelo de curso](docs/_modelo-curso.md).

## Como o conteúdo está organizado

```
portal-dos-calouros-ufsc/
├── README.md                 ← você está aqui (visão do projeto)
├── CONTRIBUTING.md           ← como ajudar a preencher/corrigir
└── docs/
    ├── README.md             ← índice navegável do conteúdo
    ├── coordenacoes.md
    ├── carteira-ru.md
    ├── links-importantes.md
    ├── atleticas-e-festas.md
    ├── instagrams.md
    ├── mapa.md
    ├── datas-importantes.md
    ├── historias-e-feedbacks.md
    └── _modelo-curso.md       ← template para adicionar um curso novo
```

Sempre que uma informação ainda **não foi confirmada com fonte oficial**, ela
aparece marcada como `_A preencher_` com uma nota de onde buscar. Isso é
proposital: preferimos um campo em branco a um telefone errado.

---

## O portal como aplicação (visão de produto)

O portal vai evoluir de repositório de Markdown para uma **aplicação web
React + Python**. O detalhamento técnico está em **[docs/arquitetura.md](docs/arquitetura.md)**
e a proposta de marca em **[docs/identidade-visual.md](docs/identidade-visual.md)**.

### Resumo da arquitetura

- **Frontend:** React + Vite + TypeScript + Tailwind CSS — hospedado na **Vercel**.
- **Backend:** Python + **FastAPI** — hospedado no **Render**. É uma **API que serve
  o conteúdo** ao React.
- **Conteúdo híbrido, fonte única:** o institucional (coordenações, RU, links, datas)
  fica em **um só lugar** — os Markdown de **`docs/`** (contribuição por Pull Request);
  você edita **um arquivo** e o site atualiza. O backend lê e serve como JSON. Dados
  **dinâmicos** (histórias, feedback e, no futuro, comentários/avaliações) ficam em
  **banco** (SQLite → PostgreSQL).

```
Calouro ──HTTPS──> React (Vercel) ──JSON──> FastAPI (Render)
                                              ├── docs/*.md (institucional, fonte única)
                                              └── banco (dinâmico, v1.1+)
```

**Não oficial:** rodapé fixo em toda página — *"Projeto independente feito por
estudantes. Não é um site oficial da UFSC."* Ver [arquitetura](docs/arquitetura.md)
e [identidade](docs/identidade-visual.md).

---

## Rodar localmente

O projeto agora é um monorepo com `backend/` (FastAPI) e `frontend/` (Vite/React).

```bash
# Backend (Python 3.11+)
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1   # Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000

# Frontend (Node 20+)
cd frontend
npm install
cp .env.example .env
npm run dev
```

- Backend: <http://localhost:8000> (docs interativas em `/docs`)
- Frontend: <http://localhost:5173>

## Roadmap

- [x] **v0 — Estrutura:** esqueleto de docs por tema + modelo de curso.
- [x] **v0.1 — Conteúdo CTC:** coordenações, RU, links e datas preenchidos com fontes oficiais (jul/2026).
- [x] **v0.5 — Arquitetura:** definição React + Python e identidade visual.
- [x] **v0.6 — Plataforma (fundação):** backend FastAPI + frontend Vite/React entregues no Sprint 1 (jul/2026).
- [ ] **v0.7 — UI de busca + deploy:** UI para `/api/search`, Vercel + Render.
- [ ] **v0.8 — Fichas de curso:** uma ficha por curso do CTC.
- [ ] **v1 — Plataforma completa:** frontend + API estáveis com todo o conteúdo.
- [ ] **v1.1 — Dinâmico:** mapa interativo + formulário de histórias/feedback.
- [ ] **Futuro:** avaliação de professores, simulador de grade (tipo MatrUFSC), blog, comentários, monetização por divulgação.
- [ ] **v2 — Outros centros:** replicar a estrutura para CSE, CCS, CFH, etc.

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
5. **Fácil de manter** — Markdown simples, um tema por arquivo.

## Licença

Conteúdo sob [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-BR)
(sugerido — confirmar antes de publicar). Este é um projeto **não oficial**, feito
por estudantes, sem vínculo formal com a administração da UFSC. Informações
oficiais devem sempre ser confirmadas nos canais da universidade.
