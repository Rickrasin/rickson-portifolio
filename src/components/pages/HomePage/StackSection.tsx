import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import StackTile from "@/components/ui/Stack/StackTile";
import { Button } from "@/components/ui/asdas/Button";
import { StackItem } from "@/lib/types";

type StacksSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  maxVisible?: number;
  moreHref?: string;
  stacks: StackItem[];
  featuredIds?: string[] | undefined | unknown;
};

export default function StacksSection({
  id = "stacks",
  title = "Minhas Stacks",
  subtitle,
  maxVisible = 12,
  moreHref = "/stacks",
  stacks,
  featuredIds
}: StacksSectionProps) {
  const featuredSet =
    Array.isArray(featuredIds) && featuredIds.length > 0
      ? new Set<string>(featuredIds.map(String))
      : null;

  const filtered = featuredSet
    ? stacks.filter((s) => featuredSet.has(s.id))
    : stacks;

  const items = filtered.slice(0, Math.max(0, maxVisible));
  const hasMore = filtered.length > maxVisible;
  const isFilteredButEmpty = featuredSet && filtered.length === 0;

  return (
    <CardOutlineSection id={id} ariaLabel="Seção de Stacks">
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
            {title}
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-textApp/70">
            {subtitle}
          </p>
        )}
      </div>

      {isFilteredButEmpty ? (
        <div className="rounded-lg border border-obsidianGray/60 bg-appBg/40 p-4 text-textApp/80">
          Nenhuma stack encontrada para os IDs selecionados.
        </div>
      ) : (
        <ul
          className={[
            "grid",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            "gap-3 md:gap-4"
          ].join(" ")}
        >
          {items.map((s) => (
            <li key={s.id} className="min-h-0">
              <StackTile
                icon={s.icon}
                label={s.label}
                category={s.category}
                site={s.site}
                color={s.color}
                iconSize={20}
              />
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {hasMore && (
        <div className="mt-6 text-center">
          <Button href={moreHref} variant="primary">
            Ver mais
          </Button>
        </div>
      )}
    </CardOutlineSection>
  );
}
