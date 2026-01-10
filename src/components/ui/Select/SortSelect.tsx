"use client";
import * as React from "react";
import { MdSort } from "react-icons/md";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

export type SortOption = { value: string; label: string };
export type SortSelectProps = {
    value: string;
    onChange: (v: string) => void;
    options?: SortOption[];
    className?: string;
};

const DEFAULT_OPTIONS: SortOption[] = [
    { value: "featured", label: "Destaque" },
    { value: "newest", label: "Mais recentes" },
    { value: "title", label: "Título (A-Z)" },
];

export default function SortSelect({ value, onChange, options = DEFAULT_OPTIONS, className }: SortSelectProps) {
    return (
        <label className={cn("inline-flex items-center gap-2", className)}>
            <MdSort className="hidden md:inline size-5 text-textApp/60" />
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    "rounded-lg border border-obsidianGray/60 bg-midnightBlack/40",
                    "px-3 py-2 text-sm md:text-base text-textApp"
                )}
                aria-label="Ordenar"
            >
                {options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </label>
    );
}