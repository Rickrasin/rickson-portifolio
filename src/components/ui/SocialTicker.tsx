"use client";
import { SOCIAL_TICKER } from "@/lib/data";

export default function SocialTicker() {
  return (
    <div className="mt-3 w-full rounded-xl border border-obsidianGray bg-graphiteBlack/50 px-2 py-2 overflow-hidden ticker">
      <div className="ticker-content flex gap-6 ticker-run hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-6 text-polarWhite/90"
          >
            {SOCIAL_TICKER.map((it, i) => {
              const Icon = it.icon;
              return (
                <a
                  key={`${copy}-${i}-${it.label ?? it.handle}`}
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-phoenixGold"
                  title={it.label ?? it.handle}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm">{it.handle}</span>
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
