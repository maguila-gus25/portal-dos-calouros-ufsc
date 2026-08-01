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
| **Moderador** | Veterano de confiança que revisa conteúdo enviado | Ferramentas simples para aprovar/rejeitar sem precisar do banco |
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
| E8 | Plataforma Next.js 15 | App web full-stack Next.js 15 App Router na Vercel (ver [arquitetura](arquitetura.md)) | v1 ✅ |
| E9 | Avaliação de professores | Alunos avaliam professores/disciplinas (moderado) | futuro |
| E10 | Simulador de grade | Montar grade de horários (tipo MatrUFSC) | futuro |
| E11 | Blog + comentários | Conteúdo editorial e interação | futuro |
| E12 | Monetização por divulgação | Anúncios/parcerias claramente marcados | futuro |
| E13 | Autenticação e moderação | Login leve + painel de moderação para conteúdo dinâmico | v2 |
| E14 | Navegação por centro | Reestruturar header, home e rotas para hierarquia real por centro | v1.9 |

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
| B-06 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **as datas exatas de trancamento e ajuste** extraídas do PDF do calendário, para **planejar o semestre**. Extraído do PDF oficial 2026 (Res. 214/2025/CUn). |
| B-07 | 🟡 Could | 🟢 P | ✅ | Como **calouro**, quero **saber configurar o Wi‑Fi (eduroam) e o e-mail no celular**, para **usar a rede da UFSC**. Seção adicionada em `links-importantes.md` com config EAP-TTLS/PAP e tutoriais oficiais SeTIC. |
| B-52 | 🟠 Should | 🟡 M | ✅ | Como **calouro**, quero **um FAQ com as dúvidas mais frequentes** (matrícula, trancamento, DP, reprovação, CAA, bolsas), para **resolver sem precisar perguntar para ninguém**. `docs/faq.md` com 16 perguntas verificadas + página `/faq` no site + adicionado ao SLUG_MAP e sitemap. |
| B-53 | 🟡 Could | 🟡 M | ✅ | Como **calouro na primeira semana**, quero **um checklist passo a passo** (RU, IDUFSC, eduroam, Moodle, e-mail, CA), para **não esquecer nada essencial nos primeiros dias**. `docs/checklist-primeira-semana.md` + página `/checklist` + task list items estilizados no `prose-content`. |

### E2 — Fichas por curso

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-08 | 🟠 Should | 🔴 G | 🚧 | Como **calouro**, quero **uma ficha só do meu curso** (coordenação, CA, atlética, dicas), para **ter tudo num lugar**. Turno, duração (parcial), resumo, CA e EJ preenchidos para todos os 13 cursos. Faltam: dicas de veterano, onde estudar (precisam de veteranos reais), email SIN, durações não confirmadas. |
| B-09 | 🟠 Should | 🟡 M | ✅ | Como **mantenedor**, quero **gerar as 13 fichas a partir do modelo**, para **padronizar o conteúdo**. |
| B-10 | 🟡 Could | 🟡 M | ⬜ | Como **veterano**, quero **adicionar dicas de veterano por disciplina** na ficha, para **ajudar quem chega**. |

### E3 — Vida universitária

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-11 | 🟠 Should | 🟡 M | ✅ | Como **calouro**, quero **saber as atléticas e festas do meu curso**, para **entrar na vida universitária**. 9 atléticas do CTC + festas tradicionais preenchidas. |
| B-12 | 🟡 Could | 🟢 P | ✅ | Como **calouro**, quero **os perfis oficiais e estudantis para seguir**, para **me manter informado**. PRAE/RU/CTC/PROAFE + CAs confirmados. |
| B-13 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **ler histórias de veteranos**, para **me sentir menos perdido**. Bloqueado: nenhuma submissão real via `historia-veterano.yml` confirmada ainda; não entra no sprint sem ao menos 2 histórias reais aprovadas via PR. |
| B-14 | 🟡 Could | 🟡 M | ✅ | Como **veterano**, quero **um jeito simples de enviar minha história** (formulário/PR), para **contribuir**. Issue template `historia-veterano.yml` criado; link direto em `historias-e-feedbacks.md` e `CONTRIBUTING.md`. |

### E4 — Site/web app (substituído pela plataforma React + Python — ver E8)

> A abordagem "site estático gerado do Markdown" foi **substituída** pela
> arquitetura **React + Python** (ver [arquitetura.md](arquitetura.md)). Itens de
> valor abaixo continuam válidos e foram reaproveitados em E8.

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-15 | 🟠 Should | 🔴 G | ✅ | Como **calouro**, quero **um site navegável no celular**, para **consultar sem abrir o GitHub**. Coberto pela plataforma React (E8 / B-32 + B-33). |
| B-17 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **busca dentro do site**, para **achar rápido o que preciso**. Coberto por B-34 (UI de busca + `/api/search`). |
| B-19 | 🟡 Could | 🟡 M | ✅ | Como **calouro**, quero **um mapa interativo com marcadores** (RU, BU, prédios), para **me localizar melhor**. `app/mapa/page.tsx` + `components/MapView.tsx` (Leaflet.js, SSR-safe via dynamic import); 7 marcadores com legenda flutuante; tile layer OpenStreetMap; URL canônica `/mapa`. |

