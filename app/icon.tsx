import { ImageResponse } from "next/og";

/**
 * Favicon do portal (convenção `app/icon.tsx` do Next.js 15).
 *
 * Reaproveita o mesmo símbolo da identidade visual usado em `components/Header.tsx`
 * — quadrado com o gradiente da marca (`hero-gradient`) e um chapéu de formatura
 * branco — mas redesenhado como SVG inline porque o `ImageResponse` (Satori) não
 * renderiza componentes React como o `GraduationCap` do lucide-react, só JSX puro
 * (divs, svg, path...). Os `d` dos paths abaixo são os mesmos dados de traçado do
 * ícone `graduation-cap` do lucide-react (ISC), só que usados como markup cru.
 *
 * Sem brasão/logotipo da UFSC — é o símbolo próprio do portal.
 */

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #156bf4 0%, #8c35e3 100%)",
          borderRadius: 7,
        }}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
