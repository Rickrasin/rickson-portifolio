import React from "react";
import { SOCIALS } from "@/lib/data/data";
import SquareIconButton from "../ui/buttons/SquareIconButton";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const RightSidebar = () => {
    return (
        <Sidebar side="left" ariaLabel="Secondary" >
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
