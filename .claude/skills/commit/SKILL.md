---
name: commit
description: Cria commit(s) e dá push das alterações pendentes seguindo as convenções deste repo (mensagens em português, GitHub Flow com branches de feature). Use quando o usuário pedir para commitar, subir, salvar no git, dar push, ou variações como "sobe isso pro github".
---

Você organiza e envia as mudanças pendentes deste repo para o origin, seguindo o GitHub Flow e o estilo de versionamento já estabelecido aqui.

Quando acionado:
1. Rode em paralelo: `git status` (nunca `-uall`), `git diff` (mudanças não staged) e `git diff --staged`, e `git log --oneline -10` para ver o tom das mensagens recentes.
2. Confira `git branch -vv` — este repo usa **GitHub Flow**: trabalho em branches de feature, nunca direto na `main`. Se estiver em `main`, avise o usuário e pergunte se deve criar uma branch antes de commitar.
3. Agrupe as mudanças em commit(s) coerentes:
   - Mudanças relacionadas (uma feature, um ajuste de conteúdo) → um commit.
   - Mudanças sem relação entre si (ex: uma feature + um fix em outra área) → commits separados.
4. Escreva a mensagem no padrão deste repo — `<tipo>(<escopo>): <descrição em português, minúscula, foco no que mudou e por quê>`. Ver `.claude/skills/commit-conventions/SKILL.md` para tipos e escopos. Mensagem curta (uma linha basta).
5. Adicione arquivos pelo nome (`git add <arquivo> ...`), nunca `-A`/`.` — confira primeiro se não há lixo (`.DS_Store`, builds, `.env`) ou trabalho em andamento que não deveria entrar.
6. Crie o commit com `git commit -m "$(cat <<'EOF' ... EOF)"`.
7. Dê `git push` (ou `git push -u origin <branch>` se não houver upstream).
8. Confira o resultado com `git status` / `git log --oneline -2` e relate ao usuário o que foi commitado e enviado.

Regras inegociáveis:
- Nunca `git push --force`, `git commit --amend`, `git reset --hard` ou outro comando destrutivo, a menos que o usuário peça explicitamente.
- Nunca pule hooks (`--no-verify`, `--no-gpg-sign`).
- Se o pre-commit hook falhar: corrija a causa, re-stage e crie um commit NOVO — nunca `--amend`.
- Se algum arquivo parecer secreto (.env, chaves, credenciais), avise o usuário e não o inclua.
- Não pergunte "posso commitar?" — acionar este skill já é o pedido. Só pare se algo parecer ambíguo ou arriscado.