### E8 — Plataforma Next.js 15

> **Migração de arquitetura (2026-07-15):** a stack original (Vite/React + FastAPI no
> Render) foi substituída por **Next.js 15 App Router** (full-stack, tudo na Vercel).
> As Route Handlers de `app/api/` substituem o backend Python; o loader de Markdown
> vive em `lib/content.ts`. O banco de dados (v1.1+) será adicionado via Prisma direto
> no Next.js. Ver [arquitetura.md](arquitetura.md) para o diagrama atualizado.

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-29 | 🔴 Must | 🟢 P | ✅ | Como **mantenedor**, quero **um mapa `slug → arquivo` sobre `docs/`** (sem mover nada), para **o backend servir o conteúdo mantendo a fonte única**. Implementado em `lib/content.ts`. |
| B-30 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **rotas de API** (health, sections, courses, search), para **ter a base da API**. Implementado como Next.js Route Handlers em `app/api/` (substituiu o FastAPI). |
| B-31 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **o loader que lê `docs/*.md` e serve como JSON**, para **expor o conteúdo à API**. Implementado em `lib/content.ts`. |
| B-32 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **o esqueleto do frontend Next.js/Tailwind**, para **ter a base do site**. App Router com layout, pages e componentes em `app/` e `components/`. |
| B-33 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **as páginas de seções e de curso consumindo o conteúdo**, para **navegar**. Páginas SSG em `app/secoes/[slug]/` e `app/cursos/[slug]/`. |
| B-34 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **o endpoint e a UI de busca** (`/api/search` + página `/busca`), para **achar rápido**. |
| B-35 | 🔴 Must | 🟢 P | ✅ | Como **usuário**, quero **o rodapé fixo "não é site oficial da UFSC"**, para **não confundir com a instituição**. |
| B-36 | 🟠 Should | 🟢 P | ✅ | Como **mantenedor**, quero **deploy automático na Vercel**, para **publicar a cada push**. `vercel.json` + `outputFileTracingIncludes` configurados; deploy ativo. |
| B-37 | 🟠 Should | 🔴 G | ⬜ | Como **calouro**, quero **enviar histórias/feedback pelo site** (formulário + banco + moderação), para **contribuir sem precisar do GitHub** (v1.1). Requer Prisma + Postgres no Next.js. |
| B-38 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **aplicar a [identidade visual](identidade-visual.md)** (cores, fontes, logo), para **dar cara ao portal**. |
| B-46 | 🔴 Must | 🟢 P | ✅ | Como **mantenedor**, quero **atualizar CLAUDE.md e arquitetura.md para Next.js 15**, para **manter a documentação técnica fiel ao código real**. CLAUDE.md reescrito; arquitetura.md com diagrama, tabela de stack, estrutura de pastas e ADR-8 atualizados. |
| B-47 | 🟠 Should | 🟡 M | ✅ | Como **calouro que busca no Google**, quero **o portal bem indexado** (meta tags dinâmicas, OG image, `sitemap.xml`, `robots.txt`), para **encontrar a informação fácil**. `app/sitemap.ts`, `app/robots.ts` criados; `generateMetadata` com `description` + `openGraph` em todas as páginas. |
| B-48 | 🟡 Could | 🟢 P | ✅ | Como **calouro**, quero **instalar o portal no celular como app** (PWA — `manifest.json`, ícone 192/512, `theme-color`), para **acessar offline e sem abrir o navegador**. `public/manifest.json` com name/short_name/start_url/display/background_color/theme_color/#1877F2/icons 192+512; ícones SVG placeholder geométrico na cor primária em `public/icons/`; script `generate_icons.py` para PNGs; `manifest` e `viewport.themeColor` via metadata API do Next.js 15 em `app/layout.tsx`. |
| B-49 | 🟠 Should | 🟡 M | ✅ | Como **calouro com deficiência visual**, quero **navegar o portal com leitor de tela e teclado** (audit WCAG AA — contrastes, alt texts, focus rings, landmarks), para **ter acesso igualitário**. `ink.secondary` → `#4B5563` (7.6:1); `brand.blueButton` → `#1565C0` para botões; skip link; foco visível; text-shadow no hero; badge info color; aria-hidden/aria-label em componentes. |
| B-50 | 🟠 Should | 🔴 G | ⬜ | Como **mantenedor**, quero **banco de dados no Next.js** (Prisma + SQLite em dev → Postgres em prod), para **persistir histórias, feedback e future features dinâmicas** (pré-requisito de B-37). Aguarda co-planejamento com B-37 + E13 (auth + moderação) no mesmo sprint para ter caso de uso visível ao calouro. |
| B-51 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **analytics de privacidade** (Vercel Analytics ou Plausible), para **entender quais seções os calouros mais acessam sem rastrear pessoalmente**. `@vercel/analytics` instalado; `<Analytics />` inserido em `app/layout.tsx` após `{children}`; nota de privacidade no `Footer.tsx`: "Usamos Vercel Analytics para contar visitas sem armazenar dados pessoais.". Sem cookies de rastreio. |

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

