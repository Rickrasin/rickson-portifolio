"use client";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import ProjectCard from "../layout/Project/ProjectCard";
import { PROJECTS } from "@/lib/data";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

type ProjectsSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  featuredEvery?: number; // 0 = desativa destaque
  className?: string;
};

export default function ProjectsSection({
  id = "projects",
  title = "Projetos",
  subtitle
}: ProjectsSectionProps) {
  return (
    <CardOutlineSection id={id} ariaLabel="Seção de Projetos">
      {/* Cabeçalho */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
            {title}
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        {subtitle ? (
          <p className="mt-2 sm:mt-3 text-sm md:text-base text-textApp/70">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Grid de cards (sem Card wrapper) */}
      <div
        className={cn(
          "grid grid-cols-1",
          "lg:grid-cols-3",
          "xl:grid-cols-3",
          "2xl:grid-cols-4",
          "gap-3 sm:gap-4 md:gap-5 xl:gap-6"
        )}
      >
        {PROJECTS.map((p, id) => (
          <div key={id} className="h-full">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </CardOutlineSection>
  );
}
