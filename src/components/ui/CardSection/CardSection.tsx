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
        "relative isolate rounded-2xl",
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 sm:-inset-16 lg:-inset-32 rounded-[inherit] blur-2xl lg:blur-3xl neon-glow animate-neon"
      />

      <div className="relative z-10 p-4 lg:p-8 border-obsidianGray/80 bg-transparent rounded-[inherit]">
        {children}
      </div>
    </section>
  );
};

export default CardSection;
