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
      className={[
        "relative isolate rounded-2xl p-4 sm:p-5 md:p-6 neon-projects"
      ].join(" ")}
    >
      {children}
    </section>
  );
};

export default CardOutlineSection;
