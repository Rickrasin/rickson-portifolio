"use client";
import SocialTicker from "@/components/ui/SocialTicker";
import HeroImage from "@/components/layout/HeroImage/HeroImage";
import { Button } from "@/components/ui/buttons/Button";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section
      id="home"
      className={[
        "flex flex-col gap-8",
        "relative isolate overflow-hidden rounded-2xl",
        "p-5 lg:p-8",
        "border border-obsidianGray/80 bg-transparent",
      ].join(" ")}
      aria-label="Apresentação Rickson"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-28 lg:-inset-32 -z-10 rounded-[inherit] blur-2xl lg:blur-3xl neon-glow animate-neon"
      />

      <div
        className={[
          "relative z-10 grid items-center content-start gap-6",
          "lg:grid-cols-[1.25fr_0.75fr]",          // 2 colunas só no lg+
          "justify-items-center lg:justify-items-stretch",
        ].join(" ")}
      >
        <HeroImage image="/hero-image.png" />

        <div
          className={[
            "w-full max-w-[680px] space-y-4 lg:space-y-5 text-center lg:text-left",
            "lg:order-1",
          ].join(" ")}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Olá, eu sou o <span className="text-phoenixGold">Rickson</span>
          </h1>

          <p className="text-base sm:text-lg text-polarWhite/80">
            Transformo ideias em produtos digitais robustos — do design de interface ao backend.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center lg:justify-start">
            <Button
              href="#projects"
              variant="primary"
              className="w-full sm:w-auto"
              rightIcon={<BsArrowRight />}
            >
              Ver projetos
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Fale comigo
            </Button>
          </div>
        </div>
      </div>

      <SocialTicker />
    </section>
  );
}
