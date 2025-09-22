import { ElementType } from "react";
import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
  icon: ElementType;
};

export type SocialItem = {
  icon: ElementType;
  platform?: string;
  label?: string;
  href: string;
  handle?: string;
};

export type Project = {
  title: string;
  description: string;
  liveURL?: string;
  repoURL?: string;
  thumb?: string;
  tags?: string[];
};

export type StackCategory =
  | "Language"
  | "Framework"
  | "Library"
  | "Database"
  | "Cloud"
  | "Runtime"
  | "DevTool"
  | "Design";

export type StackItem = {
  id: string;
  slug: string;
  label: string;
  category: StackCategory;
  icon: IconType;
  site: string; // link oficial
  color: string; // cor principal da marca
};

export type ServiceItem = {
  title: string;
  desc: string;
  icon?: IconType;
  href?: string;
  ctaLabel?: string;
  badge?: string;
  highlights?: string[];
  color?: string;
};
