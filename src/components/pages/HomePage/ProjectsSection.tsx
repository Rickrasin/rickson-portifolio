"use client";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import ProjectCard from "@/components/layout/Project/ProjectCard";
import { PROJECTS } from "@/lib/data";
import { Button } from "@/components/ui/Button/Button";
import { MdArrowForward } from "react-icons/md";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

type ProjectsSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  maxVisible?: number;
  moreHref?: string;
};

export default function ProjectsSection({
  id = "projects",
  title = "Projetos",
  subtitle,
  maxVisible = 6,
  moreHref = "/projects"
}: ProjectsSectionProps) {
  const hasMore = PROJECTS.length > maxVisible;
  const items = hasMore ? PROJECTS.slice(0, maxVisible) : PROJECTS;

  return (
    <CardOutlineSection id={id} ariaLabel="Seção de Projetos">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 ">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
            {title}
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        {subtitle ? (
          <p className="text-sm md:text-base text-textApp/70">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Grid */}
      <div
        className={cn(
          "grid grid-cols-1",
          "lg:grid-cols-3",
          "xl:grid-cols-3",
          "2xl:grid-cols-3",
          "gap-4  xl:gap-4 2xl:gap-8"
        )}
      >
        {items.map((p, idx) => (
          <div key={`${p.title}-${idx}`} className="h-full">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      {/* Botão "ver todos" (só se tiver mais que maxVisible) */}
      {hasMore && (
        <div className="mt-4 sm:mt-6 flex justify-center">
          <Button
            href={moreHref}
            rightIcon={<MdArrowForward />}
            variant="primary"
          >
            Ver todos os projetos
          </Button>
        </div>
      )}
    </CardOutlineSection>
  );
}
