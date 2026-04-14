import { Search, PenTool, Rocket, Users, BarChart3, ArrowRight } from "lucide-react";
import bgTeam from "@/assets/bg-ops-center.webp";

const steps = [
  {
    num: "01",
    title: "Audit a diagnostika",
    desc: "Zistíme, kde vo firme vznikajú straty, úzke miesta a nevyužité príležitosti pre AI.",
    icon: Search,
  },
  {
    num: "02",
    title: "Návrh transformačnej architektúry",
    desc: "Navrhneme, kde má AI reálne pomôcť, ako sa napojí na procesy a aké workflow bude riadiť.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Implementácia a integrácie",
    desc: "Nasadíme riešenia do obchodu, marketingu a operatívy a prepojíme ich s existujúcimi nástrojmi.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Spustenie a prepojenie s tímom",
    desc: "Zapojíme ľudí, procesy a systém do jedného funkčného modelu.",
    icon: Users,
  },
  {
    num: "05",
    title: "Správa a optimalizácia",
    desc: "Priebežne sledujeme výkon, upravujeme logiku a optimalizujeme dopad.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section id="ako-to-funguje" className="relative py-28 md:py-36 section-glow">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[hsl(225_30%_3%)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            Proces
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            Od auditu po{" "}
            <span className="gradient-text-primary">riadený výkon</span>
          </h2>
          <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
            Päť krokov transformácie. Žiadne experimenty. Riadený systém.
          </p>
        </div>

        {/* Featured image */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="featured-image-frame">
            <img
              src={bgTeam}
              alt="AI operačné centrum"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_30%_3%)] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Process nodes */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: horizontal connector line */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10" />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative group">
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden absolute left-[1.75rem] top-[4.5rem] bottom-[-1.25rem] w-px bg-gradient-to-b from-primary/20 to-transparent" />
                )}

                <div className="gradient-border-card h-full">
                  <div className="gradient-border-inner p-5 lg:p-4 xl:p-5 h-full text-center lg:text-left">
                    <div className="icon-container w-14 h-14 flex items-center justify-center mx-auto lg:mx-0 mb-4 relative">
                      <step.icon size={20} className="text-primary group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <span className="text-[10px] font-mono text-primary/75 tracking-wider mb-1.5 block">
                      {step.num}
                    </span>
                    <h3 className="font-display text-sm font-bold mb-2 leading-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-[0.8125rem] text-foreground/85 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight size={14} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="glass-card-static p-6 md:p-8">
            <p className="text-[0.9375rem] text-foreground/90 leading-relaxed font-semibold">
              „AI transformácia zlyháva vtedy, keď sa berie ako jednorazový projekt.{" "}
              <span className="gradient-text-primary">
                Funguje vtedy, keď sa riadi ako systém.
              </span>
              "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
