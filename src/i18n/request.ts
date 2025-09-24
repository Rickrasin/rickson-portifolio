// src/i18n/request.ts (ou como você nomeou esse arquivo)
import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = (await requestLocale) ?? routing.defaultLocale;

  const base = requested.toLowerCase().split("-")[0] as string;

  const locale = (routing.locales as readonly string[]).includes(base)
    ? (base as (typeof routing.locales)[number])
    : routing.defaultLocale;

  console.log(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return { locale, messages };
});
