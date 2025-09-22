import { ServiceItem } from "@/lib/types";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/Button/Button";
import Badge from "@/components/ui/Badge/Badge";

export default function ServiceCard({ s }: { s: ServiceItem }) {
    const Icon = s.icon;
    return (
        <article className="group rounded-xl border border-obsidianGray/60 bg-midnightBlack/50 p-4 md:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {/* empilha e centraliza até xl; lado a lado no xl+ */}
            <div className="flex flex-col items-center justify-center gap-3 xl:flex-row xl:items-start xl:justify-start">
                {Icon && (
                    <span
                        aria-hidden
                        className="flex size-10 md:size-12 items-center justify-center rounded-lg border border-obsidianGray/60 bg-appBg/70 mx-auto xl:mx-0"
                    >
                        <Icon className="size-4 md:size-8" style={s.color ? { color: s.color } : undefined} />
                    </span>
                )}

                <div className="flex-1 w-full">
                    <div className="flex flex-col gap-1.2">
                        <h3 className="text-base md:text-lg font-medium text-textApp text-center xl:text-left">
                            {s.title}
                        </h3>
                        <p className="text-sm text-textApp/70 text-center xl:text-left">{s.desc}</p>
                    </div>

                    {s.highlights?.length ? (
                        <ul className="mt-3 flex flex-wrap gap-2 justify-center xl:justify-start">
                            {s.highlights.map((h, key) => (
                                <Badge key={key} variant="subtle">
                                    {h}
                                </Badge>
                            ))}
                        </ul>
                    ) : null}

                    {s.href && (
                        <div className="mt-3 flex justify-center xl:justify-start">
                            <Button
                                href={s.href}
                                rightIcon={<MdArrowOutward />}
                                variant="outline"
                                target="_blank"
                                className="w-full sm:w-auto"
                            >
                                {s.ctaLabel ?? "Saber mais"}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
