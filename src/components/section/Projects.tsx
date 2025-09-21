import Image from "next/image";
import { PROJECTS } from "@/lib/data";

type ProjectsProps = {
  featuredEvery?: number;
  id?: string;
  title?: string;
  className?: string;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Projects({
  featuredEvery = 0,
  id = "projects",
  title = "Projetos",
  className
}: ProjectsProps) {
  return (
    <section id={id} className={cn("space-y-4", className)}>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
        {title}
      </h3>

      <div
        className={cn(
          "grid grid-cols-1",
          "sm:grid-cols-2",
          "xl:grid-cols-3",
          "2xl:grid-cols-4",
          "gap-3 sm:gap-4 md:gap-5 xl:gap-6"
        )}
      >
        {PROJECTS.map((p, i) => {
          const isFeatured = featuredEvery > 0 && (i + 1) % featuredEvery === 0;

          return (
            <article
              key={p.title}
              className={cn(
                isFeatured ? "xl:col-span-full" : "",
                "rounded-2xl overflow-hidden",
                "border border-obsidianGray/60 bg-appBg/40",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                "h-full flex flex-col"
              )}
            >
              {/* thumb */}
              <div className="relative aspect-video bg-graphiteBlack/50">
                {p.thumb && (
                  <Image
                    src={p.thumb}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="
                      (min-width:1536px) 22vw,
                      (min-width:1280px) 30vw,
                      (min-width:1024px) 45vw,
                      (min-width:768px) 50vw,
                      100vw
                    "
                    priority={i < 2}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-midnightBlack/60 to-transparent" />
              </div>

              {/* conteúdo */}
              <div className="p-4 sm:p-5 text-textApp">
                <h4 className="font-semibold text-base sm:text-lg">
                  {p.title}
                </h4>
                {p.description && (
                  <p className="mt-1 text-xs sm:text-sm text-textApp/70">
                    {p.description}
                  </p>
                )}

                <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  {p.repoURL && (
                    <a
                      href={p.repoURL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-phoenixGold hover:underline"
                    >
                      Repositório
                    </a>
                  )}
                  {p.liveURL && (
                    <a
                      href={p.liveURL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-phoenixGold hover:underline"
                    >
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
