import { Building2, Briefcase, ShoppingBag, HeartPulse, TrendingUp, XCircle } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import bgBoardroom from "@/assets/bg-boardroom.webp";

const segIcons = [Building2, Briefcase, ShoppingBag, HeartPulse, TrendingUp];

const ForWhom = () => {
  const t = useT();
  return (
    <section id="pre-koho" className="relative py-28 md:py-36 section-elevated">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgBoardroom} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            {t.forWhom.eyebrow}
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.forWhom.title1}{" "}
            <span className="gradient-text-primary">{t.forWhom.titleAccent}</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-base leading-relaxed">
            {t.forWhom.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {t.forWhom.segments.map((s, i) => {
            const Icon = segIcons[i];
            return (
              <div key={s.title}>
                <div className="gradient-border-card group h-full">
                  <div className="gradient-border-inner p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-container w-10 h-10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-display text-[0.9375rem] font-bold text-white">{s.title}</h3>
                    </div>
                    <p className="text-[0.9rem] text-foreground/85 leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-[0.8125rem] text-foreground/90">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-foreground/75 text-[0.875rem] italic max-w-2xl mx-auto mb-20">
          {t.forWhom.midQuote}
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card-static p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/[0.02] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                <h3 className="font-display text-sm uppercase tracking-widest text-foreground/85 font-bold">
                  {t.forWhom.notForTitle}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {t.forWhom.notFor.map((n) => (
                  <div key={n} className="flex items-start gap-3 text-[0.9rem] text-foreground/80">
                    <XCircle size={15} className="text-muted-foreground/50 shrink-0 mt-0.5" />
                    {n}
                  </div>
                ))}
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent mt-8 mb-6" />
              <p className="text-[0.875rem] text-foreground/70 text-center italic">
                {t.forWhom.notForClosing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
