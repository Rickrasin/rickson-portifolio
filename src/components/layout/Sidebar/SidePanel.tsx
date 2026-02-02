type SidebarProps = React.PropsWithChildren<{
    side?: "left" | "right";
    ariaLabel?: string;
    className?: string;
}>;

const Sidebar = ({
    children,
    side = "right",
    ariaLabel = "Primary",
    className = "",
}: SidebarProps) => {
    return (
        <aside
            aria-label={ariaLabel}
            aria-hidden="true"
            className={[
                "hidden md:flex fixed top-0 h-full z-30",
                side === "left" ? "left-0" : "right-0",
                "w-16 sm:w-20 md:w-20 lg:w-24",
                side === "left" ? "border-r border-line" : "border-l border-line",
                "px-2 md:px-4 py-6",
                className,
            ].join(" ")}
        >
            {children}
        </aside>
    );
};

export default Sidebar;
