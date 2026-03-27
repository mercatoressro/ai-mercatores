import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* ══════ CINEMATIC BACKGROUND ══════ */}
      <div className="absolute inset-0 bg-[hsl(222_45%_2%)]" />

      {/* Room depth — architectural radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[0%] w-[1200px] h-[1200px] bg-[hsl(218_80%_10%/0.6)] rounded-full blur-[200px]" />
        <div className="absolute top-[-5%] right-[-10%] w-[1000px] h-[900px] bg-[hsl(210_100%_18%/0.4)] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[700px] bg-[hsl(248_50%_14%/0.3)] rounded-full blur-[170px]" />
        <div className="absolute top-[20%] right-[20%] w-[700px] h-[600px] bg-[hsl(205_100%_35%/0.12)] rounded-full blur-[130px]" />
        <div className="absolute top-[50%] left-[40%] w-[1000px] h-[500px] bg-[hsl(215_80%_8%/0.5)] rounded-full blur-[200px]" />
      </div>

      {/* AI room — architectural light lines (ceiling/walls) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal architectural lines — ceiling lights */}
        <div
          className="absolute top-[8%] left-[5%] right-[5%] h-[1px] opacity-[0.08]"
          style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 60%) 30%, hsl(200 100% 60%) 70%, transparent)" }}
        />
        <div
          className="absolute top-[12%] left-[15%] right-[15%] h-[1px] opacity-[0.05]"
          style={{ background: "linear-gradient(to right, transparent, hsl(210 100% 65%) 40%, hsl(210 100% 65%) 60%, transparent)" }}
        />
        {/* Floor reflection line */}
        <div
          className="absolute bottom-[18%] left-[10%] right-[10%] h-[1px] opacity-[0.04]"
          style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 50%) 30%, hsl(200 100% 50%) 70%, transparent)" }}
        />
      </div>

      {/* Vertical light pillars — wall-mounted light strips */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[8%] w-[2px] h-[85%] opacity-[0.06]"
          style={{ background: "linear-gradient(to bottom, transparent 5%, hsl(200 100% 55%) 30%, hsl(200 100% 55%) 60%, transparent 90%)" }}
        />
        <div
          className="absolute top-0 right-[8%] w-[2px] h-[85%] opacity-[0.06]"
          style={{ background: "linear-gradient(to bottom, transparent 5%, hsl(200 100% 55%) 30%, hsl(200 100% 55%) 60%, transparent 90%)" }}
        />
        <div
          className="absolute top-0 left-[35%] w-[1px] h-[70%] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(210 100% 60%) 40%, transparent 85%)" }}
        />
        <div
          className="absolute top-0 right-[30%] w-[1px] h-[60%] opacity-[0.03]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(260 60% 60%), transparent)" }}
        />
      </div>

      {/* Pulsing blue focal glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[8%] right-[12%] w-[800px] h-[500px] bg-[hsl(200_100%_50%/0.14)] rounded-full blur-[130px]"
          animate={{ opacity: [0.14, 0.22, 0.14], scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] left-[30%] w-[500px] h-[400px] bg-[hsl(205_100%_55%/0.06)] rounded-full blur-[100px]"
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[25%] w-[400px] h-[300px] bg-[hsl(260_60%_50%/0.06)] rounded-full blur-[90px]"
          animate={{ opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
      </div>

      {/* Network grid overlay */}
      <div className="opacity-40">
        <NetworkGrid />
      </div>

      {/* Tech grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, hsl(222 45% 2% / 0.7) 100%)" }}
      />

      {/* ══════ CONTENT ══════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 lg:pt-20 pb-16 lg:pb-20">

        {/* ── TOP BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-6 lg:mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-mono font-semibold"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 55% / 0.12), hsl(200 100% 55% / 0.04))",
              border: "1px solid hsl(200 100% 55% / 0.2)",
              color: "hsl(200 100% 70%)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            BEZPLATNE PRE PARTNEROV
          </div>
          <div
            className="h-[1px] flex-1 max-w-[120px] hidden sm:block"
            style={{ background: "linear-gradient(to right, hsl(200 100% 55% / 0.2), transparent)" }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-mono hidden sm:block">
            AI PLAYBOOK 2026
          </span>
        </motion.div>

        {/* ── BRAND ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-10 lg:mb-14"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 55%), hsl(220 100% 50%))",
              boxShadow: "0 0 20px hsl(200 100% 55% / 0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span className="text-[15px] font-display font-bold tracking-wide text-foreground/90">
            AI.MERCATORES.SK
          </span>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

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
              className="font-display leading-[0.95] tracking-[-0.04em] font-bold mb-8"
              style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}
            >
              <span className="block text-foreground">Strategický</span>
              <span className="block">
                <span className="gradient-text-primary">AI</span>
                <span className="text-foreground"> dokument</span>
              </span>
              <span className="block text-foreground">pre lídrov</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.15)}
              className="text-base md:text-[1.125rem] text-foreground/55 leading-[1.75] mb-12 max-w-lg"
            >
              Pre našich partnerov sme pripravili strategický AI dokument, ktorý ukazuje, ako zavádzať správne{" "}
              <span className="text-foreground/80 font-medium">AI nástroje</span> do obchodných, marketingových a prevádzkových procesov skôr než konkurencia.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp(0.25)} className="mb-12">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl text-[0.9375rem] font-bold uppercase tracking-[0.1em] text-white relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, hsl(200 100% 50%), hsl(210 100% 45%))",
                  boxShadow: "0 0 40px -8px hsl(200 100% 50% / 0.5), 0 8px 30px -8px hsl(200 100% 50% / 0.35), inset 0 1px 0 hsl(200 100% 80% / 0.15)",
                }}
              >
                <span className="relative z-10">ZÍSKAŤ PLAYBOOK ZDARMA</span>
                <ArrowRight size={18} className="relative z-10" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(135deg, hsl(210 100% 45%), hsl(200 100% 50%))" }}
                />
              </a>
              <p className="text-[11px] text-muted-foreground/35 mt-4 tracking-wide">
                Bez záväzkov · Ihneď k dispozícii · Pre firmy od 10 do 500 ľudí
              </p>
            </motion.div>

            {/* Benefit pills */}
            <motion.div
              variants={fadeUp(0.35)}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: "ÚSPORA ČASU", desc: "Automatizujte rutinné úlohy a šetrite čas i náklady." },
                { label: "VYŠŠÍ ZISK", desc: "Získajte hlboké dáta pre lepšie strategické rozhodnutia." },
                { label: "INOVÁCIE", desc: "Odomknite nové príležitosti a prekonajte konkurenciu." },
              ].map((b) => (
                <div
                  key={b.label}
                  className="px-5 py-4 rounded-xl max-w-[200px]"
                  style={{
                    background: "linear-gradient(145deg, hsl(225 22% 10% / 0.7), hsl(225 25% 6% / 0.5))",
                    border: "1px solid hsl(200 100% 55% / 0.08)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-1.5">
                    {b.label}
                  </span>
                  <span className="block text-[11px] text-muted-foreground/50 leading-relaxed">
                    {b.desc}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT — 5 cols — AI Strategy Artifact ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:flex justify-center items-center"
          >
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Ambient glow */}
              <div
                className="absolute -inset-20 rounded-3xl blur-[100px]"
                style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(200 100% 50% / 0.12), hsl(260 70% 50% / 0.04), transparent 70%)" }}
              />
              <motion.div
                className="absolute -inset-24 rounded-3xl blur-[120px]"
                style={{ background: "radial-gradient(ellipse at 60% 30%, hsl(200 100% 55% / 0.1), transparent 60%)" }}
                animate={{ opacity: [0.1, 0.18, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* ═══ MAIN DOCUMENT CARD ═══ */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[340px] xl:w-[380px]"
                style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
              >
                {/* Edge glow */}
                <div
                  className="absolute -inset-[1px] rounded-2xl"
                  style={{
                    background: "linear-gradient(160deg, hsl(200 100% 55% / 0.3), hsl(200 100% 55% / 0.08), transparent 50%)",
                  }}
                />

                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: "linear-gradient(160deg, hsl(222 28% 13% / 0.97), hsl(225 35% 6% / 0.98))",
                    boxShadow: `
                      0 60px 120px -30px hsl(200 100% 35% / 0.2),
                      0 30px 60px -20px hsl(220 80% 8% / 0.6),
                      0 0 100px -30px hsl(200 100% 55% / 0.1),
                      inset 0 1px 0 hsl(200 100% 80% / 0.06),
                      inset 0 0 60px hsl(200 100% 55% / 0.02)
                    `,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                    style={{ background: "linear-gradient(to right, transparent, hsl(200 100% 55% / 0.5), transparent)" }}
                  />

                  {/* ─ Header ─ */}
                  <div className="px-8 pt-8 pb-6 relative text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[50px] pointer-events-none" />

                    {/* Book icon */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 mx-auto mb-5 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(200 100% 50% / 0.15), hsl(200 100% 55% / 0.05))",
                        border: "1px solid hsl(200 100% 55% / 0.15)",
                        boxShadow: "0 0 30px hsl(200 100% 55% / 0.08)",
                      }}
                    >
                      <BookOpen size={26} className="text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-display text-2xl xl:text-[1.65rem] font-bold text-foreground tracking-tight mb-1.5 relative z-10">
                      AI STRATEGY
                    </h3>
                    <p
                      className="text-[11px] uppercase tracking-[0.2em] font-mono font-semibold relative z-10"
                      style={{ color: "hsl(200 100% 55%)" }}
                    >
                      PARTNER EDITION
                    </p>
                  </div>

                  {/* Blue accent line */}
                  <div className="mx-10 relative">
                    <div
                      className="h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(to right, hsl(200 100% 55% / 0.1), hsl(200 100% 55% / 0.6), hsl(200 100% 55% / 0.1))",
                        boxShadow: "0 0 12px hsl(200 100% 55% / 0.2)",
                      }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="px-8 py-6 text-center relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 leading-[2]">
                      Obchodné procesy • Automatizácia
                      <br />
                      • Implementácia
                    </p>
                  </div>

                  {/* Bottom section — subtle content hints */}
                  <div
                    className="mx-6 mb-6 px-5 py-4 rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, hsl(222 25% 10% / 0.6), hsl(225 30% 7% / 0.4))",
                      border: "1px solid hsl(200 100% 55% / 0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] uppercase tracking-widest text-muted-foreground/30 font-mono">Obsah</span>
                      <span className="text-[9px] text-primary/30 font-mono">3 moduly</span>
                    </div>
                    <div className="space-y-2">
                      {["AI pre obchod", "AI pre marketing", "AI pre operatívu"].map((item, i) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <span className="text-[9px] font-mono text-primary/30 w-4">0{i+1}</span>
                          <div className="w-1 h-1 rounded-full bg-primary/25" />
                          <span className="text-[11px] text-foreground/40">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left accent edge */}
                <div
                  className="absolute left-0 top-[8%] bottom-[8%] w-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, transparent, hsl(200 100% 55% / 0.5), hsl(200 100% 55% / 0.15), transparent)",
                    boxShadow: "0 0 10px hsl(200 100% 55% / 0.15)",
                  }}
                />
              </motion.div>

              {/* ═══ DOCUMENT PREVIEW — bottom floating ═══ */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20"
              >
                <div
                  className="w-[140px] rounded-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, hsl(0 0% 95%), hsl(0 0% 88%))",
                    boxShadow: "0 20px 50px -15px hsl(220 80% 8% / 0.5), 0 0 0 1px hsl(0 0% 100% / 0.1)",
                  }}
                >
                  {/* Mini document preview */}
                  <div className="p-3">
                    <div className="h-2 w-16 rounded bg-[hsl(220_20%_70%)] mb-2" />
                    <div className="h-1.5 w-full rounded bg-[hsl(220_15%_80%)] mb-1" />
                    <div className="h-1.5 w-3/4 rounded bg-[hsl(220_15%_80%)] mb-2" />
                    <div className="h-8 w-full rounded bg-[hsl(200_60%_85%/0.5)]" />
                  </div>
                  {/* Corner fold */}
                  <div
                    className="absolute top-0 right-0 w-5 h-5"
                    style={{
                      background: "linear-gradient(225deg, hsl(220 15% 75%) 50%, transparent 50%)",
                    }}
                  />
                </div>
              </motion.div>

              {/* Small floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-5 -right-6 z-10"
              >
                <div
                  className="px-3 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    background: "linear-gradient(145deg, hsl(222 28% 12% / 0.95), hsl(225 30% 6% / 0.95))",
                    border: "1px solid hsl(200 100% 55% / 0.12)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 15px 30px -10px hsl(200 100% 40% / 0.1)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-mono text-primary/60 uppercase tracking-wider">
                    PDF Ready
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
