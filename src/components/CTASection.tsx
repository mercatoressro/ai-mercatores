import { Mail, Phone, MessageCircle } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import bgNetwork from "@/assets/bg-network-burst.webp";

const CTASection = () => {
  const t = useT();

  const areas = [
    { label: t.cta.side.sales, w: "85%" },
    { label: t.cta.side.marketing, w: "68%" },
    { label: t.cta.side.ops, w: "92%" },
  ];

  return (
    <section
      id="kontakt"
      className="relative py-28 md:py-36 section-deep overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img src={bgNetwork} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[hsl(260_70%_60%/0.02)] rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            {t.cta.eyebrow}
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.cta.title1}{" "}
            <span className="gradient-text-hero">{t.cta.titleAccent}</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-base leading-relaxed">
            {t.cta.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          <div className="gradient-border-card">
            <div className="gradient-border-inner p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-foreground/75 font-mono">
                  {t.cta.side.overview}
                </span>
              </div>
              <div className="space-y-4">
                {areas.map((area) => (
                  <div key={area.label} className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-[11px] text-foreground/85">{area.label}</span>
                      <span className="text-[10px] text-primary/75 font-mono">{area.w}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary/80 to-accent/60"
                        style={{ width: area.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gradient-border-card">
            <div className="gradient-border-inner p-6">
              <div className="text-[10px] uppercase tracking-widest text-foreground/70 font-medium mb-3">
                {t.cta.side.processTitle}
              </div>
              <div className="space-y-3">
                {t.cta.side.processSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-[0.8125rem]">
                    <span className="text-[10px] font-mono text-primary/70 w-4">0{i + 1}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="text-foreground/85">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gradient-border-card">
            <div className="gradient-border-inner p-6">
              <div className="text-[10px] uppercase tracking-widest text-foreground/70 font-medium mb-4">
                {t.cta.side.contactTitle}
              </div>
              <div className="space-y-3">
                <a href="mailto:ai@mercatores.sk" className="flex items-center gap-3 text-[0.8125rem] text-foreground/85 hover:text-foreground transition-colors">
                  <Mail size={14} className="text-primary/70 flex-shrink-0" />
                  ai@mercatores.sk
                </a>
                <a href="tel:+421905600095" className="flex items-center gap-3 text-[0.8125rem] text-foreground/85 hover:text-foreground transition-colors">
                  <Phone size={14} className="text-primary/70 flex-shrink-0" />
                  0905 600 095
                </a>
                <a href="https://wa.me/421905600095" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[0.8125rem] text-foreground/85 hover:text-foreground transition-colors">
                  <MessageCircle size={14} className="text-primary/70 flex-shrink-0" />
                  WhatsApp: 0905 600 095
                </a>
              </div>
            </div>
          </div>
        </div>
            <div className="gradient-border-card">
              <div className="gradient-border-inner p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-foreground/75 font-mono">
                    {t.cta.side.overview}
                  </span>
                </div>
                <div className="space-y-4">
                  {areas.map((area) => (
                    <div key={area.label} className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[11px] text-foreground/85">{area.label}</span>
                        <span className="text-[10px] text-primary/75 font-mono">{area.w}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-accent/60"
                          style={{ width: area.w }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="gradient-border-card">
              <div className="gradient-border-inner p-6">
                <div className="text-[10px] uppercase tracking-widest text-foreground/70 font-medium mb-3">
                  {t.cta.side.processTitle}
                </div>
                <div className="space-y-3">
                  {t.cta.side.processSteps.map((step, i) => (
                    <div key={step} className="flex items-center gap-3 text-[0.8125rem]">
                      <span className="text-[10px] font-mono text-primary/70 w-4">0{i + 1}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      <span className="text-foreground/85">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
      </div>
    </section>
  );
};

export default CTASection;
