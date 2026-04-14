import bgAiLab from "@/assets/bg-ai-research.webp";

const thoughts = [
  "Obchodné výsledky nie sú náhoda, ale architektúra.",
  "AI má byť súčasťou výkonného systému firmy.",
  "Väčšina firiem nepotrebuje viac nástrojov, ale menej chaosu.",
  "Spájame stratégiu, implementáciu a správu do jedného modelu.",
];

const Philosophy = () => {
  return (
    <section className="relative py-32 md:py-44 section-deep overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[hsl(225_30%_3%)]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-primary font-mono font-medium mb-6">Filozofia</span>
            <h2 className="font-display text-section mb-14 leading-[1.15] text-white">
              ai.mercatores.sk premieňa AI na{" "}
              <span className="gradient-text-hero">reálny firemný výkon</span>
            </h2>
          </div>

          {/* Featured image */}
          <div className="max-w-2xl mx-auto mb-14">
            <div className="featured-image-frame">
              <img
                src={bgAiLab}
                alt="AI výskumné laboratórium"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_30%_3%)] via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-8 mb-16 text-center">
            {thoughts.map((t, i) => (
              <p key={i} className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {t}
              </p>
            ))}
          </div>

          <div className="inline-block mx-auto flex justify-center">
            <div className="gradient-border-card">
              <div className="gradient-border-inner px-8 py-4">
                <span className="font-display font-bold text-xl tracking-tight">
                  <span className="text-white">ai.</span>
                  <span className="gradient-text-primary">mercatores</span>
                  <span className="text-foreground/70">.sk</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
