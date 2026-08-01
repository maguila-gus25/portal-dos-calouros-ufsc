import { ExternalLink, Mail, Phone } from "lucide-react";
import type { InlineContent, SectionBlock } from "@/lib/content";
import { extractContacts, hostnameLabel } from "./contactUtils";

type TableBlock = Extract<SectionBlock, { type: "table" }>;

interface LinkCard {
  title: InlineContent;
  description?: InlineContent;
  urls: string[];
  phones: string[];
  emails: string[];
}

function buildCard(row: InlineContent[]): LinkCard {
  const title = row[0];
  const description = row.length > 2 ? row[row.length - 2] : undefined;
  const actionCell = row[row.length - 1];
  const contacts = extractContacts(actionCell?.text ?? "");
  return { title, description, ...contacts };
}

/** Renders a markdown table (e.g. "O que é | Link") as a grid of link/contact cards. */
export function LinkCardGrid({ table }: { table: TableBlock }) {
  const cards = table.rows.map(buildCard);

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {cards.map((card, i) => (
        <li key={i} className="card p-4 flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <div className="section-icon-wrapper icon-blue !w-9 !h-9 mt-0.5">
              <ExternalLink size={16} aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-sm text-foreground leading-snug"
                dangerouslySetInnerHTML={{ __html: card.title.html }}
              />
              {card.description && (
                <p
                  className="text-xs text-muted-foreground mt-0.5 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.description.html }}
                />
              )}
            </div>
          </div>

          {(card.urls.length > 0 || card.phones.length > 0 || card.emails.length > 0) && (
            <div className="flex flex-wrap gap-2 pt-1">
              {card.urls.map((url, idx) => (
                <a
                  key={`url-${idx}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full px-3 py-1.5 min-h-[32px] transition-colors"
                >
                  <ExternalLink size={12} aria-hidden />
                  {hostnameLabel(url)}
                </a>
              ))}
              {card.phones.map((phone, idx) => (
                <a
                  key={`phone-${idx}`}
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground bg-muted hover:bg-border rounded-full px-3 py-1.5 min-h-[32px] transition-colors"
                >
                  <Phone size={12} aria-hidden />
                  {phone}
                </a>
              ))}
              {card.emails.map((email, idx) => (
                <a
                  key={`email-${idx}`}
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground bg-muted hover:bg-border rounded-full px-3 py-1.5 min-h-[32px] transition-colors break-all"
                >
                  <Mail size={12} aria-hidden />
                  {email}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
