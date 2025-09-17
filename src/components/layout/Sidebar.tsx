"use client";
import * as React from "react";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";


type SidebarLayoutProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarLayoutProps) {

  return (
    <div className="min-h-dvh flex bg-appBg text-appText">
      <LeftSidebar />
      <div className="mx-32 ">
        {children}
      </div>
      <RightSidebar />
    </div>
  );
}
