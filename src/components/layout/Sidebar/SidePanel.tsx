type SidebarProps = React.PropsWithChildren<{
    side?: "left" | "right";
    ariaLabel?: string;
    className?: string;
}>;

const Sidebar = ({
    children,
    side = "right",
    ariaLabel = "Primary",
}: SidebarProps) => {
    return (
        <aside
            aria-label={ariaLabel}
            aria-hidden
            className={[
                "relative",
                " flex justify-center",
                "h-full min-w-32 4xl:min-w-[16rem]",
                side == "right" ? "border-r border-line" : "border-l border-line",
                "px-3 md:px-8 py-8",
            ].join(" ")}
        >
            {children}
        </aside>
    );
};

export default Sidebar;
