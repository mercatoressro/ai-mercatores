import { XCircle, CheckCircle } from "lucide-react";
import bgShield from "@/assets/bg-shield-server2.webp";

const fails = [
  "Firma kúpi nástroje bez jasného cieľa",
  "AI sa nenasadí do reálnych procesov",
  "Chýba interný ownership",
  "Systémy zostanú odpojené",
  "Tím nevie, čo má s riešením robiť",
  "Po spustení sa tomu nikto nevenuje",
  "Výsledkom je ďalší chaos namiesto výkonu",
];

const ourWay = [
  "Začíname auditom a diagnostikou",
  "Navrhujeme architektúru, nie len tool stack",
  "AI prepájame s obchodom, marketingom a operatívou",
  "Riešenie implementujeme do reality firmy",
  "Nastavujeme ownership a logiku používania",
  "Riešenie spravujeme a optimalizujeme",
  "Cieľom je funkčný systém, nie len technológia",
];

const WhyFail = () => {
  return (
    <section className="relative py-28 md:py-36 section-deep overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgShield} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-6"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-destructive/80 font-mono font-medium mb-4">
            Realita trhu
          </span>
          <h2 className="font-display text-section mb-5 max-w-3xl mx-auto text-white">
            Väčšina AI projektov nezlyhá na technológii.{" "}
            <span className="gradient-text">
              Zlyhá na tom, že sa nikdy nestane súčasťou fungovania firmy.
            </span>
          </h2>
        </div>

        <p
          className="text-center text-foreground/85 max-w-xl mx-auto text-[0.9375rem] leading-relaxed mb-16"
        >
          Firmy dnes často nekupujú zlé nástroje. Zlyhávajú na tom, že ich nevedia premeniť na proces, ownership a dlhodobo riadený výkon.
        </p>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
          {/* Vertical divider on desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-border/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border/40 flex items-center justify-center">
              <span className="text-[10px] font-mono text-muted-foreground">vs</span>
            </div>
          </div>

          {/* Left: Bežný stav */}
          <div
            className="glass-card-static p-7 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/[0.03] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-destructive/50" />
                <h3 className="font-display text-sm uppercase tracking-widest text-foreground/90 font-bold">
                  Bežný stav
                </h3>
              </div>
              <ul className="space-y-4">
                {fails.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <XCircle
                      size={16}
                      className="text-destructive/70 shrink-0 mt-0.5"
                    />
                    <span className="text-[0.9rem] text-foreground/85 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Riadená AI transformácia */}
          <div
          >
            <div className="gradient-border-card h-full">
              <div className="gradient-border-inner p-7 md:p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.02] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <h3 className="font-display text-sm uppercase tracking-widest text-primary font-bold">
                      Riadená AI transformácia
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {ourWay.map((w, i) => (
                      <li key={w} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-primary/90 shrink-0 mt-0.5"
                        />
                        <div>
                          <span className="text-[10px] font-mono text-primary/70 mr-2">
                            0{i + 1}
                          </span>
                          <span className="text-[0.9rem] text-foreground/95 leading-relaxed">
                            {w}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          <p className="font-display text-lg md:text-xl font-bold text-white">
            „My nedodávame AI ako efekt.{" "}
            <span className="gradient-text-primary">
              Dodávame ju ako riadený systém pre výkon firmy.
            </span>
            "
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFail;
