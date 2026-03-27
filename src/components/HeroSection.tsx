import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Layers, BarChart3, Workflow } from "lucide-react";
import NetworkGrid from "./NetworkGrid";
import AIPlatformVisual from "./AIPlatformVisual";

const trustPills = [
  { icon: Shield, label: "Audit AI príležitostí" },
  { icon: Layers, label: "Implementácia a integrácie" },
  { icon: BarChart3, label: "Správa a optimalizácia" },
  { icon: Workflow, label: "Platformový prístup" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden hero-gradient">
      {/* Network grid */}
      <NetworkGrid />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-[20%] w-[700px] h-[700px] bg-[hsl(230_50%_15%/0.5)] rounded-full blur-[120px]" />
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-[hsl(200_100%_55%/0.04)] rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-[hsl(260_70%_60%/0.04)] rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      {/* ══════ TWO-COLUMN LAYOUT ══════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-8rem)]">

          {/* ═══ LEFT: Text block ═══ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp()}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card-static text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              AI transformačná platforma pre firmy
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.1)}
              className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.03em] font-bold mb-7"
            >
              <span className="text-foreground">AI pre firmy,</span>
              <br />
              <span className="text-foreground">ktoré nechcú </span>
              <span className="gradient-text-hero">ďalší chaos</span>
              <span className="text-foreground">,</span>
              <br />
              <span className="text-foreground">ale </span>
              <span className="gradient-text-primary">výkon</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.2)}
              className="text-base md:text-[1.0625rem] text-muted-foreground leading-[1.7] mb-10 max-w-md"
            >
              Pomáhame firmám zaviesť AI do obchodu, marketingu a&nbsp;operatívy cez jeden riadený systém — od auditu a&nbsp;návrhu až po nasadenie, správu a&nbsp;optimalizáciu.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp(0.3)}
              className="flex flex-col sm:flex-row items-start gap-3.5 mb-8"
            >
              <a href="#kontakt" className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-[0.9375rem]">
                <span>Dohodnúť AI audit</span>
                <ArrowRight size={16} />
              </a>
              <a href="#ako-to-funguje" className="btn-secondary inline-flex items-center gap-2.5 px-7 py-3.5 text-[0.9375rem]">
                <Play size={13} className="text-primary" />
                <span>Pozrieť, ako to funguje</span>
              </a>
            </motion.div>

            {/* Micro trust line */}
            <motion.div
              variants={fadeUp(0.4)}
              className="flex items-center gap-4 text-[11px] text-muted-foreground/50 mb-12"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                Bez zbytočných experimentov
              </span>
              <span className="w-px h-3 bg-border/30" />
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                Audit → nasadenie → správa
              </span>
            </motion.div>

            {/* Trust band */}
            <motion.div
              variants={fadeUp(0.5)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
            >
              {trustPills.map((item, i) => (
                <div key={i} className="glass-card-static flex items-center gap-2.5 px-3.5 py-3 group hover:bg-[hsl(var(--surface-glass-hover)/0.5)] transition-all duration-400">
                  <div className="icon-container w-8 h-8 flex items-center justify-center shrink-0 !rounded-lg">
                    <item.icon size={14} className="text-primary/70" />
                  </div>
                  <span className="text-[11px] text-muted-foreground leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT: AI Platform Visual ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <AIPlatformVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
