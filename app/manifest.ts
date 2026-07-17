import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portal dos Calouros UFSC — CTC",
    short_name: "Calouros UFSC",
    description: "Guia feito por estudantes para calouros do CTC da UFSC.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FF",
    theme_color: "#1877F2",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
