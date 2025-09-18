"use client";
import { SOCIAL_TICKER } from "@/lib/data";
import { SocialItem } from "@/lib/types";

export default function SocialTicker() {
  return (
    <div
      className={[
        "ticker group mt-4 w-full rounded-xl border border-obsidianGray/70",
        "bg-midnightBlack/50 px-3 md:px-4 backdrop-blur-lg",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
      ].join(" ")}
      style={
        {
          ["--speed" as string]: "30s",
          ["--gap" as string]: "1.25rem",
        } as React.CSSProperties
      }
      aria-label="Links de redes sociais"
    >
      <div className="ticker-viewport h-10 md:h-12">
        <div className="ticker-track group-hover:[animation-play-state:paused]">
          <TickerCopy items={SOCIAL_TICKER} />
          <TickerCopy items={SOCIAL_TICKER} ariaHidden />
          <TickerCopy items={SOCIAL_TICKER} ariaHidden />
          <TickerCopy items={SOCIAL_TICKER} ariaHidden />
        </div>
      </div>
    </div>
  );
}

function TickerCopy({
  items,
  ariaHidden = false,
}: {
  items: SocialItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="ticker-copy" aria-hidden={ariaHidden || undefined}>
      {items.map((it, i) => {
        const Icon = it.icon as React.ComponentType<
          React.SVGProps<SVGSVGElement> & { className?: string }
        >;
        return (
          <a
            key={`${ariaHidden ? "b" : "a"}-${i}-${it.label ?? it.handle}`}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            className={[
              "flex items-center gap-2 rounded-full px-2.5 md:px-3",
              "py-1.5 text-polarWhite/90 transition duration-300",
              "hover:text-phoenixGold",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[color:var(--ring)]",
              "active:translate-y-[0.5px]",
            ].join(" ")}
            title={it.label ?? it.handle}
          >
            <Icon className="size-6 md:size-8 shrink-0 opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="text-lg md:text-xl font-medium tracking-tight">
              {it.handle ?? it.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
