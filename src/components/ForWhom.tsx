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
    <section id="pre-koho" className="relative py-24 md:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pre koho <span className="gradient-text-primary">je to</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 text-center hover:bg-muted/20 transition-all duration-500 group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <p className="text-sm font-medium">{s.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-lg font-semibold text-muted-foreground mb-4">Pre koho to nie je</h3>
          <ul className="space-y-3">
            {notFor.map((n) => (
              <li key={n} className="flex items-start gap-3 text-sm text-muted-foreground">
                <XCircle size={16} className="text-destructive/50 shrink-0 mt-0.5" />
                {n}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhom;
