import { Handshake, Megaphone, Cog, Layers, TrendingUp, Zap, BarChart3, GitBranch } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import bgBoardroom from "@/assets/bg-boardroom.webp";

const meta = [
  { icon: Handshake, metric: { label: "Pipeline", icon: TrendingUp } },
  { icon: Megaphone, metric: { label: "Engagement", icon: Zap } },
  { icon: Cog, metric: { label: "Efficiency", icon: BarChart3 } },
  { icon: Layers, metric: { label: "Delivery", icon: GitBranch } },
];

const Solutions = () => {
  const t = useT();

  return (
    <section id="riesenia" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgBoardroom} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[hsl(260_70%_60%/0.02)] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            {t.solutions.eyebrow}
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.solutions.title1}{" "}
            <span className="gradient-text-primary">ai.mercatores.sk</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-base leading-relaxed">
            {t.solutions.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {t.solutions.pillars.map((p, i) => {
            const Icon = meta[i].icon;
            const MetricIcon = meta[i].metric.icon;
            return (
              <div key={p.title}>
                <div className="gradient-border-card group h-full">
                  <div className="gradient-border-inner p-7 lg:p-8 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--glow-primary)/0.03)] rounded-full blur-[60px] pointer-events-none" />

                    <div className="flex items-start gap-4 mb-5 relative z-10">
                      <div className="icon-container w-12 h-12 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold mb-1.5 text-white">{p.title}</h3>
                        <p className="text-sm text-foreground/90 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-5 relative z-10">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[hsl(var(--muted)/0.5)] border border-border/40">
                        <MetricIcon size={12} className="text-primary" />
                        <span className="text-[10px] font-mono text-primary/80 uppercase tracking-wider">
                          {meta[i].metric.label}
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                    </div>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {p.cases.map((c) => (
                        <span key={c} className="tag-pill">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          <p className="text-foreground/85 text-[0.9375rem] leading-relaxed italic">
            {t.solutions.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
