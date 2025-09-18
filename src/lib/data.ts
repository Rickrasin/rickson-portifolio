import {
  FiHome,
  FiTool,
  FiFolderMinus,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDribbble
} from "react-icons/fi";
import { NavItem, SocialItem, SocialTicker } from "@/types";

export const NAV: NavItem[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Services", href: "/services", icon: FiTool },
  { label: "Projects", href: "/projects", icon: FiFolderMinus },
  { label: "Contact", href: "/contact", icon: FiMail }
];

export const SOCIALS: SocialItem[] = [
  { label: "Github", icon: FiGithub, href: "https://github.com/seu-usuario" },
  {
    label: "Linkedin",
    icon: FiLinkedin,
    href: "https://linkedin.com/seu-usuario"
  },
  { label: "Twitter", icon: FiTwitter, href: "https://twitter.com/seu-usuario" }
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

export const PROJECTS = [
  {
    title: "Projeto 1",
    description: "Breve descrição do projeto, tecnologia usada e objetivo.",
    repo: "#",
    demo: "#",
    thumb: "" // coloque um /thumb1.jpg em public/ se quiser
  },
  {
    title: "Projeto 2",
    description: "Outro projeto com foco em UX e performance.",
    repo: "#",
    demo: "#",
    thumb: ""
  },
  {
    title: "Projeto 3",
    description: "Exemplo de app fullstack com Next.js + Parse.",
    repo: "#",
    demo: "#",
    thumb: ""
  }
];

export const SOCIAL_TICKER: SocialTicker[] = [
  {
    icon: FiGithub,
    platform: "github",
    href: "https://github.com/seuuser",
    handle: "@seuuser"
  },
  {
    icon: FiLinkedin,
    platform: "linkedin",
    href: "https://linkedin.com/in/seuuser",
    handle: "/in/seuuser"
  },
  {
    icon: FiTwitter,
    platform: "x",
    href: "https://x.com/seuuser",
    handle: "@seuuser"
  },
  {
    icon: FiDribbble,
    platform: "dribbble",
    href: "https://dribbble.com/seuuser",
    handle: "@seuuser"
  }
];
