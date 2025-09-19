"use client";
import * as React from "react";
import { createPortal } from "react-dom";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const HIDE_ABOVE: Record<Breakpoint, string> = {
    sm: "sm:hidden",
    md: "md:hidden",
    lg: "lg:hidden",
    xl: "xl:hidden",
    "2xl": "2xl:hidden",
};

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    side?: "left" | "right";
    nav: React.ReactNode;
    footer?: React.ReactNode;
    hideAbove?: Breakpoint | false;
    id?: string;
    ariaLabel?: string;
};

export default function Drawer({
    open,
    onClose,
    side = "left",
    nav,
    footer,
    hideAbove = "md",
    id = "mobile-drawer",
    ariaLabel = "Menu",
}: DrawerProps) {
    React.useEffect(() => {
        if (!open) return;
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, [open, onClose]);

    React.useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [open]);

    if (!open) return null;

    const responsiveHide = hideAbove ? HIDE_ABOVE[hideAbove] : "";

    return createPortal(
        <>
            <div
                className={["fixed inset-0 bg-black/50", responsiveHide].join(" ")}
                onClick={onClose}
                aria-hidden="true"
            />
            <aside
                id={id}
                className={[
                    responsiveHide, // ex.: "md:hidden"
                    "fixed inset-y-0 z-[9999] h-dvh w-[60%] max-w-80",
                    "bg-midnightBlack border-line shadow-xl",
                    side === "right" ? "right-0 border-l" : "left-0 border-r",
                ].join(" ")}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
            >
                <div className="h-full flex flex-col">
                    <div className="px-4 pt-6" />
                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className="w-full">{nav}</div>
                    </div>
                    <div className="px-4 pb-6">
                        {footer ?? null}
                    </div>
                </div>
            </aside>
        </>,
        document.body
    );
}
