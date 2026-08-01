import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal dos Calouros UFSC",
  description: "Guia feito por estudantes para calouros da UFSC (Florianópolis). Coordenações, RU, links, datas, atléticas e muito mais.",
  openGraph: {
    title: "Portal dos Calouros UFSC",
    description: "Guia feito por estudantes para calouros da UFSC (Florianópolis). Coordenações, RU, links, datas, atléticas e muito mais.",
    url: "https://portal-dos-calouros-ufsc.vercel.app",
    siteName: "Portal dos Calouros UFSC",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1877F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
