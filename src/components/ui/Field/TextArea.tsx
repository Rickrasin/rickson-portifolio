"use client";
import * as React from "react";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
    // ícones não são comuns em textarea, mas se quiser, dá pra fazer via leftAdornment/rightAdornment wrappers
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        { id, label, helperText, error, className, fullWidth, required, disabled, rows = 4, ...props },
        ref
    ) => {
        const areaId = id;
        const helpId = helperText ? `${areaId}-help` : undefined;
        const errorId = error ? `${areaId}-error` : undefined;

        const base =
            "peer rounded-lg border bg-appBg/60 text-textApp placeholder:text-textApp/50 " +
            "px-3 py-2 w-full outline-none transition " +
            "focus-visible:ring-2 focus-visible:ring-white " +
            "focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-appBg)]";
        const borderOk = "border-obsidianGray/60 focus-visible:border-polarWhite/30";
        const borderErr =
            "border-red-500/70 focus-visible:ring-red-200 focus-visible:ring-offset-[color:var(--color-appBg)]";
        const disabledCls = "disabled:opacity-60 disabled:cursor-not-allowed";

        return (
            <div className={cn("w-full", fullWidth && "w-full")}>
                {label && (
                    <label
                        htmlFor={areaId}
                        className="mb-1 block text-sm font-medium text-textApp/90"
                    >
                        {label}
                        {required && <span className="ml-1 text-phoenixGold">*</span>}
                    </label>
                )}

                <textarea
                    id={areaId}
                    ref={ref}
                    rows={rows}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : helpId}
                    className={cn(
                        base,
                        error ? borderErr : borderOk,
                        disabledCls,
                        "resize-y min-h-28",
                        className
                    )}
                    disabled={disabled}
                    required={required}
                    {...props}
                />

                {error ? (
                    <p id={errorId} className="mt-1 text-xs text-red-400">
                        {error}
                    </p>
                ) : helperText ? (
                    <p id={helpId} className="mt-1 text-xs text-textApp/60">
                        {helperText}
                    </p>
                ) : null}
            </div>
        );
    }
);
TextArea.displayName = "TextArea";
