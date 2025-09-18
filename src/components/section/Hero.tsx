"use client";
import Image from "next/image";
import Link from "next/link";
import SocialTicker from "@/components/ui/SocialTicker";
import { STACKS } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className={[
        "relative isolate overflow-hidden rounded-2xl p-6 md:p-8",
        // fundo com grid + leve gradiente
        "border border-obsidianGray/80 bg-transparent",
        "bg-[radial-gradient(1200px_600px_at_70%_-10%,color-mix(in_oklab,var(--color-slateBlue)_22%,transparent),transparent_70%)]",
        "before:bg-grid before:mask-grid before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]"
      ].join(" ")}
      aria-label="Apresentação Rickson"
    >
      {/* aura neon grande (atrás de tudo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-32 -z-10 rounded-[inherit] blur-3xl neon-glow animate-neon"
      />

      {/* conteúdo */}
      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.25fr_0.75fr]">
        {/* Texto */}
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Olá, eu sou o <span className="text-phoenixGold">Rickson</span>
          </h1>

          <p className="md:text-lg text-polarWhite/80">
            Transformo ideias em produtos digitais robustos — do design de
            interface ao backend.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className={[
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium",
                "bg-phoenixGold text-midnightBlack",
                "shadow-[0_0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_8px_24px_-10px_rgba(238,187,70,0.55)]",
                "active:translate-y-[1px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[color:var(--color-ring)]"
              ].join(" ")}
            >
              Ver projetos
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414L13.172 12Z" />
              </svg>
            </Link>

            <Link
              href="#contact"
              className={[
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium",
                "border border-obsidianGray/80 text-polarWhite/95",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_35%)]",
                "hover:border-polarWhite/25 hover:bg-white/5",
                "active:translate-y-[1px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[color:var(--color-ring)]"
              ].join(" ")}
            >
              Fale comigo
            </Link>
          </div>
        </div>

        {/* Card */}
        <div className="relative md:justify-self-end w-3/4 sm:w-2/3 md:w-[72%] lg:w-[62%]">
          <div
            className={[
              "relative aspect-square overflow-hidden rounded-2xl",
              // vidro + borda dupla (stroke fora + dentro)
              "glass-card border border-obsidianGray/70",
              "before:absolute before:inset-px before:rounded-[inherit] before:border before:border-white/5",
              // brilho suave no topo
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit]",
              "after:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_35%)]"
            ].join(" ")}
          >
            {/* glow pequeno por trás do card */}
            <div
              aria-hidden
              className="absolute -inset-10 z-0 rounded-[inherit] neon-glow-sm animate-neon"
            />

            <Image
              src="/hero-image.png"
              alt="Foto/arte do Rickson"
              fill
              className="relative z-10 object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <SocialTicker />
    </section>
  );
}
