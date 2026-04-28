import { TrendingDown, Target, Settings } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import bgMetrics from "@/assets/bg-metrics-dashboard.webp";
import diagnosticImage from "@/assets/bg-boardroom.webp";

const PainPoints = () => {
  const t = useT();
  const icons = [TrendingDown, Target, Settings];
  return (
    <section className="relative py-28 md:py-36 section-elevated">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgMetrics} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-[0.06] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-10">
            <div
              className="relative rounded-2xl overflow-hidden max-w-[640px] w-full animate-blue-glow"
              style={{ border: "1px solid hsl(212 70% 55% / 0.3)" }}
            >
              <img
                src={diagnosticImage}
                alt="B2B"
                loading="lazy"
                className="w-full h-auto object-cover block"
                style={{ filter: "contrast(1.05) saturate(0.95)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background: "linear-gradient(135deg, hsl(215 80% 40% / 0.18), transparent 60%, hsl(212 90% 45% / 0.15))",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.6) 60%, hsl(var(--background)) 100%)",
                }}
              />
            </div>
          </div>
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">{t.pain.eyebrow}</span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.pain.title1} <span className="gradient-text-hero">{t.pain.titleAccent}</span>
          </h2>
          <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
            {t.pain.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {t.pain.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div key={card.title}>
                <div className="gradient-border-card group h-full">
                  <div className="gradient-border-inner p-7 h-full">
                    <div className="icon-container w-12 h-12 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-5 text-white">{card.title}</h3>
                    <ul className="space-y-3.5">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[0.9rem] text-foreground/90 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive/60 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
