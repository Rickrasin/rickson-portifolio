import Image from "next/image";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/Buttons/Button";
import { MdArrowOutward } from "react-icons/md";
import Badge from "@/components/ui/Badge/Badge";

export default function ProjectCard({
  title,
  description,
  liveURL,
  repoURL,
  thumb,
  tags = []
}: Project) {
  const MAX_TAGS = 4;
  const visibleTags = tags.slice(0, MAX_TAGS);
  const overflow = Math.max(0, tags.length - MAX_TAGS);

  return (
    <article
      className={[
        "h-full flex flex-col overflow-hidden rounded-xl",
        "border border-obsidianGray/60 bg-appBg/40",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-white">
        {thumb ? (
          <Image
            src={thumb}
            alt={title ? `Thumb do projeto ${title}` : "Thumb do projeto"}
            fill
            className="object-cover"
            sizes="
              (min-width:1536px) 22vw,
              (min-width:1280px) 28vw,
              (min-width:1024px) 32vw,
              (min-width:768px) 46vw,
              100vw
            "
          />
        ) : (
          <div className="absolute inset-0 neon-glow-sm opacity-60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnightBlack/60 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 xs:p-4 lg:p-5 text-textApp">
        <div className="flex flex-col gap-1">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-xs sm:text-sm text-textApp/70 line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {(visibleTags.length > 0 || overflow > 0) && (
          <div className="mt-1 flex flex-wrap gap-2">
            {visibleTags.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
            {overflow > 0 && (
              <span className="rounded-md border border-obsidianGray/60 px-2 py-1 text-[10px] sm:text-xs text-textApp/60">
                +{overflow}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
          {liveURL && (
            <Button
              href={liveURL}
              rightIcon={<MdArrowOutward />}
              variant="outline"
              target="_blank"
              className="w-full sm:w-auto"
            >
              Ver projeto
            </Button>
          )}
          {repoURL && (
            <Button
              href={repoURL}
              rightIcon={<MdArrowOutward />}
              variant="secondary"
              target="_blank"
              className="w-full sm:w-auto"
            >
              Ver repositório
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
