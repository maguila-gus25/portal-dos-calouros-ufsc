---
name: update-readme
description: Regenera as seções auto-gerenciadas do README.md raiz (stack, estrutura, equipe de agentes, scripts) a partir do estado atual do repo, preservando conteúdo escrito manualmente. Use após mudanças de dependências, novos top-level folders/files, ou novos/alterados agentes/skills/commands — ou quando pedido explicitamente.
---

# Update README

Mantenha `README.md` como um ponto de entrada preciso e escaneável para humanos e para o Claude Code.

## Procedimento

1. **Leia o estado atual**:
   - `CLAUDE.md` — visão geral da arquitetura e stack.
   - `docs/arquitetura.md` — detalhes técnicos e ADRs.
   - `backend/requirements.txt` (se existir) — dependências Python.
   - `frontend/package.json` (se existir) — dependências JS e scripts.
   - `ls .claude/agents .claude/skills .claude/commands docs` — equipe atual de agentes, skills e commands.

2. **Preserve conteúdo manual**: qualquer seção entre
   ```html
   <!-- manual:start -->
   ...
   <!-- manual:end -->
   ```
   deve ser deixada intacta. Se o README não tiver esses marcadores, envolva a introdução/descrição escrita à mão neles antes de regenerar o resto.

3. **Regenere as seções automáticas** (manter ordem para re-runs idempotentes):

   ```markdown
   # Portal dos Calouros UFSC

   <!-- manual:start -->
   <descrição de uma linha — manter o que já existe>
   <!-- manual:end -->

   ## Stack
   - **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS — Vercel
   - **Backend**: Python + FastAPI + Pydantic v2 + SQLAlchemy — Render
   - **Banco**: SQLite (dev) → PostgreSQL (prod)
   - **Conteúdo**: Markdown em `docs/` como fonte única

   ## Como rodar localmente
   ```bash
   # Backend
   cd backend && pip install -r requirements.txt
   uvicorn app.main:app --reload --port 8000

   # Frontend
   cd frontend && npm install && npm run dev
   ```

   ## Estrutura
   <árvore curta: docs/, backend/app/, frontend/src/, .claude/ — uma linha por pasta explicando o propósito>

   ## Conteúdo (docs/)
   <tabela das seções: coordenações, RU, links, datas, atléticas, instagrams, mapa, histórias>

   ## Equipe de Agentes
   Este projeto é construído e mantido por uma equipe de subagentes do Claude Code seguindo um processo Scrum leve.

   <tabela: nome do agente | papel — primeira frase do frontmatter `description` de cada .claude/agents/*.md>

   **Slash commands disponíveis:**
   <lista de .claude/commands/*.md com o frontmatter `description`>

   ### Fluxo de trabalho
   1. `/sprint-plan` — faz grooming de `docs/product-backlog.md` e planeja o próximo sprint em `docs/SPRINT.md`.
   2. `/sprint-run` — executa o sprint planejado, despachando subagentes em ordem de dependência.
   3. `/standup` — check de progresso/bloqueios (read-only, seguro rodar a qualquer hora).
   4. `/sprint-review` — fecha o sprint: lint/build/`ui-ux-review`, atualiza backlog e README.

   Veja `docs/product-backlog.md` e `docs/SPRINT.md` para o trabalho atual.

   ## Deploy
   - **Frontend**: Vercel (auto-deploy no push para `main`). Variável necessária: `VITE_API_URL`.
   - **Backend**: Render (auto-deploy no push para `main`). Variáveis: `DATABASE_URL`, `CORS_ORIGINS`, `ENV`.
   ```

4. **Não invente detalhes** — se algo não pode ser derivado do repo (ex: URL de deploy real), deixe um placeholder: `<!-- TODO: adicionar URL de deploy -->`.

5. Escreva o resultado em `README.md`.
