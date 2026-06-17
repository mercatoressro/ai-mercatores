const SYMPTOMS = [
  "Predaje sú raz silné, raz slabé.",
  "Marketing sa robí nárazovo.",
  "Majiteľ je hlavný obchodník aj hasič problémov.",
  "CRM je neúplné alebo sa nepoužíva.",
  "Firma nevie presne, ktorý kanál prináša zákazníkov.",
];

const PhaseDetailSection = () => {
  return (
    <section className="border-t border-border bg-[hsl(var(--surface))]">
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-24">
        <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
          <span className="eyebrow">Aktuálna fáza</span>
          <h2 className="mt-3 text-[1.7rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2rem]">
            Fáza 2: Dopyt
          </h2>
          <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Firma už dokázala, že vie zarobiť. Teraz musí dokázať, že vie získavať
            zákazníkov pravidelne.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Typické príznaky
              </h3>
              <ul className="mt-4 space-y-3">
                {SYMPTOMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-lg border border-border bg-[hsl(var(--surface))] p-5">
                <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Najväčšie riziko
                </h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-foreground/85">
                  Začať škálovať predtým, než je stabilný dopyt, obchodný proces a kvalita služby.
                </p>
              </div>

              <div className="rounded-lg border-l-2 border-primary bg-primary/5 p-5">
                <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Prvá priorita
                </h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-foreground/90">
                  Vybrať jeden hlavný obchodný kanál, nastaviť denný obchodný režim
                  a merať vstupy aj výstupy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseDetailSection;
