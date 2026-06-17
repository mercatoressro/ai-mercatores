const PHASES = [
  { n: 0, name: "Chaos" },
  { n: 1, name: "Prvé peniaze" },
  { n: 2, name: "Dopyt" },
  { n: 3, name: "Stabilita" },
  { n: 4, name: "Fokus" },
  { n: 5, name: "Produktizácia" },
  { n: 6, name: "Efektivita" },
  { n: 7, name: "Segmentácia" },
  { n: 8, name: "Špecializácia" },
  { n: 9, name: "Kapitál" },
];

const MethodologySection = () => {
  return (
    <section id="metodika" className="border-t border-border bg-[hsl(var(--surface))]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Metodika</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Rastový Kompas: 10 fáz rastu firmy
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            Každá fáza firmy má inú brzdu. Ak riešiš nesprávny problém v nesprávnej fáze,
            míňaš čas, peniaze aj energiu.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PHASES.map((phase) => {
            const active = phase.n === 2;
            return (
              <li
                key={phase.n}
                className={`rounded-lg border bg-white p-5 transition-colors ${
                  active ? "border-primary ring-1 ring-primary" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[1.4rem] font-extrabold tabular-nums ${
                      active ? "text-primary" : "text-foreground/30"
                    }`}
                  >
                    {phase.n}
                  </span>
                  {active && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground">
                      Typická fáza
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-[0.98rem] font-semibold ${
                    active ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  {phase.name}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default MethodologySection;
