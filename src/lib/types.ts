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
  handle: string; // o que aparece no ticker (ex.: @seuuser ou /in/seuuser)
  label?: string; // opcional, caso queira um texto diferente
};
