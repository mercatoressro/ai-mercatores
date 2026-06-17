const ROWS = [
  { activity: "Outreach / follow-upy", freq: "denne", why: "vytvára nový dopyt" },
  { activity: "Zápis leadov do CRM", freq: "denne", why: "drží pipeline pod kontrolou" },
  { activity: "Vyhodnotenie obchodov", freq: "týždenne", why: "ukazuje, čo funguje" },
  { activity: "Kontrola cashflow", freq: "denne/týždenne", why: "chráni rozhodovanie" },
  { activity: "Analýza námietok", freq: "týždenne", why: "zlepšuje predajný skript" },
  { activity: "Úprava ponuky", freq: "mesačne", why: "zvyšuje konverziu" },
];

const DailyRoutineSection = () => {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Exekúcia</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Čo musí začať bežať pravidelne
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[hsl(var(--surface))]">
                <th className="px-6 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Aktivita
                </th>
                <th className="px-6 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Frekvencia
                </th>
                <th className="px-6 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Prečo je dôležitá
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.activity} className={i > 0 ? "border-t border-border" : ""}>
                  <td className="px-6 py-4 text-[0.98rem] font-semibold text-foreground">{row.activity}</td>
                  <td className="px-6 py-4 text-[0.95rem] text-foreground/80">{row.freq}</td>
                  <td className="px-6 py-4 text-[0.95rem] text-muted-foreground">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 border-l-2 border-primary bg-[hsl(var(--surface))] px-6 py-5">
          <p className="text-[1.15rem] font-semibold tracking-tight text-foreground">
            Nepotrebuješ viac aktivít. Potrebuješ viac disciplíny v aktivitách,
            ktoré prinášajú výsledok.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DailyRoutineSection;
