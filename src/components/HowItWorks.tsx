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
    <section id="ako-to-funguje" className="relative py-28 md:py-36 section-glow">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">Proces</span>
          <h2 className="font-display text-section mb-5">
            Ako to <span className="gradient-text-primary">funguje</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base">
            Päť krokov od diagnostiky po riadený výkon.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-10 top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 md:gap-7 group"
              >
                <div className="relative z-10 icon-container w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
                  <step.icon size={22} className="text-primary/70 group-hover:text-primary transition-colors duration-500" />
                </div>

                <div className="gradient-border-card flex-1 group">
                  <div className="gradient-border-inner p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-primary/40 tracking-wider">{step.num}</span>
                      <h3 className="font-display text-base font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
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
