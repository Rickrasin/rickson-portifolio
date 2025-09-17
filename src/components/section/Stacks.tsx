import { STACKS } from "@/lib/data";

export default function Stacks() {
  return (
    <section
      className="rounded-2xl bg-[#0a0a0a] border border-[#2B383F] p-6"
      id="stacks"
    >
      <h3 className="text-xl font-semibold">Minhas Stacks</h3>
      <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-[#A7B1B8]">
        {STACKS.map((s) => (
          <li key={s} className="rounded-lg bg-[#111A20] px-3 py-2 text-center">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