### E13 — Autenticação e moderação (v2)

> Pré-requisito técnico de B-37 (envio de histórias), B-39 (avaliações) e B-44
> (comentários). A v1 não tem login; quando conteúdo dinâmico entrar, auth leve
> via OAuth é o caminho recomendado (ver ADR em [arquitetura.md](arquitetura.md)).

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-56 | 🟠 Should | 🔴 G | ⬜ | Como **calouro**, quero **fazer login com minha conta Google** (OAuth2), para **submeter histórias e avaliações com identidade verificável** e reduzir spam. |
| B-57 | 🔴 Must (do épico) | 🟡 M | ⬜ | Como **moderador**, quero **um painel simples** (lista de pendentes + botões aprovar/rejeitar), para **revisar histórias e feedbacks antes de publicar** sem precisar editar o banco direto. |
| B-58 | 🔴 Must (do épico) | 🟢 P | ⬜ | Como **mantenedor**, quero **regras de moderação documentadas** (o que aprova, o que rejeita, como tratar difamação), para **guiar moderadores voluntários com consistência**. |
| B-59 | 🟡 Could | 🟢 P | ⬜ | Como **mantenedor**, quero **login alternativo via conta UFSC (IdUFSC/SAML)**, para **garantir que apenas estudantes da UFSC possam submeter conteúdo** (requer parceria ou integração com a SeTIC). |

### E5 — Contribuição e governança

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-20 | 🔴 Must | 🟢 P | ✅ | Como **contribuidor**, quero **um guia de contribuição claro**, para **saber como ajudar**. |
| B-21 | 🟠 Should | 🟢 P | ✅ | Como **mantenedor**, quero **um template de issue e de PR**, para **padronizar contribuições**. 4 templates de issue (história, conteúdo, link quebrado, sugestão) + PR template criados em `.github/`. |
| B-22 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **um CODEOWNERS / lista de responsáveis por área**, para **direcionar revisões**. `.github/CODEOWNERS` criado com `@maguila-gus25` como responsável por todas as áreas. |
| B-23 | 🟡 Could | 🟢 P | ✅ | Como **contribuidor**, quero **um checklist de "fonte oficial" no PR**, para **garantir a regra de ouro**. Coberto pelo PR template (`.github/pull_request_template.md`) criado no Sprint 5. |

### E6 — Confiabilidade e manutenção

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-24 | 🟠 Should | 🟢 P | ✅ | Como **mantenedor**, quero **verificação automática de links quebrados** (CI), para **manter os links vivos**. Workflow lychee em PR + schedule semanal. |
| B-25 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **ver a data da última verificação** de cada dado, para **saber se está atual**. Rodapé `_Última verificação: julho/2026_` nos 8 docs de conteúdo; campo `ultima_verificacao` no frontmatter das 13 fichas de curso. |
| B-26 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **uma rotina semestral de revisão** (issue recorrente), para **atualizar datas e valores**. Workflow `.github/workflows/revisao-semestral.yml` dispara todo 1º de fev. e 1º de ago. |
| B-54 | 🟠 Should | 🟡 M | ✅ | Como **mantenedor**, quero **testes E2E com Playwright no CI** (home, busca, seção, curso), para **detectar regressões de UI antes do deploy**. `playwright.config.ts` + `e2e/smoke.spec.ts` (8 testes, 8/8 passed); `.github/workflows/e2e.yml` (push + PR → main, chromium, artifacts). |
| B-55 | 🟡 Could | 🟢 P | ✅ | Como **mantenedor**, quero **Lighthouse CI** (Core Web Vitals ≥ 90 em Performance, Accessibility, SEO), para **garantir qualidade técnica a cada PR**. `lighthouserc.json` na raiz com assertions performance/accessibility/seo >= 0.9; `.github/workflows/lighthouse.yml` em PRs para main com `npm run build && npx lhci autorun`; artifact do report salvo por 30 dias; `@lhci/cli` adicionado como devDependency. |

