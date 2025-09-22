"use client";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/layout/Project/ProjectCard";
import EmptyCard from "@/components/layout/Project/EmptyCard";
import Card from "@/components/ui/CardSection/CardSection";

type Props = {
  title: string;
  subtitle: string | React.ReactNode;
  projects: Project[];
  maxVisible?: number; // limite de itens exibidos (default: 3)
};

export default function ExperienceSection({ title = "Experiências", subtitle = <>
  Ainda sem experiência formal, <strong>atuo como freelancer</strong> e
  busco minha primeira oportunidade como dev.
</>, projects, maxVisible = 3 }: Props) {
  const visible = (projects ?? []).slice(0, Math.max(0, maxVisible));

  return (
    <Card id="experiencias" ariaLabel={"exp-heading"}>
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp"
          >
            {title}
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        <p className="text-sm md:text-base text-textApp/70">
          {subtitle}
        </p>
      </div>

      {visible.length === 0 ? (
        <EmptyCard />
      ) : (
        <div
          className={[
            "grid grid-cols-1",
            "lg:grid-cols-2 xl:grid-cols-3",
            "gap-3 sm:gap-4 md:gap-5 xl:gap-6"
          ].join(" ")}
        >
          {visible.map((p, key) => (
            <div key={key ?? p.title} className="h-full">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
