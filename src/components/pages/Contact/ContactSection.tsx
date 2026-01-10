"use client";
import { useMemo, useState } from "react";
import CardSection from "@/components/ui/CardSection/CardSection";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Field/Input";
import { TextArea } from "@/components/ui/Field/TextArea";
import { PiUserBold, PiEnvelopeSimpleBold, PiWhatsappLogoBold } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WAPP ?? "5521979688417";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [hp, setHp] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // monta texto pro WhatsApp
  const waText = useMemo(() => {
    const lines = [
      "Olá! Vim pelo seu portfólio 👋",
      form.name && `• Nome: ${form.name}`,
      form.email && `• Email: ${form.email}`,
      form.message && `• Mensagem: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    return encodeURIComponent(lines || "Olá! Quero falar sobre um projeto");
  }, [form]);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  // validação básica
  function validate() {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Seu nome é obrigatório.";
    if (!form.email.trim()) next.email = "Informe um e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "E-mail inválido.";
    if (!form.message.trim()) next.message = "Escreva uma mensagem.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (hp) return; // bot detectado
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro no envio");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 1200); // cooldown suave
    }
  }

  return (
    <CardSection id="contact" ariaLabel="Seção de contato">
      <h2 className="text-xl md:text-2xl font-semibold text-textApp mb-4">
        Entre em Contato
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* honeypot escondido */}
        <input
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <Input
          label="Seu nome"
          placeholder="Ex.: Ana Silva"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          leftIcon={<PiUserBold className="size-4" />}
          required
          error={errors.name}
        />

        <Input
          type="email"
          label="Seu e-mail"
          placeholder="voce@exemplo.com"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          leftIcon={<PiEnvelopeSimpleBold className="size-4" />}
          required
          error={errors.email}
          helperText="Usaremos apenas para retorno"
        />

        <TextArea
          label="Mensagem"
          placeholder="Conte um pouco sobre o projeto…"
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          required
          error={errors.message}
        />

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            type="submit"
            disabled={status === "loading"}
            rightIcon={<MdArrowOutward className="size-5" />}
          >
            {status === "loading" ? "Enviando..." : "Enviar por e-mail"}
          </Button>

          <Button
            variant="whatsapp"
            href={waHref}
            target="_blank"
            leftIcon={<PiWhatsappLogoBold className="size-5" />}
            disabled={status === "loading"}
          >
            Falar no WhatsApp
          </Button>
        </div>

        {/* Status acessível */}
        <div role="status" aria-live="polite" className="min-h-5 text-sm">
          {status === "success" && (
            <span className="text-green-500">Mensagem enviada com sucesso!</span>
          )}
          {status === "error" && (
            <span className="text-red-500">Erro ao enviar, tente novamente.</span>
          )}
        </div>
      </form>
    </CardSection>
  );
}
