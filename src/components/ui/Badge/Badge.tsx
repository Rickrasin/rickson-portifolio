// src/components/ui/Badge.tsx
"use client";
import * as React from "react";

type BadgeVariant = "subtle" | "outline" | "solid";
type BadgeSize = "sm" | "md";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

function cn(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Badge({
  variant = "subtle",
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center rounded-full transition-colors select-none text-textApp/70 text-xs px-2 py-1";

  const variants =
    variant === "solid"
      ? "bg-phoenixGold text-brandFg border border-phoenixGold/80"
      : variant === "outline"
      ? "bg-transparent rounded-md border border-obsidianGray/60"
      : "bg-transparent rounded-md border border-obsidianGray/60";

  return (
    <span className={cn(base, variants, className)} role="status" {...rest}>
      {iconLeft ? <span aria-hidden>{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span aria-hidden>{iconRight}</span> : null}
    </span>
  );
}
