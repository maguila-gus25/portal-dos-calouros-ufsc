# Frontend — Portal dos Calouros UFSC

Aplicação React (Vite + TypeScript + Tailwind CSS) que consome a API do
backend FastAPI e apresenta o conteúdo institucional do CTC.

## Rodar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Abre em <http://localhost:5173>. A URL da API vem de `VITE_API_URL`
(default `http://localhost:8000`).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Type-check + build de produção |
| `npm run preview` | Serve o build local |
| `npm run lint` | Roda ESLint |

## Design system

Paleta branco + azul (estilo Facebook) — ver `docs/identidade-visual.md`
na raiz do repo. Tokens Tailwind:

- `brand.blue` `#1877F2`
- `bg.app` `#F0F2F5`
- `surface` `#FFFFFF`
- `ink.primary` `#1C1E21`

## Rodapé obrigatório

O rodapé `src/components/Footer.tsx` exibe em toda página:

> Projeto independente feito por estudantes. Não é um site oficial da UFSC.

Nunca remover.
