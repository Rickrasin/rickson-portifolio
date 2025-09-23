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
        "relative neon-projects",
        className
      ].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
};

export default CardOutlineSection;
