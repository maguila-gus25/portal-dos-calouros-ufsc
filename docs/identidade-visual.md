# 🎨 Identidade Visual — Portal dos Calouros UFSC

Proposta de identidade **própria**, de estudantes para estudantes. Deliberadamente
**diferente** da identidade institucional da UFSC (que é azul-marinho/preto com o
brasão), para deixar claro que este é um **projeto independente e não oficial**.

> ⚠️ **Regra inegociável:** não usar o brasão, o logotipo nem as cores oficiais da
> UFSC de forma que sugira que o site é dela. Em toda página, rodapé fixo:
> **"Projeto independente feito por estudantes. Não é um site oficial da UFSC."**

## Conceito

**Florianópolis é uma ilha.** A marca bebe dessa vibe costeira e acolhedora: o
calouro está "chegando na ilha". Tom amigável, moderno, sem cara de órgão público.
Ideia-guia: *um mapa/bússola que te orienta ao chegar.*

- **Nome/wordmark:** "Portal dos Calouros" com "UFSC" como subtítulo menor (para
  contexto, não para se passar por oficial).
- **Personalidade:** acolhedor, direto, jovem, confiável.
- **Mascote (opcional, futuro):** um farol ou uma bússola simpática — guia quem chega.

## Paleta de cores

Paleta costeira (teal + coral + areia), distinta do azul institucional da UFSC.

| Papel | Nome | Hex | Uso |
|-------|------|-----|-----|
| Primária | Maré (teal) | `#0F766E` | Cabeçalho, links, botões primários |
| Primária clara | Maré 400 | `#2DD4BF` | Hover, detalhes, realces |
| Acento | Coral | `#F97362` | Chamadas de ação, destaques, badges |
| Apoio | Areia | `#FCD9A8` | Fundos de destaque suave, tags |
| Tinta | Grafite | `#1F2937` | Texto principal |
| Neutro | Névoa | `#F1F5F9` | Fundos de seção |
| Fundo | Branco | `#FFFFFF` | Base |
| Sucesso | Verde | `#16A34A` | Confirmações |
| Alerta | Âmbar | `#D97706` | Avisos (ex.: "confirmar valor") |

### Modo escuro
| Papel | Hex |
|-------|-----|
| Fundo | `#0B1220` |
| Superfície | `#111827` |
| Texto | `#E5E7EB` |
| Primária | `#2DD4BF` |
| Acento | `#FB7185` |

> A paleta passou pela lógica de contraste (texto grafite sobre claro e texto claro
> sobre fundo escuro atendem WCAG AA). Ajustar tons finos na implementação do
> Tailwind (`tailwind.config.js`), expondo como `brand.mare`, `brand.coral`, etc.

## Tipografia

- **Títulos:** Poppins (SemiBold/Bold) — geométrica, amigável.
- **Texto:** Inter (Regular/Medium) — altíssima legibilidade em telas.
- Ambas gratuitas (Google Fonts). No app, carregar via `@fontsource` para não
  depender de CDN externo.

## Logo (direção)

Conceito de wordmark + símbolo:
- **Símbolo:** um **pin de mapa** cujo "furo" é um **chapéu de formatura** estilizado
  (ou uma bússola). Traço simples, 2 cores (Maré + Coral).
- **Wordmark:** "Portal dos Calouros" em Poppins; "UFSC" menor, em cinza, ao lado —
  nunca com aparência de selo oficial.
- Versões: colorida (fundo claro), monocromática (fundo escuro), só símbolo (favicon).

> A arte final (SVG) é um item de backlog. Posso gerar uma primeira versão do
> wordmark/símbolo em SVG quando você quiser.

## Componentes-chave de UI

- **Header:** logo à esquerda, busca no centro, menu de seções.
- **Footer (obrigatório):** o aviso de "não oficial" + links de fontes e "como contribuir".
- **Card de seção/curso:** ícone + título + resumo; cores da paleta por categoria.
- **Badge "fonte oficial":** selo pequeno indicando que o dado veio de canal oficial.
- **Badge "publicidade":** quando houver divulgação/monetização, sempre marcada.

## Tom de voz

- Fala de "você" com o calouro. Frases curtas. Explica siglas.
- Acolhedor, nunca burocrático. Ex.: *"Chegou agora? Respira. A gente te explica o RU."*
- Honesto sobre limites: quando algo não está confirmado, diz que não está.

## Acessibilidade

- Contraste mínimo AA; foco visível; navegação por teclado.
- Mobile-first (o calouro lê no celular, na fila do RU).
- Alt text em imagens; ícones sempre com rótulo textual.

---

> Esta identidade é uma **proposta inicial** para aprovação. Nada aqui é definitivo —
> ajuste cores, nome e tom conforme sua preferência antes de a gente aplicar no
> frontend.
