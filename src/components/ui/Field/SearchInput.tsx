"use client";
import * as React from "react";
import { MdSearch, MdClear } from "react-icons/md";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

export type SearchInputProps = {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    className?: string;
};

export default function SearchInput({ value, onChange, placeholder, className }: SearchInputProps) {
    return (
        <div className={cn("relative flex-1 min-w-[240px]", className)}>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={cn(
                    "w-full rounded-lg border border-obsidianGray/60 bg-midnightBlack/40",
                    "px-10 py-2 text-sm md:text-base text-textApp placeholder:text-textApp/40",
                    "focus:outline-none focus:ring-2 focus:ring-azureSoft/50"
                )}
            />
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-textApp/60" />
            {value && (
                <button
                    aria-label="Limpar busca"
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                    <MdClear className="size-5 text-textApp/60" />
                </button>
            )}
        </div>
    );
}