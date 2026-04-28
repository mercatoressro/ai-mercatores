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
  const langRef = useRef<Lang>("sk");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "sk" || saved === "en") {
        setLangState(saved);
        langRef.current = saved;
      } else {
        const browser = (navigator.language || "sk").toLowerCase();
        if (browser.startsWith("en")) {
          setLangState("en");
          langRef.current = "en";
        }
      }
    } catch {
      /* ignore */
    }

    // Safety: if the page was reloaded mid-transition, ensure no stale attr.
    document.documentElement.removeAttribute("data-lang-transition");

    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      document.documentElement.removeAttribute("data-lang-transition");
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    if (langRef.current === l) return;
    langRef.current = l;

    // Preserve focus + scroll across the language swap
    const active = document.activeElement as HTMLElement | null;
    const focusSelector =
      active && active !== document.body ? buildSelector(active) : null;
    const scrollY = window.scrollY;

    const root = document.documentElement;
    root.setAttribute("data-lang-transition", "out");
    setIsTransitioning(true);

    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }

    // Fade out → swap → fade in
    window.setTimeout(() => {
      setLangState(l);
      root.setAttribute("data-lang-transition", "in");
      window.scrollTo({ top: scrollY, behavior: "auto" });

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
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

function buildSelector(el: HTMLElement): string | null {
  try {
    if (el.id) return `#${CSS.escape(el.id)}`;
    const name = el.getAttribute("name");
    if (name) return `${el.tagName.toLowerCase()}[name="${CSS.escape(name)}"]`;
    for (const k of ["data-focus-key", "data-testid"]) {
      const v = el.getAttribute(k);
      if (v) return `[${k}="${CSS.escape(v)}"]`;
    }
    const parent = el.parentElement;
    if (!parent) return null;
    const idx = Array.from(parent.children).indexOf(el);
    return `${parent.tagName.toLowerCase()} > ${el.tagName.toLowerCase()}:nth-child(${idx + 1})`;
  } catch {
    return null;
  }
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};

export const useT = () => useLanguage().t;
