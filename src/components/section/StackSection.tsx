"use client";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import { STACKS, FEATURED_STACK_IDS } from "@/lib/data/data";
import { Button } from "@/components/ui/buttons/Button";
import StackTile from "@/components/ui/Stack/StackTile";

type StacksSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  maxVisible?: number;
  moreHref?: string;
  featuredIds?: string[];
};

export default function StacksSection({
  id = "stacks",
  title = "Minhas Stacks",
  subtitle,
  maxVisible = 12,
  moreHref = "/stacks",
  featuredIds = FEATURED_STACK_IDS as unknown as string[]
}: StacksSectionProps) {
  const featuredAll = STACKS.filter((s) => featuredIds.includes(s.id));
  const items = featuredAll.slice(0, maxVisible);
  const hasMore = featuredAll.length > maxVisible;

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

      <ul
        className={[
          "grid",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          "",
          "gap-3 md:gap-4"
        ].join(" ")}
      >
        {items.map((s) => (
          <li key={s.id} className="min-h-0">
            <StackTile
              icon={s.icon}
              label={s.label}
              site={s.site}
              color={s.color}
              iconSize={20}
            />
          </li>
        ))}
      </ul>

      {/* CTA opcional */}
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
