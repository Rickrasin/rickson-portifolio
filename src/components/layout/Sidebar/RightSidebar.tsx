// src/components/layout/Sidebar/RightSidebar.tsx
import React from "react";
import { SOCIALS } from "@/lib/data";
import SquareIconButton from "@/components/ui/Button/SquareIconButton";
import Sidebar from "@/components/layout/Sidebar/SidePanel";
import LanguageSwitchButton from "@/components/i18n/LanguageSwitchButton";

const RightSidebar = () => {
    return (
        <Sidebar side="right" ariaLabel="secondary" className="md:pr-2 md:pl-4">
            <div className="flex flex-col h-full">
                <div className="mt-6 flex items-center justify-center">
                    <LanguageSwitchButton />
                </div>

                <nav className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                        {SOCIALS.slice(0, 4).map((item) => (
                            <SquareIconButton
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </nav>

                <div className="mb-6" />
            </div>
        </Sidebar>
    );
};

export default RightSidebar;
