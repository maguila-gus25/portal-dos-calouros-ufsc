import { Calendar } from "lucide-react";
import type { SectionBlock } from "@/lib/content";
import { linkifyContacts } from "./contactUtils";
import { groupBlocks, ProseBlockGroup } from "./ProseBlocks";

type TableBlock = Extract<SectionBlock, { type: "table" }>;

/**
 * Dedicated UI for "datas importantes": wide markdown tables (which force horizontal
 * scrolling on a phone) become a vertical timeline of cards — first column as the
 * highlighted date/period, remaining columns as labelled details.
 */
export function DatasSection({ blocks }: { blocks: SectionBlock[] }) {
  const groups = groupBlocks(blocks, (block) => block.type === "table");

  return (
    <div className="space-y-6">
      {groups.map((group, i) =>
        group.kind === "special" && group.block.type === "table" ? (
          <DatesTimeline key={i} table={group.block} />
        ) : (
          <ProseBlockGroup key={i} blocks={group.kind === "prose" ? group.blocks : []} />
        )
      )}
    </div>
  );
}

function DatesTimeline({ table }: { table: TableBlock }) {
  return (
    <ol className="relative border-l-2 border-primary/20 ml-3 space-y-3">
      {table.rows.map((row, i) => (
        <li key={i} className="relative pl-6">
          <span
            className="absolute -left-[0.95rem] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground"
            aria-hidden
          >
            <Calendar size={12} />
          </span>
          <div className="card p-3 sm:p-4">
            <p
              className="font-semibold text-sm text-foreground leading-snug"
              dangerouslySetInnerHTML={{ __html: linkifyContacts(row[0]?.html ?? "") }}
            />
            {row.length > 1 && (
              <dl className="mt-2 space-y-1">
                {row.slice(1).map((cell, ci) => {
                  const label = table.header[ci + 1]?.text;
                  return (
                    <div key={ci} className="flex flex-wrap gap-x-1.5 text-xs">
                      {label && <dt className="text-muted-foreground font-medium">{label}:</dt>}
                      <dd
                        className="text-foreground"
                        dangerouslySetInnerHTML={{ __html: linkifyContacts(cell.html) }}
                      />
                    </div>
                  );
                })}
              </dl>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
