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
    <section id="riesenia" className="relative py-28 md:py-36">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[hsl(260_70%_60%/0.03)] rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">Riešenia</span>
          <h2 className="font-display text-section mb-5">
            Čo robí <span className="gradient-text-primary">ai.mercatores.sk</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base">
            Štyri piliere, ktoré menia firmu na riadený výkonný systém.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-7 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="icon-container w-12 h-12 flex items-center justify-center shrink-0">
                      <p.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.cases.map((c) => (
                      <span key={c} className="tag-pill">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
