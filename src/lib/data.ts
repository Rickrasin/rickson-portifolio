import {
  FiHome,
  FiTool,
  FiFolderMinus,
  FiMail,
} from "react-icons/fi";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiPython,
} from "react-icons/si";

import {
  MdBolt,
  MdApartment,
  MdDashboard,
  MdAutoAwesome,
} from "react-icons/md";

import { TbLetterZ } from "react-icons/tb";
import { RiFileList3Line } from "react-icons/ri";

import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa6";

import {
  NavItem,
  Project,
  ServiceItem,
  SocialItem,
  StackItem,
} from "@/lib/types";

export const NAV: NavItem[] = [
  { label: "Home", href: "/#hero", icon: FiHome },
  { label: "Services", href: "/#services", icon: FiTool },
  { label: "Projects", href: "/#projects", icon: FiFolderMinus },
  { label: "Contact", href: "/#contact", icon: FiMail },
];

export const SOCIALS: SocialItem[] = [
  { label: "Github", icon: FaGithub, href: "https://github.com/seu-usuario" },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    href: "https://linkedin.com/seu-usuario",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Landing Pages",
    desc: "Páginas ultrarrápidas e focadas em conversão, com SEO e tracking prontos.",
    icon: MdBolt,
    href: "/contato",
    ctaLabel: "Planejar campanha",
    badge: "Alta conversão",
    highlights: ["Teste A/B", "Pixel e eventos", "Copy orientada a CTA"],
    color: "#eebb46",
  },
  {
    title: "Sites Institucionais",
    desc: "Sites modernos, responsivos e fáceis de editar, com CMS e acessibilidade.",
    icon: MdApartment,
    href: "/contato",
    ctaLabel: "Solicitar proposta",
    highlights: ["Next.js + CMS", "SEO técnico", "Design responsivo"],
  },
  {
    title: "Web Apps",
    desc: "Aplicações sob medida (ex.: dashboards, CRMs, delivery) com auth e integrações.",
    icon: MdDashboard,
    href: "/contato",
    ctaLabel: "Discutir requisitos",
    highlights: ["RBAC/Auth", "APIs & Webhooks", "Observabilidade"],
  },
  {
    title: "Automação de Processos",
    desc: "Integrações e automações (no-code/low-code/scripts) para reduzir tarefas repetitivas e erros.",
    icon: MdAutoAwesome,
    href: "/contato",
    ctaLabel: "Mapear fluxos",
    badge: "Novo",
    highlights: ["Zaps/Make", "Bots e cron jobs", "Planilhas → APIs"],
    
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Calculadora de IMC",
    description: "Uma calculadora de IMC simples e responsiva, feita pra você inserir peso e altura e já ver seu resultado na hora.",
    repoURL: "https://rickrasin.github.io/BMI-Calculator/",
    liveURL: "https://rickrasin-imc-calculator.netlify.app/",
    tags: ["React ", "Tailwind"],
    thumb: "/bmi-frontendmentor.png"
  },
  {
    title: "TIFUNS",
    description:
      "Portal gamer com notícias, guias e cobertura de e-sports, organizado por categorias (Destaques, Animes, Jogos e E-sports) e focado em conteúdo direto ao ponto.",
    liveURL: "https://www.tifuns.com",
    tags: ["Next.js","Blog", "SEO"],
    thumb: "/tifuns-portifolio.png"
  },
  {
    title: "Space Tourism Website",
    description: "Landing page responsiva inspirada em turismo espacial, com navegação por seções e layout moderno — projeto de estudo focado em UI/UX e organização de componentes.",
    liveURL: "https://rickrasin.github.io/Space-Tourism-Website/",
    repoURL: "https://github.com/Rickrasin/Space-Tourism-Website",
    tags: ["Responsividade", "UI/UX", "Estudos"],
    thumb: "/space-tourism-website.png"
  },
  {
  title: "Web Dictionary",
  description:
    "Dicionário web com busca de palavras e exibição de definições, com foco em UI simples e experiência rápida — projeto de estudo para consumo de API e manipulação de estados.",
  liveURL: "https://rickrasin.github.io/Web-Dictionary/",
  repoURL: "https://github.com/Rickrasin/Web-Dictionary",
  tags: ["API", "JavaScript", "React"],
  thumb: "/web-dictionary.png",
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
    icon: FaDiscord,
    platform: "Discord",
    href: "https://discordapp.com/users/274550730931699712",
    handle: "@rickras",
  },
];

