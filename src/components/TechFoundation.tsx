import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import logoGHL from "@/assets/logo-gohighlevel.png";
import logoOpenClaw from "@/assets/logo-openclaw.png";

const platforms = [
  {
    name: "Go High Level",
    logo: logoGHL,
    description:
      "Využívame ho tam, kde firma potrebuje prepojiť lead management, CRM, kampane, komunikáciu, formuláre, funnel logiku a automatizované follow-upy do jedného riadeného prostredia.",
    gradient: "from-primary/20 to-primary/5",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
    accentColor: "text-primary",
  },
  {
    name: "OpenClaw",
    logo: logoOpenClaw,
    description:
      "Využívame ho tam, kde je cieľom vyššia miera autonómie, práca s AI agentmi, špecializované workflow a flexibilnejšie nasadenie inteligentných procesov nad konkrétnym firemným použitím.",
    gradient: "from-secondary/20 to-secondary/5",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.3)]",
    accentColor: "text-secondary",
  },
];

const TechFoundation = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Technologický základ
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 font-display"
        >
          Technologický základ,{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            na ktorom staviame
          </span>
        </motion.h2>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          AI transformácia firmy nestojí na jednom nástroji. Stojí na správne navrhnutej
          kombinácii platforiem, workflow a riadiacej logiky. Preto pracujeme s riešeniami,
          ktoré umožňujú prepojiť obchod, marketing, automatizáciu aj operatívu do jedného
          funkčného systému.
        </motion.p>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div
                className={`relative h-full rounded-2xl border border-border/50 bg-gradient-to-b ${platform.gradient} backdrop-blur-sm p-8 md:p-10 transition-all duration-500 ${platform.borderGlow}`}
              >
                {/* Subtle top border glow */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent ${
                    index === 0 ? "via-primary/40" : "via-secondary/40"
                  } to-transparent`}
                />

                {/* Logo */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl border border-border/30 bg-white/10 backdrop-blur-sm mb-6 p-2">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-display">
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-display">
            Ako s tým pracujeme
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Nepredávame nástroje ako samostatné produkty. Navrhujeme, kde dávajú zmysel,
            prepájame ich s procesmi firmy a spravujeme ich tak, aby prinášali reálny výkon
            — v obchode, marketingu aj operatíve.
          </p>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground/70 text-sm md:text-base italic max-w-2xl mx-auto border-t border-border/30 pt-8">
            Nástroje samy osebe firmu nezmenia. Rozhoduje to, ako sú zapojené do reálneho
            fungovania firmy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechFoundation;
