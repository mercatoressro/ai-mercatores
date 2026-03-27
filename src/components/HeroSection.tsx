import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const trustItems = [
  "AI audit a návrh architektúry",
  "Nasadenie a integrácie",
  "Správa a optimalizácia",
  "Obchod + marketing + operatíva",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Floating dashboard cards */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[8%] glass-card p-4 w-52 opacity-40"
        >
          <div className="text-xs text-muted-foreground mb-2">Lead Score</div>
          <div className="flex items-end gap-1">
            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
              <div key={i} className="w-4 rounded-sm bg-primary/60" style={{ height: `${h * 0.4}px` }} />
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[6%] glass-card p-4 w-56 opacity-40"
        >
          <div className="text-xs text-muted-foreground mb-2">Workflow Status</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="text-xs text-foreground/70">Obchod — aktívny</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="text-xs text-foreground/70">Marketing — syncing</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="text-xs text-foreground/70">Operatíva — ok</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[35%] left-[10%] glass-card p-4 w-48 opacity-30"
        >
          <div className="text-xs text-muted-foreground mb-1">AI Tasks</div>
          <div className="text-2xl font-display font-bold gradient-text-primary">247</div>
          <div className="text-xs text-muted-foreground">automatizovaných / mesiac</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] right-[10%] glass-card p-4 w-48 opacity-30"
        >
          <div className="text-xs text-muted-foreground mb-1">Response Time</div>
          <div className="text-2xl font-display font-bold text-primary">2.4s</div>
          <div className="text-xs text-muted-foreground">priemerná reakcia AI</div>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI transformačná platforma pre firmy
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            AI pre firmy, ktoré nechcú{" "}
            <span className="gradient-text">ďalší chaos</span>
            , ale{" "}
            <span className="gradient-text-primary">výkon</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Pomáhame firmám zaviesť AI do obchodu, marketingu a operatívy cez jeden riadený systém — od auditu a návrhu až po nasadenie, správu a optimalizáciu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-primary text-base"
            >
              Dohodnúť AI audit
              <ArrowRight size={18} />
            </a>
            <a
              href="#ako-to-funguje"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold glass-card text-foreground hover:bg-muted/50 transition-all duration-300 text-base"
            >
              <Play size={16} />
              Pozrieť, ako to funguje
            </a>
          </motion.div>
        </motion.div>

        {/* Trust band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item, i) => (
              <div key={i} className="glass-card p-4 text-center">
                <div className="w-8 h-8 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
