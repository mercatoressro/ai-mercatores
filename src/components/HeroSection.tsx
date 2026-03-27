import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import NetworkGrid from "./NetworkGrid";

const trustItems = [
  { label: "AI audit a návrh architektúry", num: "01" },
  { label: "Nasadenie a integrácie", num: "02" },
  { label: "Správa a optimalizácia", num: "03" },
  { label: "Obchod + marketing + operatíva", num: "04" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Network grid background */}
      <NetworkGrid />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] bg-[hsl(200_100%_55%/0.04)] rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[hsl(260_70%_60%/0.05)] rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Floating dashboard fragments */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] right-[7%] glass-card-static p-5 w-56 opacity-30"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Lead Score</span>
          </div>
          <div className="flex items-end gap-[3px]">
            {[35, 55, 40, 75, 50, 85, 65, 90, 70].map((h, i) => (
              <div
                key={i}
                className="w-[14px] rounded-[2px]"
                style={{
                  height: `${h * 0.45}px`,
                  background: `linear-gradient(to top, hsl(200 100% 55% / 0.3), hsl(200 100% 55% / ${0.4 + (h / 200)}))`,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[22%] left-[5%] glass-card-static p-5 w-60 opacity-30"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Workflow Status</div>
          <div className="space-y-2.5">
            {[
              { label: "Obchod", color: "hsl(200 100% 55%)", w: "85%" },
              { label: "Marketing", color: "hsl(260 70% 60%)", w: "70%" },
              { label: "Operatíva", color: "hsl(195 100% 62%)", w: "92%" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[11px] text-foreground/50">{item.label}</span>
                </div>
                <div className="h-1 rounded-full bg-muted/40 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: item.w, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[8%] glass-card-static p-5 w-44 opacity-25"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">AI Úlohy</div>
          <div className="text-3xl font-display font-bold gradient-text-primary">247</div>
          <div className="text-[11px] text-muted-foreground mt-1">automatizovaných / mes.</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[28%] right-[9%] glass-card-static p-5 w-44 opacity-25"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Čas odpovede</div>
          <div className="text-3xl font-display font-bold text-primary">2.4s</div>
          <div className="text-[11px] text-muted-foreground mt-1">priemerná reakcia AI</div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card-static text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            AI transformačná platforma pre firmy
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-hero mb-8"
          >
            AI pre firmy, ktoré nechcú{" "}
            <span className="gradient-text-hero">ďalší chaos</span>
            ,{" "}
            <br className="hidden sm:block" />
            ale{" "}
            <span className="gradient-text-primary">výkon</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Pomáhame firmám zaviesť AI do obchodu, marketingu a operatívy cez jeden riadený systém — od auditu a návrhu až po nasadenie, správu a optimalizáciu.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#kontakt" className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-[0.9375rem]">
              <span>Dohodnúť AI audit</span>
              <ArrowRight size={16} />
            </a>
            <a href="#ako-to-funguje" className="btn-secondary inline-flex items-center gap-2.5 px-8 py-4 text-[0.9375rem]">
              <Play size={14} className="text-primary" />
              <span>Pozrieť, ako to funguje</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Trust band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustItems.map((item, i) => (
              <div key={i} className="gradient-border-card group">
                <div className="gradient-border-inner p-5 text-center">
                  <span className="block text-[10px] font-mono text-primary/50 mb-2">{item.num}</span>
                  <p className="text-[0.8125rem] text-muted-foreground leading-snug">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
