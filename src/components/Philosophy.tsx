import { motion } from "framer-motion";

const thoughts = [
  "Obchodné výsledky nie sú náhoda, ale architektúra.",
  "AI má byť súčasťou výkonného systému firmy.",
  "Väčšina firiem nepotrebuje viac nástrojov, ale menej chaosu.",
  "Spájame stratégiu, implementáciu a správu do jedného modelu.",
];

const Philosophy = () => {
  return (
    <section className="relative py-24 md:py-32 section-gradient-dark overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4 font-mono">Naša filozofia</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            ai.mercatores.sk premieňa AI na{" "}
            <span className="gradient-text">reálny firemný výkon</span>
          </h2>

          <div className="space-y-6 mb-12">
            {thoughts.map((t, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {t}
              </motion.p>
            ))}
          </div>

          <div className="inline-block glass-card px-6 py-3">
            <span className="font-display font-bold text-lg">
              <span className="text-foreground">ai.</span>
              <span className="gradient-text-primary">mercatores</span>
              <span className="text-muted-foreground">.sk</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
