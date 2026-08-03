import { ExternalLink, Instagram as InstagramIcon } from "lucide-react";
import type { InlineContent, SectionBlock } from "@/lib/content";
import { extractContacts } from "./contactUtils";
import { groupBlocks, ProseBlockGroup } from "./ProseBlocks";

type TableBlock = Extract<SectionBlock, { type: "table" }>;

type Badge = "Oficial" | "Estudantil";

const HANDLE_RE = /@[\w.]+/;

interface ProfileCard {
  name: InlineContent;
  description?: InlineContent;
  handle?: string;
  url?: string;
  fallbackHtml?: string;
}

function lastHeadingText(blocks: SectionBlock[]): string | undefined {
  for (let i = blocks.length - 1; i >= 0; i--) {
    const block = blocks[i];
    if (block.type === "heading") return block.text;
  }
  return undefined;
}

function badgeForHeading(heading?: string): Badge | undefined {
  if (!heading) return undefined;
  // Matches "oficial"/"oficiais" (stem "oficia"), e.g. the "Oficiais da universidade" heading.
  return heading.toLowerCase().includes("oficia") ? "Oficial" : "Estudantil";
}

function buildProfile(row: InlineContent[]): ProfileCard {
  const name = row[0];
  const description = row.length > 2 ? row[1] : undefined;
  const profileCell = row[row.length - 1];
  const handleMatch = profileCell.text.match(HANDLE_RE);
  const { urls } = extractContacts(profileCell.text);
  const handle = handleMatch ? handleMatch[0] : undefined;
  const url = urls[0];
  return {
    name,
    description,
    handle,
    url,
    fallbackHtml: !handle && !url ? profileCell.html : undefined,
  };
}

/**
 * Dedicated UI for "instagrams e perfis": each markdown table (oficiais, estudantil,
 * atléticas…) becomes a grid of profile cards — name, @handle, a direct link to Instagram
 * and a badge distinguishing official vs. student-run profiles (derived from the nearest
 * preceding heading). Everything else keeps the existing prose styling.
 */
export function InstagramSection({ blocks }: { blocks: SectionBlock[] }) {
  const groups = groupBlocks(blocks, (block) => block.type === "table");
  let currentHeading: string | undefined;

  return (
    <div className="space-y-6">
      {groups.map((group, i) => {
        if (group.kind === "prose") {
          currentHeading = lastHeadingText(group.blocks) ?? currentHeading;
          return <ProseBlockGroup key={i} blocks={group.blocks} />;
        }
        return <ProfileGrid key={i} table={group.block as TableBlock} badge={badgeForHeading(currentHeading)} />;
      })}
    </div>
  );
}

function ProfileGrid({ table, badge }: { table: TableBlock; badge?: Badge }) {
  const profiles = table.rows.map(buildProfile);

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {profiles.map((profile, i) => (
        <li key={i} className="card p-4 flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <div className="section-icon-wrapper icon-blue !w-9 !h-9 mt-0.5 flex-shrink-0">
              <InstagramIcon size={16} aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p
                  className="font-semibold text-sm text-foreground leading-snug"
                  dangerouslySetInnerHTML={{ __html: profile.name.html }}
                />
                {badge && (
                  <span
                    className={
                      badge === "Oficial"
                        ? "text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        : "text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-foreground"
                    }
                  >
                    {badge}
                  </span>
                )}
              </div>
              {profile.description && (
                <p
                  className="text-xs text-muted-foreground mt-0.5 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: profile.description.html }}
                />
              )}
            </div>
          </div>

          {profile.url ? (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full px-3 py-2 min-h-[44px] transition-colors self-start"
            >
              <ExternalLink size={12} aria-hidden />
              {profile.handle ?? "Ver perfil"}
            </a>
          ) : profile.handle ? (
            <span className="text-xs font-medium text-muted-foreground px-1">{profile.handle}</span>
          ) : (
            profile.fallbackHtml && (
              <p
                className="text-xs text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: profile.fallbackHtml }}
              />
            )
          )}
        </li>
      ))}
    </ul>
  );
}
