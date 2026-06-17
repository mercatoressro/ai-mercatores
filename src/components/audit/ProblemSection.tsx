const BLOCKS = [
  "Máš predaje, ale nevieš ich predvídať.",
  "Máš aktivity, ale nevieš, čo reálne prináša zákazníkov.",
  "Máš ľudí alebo dodávateľov, ale systém stále stojí na tebe.",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Problém</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Rast sa neláme na nedostatku nápadov. Láme sa na nedostatku systému.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            Väčšina firiem v tejto fáze už vie predávať. Problém je, že predaj nie je
            opakovateľný. Dopyt prichádza náhodne, obchodník alebo majiteľ hasí operatívu
            a marketing sa spúšťa až vtedy, keď je neskoro.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {BLOCKS.map((text, i) => (
            <div key={i} className="bg-white p-7">
              <span className="text-[1.5rem] font-extrabold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[1.02rem] font-medium leading-relaxed text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-primary bg-[hsl(var(--surface))] px-6 py-5">
          <p className="text-[1.15rem] font-semibold tracking-tight text-foreground">
            Ak škáluješ chaos, iba zvyšuješ náklady na chaos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
