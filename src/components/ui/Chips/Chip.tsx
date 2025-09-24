"use client";
import * as React from "react";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

export type ChipProps = {
    active?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function Chip({ active, children, onClick, className }: ChipProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full border px-3 py-1 text-xs md:text-sm transition-colors",
                active
                    ? "border-azureSoft/60 bg-azureSoft/10 text-textApp"
                    : "border-obsidianGray/60 bg-midnightBlack/50 text-textApp/80 hover:text-textApp",
                className
            )}
        >
            {children}
        </button>
    );
}