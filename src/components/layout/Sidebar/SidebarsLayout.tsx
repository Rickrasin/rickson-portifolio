"use client";
import * as React from "react";
import LeftSidebar from "@/components/layout/Sidebar/LeftSidebar";
import RightSidebar from "@/components/layout/Sidebar/RightSidebar";
import Header from "@/components/layout/asdas/Header";

type SidebarLayoutProps = {
  children: React.ReactNode;
};


export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="min-h-dvh bg-appBg text-appText">
      <Header />

      <div className="flex justify-center" >
        <div className="hidden md:block bg-transparent">
          <LeftSidebar />
        </div>
        <div className="flex-1">
          {children}
        </div>
        <div className="hidden md:block bg-transparent">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
