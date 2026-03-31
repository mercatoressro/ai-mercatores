import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Users,
  MessageSquare,
  BarChart3,
  Maximize,
  Layers,
  TrendingDown,
} from "lucide-react";
import bgDashboard from "@/assets/bg-dashboard.jpg";

const impacts = [
  {
    title: "Viac kvalifikovaných príležitostí",
    desc: "AI identifikuje a prioritizuje najrelevantnejšie leady, takže obchod pracuje s tým, čo má reálny potenciál.",
    icon: Zap,
  },
  {
    title: "Rýchlejšia reakcia na dopyty",
    desc: "Automatizované spracovanie a smerovanie dopytov skracuje reakčný čas z hodín na minúty.",
    icon: Clock,
  },
  {
    title: "Menej ručnej operatívy",
    desc: "Automatizácia repetitívnych úloh uvoľňuje kapacitu tímu na prácu s vyššou hodnotou.",
    icon: TrendingDown,
  },
  {
    title: "Vyššia konzistencia komunikácie",
    desc: "Jednotný systém zabezpečuje, že každý zákazník dostáva rovnako kvalitnú odpoveď a follow-up.",
    icon: MessageSquare,
  },
  {
    title: "Lepší reporting a rozhodovanie",
    desc: "Prepojené dáta z obchodu, marketingu a operatívy dávajú manažmentu reálny obraz o výkone.",
    icon: BarChart3,
  },
  {
    title: "Efektívnejšie využitie tímu",
    desc: "Menej manuálnych krokov, jasnejšie workflow a lepšia koordinácia medzi oddeleniami.",
    icon: Users,
  },
  {
    title: "Menej chaosu medzi oddeleniami",
    desc: "Obchod, marketing a operatíva fungujú v jednom systéme namiesto izolovaných nástrojov.",
    icon: Layers,
  },
  {
    title: "Škálovanie bez rastu komplikácií",
    desc: "Riadený AI systém umožňuje rásť bez toho, aby sa každý nový klient alebo projekt stal zdrojom chaosu.",
    icon: Maximize,
  },
];

const Impact = () => {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgDashboard} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-background/95" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(200_100%_55%/0.02)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            Výsledky
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            Výsledkom nie je viac AI.{" "}
            <span className="gradient-text">Výsledkom je výkonnejšia firma.</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-base leading-relaxed">
            Dopad nie je mágia technológie. Je to výsledok lepšie navrhnutého a riadeného systému.
          </p>
        </motion.div>

        {/* Impact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="gradient-border-card group h-full">
                <div className="gradient-border-inner p-6 h-full relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="icon-container w-10 h-10 flex items-center justify-center mb-4">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-sm font-bold mb-2 leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="text-[0.8125rem] text-foreground/85 leading-relaxed">
                      {item.desc}
                    </p>
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
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          <p className="text-foreground/85 text-[0.9375rem] leading-relaxed italic">
            „Keď je AI správne navrhnutá a riadená, nevytvára ďalší nástroj. Odstraňuje zbytočné trenie vo firme."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
