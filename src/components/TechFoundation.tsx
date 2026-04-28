import { Badge } from "@/components/ui/badge";
import { useT } from "@/i18n/LanguageContext";
import logoGHL from "@/assets/logo-gohighlevel.webp";
import logoOpenClaw from "@/assets/logo-openclaw.webp";
import bgNetwork from "@/assets/bg-network-burst.webp";

const platformMeta = [
  { logo: logoGHL, gradient: "from-primary/20 to-primary/5", borderGlow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]" },
  { logo: logoOpenClaw, gradient: "from-secondary/20 to-secondary/5", borderGlow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.3)]" },
];

const TechFoundation = () => {
  const t = useT();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            {t.tech.badge}
          </Badge>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 font-display">
          {t.tech.title1}{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.tech.titleAccent}
          </span>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {t.tech.intro}
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="featured-image-frame">
            <img src={bgNetwork} alt="AI" className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.tech.platforms.map((platform, index) => (
            <div key={platform.name} className="group">
              <div
                className={`relative h-full rounded-2xl border border-border/50 bg-gradient-to-b ${platformMeta[index].gradient} backdrop-blur-sm p-8 md:p-10 transition-all duration-500 ${platformMeta[index].borderGlow}`}
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent ${
                    index === 0 ? "via-primary/40" : "via-secondary/40"
                  } to-transparent`}
                />
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl border border-border/30 bg-white/10 backdrop-blur-sm mb-6 p-2">
                  <img src={platformMeta[index].logo} alt={`${platform.name} logo`} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-display">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-display">
            {t.tech.howTitle}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {t.tech.howDesc}
          </p>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground/70 text-sm md:text-base italic max-w-2xl mx-auto border-t border-border/30 pt-8">
            {t.tech.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechFoundation;
