"use client";
import Link from "next/link";
import * as React from "react";

type Props = {
    icon: React.ElementType;
    label?: string;

    // Link (interno/externo) OU Botão:
    href?: string;           // se existir, renderiza <Link>/<a>
    external?: boolean;      // força abrir em nova aba quando for link
    active?: boolean;        // estiliza como ativo

    onClick?: () => void;    // se href NÃO existir, vira <button>
    ariaExpanded?: boolean;  // útil p/ toggles
    ariaControls?: string;   // id do drawer, por exemplo
    className?: string;
};

export default function SquareIconButton({
    icon: Icon,
    label,
    href,
    external,
    active,
    onClick,
    ariaExpanded,
    ariaControls,
    className,
}: Props) {
    const base = [
        "group inline-flex items-center justify-center rounded-lg border transition",
        "h-10 w-10 p-2 border-appText",
        "hover:text-brand hover:border-brand",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "active:scale-[0.98]",
        active ? "text-brand border-brand" : "",
        className ?? "",
    ].join(" ");

    const iconEl = (
        <>
            <Icon className="size-5 transition-transform transform-gpu group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none" />
            {label ? <span className="sr-only">{label}</span> : null}
        </>
    );

    // BOTÃO (sem href)
    if (!href) {
        return (
            <button
                type="button"
                onClick={onClick}
                aria-label={label}
                aria-expanded={ariaExpanded}
                aria-controls={ariaControls}
                className={base}
            >
                {iconEl}
            </button>
        );
    }

    // LINK
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noreferrer" title={label ?? undefined} className={base}>
                {iconEl}
            </a>
        );
    }

    return (
        <Link href={href} title={label ?? undefined} className={base} aria-current={active ? "page" : undefined}>
            {iconEl}
        </Link>
    );
}
