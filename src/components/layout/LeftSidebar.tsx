import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { NAV } from "@/lib/data";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <aside
      className="fixed flex flex-row-reverse h-dvh min-w-32 justify-center bg-appBg border-r border-line px-3 md:px-8 py-8"
      aria-label="Primary"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex w-full  gap-3">
          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className={[
              "inline-flex items-center justify-center rounded-lg",
              "p-1 h-12 w-12 md:h-16 md:w-16",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "hover:opacity-95 active:scale-[0.98] transition"
            ].join(" ")}
          >
            {/* Se a logo for SVG, prefira <Image> apontando para o svg estático como você já faz */}
            <Image
              src={logo}
              alt="" // decorativa (o Link já tem aria-label)
              width={64}
              height={64}
              className="rounded"
              priority // como está sempre na dobra
            />
            <span className="sr-only">Rickson</span>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center  gap-4 md:gap-8 ">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "group flex h-10 w-10 items-center justify-center rounded-lg p-2 border border-appText transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "hover:text-brand hover:border-brand",
                  active ? "text-brand border-brand" : ""
                ].join(" ")}
                title={item.label ?? undefined}
              >
                <Icon
                  className="size-5 transition-transform will-change-transform transform-gpu
               group-hover:scale-105 group-focus-visible:scale-105
               motion-reduce:transform-none"
                />
              </Link>
            );
          })}
        </nav>

        <div></div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
