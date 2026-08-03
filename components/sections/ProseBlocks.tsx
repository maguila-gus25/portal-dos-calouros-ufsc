import type { JSX } from "react";
import type { SectionBlock } from "@/lib/content";
import { linkifyContacts } from "./contactUtils";

export type BlockGroup =
  | { kind: "special"; block: SectionBlock }
  | { kind: "prose"; blocks: SectionBlock[] };

/**
 * Splits a flat block list into runs: blocks matched by `isSpecial` become their own
 * "special" group (for a section component to render with dedicated UI), everything else
 * is batched into consecutive "prose" groups rendered with the existing `.prose-content` look.
 */
export function groupBlocks(blocks: SectionBlock[], isSpecial: (block: SectionBlock) => boolean): BlockGroup[] {
  const groups: BlockGroup[] = [];
  let buffer: SectionBlock[] = [];

  const flush = () => {
    if (buffer.length > 0) {
      groups.push({ kind: "prose", blocks: buffer });
      buffer = [];
    }
  };

  for (const block of blocks) {
    if (isSpecial(block)) {
      flush();
      groups.push({ kind: "special", block });
    } else {
      buffer.push(block);
    }
  }
  flush();

  return groups;
}

/** Fallback renderer for blocks without a dedicated component — reuses `.prose-content` styling. */
export function ProseBlockGroup({ blocks }: { blocks: SectionBlock[] }) {
  if (blocks.length === 0) return null;
  return (
    <div className="card p-5 sm:p-6">
      <div className="prose-content">
        {blocks.map((block, i) => (
          <ProseBlock key={i} block={block} />
        ))}
      </div>
    </div>
  );
}

/** Renders a single block using the same markup as `ProseBlockGroup`, without the wrapping card — for section components that need their own layout/highlighting around individual blocks. */
export function ProseBlock({ block }: { block: SectionBlock }) {
  switch (block.type) {
    case "heading": {
      const Tag = `h${Math.min(block.depth, 6)}` as keyof JSX.IntrinsicElements;
      return <Tag dangerouslySetInnerHTML={{ __html: linkifyContacts(block.html) }} />;
    }
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: linkifyContacts(block.html) }} />;
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: linkifyContacts(item.html) }} />
          ))}
        </ListTag>
      );
    }
    case "table":
      return (
        <table>
          <thead>
            <tr>
              {block.header.map((cell, i) => (
                <th key={i} dangerouslySetInnerHTML={{ __html: cell.html }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} dangerouslySetInnerHTML={{ __html: linkifyContacts(cell.html) }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "blockquote":
      return <blockquote dangerouslySetInnerHTML={{ __html: linkifyContacts(block.html) }} />;
    case "code":
      return (
        <pre>
          <code>{block.text}</code>
        </pre>
      );
    case "hr":
      return <hr />;
    default:
      return null;
  }
}
