import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portal dos Calouros UFSC — CTC",
  description: "Guia feito por estudantes para calouros do CTC da UFSC. Coordenações, RU, links, datas, atléticas e muito mais.",
  openGraph: {
    title: "Portal dos Calouros UFSC — CTC",
    description: "Guia feito por estudantes para calouros do CTC da UFSC. Coordenações, RU, links, datas, atléticas e muito mais.",
    url: "https://portal-dos-calouros-ufsc.vercel.app",
    siteName: "Portal dos Calouros UFSC",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-blue focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Providers>
          <div className="min-h-screen flex flex-col bg-bg-app text-ink-primary">
            <Header />
            <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
