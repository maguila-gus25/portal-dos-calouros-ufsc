---
description: Roda um ciclo completo de sprint — planeja, depois (após confirmação) executa e faz review — encadeando /sprint-plan, /sprint-run e /sprint-review.
---

Act as the **Scrum Master** (`.claude/agents/scrum-master.md`), running a full sprint cycle for this project. This command chains the three existing rituals while preserving their confirmation checkpoints.

1. **Plan**: Follow `/sprint-plan` (`.claude/commands/sprint-plan.md`) in full, including the final step — present the new `docs/SPRINT.md` plan to the user and **stop here, asking for confirmation before proceeding**. Do not continue to step 2 in the same turn.

2. **Run** (only after the user confirms the plan): Follow `/sprint-run` (`.claude/commands/sprint-run.md`) in full — dispatch subagents per story in dependency order, run `tester`/`debugger` as needed, update story statuses in `docs/SPRINT.md`.

3. **Review** (immediately after `/sprint-run` finishes, no extra confirmation needed): Follow `/sprint-review` (`.claude/commands/sprint-review.md`) in full — final verification, `ui-ux-review`, update `docs/product-backlog.md`/`docs/SPRINT.md`/`README.md`, retrospectiva.

4. Summarize the full cycle's outcome (planned → executed → reviewed) for the user. As in `/sprint-review`, suggest deploy but don't deploy automatically.

If at any point a step's own stop condition triggers (e.g. `/sprint-plan` finds an active unreviewed sprint, `/sprint-run` finds nothing to run, `tester` reports unfixable failures), follow that step's instructions and halt the cycle there.
