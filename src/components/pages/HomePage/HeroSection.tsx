"use client";
import { useTranslations } from "next-intl";
import SocialTicker from "@/components/ui/SocialTicker";
import HeroImage from "@/components/ui/HeroImage/Image";
import { Button } from "@/components/ui/Button/Button";
import { MdArrowForward } from "react-icons/md";
import CardSection from "@/components/ui/CardSection/CardSection";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  const title = t("title");
  const highlight = t("highlight");
  const hasHighlight = title.includes(highlight);
  const [before = title, after = ""] = hasHighlight ? title.split(highlight) : [title, ""];

  return (
    <CardSection id="hero" ariaLabel={title}>
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 sm:-inset-16 lg:-inset-32 -z-10 rounded-[inherit] blur-2xl lg:blur-3xl neon-glow animate-neon"
      />

      <div
        className={[
          "relative z-10 grid items-center content-start gap-8 sm:gap-10 lg:gap-12",
          "lg:grid-cols-[1.25fr_0.75fr]",
          "justify-items-center lg:justify-items-stretch"
        ].join(" ")}
      >
        <HeroImage image="/hero-image.png" />

        <div
          className={[
            "w-full max-w-[680px] space-y-5 lg:space-y-6 text-center lg:text-left",
            "lg:order-1"
          ].join(" ")}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-appText tracking-tight">
            {hasHighlight ? (
              <>
                {before}
                <span className="text-phoenixGold">{highlight}</span>
                {after}
              </>
            ) : (
              title
            )}
          </h1>

          <p className="text-base md:text-lg text-appText/80">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:justify-center lg:justify-start">
            <Button
              href="#projects"
              variant="primary"
              className="w-full sm:w-auto"
              rightIcon={<MdArrowForward />}
            >
              {t("viewProjects")}
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {t("contactMe")}
            </Button>
          </div>
        </div>
      </div>

      <SocialTicker />
    </CardSection>
  );
}
