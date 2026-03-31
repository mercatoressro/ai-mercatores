import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Megaphone,
  Handshake,
  Cog,
  Layers,
  Rocket,
  Globe,
} from "lucide-react";
import cropNetwork from "@/assets/crop-network.jpg";
import cropDashboard from "@/assets/crop-dashboard.jpg";

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

/* Card component for each block */
const BlockCard = ({
  block,
  index,
  isActive,
  onClick,
}: {
  block: (typeof blocks)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = block.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div
        className={`relative h-full rounded-2xl border p-6 lg:p-7 transition-all duration-400 overflow-hidden
          ${
            isActive
              ? "border-[hsl(var(--border-glow)/0.35)] bg-[hsl(225_25%_8%/0.95)] shadow-[0_0_50px_-12px_hsl(var(--glow-primary)/0.2),inset_0_1px_0_hsl(var(--border-glow)/0.1)]"
              : "border-border/40 bg-[hsl(225_25%_6%/0.7)] hover:border-border/70 hover:bg-[hsl(225_25%_8%/0.8)] hover:shadow-[0_8px_32px_-8px_hsl(225_30%_3%/0.6)]"
          }
        `}
      >
        {/* Subtle inner glow on active */}
        {isActive && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.4)] to-transparent" />
        )}

        {/* Corner node decoration */}
        <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />

        {/* Icon + number badge */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "bg-primary/15 text-primary shadow-[0_0_20px_-4px_hsl(var(--glow-primary)/0.25)]"
                : "bg-[hsl(225_20%_12%)] text-muted-foreground group-hover:text-primary/70 group-hover:bg-[hsl(225_20%_14%)]"
            }`}
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span
            className={`text-[11px] font-mono font-medium tracking-wider mt-1 ${
              isActive ? "text-primary/60" : "text-muted-foreground/40"
            }`}
          >
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-[17px] text-white mb-2 leading-tight">
          {block.title}
        </h3>

        {/* Desc */}
        <p className="text-foreground/65 text-[14px] leading-relaxed mb-4">
          {block.desc}
        </p>

        {/* Points — always visible */}
        <ul className="space-y-2">
          {block.points.map((point, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <div
                className={`flex-shrink-0 w-[5px] h-[5px] rounded-full mt-[7px] transition-colors ${
                  isActive ? "bg-primary/80" : "bg-primary/30 group-hover:bg-primary/50"
                }`}
              />
              <span className="text-foreground/85 text-[13.5px] leading-[1.6]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const HundredChanges = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="100-zmien" className="relative py-32 md:py-44 overflow-hidden">
      {/* ── BACKGROUND LAYERS ── */}
      {/* Photo texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={cropNetwork}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
        />
        <img
          src={cropDashboard}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[hsl(225_30%_2.5%/0.86)]" />
      </div>

      {/* Ambient glow — subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-8%] w-[700px] h-[700px] bg-[hsl(var(--glow-primary)/0.035)] rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[-8%] w-[600px] h-[600px] bg-[hsl(var(--glow-secondary)/0.025)] rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[900px] h-[300px] bg-[hsl(210_80%_15%/0.03)] rounded-full blur-[120px]" />
      </div>

      {/* Faint grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-[0.025] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* ═══ A. HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--border-glow)/0.2)] bg-[hsl(225_25%_8%/0.6)] mb-7 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/90 font-mono font-medium">
              AI Transformation Map
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold mb-7 leading-[1.08] text-white">
            <span className="text-primary">100</span> nevyhnutných zmien,
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text-hero">ktoré menia fungovanie firiem</span>
          </h2>

          <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-[1.75]">
            Svet sa nemení pomaly. Mení sa naraz. AI agenti prestávajú byť
            doplnkom a stávajú sa novou vrstvou riadenia, predaja, marketingu a
            operatívy.
          </p>
        </motion.div>

        {/* Glow divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-16 md:mb-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.3)] to-transparent" />
        </motion.div>

        {/* ═══ B. CARD GRID — 4+3 layout ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-6">
          {blocks.slice(0, 4).map((block, i) => (
            <BlockCard
              key={block.id}
              block={block}
              index={i}
              isActive={activeId === block.id}
              onClick={() =>
                setActiveId(activeId === block.id ? null : block.id)
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-[calc(75%+0.9375rem)] xl:max-w-none xl:mx-auto mb-20 md:mb-24">
          {blocks.slice(4).map((block, i) => (
            <BlockCard
              key={block.id}
              block={block}
              index={i + 4}
              isActive={activeId === block.id}
              onClick={() =>
                setActiveId(activeId === block.id ? null : block.id)
              }
            />
          ))}
        </div>

        {/* ═══ C. CLOSING STATEMENT ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <div className="relative rounded-2xl border border-border/30 bg-[hsl(225_25%_5%/0.7)] px-8 py-10 md:px-12 md:py-12 text-center overflow-hidden">
            {/* Statement glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[hsl(var(--glow-primary)/0.04)] rounded-full blur-[80px]" />
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.2)] to-transparent" />

            <blockquote className="relative z-10 font-display text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white leading-[1.35]">
              Otázka už nie je, či AI zmení vašu firmu.
              <br className="hidden md:block" />{" "}
              <span className="gradient-text-primary">
                Otázka je, či ju začnete riadiť skôr, než vás začne meniť trh.
              </span>
            </blockquote>
          </div>
        </motion.div>

        {/* ═══ D. CTA BOX ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl border border-[hsl(var(--border-glow)/0.25)] bg-[hsl(225_25%_7%/0.8)] overflow-hidden shadow-[0_0_60px_-20px_hsl(var(--glow-primary)/0.15)]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-8 md:p-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-xl md:text-[1.375rem] text-white mb-2">
                  Zistite, ktoré zmeny sú pre vašu firmu najkritickejšie
                </h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  Pozrieme sa na váš obchod, marketing a operatívu a navrhneme,
                  kde má AI najväčší reálny dopad.
                </p>
              </div>
              <a
                href="#kontakt"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-[15px] hover:brightness-110 hover:shadow-[0_0_24px_-4px_hsl(var(--glow-primary)/0.4)] transition-all duration-300"
              >
                Dohodnúť AI audit
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HundredChanges;
