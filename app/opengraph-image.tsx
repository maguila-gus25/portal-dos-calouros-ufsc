import { ImageResponse } from "next/og";

/**
 * Cartão de preview para WhatsApp/Discord/Twitter (convenção `app/opengraph-image.tsx`).
 * Next injeta o `og:image` (e, como o card é `summary_large_image`, também o
 * `twitter:image`) a partir deste arquivo — não precisa (e não deve) ser
 * declarado manualmente em `app/layout.tsx`.
 *
 * Fora de escopo: cartão dinâmico por curso/centro (B-80 cobre só o card padrão
 * do site). Sem `fetch` de fonte — usa a fonte padrão do Satori/ImageResponse.
 */

export const alt =
  "Portal dos Calouros UFSC — guia feito por estudantes para calouros da UFSC em Florianópolis. Projeto independente, não é um site oficial da UFSC.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #156bf4 0%, #8c35e3 100%)",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.16)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 66,
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: -1,
          }}
        >
          Portal dos Calouros UFSC
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            fontWeight: 500,
            textAlign: "center",
            opacity: 0.95,
            maxWidth: 920,
          }}
        >
          Guia feito por estudantes para calouros da UFSC — Florianópolis
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 22,
            fontWeight: 500,
            textAlign: "center",
            opacity: 0.78,
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          Projeto independente. Não é um site oficial da UFSC.
        </div>
      </div>
    ),
    { ...size }
  );
}
