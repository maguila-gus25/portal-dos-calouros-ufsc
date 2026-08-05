import { CheckCircle2 } from "lucide-react";
import type { SectionBlock } from "@/lib/content";
import { linkifyContacts } from "./contactUtils";
import { ProseBlock, ProseBlockGroup } from "./ProseBlocks";

type HeadingBlock = Extract<SectionBlock, { type: "heading" }>;
type ListBlock = Extract<SectionBlock, { type: "list" }>;

interface ChecklistPhase {
  heading?: HeadingBlock;
  body: SectionBlock[];
}

/**
 * Splits the flat block list into phases delimited by H2 headings.
 * Blocks that appear before the first H2 end up in a preamble phase (no heading).
 */
function splitByH2(blocks: SectionBlock[]): ChecklistPhase[] {
  const phases: ChecklistPhase[] = [];
  let current: ChecklistPhase = { body: [] };

  for (const block of blocks) {
    if (block.type === "heading" && block.depth === 2) {
      if (current.heading || current.body.length > 0) {
        phases.push(current);
      }
      current = { heading: block as HeadingBlock, body: [] };
    } else {
      current.body.push(block);
    }
  }

  if (current.heading || current.body.length > 0) {
    phases.push(current);
  }

  return phases;
}

/**
 * Returns true when the item's rendered HTML contains a GFM task-list checkbox
 * (`<input type="checkbox"`), meaning the source was `- [ ] …` or `- [x] …`.
 */
function isTaskItem(html: string): boolean {
  return /<input[^>]+type=["']checkbox["']/i.test(html);
}

/**
 * Strips the GFM checkbox `<input …>` element from the already-rendered HTML so we can
 * render our own visual check indicator instead.
 */
function stripCheckbox(html: string): string {
  return html.replace(/<input[^>]+type=["']checkbox["'][^>]*\/?>/gi, "").trim();
}

/**
 * Dedicated UI for the "Checklist da primeira semana" section.
 * H2 headings become phase labels; unordered task-list items (`- [ ] …`) become
 * visual check cards. Non-task list items and any other blocks fall back to ProseBlocks.
 */
export function ChecklistSection({ blocks }: { blocks: SectionBlock[] }) {
  const phases = splitByH2(blocks);

  return (
    <div className="space-y-8">
      {phases.map((phase, pi) => (
        <section key={pi} aria-labelledby={phase.heading ? `cl-phase-${pi}` : undefined}>
          {phase.heading && (
            <div className="flex items-center gap-2 mb-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold" aria-hidden>
                {pi + 1}
              </span>
              <h2
                id={`cl-phase-${pi}`}
                className="text-base font-bold text-foreground"
                dangerouslySetInnerHTML={{ __html: phase.heading.html }}
              />
            </div>
          )}

          <PhaseBody blocks={phase.body} />
        </section>
      ))}
    </div>
  );
}

function PhaseBody({ blocks }: { blocks: SectionBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        if (block.type === "list" && !block.ordered) {
          // Split items: task-list items get card treatment, the rest stay as prose
          const allTaskItems = block.items.every((item) => isTaskItem(item.html));
          if (allTaskItems) {
            return <TaskCardList key={i} list={block as ListBlock} />;
          }
          // Mixed list or plain bullet list: full block as prose
          return (
            <ProseBlockGroup key={i} blocks={[block]} />
          );
        }
        // For heading blocks inside a phase body (shouldn't normally appear but be safe)
        if (block.type === "heading" || block.type === "paragraph" || block.type === "blockquote" || block.type === "hr") {
          return (
            <div key={i} className="card p-4 sm:p-5">
              <div className="prose-content">
                <ProseBlock block={block} />
              </div>
            </div>
          );
        }
        return <ProseBlockGroup key={i} blocks={[block]} />;
      })}
    </div>
  );
}

function TaskCardList({ list }: { list: ListBlock }) {
  return (
    <ul className="space-y-2">
      {list.items.map((item, i) => {
        const cleanHtml = linkifyContacts(stripCheckbox(item.html));
        return (
          <li key={i} className="card p-3 sm:p-4 flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="flex-shrink-0 text-primary mt-0.5"
              aria-hidden
            />
            <div
              className="flex-1 text-sm text-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_code]:bg-muted [&_code]:px-1 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono"
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
            />
          </li>
        );
      })}
    </ul>
  );
}
