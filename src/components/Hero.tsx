export default function Hero() {
  return (
    <section
      className="rounded-2xl bg-[#0A0A0A] border border-[#1C282F] p-6"
      id="home"
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Olá, eu sou o <span className="text-[#EEBB46]">Rickson</span> —
        Desenvolvedor Frontend
      </h2>
      <p className="mt-2 text-[#A7B1B8]">
        Construo interfaces modernas com React/Next.js, foco em performance e
        UX. Atualmente{" "}
        <span className="text-white font-medium">
          buscando minha primeira vaga
        </span>{" "}
        na área.
      </p>
      <div className="mt-4 flex gap-3">
        <a
          href="#projects"
          className="px-4 py-2 rounded-lg bg-[#EEBB46] text-[#111A20] font-semibold"
        >
          Ver projetos
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-lg border border-[#2B383F] hover:bg-[#111A20] transition"
        >
          Fale comigo
        </a>
      </div>
    </section>
  );
}
