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
      className={["flex flex-col gap-8",
        "relative neon-projects "].join(" ")}
    >
      {children}
    </section>
  );
};

export default CardOutlineSection;
