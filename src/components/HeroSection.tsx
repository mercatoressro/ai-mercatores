import { ArrowRight, Layers, Shield, Zap, BarChart3 } from "lucide-react";
import OrganicNetwork from "./OrganicNetwork";
import bgMeeting from "@/assets/bg-meeting.jpg";
import heroTeam from "@/assets/bg-boardroom.webp";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[105vh] flex items-center overflow-hidden">
      {/* ══════ BACKGROUND ══════ */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={bgMeeting}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-[hsl(222_40%_3%/0.82)]" />
        {/* Brand blue tint overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay pointer-events-none"
          style={{
            background: "linear-gradient(135deg, hsl(215 80% 35% / 0.35), hsl(220 70% 25% / 0.25) 50%, hsl(212 90% 45% / 0.3))",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, hsl(215 70% 30% / 0.18), transparent 60%)",
          }}
        />
      </div>

      {/* Subtle ambient depth — warm, muted */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] left-[-5%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[hsl(218_40%_8%/0.5)] rounded-full blur-[160px] md:blur-[220px]" />
        <div className="absolute top-[-5%] right-[-10%] w-[400px] md:w-[800px] h-[350px] md:h-[700px] bg-[hsl(215_50%_12%/0.3)] rounded-full blur-[120px] md:blur-[180px]" />
        <div className="absolute bottom-[-15%] left-[20%] w-[300px] md:w-[700px] h-[250px] md:h-[500px] bg-[hsl(220_30%_10%/0.25)] rounded-full blur-[120px] md:blur-[190px]" />
      </div>

      {/* Organic network — slightly stronger in hero */}
      <OrganicNetwork opacity={0.18} fadeCenterX={0.35} fadeCenterY={0.5} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, hsl(222 40% 3% / 0.9) 100%)" }} />

      {/* ══════ CONTENT ══════ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-24 pb-16 lg:pb-24">

        {/* ── TOP BAR ── */}
        <div className="flex items-center gap-4 mb-5 lg:mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-mono font-semibold"
            style={{
              background: "hsl(215 30% 15% / 0.6)",
              border: "1px solid hsl(215 30% 30% / 0.3)",
              color: "hsl(210 30% 80%)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(210_50%_55%)] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(210_50%_55%)]" />
            </span>
            B2B PREDAJ · OUTSOURCING OBCHODU · AI
          </div>
          <div className="h-[1px] flex-1 max-w-[140px] hidden sm:block" style={{ background: "linear-gradient(to right, hsl(215 30% 35% / 0.3), transparent)" }} />
          <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/60 font-mono hidden sm:block">
            AI.MERCATORES.SK
          </span>
        </div>

        {/* ── BRAND ── */}
        <div className="flex items-center gap-3 mb-8 md:mb-12 lg:mb-16">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(215 45% 38%), hsl(220 50% 32%))",
              boxShadow: "0 0 20px hsl(215 40% 35% / 0.2)",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span className="text-[16px] font-display font-bold tracking-wide text-white">
            AI.MERCATORES.SK
          </span>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ═══ LEFT — 7 cols ═══ */}
          <div className="lg:col-span-7">
            {/* HEADLINE */}
            <h1
              className="font-display leading-[0.92] tracking-[-0.045em] font-extrabold mb-8 md:mb-10"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}
            >
              <span className="block">
                <span className="text-white">Posúvame váš</span>
              </span>
              <span className="block relative">
                {/* Glow halo behind text */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 blur-2xl opacity-70 pointer-events-none select-none animate-glow-pulse"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 100% 60%), hsl(215 95% 55%), hsl(220 90% 50%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transformOrigin: "center",
                  }}
                >
                  B2B obchod
                </span>
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, hsl(205 100% 78%), hsl(212 100% 68%), hsl(218 95% 58%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 18px hsl(212 100% 60% / 0.55)) drop-shadow(0 0 38px hsl(215 100% 55% / 0.35))",
                  }}
                >
                  B2B obchod
                </span>
              </span>
              <span className="block text-white">vpred s AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-foreground/90 leading-[1.85] mb-14 max-w-[560px]">
              V ai.mercatores.sk sme profesionáli na B2B predaj a outsourcing obchodu. Kombinujeme dlhoročné obchodné skúsenosti s inováciami a umelou inteligenciou pre dosiahnutie maximálnych výsledkov.
            </p>

            {/* CTA */}
            <div className="mb-10 md:mb-14">
              <div className="relative inline-block">
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 rounded-2xl blur-2xl opacity-90 pointer-events-none animate-glow-pulse"
                  style={{
                    background: "linear-gradient(135deg, hsl(212 100% 62% / 0.85), hsl(218 100% 55% / 0.7), hsl(222 95% 50% / 0.6))",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-2xl blur-lg opacity-80 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 100% 65% / 0.55), hsl(218 100% 55% / 0.5))",
                  }}
                />
                <a
                  href="#kontakt"
                  className="relative inline-flex items-center gap-3 px-8 py-4 md:px-14 md:py-6 rounded-xl md:rounded-2xl text-[0.85rem] md:text-[0.95rem] font-bold uppercase tracking-[0.12em] text-white overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, hsl(215 50% 40%), hsl(220 50% 35%))",
                    boxShadow: "0 8px 30px -8px hsl(215 40% 30% / 0.4), inset 0 1px 0 hsl(215 50% 60% / 0.15)",
                  }}
                >
                  <span className="relative z-10">DOHODNÚŤ KONZULTÁCIU</span>
                  <ArrowRight size={19} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, hsl(220 50% 35%), hsl(215 50% 40%))" }}
                  />
                </a>
              </div>
              <p className="text-[11px] text-muted-foreground mt-4 md:mt-5 tracking-wide">
                B2B predaj · Outsourcing · AI implementácia · Výkon
              </p>
            </div>

            {/* Benefit pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Zap, label: "OUTSOURCING OBCHODU", desc: "Prevzatie a riadenie obchodných procesov, aby ste sa sústredili na rast." },
                { icon: BarChart3, label: "MERATEĽNÉ VÝSLEDKY", desc: "Transparentné KPIs, pipeline pod kontrolou a reálne obchodné čísla." },
                { icon: Shield, label: "AI + SKÚSENOSTI", desc: "Dlhoročný B2B know-how posilnený AI pre maximálnu efektivitu." },
              ].map((b) => (
                <div
                  key={b.label}
                  className="px-4 py-3 md:px-5 md:py-4 rounded-xl max-w-[210px]"
                  style={{
                    background: "linear-gradient(145deg, hsl(220 25% 12% / 0.9), hsl(222 25% 7% / 0.8))",
                    border: "1px solid hsl(215 20% 25% / 0.25)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <b.icon size={13} className="text-[hsl(210_45%_58%)]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(210_40%_65%)]">
                      {b.label}
                    </span>
                  </div>
                  <span className="block text-[11.5px] text-foreground/85 leading-relaxed">
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT — 5 cols — Team Meeting Image ═══ */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <div className="relative" style={{ perspective: "1400px" }}>
              {/* Ambient glow behind image */}
              <div
                className="absolute -inset-24 rounded-3xl blur-[100px]"
                style={{ background: "radial-gradient(ellipse at 50% 35%, hsl(215 40% 30% / 0.1), transparent 65%)" }}
              />

              {/* ═══ IMAGE FRAME ═══ */}
              <div
                className="relative w-[500px] xl:w-[600px]"
                style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
              >
                {/* Edge frame */}
                <div
                  className="absolute -inset-[1.5px] rounded-2xl"
                  style={{
                    background: "linear-gradient(160deg, hsl(215 30% 35% / 0.25), hsl(215 25% 25% / 0.1) 30%, transparent 50%, hsl(215 25% 30% / 0.08) 80%, hsl(215 30% 35% / 0.15))",
                  }}
                />

                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: "linear-gradient(165deg, hsl(222 25% 14% / 0.98), hsl(222 30% 6% / 0.99))",
                    boxShadow: "0 60px 120px -40px hsl(220 30% 8% / 0.5), 0 30px 60px -20px hsl(220 30% 5% / 0.5)",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] z-20"
                    style={{ background: "linear-gradient(to right, transparent 10%, hsl(215 40% 45% / 0.3), hsl(215 40% 45% / 0.3), transparent 90%)" }}
                  />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <div
                      className="px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.18em] font-mono font-semibold"
                      style={{
                        background: "hsl(215 25% 18% / 0.7)",
                        border: "1px solid hsl(215 25% 30% / 0.3)",
                        color: "hsl(210 25% 75%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <span className="relative flex h-1.5 w-1.5 mr-1.5 inline-block align-middle">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(210_45%_50%)] opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(210_45%_50%)]" />
                      </span>
                      AI v akcii
                    </div>
                  </div>

                  {/* Main image */}
                  <img
                    src={heroTeam}
                    alt="AI Mercatores - B2B predaj a outsourcing obchodu"
                    className="w-full h-auto object-cover"
                    style={{ 
                      filter: "contrast(1.05) saturate(0.9)",
                      mixBlendMode: "luminosity",
                    }}
                  />

                  {/* Bottom gradient overlay */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-32 z-10"
                    style={{
                      background: "linear-gradient(to top, hsl(222 40% 5% / 0.95), transparent)",
                    }}
                  />

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[hsl(210_35%_60%)] mb-1">
                          AI.MERCATORES.SK
                        </p>
                        <p className="text-xs text-foreground/70">
                          B2B predaj a outsourcing obchodu s AI
                        </p>
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "hsl(215 25% 18% / 0.5)",
                          border: "1px solid hsl(215 25% 28% / 0.25)",
                        }}
                      >
                        <Layers size={18} className="text-[hsl(210_35%_58%)]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[hsl(215_30%_35%/0.25)] rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[hsl(215_30%_35%/0.25)] rounded-bl-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
