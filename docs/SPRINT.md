# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Product Owner. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 19 — Fechamento do CCE: fichas dos 9 cursos (v1.13)

**Objetivo:** Completar o **CCE** publicando as fichas dos seus 9 cursos de graduação presenciais.
O CCE está publicado desde o Sprint 14, mas `/centros/cce → curso` cai em ficha inexistente — o
mesmo débito que os Sprints 16 (CSE) e 18 (CCS) já corrigiram para os outros centros. Princípio:
**terminar o que já está publicado antes de abrir novas frentes**. Com o CCE, todos os 5 centros
de conteúdo original (CTC, CCA, CSE, CCS, CCE) passam a ter fichas de curso completas.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas dos 9 cursos do CCE (B-61 parcial) — lote A (5) | B-61 (CCE-A) | Should / M | content-editor | In Progress |
| Fichas dos 9 cursos do CCE (B-61 parcial) — lote B (4) | B-61 (CCE-B) | Should / M | content-editor | In Progress |

### Critérios de aceite detalhados

**B-61 (parcial CCE) — 9 fichas de curso**
- [ ] 9 arquivos `docs/cursos/<slug>.md` com `centro: CCE`, divididos em 2 lotes paralelos:
  - **Lote A:** `animacao`, `artes-cenicas`, `cinema`, `design`, `design-de-produto`.
  - **Lote B:** `jornalismo`, `letras-estrangeiras`, `letras-portugues`, `secretariado-executivo`.
- [ ] Coordenação/CA/atlética reaproveitados de `docs/centros/cce.md` (verificado no Sprint 14).
- [ ] Campos sem fonte confirmada como `~` (null YAML) no frontmatter, nunca texto verboso (lição Sprint 14).
- [ ] Grau/turno/duração via Guia de Cursos UFSC/site do curso; incertezas/contradições ficam `_A preencher_` (lição Sprint 16).
- [ ] "Dicas de veterano"/"Onde estudar" ficam `_A preencher_` (dependem de veteranos reais).
- [ ] `/centros/cce` passa a exibir os 9 cursos com destino válido; build gera as 9 páginas.

### Ordem de execução e dependências

```
Wave única (2 content-editors em paralelo — arquivos disjuntos):
  B-61 (CCE-A)  content-editor A  — docs/cursos/{animacao,artes-cenicas,cinema,design,design-de-produto}.md
  B-61 (CCE-B)  content-editor B  — docs/cursos/{jornalismo,letras-estrangeiras,letras-portugues,secretariado-executivo}.md
Depois:
  tester — lint + build + Playwright (Chromium pré-instalado em /opt/pw-browsers)
```

### Fontes oficiais (B-61/CCE)
Dados-base em `docs/centros/cce.md`; complementar com: design.ufsc.br, jornalismo.ufsc.br,
cinema.ufsc.br, sites do DAC (Artes Cênicas/Animação), DLLE (Letras Estrangeiras/Secretariado),
Letras-Português, e https://guiadecursos.ufsc.br/<curso>/. Fetch a `*.ufsc.br` costuma dar 403
neste ambiente — usar WebSearch cruzando fontes; nunca inventar.

### Definition of Done
- [ ] `npm run lint` passa · `npm run build` passa (SSG com 9 fichas novas)
- [ ] Playwright sem regressões
- [ ] `/centros/cce` mostra 9 cursos; todos os 5 centros originais com fichas completas
- [ ] ui-ux-review sem findings bloqueadores (conteúdo servido pelo template existente — auditoria leve)
- [ ] `docs/product-backlog.md` atualizado (B-61)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | Mantendo o ritmo; entram em sprint de centros próprio. |
| Fichas de CCJ/CFH/CFM (publicados no Sprint 18) | Muitos cursos (CFH tem 9, CFM 5); cada um é um sprint de fichas próprio depois do CCE. |
| #46 (enviar sugestões) | **Bloqueado por decisão do mantenedor** — escolher abordagem antes de virar história. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

---

## Sprint 18 — Fechamento: cursos do CCS, mais centros e cauda da UI de seções (v1.12) — concluído em 2026-08-03

