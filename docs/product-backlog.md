# 📋 Product Backlog — Portal dos Calouros UFSC

Backlog de produto do portal. Serve para priorizar o que construir primeiro e dar
visão do todo. Vive junto do [roadmap do README](../README.md#roadmap) — o roadmap
mostra as ondas (v0, v0.1…), este backlog detalha os itens.

- **Formato das histórias:** _Como **<persona>**, quero **<objetivo>**, para **<benefício>**._
- **Prioridade (MoSCoW):** 🔴 Must · 🟠 Should · 🟡 Could · ⚪ Won't (agora)
- **Estimativa (tamanho):** 🟢 P (pequeno) · 🟡 M (médio) · 🔴 G (grande)
- **Status:** ⬜ A fazer · 🚧 Em andamento · ✅ Feito

## Personas

| Persona | Quem é | Precisa de |
|---------|--------|-----------|
| **Calouro** | Recém-chegado ao CTC, perdido na burocracia | Informação confiável, rápida, no celular |
| **Veterano/contribuidor** | Aluno que quer ajudar a manter o portal | Editar fácil, sem saber programar |
| **Mantenedor** | Quem cuida do repositório/projeto | Estrutura organizada, revisão, qualidade |
| **Coordenação/servidor** | Setor oficial que quer divulgar dados | Um canal onde a informação certa apareça |

---

## Épicos

| # | Épico | Objetivo | Onda |
|---|-------|----------|------|
| E1 | Conteúdo essencial do CTC | Reunir as infos que o calouro mais busca | v0–v0.2 |
| E2 | Fichas por curso | Uma página por curso do CTC | v0.2 |
| E3 | Vida universitária | Atléticas, festas, perfis, histórias | v0.3 |
| E4 | Site/web app | Publicar o portal como site navegável | v1 |
| E5 | Contribuição e governança | Facilitar e revisar contribuições | contínuo |
| E6 | Confiabilidade e manutenção | Manter dados atualizados e corretos | contínuo |
| E7 | Expansão para outros centros | Replicar para CSE, CCS, CFH… | v2 |
| E8 | Plataforma React + Python | Migrar o portal para app web (ver [arquitetura](arquitetura.md)) | v1 |
| E9 | Avaliação de professores | Alunos avaliam professores/disciplinas (moderado) | futuro |
| E10 | Simulador de grade | Montar grade de horários (tipo MatrUFSC) | futuro |
| E11 | Blog + comentários | Conteúdo editorial e interação | futuro |
| E12 | Monetização por divulgação | Anúncios/parcerias claramente marcados | futuro |

---

## Backlog priorizado

### E1 — Conteúdo essencial do CTC

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-01 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **os contatos das coordenações do meu curso**, para **resolver matrícula e burocracia**. |
| B-02 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **saber como usar o RU e a isenção**, para **comer barato desde o 1º dia**. |
| B-03 | 🔴 Must | 🟢 P | ✅ | Como **calouro**, quero **os links dos sistemas (CAGR, Moodle, e-mail)**, para **acessar minha vida acadêmica**. |
| B-04 | 🔴 Must | 🟢 P | ✅ | Como **calouro**, quero **as datas do calendário acadêmico**, para **não perder prazos**. |
| B-05 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **o mapa e endereços do campus**, para **me localizar no primeiro dia**. |
| B-06 | 🟠 Should | 🟢 P | ⬜ | Como **calouro**, quero **as datas exatas de trancamento e ajuste** extraídas do PDF do calendário, para **planejar o semestre**. |
| B-07 | 🟡 Could | 🟢 P | ⬜ | Como **calouro**, quero **saber configurar o Wi‑Fi (eduroam) e o e-mail no celular**, para **usar a rede da UFSC**. |

### E2 — Fichas por curso

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-08 | 🟠 Should | 🔴 G | 🚧 | Como **calouro**, quero **uma ficha só do meu curso** (coordenação, CA, atlética, dicas), para **ter tudo num lugar**. Estrutura pronta (B-09); falta preencher vida do curso/dicas. |
| B-09 | 🟠 Should | 🟡 M | ✅ | Como **mantenedor**, quero **gerar as 13 fichas a partir do modelo**, para **padronizar o conteúdo**. |
| B-10 | 🟡 Could | 🟡 M | ⬜ | Como **veterano**, quero **adicionar dicas de veterano por disciplina** na ficha, para **ajudar quem chega**. |

### E3 — Vida universitária

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-11 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **saber as atléticas e festas do meu curso**, para **entrar na vida universitária**. |
| B-12 | 🟡 Could | 🟢 P | ⬜ | Como **calouro**, quero **os perfis oficiais e estudantis para seguir**, para **me manter informado**. |
| B-13 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **ler histórias de veteranos**, para **me sentir menos perdido**. |
| B-14 | 🟡 Could | 🟡 M | ⬜ | Como **veterano**, quero **um jeito simples de enviar minha história** (formulário/PR), para **contribuir**. |

### E4 — Site/web app (substituído pela plataforma React + Python — ver E8)

> A abordagem "site estático gerado do Markdown" foi **substituída** pela
> arquitetura **React + Python** (ver [arquitetura.md](arquitetura.md)). Itens de
> valor abaixo continuam válidos e foram reaproveitados em E8.

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-15 | 🟠 Should | 🔴 G | ⬜ | Como **calouro**, quero **um site navegável no celular**, para **consultar sem abrir o GitHub**. |
| B-17 | 🟠 Should | 🟢 P | ⬜ | Como **calouro**, quero **busca dentro do site**, para **achar rápido o que preciso**. |
| B-19 | 🟡 Could | 🟡 M | ⬜ | Como **calouro**, quero **um mapa interativo com marcadores** (RU, BU, prédios), para **me localizar melhor** (v1.1). |

### E8 — Plataforma React + Python

Ver [arquitetura.md](arquitetura.md). Frontend Vite/React/TS/Tailwind na Vercel;
backend FastAPI no Render; conteúdo híbrido (Markdown + banco).

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-29 | 🔴 Must | 🟢 P | ✅ | Como **mantenedor**, quero **um mapa `slug → arquivo` sobre `docs/`** (sem mover nada), para **o backend servir o conteúdo mantendo a fonte única**. |
| B-30 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **o esqueleto do backend FastAPI** (health, config, CORS), para **ter a base da API**. |
| B-31 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **o loader que lê `docs/*.md` e serve como JSON**, para **expor o conteúdo à API**. |
| B-32 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **o esqueleto do frontend Vite/React/Tailwind**, para **ter a base do site**. |
| B-33 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **as páginas de seções e de curso consumindo a API**, para **navegar o conteúdo**. |
| B-34 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **o endpoint e a UI de busca** (`/api/search`), para **achar rápido**. |
| B-35 | 🔴 Must | 🟢 P | ✅ | Como **usuário**, quero **o rodapé fixo "não é site oficial da UFSC"**, para **não confundir com a instituição**. |
| B-36 | 🟠 Should | 🟢 P | ✅ | Como **mantenedor**, quero **deploy do front na Vercel e do back no Render**, para **publicar automaticamente**. Configs prontas (`vercel.json`, `render.yaml`, `docs/deploy.md`); falta criar as contas. |
| B-37 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **enviar histórias/feedback** (banco + moderação), para **contribuir** (v1.1). |
| B-38 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **aplicar a [identidade visual](identidade-visual.md)** (cores, fontes, logo), para **dar cara ao portal**. |

### E9 — Avaliação de professores (futuro)

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-39 | 🟡 Could | 🔴 G | ⬜ | Como **calouro**, quero **ver e deixar avaliações de professores/disciplinas**, para **escolher melhor minhas matérias**. |
| B-40 | 🔴 Must (do épico) | 🟡 M | ⬜ | Como **mantenedor**, quero **moderação e termos de uso** nas avaliações, para **evitar difamação**. |

### E10 — Simulador de grade (futuro)

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-41 | 🟡 Could | 🔴 G | ⬜ | Como **calouro**, quero **montar minha grade de horários** (tipo MatrUFSC), para **planejar o semestre**. |
| B-42 | 🔴 Must (do épico) | 🟡 M | ⬜ | Como **mantenedor**, quero **uma fonte sustentável de dados de turmas/horários** (CAGR), para **alimentar o simulador**. |

### E11 — Blog + comentários (futuro)

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-43 | 🟡 Could | 🟡 M | ⬜ | Como **calouro**, quero **ler um blog** com dicas e novidades, para **me manter por dentro**. |
| B-44 | 🟡 Could | 🟡 M | ⬜ | Como **calouro**, quero **comentar** (moderado, com login leve), para **interagir**. |

### E12 — Monetização por divulgação (futuro)

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-45 | 🟡 Could | 🟡 M | ⬜ | Como **mantenedor**, quero **espaços de divulgação/parceria** claramente marcados como publicidade, para **sustentar o projeto**. |

### E5 — Contribuição e governança

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-20 | 🔴 Must | 🟢 P | ✅ | Como **contribuidor**, quero **um guia de contribuição claro**, para **saber como ajudar**. |
| B-21 | 🟠 Should | 🟢 P | ⬜ | Como **mantenedor**, quero **um template de issue e de PR**, para **padronizar contribuições**. |
| B-22 | 🟡 Could | 🟢 P | ⬜ | Como **mantenedor**, quero **um CODEOWNERS / lista de responsáveis por área**, para **direcionar revisões**. |
| B-23 | 🟡 Could | 🟢 P | ⬜ | Como **contribuidor**, quero **um checklist de "fonte oficial" no PR**, para **garantir a regra de ouro**. |

### E6 — Confiabilidade e manutenção

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-24 | 🟠 Should | 🟢 P | ✅ | Como **mantenedor**, quero **verificação automática de links quebrados** (CI), para **manter os links vivos**. Workflow lychee em PR + schedule semanal. |
| B-25 | 🟠 Should | 🟢 P | ⬜ | Como **calouro**, quero **ver a data da última verificação** de cada dado, para **saber se está atual**. |
| B-26 | 🟡 Could | 🟢 P | ⬜ | Como **mantenedor**, quero **uma rotina semestral de revisão** (issue recorrente), para **atualizar datas e valores**. |

### E7 — Expansão para outros centros

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-27 | ⚪ Won't (agora) | 🔴 G | ⬜ | Como **calouro de outro centro (CSE/CCS…)**, quero **as mesmas infos do meu centro**, para **me virar também**. |
| B-28 | ⚪ Won't (agora) | 🟡 M | ⬜ | Como **mantenedor**, quero **um modelo de centro reutilizável**, para **replicar a estrutura**. |

---

## Sprint sugerido (próximos passos)

**Sprint 1 concluído (v0.6):** fundação da plataforma — B-29, B-30, B-31, B-32,
B-33 e B-35.
**Sprint 2 concluído (v0.7):** busca (B-34), 13 fichas de curso (B-09) e
refinamento visual com dark mode (B-38).
**Sprint 3 concluído (v0.8):** deploy configs (B-36), link-check CI (B-24) e
suite pytest do backend.

**Próximo sprint (v0.9) — proposta:**

1. **Deploy real** — criar as contas Vercel + Render e rodar o playbook em
   `docs/deploy.md`.
2. **B-06** — datas exatas de trancamento/ajuste do calendário acadêmico
   (fonte: PDF oficial).
3. **Preenchimento** — `atleticas-e-festas.md` e `instagrams.md` com
   dados verificados (fonte: perfis oficiais no Instagram).
4. **B-08** — vida do curso nas 13 fichas (depende dos preenchimentos acima).

## Critérios de aceite (itens de referência)

**B-08 — Ficha por curso**
- [ ] Um arquivo em `docs/cursos/<curso>.md` por curso do CTC.
- [ ] Segue o [modelo](_modelo-curso.md), com coordenação preenchida (fonte oficial).
- [ ] Linkada no índice de `docs/README.md`.

**B-16 — Site gerado do Markdown**
- [ ] `docs/*.md` é a fonte única — nada de conteúdo duplicado no código.
- [ ] Build passa localmente e no CI.
- [ ] Navegável e legível no celular (mobile-first).

**B-24 — Checagem de links**
- [ ] Workflow de CI roda um link-checker nos `.md`.
- [ ] Falha o build (ou abre issue) quando um link retorna erro.

---

> Este backlog é vivo: reordene, adicione e refine conforme o projeto evolui.
> Cada item pode virar uma **issue** no GitHub usando o ID (ex.: `B-09`) no título.
