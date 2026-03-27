import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Lightbulb } from "lucide-react";
import NetworkGrid from "./NetworkGrid";

const benefits = [
  { icon: Clock, label: "ÚSPORA ČASU" },
  { icon: TrendingUp, label: "VYŠŠÍ ZISK" },
  { icon: Lightbulb, label: "INOVÁCIE" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* ══════ CINEMATIC BACKGROUND LAYERS ══════ */}

      {/* Base deep layer */}
      <div className="absolute inset-0 bg-[hsl(225_35%_2%)]" />

      {/* Radial depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[900px] h-[900px] bg-[hsl(220_80%_15%/0.35)] rounded-full blur-[150px]" />
        <div className="absolute top-[5%] right-[-5%] w-[700px] h-[700px] bg-[hsl(210_100%_30%/0.2)] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-[hsl(250_60%_25%/0.15)] rounded-full blur-[130px]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[hsl(200_100%_50%/0.06)] rounded-full blur-[100px]" />
      </div>

      {/* Light streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[35%] w-[2px] h-[60%] opacity-[0.07]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(200 100% 60%), transparent)",
          }}
        />
        <div
          className="absolute top-[10%] left-[55%] w-[1px] h-[50%] opacity-[0.05]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(260 70% 65%), transparent)",
          }}
        />
        <div
          className="absolute top-[5%] right-[25%] w-[1px] h-[70%] opacity-[0.04]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(195 100% 55%), transparent)",
          }}
        />
      </div>

      {/* Neon blue bloom — key glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[15%] w-[500px] h-[350px] bg-[hsl(200_100%_55%/0.07)] rounded-full blur-[100px]"
          animate={{ opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[20%] w-[350px] h-[250px] bg-[hsl(260_70%_55%/0.05)] rounded-full blur-[80px]"
          animate={{ opacity: [0.05, 0.09, 0.05] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Network grid subtle */}
      <div className="opacity-30">
        <NetworkGrid />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

      {/* ══════ CONTENT ══════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[calc(100vh-8rem)]">
          {/* ═══ LEFT COLUMN — 7 cols ═══ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Micro badge */}
            <motion.div
              variants={fadeUp()}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
              style={{
                background:
                  "linear-gradient(135deg, hsl(200 100% 55% / 0.1), hsl(260 70% 60% / 0.05))",
                border: "1px solid hsl(200 100% 55% / 0.15)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-mono font-medium">
                AI PLAYBOOK 2026
              </span>
            </motion.div>

            {/* MASSIVE HEADLINE */}
            <motion.h1
              variants={fadeUp(0.1)}
              className="font-display leading-[1.02] tracking-[-0.04em] font-bold mb-7"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              }}
            >
              <span className="block text-foreground">Posuňte</span>
              <span className="block text-foreground">Váš Biznis</span>
              <span className="block">
                <span className="text-foreground">s </span>
                <span className="gradient-text-primary">AI</span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.2)}
              className="text-base md:text-lg text-muted-foreground leading-[1.7] mb-10 max-w-md"
            >
              Pomáhame firmám zaviesť AI do obchodu, marketingu
              a&nbsp;operatívy cez jeden riadený systém — od auditu
              a&nbsp;návrhu až po nasadenie a&nbsp;optimalizáciu.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp(0.3)} className="mb-10">
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider"
              >
                <span>ZÍSKAŤ AI PLAYBOOK</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Benefit pills */}
            <motion.div
              variants={fadeUp(0.4)}
              className="flex flex-wrap gap-3"
            >
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(225 25% 8% / 0.7), hsl(225 25% 6% / 0.5))",
                    border: "1px solid hsl(200 100% 55% / 0.08)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <b.icon size={14} className="text-primary/60" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT COLUMN — AI Strategy Document ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-8 bg-[hsl(200_100%_55%/0.06)] rounded-3xl blur-[60px]" />
              <motion.div
                className="absolute -inset-12 bg-[hsl(260_70%_55%/0.04)] rounded-3xl blur-[80px]"
                animate={{ opacity: [0.04, 0.08, 0.04] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main AI strategy card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[340px] xl:w-[380px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background:
                      "linear-gradient(160deg, hsl(225 25% 10% / 0.9), hsl(225 30% 5% / 0.95))",
                    border: "1px solid hsl(200 100% 55% / 0.12)",
                    boxShadow:
                      "0 40px 80px -20px hsl(200 100% 55% / 0.1), 0 0 0 1px hsl(200 100% 55% / 0.05), inset 0 1px 0 hsl(200 100% 80% / 0.05)",
                  }}
                >
                  {/* Card header */}
                  <div className="px-7 pt-7 pb-5 border-b border-border/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-primary/60 font-mono">
                          AI Strategy
                        </span>
                      </div>
                      <span className="text-[9px] text-muted-foreground/40 font-mono">
                        2026
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      AI Playbook
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      Strategický dokument pre lídrov
                    </p>
                  </div>

                  {/* Card body — module overview */}
                  <div className="px-7 py-5 space-y-4">
                    {[
                      {
                        label: "Obchod",
                        value: "Pipeline & Lead AI",
                        color: "hsl(200 100% 55%)",
                        w: "85%",
                      },
                      {
                        label: "Marketing",
                        value: "Personalizácia & Kampane",
                        color: "hsl(260 70% 60%)",
                        w: "72%",
                      },
                      {
                        label: "Operatíva",
                        value: "Workflow & Reporting",
                        color: "hsl(195 100% 55%)",
                        w: "90%",
                      },
                    ].map((module, i) => (
                      <div key={module.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: module.color }}
                            />
                            <span className="text-[11px] font-medium text-foreground/70">
                              {module.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground/50 font-mono">
                            {module.value}
                          </span>
                        </div>
                        <div className="h-1 rounded-full bg-muted/20 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${module.color}, ${module.color}80)`,
                            }}
                            initial={{ width: "0%" }}
                            animate={{ width: module.w }}
                            transition={{
                              duration: 1.5,
                              delay: 1.5 + i * 0.3,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="px-7 py-4 border-t border-border/15">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-1.5">
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full border border-background/80"
                              style={{
                                background: `linear-gradient(135deg, hsl(${200 + i * 30} 60% 40%), hsl(${200 + i * 30} 60% 25%))`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[9px] text-muted-foreground/40">
                          Executive Team
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        <span className="text-[9px] font-mono text-primary/40">
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent line on left */}
                <div
                  className="absolute left-0 top-[15%] bottom-[15%] w-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, hsl(200 100% 55% / 0.5), transparent)",
                  }}
                />
              </motion.div>

              {/* Small floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-8 z-10"
              >
                <div
                  className="px-4 py-2.5 rounded-xl text-center"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(225 25% 10% / 0.9), hsl(225 30% 6% / 0.9))",
                    border: "1px solid hsl(200 100% 55% / 0.1)",
                    backdropFilter: "blur(20px)",
                    boxShadow:
                      "0 20px 40px -15px hsl(200 100% 55% / 0.08)",
                  }}
                >
                  <div className="text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-0.5">
                    AI Readiness
                  </div>
                  <div className="font-display text-lg font-bold gradient-text-primary">
                    94%
                  </div>
                </div>
              </motion.div>

              {/* Small floating badge top-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -top-4 -right-6 z-10"
              >
                <div
                  className="px-3 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(225 25% 10% / 0.9), hsl(225 30% 6% / 0.9))",
                    border: "1px solid hsl(260 70% 60% / 0.12)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[9px] font-mono text-secondary/60 uppercase tracking-wider">
                    3 moduly aktívne
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
