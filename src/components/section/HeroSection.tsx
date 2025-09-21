"use client";
import SocialTicker from "@/components/ui/SocialTicker";
import HeroImage from "@/components/layout/HeroImage/Image";
import { Button } from "@/components/ui/buttons/Button";
import { MdArrowForward } from "react-icons/md";
import Card from "@/components/ui/CardSection/CardSection";

export default function HeroSection() {
  return (
    <Card id="hero" ariaLabel="Apresentação Rickson">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-28 lg:-inset-32 -z-10 rounded-[inherit] blur-2xl lg:blur-3xl neon-glow animate-neon"
      />

      <div
        className={[
          "relative z-10 grid items-center content-start gap-6",
          "lg:grid-cols-[1.25fr_0.75fr]",
          "justify-items-center lg:justify-items-stretch"
        ].join(" ")}
      >
        <HeroImage image="/hero-image.png" />

        <div
          className={[
            "w-full max-w-[680px] space-y-4 lg:space-y-5 text-center lg:text-left",
            "lg:order-1"
          ].join(" ")}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-appText tracking-tight">
            Olá, eu sou o <span className="text-phoenixGold">Rickson</span>
          </h1>

          <p className="text-base sm:text-lg text-appText/80">
            Transformo ideias em produtos digitais robustos — do design de
            interface ao backend.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center lg:justify-start">
            <Button
              href="#projects"
              variant="primary"
              className="w-full sm:w-auto"
              rightIcon={<MdArrowForward />}
            >
              Ver projetos
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Fale comigo
            </Button>
          </div>
        </div>
      </div>

      <SocialTicker />
    </Card>
  );
}
