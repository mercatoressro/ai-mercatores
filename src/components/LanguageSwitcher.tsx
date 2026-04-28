import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "sk", label: "SK" },
  { value: "en", label: "EN" },
];

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, isTransitioning } = useLanguage();
  const activeIndex = OPTIONS.findIndex((o) => o.value === lang);

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-lg border border-border/30 bg-muted/20 p-1 ${className}`}
    >
      {/* Sliding indicator */}
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-md bg-primary/15 transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 0.5rem) / ${OPTIONS.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {OPTIONS.map((opt) => {
        const active = opt.value === lang;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            disabled={isTransitioning}
            aria-pressed={active}
            aria-label={`Switch language to ${opt.label}`}
            className={`relative z-10 px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider uppercase rounded-md transition-colors duration-300 disabled:cursor-wait ${
              active ? "text-primary" : "text-foreground/55 hover:text-foreground/90"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
