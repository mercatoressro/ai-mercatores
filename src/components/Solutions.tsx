import { motion } from "framer-motion";
import { Handshake, Megaphone, Cog, Layers, TrendingUp, Zap, BarChart3, GitBranch } from "lucide-react";

const pillars = [
  {
    title: "AI pre obchod",
    icon: Handshake,
    accent: "primary",
    desc: "Zrýchľujeme reakcie na dopyty, zlepšujeme kvalifikáciu príležitostí a nastavujeme konzistentný obchodný proces.",
    cases: [
      "AI kvalifikácia leadov",
      "Automatizovaný follow-up",
      "Spracovanie inbound dopytov",
      "Prioritizácia príležitostí",
      "CRM workflow a pipeline logika",
      "Konzistentnejší obchodný proces",
    ],
    metric: { label: "Pipeline", icon: TrendingUp },
  },
  {
    title: "AI pre marketing",
    icon: Megaphone,
    accent: "secondary",
    desc: "Prepájame marketing s reálnym obchodným výkonom cez personalizáciu, automatizáciu a lepšiu prácu s leadmi.",
    cases: [
      "AI personalizovaná komunikácia",
      "Tvorba a adaptácia obsahu",
      "Lead nurturing",
      "Automatizácia kampaní",
      "Segmentácia podľa správania",
      "Prepojenie marketingu s obchodom",
    ],
    metric: { label: "Engagement", icon: Zap },
  },
  {
    title: "AI pre operatívu",
    icon: Cog,
    accent: "accent",
    desc: "Znižujeme množstvo ručných krokov, skracujeme reakčné časy a prinášame poriadok do interných procesov.",
    cases: [
      "Automatizácia interných workflow",
      "Znižovanie ručnej administratívy",
      "Schvaľovacie procesy",
      "Reporting a dashboardy",
      "Koordinácia tímov",
      "Lepšie procesné riadenie",
    ],
    metric: { label: "Efficiency", icon: BarChart3 },
  },
  {
    title: "Implementácia a správa",
    icon: Layers,
    accent: "primary",
    desc: "Nestačí riešenie navrhnúť. Musí sa zaviesť, napojiť, odriadiť a priebežne optimalizovať.",
    cases: [
      "Audit AI príležitostí",
      "Návrh architektúry riešenia",
      "Integrácie a prepojenie systémov",
      "Onboarding tímu",
      "Správa a dohľad nad riešením",
      "Pravidelná optimalizácia výkonu",
    ],
    metric: { label: "Delivery", icon: GitBranch },
  },
];

const Solutions = () => {
  return (
    <section id="riesenia" className="relative py-28 md:py-36">
      {/* Ambient background (dimmed) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[hsl(260_70%_60%/0.02)] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            Systém
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            Čo robí{" "}
            <span className="gradient-text-primary">ai.mercatores.sk</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-base leading-relaxed">
            Štyri piliere, ktoré menia firmu na riadený výkonný systém — nie izolované nástroje, ale jeden prepojený model.
          </p>
        </motion.div>

        {/* 2x2 pillar grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-7 lg:p-8 h-full relative overflow-hidden">
                  {/* Ambient inner glow (dimmed) */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--glow-primary)/0.03)] rounded-full blur-[60px] pointer-events-none" />

                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-5 relative z-10">
                    <div className="icon-container w-12 h-12 flex items-center justify-center shrink-0">
                      <p.icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold mb-1.5 text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  {/* Mini dashboard indicator */}
                  <div className="flex items-center gap-2 mb-5 relative z-10">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[hsl(var(--muted)/0.5)] border border-border/40">
                      <p.metric.icon size={12} className="text-primary" />
                      <span className="text-[10px] font-mono text-primary/80 uppercase tracking-wider">
                        {p.metric.label}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                  </div>

                  {/* Use-case tags */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {p.cases.map((c) => (
                      <span key={c} className="tag-pill">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          <p className="text-foreground/85 text-[0.9375rem] leading-relaxed italic">
            „Nejde o izolované nástroje. Ide o jeden riadený systém, ktorý prepája výkon firmy naprieč oddeleniami."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
