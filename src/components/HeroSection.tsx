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
      <div className="absolute inset-0 bg-[hsl(222_40%_2%)]" />

      {/* Deep spatial radials — room depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[5%] w-[1100px] h-[1100px] bg-[hsl(218_80%_12%/0.5)] rounded-full blur-[180px]" />
        <div className="absolute top-[0%] right-[-10%] w-[900px] h-[900px] bg-[hsl(210_100%_22%/0.35)] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[25%] w-[800px] h-[700px] bg-[hsl(248_55%_18%/0.25)] rounded-full blur-[150px]" />
        <div className="absolute top-[25%] right-[15%] w-[600px] h-[500px] bg-[hsl(200_100%_40%/0.1)] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[hsl(215_80%_10%/0.4)] rounded-full blur-[200px]" />
      </div>

      {/* Concentrated blue glow — hero focal point */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[10%] w-[700px] h-[500px] bg-[hsl(200_100%_50%/0.12)] rounded-full blur-[120px]"
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[40%] w-[500px] h-[400px] bg-[hsl(205_100%_55%/0.08)] rounded-full blur-[100px]"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[15%] w-[450px] h-[350px] bg-[hsl(260_65%_50%/0.08)] rounded-full blur-[90px]"
          animate={{ opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-[5%] left-[60%] w-[300px] h-[300px] bg-[hsl(195_100%_55%/0.06)] rounded-full blur-[70px]"
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Light streaks — vertical rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[30%] w-[3px] h-[70%] opacity-[0.1]"
          style={{ background: "linear-gradient(to bottom, transparent 5%, hsl(200 100% 60%) 40%, transparent 90%)" }}
        />
        <div
          className="absolute top-0 left-[52%] w-[2px] h-[55%] opacity-[0.07]"
          style={{ background: "linear-gradient(to bottom, transparent 10%, hsl(210 100% 65%) 50%, transparent 85%)" }}
        />
        <div
          className="absolute top-0 right-[22%] w-[2px] h-[65%] opacity-[0.08]"
          style={{ background: "linear-gradient(to bottom, transparent 5%, hsl(195 100% 55%) 35%, transparent 80%)" }}
        />
        <div
          className="absolute top-0 left-[70%] w-[1px] h-[80%] opacity-[0.05]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(260 70% 65%) 45%, transparent 90%)" }}
        />
        <div
          className="absolute top-0 left-[15%] w-[1px] h-[50%] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(200 100% 50%), transparent)" }}
        />
        {/* Diagonal light ray */}
        <div
          className="absolute top-0 right-[5%] w-[1px] h-[90%] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(200 100% 60%) 30%, transparent 70%)", transform: "rotate(15deg)", transformOrigin: "top center" }}
        />
        <div
          className="absolute top-0 left-[42%] w-[1px] h-[60%] opacity-[0.03]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(260 60% 60%), transparent)", transform: "rotate(-8deg)", transformOrigin: "top center" }}
        />
      </div>

      {/* Horizontal ambient light bands */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[20%] left-0 right-0 h-[1px] opacity-[0.06]"
          style={{ background: "linear-gradient(to right, transparent 10%, hsl(200 100% 55%) 40%, hsl(260 70% 60%) 60%, transparent 90%)" }}
        />
        <div
          className="absolute top-[55%] left-0 right-0 h-[1px] opacity-[0.04]"
          style={{ background: "linear-gradient(to right, transparent 20%, hsl(195 100% 50%) 50%, transparent 80%)" }}
        />
      </div>

      {/* Network grid — more visible */}
      <div className="opacity-50">
        <NetworkGrid />
      </div>

      {/* Grid overlay — structural tech feel */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />

      {/* Vignette — depth framing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, hsl(222 40% 2% / 0.6) 100%)" }}
      />

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
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 hidden lg:flex justify-center items-center"
          >
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Large ambient glow behind */}
              <div
                className="absolute -inset-16 rounded-3xl blur-[80px]"
                style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(200 100% 50% / 0.1), hsl(260 70% 50% / 0.04), transparent 70%)" }}
              />
              <motion.div
                className="absolute -inset-20 rounded-3xl blur-[100px]"
                style={{ background: "radial-gradient(ellipse at 60% 30%, hsl(200 100% 55% / 0.08), transparent 60%)" }}
                animate={{ opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* ══ MAIN CARD — 3D perspective tilt ══ */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[360px] xl:w-[400px]"
                style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
              >
                {/* Edge glow frame */}
                <div
                  className="absolute -inset-[1px] rounded-2xl"
                  style={{
                    background: "linear-gradient(160deg, hsl(200 100% 55% / 0.25), hsl(260 70% 60% / 0.1), hsl(200 100% 55% / 0.08), transparent 60%)",
                    filter: "blur(0.5px)",
                  }}
                />

                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: "linear-gradient(160deg, hsl(222 30% 11% / 0.95), hsl(225 35% 5% / 0.98))",
                    boxShadow: `
                      0 50px 100px -30px hsl(200 100% 40% / 0.15),
                      0 30px 60px -20px hsl(220 80% 10% / 0.5),
                      0 0 80px -20px hsl(200 100% 55% / 0.08),
                      inset 0 1px 0 hsl(200 100% 80% / 0.06),
                      inset 0 0 40px hsl(200 100% 55% / 0.02)
                    `,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-[15%] right-[15%] h-[1px]"
                    style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 55% / 0.4), transparent)" }}
                  />

                  {/* Card header — document title zone */}
                  <div className="px-8 pt-8 pb-5 relative">
                    {/* Subtle inner glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[50px] pointer-events-none" />

                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-40" />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.25em] text-primary/70 font-mono font-medium">
                          AI STRATEGY
                        </span>
                      </div>
                      <div
                        className="px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider text-primary/50"
                        style={{ background: "hsl(200 100% 55% / 0.06)", border: "1px solid hsl(200 100% 55% / 0.1)" }}
                      >
                        2026
                      </div>
                    </div>

                    {/* Document title */}
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl xl:text-[1.75rem] font-bold text-foreground tracking-tight mb-2">
                        AI Playbook
                      </h3>
                      <div
                        className="h-[2px] w-12 rounded-full mb-3"
                        style={{ background: "linear-gradient(to right, hsl(200 100% 55%), hsl(200 100% 55% / 0.2))" }}
                      />
                      <p className="text-[12px] text-muted-foreground leading-relaxed">
                        Strategický dokument pre lídrov, ktorí chcú AI premeniť na výkon firmy.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="mx-8 h-[1px]"
                    style={{ background: "linear-gradient(to right, hsl(200 100% 55% / 0.15), hsl(200 100% 55% / 0.05), transparent)" }}
                  />

                  {/* Card body — module overview */}
                  <div className="px-8 py-6 space-y-5">
                    {[
                      { label: "Obchod", value: "Pipeline & Lead AI", color: "hsl(200 100% 55%)", w: "85%" },
                      { label: "Marketing", value: "Personalizácia & Kampane", color: "hsl(260 70% 60%)", w: "72%" },
                      { label: "Operatíva", value: "Workflow & Reporting", color: "hsl(195 100% 55%)", w: "90%" },
                    ].map((module, i) => (
                      <div key={module.label}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-2 h-2 rounded-sm"
                              style={{ background: module.color, boxShadow: `0 0 8px ${module.color}40` }}
                            />
                            <span className="text-[12px] font-medium text-foreground/80">
                              {module.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground/40 font-mono">
                            {module.value}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[hsl(225_20%_12%)] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${module.color}, ${module.color}60)`,
                              boxShadow: `0 0 12px ${module.color}30`,
                            }}
                            initial={{ width: "0%" }}
                            animate={{ width: module.w }}
                            transition={{ duration: 1.8, delay: 1.5 + i * 0.3, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    className="mx-8 h-[1px]"
                    style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 55% / 0.1), transparent)" }}
                  />

                  {/* Card footer */}
                  <div className="px-8 py-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-1.5">
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full border-2 border-[hsl(225_30%_8%)]"
                              style={{
                                background: `linear-gradient(135deg, hsl(${200 + i * 30} 55% 40%), hsl(${200 + i * 30} 55% 22%))`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground/40 font-medium">
                          Executive Team
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                        <span className="text-[9px] font-mono text-primary/50 uppercase tracking-wider">
                          Live
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left accent edge line */}
                <div
                  className="absolute left-0 top-[10%] bottom-[10%] w-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, transparent, hsl(200 100% 55% / 0.5), hsl(260 70% 60% / 0.2), transparent)",
                    boxShadow: "0 0 8px hsl(200 100% 55% / 0.2)",
                  }}
                />

                {/* Bottom accent edge line */}
                <div
                  className="absolute bottom-0 left-[20%] right-[20%] h-[1px]"
                  style={{
                    background: "linear-gradient(to right, transparent, hsl(200 100% 55% / 0.2), transparent)",
                  }}
                />
              </motion.div>

              {/* ══ FLOATING BADGE — bottom-left ══ */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-10 z-10"
              >
                <div
                  className="px-5 py-3 rounded-xl text-center"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 12% / 0.95), hsl(225 30% 6% / 0.95))",
                    border: "1px solid hsl(200 100% 55% / 0.12)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 25px 50px -15px hsl(200 100% 40% / 0.12), 0 0 0 1px hsl(200 100% 55% / 0.04)",
                  }}
                >
                  <div className="text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-1">
                    AI Readiness
                  </div>
                  <div className="font-display text-xl font-bold gradient-text-primary">
                    94%
                  </div>
                </div>
              </motion.div>

              {/* ══ FLOATING BADGE — top-right ══ */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-5 -right-8 z-10"
              >
                <div
                  className="px-3.5 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 12% / 0.95), hsl(225 30% 6% / 0.95))",
                    border: "1px solid hsl(260 70% 60% / 0.12)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 15px 30px -10px hsl(260 70% 40% / 0.1)",
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
