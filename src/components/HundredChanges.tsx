import { useState } from "react";
import { ArrowRight, Bot, Megaphone, Handshake, Cog, Layers, Rocket, Globe } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import cropNetwork from "@/assets/crop-network.jpg";
import cropDashboard from "@/assets/crop-dashboard.jpg";

const blockIcons = [Bot, Megaphone, Handshake, Cog, Layers, Rocket, Globe];

type Block = { title: string; desc: string; points: readonly string[] };

const BlockCard = ({
  block,
  index,
  isActive,
  onClick,
}: {
  block: Block;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = blockIcons[index];

  return (
    <div onClick={onClick} className="group cursor-pointer h-full">
      <div
        className={`relative h-full rounded-2xl border p-6 lg:p-7 transition-all duration-400 overflow-hidden
          ${
            isActive
              ? "border-[hsl(var(--border-glow)/0.35)] bg-[hsl(225_25%_8%/0.95)] shadow-[0_0_50px_-12px_hsl(var(--glow-primary)/0.2),inset_0_1px_0_hsl(var(--border-glow)/0.1)]"
              : "border-border/40 bg-[hsl(225_25%_6%/0.7)] hover:border-border/70 hover:bg-[hsl(225_25%_8%/0.8)] hover:shadow-[0_8px_32px_-8px_hsl(225_30%_3%/0.6)]"
          }
        `}
      >
        {isActive && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.4)] to-transparent" />
        )}
        <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />

        <div className="flex items-start gap-4 mb-4">
          <div
            className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "bg-primary/15 text-primary shadow-[0_0_20px_-4px_hsl(var(--glow-primary)/0.25)]"
                : "bg-[hsl(225_20%_12%)] text-muted-foreground group-hover:text-primary/70 group-hover:bg-[hsl(225_20%_14%)]"
            }`}
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span
            className={`text-[11px] font-mono font-medium tracking-wider mt-1 ${
              isActive ? "text-primary/60" : "text-muted-foreground/40"
            }`}
          >
            0{index + 1}
          </span>
        </div>

        <h3 className="font-display font-bold text-[17px] text-white mb-2 leading-tight">
          {block.title}
        </h3>
        <p className="text-foreground/65 text-[14px] leading-relaxed mb-4">
          {block.desc}
        </p>

        <ul className="space-y-2">
          {block.points.map((point, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <div
                className={`flex-shrink-0 w-[5px] h-[5px] rounded-full mt-[7px] transition-colors ${
                  isActive ? "bg-primary/80" : "bg-primary/30 group-hover:bg-primary/50"
                }`}
              />
              <span className="text-foreground/85 text-[13.5px] leading-[1.6]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HundredChanges = () => {
  const t = useT();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const blocks = t.hundred.blocks;

  return (
    <section id="100-zmien" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={cropNetwork} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" />
        <img src={cropDashboard} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[hsl(225_30%_2.5%/0.86)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-8%] w-[700px] h-[700px] bg-[hsl(var(--glow-primary)/0.035)] rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[-8%] w-[600px] h-[600px] bg-[hsl(var(--glow-secondary)/0.025)] rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[900px] h-[300px] bg-[hsl(210_80%_15%/0.03)] rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-[0.025] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--border-glow)/0.2)] bg-[hsl(225_25%_8%/0.6)] mb-7 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/90 font-mono font-medium">
              {t.hundred.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold mb-7 leading-[1.08] text-white">
            <span className="text-primary">100</span> {t.hundred.title1}
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text-hero">{t.hundred.titleAccent}</span>
          </h2>

          <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-[1.75]">
            {t.hundred.sub}
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16 md:mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-6">
          {blocks.slice(0, 4).map((block, i) => (
            <BlockCard
              key={i}
              block={block}
              index={i}
              isActive={activeIdx === i}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 xl:max-w-none xl:mx-auto mb-20 md:mb-24">
          {blocks.slice(4).map((block, i) => {
            const idx = i + 4;
            return (
              <BlockCard
                key={idx}
                block={block}
                index={idx}
                isActive={activeIdx === idx}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              />
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="relative rounded-2xl border border-border/30 bg-[hsl(225_25%_5%/0.7)] px-8 py-10 md:px-12 md:py-12 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[hsl(var(--glow-primary)/0.04)] rounded-full blur-[80px]" />
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border-glow)/0.2)] to-transparent" />

            <blockquote className="relative z-10 font-display text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white leading-[1.35]">
              {t.hundred.quote1}
              <br className="hidden md:block" />{" "}
              <span className="gradient-text-primary">{t.hundred.quoteAccent}</span>
            </blockquote>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-[hsl(var(--border-glow)/0.25)] bg-[hsl(225_25%_7%/0.8)] overflow-hidden shadow-[0_0_60px_-20px_hsl(var(--glow-primary)/0.15)]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-8 md:p-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-xl md:text-[1.375rem] text-white mb-2">
                  {t.hundred.ctaTitle}
                </h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  {t.hundred.ctaDesc}
                </p>
              </div>
              <a
                href="#kontakt"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-[15px] hover:brightness-110 hover:shadow-[0_0_24px_-4px_hsl(var(--glow-primary)/0.4)] transition-all duration-300"
              >
                {t.hundred.ctaBtn}
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HundredChanges;
