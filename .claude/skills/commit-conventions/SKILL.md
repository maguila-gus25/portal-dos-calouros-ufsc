---
name: commit-conventions
description: Define o padrão de commits deste repositório — mensagens em português, tipo(escopo): descrição, seguindo GitHub Flow com branches de feature. Use sempre que criar um commit aqui.
---

# Convenções de Commit

Este projeto usa mensagens em **português** com o padrão `<tipo>(<escopo>): <descrição>`.

## GitHub Flow
- **Nunca commitar diretamente em `main`.**
- Todo trabalho vai em branch criada a partir de `main`:
  - `feat/nome-descritivo` — nova funcionalidade
  - `fix/nome-do-bug` — correção de bug
  - `docs/o-que-mudou` — documentação de dev
  - `content/o-que-mudou` — conteúdo do portal (docs/*.md)
- Commits atômicos e frequentes na branch.
- Ao terminar: abrir **Pull Request** para `main` com descrição clara do que mudou e por quê.
- Merge para `main` após revisão (ou auto-merge em trabalho solo).
- Deletar a branch após merge.

## Tipos
- `feat` — nova funcionalidade ou conteúdo (nova seção, nova ficha de curso, novo agente/skill)
- `fix` — correção de bug
- `docs` — documentação de dev (arquitetura, backlog, identidade visual, CLAUDE.md)
- `content` — conteúdo do portal (dados em docs/*.md, fichas de curso)
- `style` — mudança visual/estilística sem alteração de lógica
- `refactor` — refatoração sem fix nem feature
- `test` — adição/correção de testes
- `chore` — tooling, dependências, configuração

## Escopos
Use a área do repo mais afetada:
- `backend` — `backend/`
- `frontend` — `frontend/`
- `content` — `docs/*.md` (dados institucionais servidos pela API)
- `docs` — `docs/arquitetura.md`, `docs/product-backlog.md`, `docs/identidade-visual.md`, `CLAUDE.md`, `README.md`
- `agents` — `.claude/agents`, `.claude/skills`, `.claude/commands`
- `deps` — mudanças de dependências (`requirements.txt`, `package.json`)
- `config` — arquivos de configuração (`.env.example`, `vite.config.ts`, etc.)

## Regras
- Linha de assunto: imperativo em português ("adiciona", não "adicionado"), sem ponto final, ≤ 72 chars.
  - ex: `feat(backend): adiciona loader de Markdown com mapa slug→arquivo`
  - ex: `content(content): preenche coordenações do CTC com fonte oficial`
  - ex: `docs(docs): atualiza arquitetura com ADR-8`
- Corpo (quando necessário): explicar **por que**, não apenas o quê — referenciar o ID do backlog se relevante (ex: `Resolve B-31`).
- Uma mudança lógica por commit — não misturar atualização de conteúdo com mudança de código.
