export default function EmptyCard() {
  return (
    <article
      className={[
        "group relative overflow-visible md:overflow-hidden rounded-xl",
        "border border-obsidianGray/60 bg-midnightBlack/40",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      ].join(" ")}
    >
      <div className="p-4 lg:p-5">
        <p className="text-appText/80">
          Ainda não publiquei projetos aqui, mas já faço{" "}
          <strong className="text-appText">trabalhos freelancers</strong> e estou
          buscando minha primeira oportunidade como dev.
        </p>
        <p className="mt-2 text-sm text-appText/60">
          Em breve trago estudos de caso e links.
        </p>
      </div>
    </article>
  );
}
