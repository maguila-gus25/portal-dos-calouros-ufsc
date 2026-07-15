# Como contribuir

Obrigado por ajudar a construir o **Portal dos Calouros UFSC**! 🎉
O maior valor que você pode agregar agora é **preencher os campos `_A preencher_`
com informação verificada** ou corrigir algo desatualizado.

## Regra de ouro: sempre com fonte

- Só publique um dado (telefone, e-mail, @, data, valor) se ele vier de uma
  **fonte oficial ou verificável**: página da UFSC, site da coordenação, perfil
  oficial no Instagram, calendário acadêmico, etc.
- **Cite a fonte** no Pull Request (cole o link).
- Na dúvida, deixe `_A preencher_`. Melhor faltar do que estar errado.
- **Nunca** copie dados de grupos de WhatsApp/Telegram como se fossem oficiais.

## Como editar

1. Faça um **fork** do repositório (ou crie um branch, se tiver acesso).
2. Edite o arquivo em `docs/` correspondente ao tema.
   - Para adicionar um curso novo: copie [`docs/_modelo-curso.md`](docs/_modelo-curso.md)
     para `docs/cursos/<nome-do-curso>.md`.
3. Faça o commit com uma mensagem clara (ex.: `Preenche coordenação de Eng. Civil`).
4. Abra um **Pull Request** descrevendo o que mudou e **de onde tirou a informação**.

Não sabe usar Git? Você pode editar direto pela interface do GitHub (botão de
lápis no arquivo) — ele cria o fork e o Pull Request para você.

## Padrões de conteúdo

- **Linguagem de calouro:** explique as siglas na primeira vez (ex.: "RU
  (Restaurante Universitário)").
- **Mobile-first:** frases curtas, tabelas enxutas, sem parágrafos gigantes.
- **Um tema por arquivo:** mantenha cada assunto no seu `docs/*.md`.
- **Sem dados sensíveis de terceiros:** não publique telefone/endereço pessoal de
  ninguém sem consentimento.
- **Tom acolhedor e neutro:** o portal é para todo mundo que está chegando.

## Como enviar sua história de veterano

Se você já passou por um semestre na UFSC e quer ajudar quem está chegando,
compartilhe um relato. É rápido e não precisa saber usar Git:

1. Abra uma [issue "Compartilhar história de veterano"](../../issues/new?template=historia-veterano.yml)
   no repositório.
2. Preencha o formulário (título, curso, relato). Pode ser anônimo.
3. Pronto — a equipe inclui no arquivo `docs/historias-e-feedbacks.md` e fecha a issue.

**O que contar:** o que te pegou de surpresa, o que te ajudou, um conselho para
quem está chegando. Sem tamanho mínimo — uma frase já vale.

## O que precisa de gente agora

Veja o [Roadmap no README](README.md#roadmap). Prioridades:
1. **Histórias de veteranos** — qualquer curso, qualquer semestre.
2. Dicas por curso nas fichas em `docs/cursos/<curso>.md` (campos `dicas_veterano`).
3. Verificar se os contatos das coordenações ainda estão corretos.
4. Testar e reportar links quebrados.

## Dúvidas

Abra uma **issue** no repositório descrevendo sua dúvida ou sugestão.

---

Este é um projeto **não oficial**, feito por estudantes. Informações oficiais
devem sempre ser confirmadas nos canais da UFSC.
