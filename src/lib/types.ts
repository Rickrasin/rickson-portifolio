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
  | "Linguagem"
  | "Framework"
  | "Lib"
  | "Banco"
  | "Cloud"
  | "Runtime"
  | "DevTool"
  | "Design";

export type StackItem = {
  id: string;
  slug: string;
  label: string;
  category:
    | "Linguagem"
    | "Framework"
    | "Lib"
    | "Banco"
    | "Cloud"
    | "Runtime"
    | "DevTool"
    | "Design";
  icon: IconType;
  site: string; // link oficial
  color: string; // cor principal da marca
};
