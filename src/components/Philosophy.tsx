import cropMeeting from "@/assets/crop-meeting.jpg";

const thoughts = [
  "Obchodné výsledky nie sú náhoda, ale architektúra.",
  "AI má byť súčasťou výkonného systému firmy.",
  "Väčšina firiem nepotrebuje viac nástrojov, ale menej chaosu.",
  "Spájame stratégiu, implementáciu a správu do jedného modelu.",
];

const Philosophy = () => {
  return (
    <section className="relative py-32 md:py-44 section-deep overflow-hidden">
      {/* CROP 1 — Meeting / strategic discussion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={cropMeeting} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[hsl(225_30%_3%/0.85)]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">Filozofia</span>

          <h2 className="font-display text-section mb-14 leading-[1.15] text-white">
            ai.mercatores.sk premieňa AI na{" "}
            <span className="gradient-text-hero">reálny firemný výkon</span>
          </h2>

          <div className="space-y-8 mb-16">
            {thoughts.map((t, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              >
                {t}
              </p>
            ))}
          </div>

          <div
            className="inline-block"
          >
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
