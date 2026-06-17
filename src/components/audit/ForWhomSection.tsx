const FIT = [
  "už majú platiacich zákazníkov,",
  "majú obrat, ale nestabilný prísun dopytov,",
  "riešia obchod cez majiteľa alebo jedného človeka,",
  "nemajú jasné CRM a meranie pipeline,",
  "chcú rásť, ale nechcú páliť peniaze na náhodný marketing.",
];

const NOT_FIT = [
  "nápady bez prvých predajov,",
  "firmy, ktoré nechcú merať obchodné aktivity,",
  "podnikateľov, ktorí hľadajú motiváciu namiesto rozhodnutia,",
  "projekty bez ochoty meniť procesy.",
];

const Check = () => (
  <svg className="mt-1 h-4 w-4 flex-none text-primary" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 10.5l3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = () => (
  <svg className="mt-1 h-4 w-4 flex-none text-muted-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ForWhomSection = () => {
  return (
    <section className="border-t border-border bg-[hsl(var(--surface))]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Pre koho</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Pre koho je Rastový audit
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-7">
            <h3 className="text-[1.1rem] font-bold text-foreground">Vhodné pre firmy, ktoré</h3>
            <ul className="mt-5 space-y-3">
              {FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-foreground/80">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-white p-7">
            <h3 className="text-[1.1rem] font-bold text-foreground">Nie je vhodné pre</h3>
            <ul className="mt-5 space-y-3">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                  <Cross />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
