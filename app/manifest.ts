import type { MetadataRoute } from "next";

// PWA manifest idiomático do Next.js 15 App Router: gera /manifest.webmanifest e
// injeta o <link rel="manifest"> automaticamente (sem metadata.manifest no layout).
// Fonte única do manifest — não duplicar com public/manifest.json.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portal dos Calouros UFSC",
    short_name: "Calouros UFSC",
    description: "Guia feito por estudantes para calouros do CTC da UFSC.",
    start_url: "/",
    display: "standalone",
    background_color: "#F0F2F5",
    theme_color: "#1877F2",
    lang: "pt-BR",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml", purpose: "any" },
      { src: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
