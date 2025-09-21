import React from "react";

type SidebarLayoutProps = {
  children: React.ReactNode;
  id: string;
  ariaLabel: string;
};

const CardOutlineSection = ({
  children,
  id,
  ariaLabel
}: SidebarLayoutProps) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={["relative neon-projects "].join(" ")}
    >
      {children}
    </section>
  );
};

export default CardOutlineSection;
