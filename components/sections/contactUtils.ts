/**
 * Small, self-contained helpers used by section components to turn plain-text contacts
 * (URLs, phone numbers, e-mails) found in the parsed markdown into direct actions
 * (external link / tel: / mailto:). Nothing here duplicates content — it only detects
 * patterns already present in docs/*.md.
 */

export interface Contacts {
  urls: string[];
  phones: string[];
  emails: string[];
}

const URL_RE = /https?:\/\/[^\s)>\]]+/g;
const PHONE_RE = /\(\d{2}\)\s?\d{4,5}[\s-]?\d{4}/g;
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[a-z.]{2,}/gi;
// Matches already-rendered <a ...>...</a> tags so we never linkify text inside them.
const ANCHOR_RE = /(<a\b[^>]*>[\s\S]*?<\/a>)/gi;

function dedupe(values: string[]): string[] {
  return Array.from(new Set(values));
}

/** Extracts URLs/phones/e-mails found in a raw markdown/plain-text string. */
export function extractContacts(text: string): Contacts {
  const urls = dedupe(
    Array.from(text.matchAll(URL_RE)).map((m) => m[0].replace(/[)>\].,;]+$/, ""))
  );
  const phones = dedupe(Array.from(text.matchAll(PHONE_RE)).map((m) => m[0]));
  const emails = dedupe(Array.from(text.matchAll(EMAIL_RE)).map((m) => m[0]));
  return { urls, phones, emails };
}

/** Returns a short, human-friendly label for a URL (its hostname, without "www."). */
export function hostnameLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Walks an HTML string (already rendered from markdown) and turns bare phone numbers and
 * e-mail addresses that aren't already inside an <a> tag into tel:/mailto: links.
 */
export function linkifyContacts(html: string): string {
  return html
    .split(ANCHOR_RE)
    .map((part, i) => (i % 2 === 1 ? part : linkifyPlainSegment(part)))
    .join("");
}

function linkifyPlainSegment(segment: string): string {
  return segment
    .replace(PHONE_RE, (m) => `<a href="tel:${m.replace(/[^\d+]/g, "")}">${m}</a>`)
    .replace(EMAIL_RE, (m) => `<a href="mailto:${m}">${m}</a>`);
}