**Objetivo:** Sprint de fechamento (conteúdo + cauda de UI), sem abrir arquitetura nova. Completar o
**CCS** publicando as fichas dos seus 6 cursos (hoje `/centros/ccs → curso` cai em ficha inexistente —
mesmo problema que o CSE tinha antes do Sprint 16), adicionar **3 novos centros** (CCJ, CFH, CFM),
terminar a **UI estruturada das seções** (instagrams + historias, #48/B-73) e quitar a **dívida do token
de botão no dark mode**. Princípio: **terminar o que já está publicado antes de abrir mais frentes**.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Fichas dos 6 cursos do CCS (B-61 parcial) | B-61 (CCS) | Should / M | content-editor | Done |
| Novos centros: CCJ + CFH + CFM (B-60 parcial) | B-60 (CCJ/CFH/CFM) | Should / M | content-editor | Done |
| UI estruturada: seções instagrams e historias (#48 cont.) | B-73 (cont.) | Should / M | frontend-dev | Done |
| Token `--primary-button` dedicado p/ dark mode (dívida técnica) | B-78 | Could / P | frontend-dev | Done |

### Critérios de aceite detalhados

**B-61 (parcial CCS) — 6 fichas de curso**
- [ ] 6 arquivos `docs/cursos/<slug>.md` com `centro: CCS`: `enfermagem`, `farmacia`,
      `fonoaudiologia`, `medicina`, `nutricao`, `odontologia`.
- [ ] Coordenação/CA/atlética reaproveitados de `docs/centros/ccs.md` (verificado no Sprint 14).
- [ ] Campos sem fonte confirmada como `~` (null YAML), nunca texto verboso (lição do Sprint 14).
- [ ] `/centros/ccs` passa a exibir 6 cards de curso com destino válido; build gera as 6 páginas.

**B-60 (parcial) — CCJ + CFH + CFM**
- [ ] 3 arquivos `docs/centros/<slug>.md` (`ccj`, `cfh`, `cfm`) com frontmatter YAML
      (`slug`, `titulo`, `descricao`, `ultima_verificacao`) e seções: Coordenações/Diretoria, CAs,
      Atléticas, Links úteis. Dados sem fonte oficial ficam `_A preencher_`.
- [ ] `/centros` passa a listar 8 centros; build gera `/centros/ccj`, `/centros/cfh`, `/centros/cfm`.

**B-73 (cont. #48) — UI estruturada: instagrams e historias**
- [ ] Componente dedicado para `instagrams` (grid de cards de perfil: nome, @handle, link, badge
      oficial/estudantil) e para `historias` (lista de relatos com destaque), consumindo `Section.blocks`.
- [ ] Registrados em `app/secoes/[slug]/page.tsx` ao lado de links/datas/ru; fallback `.prose-content`
      mantido para as demais. `docs/*.md` segue fonte única.
- [ ] Mobile-first; links externos com `rel="noopener noreferrer"`; tap targets ≥ 44px.

**B-78 — token de botão no dark mode**
- [ ] Novo token (ex.: `--primary-button` ou override em dark) para `.btn-primary` (e usos equivalentes,
      ex. `not-found.tsx`) com contraste ≥ 4.5:1 de branco sobre o fundo do botão **em dark mode**.
- [ ] Não altera a paleta do modo claro (B-49 já resolvido lá).
- [ ] Documentar o ratio em `docs/identidade-visual.md`.

### Ordem de execução e dependências

```
Wave única (paralelo — arquivos disjuntos, zero conflito):
  B-61 (CCS)  content-editor A  — docs/cursos/*.md (6 fichas)
  B-60        content-editor B  — docs/centros/{ccj,cfh,cfm}.md
  B-73 cont.  frontend-dev      — components/sections/* + app/secoes/[slug]/page.tsx
  B-78        frontend-dev      — globals.css / tailwind.config.ts + docs/identidade-visual.md
              (B-73 e B-78 no mesmo agente, em sequência, para evitar corrida de build)
Depois:
  tester — lint + build + Playwright (Chromium pré-instalado em /opt/pw-browsers)
```

### Fontes oficiais

**B-60 (centros):** CCJ https://ccj.ufsc.br/ · CFH https://cfh.ufsc.br/ · CFM https://cfm.ufsc.br/
**B-61 (cursos CCS):** dados-base em `docs/centros/ccs.md`; complementar com os sites de cada curso
(enf.ufsc.br, farmacia.ufsc.br, fonoaudiologia.ufsc.br, medicina.ufsc.br, nutricao.ufsc.br,
odontologia.ufsc.br) e o Guia de Cursos UFSC. Fetch a `*.ufsc.br` costuma dar 403 aqui — usar
WebSearch cruzando fontes e sinalizar incerteza; nunca inventar.

### Definition of Done
- [ ] `npm run lint` passa · `npm run build` passa (SSG com 6 fichas CCS + 3 centros novos)
- [ ] Playwright sem regressões
- [ ] `/centros/ccs` mostra 6 cursos; `/centros` lista 8 centros; seções instagrams/historias com UI dedicada
- [ ] ui-ux-review sem findings bloqueadores (e dívida do token de botão no dark fechada)
- [ ] `docs/product-backlog.md` atualizado (B-60, B-61, B-73, B-78) · README se houver mudança estrutural

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-61 (CCE, 9 cursos) | Maior que CCS; somado aos outros itens estouraria um único `/sprint-run`. Próximo (Sprint 19). |
| B-60 (CCB, CED, CDS, Joinville, Araranguá) | Ritmo de 2–3 centros por sprint; resto no radar. |
| #46 (enviar sugestões) | **Bloqueado por decisão do mantenedor** — escolher abordagem (Google Form vs. Route Handler + e-mail vs. link de issue) antes de virar história. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 18

**Concluído em:** 2026-08-01

**Entregue:**
- **B-61 (CCS)** — 6 fichas de curso (`enfermagem`, `farmacia`, `fonoaudiologia`, `medicina`,
  `nutricao`, `odontologia`), reaproveitando dados verificados de `docs/centros/ccs.md`; grau/turno/
  duração via WebSearch com nota de ressalva; coordenadores/atléticas sem fonte como `_A preencher_`.
  `/centros/ccs` agora exibe os 6 cursos com destino válido.
- **B-60 (CCJ + CFH + CFM)** — 3 centros novos: CCJ (Direito, CAXIF, AAD), CFH (9 cursos, direção
  2023–2027, CAs CALPsi/CALH/CALIGEO/CALCS/CAFIL/CALANT), CFM (Física/Matemática/Química/Meteorologia/
  Oceanografia, CAs e atléticas ATQ/AFIM). `/centros` passa a listar 8 centros.
- **B-73 (cont. #48)** — `InstagramSection` (grid de perfis com badge oficial/estudantil, links em
  nova aba) e `HistoriasSection` (relatos em cards destacados + empty-state), registrados no
  `SECTION_COMPONENTS`; fallback `.prose-content` mantido para faq/checklist/mapa. `docs/` fonte única.
- **B-78** — token `--primary-button` dedicado: dark `217 91% 45%` → branco **6.00:1** (AA com folga),
  modo claro inalterado (4.73:1); ratios documentados em `docs/identidade-visual.md`.

**Findings ui-ux-review:**
- Nenhum blocker/major. A **dívida recorrente do token de botão no dark mode foi fechada** pelo B-78.
  1 nit (badge `text-[10px]` na InstagramSection) — não bloqueante, sem ação.

**Verificações finais:** lint ✅ · build **64 páginas** SSG ✅ (6 fichas CCS + 3 centros novos) ·
Playwright 8/8 ✅.

**O que foi bem:**
- Wave única com 3 agentes (2 conteúdo + 1 frontend) em arquivos disjuntos — zero conflito, padrão
  consolidado desde o Sprint 14/16.
- "Terminar > começar" de novo: fechar o CCS (centro publicado sem fichas) antes de abrir o CCE maior.
- Regra de ouro mantida sob 403 generalizado: content-editors cruzaram fontes via WebSearch e
  marcaram `_A preencher_` onde não havia confirmação (coordenadores, algumas atléticas/durações).
- Uma dívida técnica de acessibilidade arrastada por 3 sprints foi finalmente quitada (B-78).

**Lições aprendidas:**
- Introduzir um token semântico dedicado (`--primary-button`) em vez de reusar `--primary` é a forma
  correta de resolver contraste de componente sem afetar texto/links — replicável para outros casos.

**Pendências / follow-up:**
- **B-61 (CCE, 9 cursos)** — próximo alvo de "terminar > começar" (Sprint 19).
- **B-60** — faltam CCB, CED, CDS + campi Joinville/Araranguá.
- **#46** — segue bloqueado aguardando decisão de abordagem do mantenedor.
- **B-73** — seções faq/checklist/mapa ainda no fallback prose (têm páginas próprias; baixa prioridade).

---

## Sprint 17 — Correções, Navegação e UI das Seções (v1.11) — concluído em 2026-08-01

**Objetivo:** Endereçar issues do mantenedor abertas no GitHub: dois fixes rápidos (mapa do CFM,
nome do site), reintroduzir acesso direto aos cursos (aba "Cursos" + listagem global), divulgar
ferramentas da comunidade (MyFUFSC/MatrUFSC) e dar um primeiro passo em transformar as páginas de
seção de "visualizador de markdown" em UI estruturada.

| História | ID | Issue | Prioridade / Tam. | Agente | Status |
|----------|----|-------|-------------------|--------|--------|
| Corrigir coordenadas do marcador do CFM no mapa | B-76 | #39 | Must (fix) / P | frontend-dev | Done |
| Renomear "UFSC — CTC" → "UFSC · Florianópolis" nos metadados | B-77 | #40 | Must (fix) / P | frontend-dev | Done |
| Ferramentas da comunidade: MyUFSC e MatrUFSC | B-74 | #47 | Should / P | content-editor | Done |
| Aba "Cursos" na topbar + listagem global de cursos em `/cursos` | B-75 | #45 | Should / M | frontend-dev | Done |
| Páginas de seção com UI estruturada (≥ 3 seções) | B-73 | #48 | Should / G | frontend-dev | Done |

> **Fora deste sprint:** #46 (enviar sugestões) — adiado por decisão do mantenedor (depende de
> escolha de abordagem/infra: Google Form vs. Route Handler + e-mail).

### Critérios de aceite detalhados

**B-76 (#39) — Coordenadas do CFM**
- [ ] Em `components/MapView.tsx` (array de marcadores, entrada "CFM — Centro de Ciências Físicas e Matemáticas"),
      trocar as coordenadas atuais (`-27.601411120065425, -48.52380552762934`) por
      **lat `-27.5994566`, lng `-48.5233276`** (fornecidas pelo mantenedor).
- [ ] `npm run lint` e `npm run build` passam; marcador aparece na nova posição.

**B-77 (#40) — Nome do site sem "CTC"**
- [ ] `app/layout.tsx`: `metadata.title`, `metadata.description`, `openGraph.title` e
      `openGraph.description` deixam de mencionar "CTC". Título → `"Portal dos Calouros UFSC"`
      (ou `"Portal dos Calouros UFSC · Florianópolis"`); descrição fala de "calouros da UFSC
      (Florianópolis)", não "do CTC".
- [ ] Nenhuma outra string de UI global menciona "UFSC — CTC" / "UFSC CTC". (A frase em
      `app/page.tsx:103` que **lista** os centros — "CTC, CCA, CSE…" — é conteúdo legítimo e permanece.)
- [ ] `npm run lint` e `npm run build` passam.

**B-74 (#47) — MyFUFSC e MatrUFSC**
- [ ] Subseção "Ferramentas da comunidade" em `docs/links-importantes.md` (não criar slug novo,
      para não reabrir mudança de home/API neste sprint).
- [ ] MyFUFSC: o que é, para que serve, como baixar (links **verificados**; se app store não
      confirmável, `_A preencher_`).
- [ ] MatrUFSC: o que é, para que serve, link de acesso **verificado**.
- [ ] Deixar explícito que são **projetos independentes da comunidade**, não oficiais da UFSC.
- [ ] Nenhuma URL inventada — o que não confirmar fica `_A preencher_`.

**B-75 (#45) — Aba "Cursos" + listagem global**
- [ ] `app/cursos/page.tsx`: substituir o `permanentRedirect("/centros")` (do B-68) por uma
      página que **lista todos os cursos de todos os centros** via `listCourses()`, agrupados por
      centro (ou com badge do centro em cada card), cada um linkando `/cursos/<slug>`.
- [ ] `components/NavLinks.tsx`: adicionar `<Link href="/cursos">Cursos</Link>` ao lado de "Centros",
      ativo (`text-primary`) quando `pathname` começa com `/cursos`.
- [ ] `app/sitemap.ts`: reincluir `/cursos` na lista de rotas.
- [ ] Mobile-first (cards empilham no celular); acessível por teclado.
- [ ] **Nota de reconciliação:** isto reverte parcialmente o B-68. Agora é coerente — a lista é
      "todos os cursos da UFSC por centro", não mais "só cursos do CTC". Registrar como ADR-10 em
      `docs/arquitetura.md` (feito junto do B-75 ou como parte da doc; opcional neste sprint).
- [ ] `npm run lint` e `npm run build` passam; Playwright ajustado se algum teste dependia do
      redirect de `/cursos`.

**B-73 (#48) — UI estruturada das seções (primeiro passo)**
- [ ] `lib/content.ts` passa a expor dados estruturados (frontmatter + blocos) além de `content_html`,
      **mantendo `docs/*.md` como fonte única** (sem duplicar conteúdo em código).
- [ ] **Pelo menos 3 seções** com componente de UI dedicado em `components/sections/` (ex.:
      Coordenações → cards com copiar e-mail + link `tel:`; Links → grid de cards; Datas → lista/timeline
      com badge). Sugestão de priorização: Coordenações, Links e Datas.
- [ ] `app/secoes/[slug]/page.tsx` seleciona o componente dedicado quando existir, com **fallback
      `.prose-content`** para as demais seções.
- [ ] Contatos têm ação direta (copiar / discador); links externos abrem em nova aba com
      `rel="noopener noreferrer"`.
- [ ] Mobile-first; `npm run lint` e `npm run build` passam; Playwright sem regressão.

### Ordem de execução e dependências

```
Wave 1 (paralelo — arquivos disjuntos):
  B-76 + B-77  frontend-dev(A)  — MapView.tsx (coords) + layout.tsx (metadados). Fixes triviais.
  B-74         content-editor   — docs/links-importantes.md.

Wave 2:
  B-75  frontend-dev(B) — app/cursos/page.tsx + NavLinks.tsx + sitemap.ts.

Wave 3 (isolada — item grande, mexe em lib/content.ts):
  B-73  frontend-dev(C) — loader + components/sections/* + app/secoes/[slug]/page.tsx.

Depois:
  tester — lint + build + Playwright (com Chromium pré-instalado em /opt/pw-browsers).
```

> Waves 2 e 3 são sequenciais (não paralelas) para evitar corrida no working tree / `npm run build`
> entre tarefas de frontend na mesma checkout. Wave 1 mistura frontend trivial + conteúdo sem conflito.

### Definition of Done
- [ ] `npm run lint` passa (frontend)
- [ ] `npm run build` passa (SSG; `/cursos` volta a gerar página)
- [ ] Playwright sem regressões (ajustar teste do `/cursos` se necessário)
- [ ] Marcador do CFM na posição correta; nenhum "UFSC — CTC" nos metadados
- [ ] `/cursos` lista todos os cursos e a aba "Cursos" aparece na topbar
- [ ] ≥ 3 seções com UI dedicada; `docs/*.md` continua fonte única
- [ ] ui-ux-review sem findings bloqueadores
- [ ] `docs/product-backlog.md` atualizado; issues #39, #40, #45, #47, #48 referenciadas

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| #46 (enviar sugestões) | Adiado por decisão do mantenedor — depende de escolher abordagem (Google Form vs. Route Handler + e-mail) e infra. |
| B-60 / B-61 (mais centros/fichas) | Não pedidos neste recorte; entram em sprint de conteúdo próprio. |
| B-08 / B-13 (veteranos) | Bloqueados — sem submissões reais. |

### Retrospectiva do Sprint 17

**Concluído em:** 2026-08-01

**Entregue:**
- **B-76 (#39)** — coordenadas do marcador do CFM em `components/MapView.tsx` corrigidas para
  `lat -27.5994566, lng -48.5233276` (fornecidas pelo mantenedor).
- **B-77 (#40)** — "CTC" removido dos metadados: `app/layout.tsx` (title/description/OG) e
  `app/manifest.ts` (description do PWA) → "Portal dos Calouros UFSC" / "calouros da UFSC (Florianópolis)".
  O `content-editor`/`frontend-dev` detectou a ocorrência extra no `manifest.ts` (fora do escopo literal),
  que foi corrigida por ser claramente parte da intenção do #40.
- **B-74 (#47)** — seção "Ferramentas da comunidade" em `docs/links-importantes.md`: **MatrUFSC**
  (`matrufsc.github.io`) e **MyUFSC** (`myufsc.vercel.app` — planeja semestres pelo histórico síntese;
  link confirmado pelo mantenedor após o `content-editor` deixar `_A preencher_` por não achar "MyFUFSC").
- **B-75 (#45)** — `/cursos` deixou de ser `permanentRedirect` e voltou como **listagem global de todos
  os cursos agrupados por centro**; aba "Cursos" adicionada em `components/NavLinks.tsx`; `/cursos`
  reincluído no `app/sitemap.ts`. Reverte parcialmente o B-68, agora coerente (multi-centro).
- **B-73 (#48)** — primeiro passo da UI estruturada: `lib/content.ts` expõe `Section.blocks`
  (via `marked.lexer`, `docs/` segue fonte única) e 3 seções ganharam componentes dedicados —
  **links** (grid de cards com chips mailto/tel/link externo), **datas** (timeline `<dt>/<dd>` sem
  overflow no mobile), **ru** (passos numerados + alertas amber). Fallback `.prose-content` mantido
  para as demais seções.

**Findings ui-ux-review:**
- Nenhum blocker. 1 minor corrigido no mesmo sprint: tap target dos chips de contato do
  `LinkCardGrid` (`min-h-[32px]` → `min-h-[44px] py-2`). 1 minor pré-existente registrado como dívida
  (contraste do token `--primary` no dark mode nos marcadores decorativos).

**Verificações finais:** lint ✅ · build 55 páginas SSG ✅ (`/cursos` agora estático) · Playwright 8/8 ✅.

**O que foi bem:**
- Ondas com dependência bem sequenciadas: fixes triviais + conteúdo em paralelo (wave 1), depois os
  dois itens grandes de frontend isolados (waves 2 e 3) — zero corrida de build no working tree.
- `content-editor` seguiu a regra de ouro sob pressão: sem conseguir confirmar "MyFUFSC", não inventou
  link — deixou `_A preencher_` e propôs alternativas verificáveis.
- `frontend-dev` do B-73 manteve `docs/` como fonte única (parse de tokens, nada hardcoded) e preservou
  o fallback, sem quebrar as seções não migradas.

**Lições aprendidas:**
- Ao mexer em identidade/nome do site, a busca precisa cobrir também `app/manifest.ts` (PWA) e não só
  `app/layout.tsx` — o texto institucional aparece em mais de um lugar.
- WebFetch continua bloqueado (403) para praticamente todos os domínios externos neste ambiente;
  verificação de links via WebSearch cruzando fontes é o caminho, sempre registrando a incerteza.

**Pendências / follow-up:**
- **#47 / MyUFSC** — resolvido: o mantenedor confirmou o app (`myufsc.vercel.app`); publicado.
- **#48 / B-73** — é o primeiro passo (3 seções). Seções restantes (instagrams, historias) podem ganhar
  UI dedicada num sprint futuro.
- **Dívida técnica** — token `--primary-button` dedicado para dark mode.

**Para o próximo sprint (candidatos):**
- **B-60** (CCJ + CFH + CFM) e **B-61** (fichas CCE/CCS) — conteúdo.
- **#46** (enviar sugestões) — quando o mantenedor escolher a abordagem.
- Continuar **#48** (mais seções com UI dedicada).

---

## Sprint 16 — Cauda da E14 + Fichas dos Cursos do CSE (v1.10) — concluído em 2026-08-01

**Objetivo:** Fechar a "cauda" da reestruturação de navegação (E14) — link de atalho para
cursos na página de centro (B-71) e documentação técnica atualizada (B-72) — e **completar o
CSE**, publicando as fichas dos seus 5 cursos de graduação para que o calouro que navega
`/centros/cse → curso` não encontre mais uma ficha inexistente. Prioridade de produto:
**terminar o que já foi anunciado como pronto antes de abrir novos centros**.

| História | ID | Prioridade / Tam. | Agente | Status |
|----------|----|-------------------|--------|--------|
| Link "Ver os cursos deste centro" no topo de `/centros/[slug]` | B-71 | Could / P | frontend-dev | Done |
| Atualizar `CLAUDE.md` e `docs/arquitetura.md` para a nova navegação | B-72 | Could / M | content-editor | Done |
| Fichas dos 5 cursos do CSE (B-61 parcial) | B-61 (CSE) | Should / M | content-editor | Done |

### Critérios de aceite detalhados

**B-71 — Link "Ver cursos" no topo da página de centro**
- [ ] `app/centros/[slug]/page.tsx`: quando o centro tem ≥ 1 curso, renderizar um link/botão
      "Ver os cursos do [título do centro]" com `href="#cursos-do-centro"` **antes** do bloco
      `.prose-content` (o anchor `id="cursos-do-centro"` já existe, criado no B-66).
- [ ] Se o centro não tem cursos, o link **não** é renderizado.
- [ ] Estilo consistente com a identidade visual (azul primário, acessível por teclado,
      tap target ≥ 44px).
- [ ] `npm run lint` e `npm run build` passam.

**B-72 — Documentação técnica da nova navegação**
- [ ] `CLAUDE.md`: "Estrutura do repositório" inclui `app/centros/page.tsx` (índice) e
      `app/centros/[slug]/page.tsx` (centro + cursos do centro).
- [ ] `CLAUDE.md`: seção "API" lista `/api/centros` e `/api/centros/{slug}`.
- [ ] `CLAUDE.md`: "Próximos passos" reflete o estado real pós-Sprint 16 (Sprint 17 = B-60
      CCJ/CFH/CFM + demais fichas).
- [ ] `docs/arquitetura.md`: fluxo de navegação do usuário atualizado para
      `/ → /centros → /centros/[slug] → /cursos/[slug]`.
- [ ] Nenhum arquivo de documentação menciona "portal do CTC" como identidade principal —
      sempre "Portal dos Calouros UFSC".

**B-61 (parcial CSE) — Fichas dos 5 cursos do CSE**
- [ ] 5 arquivos criados seguindo `docs/_modelo-curso.md`, com `centro: CSE` no frontmatter:
      `docs/cursos/administracao.md`, `ciencias-contabeis.md`, `ciencias-economicas.md`,
      `relacoes-internacionais.md`, `servico-social.md`.
- [ ] Coordenação, CA e atlética reaproveitados de `docs/centros/cse.md` (já verificados);
      campos sem fonte oficial ficam como `_A preencher_` — **nunca inventar**.
- [ ] Frontmatter usa `~` (null YAML) para campos vazios, não texto verboso
      (lição do Sprint 14 — evita render quebrado no template).
- [ ] Turno/grau/duração confirmados no Guia de Cursos UFSC de cada curso.
- [ ] `npm run build` inclui SSG das 5 novas páginas de curso.
- [ ] `/centros/cse` mostra os 5 cards de curso (B-66) apontando para as novas fichas.

### Ordem de execução e dependências

```
Wave única (paralelo — arquivos disjuntos, zero conflito):
  B-71  frontend-dev    — app/centros/[slug]/page.tsx (código)
  B-72  content-editor  — CLAUDE.md + docs/arquitetura.md (docs técnicas)
  B-61  content-editor  — docs/cursos/*.md (5 fichas CSE, conteúdo institucional)

Depois:
  tester — lint + build + Playwright 8/8
```

### Slugs e fontes oficiais (B-61/CSE)

| Curso | Slug do arquivo | Fonte oficial |
|-------|-----------------|---------------|
| Administração | `administracao` | https://administracao.ufsc.br/ · https://guiadecursos.ufsc.br/administracao/ |
| Ciências Contábeis | `ciencias-contabeis` | https://cienciascontabeis.ufsc.br/ · https://guiadecursos.ufsc.br/ciencias-contabeis/ |
| Ciências Econômicas | `ciencias-economicas` | https://economia.ufsc.br/ · https://guiadecursos.ufsc.br/ciencias-economicas/ |
| Relações Internacionais | `relacoes-internacionais` | https://ri.ufsc.br/ · https://guiadecursos.ufsc.br/relacoes-internacionais/ |
| Serviço Social | `servico-social` | https://servicosocial.ufsc.br/ · https://guiadecursos.ufsc.br/servico-social/ |

### Definition of Done
- [ ] `npm run lint` passa (frontend)
- [ ] `npm run build` passa (SSG com 5 novas fichas de curso — total ~53 páginas)
- [ ] Playwright 8/8 sem regressões
- [ ] `/centros/cse` exibe link "Ver cursos" (B-71) + 5 cards apontando para fichas existentes
- [ ] ui-ux-review sem findings bloqueadores
- [ ] `docs/product-backlog.md` atualizado (B-71 ✅, B-72 ✅, B-61 avança)
- [ ] `CLAUDE.md`/`arquitetura.md` refletem a navegação por centro (B-72)

### O que NÃO entra e por quê

| Item | Motivo |
|------|--------|
| B-60 (CCJ + CFH + CFM) | Prioridade nº 1 do CLAUDE.md, mas adiada: abrir 3 centros novos sem fichas de curso replica o problema que o CSE tem hoje. Entra no Sprint 17 assim que o CSE fechar. |
| B-08 (dicas de veterano) / B-13 (histórias) | Bloqueados — dependem de veteranos reais; não inventar conteúdo. |
| B-50 / B-37 / E13 (banco + auth + moderação) | Horizonte v2.0 — bloco integrado, fora de escopo. |

### Retrospectiva do Sprint 16

**Concluído em:** 2026-08-01

**Entregue:**
- **B-71** — `app/centros/[slug]/page.tsx`: botão "Ver os cursos do {centro}" (`.btn-primary`,
  `href="#cursos-do-centro"`, ícone `ArrowRight aria-hidden`) renderizado antes do `.prose-content`
  quando o centro tem cursos; oculto quando não há. Full-width no mobile, `sm:w-auto` no desktop.
- **B-72** — `CLAUDE.md` (estrutura do repo com `app/centros` + `app/api/centros`; tabela de API
  com `/api/centros` e `/api/centros/{slug}`; próximos passos pós-Sprint 16) e `docs/arquitetura.md`
  (fluxo `/ → /centros → /centros/[slug] → /cursos/[slug]`, infraestrutura multi-centro, ADR-9).
- **B-61 (parcial CSE)** — 5 fichas de curso: `administracao`, `ciencias-contabeis`,
  `ciencias-economicas`, `relacoes-internacionais`, `servico-social` (todas `centro: CSE`).
  Coordenação, CA e atlética reaproveitados de `docs/centros/cse.md` (já verificados); campos sem
  fonte confirmada como `_A preencher_`/`~`. `docs/README.md` com seção dos cursos do CSE.

**Findings ui-ux-review:**
- Nenhum blocker/major. 1 minor **pré-existente** (fora de escopo): contraste do token `.btn-primary`
  em dark mode (~3.4:1, branco sobre `--primary` `217 91% 62%`) — herdado, também usado em
  `not-found.tsx`; candidato a issue própria (`--primary-button` dedicado no dark, como o B-49 fez no light).

**Verificações finais:** lint ✅ · build 55 páginas SSG ✅ (5 rotas de curso CSE confirmadas) ·
Playwright 8/8 ✅.

**Nota de infraestrutura (Playwright):** o `tester` inicialmente reportou Playwright bloqueado —
`npx playwright install` é rejeitado pelo proxy da organização (`cdn.playwright.dev` fora da
allowlist). O ambiente já traz Chromium pré-instalado em `/opt/pw-browsers`, mas o `@playwright/test`
do projeto espera um build de `chrome-headless-shell` mais novo (1228) que o pré-instalado (1194).
Solução: rodar apontando `launchOptions.executablePath` para `/opt/pw-browsers/chromium` (Chromium
completo, sem a checagem de versão do headless-shell) — 8/8 passaram. Esse override foi só para a
verificação local; **não** foi commitado (o CI do GitHub instala os browsers normalmente).

**O que foi bem:**
- "Terminar > começar": priorizar as fichas do CSE (centro já publicado, mas com cursos sem ficha)
  em vez de abrir novos centros eliminou uma experiência quebrada real (`/centros/cse → curso → 404`).
- Wave única com 3 agentes em paralelo (código + docs técnicas + conteúdo) sem conflito — arquivos
  totalmente disjuntos, como planejado.
- O `content-editor` foi disciplinado com a regra de ouro sob adversidade: com os domínios `*.ufsc.br`
  retornando 403 a fetch direto, usou busca indexada como fallback, detectou números contraditórios
  (duração de Contábeis/Econômicas) e deixou `_A preencher_` em vez de chutar.

**Lições aprendidas:**
- Fetch direto a `*.ufsc.br` está bloqueado neste ambiente (403). Para conteúdo que dependa desses
  sites, reaproveitar dados já verificados em arquivos existentes (`docs/centros/*.md`) é mais
  confiável que re-pesquisar; sinalizar com "Nota" quando um campo vier de busca indexada.
- Playwright neste ambiente exige `executablePath` apontando para o Chromium pré-instalado — não
  tentar `playwright install` (bloqueado por política). Vale considerar deixar isso documentado para
  o `tester` (ex.: em CLAUDE.md ou no próprio `playwright.config.ts` via env guard).

**Para o próximo sprint (Sprint 17, candidatos):**
- **B-60** — CCJ + CFH + CFM (conteúdo de centro; infra pronta).
- **B-61** — fichas de curso do CCE e CCS (centros já publicados).
- **Dívida técnica** — token `--primary-button` dedicado para dark mode (finding do ui-ux-review).

---

## Sprint 15 — Navegação por Centro: reestruturação arquitetural (v1.9) — concluído em 2026-07-30

**Objetivo:** Transformar o portal de "portal do CTC com centros extras" para "portal da UFSC
organizado por centro" (`Home → /centros → /centros/ctc → cursos`), removendo "CTC" do header.

**Entregue:** B-64 (`docs/centros/ctc.md` — CTC entra em `listCenters()`); B-67 (header/hero/nav
sem "CTC"); B-65 (página `/centros` com grid de centros + sitemap); B-66 (`/centros/[slug]` lista
os cursos do centro, filtrando por `centro`); B-68 (`/cursos` → `permanentRedirect("/centros")`);
B-69 (redirects 301 de `/secoes/coordenacoes` e `/secoes/atleticas` → `/centros/ctc`);
B-70 (home sem cards Coordenações/Atléticas via `HIDDEN_SECTIONS`, novo card "Centros e cursos").
Findings ui-ux-review corrigidos (filtro `HIDDEN_SECTIONS`, aria-labels). lint ✅ · build 50
páginas SSG ✅ · Playwright 8/8 ✅.

<details>
<summary>Detalhamento completo do Sprint 15 (histórias, critérios, retrospectiva)</summary>

### Sprint 15 — versão detalhada

**Objetivo:** Transformar o portal de "portal do CTC com centros extras" para "portal da UFSC
organizado por centro". O calouro navega: Home → /centros → /centros/ctc → cursos do CTC.
O header para de dizer "CTC". O CTC entra na infraestrutura multi-centro como os demais.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Criar `docs/centros/ctc.md` com conteúdo do CTC | B-64 | Must / M | Feito |
| Remover "CTC" do header e badge hero | B-67 | Must / P | Feito |
| Página `/centros` — índice de todos os centros | B-65 | Must / M | Feito |
| Cursos do centro em `/centros/[slug]` | B-66 | Must / M | Feito |
| Redirect `/cursos` → `/centros` | B-68 | Should / P | Feito |
| Redirects `/secoes/coordenacoes` e `/secoes/atleticas` → `/centros/ctc` | B-69 | Should / P | Feito |
| Remover "Coordenações" e "Atléticas" do grid da home | B-70 | Should / P | Feito |

### Critérios de aceite detalhados

**B-64 — `docs/centros/ctc.md`**
- [ ] Arquivo criado com frontmatter `slug: ctc`, `titulo`, `descricao`, `ultima_verificacao`.
- [ ] Seção **Coordenações** consolidada de `docs/coordenacoes.md` (ou link para ela).
- [ ] Seção **Atléticas e festas** consolidada de `docs/atleticas-e-festas.md` (ou link).
- [ ] Seção **Cursos** listando os 13 cursos do CTC com links para `/cursos/<slug>`.
- [ ] `listCenters()` retorna o CTC (slug `ctc`) junto com CCA, CSE, CCE, CCS.

**B-67 — Header e hero sem "CTC"**
- [ ] `components/Header.tsx:20` — subtítulo `"UFSC — CTC"` → `"UFSC"`.
- [ ] `app/page.tsx:59` — badge `"CTC · Campus Trindade · Florianópolis"` → `"UFSC · Florianópolis"`.
- [ ] `components/NavLinks.tsx:19` — link `/cursos` → `/centros` com label "Centros".
- [ ] `app/cursos/page.tsx` metadata title/description — remover referências a "CTC".

**B-65 — Página `/centros`**
- [ ] `app/centros/page.tsx` criado com SSG.
- [ ] Lista todos os centros retornados por `listCenters()` em grid mobile-first.
- [ ] Cada card mostra nome, descrição e link para `/centros/[slug]`.
- [ ] `generateMetadata` com título "Centros da UFSC — Portal dos Calouros".
- [ ] Entra no sitemap (`app/sitemap.ts`).

**B-66 — Cursos do centro em `/centros/[slug]`**
- [ ] `app/centros/[slug]/page.tsx` atualizado: após o HTML do centro, exibe seção "Cursos deste centro".
- [ ] Filtra `listCourses()` pelo campo `centro === slug.toUpperCase()` (ex: slug `ctc` → `centro: "CTC"`).
- [ ] Se não houver cursos, a seção não aparece (sem estado vazio forçado).
- [ ] Cards de curso usam o mesmo componente `CourseCard` de `/cursos` (ou inline equivalente).

**B-68 — Redirect `/cursos`**
- [ ] `app/cursos/page.tsx` substituída por redirect permanente para `/centros`
      via `permanentRedirect("/centros")` do Next.js, ou
- [ ] Alternativa: banner "Os cursos agora estão organizados por centro →" com link para `/centros`.

**B-69 — Redirects de legado**
- [ ] Acesso a `/secoes/coordenacoes` redireciona para `/centros/ctc`.
- [ ] Acesso a `/secoes/atleticas` redireciona para `/centros/ctc`.
- [ ] Implementação via `next.config.ts` redirects (array `redirects`) ou lógica na página de seção.
- [ ] As demais seções (`/secoes/ru`, `/secoes/links`, etc.) continuam funcionando normalmente.

**B-70 — Home sem Coordenações/Atléticas**
- [ ] `SECTION_ICONS`, `SECTION_COLORS` e `SECTION_DEDICATED_ROUTES` em `app/page.tsx` sem
      entradas `coordenacoes` e `atleticas`.
- [ ] O SLUG_MAP em `lib/content.ts` mantém `coordenacoes` e `atleticas` (API continua funcionando
      e os redirects de B-69 dependem disso); apenas a home para de exibi-los.
- [ ] Home exibe novo card "Centros e cursos" linkando para `/centros` com ícone `Building2`.
- [ ] Grid da home fica com 9 cards (eram 10: -2 CTC-específicos +1 novo Centros).

### Ordem de execução e dependências

```
Wave 1 (paralelo):
  B-64  content-editor — cria docs/centros/ctc.md
  B-67  frontend-dev   — remove "CTC" do header, badge e nav

Wave 2 (após B-64):
  B-65 + B-66 + B-68 + B-69 + B-70  frontend-dev — todas as mudanças de UI/routing
```

### Definição de Pronto (sprint inteiro)

- [ ] `/centros` lista todos os 5 centros (CTC, CCA, CSE, CCE, CCS).
- [ ] `/centros/ctc` exibe conteúdo do CTC + lista dos 13 cursos.
- [ ] `/centros/cca` exibe conteúdo do CCA + lista dos 4 cursos.
- [ ] Header diz "UFSC" (sem "CTC").
- [ ] `/cursos` redireciona para `/centros`.
- [ ] `/secoes/coordenacoes` redireciona para `/centros/ctc`.
- [ ] Home não exibe mais cards "Coordenações" e "Atléticas"; exibe card "Centros".
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG com `/centros` + 5 rotas `/centros/[slug]`).
- [ ] Playwright 8/8 sem regressões (ajustar testes se necessário).
- [ ] `docs/product-backlog.md` com B-64–B-70 marcados como Feito.

### O que NÃO entra e por que

| Item | Motivo |
|------|--------|
| B-71 (link âncora "Ver cursos") | Could — melhoria de UX; entra no próximo sprint |
| B-72 (atualizar CLAUDE.md/arquitetura.md) | Could — documentação técnica; entra no próximo sprint |
| B-60 (mais centros) | Conteúdo — não misturar com refatoração arquitetural |
| B-61 (fichas CSE) | Idem |

### Retrospectiva do Sprint 15

**Concluído em:** 2026-07-30

**Entregue:**
- **B-64** — `docs/centros/ctc.md` com tabela de referência rápida das 13 coordenações,
  atléticas com Instagram, lista dos 13 cursos com links — CTC agora em `listCenters()`.
- **B-67** — `components/Header.tsx`: subtítulo `"UFSC — CTC"` → `"UFSC"`.
  `app/page.tsx`: badge hero `"CTC · Campus Trindade · Florianópolis"` → `"UFSC · Florianópolis"`.
  `components/NavLinks.tsx`: link `/cursos` "Cursos" → `/centros` "Centros".
  `app/cursos/page.tsx`: metadata e H1 sem referências a "CTC".
- **B-65** — `app/centros/page.tsx` criado: hero + grid de centros via `listCenters()`;
  `/centros` adicionado ao sitemap (prioridade 0.9).
- **B-66** — `app/centros/[slug]/page.tsx` atualizado: seção "Cursos deste centro" filtrando
  `listCourses()` por `centro === slug` — CTC mostra 13 cursos, CCA mostra 4, etc.
  Back-link atualizado para "Todos os centros" (`/centros`).
- **B-68** — `app/cursos/page.tsx` substituída por `permanentRedirect("/centros")`.
- **B-69** — `next.config.ts` com redirects 301: `/secoes/coordenacoes` e `/secoes/atleticas`
  → `/centros/ctc`.
- **B-70** — `app/page.tsx`: `coordenacoes` e `atleticas` filtradas do grid via `HIDDEN_SECTIONS`;
  nova seção "Centros e cursos" com card linking `/centros`.

**Findings ui-ux-review corrigidos antes do merge:**
- Major: `listSections()` retornava `coordenacoes` e `atleticas` mesmo após remoção dos ícones —
  cards apareciam com ícone fallback `BookOpen`. Fix: `HIDDEN_SECTIONS` filter em `app/page.tsx`.
- Minor ×2: `aria-hidden` faltando no ícone do hero de `/centros`; `aria-labelledby` faltando
  na seção "Cursos deste centro".

**Verificações finais:** lint ✅ · build 50 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- A separação wave 1 (conteúdo + texto) → wave 2 (UI/routing) funcionou perfeitamente;
  zero conflitos entre agentes.
- O princípio "basta criar o .md" se confirmou: CTC entrou na infra de centros sem modificar
  `lib/content.ts` — só um arquivo de conteúdo novo.
- Redirect `/cursos` → `/centros` via `permanentRedirect` foi a solução mais limpa;
  mantém backward-compat sem código morto.

**Lições aprendidas:**
- Remover entradas de um mapa de configuração (SECTION_ICONS) não basta se a fonte de dados
  (`listSections()`) ainda retorna os itens. Sempre verificar se o dado é filtrado na origem
  ou no render — neste caso o filtro precisou ser explícito no componente.

**Para o próximo sprint (candidatos):**
- **B-71** — link âncora "Ver cursos" no topo das páginas de centro (Could, P).
- **B-72** — atualizar CLAUDE.md e arquitetura.md para refletir a nova identidade (Could, M).
- **B-60** — mais centros: CCJ, CFH, CFM (só conteúdo, infra pronta).
- **B-61** — fichas dos cursos do CSE (5 cursos, centro já publicado).

</details>

---

## Sprint 14 — Mais Centros: CCE + CCS + Fichas dos Cursos do CCA (v1.8)

**Objetivo:** Ampliar a cobertura do portal com dois centros de alto impacto (CCE e CCS)
criando somente arquivos de conteúdo — zero código novo — e publicar as fichas dos 4 cursos
de graduação do CCA seguindo o modelo já estabelecido. Valida definitivamente o princípio
"basta criar o .md" da arquitetura multi-centro.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Mais centros B-60: CCE + CCS (Comunicação e Saúde) | B-60 (parcial) | Should / M | Feito |
| Fichas dos cursos do CCA (B-61 parcial: 4 cursos) | B-61 (parcial) | Should / M | Feito |

### Critérios de aceite detalhados

**B-60 — CCE + CCS**

- [ ] `docs/centros/cce.md` com frontmatter YAML (`slug: cce`, `titulo`, `descricao`,
      `ultima_verificacao`) e seções: Coordenações, CAs, Atléticas, Links Úteis.
- [ ] `docs/centros/ccs.md` com mesma estrutura.
- [ ] Dados verificados em `cce.ufsc.br` e `ccs.ufsc.br`; campos sem confirmação ficam
      como `_A preencher_`.
- [ ] `npm run build` inclui SSG das páginas `/centros/cce` e `/centros/ccs`.
- [ ] `npm run lint` passa sem erros.
- [ ] Playwright 8/8 sem regressão.

**B-61 (parcial) — Fichas dos cursos do CCA (4 cursos)**

- [ ] `docs/cursos/agronomia.md` com `centro: CCA` no frontmatter; coordenação com
      e-mail e telefone verificados em fonte oficial.
- [ ] `docs/cursos/ciencia-e-tecnologia-de-alimentos.md` — idem.
- [ ] `docs/cursos/engenharia-de-aquicultura.md` — idem.
- [ ] `docs/cursos/zootecnia.md` — idem.
- [ ] Cada ficha segue o template `_modelo-curso.md` (frontmatter YAML + seções:
      Sobre o curso / Coordenação / Vida do curso / Dicas de veterano / Onde estudar).
- [ ] `npm run build` inclui SSG das 4 novas páginas de curso.
- [ ] `npm run lint` passa sem erros.
- [ ] Playwright 8/8 sem regressão.

### Ordem de execução e dependências

1. **CCE** (content-editor pesquisa cce.ufsc.br) — pode rodar em paralelo com CCS e fichas CCA.
2. **CCS** (content-editor pesquisa ccs.ufsc.br) — pode rodar em paralelo com CCE e fichas CCA.
3. **Fichas CCA** (content-editor pesquisa cca.ufsc.br/cursos) — pode rodar em paralelo com CCE e CCS.
4. **Tester** roda lint + build + Playwright sobre todos os arquivos criados.

> Todo o Sprint 14 é puramente de conteúdo — nenhuma linha de TypeScript/React precisa ser
> tocada. A infraestrutura multi-centro já suporta tudo.

### Notas técnicas para os agentes

**Frontmatter obrigatório para centros (`docs/centros/<slug>.md`):**

```yaml
---
slug: cce
titulo: "Centro de Comunicação e Expressão (CCE)"
descricao: "..."
ultima_verificacao: "julho/2026"
---
```

**Frontmatter obrigatório para cursos do CCA (`docs/cursos/<slug>.md`):**

```yaml
---
slug: agronomia
curso: Agronomia
centro: CCA
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

**Slugs dos cursos do CCA:**

| Curso | Slug do arquivo |
|-------|----------------|
| Agronomia | `agronomia` |
| Ciência e Tecnologia de Alimentos | `ciencia-e-tecnologia-de-alimentos` |
| Engenharia de Aquicultura | `engenharia-de-aquicultura` |
| Zootecnia | `zootecnia` |

**Fontes oficiais a consultar:**

| Centro / Curso | URL |
|----------------|-----|
| CCE | https://cce.ufsc.br/ |
| CCS | https://ccs.ufsc.br/ |
| Agronomia (CCA) | https://cca.ufsc.br/agronomia/ |
| CTA (CCA) | https://cca.ufsc.br/ciencia-tecnologia-alimentos/ |
| Eng. Aquicultura (CCA) | https://cca.ufsc.br/aquicultura/ |
| Zootecnia (CCA) | https://cca.ufsc.br/zootecnia/ |

### Definição de Pronto (sprint inteiro)

- [ ] `docs/centros/cce.md` e `docs/centros/ccs.md` criados com dados verificados ou `_A preencher_`.
- [ ] 4 fichas de curso do CCA criadas (`agronomia.md`, `ciencia-e-tecnologia-de-alimentos.md`,
      `engenharia-de-aquicultura.md`, `zootecnia.md`).
- [ ] Páginas `/centros/cce`, `/centros/ccs`, `/cursos/agronomia`, `/cursos/ciencia-e-tecnologia-de-alimentos`,
      `/cursos/engenharia-de-aquicultura`, `/cursos/zootecnia` acessíveis.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG com 6 novas páginas — total ~48).
- [ ] Playwright 8/8 sem regressões.
- [ ] `docs/product-backlog.md` atualizado (B-60 continua 🚧; B-61 passa para 🚧 Em andamento).
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NÃO entra e por que

| Item | Motivo |
|------|--------|
| Demais centros B-60 (CCJ, CFH, CFM, CCB, CED, CDS, Joinville, Araranguá) | Escopo futuro — validar padrão de conteúdo com CCE e CCS antes de escalar |
| B-61 (fichas dos cursos do CSE) | Sprint separado — CSE tem 5 cursos e escopo próprio |
| B-13 (histórias de veteranos) | Bloqueado: sem submissões reais via `historia-veterano.yml` |
| B-37 / B-50 / E13 | Horizonte v2.0 — banco + auth + moderação como bloco integrado |

### Retrospectiva do Sprint 14

**Concluído em:** 2026-07-30

**Entregue:**
- **B-60 (CCE)** — `docs/centros/cce.md` com 9 cursos presenciais (Animação, Artes Cênicas,
  Cinema, Design, Design de Produto, Jornalismo, Letras Estrangeiras, Letras Português,
  Secretariado Executivo) + cursos EaD; diretoria Romanelli/Acosta Pereira (2025–2029);
  CAs: CADe, CALJ, CALL, CACine, CAAC; atléticas AAGB Graus Bons e Atlética de Letras;
  eventos SACine e Semana de Letras verificados.
- **B-60 (CCS)** — `docs/centros/ccs.md` com 6 cursos (Enfermagem, Farmácia, Fonoaudiologia,
  Medicina, Nutrição, Odontologia); diretoria Neves/Moretti Pires; CAs: CALEnf, CAF,
  CALIFONO, CALIMED, CAOQA; atléticas AAA-MED, ALFA, Atlética de Letras; eventos
  SAMED, JAF, EAAO verificados; endereço Rua Delfino Conti confirmado.
- **B-61 (fichas CCA — 4 cursos)** — `docs/cursos/agronomia.md`, `ciencia-e-tecnologia-de-alimentos.md`,
  `engenharia-de-aquicultura.md`, `zootecnia.md`; coordenadores e telefones verificados;
  CAs (CAAGRO, CAEAQUI, CAZoot) e atléticas (ATAG, ATZOOT) com links confirmados;
  nota de localização Itacorubi em todas as fichas.

**Findings ui-ux-review corrigidos antes do merge:**
- Major ×3: campos `turno`, `email`, `sala`, `atendimento` com texto verboso `_A preencher_ — verificar em <URL>` no frontmatter renderizavam como texto solto no header card e como link `mailto:` quebrado → substituídos por `~` (null YAML) para supressão limpa pelo template
- Minor: meta description hardcoded `"dicas para o CTC da UFSC"` em `app/cursos/[slug]/page.tsx:21` → corrigido para `"dicas para calouros da UFSC"` (independente de centro)

**Verificações finais:** lint ✅ · build 48 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Sprint 100% de conteúdo confirmado: 6 novos arquivos `.md`, zero linhas de TypeScript/React
  adicionadas. A arquitetura multi-centro do Sprint 13 absorveu CCE e CCS sem nenhum atrito.
- Os 3 blocos (CCE, CCS, fichas CCA) rodaram em paralelo e todos concluíram sem conflitos.
- Content-editors foram disciplinados com `_A preencher_` — dados sem fonte oficial foram
  corretamente sinalizados em vez de inventados.

**Lições aprendidas:**
- Campos de frontmatter que ficam em branco devem usar `~` (null YAML), nunca texto verboso.
  Texto explicativo de "por que está em branco" pertence ao corpo do markdown, não ao frontmatter.
  Isso previne renderização incorreta no template (link mailto quebrado, texto de URL no header).
- Meta description de cursos hardcoded para CTC — corrigida agora, mas indica que o template
  de curso foi concebido apenas para CTC. A expansão para outros centros exigiu essa correção.

**Para o próximo sprint (candidatos):**
- **B-60 (CCJ + CFH + CFM)** — próximos centros; infraestrutura pronta, só conteúdo.
- **B-61 (fichas CSE)** — 5 cursos do CSE já têm centro publicado; modelo pronto.
- **B-08** — dicas de veterano nas fichas do CTC, quando houver submissões reais.

---

## Sprint 13 — Infraestrutura Multi-Centro + CCA e CSE (B-60 micro-sprint, v1.7)

**Objetivo:** Estabelecer a infraestrutura de conteúdo multi-centro (nova rota `/centros/[slug]`,
funções `getCenter`/`listCenters` em `lib/content.ts`, modelo `docs/centros/<slug>.md`) e
publicar CCA (Itacorubi) e CSE (Campus Trindade) como os dois primeiros centros além do CTC —
integrando com o mapa já existente.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Infraestrutura multi-centro + conteúdo do CCA e CSE (piloto B-60) | B-60 (parcial) | Should / M | A fazer |

### Critérios de aceite detalhados

**B-60 (parcial) — Infraestrutura + CCA + CSE**

- [ ] `docs/centros/cca.md` criado com frontmatter YAML (`slug: cca`, `titulo`, `descricao`,
      `ultima_verificacao`) e seções: Coordenações, Centros Acadêmicos (CA), Atléticas,
      Links Úteis. Campos sem fonte oficial ficam como `_A preencher_`.
- [ ] `docs/centros/cse.md` criado com a mesma estrutura do CCA. Campos não confirmados
      ficam como `_A preencher_`.
- [ ] `lib/content.ts` atualizado: funções `listCenters()` e `getCenter(slug)` leem
      `docs/centros/*.md` (excluindo arquivos `_modelo*`), seguindo o mesmo padrão de
      `listCourses()`/`getCourse()`.
- [ ] Rota `app/api/centros/[slug]/route.ts` retorna o conteúdo do centro como JSON
      (consistência com `/api/sections/[slug]`).
- [ ] Rota `app/api/centros/route.ts` lista todos os centros disponíveis.
- [ ] Página `app/centros/[slug]/page.tsx` renderiza o conteúdo com SSG
      (`generateStaticParams` baseado em `listCenters()`), com `generateMetadata` com
      título e descrição únicos por centro.
- [ ] Popup do marcador CCA no mapa (`components/MapView.tsx`) inclui link para
      `/centros/cca`.
- [ ] Popup do marcador CSE no mapa inclui link para `/centros/cse`.
- [ ] `app/sitemap.ts` atualizado para incluir rotas `/centros/[slug]` dinamicamente.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG — páginas `/centros/cca` e `/centros/cse` incluídas).
- [ ] Testes E2E do Playwright passam sem regressões.

### Ordem de execução e dependências

1. **Loader** (`lib/content.ts`) — adicionar `listCenters()`/`getCenter()` e a interface
   `Center`. Pré-requisito de todas as etapas seguintes.
2. **Conteúdo** (`docs/centros/cca.md` e `docs/centros/cse.md`) — pesquisar dados
   reais a partir de fontes oficiais (`cca.ufsc.br`, `cse.ufsc.br`). Pode rodar em
   paralelo com a etapa 1.
3. **API e Frontend** (`app/api/centros/` e `app/centros/`) — criar rotas e página
   de renderização. Depende do loader (etapa 1).
4. **Integração Mapa** (`components/MapView.tsx`) — adicionar links nos popups de CCA
   e CSE. Depende das páginas existirem (etapa 3).
5. **Sitemap** (`app/sitemap.ts`) — adicionar entradas `/centros/*`. Depende do loader.

### Notas técnicas para os agentes

**Estrutura do frontmatter de `docs/centros/<slug>.md`:**

```yaml
---
slug: cca
titulo: "Centro de Ciências Agrárias (CCA)"
descricao: "Centro localizado em Itacorubi (fora do Campus Trindade), com cursos de Agronomia, Zootecnia, Medicina Veterinária e afins."
ultima_verificacao: "julho/2026"
---
```

**Interface a adicionar em `lib/content.ts`:**

```typescript
export interface CenterSummary {
  slug: string;
  title: string;
  description: string;
}

export interface Center extends CenterSummary {
  metadata: Record<string, unknown>;
  content_md: string;
  content_html: string;
}
```

**Funções a adicionar em `lib/content.ts`:**

```typescript
function iterCenterFiles(): string[] {
  const centersDir = path.join(DOCS_DIR, "centros");
  if (!fs.existsSync(centersDir)) return [];
  return fs.readdirSync(centersDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => path.join(centersDir, f));
}

export function listCenters(): CenterSummary[] { ... }
export function getCenter(slug: string): Center | null { ... }
```

**Slugs de centro para o mapa (`components/MapView.tsx`):**

| Centro | Slug para link |
|--------|---------------|
| CCA | `cca` |
| CSE | `cse` |

### Definição de Pronto (sprint inteiro)

- [ ] `docs/centros/cca.md` e `docs/centros/cse.md` criados com dados verificados ou `_A preencher_`.
- [ ] Páginas `/centros/cca` e `/centros/cse` acessíveis no servidor local.
- [ ] Popups CCA e CSE no mapa têm link para as respectivas páginas.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG completo, novas páginas incluídas).
- [ ] Testes E2E Playwright passam sem regressões.
- [ ] `docs/product-backlog.md` atualizado (B-60 marcado como 🚧 Em andamento).
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NÃO entra e por que

| Item | Motivo da exclusão |
|------|--------------------|
| Demais centros (CCE, CCS, CCJ, CFH, CFM, CCB, CED, CDS) | Escopo futuro — validar arquitetura com 2 centros antes de escalar |
| B-61 (fichas de cursos do CCA e CSE) | Sprint separado; cursos do CCA (~7) e CSE (~5) são escopo próprio após validar a infra |
| B-50 + B-37 + E13 | Horizonte v2.0; banco + auth + moderação como bloco integrado |
| B-13 (histórias de veteranos) | Bloqueado: sem submissões reais confirmadas via `historia-veterano.yml` |

### Retrospectiva do Sprint 13

**Concluído em:** 2026-07-29

**Entregue:**
- **Infraestrutura multi-centro** — `lib/content.ts` ganhou `CenterSummary`, `Center`, `iterCenterFiles()`,
  `listCenters()` e `getCenter()`, seguindo o padrão exato de cursos. `app/api/centros/route.ts` e
  `app/api/centros/[slug]/route.ts` criadas. `app/sitemap.ts` atualizado para incluir `/centros/*`
  dinamicamente. Arquitetura pronta para receber mais centros sem tocar no código — basta criar
  `docs/centros/<slug>.md`.
- **B-60 (CCA)** — `docs/centros/cca.md` com 4 cursos verificados (Agronomia, CTA, Eng. Aquicultura,
  Zootecnia), coordenações com telefones e e-mails, CAs (CAAGRO, CACTA, CALEA, CAZoot), atléticas
  (ATAG, ATZoot), eventos (SEAGRO, SEMAZOOT, SACTA), RU próprio em Itacorubi, guia de transporte
  (linha 165). Nota: lista de cursos corrigida para 4 (backlog mencionava 7 — Medicina Veterinária
  e Recursos Naturais não têm graduação ativa no CCA; confirmado via cca.ufsc.br).
- **B-60 (CSE)** — `docs/centros/cse.md` com 5 cursos, todas coordenações com e-mails e telefones
  verificados, CAs (CAAD, CACIC, CALE, CARI, CALISS), atléticas (Atlética ADM, ATACC, ATECO),
  festas (Apocalipse, Internação, SAAD). Dados da direção (Profª. Casagrande) verificados em
  cse.ufsc.br/equipe/.
- **Integração mapa** — campo `link?: string` adicionado à interface `MapMarker`; popups de CCA e
  CSE incluem link "Ver página do centro →" para `/centros/cca` e `/centros/cse`.

**Findings ui-ux-review corrigidos antes do merge:**
- Major: tap target do link no popup (`display:inline-block`) abaixo de 44px → `display:block;padding:10px 0`
- Minor: legenda com `text-gray-900` → token `text-ink-primary` (linhas 330 e 333)

**Verificações finais:** lint ✅ · build 42 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Arquitetura "basta criar o .md" validada: adicionar CSE após CCA foi só conteúdo, zero código extra.
- Content-editors pesquisaram fontes oficiais com disciplina — muitos campos `_A preencher_` honestos
  em vez de dados inventados.
- Coordenações do CCA e CSE com telefones e WhatsApp verificados — alta utilidade imediata para calouros.

**Lições aprendidas:**
- CCA tem 4 cursos de graduação, não 7 como o backlog indicava — o B-61 precisará ser revisado
  para refletir a lista real antes do próximo sprint de fichas.
- Popup Leaflet com `inline-block` não satisfaz tap target — usar `display:block` com padding
  vertical é o padrão correto em HTML injetado no Leaflet.

**Para o próximo sprint (candidatos):**
- **B-60 (demais centros)** — CCE, CCS, CCJ, CFH, CFM, CCB, CED, CDS em micro-sprints de 2–3
  centros por vez (infraestrutura já pronta — é só conteúdo).
- **B-61 (fichas de cursos do CCA)** — 4 cursos confirmados; modelo `docs/cursos/<slug>.md` já existe.
- **B-13 (histórias de veteranos)** — desbloqueado assim que houver submissões reais via
  `historia-veterano.yml`.

---

## Sprint 12 — Mapa Completo: Todos os Centros da UFSC + Filtro por Categoria (v1.6)

**Objetivo:** Expandir o mapa interativo do campus para cobrir todos os centros da UFSC
Florianópolis — incluindo o CCA em Itacorubi, geograficamente separado do Campus Trindade —
e adicionar um sistema de filtro por categoria para que o calouro encontre rapidamente
o que precisa quando o mapa tem muitos marcadores.

| Historia | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Mapa com pontos de todos os centros da UFSC (incl. CCA Itacorubi) | B-62 | Should / M | Feito |
| Filtro por categoria no mapa (chips: Centros, Alimentação, Saúde…) | B-63 | Should / M | Feito |

### Criterios de aceite detalhados

**B-62 — Mapa com todos os centros da UFSC**

- [ ] Marcadores adicionados para os centros do Campus Trindade: CCE, CCS, CCJ, CFH,
      CFM, CCB, CSE, CED, CDS — com coordenadas fornecidas pelo mantenedor em 2026-07-28.
- [ ] Marcador do CCA em Itacorubi (coords: -27.5697, -48.4863) com popup destacando
      "⚠️ Localizado em Itacorubi — ~4 km do Campus Trindade · Rua Admar Gonzaga, 1346".
- [ ] Label da categoria "teaching" atualizado de "Ensino / CTC" para "Centros Academicos"
      em `CATEGORY_LABELS` em `components/MapView.tsx`.
- [ ] Mapa usa `map.fitBounds()` para ajustar o zoom e mostrar tanto o Campus Trindade
      quanto o CCA em Itacorubi simultaneamente ao carregar.
- [ ] `aria-label` do container do mapa atualizado: "Mapa interativo dos campi da UFSC
      Florianopolis com marcadores de pontos de interesse".
- [ ] `npm run lint` e `npm run build` passam.

**B-63 — Filtro por categoria no mapa**

- [ ] Chips/botoes de filtro renderizados acima do mapa, dentro de `MapView.tsx`,
      com as categorias: Todos, Centros Academicos, Alimentacao, Saude, Transporte,
      Estudo / Biblioteca, Administracao.
- [ ] "Todos" ativo por padrao; clicar numa categoria filtra os marcadores; clicar
      de novo (ou "Todos") desfaz o filtro.
- [ ] Marcadores mostrados/ocultos em tempo real com `addTo(map)` / `removeFrom(map)`
      do Leaflet — sem re-montar o mapa.
- [ ] Refs dos marcadores Leaflet guardados em `markerLayersRef` para manipulacao
      imperativa eficiente.
- [ ] Chips acessiveis por teclado (`<button>` nativo), com `aria-pressed` indicando
      estado ativo.
- [ ] Layout dos chips: scroll horizontal em mobile (overflow-x: auto), wrap em desktop.
- [ ] `npm run lint` e `npm run build` passam.

### Ordem de execucao e dependencias

1. **B-62 primeiro** — adiciona marcadores e ajusta labels de categoria.
   Pré-requisito de B-63: o filtro precisa dos marcadores reais para fazer sentido.
2. **B-63 segundo** — implementa estado de filtro e UI sobre os marcadores expandidos.
   Sem dependencias externas alem de B-62.

### Notas tecnicas para os agentes

**B-62 — Coordenadas dos centros (verificar antes de usar):**

| Centro | Coordenadas verificadas (lat, lng) | Referencia |
|--------|-----------------------------------|------------|
| CCE | -27.6009829301275, -48.52141492932045 | Campus Trindade |
| CCS | -27.59919258520732, -48.51762121161074 | Campus Trindade |
| CCJ | -27.598497640726105, -48.522066575101306 | Campus Trindade |
| CFH | -27.60213042929666, -48.52322292193917 | Campus Trindade |
| CFM | -27.601411120065425, -48.52380552762934 | Campus Trindade |
| CCB | -27.59832906280479, -48.51465289648096 | Campus Trindade |
| CSE | -27.599022119647845, -48.52152701695787 | Campus Trindade |
| CED | -27.60214617175289, -48.523073290850284 | Campus Trindade |
| CDS | -27.6038314630442, -48.51962283349618 | Campus Trindade (Centro de Desportos e Saude) |
| CCA | -27.582124154997455, -48.5043389382004 | Itacorubi — fora do Campus Trindade |

> Coordenadas fornecidas pelo mantenedor do projeto em 2026-07-28. Usar exatamente esses valores.

**B-63 — Arquitetura do filtro:**

```tsx
// Estado: null = "Todos", string = categoria ativa
const [activeCategory, setActiveCategory] = useState<MapMarker["category"] | null>(null);

// Ref para pares {marker: L.Marker, category}
const markerLayersRef = useRef<{ lMarker: L.Marker; category: MapMarker["category"] }[]>([]);

// useEffect que reage ao filtro (separado do useEffect de init do mapa)
useEffect(() => {
  if (!mapRef.current) return;
  markerLayersRef.current.forEach(({ lMarker, category }) => {
    if (activeCategory === null || category === activeCategory) {
      lMarker.addTo(mapRef.current!);
    } else {
      lMarker.removeFrom(mapRef.current!);
    }
  });
}, [activeCategory]);
```

### Definicao de Pronto (sprint inteiro)

- [ ] Todos os marcadores de centros com coordenadas verificadas presentes no mapa.
- [ ] CCA aparece no mapa com localizacao em Itacorubi e popup de aviso.
- [ ] Filtro por categoria funciona e e acessivel por teclado.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG completo).
- [ ] Testes E2E do Playwright passam (`npx playwright test`).
- [ ] `docs/product-backlog.md` com B-62 e B-63 marcados como Feito.
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NAO entra e por que

| Item | Motivo da exclusao |
|------|--------------------|
| B-60 (conteudo de todos os centros) | G — requer levantamento de dados de 11+ centros; muito conteudo para um sprint |
| B-61 (fichas de todos os cursos) | G — dezenas de cursos; mesmo motivo de B-60 |
| B-50 + B-37 + E13 | Horizonte v2.0; banco + auth + moderacao como bloco integrado |
| B-13 (historias de veteranos) | Bloqueado: sem submissoes reais confirmadas |

### Retrospectiva do Sprint 12

**Concluído em:** 2026-07-28

**Entregue:**
- **B-62** — 10 novos marcadores em `components/MapView.tsx`: CCE, CCS, CCJ, CFH, CFM,
  CCB, CSE, CED, CDS no Campus Trindade + CCA em Itacorubi (-27.582124, -48.504339)
  com aviso de localização no popup. Label renomeado de "Ensino / CTC" para "Centros
  Acadêmicos". `fitBounds` ajusta automaticamente o viewport para cobrir os dois campi.
  Coordenadas fornecidas e verificadas pelo mantenedor em 2026-07-28.
- **B-63** — Barra de chips de filtro por categoria acima do mapa (`<button aria-pressed>`).
  Estado `activeCategory` (`null` = "Todos"); segundo `useEffect` faz `addTo`/`removeFrom`
  nos refs Leaflet sem re-montar o mapa. `DARK_BG_CATEGORIES` garante contraste WCAG AA
  correto em cada cor de categoria ativa.

**Findings ui-ux-review corrigidos antes do merge:**
- Blocker: tap target `py-1` → `py-2 min-h-[36px]` nos chips
- Major: legenda reestruturada em sub-wrapper `relative` do mapa, eliminando sobreposição com chips
- Major: chips ativos food/admin/teaching `text-white` → `text-gray-900`; "Todos" `bg-brand-blue` → `bg-[#1565C0]`
- Minor: chips inativos `text-ink-secondary` → `text-ink-primary`
- Minor: legenda `text-gray-900` → `text-ink-primary`

**Verificações finais:** lint ✅ · build 39 páginas SSG ✅ · Playwright 8/8 ✅

**O que foi bem:**
- Coordenadas do mantenedor eliminaram risco de marcador no lugar errado.
- `fitBounds` cobriu Campus Trindade + CCA Itacorubi automaticamente.
- Infraestrutura de categorias já existia — B-63 foi puramente aditivo, zero refactor.
- ui-ux-review detectou sobreposição legenda/chips antes do merge — ritual vale a pena.

**Para o próximo sprint:** B-60 em micro-sprints por centro (começar pelo CCA e CSE),
ou B-37 + E13 (histórias + auth) se houver submissões reais acumuladas.

---

## Sprint 11 — Vida do Curso Completa — concluido em 2026-07-20

**Objetivo (micro-sprint):** Preencher os 2 Centros Academicos que faltavam nas fichas
de curso do CTC para atingir 100% de cobertura.

**Entregue:** CAECA (Eng. de Controle e Automacao, caeca.ufsc.br) e CALESA (Eng.
Sanitaria e Ambiental, calesa.ufsc.br / @calesaufsc) adicionados as fichas de curso.
Com isso, 100% das 13 fichas do CTC tem Centro Academico preenchido com fonte oficial.
B-08 segue Em andamento (faltam dicas de veterano e "onde estudar").

---

## Sprint 10 — Instalável, Medido e Com Teto de Qualidade (v1.5)

**Objetivo:** Fechar a v1 com três melhorias de plataforma sem risco de conteúdo: tornar
o portal instalável no celular como PWA, medir o uso real com analytics sem rastreio
pessoal, e enforcar um teto automatizado de qualidade (Lighthouse CI) que proteja
Performance, Acessibilidade e SEO a cada PR daqui em diante.

| Historia | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Lighthouse CI — thresholds Perf/A11y/SEO >= 90 no CI | B-55 | Could / P | Feito |
| PWA instalavel — manifest.json, icones 192/512, theme-color | B-48 | Could / P | Feito |
| Analytics de privacidade — Vercel Analytics sem cookies | B-51 | Could / P | Feito |

### Criterios de aceite detalhados

**B-55 — Lighthouse CI**

- [x] `lighthouserc.json` na raiz com assertions: `categories:performance >= 0.9`,
      `categories:accessibility >= 0.9`, `categories:seo >= 0.9`.
- [x] Workflow `.github/workflows/lighthouse.yml` roda em PRs para `main`
      usando `lhci autorun` contra o build de producao (`npm run build && lhci autorun`).
- [x] Falha em qualquer threshold bloqueia merge (status check obrigatorio).
- [x] Resultado do relatorio Lighthouse salvo como artifact do workflow (retencao 30 dias).

**B-48 — PWA instalavel**

- [x] `public/manifest.json` com: `name`, `short_name`, `start_url: "/"`,
      `display: "standalone"`, `background_color`, `theme_color` (#1877F2),
      array `icons` com entradas 192x192 e 512x512 (PNG).
- [x] Icones `public/icons/icon-192.png` e `public/icons/icon-512.png` criados
      (placeholder geometrico SVG na cor primaria; PNGs gerados via `scripts/generate_icons.py`).
- [x] Tag `<link rel="manifest" href="/manifest.json">` presente no `<head>`
      via `app/layout.tsx` (metadata API Next.js 15: `manifest: "/manifest.json"`).
- [x] Meta `<meta name="theme-color" content="#1877F2">` no `<head>`
      via `export const viewport: Viewport = { themeColor: "#1877F2" }` em `app/layout.tsx`.
- [ ] Chrome DevTools > Application > Manifest nao exibe erros. (verificacao manual apos deploy)
- [ ] Chrome no Android exibe o banner "Adicionar a tela inicial" (verificacao manual apos deploy).

**B-51 — Analytics de privacidade**

- [x] `@vercel/analytics` instalado e `<Analytics />` inserido em `app/layout.tsx`.
- [ ] Nenhum cookie de rastreio definido (verificavel via DevTools > Application > Cookies).
- [ ] Dashboard Vercel Analytics exibe pageviews por rota apos primeiro deploy.
- [x] Rodape exibe nota de privacidade: "Usamos Vercel Analytics para contar visitas
      sem armazenar dados pessoais." (texto curto, sem link externo obrigatorio).
- [x] `docs/product-backlog.md` atualizado com B-51 marcado como feito.

### Ordem de execucao recomendada e dependencias

1. **B-55 primeiro** — e CI puro: nenhuma mudanca no codigo do app, apenas adicionar
   `lighthouserc.json` e o workflow. Estabelece o teto que validara os proximos dois
   entregaveis antes do merge.
2. **B-48 segundo** — adiciona arquivos estaticos (`manifest.json`, icones) e duas
   linhas em `layout.tsx`. Independente de B-55, mas a pontuacao PWA do Lighthouse
   sobe com o manifest presente; ter B-55 antes confirma isso automaticamente.
3. **B-51 terceiro** — instala uma dependencia npm e adiciona um componente ao layout.
   Sem dependencias de B-48 ou B-55; pode rodar em paralelo com B-48 se houver dois
   agentes, mas a ordem serial e mais segura para evitar conflito em `layout.tsx`.

> Nao ha dependencias bloqueantes entre os tres itens. A ordem acima minimiza conflitos
> em `app/layout.tsx` (B-48 e B-51 editam o mesmo arquivo).

### Definicao de Pronto (sprint inteiro)

- [x] `npm run lint` passa sem erros.
- [x] `npm run build` passa (38+ paginas SSG, sem erros de build).
- [x] Lighthouse CI workflow adicionado e passando no branch do sprint.
- [ ] Chrome DevTools confirma manifest sem erros (B-48). (verificacao manual apos deploy)
- [ ] Vercel Analytics aparece no dashboard apos deploy de preview (B-51). (verificacao apos deploy)
- [x] `docs/product-backlog.md` com B-48, B-51, B-55 marcados como feito.
- [x] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar o sprint.

### O que NAO entra e por que

| Item | Motivo da exclusao |
|------|--------------------|
| B-50 (Prisma + banco) | Escopo grande (G); requer co-planejamento com B-37 + E13 no mesmo sprint para ter caso de uso visivel ao calouro. |
| B-37 (formulario de historias) | Depende de B-50 e de E13 (auth + moderacao). Nao entra sem banco e login prontos. |
| B-13 (historias de veteranos) | Bloqueado: nenhuma submissao real confirmada via `historia-veterano.yml`. Inventar dados viola "Confiavel antes de completo". |
| B-10 (dicas por disciplina) | Mesmo bloqueio de conteudo real que B-13. |
| B-56 / E13 (auth OAuth) | Horizonte v2.0; sem caso de uso na v1 sem banco. |

---

## Retrospectiva do Sprint 10

**Concluido em:** 2026-07-16

**Entregue:**
- **B-55** — `lighthouserc.json` (Perf/A11y/SEO ≥ 0.9) + `.github/workflows/lighthouse.yml`
  que roda `npm ci && npm run build && npx lhci autorun` em PRs para `main`. `@lhci/cli`
  como devDependency.
- **B-48** — `public/manifest.json` completo (name/short_name/start_url/display/
  background_color/theme_color #1877F2); ícones reais 192×512 gerados como PNGs sólidos
  #1877F2 via `scripts/generate-icons-minimal.mjs` (Node builtin, zlib DEFLATE nível 9,
  ~413B e ~1.5KB); versões SVG com letra "C" branca para browsers que suportam;
  `manifest: "/manifest.json"` em `metadata` e `themeColor: "#1877F2"` em `viewport`
  do `app/layout.tsx` (metadata API do Next.js 15).
- **B-51** — `@vercel/analytics@^1.5.0` instalado do registry (não stub); `<Analytics />`
  de `@vercel/analytics/next` no `<body>` do layout; nota de privacidade curta no
  `Footer.tsx`.

**O que foi bem:**
- Sequência serial B-55 → B-48 → B-51 evitou conflitos em `app/layout.tsx` como planejado.
- `npm run lint` sem warnings; `npm run build` verde com 38 páginas SSG.
- Scripts de geração de ícones consolidados em um único script Node minimalista (sem
  dependência externa).

**Ajustes durante a execução:**
- Primeira tentativa de `frontend-dev` criou stub falso de `@vercel/analytics` em
  `node_modules/`; substituído por `npm install` real do registry (package-lock regenerado).
- PNGs iniciais ficaram enormes (787KB) por usar DEFLATE sem compressão; script trocado
  para `zlib.deflateSync` nativo do Node.
- Scripts de ícones redundantes (Python + canvas) removidos; sobrou apenas o Node minimal.

**Verificações manuais pendentes (pós-deploy Vercel):**
- Chrome DevTools > Application > Manifest sem erros.
- Dashboard Vercel Analytics recebendo pageviews.
- Chrome no Android exibindo banner "Adicionar à tela inicial".

**Adiado:** Nenhum item fora do escopo do sprint.

**Para o próximo sprint:** Substituir os ícones PWA placeholder por arte final (letra "C"
ou logo definitivo do portal) quando o design estiver pronto. Considerar B-50 + B-37 + E13
como bloco integrado (banco + histórias + auth) para desbloquear conteúdo dinâmico da v2.

### Reconciliação pós-merge (2026-07-16)

O Sprint 10 foi implementado **duas vezes em paralelo** (uma branch local e o PR #3 mergeado
no `main`). Após o merge, as duas versões foram reconciliadas mantendo a melhor implementação
de cada peça, sem duplicação:

- **PWA:** migrado do `public/manifest.json` estático (+ `metadata.manifest`) para o idiomático
  `app/manifest.ts` (`MetadataRoute.Manifest`, type-safe, gera `/manifest.webmanifest` e injeta
  o `<link rel="manifest">` automaticamente). Os ícones SVG+PNG em `public/icons/` e o script
  `scripts/generate-icons-minimal.mjs` foram mantidos.
- **Lighthouse CI:** `lighthouserc.json` corrigido de `staticDistDir: ".next"` (inválido para
  app SSG servido — `.next` não é um site estático plano) para
  `startServerCommand: "npm run start"`, a forma correta de auditar um app Next.js sem
  `output: export`. Sem essa correção o gate falharia ao coletar em todo PR.
- Analytics, Footer, ícones e `@lhci/cli` (devDependency) permaneceram como no `main`.
- **Estabilidade do gate Lighthouse:** os scores medidos ficaram em Performance 90-91,
  Accessibility 94-96, SEO 91-100. Como a Performance no CI oscila ±3-5 pontos por ruído
  de runner, mantê-la em `error ≥ 0.9` faria o gate falhar de forma intermitente em PRs
  sem mudança de código. Decisão: **Performance → `warn`** (visível, não bloqueia);
  **Accessibility e SEO permanecem `error ≥ 0.9`** (têm margem e SEO é determinístico).
  Assim o gate protege a11y/SEO de regressões reais sem falsos vermelhos por ruído.

---

## Sprints Anteriores

### Sprint 9 — Acessivel, Mapeado e Testado (v1.4) — concluido em 2026-07-16

**Objetivo:** Tornar o portal utilizavel por todos (WCAG AA), dar ao calouro um mapa
interativo do campus e proteger a base com testes E2E automatizados no CI.

**Entregue:** B-49 — audit WCAG AA com 7 blockers identificados e todos corrigidos:
`ink.secondary` para #4B5563 (ratio 7.6:1), `brand.blueButton` para #1565C0 para botoes,
skip link em `app/layout.tsx`, foco visivel no `SearchInput`, text-shadow no hero,
badge `info` com cor correta, Footer sem opacidade, aria-hidden/aria-label em componentes,
area de toque nos NavLinks; `docs/identidade-visual.md` atualizado com ratios calculados.
B-19 — `app/mapa/page.tsx` + `components/MapView.tsx` com Leaflet.js (SSR-safe via
`MapViewClient`), 7 marcadores categorizados, legenda flutuante, tile layer OSM, URL
canonica /mapa com entrada no sitemap.
B-54 — `playwright.config.ts`, `e2e/smoke.spec.ts` (8 smoke tests, 8/8 passed),
`.github/workflows/e2e.yml`. Fix transversal: `lib/content.ts` remove `<h1>` inicial
do HTML gerado (evita duplicata). Build fix: `components/MapViewClient.tsx` para resolver
restricao de `dynamic()` com `ssr: false` em Server Components no Next.js 15.
Lint e Build passam; 38 paginas SSG.

**Nao entregue:** B-13 e B-50 — bloqueados como previsto.

---

### Sprint 8 — Encontravel e Documentado (v1.3) — concluido em 2026-07-15

**Objetivo:** SEO, documentacao tecnica atualizada, FAQ e checklist da primeira semana.

**Entregue:** CLAUDE.md + arquitetura.md reescritos para Next.js 15 (B-46); sitemap.xml,
robots.txt e OG tags em todas as paginas (B-47); FAQ com 16 perguntas + pagina /faq (B-52);
checklist da primeira semana + pagina /checklist (B-53). Fix de CSS para task list items.
Lint e Build passam; 37 paginas SSG.

---

### Sprint 7 — Migracao Next.js 15 (v1.2) — concluido em 2026-07-15

**Objetivo:** Migrar a stack de Vite/React + FastAPI (Render) para Next.js 15 App Router
full-stack, hospedado inteiramente na Vercel.

**Entregue:** App Router com Route Handlers (`app/api/`), loader de Markdown em
`lib/content.ts`, paginas SSG para secoes e cursos, Tailwind configurado, `vercel.json`
ajustado com `outputFileTracingIncludes` para servir `docs/` em producao. Backend Python
e frontend Vite removidos do monorepo.

---

### Sprint 6 — Confiabilidade e governanca (v1.1) — concluido em 2026-07-15

**Objetivo:** Tornar cada dado rastreaavel no tempo (B-25), definir responsaveis de revisao
por area (B-22) e automatizar o lembrete semestral de atualizacao (B-26).

**Entregue:** Rodape `_Ultima verificacao: julho/2026_` nos 8 docs; campo
`ultima_verificacao` nas 13 fichas de curso; `.github/CODEOWNERS`; workflow
`revisao-semestral.yml`. B-23 fechado (PR template cobre).

---

### Sprint 5 — Publicacao e Comunidade (v1.0) — concluido em 2026-07-15

**Objetivo:** Guia de Wi-Fi/e-mail para calouros (B-07), templates de issue/PR (B-21)
e canal de historias de veteranos (B-14).

**Entregue:** Secao eduroam (EAP-TTLS/PAP) + e-mail institucional em
`links-importantes.md`; 4 issue templates YAML + PR template; CONTRIBUTING.md e
`historias-e-feedbacks.md` atualizados com links diretos para submissao.

---

### Sprint 4 — Conteudo pesado: calendario, atleticas e Instagrams (v0.9) — concluido em 2026-07-15

**Objetivo:** Preencher datas do calendario 2026, atleticas e perfis Instagram confirmados.

**Entregue:** Extracao completa do calendario oficial 2026 (Res. 214/2025/CUn); 9
atleticas do CTC confirmadas; perfis PRAE/RU/CTC/PROAFE; 13 fichas de curso com
atletica, CA e IG.

---

### Sprint 3 — Deploy, CI e testes (v0.8) — concluido em 2026-07-15

**Objetivo:** Configs de deploy (Vercel + Render), link-checker no CI e suite de testes.

**Entregue:** `vercel.json`, `render.yaml`, `docs/deploy.md`; workflow lychee (PR +
schedule semanal); suite pytest para health/sections/courses/search.

---

### Sprint 2 — Busca, conteudo e polimento visual (v0.7) — concluido em 2026-07-15

**Objetivo:** UI de busca, 13 fichas de curso e refinamentos visuais.

**Entregue:** B-34 (busca), B-09 (13 fichas), B-38 (dark mode, badges, hover).

---

### Sprint 1 — Fundacao da Plataforma (v0.6) — concluido em 2026-07-14

**Objetivo:** Esqueleto end-to-end da plataforma (backend FastAPI + frontend Vite).

**Entregue:** B-29, B-30, B-31, B-32, B-33, B-35.
