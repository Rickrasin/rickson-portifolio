import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/lib/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!_next|favicon|.*\\..*|api).*)"],
};
