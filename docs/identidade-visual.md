# Identidade Visual — Portal dos Calouros UFSC

Identidade **própria**, de estudantes para estudantes, no estilo **limpo branco + azul**
(referência: interface do Facebook). Familiar, direto e confiável — sem parecer
template genérico.

> **Regra inegociável:** não usar o brasão, o logotipo nem as cores oficiais da
> UFSC de forma que sugira que o site é dela. Em toda página, rodapé fixo:
> **"Projeto independente feito por estudantes. Não é um site oficial da UFSC."**

## Conceito

Interface **branca com azul**, cinza claro de fundo, cartões brancos — o padrão
"rede social" que todo calouro já conhece de cor. Nada de gradientes chamativos ou
fontes decorativas. A informação é a estrela; o visual só organiza e dá confiança.

- **Nome/wordmark:** "Portal dos Calouros" com "UFSC" como subtítulo menor (contexto,
  não para se passar por oficial).
- **Personalidade:** confiável, familiar, objetivo, acessível.
- **Referência de UI:** Facebook — barra superior branca, azul de ação, cartões
  brancos sobre fundo cinza claro.

---

## Paleta de cores

> **Nota sobre divergência doc vs. implementação:** os valores abaixo refletem os tokens
> reais usados em `tailwind.config.ts`, que diferem levemente dos valores originais deste
> documento. Os valores do Tailwind são autoritativos — este documento foi atualizado para
> refletir o que está em produção.

Branco + azul, com cinzas neutros para texto e fundos (mesma lógica do Facebook).

| Papel | Token Tailwind | Hex (produção) | Hex (doc anterior) |
|-------|---------------|----------------|---------------------|
| Primária | `brand.blue` | `#1877F2` | `#1877F2` (igual) |
| Primária (hover) | `brand.blueHover` | `#166FE5` | `#166FE5` (igual) |
| Ação positiva | `brand.green` | `#42B72A` | `#42B72A` (igual) |
| Fundo do app | `bg.app` | `#F5F7FF` | `#F0F2F5` (diverge) |
| Superfície | `surface` | `#FFFFFF` | `#FFFFFF` (igual) |
| Borda | `surface.border` | `#E4E7EC` | `#CED0D4` (diverge) |
| Texto principal | `ink.primary` | `#111827` | `#1C1E21` (diverge) |
| Texto secundário | `ink.secondary` | `#6B7280` | `#65676B` (diverge) |
| Alerta | `ink.alert` | `#B45309` | `#B26A00` (diverge) |

**Todos os futuros ajustes de cor devem ser feitos em `tailwind.config.ts`.
Este documento deve ser atualizado em sincronia.**

### Modo escuro (estilo Facebook dark)

| Papel | Token Tailwind | Hex |
|-------|---------------|-----|
| Fundo do app | `bg.dark` | `#18191A` |
| Superfície | `bg.darkSurface` | `#242526` |
| Borda | — (inline) | `#3E4042` |
| Texto principal | — (inline) | `#E4E6EB` |
| Texto secundário | — (inline) | `#B0B3B8` |
| Primária (azul) | — (inline) | `#2D88FF` |

---

## Ratios de contraste WCAG AA (auditados em 2026-07-15)

WCAG 2.1 AA exige: **4.5:1** para texto normal (< 18pt / < 14pt bold),
**3:1** para texto grande (>= 18pt normal ou >= 14pt bold) e componentes de UI.

### Modo claro

