"use client";
import Link from "next/link";
import * as React from "react";

type Props = {
    href: string;
    label: string;
    icon: React.ElementType;
    active?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function IconButton({ href, label, icon: Icon, active, onClick }: Props) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={[
                "flex items-center gap-3 rounded-lg px-3 py-2 border",
                active ? "text-brand border-brand" : "border-line hover:text-brand hover:border-brand",
            ].join(" ")}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const { scrollToHash } = require("@/lib/scroll");
                    const handled = scrollToHash(href);
                    if (handled) e.preventDefault();
                } catch (err) {
                    // ignore
                }
                if (onClick) onClick(e);
            }}
        >
            <Icon className="size-5" aria-hidden />
            <span className="text-sm font-medium">{label}</span>
        </Link>
    );
} 
