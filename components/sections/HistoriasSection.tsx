import { MessageCircleHeart, Quote } from "lucide-react";
import type { SectionBlock } from "@/lib/content";
import { ProseBlock, ProseBlockGroup } from "./ProseBlocks";

type HeadingBlock = Extract<SectionBlock, { type: "heading" }>;

interface Chapter {
  heading?: HeadingBlock;
  body: SectionBlock[];
}

interface Story {
  heading: HeadingBlock;
  body: SectionBlock[];
}

/** Splits a flat block list into chapters at every heading of the given depth. */
function splitByHeadingDepth(blocks: SectionBlock[], depth: number): Chapter[] {
  const chapters: Chapter[] = [];
  let current: Chapter = { body: [] };

  for (const block of blocks) {
    if (block.type === "heading" && block.depth === depth) {
      if (current.heading || current.body.length > 0) chapters.push(current);
      current = { heading: block, body: [] };
    } else {
      current.body.push(block);
    }
  }
  if (current.heading || current.body.length > 0) chapters.push(current);

  return chapters;
}

/**
 * Dedicated UI for "histórias e feedbacks": the "Histórias" chapter is parsed for individual
 * veteran stories (each one following the documented template — a level-3 heading with the
 * "Curso / ano" + "Autoria" list, then the free-text account) and rendered as highlighted
 * cards. While no stories have been published yet, an empty state is shown instead. Every
 * other chapter (como enviar, modelo, feedback do portal) keeps the existing prose styling.
 */
export function HistoriasSection({ blocks }: { blocks: SectionBlock[] }) {
  const chapters = splitByHeadingDepth(blocks, 2);

  return (
    <div className="space-y-6">
      {chapters.map((chapter, i) => {
        const isStoriesChapter = chapter.heading?.text.trim().toLowerCase() === "histórias";
        if (isStoriesChapter) {
          return <StoriesChapter key={i} heading={chapter.heading} body={chapter.body} />;
        }
        const fullBlocks = chapter.heading ? [chapter.heading, ...chapter.body] : chapter.body;
        return <ProseBlockGroup key={i} blocks={fullBlocks} />;
      })}
    </div>
  );
}

function StoriesChapter({ heading, body }: { heading?: HeadingBlock; body: SectionBlock[] }) {
  const stories = splitByHeadingDepth(body, 3).filter((chapter): chapter is Story => Boolean(chapter.heading));

  return (
    <section className="space-y-4">
      {heading && (
        <h2 className="text-lg font-bold text-foreground" dangerouslySetInnerHTML={{ __html: heading.html }} />
      )}

      {stories.length === 0 ? (
        <div className="card p-6 sm:p-8 text-center">
          <div className="section-icon-wrapper icon-blue mx-auto">
            <MessageCircleHeart size={20} aria-hidden />
          </div>
          <div className="mt-3 prose-content [&_p]:text-center [&_blockquote]:text-center [&_blockquote]:border-none [&_blockquote]:m-0 [&_blockquote]:text-muted-foreground">
            {body.map((block, i) => (
              <ProseBlock key={i} block={block} />
            ))}
          </div>
        </div>
      ) : (
        <ul className="space-y-4">
          {stories.map((story, i) => (
            <li key={i} className="card p-5 sm:p-6 border-l-4 border-primary/50">
              <div className="flex items-start gap-3">
                <Quote size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden />
                <div className="flex-1 min-w-0 space-y-2">
                  <h3
                    className="font-semibold text-base text-foreground leading-snug"
                    dangerouslySetInnerHTML={{ __html: story.heading.html }}
                  />
                  <div className="prose-content text-sm">
                    {story.body.map((block, bi) => (
                      <ProseBlock key={bi} block={block} />
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
