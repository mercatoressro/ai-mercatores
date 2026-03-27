import { motion } from "framer-motion";
import { Building2, Briefcase, ShoppingBag, HeartPulse, TrendingUp, XCircle } from "lucide-react";

const segments = [
  { title: "B2B firmy", icon: Building2 },
  { title: "Služby", icon: Briefcase },
  { title: "Retail a prevádzky", icon: ShoppingBag },
  { title: "Zdravotníctvo", icon: HeartPulse },
  { title: "Firmy v raste", icon: TrendingUp },
];

const notFor = [
  "Firmy, ktoré chcú len lacný experiment",
  "Firmy bez ownershipu",
  "Firmy, ktoré nechcú meniť proces",
  "Firmy, ktoré hľadajú len vizuálne AI bez dopadu",
];

const ForWhom = () => {
  return (
    <section id="pre-koho" className="relative py-28 md:py-36 section-elevated">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">Segmenty</span>
          <h2 className="font-display text-section mb-5">
            Pre koho <span className="gradient-text-primary">je to</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="icon-container w-11 h-11 flex items-center justify-center mb-3">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium">{s.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card-static p-8 max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/[0.02] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Pre koho to nie je</h3>
            </div>
            <ul className="space-y-3.5">
              {notFor.map((n) => (
                <li key={n} className="flex items-start gap-3 text-[0.8125rem] text-muted-foreground/70">
                  <XCircle size={16} className="text-muted-foreground/30 shrink-0 mt-0.5" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhom;
