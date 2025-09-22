import React from "react";
import { SOCIALS } from "@/lib/data";
import SquareIconButton from "@/components/ui/Button/SquareIconButton";
import Sidebar from "@/components/layout/Sidebar/SidePanel";

const RightSidebar = () => {
    return (
        <Sidebar side="left" ariaLabel="secondary" >
            <div className="fixed h-full flex flex-col justify-center">
                <div className="flex flex-col items-center gap-8">
                    {SOCIALS.map((item) => (
                        <SquareIconButton key={item.href} href={item.href} label={item.label} icon={item.icon} />
                    ))}
                </div>
            </div>
        </Sidebar>
    );
};

export default RightSidebar;