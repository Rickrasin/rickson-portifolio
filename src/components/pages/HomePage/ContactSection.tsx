export default function ContactSection() {
  return (
    <section id="contact" className="rounded-2xl bg-[#0A0A0A] border border-[#1C282F] p-6">
      <h3 className="text-xl font-semibold">Contato</h3>

      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="bg-black border border-[#1C282F] rounded-lg px-4 h-11 outline-none focus:border-[#2B383F]"
          placeholder="Seu nome"
          type="text"
        />
        <input
          className="bg-black border border-[#1C282F] rounded-lg px-4 h-11 outline-none focus:border-[#2B383F]"
          placeholder="Seu e-mail"
          type="email"
        />
        <textarea
          className="md:col-span-2 bg-black border border-[#1C282F] rounded-lg px-4 py-3 h-28 outline-none focus:border-[#2B383F]"
          placeholder="Mensagem"
        />

        <div className="md:col-span-2 flex flex-wrap gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#EEBB46] text-[#111A20] font-semibold"
          >
            Enviar
          </button>
          <a
            href="https://wa.me/55SEUNUMERO"
            className="px-4 py-2 rounded-lg border border-[#1C282F] hover:bg-[#111A20] transition"
          >
            WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
}
