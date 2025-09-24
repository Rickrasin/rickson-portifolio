"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { MdTranslate } from "react-icons/md";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

export default function LanguageSwitchButton({ className }: { className?: string }) {
    const locale = useLocale();                 // "pt", "en" (ou "pt-BR")
    const router = useRouter();
    const pathname = usePathname();             // já vem sem o prefixo do locale nos wrappers
    const nextLocale = locale.toLowerCase().startsWith("pt") ? "en" : "pt";
    const nextLabel = nextLocale.toUpperCase();

    return (
        <button
            type="button"
            onClick={() => router.replace(pathname, { locale: nextLocale })}
            title={nextLabel}
            aria-label={`Trocar idioma para ${nextLabel}`}
            className={cn(
                "grid place-items-center size-10 md:size-12 rounded-lg",
                "border border-obsidianGray/60 bg-midnightBlack/50",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                "transition-transform hover:-translate-y-0.5",
                className
            )}
        >
            <div className="flex flex-col items-center leading-none">
                <MdTranslate className="size-4 md:size-5 text-textApp/80" />
                <span className="text-[10px] md:text-xs font-semibold text-textApp/80">
                    {nextLabel}
                </span>
            </div>
        </button>
    );
}
