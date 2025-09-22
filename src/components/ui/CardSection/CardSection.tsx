import React from "react";

type SidebarLayoutProps = {
  children: React.ReactNode;
  id: string;
  ariaLabel: string;
};

const CardSection = ({ children, id, ariaLabel }: SidebarLayoutProps) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={[
        "flex flex-col gap-8",
        "relative isolate overflow-hidden rounded-2xl",
        "p-4 lg:p-8",
        "border border-obsidianGray/80 bg-transparent"
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-28 lg:-inset-32  rounded-[inherit] blur-2xl lg:blur-3xl neon-glow animate-neon"
      />

      {children}
    </section>
  );
};

export default CardSection;
