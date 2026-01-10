
"use client";
import * as React from "react";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import ProjectCard from "@/components/layout/Project/ProjectCard";
import { Button } from "@/components/ui/Button/Button";
import { MdArrowDownward } from "react-icons/md";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/types";
import SearchInput from "@/components/ui/Field/SearchInput";
import Chip from "@/components/ui/Chips/Chip";
import SortSelect from "@/components/ui/Select/SortSelect";

function cn(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

// Tag helpers
function collectAllTags(items: Project[]): string[] {
    const set = new Set<string>();
    items.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function useDebounced<T>(value: T, delay = 250) {
    const [v, setV] = React.useState(value);
    React.useEffect(() => {
        const t = setTimeout(() => setV(value), delay);
        return () => clearTimeout(t);
    }, [value, delay]);
    return v;
}

const sorters = {
    featured: (a: Project, b: Project) => Number(b.featured) - Number(a.featured),
    title: (a: Project, b: Project) => a.title.localeCompare(b.title),
    newest: (a: Project, b: Project) => {
        const da = a.date ? Date.parse(a.date) : a.year ? Date.parse(`${a.year}-01-01`) : 0;
        const db = b.date ? Date.parse(b.date) : b.year ? Date.parse(`${b.year}-01-01`) : 0;
        return db - da;
    },
};

type SortKey = keyof typeof sorters;

export default function ProjectsPage() {
    const all = React.useMemo(() => (PROJECTS as Project[]) || [], []);
    const allTags = React.useMemo(() => collectAllTags(all), [all]);

    const [query, setQuery] = React.useState("");
    const [activeTags, setActiveTags] = React.useState<string[]>([]);
    const [sortKey, setSortKey] = React.useState<SortKey>("featured");
    const [perPage, setPerPage] = React.useState(9);

    const debouncedQuery = useDebounced(query, 200);

    const filtered = React.useMemo(() => {
        let out = [...all];

        if (activeTags.length) {
            out = out.filter((p) => {
                const tags = p.tags || [];
                return activeTags.every((t) => tags.includes(t));
            });
        }

        if (debouncedQuery.trim()) {
            const q = debouncedQuery.toLowerCase();
            out = out.filter((p) =>
                [p.title, p.description, (p.tags || []).join(" ")]
                    .filter(Boolean)
                    .some((s) => String(s).toLowerCase().includes(q))
            );
        }

        out = out
            .map((p, i) => ({ p, i }))
            .sort((A, B) => {
                const cmp = sorters[sortKey](A.p, B.p);
                return cmp !== 0 ? cmp : A.i - B.i;
            })
            .map(({ p }) => p);

        return out;
    }, [all, activeTags, debouncedQuery, sortKey]);

    const visible = filtered.slice(0, perPage);
    const canLoadMore = filtered.length > visible.length;

    function toggleTag(tag: string) {
        setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
    }

    function clearFilters() {
        setActiveTags([]);
        setQuery("");
    }

    const featured = React.useMemo(() => {
        const f = all.filter((p) => p.featured);
        if (f.length >= 3) return f.slice(0, 3);
        return all.slice(0, 3);
    }, [all]);

    return (
        <main className="space-y-8">
            {/* Hero no estilo Services */}
            <CardOutlineSection id="hero" ariaLabel="Projetos">
                <div className="flex flex-col gap-2 text-center md:text-start">
                    <div className="flex items-center justify-center md:justify-start gap-4 ">
                        <span className=" md:hidden h-px flex-1 bg-gradient-to-l from-azureEdge/60 via-azureSoft/40 to-transparent" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
                            Projetos
                        </h2>
                        <span className=" md:hidden h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
                        <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
                    </div>
                    <p className="text-sm md:text-base text-textApp/70 ">
                        Sites, apps e experiências que construí recentemente. Use a busca, os filtros e a ordenação para explorar por tecnologia ou objetivo.
                    </p>
                </div>
            </CardOutlineSection>

            {/* Destaques */}
            <CardOutlineSection id="featured" ariaLabel="Projetos em destaque">
                <div className={cn("grid gap-4", "lg:grid-cols-3 2xl:gap-6")}>
                    {featured.map((p, i) => (
                        <div key={`featured-${p.title}-${i}`} className="h-full">
                            <ProjectCard {...p} />
                        </div>
                    ))}
                </div>
            </CardOutlineSection>

            {/* Filtros/Busca */}
            <CardOutlineSection id="filters" ariaLabel="Filtros e busca de projetos">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <SearchInput value={query} onChange={setQuery} placeholder="Buscar por título, tag ou descrição…" />
                        <SortSelect value={sortKey} onChange={(v) => setSortKey(v as SortKey)} />
                    </div>

                    {allTags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                            {allTags.map((tag) => (
                                <Chip key={tag} active={activeTags.includes(tag)} onClick={() => toggleTag(tag)}>
                                    {tag}
                                </Chip>
                            ))}

                            {(activeTags.length > 0 || query) && (
                                <button
                                    onClick={clearFilters}
                                    className="ml-auto rounded-full border border-obsidianGray/60 px-3 py-1 text-xs md:text-sm text-textApp/80 hover:text-textApp"
                                >
                                    Limpar filtros
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </CardOutlineSection>

            {/* Lista */}
            <CardOutlineSection id="all-projects" ariaLabel="Lista de Projetos">
                <div className={cn("grid grid-cols-1 gap-4", "lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 2xl:gap-6")}>
                    {visible.map((p, idx) => (
                        <div key={`${p.title}-${idx}`} className="h-full">
                            <ProjectCard {...p} />
                        </div>
                    ))}
                </div>

                {visible.length === 0 && (
                    <p className="text-sm md:text-base text-textApp/70">Nenhum projeto encontrado com os filtros atuais.</p>
                )}

                {canLoadMore && (
                    <div className="mt-6 flex justify-center">
                        <Button onClick={() => setPerPage((v) => v + 9)} rightIcon={<MdArrowDownward />} variant="primary">
                            Carregar mais
                        </Button>
                    </div>
                )}
            </CardOutlineSection>
        </main>
    );
}
