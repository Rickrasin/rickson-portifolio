import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { metadata } from "@/metadata";
import Sidebar from "@/components/layout/Sidebar/SidebarsLayout";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export { metadata };

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Sidebar>
            <main className="container-main">
              {children}
              <Analytics />
            </main>
          </Sidebar>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
