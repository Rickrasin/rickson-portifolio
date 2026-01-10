import type { Metadata } from "next";

const PERSON_NAME = "Rickson de Oliveira";
const BRAND_NAME = "Rickson.dev";
const SITE_URL = "https://rickson.dev";

const DEFAULT_TITLE = `Desenvolvedor Full Stack | ${PERSON_NAME}`;
const TITLE_TEMPLATE = `%s | ${PERSON_NAME}`;

const DEFAULT_DESCRIPTION =
  "Desenvolvedor Full Stack (React, Next.js, Node.js, TypeScript). Construo produtos digitais do front ao back — interfaces modernas, integrações e APIs. Veja projetos e entre em contato.";

const OG_IMAGE = "/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE
  },

  description: DEFAULT_DESCRIPTION,

  applicationName: BRAND_NAME,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,

  category: "technology",
  keywords: [
    PERSON_NAME,
    "desenvolvedor full stack",
    "full stack developer",
    "freelancer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "API",
    "integrações",
    "frontend",
    "backend",
    "web app",
    "SaaS",
    "UX",
    "performance",
    "SEO"
  ],

  alternates: {
    canonical: "/"
    // Só inclua languages se você tiver rotas reais:
    // languages: { "pt-BR": "/", en: "/en" }
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  icons: {
    icon: [
      { url: "/favicon.ico" }, // altamente recomendado p/ compatibilidade
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: BRAND_NAME,
    locale: "pt_BR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${PERSON_NAME} — Desenvolvedor Full Stack`
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE]
  },

  verification: {
    google: "IjJbsWzWXHhwemgbu1hy4kx4sNRFp"
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" }
  ]
};
