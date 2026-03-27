import { motion } from "framer-motion";
import { Zap, Clock, Users, MessageSquare, BarChart3, Maximize, Shield } from "lucide-react";

const impacts = [
  { title: "Viac kvalifikovaných príležitostí", icon: Zap },
  { title: "Rýchlejšia reakcia na dopyty", icon: Clock },
  { title: "Menej ručnej operatívy", icon: Users },
  { title: "Vyššia konzistencia komunikácie", icon: MessageSquare },
  { title: "Lepší reporting", icon: BarChart3 },
  { title: "Efektívnejšie využitie tímu", icon: Shield },
  { title: "Škálovanie bez rastu chaosu", icon: Maximize },
];

const Impact = () => {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">Výsledky</span>
          <h2 className="font-display text-section mb-5">
            Aký dopad <span className="gradient-text">to prináša</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-6 h-full">
                  <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium leading-snug">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
