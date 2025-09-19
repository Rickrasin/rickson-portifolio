"use client";
import * as React from "react";
type SidebarProps = React.PropsWithChildren<{
    side?: "left" | "right";     // default: "left"
    ariaLabel?: string;
    className?: string;
}>;

const Sidebar = ({
    children,
    side = "right",
    ariaLabel = "Primary",
}: SidebarProps) => {
    return (
        <aside
            aria-label={ariaLabel}
            className={["flex-row-reverse justify-center",
                "h-full min-w-32",
                "bg-appBg",
                side == "right" ? "border-r border-line" : "border-l border-line",
                "px-3 md:px-8 py-8"
            ].join(" ")}
        >
            <div className="fixed flex flex-col h-full justify-between">
                {children}
            </div>
        </aside>
    );
}

export default Sidebar;



