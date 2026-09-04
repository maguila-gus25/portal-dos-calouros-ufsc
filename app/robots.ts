import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Os crawlers de IA são liberados de propósito. O portal existe para que o
 * calouro ache a resposta — e cada vez mais ele pergunta ao ChatGPT ou ao
 * Perplexity em vez de buscar no Google. Ser citado por eles é o objetivo,
 * não um efeito colateral a evitar.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // As rotas de API servem o mesmo conteúdo das páginas em JSON.
        // Indexá-las gera conteúdo duplicado sem valor para o leitor.
        disallow: "/api/",
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
