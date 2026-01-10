import type { Metadata } from "next";

const SITE_NAME = "Rickson Portifólio";
const SITE_URL = "https://rickson.dev";
const OG_IMAGE = `${SITE_URL}/og.png`; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },

  description:
    "Portfólio de Rickson — projetos, experiências e skills em desenvolvimento web.",

  applicationName: SITE_NAME,
  authors: [{ name: "Rickson", url: SITE_URL }],
  creator: "Rickson",
  publisher: "Rickson",

  category: "technology",
  keywords: [
    "Rickson",
    "Portfólio",
    "Frontend",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX",
    "Web Developer"
  ],

  alternates: {
    canonical: "/",
    // Se você realmente tiver rotas por idioma, descomente e ajuste:
    languages: {
      "pt-BR": "/pt-BR",
      en: "/en"
    }
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
    { url: "/icon.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon.svg", type: "image/svg+xml" } 
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
},

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description:
      "Portfólio de Rickson — projetos, experiências e skills em desenvolvimento web.",
    siteName: SITE_NAME,
    locale: "pt_BR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — projetos e experiências`
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Portfólio de Rickson — projetos, experiências e skills em desenvolvimento web.",
    images: [OG_IMAGE],
    creator: "@seu_user" // opcional
  },

  verification: {
    google: "IjJbsWzWXHhwemgbu1hy4kx4sNRFp"
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" }
  ]
};
