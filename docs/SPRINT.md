# Sprints — Portal dos Calouros UFSC

> Gerado e mantido pelo Product Owner. Use `/sprint-plan` para iniciar um novo sprint.

---

## Sprint 14 — Próximos Centros: CCE + CCS (B-60 micro-sprint, v1.8)

**Objetivo:** Publicar os próximos dois centros do Campus Trindade sobre a infraestrutura
multi-centro já pronta (Sprint 13): **CCE** (Centro de Comunicação e Expressão) e **CCS**
(Centro de Ciências da Saúde). Trabalho essencialmente de conteúdo — os marcadores já
existem no mapa desde o Sprint 12; falta apenas o `.md` de cada centro e o link do popup.

| História | ID | Prioridade / Tam. | Status |
|----------|----|-------------------|--------|
| Conteúdo do CCE (Comunicação e Expressão) — B-60 parcial | B-60 (CCE) | Should / M | In Progress |
| Conteúdo do CCS (Ciências da Saúde) — B-60 parcial | B-60 (CCS) | Should / M | In Progress |
| Links dos popups CCE e CCS no mapa + verificação | B-60 (mapa) | Should / P | In Progress |

### Nota de escopo (correção do grooming)

**CCS ≠ CSE.** O Sprint 13 publicou o **CSE** (Centro Sócio-Econômico — Administração,
Contábeis, Economia, Serviço Social), que já tem `docs/centros/cse.md` e `link: "/centros/cse"`
no mapa. Este sprint trata do **CCS** (Centro de Ciências da Saúde — Medicina, Enfermagem,
Farmácia, Odontologia, Nutrição), um centro **distinto** que ainda não tem página. Ambos os
centros deste sprint — CCE e CCS — são novos: seus marcadores existem no mapa (linhas 96–111
de `components/MapView.tsx`) mas **sem** campo `link`.

### Critérios de aceite detalhados

**B-60 (CCE) — `docs/centros/cce.md`**

- [ ] Frontmatter YAML: `slug: cce`, `titulo: "Centro de Comunicação e Expressão (CCE)"`,
      `descricao` (uma frase, cursos principais), `ultima_verificacao: "julho/2026"`.
- [ ] Seção **Contatos do Centro** — direção (nome, e-mail), site oficial `cce.ufsc.br`,
      Instagram se houver. Campos não confirmados como `_A preencher_`.
- [ ] Seção **Cursos de Graduação** — lista dos cursos do CCE (Jornalismo, Letras —
      Português/Estrangeiras/Libras, Design, Cinema, Artes Cênicas, Animação, etc.),
      confirmada em fonte oficial (`cce.ufsc.br`). Não inventar cursos.
- [ ] Seção **Coordenações de Curso** — por curso, com e-mail/telefone quando houver fonte;
      `_A preencher_` quando não confirmado.
- [ ] Seção **Centros Acadêmicos** e **Atléticas** por curso (ou `_A preencher_`).
- [ ] Seção **Links Úteis** (site do centro, secretaria integrada, apoio estudantil).
- [ ] Rodapé `_Última verificação: julho/2026_`.

**B-60 (CCS) — `docs/centros/ccs.md`**

- [ ] Mesma estrutura do CCE, com `slug: ccs`, `titulo: "Centro de Ciências da Saúde (CCS)"`.
- [ ] Cursos verificados em `ccs.ufsc.br`: Medicina, Enfermagem, Farmácia, Odontologia,
      Nutrição (confirmar se há outros — ex.: Fonoaudiologia, Gerontologia). Não inventar.
- [ ] Coordenações, CAs e atléticas por curso com fonte oficial ou `_A preencher_`.
- [ ] Rodapé `_Última verificação: julho/2026_`.

**B-60 (mapa) — `components/MapView.tsx`**

- [ ] Marcador CCE (linha ~96) recebe `link: "/centros/cce"`.
- [ ] Marcador CCS (linha ~104) recebe `link: "/centros/ccs"`.
- [ ] Nenhuma outra alteração de comportamento do mapa.

**Verificação (sprint inteiro)**

- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG — páginas `/centros/cce` e `/centros/ccs` geradas
      automaticamente pelo loader, sem código novo além do link do mapa).
- [ ] Testes E2E do Playwright passam sem regressões.
- [ ] `app/sitemap.ts` já inclui as novas rotas automaticamente (varre `listCenters()`) —
      confirmar no build.

### Ordem de execução e dependências

1. **Conteúdo** (`docs/centros/cce.md` e `docs/centros/ccs.md`) — `content-editor`, em
   paralelo. Pesquisar fontes oficiais (`cce.ufsc.br`, `ccs.ufsc.br`). Sem dependência de código.
2. **Integração Mapa** (`components/MapView.tsx`) — `frontend-dev` adiciona os dois `link`.
   Independente do conteúdo (as páginas são geradas pelo loader), mas o link só faz sentido
   com o `.md` presente; pode rodar em paralelo e ser validado no build final.
3. **Verificação** — `tester` roda lint + build + Playwright.

### Notas técnicas para os agentes

- Modelo a seguir: `docs/centros/cca.md` e `docs/centros/cse.md` (estrutura já validada no
  Sprint 13). Copiar a organização de seções desses arquivos.
- **Regra inegociável:** campos sem fonte oficial ficam `_A preencher_` — nunca inventar
  coordenações, e-mails ou nomes. Toda informação exige link oficial da UFSC.
- O loader `listCenters()`/`getCenter()` já varre `docs/centros/*.md` excluindo `_modelo*` —
  nada a mudar em `lib/content.ts`.

**Slugs de centro para o mapa:**

| Centro | Marcador (linha aprox.) | Slug para link |
|--------|-------------------------|----------------|
| CCE | 96–103 | `cce` |
| CCS | 104–111 | `ccs` |

### Definição de Pronto (sprint inteiro)

- [ ] `docs/centros/cce.md` e `docs/centros/ccs.md` criados com dados verificados ou `_A preencher_`.
- [ ] Páginas `/centros/cce` e `/centros/ccs` acessíveis (geradas no build SSG).
- [ ] Popups CCE e CCS no mapa têm link para as respectivas páginas.
- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` passa (SSG completo, novas páginas incluídas).
- [ ] Testes E2E Playwright passam sem regressões.
- [ ] `docs/product-backlog.md` atualizado (B-60 segue 🚧 — CCE e CCS publicados).
- [ ] `docs/SPRINT.md` com retrospectiva preenchida antes de fechar.

### O que NÃO entra e por que

| Item | Motivo da exclusão |
|------|--------------------|
| Demais centros (CCJ, CFH, CFM, CCB, CED, CDS, Joinville, Araranguá) | Escopo futuro — micro-sprints de 2 centros por vez; B-60 segue 🚧 |
| B-61 (fichas de cursos do CCA/CCE/CCS) | Épico E2 distinto; não misturar com E7 no mesmo sprint |
| B-50 + B-37 + E13 | Horizonte v2.0; banco + auth + moderação como bloco integrado |
| B-13 (histórias de veteranos) | Bloqueado: sem submissões reais confirmadas via `historia-veterano.yml` |

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

### Sprint 13 — Infraestrutura Multi-Centro + CCA e CSE (v1.7) — concluido em 2026-07-29

**Objetivo:** Infraestrutura de conteúdo multi-centro (`docs/centros/`, `app/centros/[slug]`,
`app/api/centros/`, `listCenters()`/`getCenter()` em `lib/content.ts`) e publicar os dois
primeiros centros além do CTC: CCA (Itacorubi) e CSE (Trindade).

**Entregue:** loader + rotas + páginas SSG + sitemap dinâmico para `/centros/*`; `docs/centros/cca.md`
(4 cursos verificados) e `docs/centros/cse.md` (5 cursos verificados) com coordenações, CAs, atléticas
e festas; popups de CCA e CSE no mapa com link "Ver página do centro →". lint ✅ · build 42 páginas
SSG ✅ · Playwright 8/8 ✅. B-60 passou a 🚧 Em andamento. Lição: CCA tem 4 cursos (não 7); popup
Leaflet exige `display:block` para satisfazer tap target.

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
