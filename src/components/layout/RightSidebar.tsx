import React from "react";
import { SOCIALS } from "@/lib/data";
import SquareIconButton from "../ui/buttons/SquareIconButton";

const RightSidebar = () => {
    return (
        <aside
            aria-label="Secondary"
            className="h-full min-w-32 border-l border-line px-3 md:px-8 py-8"
        >
            <div className="fixed h-full flex flex-col justify-center">
                <div className="flex flex-col items-center gap-8">
                    {SOCIALS.map((item) => (
                        <SquareIconButton key={item.href} href={item.href} label={item.label} icon={item.icon} />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default RightSidebar;
