import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Bot, Megaphone, Handshake, Cog, Layers, Rocket, Globe, ChevronDown } from "lucide-react";
import bgNetwork from "@/assets/bg-network.jpg";

const blocks = [
  {
    id: "agents",
    icon: Bot,
    title: "Agenti prichádzajú",
    desc: "Chatboty boli len začiatok. AI agenti majú pamäť, zručnosti a schopnosť konať samostatne — a menia pravidlá hry.",
    points: [
      "Chatboty nestačia — agenti majú pamäť, zručnosti a samostatnosť",
      "Špecializovaní agenti budú v každom odbore firmy",
      "Agenti budú spúšťať ďalších agentov na konkrétne úlohy",
      "Firmy sa rozdelia na tie, ktoré agentov riadia, a tie, ktoré zaostanú",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing sa mení natrvalo",
    desc: "AI marketér tvorí, testuje a optimalizuje nepretržite. Kto nemá stratégiu, prehrá aj s najlepším nástrojom.",
    points: [
      "AI tvorí, testuje a optimalizuje obsah nepretržite",
      "Personalizácia sa stane štandardom, nie výhodou",
      "Priemerný AI obsah prehrá — rozhodne kvalita vstupov a know-how",
      "Agentúry bez stratégie stratia význam",
    ],
  },
  {
    id: "sales",
    icon: Handshake,
    title: "Predaj už nebude ako doteraz",
    desc: "Follow-up bude automatický a personalizovaný. Obchodný proces sa zrýchli z týždňov na dni.",
    points: [
      "Follow-up bude automatický, personalizovaný a konzistentný",
      "Masové oslovovanie bude slabnúť — rozhodovať bude relevancia",
      "AI obchodník bude kvalifikovať, prioritizovať a pripravovať ponuky",
      "Obchodný proces sa zrýchli z týždňov na dni",
    ],
  },
  {
    id: "ops",
    icon: Cog,
    title: "Prevádzka a technológie",
    desc: "Rutinná operatíva sa automatizuje. Firemné postupy prestanú byť dokumenty — stanú sa vykonávanou logikou.",
    points: [
      "Rutinná operatíva sa bude automatizovať",
      "Reporting, fakturácia, upomienky a podpora budú bežať priebežne",
      "Firemné postupy prestanú byť dokumenty — stanú sa vykonávanou logikou",
      "Vzniknú firmy fungujúce takmer bez denného zásahu človeka",
    ],
  },
  {
    id: "os",
    icon: Layers,
    title: "Operačný systém firmy",
    desc: "Firmy prestanú skladať 15 nástrojov. Všetko sa prepojí cez jednu platformu s agentmi, dátami a logikou.",
    points: [
      "Firmy prestanú skladať 15 nástrojov dohromady",
      "Všetko sa bude prepájať cez jednu platformu",
      "Agenti budú potrebovať spoločnú pamäť, dáta a oprávnenia",
      "Marketing, predaj a operatíva sa budú riadiť z jedného miesta",
    ],
  },
  {
    id: "future",
    icon: Rocket,
    title: "Firma budúcnosti",
    desc: "Menší tím, násobne vyšší výkon. Ľudia sa presunú od rutiny ku stratégii a rozhodovaniu.",
    points: [
      "Menší tím môže dosahovať násobne vyšší výkon",
      "Ľudia sa presunú od rutiny ku stratégii, vzťahom a rozhodovaniu",
      "Najväčšou výhodou bude rýchlosť nasadenia",
      "AI umožní škálovať bez lineárneho rastu chaosu a nákladov",
    ],
  },
  {
    id: "world",
    icon: Globe,
    title: "Svet sa mení",
    desc: "Nové očakávania zákazníkov, nové typy služieb, nová hodnota ľudskej práce. Čakanie nie je stratégia.",
    points: [
      "Vzniknú nové očakávania zákazníkov aj nové typy služieb",
      "Ľudsky vytvorené výstupy budú mať prémiovú hodnotu",
      "AI zmení nielen firmy, ale aj zdravotníctvo, služby a každodenný život",
      "Čakanie nie je stratégia",
    ],
  },
];

const HundredChanges = () => {
  const [openId, setOpenId] = useState<string | null>("agents");

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="100-zmien" className="relative py-28 md:py-40 overflow-hidden">
      {/* Photo bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgNetwork} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15]" />
        <div className="absolute inset-0 bg-background/88" />
      </div>

      {/* Glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[hsl(var(--glow-primary)/0.04)] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[hsl(var(--glow-secondary)/0.03)] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-primary font-mono font-medium mb-5">
            Strategický prehľad
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] text-white">
            100 nevyhnutných zmien,{" "}
            <span className="gradient-text-hero">ktoré menia fungovanie firiem</span>
          </h2>
          <p className="text-foreground/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Svet sa nemení pomaly. Mení sa naraz. AI agenti prestávajú byť doplnkom a stávajú sa novou vrstvou riadenia, predaja, marketingu a operatívy. Firmy, ktoré túto zmenu uchopia včas, získajú rýchlosť, efektivitu a náskok. Tie, ktoré budú čakať, budú len dobiehať.
          </p>
        </motion.div>

        {/* Accordion blocks */}
        <div className="max-w-4xl mx-auto space-y-3 mb-20">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            const isOpen = openId === block.id;

            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[hsl(var(--border-glow)/0.3)] bg-[hsl(var(--card)/0.8)] shadow-[0_0_30px_-10px_hsl(var(--glow-primary)/0.15)]"
                      : "border-border/60 bg-[hsl(var(--card)/0.4)] hover:border-border hover:bg-[hsl(var(--card)/0.6)]"
                  }`}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(block.id)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary/15 text-primary" : "bg-muted/50 text-muted-foreground"
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg text-white">{block.title}</h3>
                      {!isOpen && (
                        <p className="text-foreground/60 text-sm mt-0.5 truncate">{block.desc}</p>
                      )}
                    </div>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-foreground/80 text-base leading-relaxed mb-5 pl-14">
                        {block.desc}
                      </p>
                      <ul className="space-y-2.5 pl-14">
                        {block.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70 mt-2.5" />
                            <span className="text-foreground/90 text-[15px] leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">
            Otázka už nie je, či AI zmení vašu firmu.{" "}
            <span className="gradient-text-primary">Otázka je, či ju začnete riadiť skôr, než vás začne meniť trh.</span>
          </blockquote>
        </motion.div>

        {/* CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-[hsl(var(--border-glow)/0.2)] bg-[hsl(var(--card)/0.6)] p-8 md:p-10 text-center shadow-[0_0_40px_-15px_hsl(var(--glow-primary)/0.12)]">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3">
              Zistite, ktoré zmeny sú pre vašu firmu najkritickejšie
            </h3>
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              Pozrieme sa na váš obchod, marketing a operatívu a navrhneme, kde má AI najväčší reálny dopad.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all"
            >
              Dohodnúť AI audit
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HundredChanges;
