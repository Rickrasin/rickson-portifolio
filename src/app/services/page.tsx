import Link from "next/link";
import ServicesSection from "@/components/pages/HomePage/ServicesSection";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import type { Metadata } from "next";
import { SERVICEFLOW, SERVICES } from "@/lib/data";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/Button/Button";
import CardSection from "@/components/ui/CardSection/CardSection";
import FooterSection from "@/components/layout/Footer/FooterSection";


export const metadata: Metadata = {
    title: "Serviços | Rickson Portifolio",
    description:
        "Criação de Landing Pages, Sites Institucionais, Web Apps e Automações. Desenvolvimento moderno, rápido e focado em conversão.",
    openGraph: {
        title: "Serviços | Rickson Portifolio",
        description:
            "Criação de Landing Pages, Sites Institucionais, Web Apps e Automações.",
        type: "website",
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Desenvolvimento Web",
        provider: {
            "@type": "Person",
            name: "Rickson",
        },
        areaServed: "Brasil",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Catálogo de Serviços",
            itemListElement: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, description: s.desc },
            })),
        },
    } as const;

    return (
        <>
            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <CardSection
                id="hero"
                ariaLabel="Serviços"
            >
                <div className="flex flex-col items-center sm:items-start gap-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-appText tracking-tight">
                        Serviços
                    </h1>
                    <p className="text-base text-appText/80">
                        Sites rápidos, acessíveis e com visual moderno. Eu cuido de tudo:
                        do layout ao deploy. Veja abaixo o que posso fazer por você e como
                        é meu processo de trabalho.
                    </p>
                    <div>
                        <Button href="/contato" rightIcon={<MdArrowOutward className="size-4" />} >
                            Solicitar orçamento
                        </Button>
                    </div>
                </div>
            </CardSection>


            {/* Lista de Serviços */}
            < ServicesSection
                title="O que eu faço"
                services={SERVICES}
            />

            {/* Processo de trabalho */}
            < CardOutlineSection id="processo" ariaLabel="Processo de Trabalho" >
                <div className="flex flex-col gap-2 text-center md:text-start">
                    <div className="flex items-center justify-center md:justify-start gap-4 ">
                        <span className=" md:hidden h-px flex-1 bg-gradient-to-l from-azureEdge/60 via-azureSoft/40 to-transparent" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
                            Como trabalho
                        </h2>
                        <span className=" md:hidden h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
                        <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
                    </div>
                    <p className="text-sm md:text-base text-textApp/70 ">
                        Um fluxo enxuto para tirar seu projeto do papel, com comunicação
                        clara e prazos realistas.
                    </p>
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
                    {SERVICEFLOW.map((i, idx) => (
                        <li
                            key={i.t}
                            className="flex flex-col gap-1 rounded-xl border border-obsidianGray/60 bg-midnightBlack/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                        >
                            <div className="text-xs text-phoenixGold">Etapa {idx + 1}</div>
                            <div className=" text-base md:text-lg font-medium text-textApp">
                                {i.t}
                            </div>
                            <p className=" text-sm text-textApp/70">{i.d}</p>
                        </li>
                    ))}
                </ol>
            </ CardOutlineSection >

            {/* CTA final */}
            < CardSection id="cta" ariaLabel="Entre em contato" >
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row text-center sm:text-start md:text-center lg:text-start gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
                            Pronto para começar?
                        </h2>
                        <p className=" text-sm md:text-base text-textApp/70 max-w-2xl">
                            Me conte sobre seu projeto. Posso sugerir o melhor formato e já
                            estimar valores e prazos.
                        </p>
                    </div>
                    <div className="my-auto">
                        <Button href="/contato" rightIcon={<MdArrowOutward className="" />} >
                            Falar comigo
                        </Button>
                    </div>
                </div>
            </CardSection >
            <FooterSection />
        </>
    );
}
