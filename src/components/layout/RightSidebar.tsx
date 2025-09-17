import Link from "next/link";
import React from "react";
import { SOCIALS } from "@/lib/data";

const RightSidebar = () => {
    return (
        <aside
            aria-label="Secondary"
            className="
        fixed right-0 h-dvh min-w-32 border-l border-line px-3 md:px-8 py-8 flex flex-col justify-center"
        >
            <div className="flex flex-col items-center  gap-8">
                {SOCIALS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={[
                                "group flex h-10 w-10 items-center justify-center rounded-lg p-2 border border-appText transition",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                "hover:text-brand hover:border-brand",
                            ].join(" ")}
                            title={item.label ?? undefined}
                        >
                            <Icon
                                className="size-5 transition-transform will-change-transform transform-gpu
               group-hover:scale-105 group-focus-visible:scale-105
               motion-reduce:transform-none"
                            />
                        </Link>)
                })}
            </div>
        </aside>
    );
};

export default RightSidebar;
