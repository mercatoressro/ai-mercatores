import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const fails = [
  "Firmy nakúpia nástroje, ale nezavedú proces",
  "AI bez ownershipu sa rozpadne",
  "Bez správy nepríde reálny dopad",
  "Izolované riešenia vytvárajú ďalší chaos",
];

const ourWay = [
  "Audit a diagnostika",
  "Návrh architektúry",
  "Implementácia a integrácie",
  "Prepojenie s tímom",
  "Správa a optimalizácia",
];

const WhyFail = () => {
  return (
    <section className="relative py-28 md:py-36 section-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-destructive/60 font-mono mb-4">Realita trhu</span>
          <h2 className="font-display text-section mb-5">
            Prečo väčšina AI projektov <span className="gradient-text">zlyhá</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Bežný stav */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-static p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/[0.03] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-destructive/40" />
                <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Bežný stav</h3>
              </div>
              <ul className="space-y-5">
                {fails.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <XCircle size={18} className="text-destructive/50 shrink-0 mt-0.5" />
                    <span className="text-[0.875rem] text-muted-foreground leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Riadená transformácia */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gradient-border-card h-full">
              <div className="gradient-border-inner p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.02] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-display text-sm uppercase tracking-widest text-primary/80">Riadená AI transformácia</h3>
                  </div>
                  <ul className="space-y-5">
                    {ourWay.map((w, i) => (
                      <li key={w} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary/70 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono text-primary/40 mr-2">0{i + 1}</span>
                          <span className="text-[0.875rem] text-foreground/80 leading-relaxed">{w}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFail;
