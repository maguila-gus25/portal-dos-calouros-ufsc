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

## O portal como site (visão de produto)

Hoje o conteúdo vive em Markdown (legível direto no GitHub). O objetivo é evoluir
para um **site / web app** público, fácil de navegar no celular no primeiro dia de
aula. Esta seção documenta a direção técnica para quem for construir.

### Arquitetura proposta

```
┌────────────────────────────────────────────────────┐
│                    Calouro (celular)                │
└───────────────────────┬────────────────────────────┘
                        │ HTTPS
┌───────────────────────▼────────────────────────────┐
│        Frontend estático (SSG) — site do portal     │
│   Páginas geradas a partir dos arquivos Markdown     │
│   de docs/ + fichas de curso                         │
└───────────────────────┬────────────────────────────┘
                        │ build time
┌───────────────────────▼────────────────────────────┐
│   Conteúdo versionado (este repositório, docs/*.md)  │
│   Fonte única da verdade — editável via Pull Request │
└─────────────────────────────────────────────────────┘
```

Princípio central: **o conteúdo continua em Markdown neste repositório** e o site
é gerado a partir dele. Assim qualquer pessoa contribui por Pull Request sem
precisar mexer em código, e o site nunca fica dessincronizado da documentação.

### Stack sugerida

Opção recomendada (simples, gratuita de hospedar, ótima em mobile):

- **Gerador de site estático:** [Astro](https://astro.build) ou
  [Docusaurus](https://docusaurus.io) — ambos consomem Markdown direto.
- **Hospedagem:** GitHub Pages, Vercel ou Netlify (deploy automático a cada merge).
- **Busca:** Pagefind (busca client-side, sem servidor).
- **Mapa:** incorporar o mapa oficial da UFSC / Google Maps ou uma imagem anotada.

> A stack não está cravada — a decisão foi manter em aberto no nível de
> ferramenta, exigindo apenas que o site seja gerado a partir do Markdown de
> `docs/`. Veja [Roadmap](#roadmap).

### Modelo de dados

Cada **curso** pode ser descrito por um bloco de _frontmatter_ no topo da sua
ficha, o que permite gerar cards e filtros no site depois:

```yaml
---
curso: Ciências da Computação
centro: CTC
grau: Bacharelado
turno: Diurno
coordenacao:
  nome: _A preencher_
  email: _A preencher_
  telefone: _A preencher_
  sala: _A preencher_
atletica: _A preencher_
instagram_curso: _A preencher_
---
```

Enquanto o site não existe, esse frontmatter é opcional — o conteúdo em texto já
é suficiente para ler no GitHub.

---

## Roadmap

- [ ] **v0 — Estrutura (atual):** esqueleto de docs por tema + modelo de curso.
- [ ] **v0.1 — Conteúdo CTC:** preencher coordenações, RU, links e datas com fontes oficiais.
- [ ] **v0.2 — Fichas de curso:** uma ficha por curso do CTC.
- [ ] **v0.3 — Histórias:** primeiros relatos de veteranos.
- [ ] **v1 — Site:** publicar o portal como site estático gerado a partir de `docs/`.
- [ ] **v2 — Outros centros:** replicar a estrutura para CSE, CCS, CFH, etc.

## Como contribuir

Toda contribuição é bem-vinda — principalmente preencher os campos `_A preencher_`
com informação **verificada**. Veja o [guia de contribuição](CONTRIBUTING.md).

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
