// src/components/layout/Sidebar/RightSidebar.tsx
import React from "react";
import { SOCIALS } from "@/lib/data";
import SquareIconButton from "@/components/ui/Button/SquareIconButton";
import Sidebar from "@/components/layout/Sidebar/SidePanel";
import LanguageSwitchButton from "@/components/i18n/LanguageSwitchButton";

const RightSidebar = () => {
    return (
        <Sidebar side="left" ariaLabel="secondary">
            <div className="fixed h-full flex flex-col justify-center">
                <div className="flex flex-col items-center gap-8">
                    {/* Toggle de idioma no topo */}
                    <LanguageSwitchButton />

                    {/* seus sociais */}
                    {SOCIALS.map((item) => (
                        <SquareIconButton
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </Sidebar>
    );
};

export default RightSidebar;
