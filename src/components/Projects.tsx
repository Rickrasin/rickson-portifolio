import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h3 className="text-xl font-semibold">Projetos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl bg-[#0A0A0A] border border-[#1C282F] overflow-hidden"
          >
            {/* thumb */}
            <div className="relative aspect-video bg-[#111A20]">
              {p.thumb && (
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              )}
            </div>

            {/* conteúdo */}
            <div className="p-5">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-[#A7B1B8]">{p.description}</p>

              <div className="mt-3 flex gap-4 text-sm">
                {p.repo && (
                  <a href={p.repo} className="text-[#EEBB46] hover:underline">
                    Repositório
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} className="text-[#EEBB46] hover:underline">
                    Deploy
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
