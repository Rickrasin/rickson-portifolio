import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import type { Locale } from "@/lib/i18n/config";

export const dynamic = "force-dynamic"; // opcional

type Props = {
    children: React.ReactNode;
    params: { locale: Locale };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    let messages;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Sidebar>
                        <main className="min-h-dvh px-5 md:px-8 py-8 space-y-8 overflow-x-hidden">
                            {children}
                        </main>
                    </Sidebar>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
