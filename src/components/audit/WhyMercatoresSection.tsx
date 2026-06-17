const POINTS = [
  "Obchodná prax, nie akademická teória.",
  "Skúsenosť s nastavovaním obchodných tímov.",
  "Prepojenie stratégie, CRM, lead-genu a exekúcie.",
  "Schopnosť pomôcť aj s realizáciou, nielen s odporúčaním.",
];

const WhyMercatoresSection = () => {
  return (
    <section className="bg-[#0B1220]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground/60" style={{ color: "#5EEAD4" }}>
              Prečo Mercatores
            </span>
            <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.2rem]">
              Prečo to nerobíme ako klasickí poradcovia
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/70">
              Mercatores nie je teoretická konzultačná firma. Pomáhame nastavovať obchod,
              obchodníkov, CRM, lead-gen a procesy priamo vo firmách. Cieľom nie je odovzdať
              prezentáciu. Cieľom je nájsť problém, nastaviť riešenie a dostať ho do praxe.
            </p>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3.5 bg-[#0B1220] px-6 py-5">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none"
                  style={{ color: "#5EEAD4" }}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 10.5l3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[1rem] font-medium leading-relaxed text-white/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyMercatoresSection;