export const STACKS: StackItem[] = [
  // Linguagens
  {
    id: "ts",
    slug: "typescript",
    label: "TypeScript",
    category: "Language",
    icon: SiTypescript,
    site: "https://www.typescriptlang.org/",
    color: "#3178C6",
  },
  {
    id: "js",
    slug: "javascript",
    label: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    site: "https://developer.mozilla.org/",
    color: "#F7DF1E",
  },
  {
    id: "py",
    slug: "python",
    label: "Python",
    category: "Language",
    icon: SiPython,
    site: "https://www.python.org/",
    color: "#3776AB",
  },

  // Frameworks
  {
    id: "react",
    slug: "react",
    label: "React",
    category: "Framework",
    icon: SiReact,
    site: "https://react.dev/",
    color: "#61DAFB",
  },
  {
    id: "next",
    slug: "nextjs",
    label: "Next.js",
    category: "Framework",
    icon: SiNextdotjs,
    site: "https://nextjs.org/",
    color: "#FFF",
  },
  {
    id: "tw",
    slug: "tailwind",
    label: "Tailwind CSS",
    category: "Framework",
    icon: SiTailwindcss,
    site: "https://tailwindcss.com/",
    color: "#06B6D4",
  },

  // Librarys
  {
    id: "redux",
    slug: "redux",
    label: "Redux",
    category: "Library",
    icon: SiRedux,
    site: "https://redux.js.org/",
    color: "#764ABC",
  },
  {
    id: "rhf",
    slug: "react-hook-form",
    label: "React Hook Form",
    category: "Library",
    icon: RiFileList3Line,
    site: "https://react-hook-form.com/",
    color: "#EC5990", // cor de marca do RHF
  },
  {
    id: "zod",
    slug: "zod",
    label: "Zod",
    category: "Library",
    icon: TbLetterZ,
    site: "https://zod.dev/",
    color: "#3E67B1", // azul do logo/site do Zod
  },

  // Database
  {
    id: "mongo",
    slug: "mongodb",
    label: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    site: "https://www.mongodb.com/",
    color: "#47A248",
  },
  {
    id: "mysql",
    slug: "mysql",
    label: "MySQL",
    category: "Database",
    icon: SiMysql,
    site: "https://www.mysql.com/",
    color: "#4479A1",
  },
  {
    id: "pg",
    slug: "postgresql",
    label: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    site: "https://www.postgresql.org/",
    color: "#4169E1",
  },

  // Cloud
  {
    id: "vercel",
    slug: "vercel",
    label: "Vercel",
    category: "Cloud",
    icon: SiVercel,
    site: "https://vercel.com/",
    color: "#FFF",
  },
  {
    id: "netlify",
    slug: "netlify",
    label: "Netlify",
    category: "Cloud",
    icon: SiNetlify,
    site: "https://www.netlify.com/",
    color: "#00C7B7",
  },

  // Runtime
  {
    id: "node",
    slug: "node",
    label: "Node.js",
    category: "Runtime",
    icon: SiNodedotjs,
    site: "https://nodejs.org/",
    color: "#5FA04E",
  },

  // DevTools
  {
    id: "git",
    slug: "git",
    label: "Git",
    category: "DevTool",
    icon: SiGit,
    site: "https://git-scm.com/",
    color: "#F05032",
  },
  {
    id: "github",
    slug: "github",
    label: "GitHub",
    category: "DevTool",
    icon: SiGithub,
    site: "https://github.com/",
    color: "#181717",
  },

  // Design
  {
    id: "figma",
    slug: "figma",
    label: "Figma",
    category: "Design",
    icon: SiFigma,
    site: "https://www.figma.com/",
    color: "#F24E1E",
  },
];

export const FEATURED_STACK_IDS = [
  "react",
  "ts",
  "next",
  "tw",
  "node",
  "pg",
  "mongo",
  "vercel",
  "zod",
  "rhf",
  "git",
  "figma",
] as const;

export const SERVICEFLOW = [
  {
    t: "Briefing",
    d: "Entendo sua necessidade, público e objetivo (rápido e direto).",
  },
  {
    t: "Proposta",
    d: "Escopo fechado, prazos e investimento transparentes.",
  },
  {
    t: "Design & Dev",
    d: "UI moderna, performance e SEO técnico desde o início.",
  },
  {
    t: "Lançamento",
    d: "Deploy, monitoramento inicial e suporte para ajustes.",
  },
];
