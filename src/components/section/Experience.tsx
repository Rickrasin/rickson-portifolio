"use client";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/layout/Project/ProjectCard";
import EmptyCard from "@/components/layout/Project/EmptyCard";
import Card from "../ui/CardSection/CardSection";

type Props = { projects: Project[]; className?: string };

export default function Experience({ projects }: Props) {
  return (
    <Card id="experiencias" ariaLabel={"exp-heading"}>
      {/* Cabeçalho */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <h2
            id="exp-heading"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp"
          >
            Experiências
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>

        <p className="mt-2 sm:mt-3 text-sm md:text-base text-textApp/70">
          Ainda não tenho experiência formal em empresas,
          <strong className="text-textApp">
            {" "}
            mas atuo com trabalhos freelancers
          </strong>{" "}
          enquanto busco minha primeira oportunidade como dev.
        </p>
      </div>

      {projects?.length === 0 ? (
        <EmptyCard />
      ) : (
        <div
          className={[
            "grid grid-cols-1",
            "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3",
            "gap-3 sm:gap-4 md:gap-5 xl:gap-6"
          ].join(" ")}
        >
          {projects.map((p, key) => (
            <div key={key ?? p.title} className="h-full">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
