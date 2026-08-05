import { HelpCircle } from "lucide-react";
import type { SectionBlock } from "@/lib/content";
import { linkifyContacts } from "./contactUtils";
import { ProseBlockGroup } from "./ProseBlocks";

type HeadingBlock = Extract<SectionBlock, { type: "heading" }>;
type ParagraphBlock = Extract<SectionBlock, { type: "paragraph" }>;

interface FaqCategory {
  heading: HeadingBlock;
  questions: FaqQuestion[];
  /** blocks that are part of this category but don't belong to a H3 question */
  preamble: SectionBlock[];
}

interface FaqQuestion {
  heading: HeadingBlock;
  body: SectionBlock[];
}

/**
 * Splits the block list into FAQ categories (H2) and their questions (H3).
 * Blocks before the first H2 are collected as a preamble rendered via ProseBlocks.
 */
function parseFaqStructure(blocks: SectionBlock[]): {
  preamble: SectionBlock[];
  categories: FaqCategory[];
} {
  const preamble: SectionBlock[] = [];
  const categories: FaqCategory[] = [];

  let currentCategory: FaqCategory | null = null;
  let currentQuestion: FaqQuestion | null = null;

  const flushQuestion = () => {
    if (currentQuestion && currentCategory) {
      currentCategory.questions.push(currentQuestion);
      currentQuestion = null;
    }
  };

  const flushCategory = () => {
    flushQuestion();
    if (currentCategory) {
      categories.push(currentCategory);
      currentCategory = null;
    }
  };

  for (const block of blocks) {
    if (block.type === "heading" && block.depth === 2) {
      flushCategory();
      currentCategory = { heading: block as HeadingBlock, questions: [], preamble: [] };
    } else if (block.type === "heading" && block.depth === 3) {
      flushQuestion();
      if (currentCategory) {
        currentQuestion = { heading: block as HeadingBlock, body: [] };
      } else {
        // H3 before any H2 — treat as prose preamble
        preamble.push(block);
      }
    } else {
      if (currentQuestion) {
        currentQuestion.body.push(block);
      } else if (currentCategory) {
        currentCategory.preamble.push(block);
      } else {
        preamble.push(block);
      }
    }
  }

  flushCategory();

  return { preamble, categories };
}

/**
 * Dedicated UI for the "FAQ — Perguntas frequentes" section.
 * H2 headings become category labels; H3 headings (questions) + their following
 * paragraphs become visual Q&A cards. Blocks that don't fit that pattern fall
 * back to ProseBlocks.
 */
export function FaqSection({ blocks }: { blocks: SectionBlock[] }) {
  const { preamble, categories } = parseFaqStructure(blocks);

  return (
    <div className="space-y-8">
      {preamble.length > 0 && <ProseBlockGroup blocks={preamble} />}

      {categories.map((category, ci) => (
        <section key={ci} aria-labelledby={`faq-cat-${ci}`}>
          <h2
            id={`faq-cat-${ci}`}
            className="text-base font-bold text-muted-foreground uppercase tracking-wide mb-3 px-1"
            dangerouslySetInnerHTML={{ __html: category.heading.html }}
          />

          {category.preamble.length > 0 && (
            <ProseBlockGroup blocks={category.preamble} />
          )}

          {category.questions.length > 0 && (
            <ul className="space-y-3">
              {category.questions.map((q, qi) => (
                <FaqCard key={qi} question={q} />
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function FaqCard({ question }: { question: FaqQuestion }) {
  const { heading, body } = question;

  // Separate blockquote "source" callouts from main body paragraphs
  const mainBody = body.filter((b) => b.type !== "blockquote" && b.type !== "hr");
  const sources = body.filter((b) => b.type === "blockquote");

  return (
    <li className="card p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span
          className="section-icon-wrapper icon-blue flex-shrink-0 mt-0.5"
          aria-hidden
        >
          <HelpCircle size={16} />
        </span>

        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold text-base text-foreground leading-snug mb-2"
            dangerouslySetInnerHTML={{ __html: heading.html }}
          />

          <div className="space-y-2 text-sm text-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_code]:bg-muted [&_code]:px-1 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono">
            {mainBody.map((block, i) => (
              <FaqBodyBlock key={i} block={block} />
            ))}
          </div>

          {sources.map((block, i) =>
            block.type === "blockquote" ? (
              <p
                key={i}
                className="mt-3 text-xs text-muted-foreground border-l-2 border-border pl-3 leading-relaxed [&_a]:text-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: linkifyContacts(block.html) }}
              />
            ) : null
          )}
        </div>
      </div>
    </li>
  );
}

function FaqBodyBlock({ block }: { block: SectionBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p dangerouslySetInnerHTML={{ __html: linkifyContacts((block as ParagraphBlock).html) }} />
      );
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
    default:
      return null;
  }
}
