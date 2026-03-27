import { motion } from "framer-motion";
import { Handshake, Megaphone, Cog, Layers } from "lucide-react";

const pillars = [
  {
    title: "AI pre obchod",
    icon: Handshake,
    desc: "Systémový obchod riadený dátami a AI.",
    cases: ["Kvalifikácia leadov", "Automatizovaný follow-up", "Spracovanie dopytov", "Prioritizácia príležitostí", "CRM workflow"],
  },
  {
    title: "AI pre marketing",
    icon: Megaphone,
    desc: "Marketing prepojený s obchodom a výkonom.",
    cases: ["Personalizovaná komunikácia", "AI obsah", "Automatizácia kampaní", "Lead nurturing", "Segmentácia"],
  },
  {
    title: "AI pre operatívu",
    icon: Cog,
    desc: "Menej chaosu, viac riadenia a kontroly.",
    cases: ["Automatizácia procesov", "Reporting", "Interné workflow", "Schvaľovanie", "Koordinácia tímov"],
  },
  {
    title: "Implementácia a správa",
    icon: Layers,
    desc: "Nasadenie, prepojenie a správa na jednej platforme.",
    cases: ["Audit", "Návrh architektúry", "Integrácie", "Onboarding", "Správa riešení", "Optimalizácia výkonu"],
  },
];

const Solutions = () => {
  return (
    <section id="riesenia" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Čo robí <span className="gradient-text-primary">ai.mercatores.sk</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Štyri piliere, ktoré menia firmu na riadený výkonný systém.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:bg-muted/20 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.cases.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/30">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
