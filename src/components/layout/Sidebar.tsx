"use client";
import * as React from "react";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Header from "@/components/layout/Header/Header";

type SidebarLayoutProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarLayoutProps) {
  return (
    <div className="min-h-dvh bg-appBg text-appText">
      <Header />

      <div className="flex justify-center">
        <div className="hidden md:block">
          <LeftSidebar />
        </div>

        {children}

        <div className="hidden md:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
