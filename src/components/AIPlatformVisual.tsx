import { motion } from "framer-motion";

const floatAnim = (duration: number, delay: number = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const AIPlatformVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[hsl(200_100%_55%/0.06)] rounded-full blur-[80px]" />
      <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-[hsl(260_70%_60%/0.05)] rounded-full blur-[60px]" />

      {/* ══════ SVG CONNECTION LINES ══════ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 600" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Central hub connections */}
        <motion.path
          d="M250 280 L120 160"
          stroke="url(#line-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        />
        <motion.path
          d="M250 280 L380 140"
          stroke="url(#line-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
        />
        <motion.path
          d="M250 280 L100 350"
          stroke="url(#line-grad-2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
        />
        <motion.path
          d="M250 280 L400 370"
          stroke="url(#line-grad-2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
        />
        <motion.path
          d="M250 280 L250 470"
          stroke="url(#line-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 2.0, ease: "easeOut" }}
        />

        {/* Data flow dots on paths */}
        <motion.circle
          cx="0" cy="0" r="2.5"
          fill="hsl(200 100% 55%)"
          opacity="0.8"
          animate={{
            cx: [250, 120],
            cy: [280, 160],
            opacity: [0.8, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.circle
          cx="0" cy="0" r="2.5"
          fill="hsl(260 70% 60%)"
          opacity="0.8"
          animate={{
            cx: [250, 380],
            cy: [280, 140],
            opacity: [0.8, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.circle
          cx="0" cy="0" r="2"
          fill="hsl(195 100% 62%)"
          opacity="0.6"
          animate={{
            cx: [250, 250],
            cy: [280, 470],
            opacity: [0.6, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 100% 55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(200 100% 55%)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(260 70% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(260 70% 60%)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* ══════ CENTRAL HUB — AI Orchestration ══════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] z-20"
      >
        <div className="relative">
          {/* Outer ring glow */}
          <div className="absolute -inset-4 rounded-2xl bg-[hsl(200_100%_55%/0.08)] blur-xl animate-pulse-glow" />
          <div className="gradient-border-card">
            <div className="gradient-border-inner px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-mono">Aktívne</span>
              </div>
              <div className="font-display text-sm font-bold text-foreground">AI Orchestration</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Centrálne riadenie</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ══════ TOP LEFT — Obchod ══════ */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[8%] left-[2%] z-10"
        {...floatAnim(7, 0)}
      >
        <div className="glass-card-static p-4 w-[175px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-[hsl(200_100%_55%/0.12)] border border-[hsl(200_100%_55%/0.2)] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(200 100% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-primary/60 font-mono">Obchod</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">Nové leady</span>
              <span className="text-[11px] font-mono text-primary/80">+34</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">Follow-up</span>
              <span className="text-[11px] font-mono text-foreground/50">auto</span>
            </div>
            <div className="h-1 rounded-full bg-muted/30 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary/40"
                initial={{ width: "0%" }}
                animate={{ width: "82%" }}
                transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ══════ TOP RIGHT — Marketing ══════ */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[4%] right-[2%] z-10"
        {...floatAnim(8, 1)}
      >
        <div className="glass-card-static p-4 w-[175px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-[hsl(260_70%_60%/0.12)] border border-[hsl(260_70%_60%/0.2)] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(260 70% 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-secondary/60 font-mono">Marketing</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">Kampane</span>
              <span className="text-[11px] font-mono text-secondary/80">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground">Personalizácia</span>
              <span className="text-[11px] font-mono text-foreground/50">AI</span>
            </div>
            <div className="flex items-end gap-[2px] mt-1">
              {[30, 45, 35, 60, 50, 75, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-[12px] rounded-[1px]"
                  style={{
                    height: `${h * 0.25}px`,
                    background: `linear-gradient(to top, hsl(260 70% 60% / 0.2), hsl(260 70% 60% / ${0.3 + h / 200}))`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ══════ MIDDLE LEFT — Workflow Status ══════ */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[42%] left-[-3%] z-10"
        {...floatAnim(9, 2)}
      >
        <div className="glass-card-static p-4 w-[160px]">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/50 mb-2.5">Workflow</div>
          <div className="space-y-2.5">
            {[
              { label: "Spracovanie", status: "live", color: "bg-primary" },
              { label: "Schvaľovanie", status: "auto", color: "bg-secondary" },
              { label: "Notifikácie", status: "ok", color: "bg-accent" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color} animate-pulse`} />
                <span className="text-[10px] text-foreground/50 flex-1">{item.label}</span>
                <span className="text-[9px] font-mono text-muted-foreground">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══════ MIDDLE RIGHT — AI Tasks ══════ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[48%] right-[-2%] z-10"
        {...floatAnim(6, 0.5)}
      >
        <div className="glass-card-static p-4 w-[155px]">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/50 mb-1">AI Tasks</div>
          <div className="text-2xl font-display font-bold gradient-text-primary">247</div>
          <div className="text-[9px] text-muted-foreground mt-0.5">/ mesiac</div>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-1 h-0.5 rounded-full bg-primary/30">
                <motion.div
                  className="h-full rounded-full bg-primary/70"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 2 + i * 0.15 }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══════ BOTTOM — Operatíva ══════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-10"
        {...floatAnim(7.5, 1.5)}
      >
        <div className="glass-card-static p-4 w-[200px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-[hsl(195_100%_62%/0.12)] border border-[hsl(195_100%_62%/0.2)] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(195 100% 62%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-accent/60 font-mono">Operatíva</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-muted/20 rounded-md p-2 text-center">
              <div className="text-[15px] font-display font-bold text-accent/80">92%</div>
              <div className="text-[8px] text-muted-foreground">Automatizácia</div>
            </div>
            <div className="bg-muted/20 rounded-md p-2 text-center">
              <div className="text-[15px] font-display font-bold text-foreground/60">2.4s</div>
              <div className="text-[8px] text-muted-foreground">Reakcia</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting accent dots */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-1.5 h-1.5 rounded-full bg-primary/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "0 120px" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-1 h-1 rounded-full bg-secondary/50"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "0 180px" }}
      />
    </div>
  );
};

export default AIPlatformVisual;
