import { motion } from "framer-motion";
import { ArrowRight, Layers, Shield, Zap, BarChart3 } from "lucide-react";
import NetworkGrid from "./NetworkGrid";

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
    <section className="relative min-h-[105vh] flex items-center overflow-hidden">
      {/* ══════ CINEMATIC BACKGROUND ══════ */}
      <div className="absolute inset-0 bg-[hsl(222_50%_1.5%)]" />

      {/* Deep room radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-[-10%] w-[1400px] h-[1400px] bg-[hsl(218_80%_8%/0.7)] rounded-full blur-[220px]" />
        <div className="absolute top-[-10%] right-[-15%] w-[1200px] h-[1000px] bg-[hsl(210_100%_15%/0.45)] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-25%] left-[15%] w-[1000px] h-[800px] bg-[hsl(248_50%_12%/0.35)] rounded-full blur-[190px]" />
        <div className="absolute top-[15%] right-[15%] w-[900px] h-[700px] bg-[hsl(205_100%_30%/0.15)] rounded-full blur-[150px]" />
        <div className="absolute top-[40%] left-[30%] w-[1200px] h-[600px] bg-[hsl(215_80%_6%/0.6)] rounded-full blur-[220px]" />
        {/* Extra depth layer */}
        <div className="absolute top-[60%] right-[5%] w-[800px] h-[500px] bg-[hsl(220_60%_18%/0.1)] rounded-full blur-[140px]" />
      </div>

      {/* AI room — architectural light structures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ceiling panel lights */}
        <div
          className="absolute top-[6%] left-[3%] right-[3%] h-[1px] opacity-[0.1]"
          style={{ background: "linear-gradient(to right, transparent 5%, hsl(200 100% 60%) 20%, hsl(200 100% 60%) 80%, transparent 95%)" }}
        />
        <div
          className="absolute top-[7.5%] left-[3%] right-[3%] h-[30px] opacity-[0.02]"
          style={{ background: "linear-gradient(to bottom, hsl(200 100% 60%), transparent)" }}
        />
        <div
          className="absolute top-[10%] left-[12%] right-[12%] h-[1px] opacity-[0.06]"
          style={{ background: "linear-gradient(to right, transparent, hsl(210 100% 65%) 35%, hsl(210 100% 65%) 65%, transparent)" }}
        />
        {/* Secondary ceiling frame */}
        <div
          className="absolute top-[14%] left-[20%] right-[20%] h-[1px] opacity-[0.04]"
          style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 55%) 40%, hsl(200 100% 55%) 60%, transparent)" }}
        />
        {/* Floor reflection */}
        <div
          className="absolute bottom-[12%] left-[8%] right-[8%] h-[1px] opacity-[0.05]"
          style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 50%) 25%, hsl(200 100% 50%) 75%, transparent)" }}
        />
        <div
          className="absolute bottom-[12%] left-[8%] right-[8%] h-[40px] opacity-[0.015]"
          style={{ background: "linear-gradient(to top, hsl(200 100% 50%), transparent)" }}
        />
      </div>

      {/* Vertical light pillars — wall columns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[6%] w-[2px] h-full opacity-[0.07]"
          style={{ background: "linear-gradient(to bottom, transparent 3%, hsl(200 100% 55%) 20%, hsl(200 100% 55%) 70%, transparent 95%)" }}
        />
        <div
          className="absolute top-0 right-[6%] w-[2px] h-full opacity-[0.07]"
          style={{ background: "linear-gradient(to bottom, transparent 3%, hsl(200 100% 55%) 20%, hsl(200 100% 55%) 70%, transparent 95%)" }}
        />
        <div
          className="absolute top-0 left-[32%] w-[1px] h-[80%] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(210 100% 60%) 30%, transparent 85%)" }}
        />
        <div
          className="absolute top-0 right-[28%] w-[1px] h-[70%] opacity-[0.035]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(260 60% 55%), transparent)" }}
        />
        {/* Diagonal energy beam */}
        <div
          className="absolute top-0 left-[50%] w-[1px] h-[120%] opacity-[0.025] origin-top"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(200 100% 60%) 30%, transparent 70%)",
            transform: "rotate(15deg)",
          }}
        />
      </div>

      {/* AI screen / digital wall panel glow in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[3%] w-[45%] h-[60%] rounded-2xl opacity-[0.03]"
          style={{
            border: "1px solid hsl(200 100% 55% / 0.15)",
            background: "linear-gradient(180deg, hsl(200 100% 50% / 0.05), transparent 60%)",
          }}
        />
      </div>

      {/* Pulsing focal glows — stronger */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[5%] right-[8%] w-[900px] h-[600px] bg-[hsl(200_100%_50%/0.16)] rounded-full blur-[140px]"
          animate={{ opacity: [0.16, 0.26, 0.16], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[25%] w-[600px] h-[500px] bg-[hsl(205_100%_55%/0.08)] rounded-full blur-[110px]"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[20%] w-[500px] h-[400px] bg-[hsl(260_60%_50%/0.07)] rounded-full blur-[100px]"
          animate={{ opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        {/* Central spotlight */}
        <motion.div
          className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-[hsl(200_100%_60%/0.04)] rounded-full blur-[80px]"
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Network grid overlay */}
      <div className="opacity-45">
        <NetworkGrid />
      </div>

      {/* Tech grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

      {/* Vignette — stronger */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, hsl(222 50% 1.5% / 0.8) 100%)" }}
      />

      {/* ══════ CONTENT ══════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-28 lg:pt-24 pb-20 lg:pb-24">

        {/* ── TOP BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-5 lg:mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.22em] font-mono font-semibold"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 55% / 0.14), hsl(200 100% 55% / 0.04))",
              border: "1px solid hsl(200 100% 55% / 0.25)",
              color: "hsl(200 100% 72%)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            AI PRE OBCHOD, MARKETING A OPERATÍVU
          </div>
          <div
            className="h-[1px] flex-1 max-w-[140px] hidden sm:block"
            style={{ background: "linear-gradient(to right, hsl(200 100% 55% / 0.25), transparent)" }}
          />
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45 font-mono hidden sm:block">
            AI.MERCATORES.SK
          </span>
        </motion.div>

        {/* ── BRAND ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-12 lg:mb-16"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 50%), hsl(220 100% 45%))",
              boxShadow: "0 0 25px hsl(200 100% 50% / 0.35), 0 0 60px hsl(200 100% 50% / 0.1)",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span className="text-[16px] font-display font-bold tracking-wide text-foreground/90">
            AI.MERCATORES.SK
          </span>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ═══ LEFT — 7 cols ═══ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* MASSIVE HEADLINE */}
            <motion.h1
              variants={fadeUp(0)}
              className="font-display leading-[0.92] tracking-[-0.045em] font-extrabold mb-10"
              style={{ fontSize: "clamp(3.5rem, 7.5vw, 7rem)" }}
            >
              <span className="block text-foreground drop-shadow-[0_0_40px_hsl(200_100%_50%/0.08)]">
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, hsl(200 100% 55%), hsl(210 100% 65%), hsl(200 100% 50%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px hsl(200 100% 50% / 0.3))",
                  }}
                >
                  AI
                </span>
                <span className="text-foreground">, ktoré reálne</span>
              </span>
              <span className="block text-foreground">funguje</span>
              <span className="block text-foreground">vo firme</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.15)}
              className="text-base md:text-lg text-foreground/50 leading-[1.8] mb-14 max-w-[520px]"
            >
              Architektúra, nasadenie a správa AI v obchode, marketingu a operatíve. Systém, ktorý beží — nie prezentácia, ktorá leží v šuplíku.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp(0.25)} className="mb-14">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3.5 px-14 py-6 rounded-2xl text-[0.95rem] font-bold uppercase tracking-[0.12em] text-white relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, hsl(200 100% 48%), hsl(215 100% 42%))",
                  boxShadow: `
                    0 0 50px -8px hsl(200 100% 50% / 0.55),
                    0 12px 40px -8px hsl(200 100% 50% / 0.4),
                    0 0 100px -20px hsl(200 100% 55% / 0.15),
                    inset 0 1px 0 hsl(200 100% 80% / 0.2)
                  `,
                }}
              >
                <span className="relative z-10">DOHODNÚŤ AI KONZULTÁCIU</span>
                <ArrowRight size={19} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, hsl(210 100% 42%), hsl(200 100% 48%))" }}
                />
                {/* Shine sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.08) 45%, transparent 50%)",
                  }}
                />
              </a>
              <p className="text-[11px] text-muted-foreground/35 mt-5 tracking-wide">
                Architektúra · Nasadenie · Správa · Výkon
              </p>
            </motion.div>

            {/* Benefit pills */}
            <motion.div
              variants={fadeUp(0.35)}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Zap, label: "MENEJ CHAOSU", desc: "AI zavádzame do existujúcich procesov, nie vedľa nich." },
                { icon: BarChart3, label: "MERATEĽNÝ VÝKON", desc: "Obchod, konverzie a operatíva pod kontrolou — nie pod dojmom." },
                { icon: Shield, label: "JEDEN SYSTÉM", desc: "Obchod, marketing a operatíva prepojené v jednom funkčnom modeli." },
              ].map((b) => (
                <div
                  key={b.label}
                  className="px-5 py-4 rounded-xl max-w-[210px]"
                  style={{
                    background: "linear-gradient(145deg, hsl(225 22% 10% / 0.8), hsl(225 25% 5% / 0.6))",
                    border: "1px solid hsl(200 100% 55% / 0.08)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 30px -10px hsl(220 80% 5% / 0.3)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <b.icon size={13} className="text-primary/50" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/65">
                      {b.label}
                    </span>
                  </div>
                  <span className="block text-[11px] text-muted-foreground/45 leading-relaxed">
                    {b.desc}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT — 5 cols — AI Strategy Artifact ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:flex justify-center items-center"
          >
            <div className="relative" style={{ perspective: "1400px" }}>
              {/* Ambient glow behind card */}
              <div
                className="absolute -inset-28 rounded-3xl blur-[120px]"
                style={{ background: "radial-gradient(ellipse at 50% 35%, hsl(200 100% 50% / 0.16), hsl(260 70% 50% / 0.05), transparent 65%)" }}
              />
              <motion.div
                className="absolute -inset-32 rounded-3xl blur-[140px]"
                style={{ background: "radial-gradient(ellipse at 55% 25%, hsl(200 100% 55% / 0.12), transparent 55%)" }}
                animate={{ opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* ═══ MAIN DOCUMENT CARD ═══ */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[360px] xl:w-[420px]"
                style={{ transform: "rotateY(-6deg) rotateX(3deg)" }}
              >
                {/* Edge glow frame */}
                <div
                  className="absolute -inset-[1.5px] rounded-2xl"
                  style={{
                    background: "linear-gradient(160deg, hsl(200 100% 55% / 0.4), hsl(200 100% 55% / 0.1) 30%, transparent 50%, hsl(200 100% 55% / 0.05) 80%, hsl(200 100% 55% / 0.2))",
                  }}
                />

                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: "linear-gradient(165deg, hsl(222 30% 14% / 0.98), hsl(225 40% 5% / 0.99))",
                    boxShadow: `
                      0 80px 150px -40px hsl(200 100% 30% / 0.25),
                      0 40px 80px -25px hsl(220 80% 5% / 0.7),
                      0 0 120px -30px hsl(200 100% 55% / 0.12),
                      inset 0 1px 0 hsl(200 100% 80% / 0.08),
                      inset 0 0 80px hsl(200 100% 55% / 0.02)
                    `,
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(to right, hsl(200 100% 55% / 0.05), hsl(200 100% 55% / 0.5), hsl(210 100% 60% / 0.5), hsl(200 100% 55% / 0.05))" }}
                  />

                  {/* ─ Header ─ */}
                  <div className="px-9 pt-10 pb-7 relative text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-36 bg-[hsl(200_100%_55%/0.04)] rounded-full blur-[60px] pointer-events-none" />

                    {/* Status indicator */}
                    <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] uppercase tracking-[0.25em] font-mono text-primary/50">Systém aktívny</span>
                    </div>

                    {/* Book icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 mx-auto mb-6 w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(200 100% 50% / 0.18), hsl(200 100% 55% / 0.06))",
                        border: "1px solid hsl(200 100% 55% / 0.18)",
                        boxShadow: "0 0 40px hsl(200 100% 55% / 0.1), inset 0 1px 0 hsl(200 100% 80% / 0.05)",
                      }}
                    >
                      <Layers size={30} className="text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="font-display text-[1.8rem] xl:text-[2rem] font-extrabold tracking-tight mb-2 relative z-10"
                      style={{
                        background: "linear-gradient(180deg, hsl(0 0% 100%), hsl(0 0% 75%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      AI CONTROL LAYER
                    </h3>
                    <p
                      className="text-[11px] uppercase tracking-[0.25em] font-mono font-semibold relative z-10"
                      style={{ color: "hsl(200 100% 58%)" }}
                    >
                      BUSINESS TRANSFORMATION
                    </p>
                  </div>

                  {/* Blue accent divider */}
                  <div className="mx-10 relative">
                    <div
                      className="h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(to right, hsl(200 100% 55% / 0.08), hsl(200 100% 55% / 0.65), hsl(200 100% 55% / 0.08))",
                        boxShadow: "0 0 16px hsl(200 100% 55% / 0.25)",
                      }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="px-9 py-5 text-center relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/35 leading-[2.2]">
                      Obchodné procesy • Marketing • Operatíva
                      <br />
                      Automatizácia • Reporting • Implementácia
                    </p>
                  </div>

                  {/* Module list */}
                  <div
                    className="mx-7 mb-5 px-6 py-5 rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, hsl(222 25% 11% / 0.7), hsl(225 30% 6% / 0.5))",
                      border: "1px solid hsl(200 100% 55% / 0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/30 font-mono">Vrstvy</span>
                      <span className="text-[9px] text-primary/35 font-mono">3 aktívne</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "AI pre obchod", progress: 92 },
                        { name: "AI pre marketing", progress: 87 },
                        { name: "AI pre operatívu", progress: 78 },
                      ].map((item, i) => (
                        <div key={item.name}>
                          <div className="flex items-center gap-3 mb-1.5">
                            <span className="text-[9px] font-mono text-primary/35 w-5">0{i+1}</span>
                            <div className="w-1 h-1 rounded-full bg-primary/30" />
                            <span className="text-[11.5px] text-foreground/45 flex-1">{item.name}</span>
                            <span className="text-[9px] font-mono text-primary/30">{item.progress}%</span>
                          </div>
                          <div className="ml-8 h-[2px] rounded-full bg-[hsl(200_100%_55%/0.06)] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: "linear-gradient(to right, hsl(200 100% 55% / 0.3), hsl(200 100% 55% / 0.6))",
                                boxShadow: "0 0 8px hsl(200 100% 55% / 0.2)",
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ duration: 1.5, delay: 1.2 + i * 0.2, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom metrics row */}
                  <div className="mx-7 mb-7 flex gap-3">
                    {[
                      { label: "AI Coverage", value: "94%" },
                      { label: "Procesy", value: "3 aktívne" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 px-4 py-3 rounded-lg text-center"
                        style={{
                          background: "hsl(222 25% 9% / 0.5)",
                          border: "1px solid hsl(200 100% 55% / 0.04)",
                        }}
                      >
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-muted-foreground/25 font-mono mb-1">{m.label}</span>
                        <span
                          className="block text-[13px] font-bold font-mono"
                          style={{ color: "hsl(200 100% 60%)" }}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left edge accent */}
                <div
                  className="absolute left-0 top-[6%] bottom-[6%] w-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, transparent, hsl(200 100% 55% / 0.55), hsl(200 100% 55% / 0.15), transparent)",
                    boxShadow: "0 0 12px hsl(200 100% 55% / 0.18), -2px 0 20px hsl(200 100% 55% / 0.06)",
                  }}
                />
              </motion.div>

              {/* ═══ Status badge — bottom center ═══ */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20"
              >
                <div
                  className="px-4 py-2.5 rounded-xl flex items-center gap-2.5"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 13% / 0.97), hsl(225 30% 5% / 0.97))",
                    border: "1px solid hsl(200 100% 55% / 0.12)",
                    backdropFilter: "blur(24px)",
                    boxShadow: "0 20px 40px -12px hsl(200 100% 35% / 0.15)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-foreground/50 uppercase tracking-wider">
                    3 procesy nasadené
                  </span>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-7 -right-8 z-10"
              >
                <div
                  className="px-4 py-2.5 rounded-xl flex items-center gap-2.5"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 13% / 0.97), hsl(225 30% 5% / 0.97))",
                    border: "1px solid hsl(200 100% 55% / 0.15)",
                    backdropFilter: "blur(24px)",
                    boxShadow: "0 20px 40px -12px hsl(200 100% 35% / 0.15), 0 0 0 0.5px hsl(200 100% 55% / 0.05)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-mono text-primary/65 uppercase tracking-wider">
                    Live
                  </span>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute -bottom-4 -left-10 z-10"
              >
                <div
                  className="px-3.5 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 12% / 0.95), hsl(225 30% 6% / 0.95))",
                    border: "1px solid hsl(200 100% 55% / 0.1)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 15px 30px -10px hsl(200 100% 40% / 0.1)",
                  }}
                >
                  <Shield size={10} className="text-primary/50" />
                  <span className="text-[8px] font-mono text-primary/50 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
