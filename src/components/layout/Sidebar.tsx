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
      <main className="ml-32 mr-32">
        {children}
      </main>
      <RightSidebar />
    </div>
  );
}
