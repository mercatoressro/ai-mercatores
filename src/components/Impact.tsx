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
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Aký dopad <span className="gradient-text">to prináša</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card p-5 group hover:bg-muted/20 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon size={18} className="text-primary" />
              </div>
              <p className="text-sm font-medium leading-snug">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
