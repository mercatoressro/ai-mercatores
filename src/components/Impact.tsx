import { Zap, Clock, Users, MessageSquare, BarChart3, Maximize, Layers, TrendingDown } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import bgMetrics from "@/assets/bg-metrics2.webp";

const itemIcons = [Zap, Clock, TrendingDown, MessageSquare, BarChart3, Users, Layers, Maximize];

const Impact = () => {
  const t = useT();
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[hsl(225_30%_3%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            {t.impact.eyebrow}
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.impact.title1}{" "}
            <span className="gradient-text">{t.impact.titleAccent}</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-base leading-relaxed">
            {t.impact.sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="featured-image-frame">
            <img src={bgMetrics} alt="AI" className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_30%_3%)] via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {t.impact.items.map((item, i) => {
            const Icon = itemIcons[i];
            return (
              <div key={item.title}>
                <div className="gradient-border-card group h-full">
                  <div className="gradient-border-inner p-6 h-full relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="text-sm font-bold mb-2 leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="text-[0.8125rem] text-foreground/85 leading-relaxed">
                        {item.desc}
                      </p>
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
            {t.impact.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
