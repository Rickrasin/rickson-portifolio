import { SERVICES } from "@/lib/data/data";

export default function ServicesSection() {
  return (
    <section id="services" className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Serviços</h3>
        <a href="#contact" className="text-sm text-[#EEBB46] hover:underline">
          Entre em contato
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl bg-[#0A0A0A] border border-[#1C282F] p-6"
          >
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm text-[#A7B1B8]">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
