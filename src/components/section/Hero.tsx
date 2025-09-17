"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className={[
        "relative isolate overflow-hidden rounded-2xl p-6 md:p-8",
        "backdrop-blur-md border",
        "bg-white/5 border-[color:var(--color-obsidianGray)]",
      ].join(" ")}
      aria-label="Apresentação Rickson"
    >
      {/* Aura azul de fundo do hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 z-0 rounded-[inherit] blur-2xl animate-bluePulse"
        style={{
          background:
            "radial-gradient(60% 45% at 70% 0%, color-mix(in oklab, var(--color-slateBlue) 55%, transparent), transparent 70%), radial-gradient(55% 45% at 0% 0%, color-mix(in oklab, var(--color-slateBlue) 35%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        {/* Texto */}
        <div className="relative z-10">
          {/* ...seu conteúdo igual... */}
        </div>

        {/* Imagem — menor e com vidro + glow */}
        <div className="relative md:justify-self-end w-3/4 sm:w-2/3 md:w-[70%] lg:w-[60%] aspect-square">
          <div
            className={[
              "relative isolate h-full w-full rounded-xl overflow-hidden",
              "backdrop-blur-sm bg-white/5 border border-[color:var(--color-obsidianGray)]",
              "shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)]",
            ].join(" ")}
          >
            {/* Glow azul pulsando por trás da imagem */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 z-0 rounded-[inherit] blur-2xl animate-bluePulse"
              style={{
                background:
                  "radial-gradient(50% 40% at 60% 20%, color-mix(in oklab, var(--color-slateBlue) 35%, transparent), transparent 70%)",
              }}
            />

            {/* Imagem */}
            <Image
              src="/hero-image.png"
              alt="Foto/arte do Rickson"
              fill
              className="relative z-10 object-cover"
              priority
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,.25)] via-transparent to-[rgba(255,255,255,.02)] mix-blend-screen pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Remova o styled-jsx local, ou se quiser manter, use `global`:
      <style jsx global>{` ... @keyframes bluePulse ... `}</style>
      */}
    </section>
  );
}
