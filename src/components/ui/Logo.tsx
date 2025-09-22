import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type LogoProps = {
    href?: string;
    src: StaticImageData | string;
    alt?: string;
    size?: number;
};

const Logo = ({ href = "/", src, alt = "Logo", size = 64 }: LogoProps) => {
    return (
        <div className="flex w-full gap-3">
            <Link
                href={href}
                aria-label="Voltar para a página inicial"
                className={[
                    "inline-flex items-center justify-center rounded-lg",
                    "p-1 h-12 w-12 md:h-16 md:w-16",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "hover:opacity-95 active:scale-[0.98] transition"
                ].join(" ")}
            >
                <Image
                    src={src}
                    alt="" // decorativa (Link tem aria-label)
                    width={size}
                    height={size}
                    className="rounded"
                    priority
                />
                <span className="sr-only">{alt}</span>
            </Link>
        </div>
    );
}

export default Logo;