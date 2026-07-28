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
| B-60 | 🟠 Should | 🔴 G | ⬜ | Como **calouro de qualquer centro da UFSC Florianópolis**, quero **conteúdo sobre meu centro** (coordenações, atléticas, links úteis), para **me virar no primeiro dia mesmo não sendo do CTC**. Cobre: CCE, CCS, CCJ, CFH, CFM, CCB, CSE, CCA (Itacorubi), CED, CDS (Centro de Desportos e Saúde), CA (Araranguá), CA (Joinville). |
| B-61 | 🟠 Should | 🔴 G | ⬜ | Como **calouro**, quero **fichas dos cursos de todos os centros da UFSC Florianópolis**, para **ter informações do meu curso independente do centro**. Seguir o mesmo modelo de `docs/cursos/<slug>.md` já usado no CTC; incluir cursos do CCA que fica em Itacorubi (Agronomia, Zootecnia, Aquicultura, Eng. de Aquicultura, Eng. Agronômica, Medicina Veterinária, Recursos Naturais). |
| B-62 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **ver no mapa interativo os pontos de interesse de todos os centros da UFSC Florianópolis** — incluindo o CCA em Itacorubi (fora do campus Trindade) —, para **me localizar em qualquer parte dos campi**. Centros: CCE, CCS, CCJ, CFH, CFM, CCB, CSE, CED, CDS e CCA (Itacorubi, -27.582124, -48.504339). Coordenadas verificadas pelo mantenedor em 2026-07-28. |
| B-63 | 🟠 Should | 🟡 M | ⬜ | Como **calouro**, quero **filtrar o mapa por categoria** (Centros Acadêmicos, Alimentação, Saúde, Transporte, Biblioteca, Serviços), para **encontrar rapidamente o que preciso sem ver todos os marcadores ao mesmo tempo**. UI: botões/chips de filtro acima do mapa; marcadores filtrados visualmente por cor ou ícone por categoria. |

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

**Sprint 10 — Instalável, Medido e Com Teto de Qualidade (v1.5) — proposta:**

1. **B-55** — Lighthouse CI (Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90) — Could, P.
   Roda primeiro por ser CI puro: sem mudança de código do app, e estabelece o teto de
   qualidade que valida os outros dois entregáveis do sprint.
2. **B-48** — PWA instalável no celular (`manifest.json`, ícones 192/512, `theme-color`) —
   Could, P. Sem dependências de conteúdo; máximo impacto mobile com custo mínimo.
3. **B-51** — analytics de privacidade (Vercel Analytics, sem cookies) — Could, P.
   Sem dependências; fecha a trinca "encontrável + acessível + medido" da v1.

> Itens excluídos e motivo:
> - **B-50 / B-37 / E13** (banco + formulário + auth): escopo grande (G), precisa
>   co-planejamento no mesmo sprint para ter caso de uso visível ao calouro. Mantido
>   no Horizonte.
> - **B-13** (histórias de veteranos): ainda sem submissões reais confirmadas via
>   `historia-veterano.yml`. Inventar dados viola "Confiável antes de completo".
> - **B-10** (dicas de veterano por disciplina): mesmo bloqueio de conteúdo real que B-13.

**Radar (v2.0):**

- **B-50** — banco de dados Next.js com Prisma + SQLite/Postgres (pré-requisito de B-37
  e de qualquer feature dinâmica futura). Entrar no radar somente quando B-37 + E13
  forem planejados juntos.
- **B-13** — primeiras histórias de veteranos (desbloqueado assim que houver submissões
  reais via `historia-veterano.yml`).

**Horizonte (v2.0):**

- **B-56 + B-57** — autenticação OAuth + painel de moderação (E13).
- **B-39 + B-40** — avaliação de professores com moderação (E9, depende de E13).
- **B-41 + B-42** — simulador de grade de horários (E10).
- **B-27 + B-28** — modelo genérico de centro reutilizável (E7).
- **B-60** — conteúdo de todos os centros da UFSC Florianópolis (E7, G).
- **B-61** — fichas de cursos de todos os centros, incluindo CCA em Itacorubi (E7, G).
- **B-62 + B-63** — mapa com pontos de todos os centros (incl. CCA) + filtro por categoria (E7, M+M). Candidatos ao próximo sprint por serem extensões diretas do mapa já existente.

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

---

> Este backlog é vivo: reordene, adicione e refine conforme o projeto evolui.
> Cada item pode virar uma **issue** no GitHub usando o ID (ex.: `B-09`) no título.
