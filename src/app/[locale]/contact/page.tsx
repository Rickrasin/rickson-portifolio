import type { Metadata } from "next";
import CardSection from "@/components/ui/CardSection/CardSection";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";
import ContactSection from "@/components/pages/Contact/ContactSection";
import { Button } from "@/components/ui/Button/Button";
import { PiEnvelopeSimpleBold, PiWhatsappLogoBold } from "react-icons/pi";

const SITE_NAME = "Rickson Portifolio";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WAPP ?? "5521979688417";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "contato@example.com";

export const metadata: Metadata = {
    title: `Contato | ${SITE_NAME}`,
    description:
        "Fale comigo sobre seu projeto: orçamento, dúvidas e parcerias. Respondo por e‑mail e WhatsApp.",
    openGraph: {
        title: `Contato | ${SITE_NAME}`,
        description:
            "Fale comigo sobre seu projeto: orçamento, dúvidas e parcerias. Respondo por e‑mail e WhatsApp.",
        type: "website",
    },
    alternates: { canonical: "/contato" },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        mainEntity: {
            "@type": "Person",
            name: "Rickson",
            email: EMAIL,
            telephone: WHATSAPP_NUMBER,
        },
    } as const;

    const waText = encodeURIComponent("Olá! Vim pelo portfólio 👋");
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    return (
        <>
            {/* SEO JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <CardSection id="hero" ariaLabel="Fale comigo">
                <div className="flex flex-col items-center sm:items-start gap-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-appText tracking-tight">
                        Fale comigo
                    </h1>
                    <p className="text-base text-appText/80 max-w-3xl">
                        Me conte um pouco sobre seu projeto. Respondo normalmente no mesmo dia útil.
                    </p>
                    <div className="flex gap-4">
                        <Button href={`mailto:${EMAIL}`} leftIcon={<PiEnvelopeSimpleBold className="size-4" />}>
                            Enviar e‑mail direto
                        </Button>
                        <Button href={waHref} target="_blank" variant="whatsapp" leftIcon={<PiWhatsappLogoBold className="size-4" />}>
                            Falar no WhatsApp
                        </Button>
                    </div>
                </div>
            </CardSection>

            {/* Formulário */}
            <ContactSection />

            {/* Outras formas de contato / Observações */}
            <CardOutlineSection id="extras" ariaLabel="Informações adicionais">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-obsidianGray/60 bg-midnightBlack/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <h3 className="text-base md:text-lg font-medium text-textApp mb-1">Preferências</h3>
                        <p className="text-sm text-textApp/70">
                            Pode mandar links de referência (sites, marcas, inspirações) e requisitos essenciais. Se já tiver prazo e orçamento, me ajuda a ser mais assertivo.
                        </p>
                    </div>
                    <div className="rounded-xl border border-obsidianGray/60 bg-midnightBlack/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <h3 className="text-base md:text-lg font-medium text-textApp mb-1">Retorno</h3>
                        <p className="text-sm text-textApp/70">
                            Respondo por e‑mail e WhatsApp. Se preferir, posso marcar uma call rápida de 15 minutos para alinhar expectativas.
                        </p>
                    </div>
                </div>
            </CardOutlineSection>
        </>
    );
}