| Par de cores | Ratio calculado | WCAG AA normal | WCAG AA grande |
|---|---|---|---|
| `ink.primary` `#111827` sobre `surface` `#FFFFFF` | **16.7:1** | Passa | Passa |
| `ink.primary` `#111827` sobre `bg.app` `#F5F7FF` | **15.6:1** | Passa | Passa |
| `ink.secondary` `#6B7280` sobre `surface` `#FFFFFF` | **4.34:1** | **FALHA** | Passa |
| `ink.secondary` `#6B7280` sobre `bg.app` `#F5F7FF` | **4.07:1** | **FALHA** | **FALHA** |
| `brand.blue` `#1877F2` sobre `surface` `#FFFFFF` | **4.22:1** | **FALHA** | Passa |
| `#FFFFFF` sobre `brand.blue` `#1877F2` (btn-primary) | **4.22:1** | **FALHA** | Passa |
| `ink.alert` `#B45309` sobre `surface` `#FFFFFF` | **5.74:1** | Passa | Passa |
| `brand.blue` `#1877F2` sobre `bg.brand-blue/10` (badge) | **3.96:1** | **FALHA** | Passa |
| `#FFFFFF` 75% opacidade sobre `#1877F2` (hero p text) | **3.08:1** | **FALHA** | Passa |
| `ink.secondary/70` `#6B7280@0.7` sobre `#FFFFFF` (footer copyright) | **2.73:1** | **FALHA** | **FALHA** |

### Modo escuro

| Par de cores | Ratio calculado | WCAG AA normal | WCAG AA grande |
|---|---|---|---|
| `#E4E6EB` sobre `bg.dark` `#18191A` | **13.6:1** | Passa | Passa |
| `#B0B3B8` sobre `bg.darkSurface` `#242526` | **7.61:1** | Passa | Passa |
| `#2D88FF` sobre `bg.darkSurface` `#242526` | **5.90:1** | Passa | Passa |

### Pares a corrigir (blockers de contraste)

O texto secundário `#6B7280` é a principal fonte de falhas. A correção recomendada
é mover o token para `#5F6875` (ratio ≈ 5.0:1 sobre branco) ou usar `#4B5563`
(ratio ≈ 7.6:1), que já é o próximo step do gray-600 no Tailwind.

O azul primário `#1877F2` falha como texto normal sobre branco (ratio 4.22:1).
Para texto de link normal (não grande), deve-se usar peso bold/semibold (que ativa
o limiar 3:1) ou acrescentar `text-decoration: underline` como pista não-cor
adicional — o que WCAG 1.4.1 aceita como complemento.

Para `btn-primary` (branco sobre azul), o texto é `font-semibold text-sm` (14px
semibold = ≈ 10.5pt, abaixo dos 14pt bold necessários para "large text"). Isso
é um blocker: mudar para `#1565C0` como cor de fundo do botão (ratio branco sobre
`#1565C0` ≈ 6.5:1) ou engrossar o texto para `font-bold text-base`.

---

## Tipografia

**Nota sobre divergência doc vs. implementação:** o documento original especificava
"fontes de sistema sem CDN". A implementação atual carrega **duas fontes via Google
Fonts CDN**: Inter (corpo) e Poppins (headings). Isso é uma divergência intencional
adotada no desenvolvimento — melhora a hierarquia visual, mas adiciona uma dependência
de rede externa e pode causar FOUT (flash of unstyled text) em conexões lentas.

**Decisão de design documentada:**
- Manter Inter + Poppins via Google Fonts enquanto o portal estiver em crescimento.
- Avaliar migração para `next/font` (Google Fonts com auto-otimização do Next.js,
  zero FOUT, sem request extra) quando o projeto atingir maturidade de produção.
- A diretiva `display=swap` já está aplicada na import URL em `globals.css`, o que
  minimiza o impacto de FOUT.

```
/* globals.css — linha 1 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700
             &family=Poppins:wght@600;700;800&display=swap');
```

Hierarquia tipográfica:

| Elemento | Família | Peso | Tamanho aproximado |
|----------|---------|------|--------------------|
| H1 (heading) | Poppins | 700–800 | 24–48px (varia por contexto) |
| H2 | Poppins | 700 | 20px |
| H3 | Inter / system-ui | 600 | 16px |
| Corpo | Inter / system-ui | 400 | 16px |
| Legenda / badge | Inter / system-ui | 500 | 12–14px |

---

## Foco visível (WCAG 2.4.7)

