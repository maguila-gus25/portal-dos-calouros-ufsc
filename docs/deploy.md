# 🚀 Deploy — Portal dos Calouros UFSC

Guia para publicar o portal em produção. Arquitetura:

- **Frontend** (React/Vite) na **Vercel** — auto-deploy no push para `main`.
- **Backend** (FastAPI) no **Render** — auto-deploy no push para `main`.

## Pré-requisitos

- Conta no GitHub com acesso ao repo `maguila-gus25/portal-dos-calouros-ufsc`.
- Conta na [Vercel](https://vercel.com) (grátis).
- Conta no [Render](https://render.com) (grátis).

## 1. Deploy do backend (Render)

O arquivo [`render.yaml`](../render.yaml) na raiz é um **Blueprint** — o Render lê
tudo dele. Para importar:

1. No Render Dashboard → **New +** → **Blueprint**.
2. Selecione este repositório e a branch `main`.
3. O Render detecta `render.yaml` e cria o serviço `portal-calouros-api`.
4. Confirmar as variáveis de ambiente:
   - `ENV=production`
   - `PYTHON_VERSION=3.11.9`
   - `CORS_ORIGINS=<URL do frontend na Vercel>` (atualizar após o passo 2)
   - `DATABASE_URL=sqlite:///./app.db` (v1.0) ou string do Postgres gerenciado (v1.1+)
5. Aguardar o build; healthcheck em `/api/health` deve retornar 200.

URL resultante: `https://portal-calouros-api.onrender.com` (ou similar).

## 2. Deploy do frontend (Vercel)

O arquivo [`frontend/vercel.json`](../frontend/vercel.json) já configura framework,
build e rewrites de SPA.

1. Na Vercel Dashboard → **Add New…** → **Project**.
2. Importar o repositório `portal-dos-calouros-ufsc`.
3. Configurar o **Root Directory** como `frontend/`.
4. Adicionar a variável de ambiente:
   - `VITE_API_URL=https://portal-calouros-api.onrender.com` (URL do passo 1)
5. Deploy.

URL resultante: `https://portal-dos-calouros-ufsc.vercel.app` (ou similar).

## 3. Amarrar frontend ↔ backend

Após o primeiro deploy dos dois, **atualizar** o `CORS_ORIGINS` no Render com a
URL final da Vercel. Se `CORS_ORIGINS` estiver errado, o browser bloqueia as
requisições do frontend com erro de CORS.

## 4. CI/CD

Nenhum workflow customizado necessário para deploy — Vercel e Render
observam pushes para `main` automaticamente. Para preview de PRs, ambos os
serviços criam URLs de preview quando você abre um PR.

## Migração para PostgreSQL (v1.1)

Quando entrar o banco (histórias, feedback):

1. No Render → **New +** → **PostgreSQL** (plano free ou pago).
2. Copiar a **Internal Database URL**.
3. Substituir `DATABASE_URL` no `render.yaml` (ou no dashboard) e redeploy.

## Domínio próprio (opcional)

Ambos suportam custom domains via DNS. Configurar depois do primeiro deploy
funcionar sem problemas.
