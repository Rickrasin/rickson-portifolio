import React from "react";
import { NAV } from "@/lib/data";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Logo from "@/components/layout/sidebar/Logo";
import SquareIconButton from "../ui/buttons/SquareIconButton";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar side="right" ariaLabel="Primary">
      <div className="fixed flex flex-col h-full justify-between">
        <Logo src="/logo.svg" alt="Rickson" size={64} />

        <nav className="flex flex-col items-center justify-center  gap-4 md:gap-8 ">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <SquareIconButton key={item.href} href={item.href} active={active} label={item.label} icon={item.icon} />
            );
          })}
        </nav>

        <div></div>
      </div>
    </Sidebar>
  );
};

export default LeftSidebar;