**Diretriz obrigatória:** todo elemento interativo (link, botão, input, select)
deve exibir um indicador de foco claramente visível quando navegado por teclado.
A supressão de outline (`outline: none` ou `outline: 0`) sem substituto visual
equivalente é uma falha WCAG AA.

**Implementação atual em `globals.css`:**

```css
:focus-visible {
  @apply outline-2 outline-offset-2 outline-brand-blue;
}
```

Isso aplica um outline azul 2px com offset 2px em todos os elementos que recebem
foco via teclado (pseudoclasse `:focus-visible` — não dispara no clique do mouse,
evitando ruído visual). Esta é a abordagem correta.

**Exceção encontrada — `SearchInput` (`components/SearchInput.tsx` linha 35):**
O `<input>` usa `outline-none` sem fallback. O foco é indicado apenas pela mudança
de `border-color` (borda fica azul), o que pode ter contraste de indicador insuficiente
para cumprir WCAG 2.4.11 (Non-text Contrast, nível AA). A correção é remover o
`outline-none` e deixar o `:focus-visible` global agir, ou aplicar explicitamente
`focus-visible:ring-2 focus-visible:ring-brand-blue`.

**Regra de design:** nunca usar `outline-none` ou `outline-0` sem aplicar um
substituto visual de pelo menos 3:1 de contraste contra o fundo adjacente.

---

## Logo (direção)

- **Símbolo:** um **quadrado azul arredondado** (como o "f" do Facebook) com um
  ícone branco dentro — um **chapéu de formatura** ou a inicial **"C"** de Calouros.
- **Wordmark:** "Portal dos Calouros" em fonte bold, cor `#111827`;
  "UFSC" menor em cinza — nunca com aparência de selo oficial.
- Versões: azul sobre branco, branco sobre azul (para o header), só símbolo (favicon).

> Arte final (SVG) é item de backlog.

---

## Componentes-chave de UI (padrão Facebook)

- **Header:** barra **branca** fixa no topo, logo azul à esquerda, busca no centro,
  menu à direita. Sombra sutil embaixo.
- **Cartões:** brancos, cantos arredondados (~12px), borda/sombra leve, sobre fundo
  cinza `#F5F7FF`.
- **Botões:** primário azul (texto branco) — ver nota de contraste acima;
  confirmação verde `#42B72A`.
- **Footer (obrigatório):** o aviso de "não oficial" + fontes + "como contribuir".
- **Badge "fonte oficial":** selo azul-claro indicando dado vindo de canal oficial —
  atentar ao contraste de texto azul sobre fundo azul/10 (ver tabela de ratios).

---

## Tom de voz

- Fala de "você" com o calouro. Frases curtas. Explica siglas.
- Acolhedor e direto, sem burocracia. Ex.: *"Chegou agora? A gente te explica o RU."*
- Honesto sobre limites: quando algo não está confirmado, diz que não está.

---

## Acessibilidade — padrão mínimo (WCAG 2.1 AA)

- **Contraste:** texto normal >= 4.5:1, texto grande >= 3:1, componentes UI >= 3:1.
  Ver tabela de ratios neste documento.
- **Foco visível:** nunca suprimir outline sem substituto. Ver seção acima.
- **Labels:** todo `<input>` deve ter `<label>` associado ou `aria-label`.
  Ícones decorativos devem ter `aria-hidden="true"`.
- **Landmarks:** `<header>`, `<main>`, `<nav>`, `<footer>` são obrigatórios.
  O `<main>` deve ter `id="main-content"` para o skip link funcionar.
- **Skip link:** primeiro elemento do `<body>` deve ser um link "Pular para o
  conteúdo" visível ao receber foco, apontando para `#main-content`.
- **Alt text:** toda `<img>` deve ter `alt` descritivo. Imagens decorativas: `alt=""`.
- **Mobile-first:** o calouro lê no celular, na fila do RU. Toque mínimo de 44×44px.
