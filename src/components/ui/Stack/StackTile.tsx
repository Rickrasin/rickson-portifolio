import type { IconType } from "react-icons";
import { Link } from "@/i18n/navigation";
import { MdArrowOutward } from "react-icons/md";

export type StackTileProps = {
  icon: IconType;
  label: string;
  site: string;
  color?: string | string;
  category: string;
  className?: string;
  iconSize?: number;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function StackTile({
  icon: Icon,
  label,
  site,
  category,
  color = "#A7B1B8",
  className,
  iconSize = 20
}: StackTileProps) {
  return (
    <Link
      href={site}
      target="_blank "
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between rounded-lg border px-3 py-2 text-sm",
        "hover:bg-graphiteBlack/60 transition-colors duration-300",
        className
      )}
      style={{ borderColor: color }}
      aria-label={label}
      title={label}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "bg-appBgSecondary hover:bg-graphiteBlack",
            "p-2.5 rounded-lg"
          )}
        >
          <Icon size={iconSize} style={{ color }} className="shrink-0" />
        </div>
        <div className="flex flex-col">
          <span className={``} style={{ color }}>{label}</span>
          <span className={`text-xs text-appText/80`} >{category}</span>
        </div>
      </div>
      <MdArrowOutward />
    </Link >
  );
}
