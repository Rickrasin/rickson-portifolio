"use client";
import React, { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar/SidePanel";
import Logo from "@/components/ui/Logo";
import SquareIconButton from "@/components/ui/Button/SquareIconButton";

const LeftSidebar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <Sidebar side="left" ariaLabel="Primary" className="md:pl-2 md:pr-4">
      <div className="flex flex-col h-full">
        <div className="mt-6 flex items-center justify-center">
          <Logo src="/logo.svg" alt="Rickson" size={64} />
        </div>

        <nav className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 md:gap-8">
            {NAV.map((item) => {
              const [basePath, hashPart] = (item.href || "").split("#");
              const itemPath = basePath || "/";
              const itemHash = hashPart ? `#${hashPart}` : null;
              const active = pathname === itemPath && (!itemHash || hash === itemHash);
              return (
                <SquareIconButton key={item.href} href={item.href} active={active} label={item.label} icon={item.icon} />
              );
            })}
          </div>
        </nav>

        <div className="mb-6" />
      </div>
    </Sidebar>
  );
};

export default LeftSidebar; 
