import {
  FiHome,
  FiTool,
  FiFolderMinus,
  FiMail,
  FiTwitter
} from "react-icons/fi";

import { FaDiscord, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

import { NavItem, Project, SocialItem, SocialTicker } from "@/lib/types";

export const NAV: NavItem[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Services", href: "/services", icon: FiTool },
  { label: "Projects", href: "/projects", icon: FiFolderMinus },
  { label: "Contact", href: "/contact", icon: FiMail }
];

export const SOCIALS: SocialItem[] = [
  { label: "Github", icon: FaGithub, href: "https://github.com/seu-usuario" },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    href: "https://linkedin.com/seu-usuario"
  },
  {
    label: "Twitter",
    icon: FiTwitter,
    href: "https://twitter.com/seu-usuario"
  }
];

export const STACKS = [
  "React",
  "Next.js",
  "Tailwind",
  "Node",
  "Parse Server",
  "Flutter"
];

export const SERVICES = [
  { title: "Landing Pages", desc: "Páginas rápidas focadas em conversão" },
  {
    title: "Sites Institucionais",
    desc: "Sites modernos, responsivos e fáceis de editar"
  },
  {
    title: "Web Apps",
    desc: "Sistemas sob medida (ex.: delivery, dashboards)"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Projeto 1",
    description: "Landing page com foco em conversão e performance.",
    repoURL: "/projetos/projeto-1",
    tags: ["Next.js", "Tailwind", "SEO"]
    // thumb: "/images/projeto-1.jpg"
  },
  {
    title: "Projeto 2",
    description: "Painel web com autenticação e gráficos.",
    repoURL: "/projetos/projeto-2",
    tags: ["React", "Charts", "Auth"]
  },
  {
    title: "Projeto 3",
    description: "Website institucional responsivo.",
    repoURL: "/projetos/projeto-3",
    tags: ["Acessibilidade", "Design System"]
  }
];

export const SOCIAL_TICKER: SocialItem[] = [
  {
    icon: FaGithub,
    platform: "github",
    href: "https://github.com/Rickrasin",
    handle: "@Rickrasin"
  },
  {
    icon: FaLinkedin,
    platform: "linkedin",
    href: "https://www.linkedin.com/in/ricksondev/",
    handle: "/in/ricksondev/"
  },
  {
    icon: FaXTwitter,
    platform: "x",
    href: "https://x.com/Rickrasin",
    handle: "@Rickrasin"
  },
  {
    icon: FaDiscord,
    platform: "Discord",
    href: "https://discordapp.com/users/274550730931699712",
    handle: "@rickras"
  }
];
