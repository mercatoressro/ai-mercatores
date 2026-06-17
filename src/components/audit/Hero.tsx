import { trackBookingClick, trackCtaClick } from "@/lib/analytics";

const TRUST = [
  "Praktický audit obchodu a dopytu",
  "Priorita podľa dopadu, nie podľa dojmu",
  "Výstup použiteľný pre rozhodnutie majiteľa",
];

const PANEL_ROWS = [
  { label: "Dopyt", value: "nestabilný", tone: "warn" },
  { label: "Predaj", value: "neopakovateľný", tone: "warn" },
  { label: "CRM", value: "čiastočne zavedené", tone: "mid" },
  { label: "Procesy", value: "závislé od majiteľa", tone: "warn" },
] as const;

const dot = (tone: string) =>
  tone === "warn" ? "bg-amber-400" : tone === "mid" ? "bg-sky-400" : "bg-emerald-400";

const Hero = () => {
  return (
    <section className="bg-white pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left — message */}
        <div>
          <span className="eyebrow">Rastový audit Mercatores</span>
          <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-[2.6rem] lg:text-[3rem]">
            Rastový audit pre firmy, ktoré už predávajú, ale nerastú systémovo
          </h1>
          <p className="mt-6 text-[1.1rem] font-medium leading-relaxed text-foreground/80">
            Ak máš zákazníkov, ale predaj je nepravidelný, marketing sa robí nárazovo
            a väčšina vecí stojí na tebe, problém už nie je nápad. Problém je systém obchodu.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
            Mercatores pomocou metodiky Rastový Kompas preverí, kde ti uniká rast:
            v dopyte, predaji, CRM, procesoch, ľuďoch alebo financiách. Cieľom nie je
            ďalšia teória. Cieľom je určiť, čo máš opraviť ako prvé.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" onClick={() => trackBookingClick("hero")} className="btn-primary">
              Zistiť úniky v obchode
            </a>
            <a
              href="#metodika"
              onClick={() => trackCtaClick("hero", "Pozrieť metodiku")}
              className="btn-secondary"
            >
              Pozrieť metodiku
            </a>
          </div>

          <ul className="mt-8 space-y-2.5">
            {TRUST.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-foreground/80">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 10.5l3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — audit dashboard panel */}
        <div className="lg:pl-4">
          <div className="rounded-xl border border-[#1e293b] bg-[#0B1220] p-6 shadow-[0_24px_60px_-30px_rgba(11,18,32,0.5)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Diagnostika
                </p>
                <p className="mt-1 text-[1.05rem] font-bold text-white">Audit rastu firmy</p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[0.72rem] font-medium text-white/60">
                Fáza 2 · Dopyt
              </span>
            </div>

            <dl className="mt-2 divide-y divide-white/8">
              {PANEL_ROWS.map((row) => (
                <div key={row.label} className="flex items-center justify-between py-3.5">
                  <dt className="text-[0.95rem] text-white/55">{row.label}</dt>
                  <dd className="flex items-center gap-2.5 text-[0.95rem] font-medium text-white/90">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot(row.tone)}`} />
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3.5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
                Najbližšia priorita
              </p>
              <p className="mt-1 text-[0.98rem] font-semibold text-white">
                Stabilizovať lead-flow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
