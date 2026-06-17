const OUTPUTS = [
  "Určenie aktuálnej fázy rastu.",
  "Identifikácia najväčšej brzdy.",
  "Prioritizácia problémov podľa dopadu.",
  "Návrh prvého kroku na najbližších 30 dní.",
  "Odporúčanie, či riešiť obchod, CRM, ľudí, procesy alebo ponuku.",
];

const OutputSection = () => {
  return (
    <section id="vystup" className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:pt-2">
            <span className="eyebrow">Výstup</span>
            <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
              Čo získaš po diagnostike
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              Výstup nemá byť pekný dokument do zásuvky. Má slúžiť ako rozhodovací
              podklad pre majiteľa firmy.
            </p>
          </div>

          <ol className="divide-y divide-border overflow-hidden rounded-xl border border-border">
            {OUTPUTS.map((text, i) => (
              <li key={i} className="flex items-start gap-5 bg-white px-6 py-5">
                <span className="text-[1.05rem] font-extrabold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[1.02rem] font-medium leading-relaxed text-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OutputSection;
