import React from "react";
import Image from "next/image";

type Props = { image: string };

export default function HeroImage({ image }: Props) {
    return (
        <div
            className={[
                "order-[-1] lg:order-2",
                "relative mx-auto lg:mx-0 lg:justify-self-end",
                "w-[clamp(12rem,60vw,12rem)]",
                "md:w-[clamp(12rem,70vw,16rem)]",
                "lg:w-[clamp(16rem,46vw,16rem)]",
                "xl:w-[clamp(16rem,40vw,20rem)]",
                "2xl:w-[clamp(20rem,36vw,24rem)]",
            ].join(" ")}
        >
            <div
                className={[
                    "relative overflow-hidden rounded-2xl",
                    "aspect-square",
                    "border border-obsidianGray/70",
                ].join(" ")}
            >
                <div
                    aria-hidden
                    className={[
                        "absolute z-0 rounded-[inherit]",
                        "-inset-6 blur-xl lg:-inset-10 lg:blur-2xl",
                        "neon-glow-sm animate-neon",
                    ].join(" ")}
                />
                <Image
                    src={image}
                    alt="Foto/arte do Rickson"
                    fill
                    priority
                    sizes={[
                        "(min-width: 1536px) 36vw",
                        "(min-width: 1280px) 40vw",
                        "(min-width: 1024px) 46vw",
                        "(min-width: 768px) 70vw",
                        "88vw",
                    ].join(", ")}
                    className="relative z-10 object-cover"
                />
            </div>
        </div>
    );
}
