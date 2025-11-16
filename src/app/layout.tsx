import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar/SidebarsLayout";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Rickson Portifolio",
  description: "Sou o Rickson, desenvolvedor web focado em transformar ideias em produtos digitais completos — do design da interface ao backend. Crio landing pages, sites institucionais e web apps em Next.js com performance, SEO e estrutura prontos para negócios que querem vender mais e escalar.",
  icons: "/favicon.svg"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar>
          <main className="min-h-dvh px-4 md:px-8 py-8 overflow-hidden flex flex-col gap-16">
            {children}
          </main>
        </Sidebar>
      </body>
    </html>
  );
}
