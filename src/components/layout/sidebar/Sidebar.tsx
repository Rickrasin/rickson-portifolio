"use client";
import * as React from "react";

const Sidebar = ({ children }: React.PropsWithChildren) => {
    return (
        <aside
            aria-label="Primary"
            className="flex-row-reverse h-full min-w-32 justify-center bg-appBg border-r border-line px-3 md:px-8 py-8"
        >
            <div className="fixed flex flex-col h-full justify-between">
                {children}
            </div>
        </aside>
    );
}

export default Sidebar;




