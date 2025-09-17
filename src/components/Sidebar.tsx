"use client";
import { NAV, SOCIALS } from "@/lib/data";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden md:flex md:flex-col
        md:fixed md:inset-y-0 md:left-0 md:w-[280px]
        bg-black border-r border-[#1C282F] px-5 py-6
      "
    >
      {/* topo */}
      <div className="flex items-center justify-center gap-3">
        <Image src={logo} alt="Logo" width={64} className="rounded" />
      </div>

      {/* navegação */}
      <nav className="mt-8 space-y-1">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-[#A7B1B8]
                       hover:bg-[#111A20] hover:text-white transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex-1" />

      {/* sociais */}
      <div className="pt-6 border-t border-[#1C282F] flex items-center justify-center gap-3">
        {/** botões mantidos, só mudei o bg base pro #111A20 p/ dar relevo no preto */}
        <a
          href={SOCIALS.github}
          className="grid place-items-center size-9 rounded-lg bg-[#111A20] hover:bg-[#1C282F] transition"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" className="size-5">
            <path
              fill="currentColor"
              d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.31 3.5 1 .11-.8.42-1.31.76-1.61-2.66-.3-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.34 1.23a11.6 11.6 0 0 1 6.08 0c2.32-1.56 3.34-1.23 3.34-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .5Z"
            />
          </svg>
        </a>

        <a
          href={SOCIALS.linkedin}
          className="grid place-items-center size-9 rounded-lg bg-[#111A20] hover:bg-[#1C282F] transition"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="size-5">
            <path
              fill="currentColor"
              d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM4.75 8.75h4.38V20H4.75Zm7.06 0h4.2v1.54h.06a4.6 4.6 0 0 1 4.14-2.27c4.43 0 5.25 2.92 5.25 6.72V20h-4.38v-5.16c0-1.23 0-2.81-1.71-2.81s-1.98 1.34-1.98 2.72V20h-4.38Z"
            />
          </svg>
        </a>

        <a
          href={SOCIALS.twitter}
          className="grid place-items-center size-9 rounded-lg bg-[#111A20] hover:bg-[#1C282F] transition"
          aria-label="Twitter"
          title="Twitter/X"
        >
          <svg viewBox="0 0 24 24" className="size-5">
            <path
              fill="currentColor"
              d="M20.2 3H17l-5 7.2L7 3H3l6.6 9.6L3.4 21H7l5.3-7.6L17 21h4l-6.6-9.4z"
            />
          </svg>
        </a>
      </div>
    </aside>
  );
}
