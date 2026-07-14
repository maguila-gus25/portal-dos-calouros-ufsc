# 🎨 Identidade Visual — Portal dos Calouros UFSC

Identidade **própria**, de estudantes para estudantes, no estilo **limpo branco + azul**
(referência: interface do Facebook). Familiar, direto e confiável — sem parecer
template genérico.

> ⚠️ **Regra inegociável:** não usar o brasão, o logotipo nem as cores oficiais da
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

## Paleta de cores

Branco + azul, com cinzas neutros para texto e fundos (mesma lógica do Facebook).

| Papel | Nome | Hex | Uso |
|-------|------|-----|-----|
| Primária | Azul | `#1877F2` | Cabeçalho, links, botões primários, destaques |
| Primária (hover) | Azul escuro | `#166FE5` | Estado de hover/press dos botões |
| Ação positiva | Verde | `#42B72A` | Botões de confirmação (ex.: "Enviar história") |
| Fundo do app | Cinza claro | `#F0F2F5` | Fundo geral das páginas |
| Superfície | Branco | `#FFFFFF` | Cartões, barras, caixas de conteúdo |
| Borda | Cinza borda | `#CED0D4` | Divisórias e contornos de cartão |
| Texto principal | Quase preto | `#1C1E21` | Títulos e corpo |
| Texto secundário | Cinza texto | `#65676B` | Legendas, metadados, descrições |
| Alerta | Âmbar | `#B26A00` | Avisos (ex.: "confirmar valor vigente") |

### Modo escuro (estilo Facebook dark)
| Papel | Hex |
|-------|-----|
| Fundo do app | `#18191A` |
| Superfície | `#242526` |
| Borda | `#3E4042` |
| Texto principal | `#E4E6EB` |
| Texto secundário | `#B0B3B8` |
| Primária (azul) | `#2D88FF` |

> Contraste: texto `#1C1E21` sobre branco e `#E4E6EB` sobre `#18191A` atendem WCAG AA.
> Expor no Tailwind como `brand.blue`, `brand.blueDark`, `bg.app`, `bg.surface`, etc.

## Tipografia

**Fontes de sistema**, como o Facebook faz — carregam instantâneas, sem CDN, e
passam a sensação de app nativo:

```
font-family: system-ui, -apple-system, "Segoe UI", Roboto,
             Helvetica, Arial, sans-serif;
```

- **Títulos:** mesma família, peso **bold** (600–700).
- **Texto:** peso normal (400) / medium (500).
- Sem fonte decorativa. A hierarquia vem de **tamanho e peso**, não de troca de fonte.

## Logo (direção)

- **Símbolo:** um **quadrado azul arredondado** (como o "f" do Facebook) com um
  ícone branco dentro — um **chapéu de formatura** ou a inicial **"C"** de Calouros.
- **Wordmark:** "Portal dos Calouros" em fonte de sistema bold, cor `#1C1E21`;
  "UFSC" menor em cinza — nunca com aparência de selo oficial.
- Versões: azul sobre branco, branco sobre azul (para o header), só símbolo (favicon).

> Arte final (SVG) é item de backlog. Posso gerar a primeira versão quando quiser.

## Componentes-chave de UI (padrão Facebook)

- **Header:** barra **branca** fixa no topo, logo azul à esquerda, busca no centro,
  menu à direita. Sombra sutil embaixo.
- **Cartões:** brancos, cantos arredondados (~8px), borda/sombra leve, sobre fundo
  cinza `#F0F2F5`.
- **Botões:** primário azul `#1877F2` (texto branco); confirmação verde `#42B72A`.
- **Footer (obrigatório):** o aviso de "não oficial" + fontes + "como contribuir".
- **Badge "fonte oficial":** selo azul-claro indicando dado vindo de canal oficial.
- **Badge "publicidade":** quando houver divulgação/monetização, sempre marcada.

## Tom de voz

- Fala de "você" com o calouro. Frases curtas. Explica siglas.
- Acolhedor e direto, sem burocracia. Ex.: *"Chegou agora? A gente te explica o RU."*
- Honesto sobre limites: quando algo não está confirmado, diz que não está.

## Acessibilidade

- Contraste mínimo AA; foco visível; navegação por teclado.
- Mobile-first (o calouro lê no celular, na fila do RU).
- Alt text em imagens; ícones sempre com rótulo textual.

---

> Identidade **branco + azul** (estilo Facebook), como definido. Ajuste tons, nome e
> tom conforme sua preferência antes de a gente aplicar no frontend.
