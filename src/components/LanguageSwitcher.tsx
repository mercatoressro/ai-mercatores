import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  const Btn = ({ value, label }: { value: Lang; label: string }) => {
    const active = lang === value;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        aria-label={`Switch language to ${label}`}
        className={`px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider uppercase rounded-md transition-all duration-300 ${
          active
            ? "bg-primary/15 text-primary"
            : "text-foreground/55 hover:text-foreground/90"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border/30 bg-muted/20 px-1 py-1 ${className}`}
    >
      <Btn value="sk" label="SK" />
      <span className="text-foreground/20 text-xs">|</span>
      <Btn value="en" label="EN" />
    </div>
  );
};

export default LanguageSwitcher;
