import { ElementType } from "react";

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

export type SocialTicker = {
  icon: ElementType;
  platform: string;
  href: string;
  handle: string;
  label?: string;
};

export type Project = {
  title: string;
  description: string;
  liveURL?: string;
  repoURL?: string;
  thumb?: string;
  tags?: string[];
};
