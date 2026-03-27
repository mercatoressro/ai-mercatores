import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Users, BarChart3 } from "lucide-react";

const steps = [
  { num: "01", title: "Audit a diagnostika", desc: "Zmapujeme vaše procesy, identifikujeme úzke miesta a príležitosti pre AI.", icon: Search },
  { num: "02", title: "Návrh transformačnej architektúry", desc: "Vytvoríme plán nasadenia AI naprieč obchodom, marketingom a operatívou.", icon: PenTool },
  { num: "03", title: "Implementácia a integrácie", desc: "Nasadíme riešenia a prepojíme ich s vašimi existujúcimi systémami.", icon: Rocket },
  { num: "04", title: "Spustenie a prepojenie s tímom", desc: "Zapojíme váš tím, nastavíme workflow a zabezpečíme adopciu.", icon: Users },
  { num: "05", title: "Správa a optimalizácia", desc: "Priebežne spravujeme, vyhodnocujeme a optimalizujeme výkon.", icon: BarChart3 },
];

const HowItWorks = () => {
  return (
    <section id="ako-to-funguje" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ako to <span className="gradient-text-primary">funguje</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Päť krokov od diagnostiky po riadený výkon.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  <step.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="glass-card p-5 flex-1 group-hover:bg-muted/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary/60">{step.num}</span>
                    <h3 className="font-display font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
