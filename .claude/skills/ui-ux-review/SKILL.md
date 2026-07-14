---
name: ui-ux-review
description: Auditoria de design e acessibilidade das páginas/componentes contra o design system branco+azul (estilo Facebook) de docs/identidade-visual.md — verifica tipografia, espaçamento, uso correto de cores, mobile-first, modo escuro e acessibilidade WCAG AA. Use após implementar ou modificar seções de UI, antes de /sprint-review, ou quando pedido explicitamente.
---

# UI/UX Review

Audite o estado atual do site contra `docs/identidade-visual.md`. Produza uma tabela de findings; não corrija os problemas — passe para `frontend-dev`.

## Checklist

### Tipografia
- Todo texto usa `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — sem fontes externas (CDN, Google Fonts).
- Hierarquia clara: título de seção > body > legenda — consistente entre todas as páginas.
- Comprimento de linha do body legível (~60-80 chars) — verificar uso de `max-w-*` em blocos de texto.

### Espaçamento & Layout
- Seções usam ritmo vertical consistente — verificar outliers com valores hardcoded.
- Conteúdo respeita largura máxima e padding horizontal definidos em `docs/identidade-visual.md`.
- Layouts não quebram nos breakpoints principais: mobile 375px, tablet 768px, desktop 1280px.

### Cores & Contraste
- Nenhuma cor hardcoded fora dos tokens Tailwind — buscar `#[0-9a-fA-F]{3,6}` e `rgb(` em `frontend/src/`.
- Azul primário `#1877F2`: verificar contraste de texto sobre ele (branco deve passar WCAG AA).
- Texto `#1C1E21` sobre fundo `#FFFFFF` e `#F0F2F5` — verificar contraste.
- Texto secundário `#65676B` sobre fundo branco — verificar (este par está no limite de AA; confirmar).

### Mobile-first
- **Todos os componentes funcionam e são legíveis em 375px** — prioridade máxima.
- Tabelas responsivas — sem overflow horizontal em mobile.
- Botões e links com área de toque adequada (mínimo 44×44px).
- Nada se sobrepõe ou fica cortado em telas pequenas.

### Modo escuro (quando implementado)
- Nenhum `bg-white`/`text-black` hardcoded que quebre o dark mode.
- Tokens de dark mode conforme `docs/identidade-visual.md` (`#18191A`, `#242526`, `#E4E6EB`).

### Acessibilidade
- Landmarks semânticos: `<header>`, `<main>`, `<nav>`, `<footer>` presentes e corretos.
- Imagens com `alt` texto significativo (ou `alt=""` se puramente decorativo).
- Elementos interativos com estados de foco visíveis e nomes acessíveis.

### Rodapé obrigatório
- **Toda página** deve conter: *"Projeto independente feito por estudantes. Não é um site oficial da UFSC."*

## Formato de output

```
| Severidade | Área | Arquivo:Linha | Finding | Fix sugerido |
|------------|------|---------------|---------|-------------|
| blocker/major/minor | ... | ... | ... | ... |
```

Agrupar por severidade, blockers primeiro. Se tudo passar, dizer explicitamente — não inventar nitpicks.