### E7 — Expansão para outros centros

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-27 | ⚪ Won't (agora) | 🔴 G | ⬜ | Como **calouro de outro centro (CSE/CCS…)**, quero **as mesmas infos do meu centro**, para **me virar também**. |
| B-28 | ⚪ Won't (agora) | 🟡 M | ⬜ | Como **mantenedor**, quero **um modelo de centro reutilizável**, para **replicar a estrutura**. |
| B-60 | 🟠 Should | 🔴 G | 🚧 | Como **calouro de qualquer centro da UFSC Florianópolis**, quero **conteúdo sobre meu centro** (coordenações, atléticas, links úteis), para **me virar no primeiro dia mesmo não sendo do CTC**. Cobre: CCE, CCS, CCJ, CFH, CFM, CCB, CSE, CCA (Itacorubi), CED, CDS (Centro de Desportos e Saúde), CA (Araranguá), CA (Joinville). **Sprint 13:** infraestrutura + CCA + CSE. **Sprint 14:** CCE (9 cursos, diretoria, CAs, atléticas) e CCS (6 cursos, diretoria, CAs, atléticas) publicados. Faltam: CCJ, CFH, CFM, CCB, CED, CDS e campi de Joinville e Araranguá. |
| B-61 | 🟠 Should | 🔴 G | 🚧 | Como **calouro**, quero **fichas dos cursos de todos os centros da UFSC Florianópolis**, para **ter informações do meu curso independente do centro**. Seguir o mesmo modelo de `docs/cursos/<slug>.md` já usado no CTC. **Sprint 14:** 4 fichas do CCA. **Sprint 16:** 5 fichas do CSE (Administração, Ciências Contábeis, Ciências Econômicas, Relações Internacionais, Serviço Social) — coordenação/CA/atlética reaproveitados de `docs/centros/cse.md`; campos sem fonte confirmada como `_A preencher_`. Faltam: cursos do CCE, CCS e demais centros. |
| B-62 | 🟠 Should | 🟡 M | ✅ | Como **calouro**, quero **ver no mapa interativo os pontos de interesse de todos os centros da UFSC Florianópolis** — incluindo o CCA em Itacorubi (fora do campus Trindade) —, para **me localizar em qualquer parte dos campi**. 10 centros adicionados (CCE, CCS, CCJ, CFH, CFM, CCB, CSE, CED, CDS, CCA-Itacorubi) com coordenadas verificadas; `fitBounds` cobre os dois campi; label renomeado para "Centros Acadêmicos". |
| B-63 | 🟠 Should | 🟡 M | ✅ | Como **calouro**, quero **filtrar o mapa por categoria** (Centros Acadêmicos, Alimentação, Saúde, Transporte, Biblioteca, Administração), para **encontrar rapidamente o que preciso sem ver todos os marcadores ao mesmo tempo**. Chips `<button aria-pressed>` acima do mapa; `useEffect` reage ao filtro com `addTo`/`removeFrom` Leaflet; toggle ao clicar categoria ativa volta para "Todos". |

### E14 — Navegação por centro (reestruturação arquitetural)

> Decisão do mantenedor (2026-07-30): o portal cresceu para além do CTC. A navegação
> precisa refletir isso — o calouro de Agronomia não deve enxergar o portal como
> "portal do CTC com uma seção extra". As histórias deste épico convertem a estrutura
> de navegação plana em uma hierarquia real por centro, sem quebrar URLs existentes
> e sem perder conteúdo já publicado.

| ID | Prioridade | Tam. | Status | História |
|----|-----------|------|--------|----------|
| B-64 | 🔴 Must | 🟡 M | ✅ | Como **mantenedor**, quero **criar `docs/centros/ctc.md`** com o conteúdo institucional do CTC (coordenações, atléticas, links, lista de cursos), para **o CTC entrar na infraestrutura multi-centro como os demais centros**. |
| B-65 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **uma página `/centros`** listando todos os centros disponíveis no portal, para **encontrar meu centro sem saber de antemão a URL**. |
| B-66 | 🔴 Must | 🟡 M | ✅ | Como **calouro**, quero **ver os cursos do meu centro dentro da página `/centros/[slug]`**, para **navegar do centro diretamente para o curso sem passar por uma lista global**. |
| B-67 | 🔴 Must | 🟢 P | ✅ | Como **usuário**, quero **que o header/nav não mencione "CTC"**, para **perceber que o portal cobre todos os centros da UFSC, não só o CTC**. |
| B-68 | 🟠 Should | 🟢 P | ✅ | Como **calouro de outro centro**, quero **que `/cursos` me redirecione para `/centros`** em vez de listar apenas os cursos do CTC, para **não ser enganado achando que o portal só tem cursos do CTC**. |
| B-69 | 🟠 Should | 🟢 P | ✅ | Como **calouro do CTC que bookmarkeu `/secoes/coordenacoes` ou `/secoes/atleticas`**, quero **ser redirecionado para `/centros/ctc`** em vez de ver um 404, para **não perder o acesso ao conteúdo**. |
| B-70 | 🟠 Should | 🟢 P | ✅ | Como **calouro**, quero **que as seções "Coordenações" e "Atléticas e festas" deixem de aparecer no grid global da home** (pois passam a ser conteúdo de centro), para **a home não misturar conteúdo CTC-específico com conteúdo UFSC-geral**. |
| B-71 | 🟡 Could | 🟢 P | ✅ | Como **calouro**, quero **que a página `/centros/[slug]` exiba um link "Ver todos os cursos deste centro"** no topo do conteúdo, antes do texto corrido, para **chegar rápido às fichas de curso sem ler o HTML todo**. **Sprint 16:** botão "Ver os cursos do {centro}" (`.btn-primary`, `href="#cursos-do-centro"`) renderizado antes do `.prose-content` quando o centro tem cursos. |
| B-72 | 🟡 Could | 🟡 M | ✅ | Como **mantenedor**, quero **que `CLAUDE.md` e `docs/arquitetura.md` reflitam a nova hierarquia de navegação** (rota `/centros`, hero sem CTC, `/api/centros`), para **não confundir agentes futuros**. **Sprint 16:** estrutura do repo + tabela de API atualizadas em `CLAUDE.md`; fluxo `/ → /centros → /centros/[slug] → /cursos/[slug]` e ADR-9 em `arquitetura.md`. |

