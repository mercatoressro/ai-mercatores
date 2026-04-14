import { TrendingDown, Target, Settings } from "lucide-react";
import bgMetrics from "@/assets/bg-metrics-dashboard.webp";

const cards = [
  {
    title: "Obchod",
    icon: TrendingDown,
    items: [
      "Leady sa strácajú",
      "Follow-up je slabý",
      "Obchod nie je riadený systémovo",
      "Chýba prioritizácia a konzistencia",
    ],
  },
  {
    title: "Marketing",
    icon: Target,
    items: [
      "Kampane neprinášajú obchodný efekt",
      "Slabá personalizácia",
      "Pomalá exekúcia",
      "Marketing nie je prepojený s predajom",
    ],
  },
  {
    title: "Operatíva",
    icon: Settings,
    items: [
      "Veľa ručnej práce",
      "Chaos medzi tímami",
      "Oneskorené reakcie",
      "Slabý reporting a workflow",
    ],
  },
];

const PainPoints = () => {
  return (
    <section className="relative py-28 md:py-36 section-elevated">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgMetrics} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-[0.06] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">Diagnostika</span>
          <h2 className="font-display text-section mb-5 text-white">
            Kde firmy <span className="gradient-text-hero">strácajú výkon</span>
          </h2>
          <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
            Tri oblasti, kde bez systému a AI vzniká najväčší chaos a straty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div key={card.title}>
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-7 h-full">
                  <div className="icon-container w-12 h-12 flex items-center justify-center mb-6">
                    <card.icon size={20} className="text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
