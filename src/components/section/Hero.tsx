"use client";
import Image from "next/image";
import Link from "next/link";
import SocialTicker from "@/components/ui/SocialTicker";

export default function Hero() {
  return (
    <section
      id="home"
      className={[
        "relative isolate overflow-hidden rounded-2xl",
        "p-5 md:p-8",
        "border border-obsidianGray/80 bg-transparent",
      ].join(" ")}
      aria-label="Apresentação Rickson"
    >
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-28 md:-inset-32 -z-10 rounded-[inherit] blur-2xl md:blur-3xl neon-glow animate-neon"
      />

      {/* Conteúdo */}
      <div
        className={[
          "relative z-10 grid items-center gap-6 content-start",
          // 1 coluna no mobile, 2 no md+
          "md:grid-cols-[1.25fr_0.75fr]",
          "justify-items-center md:justify-items-stretch",
        ].join(" ")}
      >
        {/* Card (Imagem) — primeiro no mobile, à direita no desktop */}
        <div
          className={[
            "order-[-1] md:order-2", // <- chave: imagem vai pra direita no md+
            "relative mx-auto md:mx-0",
            "w-full max-w-[260px] sm:max-w-[320px]",
            "md:w-[58%] lg:w-[52%]",
            "md:justify-self-end",
          ].join(" ")}
        >
          <div
            className={[
              "relative overflow-hidden rounded-2xl",
              "aspect-square", // sempre quadrada
              "border border-obsidianGray/70",
            ].join(" ")}
          >
            <div
              aria-hidden
              className={[
                "absolute z-0 rounded-[inherit]",
                "-inset-6 blur-xl md:-inset-10 md:blur-2xl",
                "neon-glow-sm animate-neon",
              ].join(" ")}
            />

            <Image
              src="/hero-image.png"
              alt="Foto/arte do Rickson"
              fill
              priority
              sizes="(min-width: 1024px) 35vw, (min-width: 768px) 42vw, 85vw"
              className="relative z-10 object-cover"
            />
          </div>
        </div>

        {/* Texto — fica à esquerda no desktop */}
        <div
          className={[
            "w-full max-w-[680px] space-y-4 md:space-y-5 text-center md:text-left",
            "md:order-1", // <- texto vem antes no md+, então fica na esquerda
          ].join(" ")}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Olá, eu sou o <span className="text-phoenixGold">Rickson</span>
          </h1>

          <p className="text-base sm:text-lg text-polarWhite/80">
            Transformo ideias em produtos digitais robustos — do design de
            interface ao backend.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center md:justify-start">
            <Link
              href="#projects"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium",
                "w-full sm:w-auto",
                "bg-phoenixGold text-midnightBlack",
                "shadow-[0_0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_8px_24px_-10px_rgba(238,187,70,0.55)]",
                "active:translate-y-[1px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[color:var(--color-ring)]",
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
                "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium",
                "w-full sm:w-auto",
                "border border-obsidianGray/80 text-polarWhite/95",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_35%)]",
                "hover:border-polarWhite/25 hover:bg-white/5",
                "active:translate-y-[1px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[color:var(--color-ring)]",
              ].join(" ")}
            >
              Fale comigo
            </Link>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <SocialTicker />
    </section>
  );
}