---

## Sprint sugerido (próximos passos)

**Sprint 1 concluído (v0.6):** fundação da plataforma — B-29, B-30, B-31, B-32,
B-33 e B-35.
**Sprint 2 concluído (v0.7):** busca (B-34), 13 fichas de curso (B-09) e
refinamento visual com dark mode (B-38).
**Sprint 3 concluído (v0.8):** deploy configs (B-36), link-check CI (B-24) e
suite pytest do backend.
**Sprint 4 concluído (v0.9):** calendário 2026 (B-06), atléticas + festas
(B-11), instagrams oficiais (B-12) e fichas com CA/atlética/IG.
**Sprint 5 concluído (v1.0):** eduroam + e‑mail no celular (B-07), templates de
issue/PR (B-21) e canal de histórias de veteranos (B-14).
**Sprint 6 concluído (v1.1):** data de verificação em todos os docs (B-25),
CODEOWNERS (B-22), rotina semestral (B-26), B-23 fechado, B-15/B-17 fechados por E8.
**Sprint 7 — migração Next.js 15 (v1.2) — concluído em 2026-07-15:** stack migrada
de Vite/React + FastAPI (Render) para **Next.js 15 App Router full-stack** na Vercel
(B-30/B-32 reimplementados, B-36 atualizado, `vercel.json` ajustado para SSG +
`outputFileTracingIncludes`). Backend Python e frontend Vite removidos do monorepo.
**Sprint 8 — Encontrável e Documentado (v1.3) — concluído em 2026-07-15:** B-46 (CLAUDE.md
+ arquitetura.md atualizados), B-47 (sitemap.xml, robots.txt, OG tags em todas as páginas),
B-52 (FAQ 16 perguntas + página /faq), B-53 (checklist da 1ª semana + página /checklist).
Fix de task list items no prose-content (CSS).

**Sprint 9 — Acessível, Mapeado e Testado (v1.4) — concluído em 2026-07-16:** B-49
(audit WCAG AA — 7 blockers corrigidos, contrastes, skip link, foco, aria-labels,
landmarks); B-19 (mapa interativo Leaflet.js, 7 marcadores, /mapa); B-54 (Playwright
8/8 smoke tests, GitHub Actions CI). Fix transversal: h1 duplicado em páginas de seção.
Lint e Build passam; 38 páginas SSG.

