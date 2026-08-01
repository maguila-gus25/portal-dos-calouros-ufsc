import { TriangleAlert } from "lucide-react";
import type { SectionBlock } from "@/lib/content";
import { linkifyContacts } from "./contactUtils";
import { LinkCardGrid } from "./LinkCardGrid";
import { groupBlocks, ProseBlockGroup } from "./ProseBlocks";

type ListBlock = Extract<SectionBlock, { type: "list" }>;
type BlockquoteBlock = Extract<SectionBlock, { type: "blockquote" }>;
type TableBlock = Extract<SectionBlock, { type: "table" }>;

/**
 * Dedicated UI for the "carteira do RU" guide: numbered steps for the ordered "como se
 * cadastrar" list, an alert box for callouts/warnings, and link cards for the official links
 * table. Everything else falls back to the existing prose styling.
 */
export function RuSection({ blocks }: { blocks: SectionBlock[] }) {
  const groups = groupBlocks(
    blocks,
    (block) => block.type === "table" || block.type === "blockquote" || (block.type === "list" && block.ordered)
  );

  return (
    <div className="space-y-6">
      {groups.map((group, i) => {
        if (group.kind === "prose") return <ProseBlockGroup key={i} blocks={group.blocks} />;
        const block = group.block;
        if (block.type === "table") return <LinkCardGrid key={i} table={block as TableBlock} />;
        if (block.type === "list") return <Steps key={i} list={block as ListBlock} />;
        if (block.type === "blockquote") return <Alert key={i} block={block as BlockquoteBlock} />;
        return null;
      })}
    </div>
  );
}

function Steps({ list }: { list: ListBlock }) {
  return (
    <ol className="space-y-3">
      {list.items.map((item, i) => (
        <li key={i} className="card p-3 sm:p-4 flex gap-3 items-start">
          <span
            className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold"
            aria-hidden
          >
            {i + 1}
          </span>
          <div
            className="flex-1 pt-0.5 text-sm text-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: linkifyContacts(item.html) }}
          />
        </li>
      ))}
    </ol>
  );
}

function Alert({ block }: { block: BlockquoteBlock }) {
  return (
    <div
      role="note"
      className="rounded-lg border border-amber-300/60 bg-amber-50 dark:bg-amber-500/10 dark:border-amber-500/30 p-4 flex gap-3"
    >
      <TriangleAlert size={18} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden />
      <div
        className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed [&_p]:my-1 [&_a]:underline [&_a]:font-medium"
        dangerouslySetInnerHTML={{ __html: linkifyContacts(block.html) }}
      />
    </div>
  );
}
