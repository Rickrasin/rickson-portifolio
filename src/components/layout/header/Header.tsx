"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { NAV, SOCIALS } from "@/lib/data/data";
import SquareIconButton from "@/components/ui/buttons/SquareIconButton";
import IconButton from "@/components/ui/buttons/IconButton";
import Drawer from "@/components/layout/header/Drawer";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Logo from "@/components/layout/sidebar/Logo";

const MD_BP = 768;

export default function Header({ logo = "/logo.svg" }: { logo?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MD_BP) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="md:hidden inset-x-0 top-0 z-40 h-14 bg-appBg/90 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo src={logo} size={48} />
        <SquareIconButton
          icon={open ? IoCloseSharp : IoMenu}
          label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          ariaExpanded={open}
          ariaControls="mobile-drawer"
        />
      </div>

      {/* Drawer componentizado */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        side="left"
        hideAbove="md"
        nav={
          <nav aria-label="Navegação principal">
            <ul className="flex flex-col gap-2">
              {NAV.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <IconButton
                      href={item.href}
                      label={item.label ?? item.href}
                      icon={Icon}
                      active={active}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        }
        footer={
          <div className="flex items-center justify-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <SquareIconButton
                  key={s.href}
                  icon={Icon}
                  label={s.label}
                  href={s.href}
                  external
                />
              );
            })}
          </div>
        }
      />
    </header>
  );
}
