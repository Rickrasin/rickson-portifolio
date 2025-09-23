// components/ui/Button.tsx
"use client";
import * as React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

export type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseClasses = [
  "enabled:cursor-pointer",
  "inline-flex items-center justify-center gap-2",
  "text-sm",
  "rounded-lg px-4 py-2 font-medium",
  "transition-[box-shadow,transform,background,border-color]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  "disabled:opacity-50 disabled:cursor-not-allowed"
].join(" ");

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-phoenixGold text-midnightBlack",
    "shadow-[0_0_0_0_rgba(0,0,0,0)]",
    "hover:shadow-[0_8px_24px_-10px_rgba(238,187,70,0.55)]",
    "active:translate-y-[1px]",
    "focus-visible:ring-white",
    "focus-visible:ring-offset-[color:var(--color-phoenixGold)]"
  ].join(" "),
  secondary: [
    "border border-obsidianGray/80 text-appText/95",
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_35%)]",
    "hover:border-polarWhite/25 hover:bg-white/5",
    "active:translate-y-[1px]",
    "focus-visible:ring-white",
    "focus-visible:ring-offset-[color:var(--color-appBg)]"
  ].join(" "),
  outline: [
    "border border-phoenixGold/70 text-phoenixGold",
    "bg-transparent",
    "hover:bg-[color-mix(in_oklab,var(--color-phoenixGold)_12%,transparent)]",
    "active:translate-y-[1px]",
    "focus-visible:ring-white",
    "focus-visible:ring-offset-[color:var(--color-appBg)]"
  ].join(" "),
  whatsapp: [
    "bg-[#25D366] text-midnightBlack",
    // sombra/hover
    "shadow-[0_0_0_0_rgba(0,0,0,0)]",
    "hover:shadow-[0_12px_32px_-10px_rgba(37,211,102,0.55)]",
    "active:translate-y-[1px]",
    // foco coerente com sua API de focus-visible
    "focus-visible:ring-white",
    "focus-visible:ring-offset-[color:#25D366]"
  ].join(" "),
};

function ButtonContent({
  leftIcon,
  rightIcon,
  children
}: Pick<ButtonProps, "leftIcon" | "rightIcon"> & {
  children: React.ReactNode;
}) {
  return (
    <>
      {leftIcon && (
        <span aria-hidden className="shrink-0">
          {leftIcon}
        </span>
      )}
      <span className="truncate">{children}</span>
      {rightIcon && (
        <span aria-hidden className="shrink-0">
          {rightIcon}
        </span>
      )}
    </>
  );
}

export function Button({
  variant = "primary",
  href,
  leftIcon,
  rightIcon,
  className,
  fullWidth,
  children,
  disabled,
  target,
  type,
  onClick,
  ...rest
}: ButtonProps) {
  const composed = cn(
    baseClasses,
    variants[variant],
    fullWidth && "w-full",
    disabled && "pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={composed}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        // impede navegação se “desabilitado”
        onClick={
          disabled
            ? (e) => e.preventDefault()
            : onClick
              ? (e) =>
                (
                  onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
                )(e)
              : undefined
        }
      >
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={composed}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </button>
  );
}
