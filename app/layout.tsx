import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portal dos Calouros UFSC — CTC",
  description: "Guia feito por estudantes para calouros do CTC da UFSC. Coordenações, RU, links, datas, atléticas e muito mais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-bg-app text-ink-primary">
            <Header />
            <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
