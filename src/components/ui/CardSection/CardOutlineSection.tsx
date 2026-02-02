import React from "react";

type SidebarLayoutProps = {
  children: React.ReactNode;
  id: string;
  ariaLabel: string;
  className?: string;
};

const CardOutlineSection = ({
  children,
  id,
  ariaLabel,
  className
}: SidebarLayoutProps) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={[
        "flex flex-col gap-8",
        "relative neon-projects rounded-2xl",
        className
      ].filter(Boolean).join(" ")}
    >
      <div className="relative z-10 p-4 lg:p-8  border-obsidianGray/80 bg-transparent rounded-[inherit]">
        <div className="neon-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CardOutlineSection;
