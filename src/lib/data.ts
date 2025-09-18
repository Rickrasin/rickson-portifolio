import {
  FiHome,
  FiTool,
  FiFolderMinus,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

import { FaDiscord, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

import { NavItem, SocialItem, SocialTicker } from "@/lib/types";

export const NAV: NavItem[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Services", href: "/services", icon: FiTool },
  { label: "Projects", href: "/projects", icon: FiFolderMinus },
  { label: "Contact", href: "/contact", icon: FiMail },
];

export const SOCIALS: SocialItem[] = [
  { label: "Github", icon: FaGithub, href: "https://github.com/seu-usuario" },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    href: "https://linkedin.com/seu-usuario",
  },
  {
    label: "Twitter",
    icon: FiTwitter,
    href: "https://twitter.com/seu-usuario",
  },
];

export const STACKS = [
  "React",
  "Next.js",
  "Tailwind",
  "Node",
  "Parse Server",
  "Flutter",
];

export const SERVICES = [
  { title: "Landing Pages", desc: "Páginas rápidas focadas em conversão" },
  {
    title: "Sites Institucionais",
    desc: "Sites modernos, responsivos e fáceis de editar",
  },
  {
    title: "Web Apps",
    desc: "Sistemas sob medida (ex.: delivery, dashboards)",
  },
];

export const PROJECTS = [
  {
    title: "Projeto 1",
    description: "Breve descrição do projeto, tecnologia usada e objetivo.",
    repo: "#",
    demo: "#",
    thumb: "", // coloque um /thumb1.jpg em public/ se quiser
  },
  {
    title: "Projeto 2",
    description: "Outro projeto com foco em UX e performance.",
    repo: "#",
    demo: "#",
    thumb: "",
  },
  {
    title: "Projeto 3",
    description: "Exemplo de app fullstack com Next.js + Parse.",
    repo: "#",
    demo: "#",
    thumb: "",
  },
];

export const SOCIAL_TICKER: SocialItem[] = [
  {
    icon: FaGithub,
    platform: "github",
    href: "https://github.com/Rickrasin",
    handle: "@Rickrasin",
  },
  {
    icon: FaLinkedin,
    platform: "linkedin",
    href: "https://www.linkedin.com/in/ricksondev/",
    handle: "/in/ricksondev/",
  },
  {
    icon: FaXTwitter,
    platform: "x",
    href: "https://x.com/Rickrasin",
    handle: "@Rickrasin",
  },
  {
    icon: FaDiscord,
    platform: "Discord",
    href: "https://discordapp.com/users/274550730931699712",
    handle: "@rickras",
  },
];