**Sprint 11 — Vida do curso completa (avanço em B-08) — concluído em 2026-07-20:**
completados os 2 Centros Acadêmicos que faltavam nas fichas de curso — **CAECA**
(Eng. de Controle e Automação, <https://caeca.ufsc.br/>) e **CALESA** (Eng.
Sanitária e Ambiental, <https://calesa.ufsc.br/> · [@calesaufsc](https://www.instagram.com/calesaufsc/)).
Com isso, **100% das 13 fichas do CTC têm Centro Acadêmico preenchido com fonte
oficial**. B-08 segue 🚧 (faltam dicas de veterano e "onde estudar", que dependem
de veteranos reais).

**Sprint 13 — Infraestrutura Multi-Centro + CCA e CSE (v1.7) — concluído em 2026-07-29:**
Infraestrutura `docs/centros/` + `app/centros/[slug]` + `app/api/centros/` implementada.
CCA (4 cursos, Itacorubi) e CSE (5 cursos, Trindade) publicados com coordenações, CAs, atléticas
e festas verificados. Popups do mapa integrados. B-60 passa para 🚧 Em andamento.

**Sprint 14 — Mais Centros: CCE + CCS + Fichas CCA (v1.8) — concluído em 2026-07-30:**
CCE (9 cursos, diretoria, CAs, atléticas, eventos) e CCS (6 cursos, diretoria, CAs,
atléticas, eventos) publicados. 4 fichas de cursos do CCA criadas (Agronomia, CTA,
Eng. Aquicultura, Zootecnia). B-60 continua 🚧; B-61 passa para 🚧.

**Sprint 15 — Reestruturação de navegação por centro (v1.9) — candidatos:**

> Prioridade: terminar a reestruturação arquitetural (E14) antes de adicionar mais conteúdo.
> Os itens abaixo formam uma sequência coesa — todos dependem de B-64 (ctc.md) ser feito primeiro.

1. **B-64** — `docs/centros/ctc.md` (content-editor) — Must, M. Pré-requisito de B-65, B-66 e B-69.
   Coletar de: `docs/coordenacoes.md`, `docs/atleticas-e-festas.md` e as 13 fichas de curso do CTC.
2. **B-67** — Remover "CTC" do header (frontend-dev) — Must, P. Linha única em `components/Header.tsx`.
   Pode rodar em paralelo com B-64.
3. **B-65** — Página `/centros` (frontend-dev) — Must, M. Depende de B-64 (CTC precisa estar
   em `listCenters()` para aparecer no índice).
4. **B-66** — Cursos do centro em `/centros/[slug]` (frontend-dev) — Must, M. Depende de B-64 e B-65.
5. **B-68** — Redirect `/cursos` para `/centros` (frontend-dev) — Should, P. Pode ser feito junto com B-65.
6. **B-69** — Redirect `/secoes/coordenacoes` e `/secoes/atleticas` (frontend-dev) — Should, P.
   Depende de B-64 existir.
7. **B-70** — Remover "Coordenações" e "Atléticas" do SLUG_MAP da home (frontend-dev) — Should, P.
   Depende de B-66 estar funcionando (garantia de que o conteúdo tem destino alternativo).

> Alternativa se o mantenedor quiser mais conteúdo antes da refatoração:
> **B-60 (CCJ + CFH + CFM)** e **B-61 (fichas CSE)** — ambos puramente de conteúdo, zero código.

**Radar (v2.0):**

- **B-50** — banco de dados Next.js com Prisma + SQLite/Postgres (pré-requisito de B-37
  e de qualquer feature dinâmica futura). Entrar no radar somente quando B-37 + E13
  forem planejados juntos.
- **B-13** — primeiras histórias de veteranos (desbloqueado assim que houver submissões
  reais via `historia-veterano.yml`).
- **B-71 + B-72** — link de atalho para cursos na página de centro e atualização da documentação técnica (Could, Sprint 15 ou 16).

**Horizonte (v2.0):**

- **B-56 + B-57** — autenticação OAuth + painel de moderação (E13).
- **B-39 + B-40** — avaliação de professores com moderação (E9, depende de E13).
- **B-41 + B-42** — simulador de grade de horários (E10).
- **B-27 + B-28** — modelo genérico de centro reutilizável (E7, agora coberto pela infra multi-centro).
- **B-60** — restante dos centros: CCJ, CFH, CFM, CCB, CED, CDS, Joinville, Araranguá (CCA, CSE, CCE, CCS feitos).
- **B-61** — fichas de cursos de todos os centros além do CTC e CCA (🚧 em aberto).

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

**B-46 — Docs técnicas para Next.js 15**
- [ ] `CLAUDE.md` descreve a stack atual (Next.js 15, sem FastAPI/Render).
- [ ] `docs/arquitetura.md` tem diagrama e ADRs atualizados.
- [ ] `docs/deploy.md` descreve apenas Vercel (sem Render).

**B-47 — SEO básico**
- [ ] Cada página tem `<title>` e `<meta description>` únicos via `generateMetadata`.
- [ ] OG tags (`og:title`, `og:description`, `og:url`) presentes.
- [ ] `public/sitemap.xml` lista todas as seções e cursos.
- [ ] `public/robots.txt` presente e permissivo.

**B-48 — PWA instalável**
- [ ] `public/manifest.json` com nome, ícone 192×192 e 512×512, `theme_color`.
- [ ] Tag `<link rel="manifest">` no `<head>`.
- [ ] Chrome exibe o prompt "Instalar aplicativo" no celular.

**B-49 — Acessibilidade WCAG AA**
- [ ] Todas as imagens têm `alt` descritivo.
- [ ] Contraste de texto ≥ 4.5:1 em fundo claro e escuro.
- [ ] Navegação completa por teclado (Tab/Enter/Esc).
- [ ] Landmarks HTML semânticos (`<nav>`, `<main>`, `<footer>`).
- [ ] Leitor de tela (NVDA ou VoiceOver) anuncia seções corretamente.

**B-50 — Banco de dados Next.js**
- [ ] Prisma instalado com schema inicial (`Story`, `Feedback`).
- [ ] Migração SQLite funciona localmente.
- [ ] Variável `DATABASE_URL` documentada em `.env.example`.
- [ ] Em prod (Vercel): Postgres externo (Neon ou Supabase free tier).

**B-51 — Analytics de privacidade**
- [ ] Vercel Analytics ou Plausible integrado sem cookies de rastreio.
- [ ] Dashboard mostra pageviews por rota.
- [ ] Aviso de privacidade no rodapé ou política de dados.

**B-52 — FAQ dos calouros**
- [ ] Arquivo `docs/faq.md` com ≥ 10 perguntas frequentes e respostas verificadas.
- [ ] Cada resposta tem link para a fonte oficial (UFSC, DAE, CAA, PRAE…).
- [ ] Seção de FAQ acessível na home ou no menu de navegação.
- [ ] Campos sem resposta oficial ficam como `_A preencher_`.

**B-53 — Checklist da primeira semana**
- [ ] Arquivo `docs/checklist-primeira-semana.md` com ≥ 8 itens ordenados por urgência.
- [ ] Itens cobrem: IDUFSC, RU, eduroam, Moodle, e-mail, CAGR, CA do curso.
- [ ] Página `/checklist` exibe os itens como lista interativa no site.

**B-54 — Testes E2E com Playwright**
- [ ] Playwright instalado como dev dependency; config em `playwright.config.ts`.
- [ ] Testes cobrem: home carrega, busca retorna resultado, seção exibe conteúdo, curso exibe ficha.
- [ ] Workflow `.github/workflows/e2e.yml` roda em PRs para `main`.
- [ ] Falha bloqueia merge se qualquer teste quebrar.

**B-55 — Lighthouse CI**
- [ ] `lighthouserc.json` com thresholds: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90.
- [ ] Workflow roda Lighthouse CI em PRs para `main` (usa `lhci autorun`).
- [ ] Falha em qualquer threshold bloqueia merge.

**B-56 — Autenticação OAuth Google**
- [ ] NextAuth.js (Auth.js v5) configurado com provider Google.
- [ ] Sessão persistida com JWT; nenhum dado pessoal gravado além de `id` e `email` (hash).
- [ ] Botão "Entrar com Google" visível apenas em páginas que exigem auth (submissão).
- [ ] Usuário não autenticado pode ler tudo; só não pode submeter.

**B-57 — Painel de moderação**
- [ ] Rota `/admin/moderacao` protegida por role `MODERATOR` no banco.
- [ ] Lista pendentes com texto, curso e data de envio.
- [ ] Botões Aprovar / Rejeitar (com campo de motivo opcional).
- [ ] Aprovação publica imediatamente; rejeição envia e-mail de notificação (opcional).

**B-58 — Regras de moderação documentadas**
- [ ] Arquivo `docs/moderacao.md` com critérios claros (o que aprova, o que rejeita).
- [ ] Cobre: difamação, dados pessoais, conteúdo ofensivo, spam, informação falsa.
- [ ] Linkado no painel de moderação e no CONTRIBUTING.md.

**B-64 — `docs/centros/ctc.md`**
- [ ] Arquivo `docs/centros/ctc.md` criado com frontmatter YAML: `slug: ctc`, `titulo: "Centro Tecnológico (CTC)"`, `descricao`, `ultima_verificacao`.
- [ ] Seções obrigatórias no corpo: Sobre o CTC, Coordenações (link para `/secoes/coordenacoes` ou conteúdo resumido), Atléticas e festas (extraído de `docs/atleticas-e-festas.md`), Links úteis do CTC, Cursos (lista dos 13 slugs com link para `/cursos/<slug>`).
- [ ] Conteúdo extraído de `docs/coordenacoes.md` e `docs/atleticas-e-festas.md` — sem duplicar texto corrido; referenciar as seções existentes ou copiar apenas o essencial.
- [ ] Campos sem fonte oficial ficam como `_A preencher_`, nunca inventados.
- [ ] `listCenters()` em `lib/content.ts` passa a retornar o CTC junto dos demais centros.
- [ ] `npm run build` inclui SSG de `/centros/ctc`.
- [ ] `npm run lint` passa sem erros.

**B-65 — Página `/centros` (índice de todos os centros)**
- [ ] Arquivo `app/centros/page.tsx` criado com `generateStaticParams` desnecessário (página estática simples).
- [ ] Renderiza um card por centro retornado por `listCenters()` — slug, título, descrição.
- [ ] Link de cada card aponta para `/centros/<slug>`.
- [ ] Metadata: `title: "Centros — Portal dos Calouros UFSC"`, `description` genérico sobre a UFSC.
- [ ] O CTC aparece na lista (depende de B-64).
- [ ] `app/sitemap.ts` inclui `/centros` (a rota raiz, não só `/centros/[slug]`).
- [ ] Mobile-first: cards empilhados em 1 coluna no celular, 2 ou 3 colunas em telas maiores.
- [ ] Acessível por teclado; cada card é um `<a>` ou `<Link>` com texto significativo.

**B-66 — Cursos do centro na página `/centros/[slug]`**
- [ ] `lib/content.ts`: `listCourses()` já expõe `centro` no `CourseSummary` — usar isso para filtrar cursos por centro.
- [ ] `app/centros/[slug]/page.tsx`: após o bloco de conteúdo HTML do centro, renderizar uma seção "Cursos deste centro" com os cursos filtrados por `center.slug.toUpperCase()` (ex.: `CTC`, `CCA`).
- [ ] Cada curso listado como card ou item com link para `/cursos/<slug>`.
- [ ] Se o centro não tiver nenhum curso em `docs/cursos/`, a seção não é renderizada (sem estado de erro visível).
- [ ] CTC deve exibir seus 13 cursos; CCA deve exibir Agronomia, CTA, Eng. Aquicultura, Zootecnia (depende de B-64 para o CTC).
- [ ] `npm run build` passa sem erros.
- [ ] Playwright: novo smoke test verifica que `/centros/ctc` contém pelo menos um link de curso.

**B-67 — Remover "CTC" do header/nav global**
- [ ] `components/Header.tsx`: linha `<span className="text-muted-foreground text-xs">UFSC — CTC</span>` alterada para `<span className="text-muted-foreground text-xs">UFSC</span>` (ou similar sem mencionar CTC).
- [ ] `app/page.tsx` (hero): o badge `CTC · Campus Trindade · Florianópolis` alterado para `Campus Trindade · Florianópolis` (sem mencionar CTC explicitamente como âncora do portal).
- [ ] Nenhuma outra referência a "CTC" no layout global (`app/layout.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `components/NavLinks.tsx`) além de contexto de conteúdo.
- [ ] Título/descrição da aba em `app/layout.tsx` (metadata raiz) não menciona "CTC" — apenas "Portal dos Calouros UFSC".
- [ ] `npm run lint` e `npm run build` passam.

**B-68 — `/cursos` redireciona para `/centros`**
- [ ] `app/cursos/page.tsx` substituída por redirect permanente (HTTP 301) para `/centros`, usando `redirect("/centros")` do `next/navigation` ou `permanentRedirect("/centros")` do Next.js 15.
- [ ] Alternativa aceita: manter a listagem de cursos, mas com um banner "Navegue por centro:" com links para `/centros/<slug>` e um aviso de que a lista abaixo inclui todos os centros.
- [ ] Se for redirect puro: `app/sitemap.ts` remove `/cursos` da lista de rotas.
- [ ] `npm run lint` e `npm run build` passam sem erros.
- [ ] Playwright: smoke test que acessava `/cursos` é atualizado para a nova realidade (ou novo teste em `/centros` substitui o antigo).

**B-69 — Redirects de legado: `/secoes/coordenacoes` e `/secoes/atleticas`**
- [ ] Acessar `/secoes/coordenacoes` retorna HTTP 301 para `/centros/ctc` (ou para `/centros/ctc#coordenacoes` se a âncora existir na página).
- [ ] Acessar `/secoes/atleticas` retorna HTTP 301 para `/centros/ctc` (ou `/centros/ctc#atleticas`).
- [ ] Implementação: pode ser via `next.config.ts` (bloco `redirects`) ou via `app/secoes/[slug]/page.tsx` com lógica de redirect por slug específico.
- [ ] Os dois slugs (`coordenacoes` e `atleticas`) continuam no `SLUG_MAP` de `lib/content.ts` — o conteúdo não é removido, apenas o acesso direto via seção global é redirecionado.
- [ ] Alternativa aceita: manter as páginas de seção funcionando (sem redirect), mas removê-las do grid da home (coberto por B-70). Escolher uma das duas abordagens e ser consistente.
- [ ] `npm run build` passa.

**B-70 — Remover "Coordenações" e "Atléticas" do grid da home**
- [ ] `lib/content.ts`: os slugs `coordenacoes` e `atleticas` são removidos do `SLUG_MAP` ou excluídos do retorno de `listSections()`.
- [ ] `app/page.tsx`: o grid "O que você quer saber?" não exibe mais cartões de "Coordenações" e "Atléticas e festas".
- [ ] A home passa a ter 8 seções (de 10 para 8): RU, links, datas, instagrams, mapa, histórias, FAQ, checklist.
- [ ] Considerar adicionar um card "Centros e cursos" apontando para `/centros` para substituir o espaço visual.
- [ ] Nenhuma quebra de rota: os arquivos `docs/coordenacoes.md` e `docs/atleticas-e-festas.md` permanecem intactos (fonte de conteúdo para `docs/centros/ctc.md`).
- [ ] `npm run lint` e `npm run build` passam.
- [ ] Playwright: smoke tests atualizados — nenhum teste que dependia dos cards de coordenações/atleticas na home quebra silenciosamente.

**B-71 — Link "Ver cursos" no topo da página de centro**
- [ ] `app/centros/[slug]/page.tsx`: se `listCourses().filter(c => c.centro?.toLowerCase() === slug)` retornar pelo menos 1 resultado, renderizar um link/botão "Ver os cursos do [título do centro]" imediatamente antes do bloco `prose-content`.
- [ ] Link aponta para o anchor `#cursos-do-centro` dentro da mesma página (seção renderizada por B-66), usando `href="#cursos-do-centro"`.
- [ ] Se não houver cursos, o link não é renderizado.

**B-72 — Atualizar CLAUDE.md e arquitetura.md para a nova navegação**
- [ ] `CLAUDE.md`: seção "Estrutura do repositório" atualizada com `app/centros/page.tsx` (índice) e `app/centros/[slug]/page.tsx` (centro + cursos do centro).
- [ ] `CLAUDE.md`: seção "API" lista `/api/centros` e `/api/centros/[slug]` (já existem, mas podem não estar documentados).
- [ ] `CLAUDE.md`: "Próximos passos" aponta para o estado real pós-Sprint 15.
- [ ] `docs/arquitetura.md`: diagrama/descrição de navegação do usuário atualizado para refletir o fluxo `/ → /centros → /centros/[slug] → /cursos/[slug]`.
- [ ] Nenhum arquivo de documentação menciona "portal do CTC" como identidade principal — sempre "Portal dos Calouros UFSC".

---

> Este backlog é vivo: reordene, adicione e refine conforme o projeto evolui.
> Cada item pode virar uma **issue** no GitHub usando o ID (ex.: `B-09`) no título.
