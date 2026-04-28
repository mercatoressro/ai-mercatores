import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { translations, Lang, Dict } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  isTransitioning: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ai-mercatores-lang";
const TRANSITION_MS = 280;

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("sk");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "sk" || saved === "en") setLangState(saved);
      else {
        const browser = (navigator.language || "sk").toLowerCase();
        if (browser.startsWith("en")) setLangState("en");
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState((prev) => {
      if (prev === l) return prev;

      // Preserve focus + scroll across the language swap
      const active = document.activeElement as HTMLElement | null;
      const focusSelector = active && active !== document.body ? buildSelector(active) : null;
      const scrollY = window.scrollY;

      // Trigger fade-out → swap → fade-in via CSS hook on <html>
      const root = document.documentElement;
      root.setAttribute("data-lang-transition", "out");
      setIsTransitioning(true);

      window.requestAnimationFrame(() => {
        // Swap happens after the fade-out frame is committed
        window.setTimeout(() => {
          root.setAttribute("data-lang-transition", "in");

          // Restore scroll immediately (layout may shift slightly with EN text)
          window.scrollTo({ top: scrollY, behavior: "auto" });

          // Restore focus on next frame, after React re-renders new strings
          window.requestAnimationFrame(() => {
            if (focusSelector) {
              const el = document.querySelector<HTMLElement>(focusSelector);
              el?.focus({ preventScroll: true });
            }
          });

          if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
          transitionTimer.current = window.setTimeout(() => {
            root.removeAttribute("data-lang-transition");
            setIsTransitioning(false);
          }, TRANSITION_MS);
        }, TRANSITION_MS / 2);
      });

      try {
        localStorage.setItem(STORAGE_KEY, l);
      } catch {
        /* ignore */
      }
      return l;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Build a best-effort unique selector to restore focus after the swap.
// Prefers id, then name, then a stable data-* attribute, then tag + index.
function buildSelector(el: HTMLElement): string | null {
  if (el.id) return `#${CSS.escape(el.id)}`;
  const name = el.getAttribute("name");
  if (name) return `${el.tagName.toLowerCase()}[name="${CSS.escape(name)}"]`;
  const dataKeys = ["data-focus-key", "data-testid"];
  for (const k of dataKeys) {
    const v = el.getAttribute(k);
    if (v) return `[${k}="${CSS.escape(v)}"]`;
  }
  // Fallback: tag + position among siblings
  const parent = el.parentElement;
  if (!parent) return null;
  const idx = Array.from(parent.children).indexOf(el);
  const parentSel = parent.tagName.toLowerCase();
  return `${parentSel} > ${el.tagName.toLowerCase()}:nth-child(${idx + 1})`;
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};

export const useT = () => useLanguage().t;
