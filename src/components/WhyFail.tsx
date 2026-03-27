import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const fails = [
  "Firmy nakúpia nástroje, ale nezavedú proces",
  "AI bez ownershipu sa rozpadne",
  "Bez správy nepríde reálny dopad",
  "Izolované riešenia vytvárajú ďalší chaos",
];

const ourWay = [
  "Audit",
  "Návrh architektúry",
  "Implementácia",
  "Prepojenie s tímom",
  "Správa a optimalizácia",
];

const WhyFail = () => {
  return (
    <section className="relative py-24 md:py-32 section-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Prečo väčšina AI projektov <span className="gradient-text">zlyhá</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-lg font-semibold text-destructive/80 mb-6">Bežný stav</h3>
            <ul className="space-y-4">
              {fails.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle size={18} className="text-destructive/60 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-primary mb-6">Riadená AI transformácia</h3>
              <ul className="space-y-4">
                {ourWay.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFail;
