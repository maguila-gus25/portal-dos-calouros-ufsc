import type { SectionBlock } from "@/lib/content";
import { LinkCardGrid } from "./LinkCardGrid";
import { groupBlocks, ProseBlockGroup } from "./ProseBlocks";

/** Dedicated UI for the "links importantes" section: markdown tables become grids of link cards. */
export function LinksSection({ blocks }: { blocks: SectionBlock[] }) {
  const groups = groupBlocks(blocks, (block) => block.type === "table");

  return (
    <div className="space-y-6">
      {groups.map((group, i) =>
        group.kind === "special" && group.block.type === "table" ? (
          <LinkCardGrid key={i} table={group.block} />
        ) : (
          <ProseBlockGroup key={i} blocks={group.kind === "prose" ? group.blocks : []} />
        )
      )}
    </div>
  );
}
