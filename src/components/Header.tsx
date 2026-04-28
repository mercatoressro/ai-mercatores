import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { trackBookingClick } from "@/lib/analytics";
import { useT } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "/#" },
    { label: t.nav.solutions, href: "/#riesenia" },
    { label: t.nav.howItWorks, href: "/#ako-to-funguje" },
    { label: t.nav.forWhom, href: "/#pre-koho" },
    { label: t.nav.hundredChanges, href: "/#100-zmien" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.nav.contact, href: "/#kontakt" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass shadow-[0_4px_30px_-10px_hsl(200_100%_55%/0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#" className="font-display font-bold text-[1.15rem] tracking-tight relative group">
            <span className="text-white">ai.</span>
            <span className="gradient-text-primary">mercatores</span>
            <span className="text-foreground/70">.sk</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary/40 transition-all duration-500 group-hover:w-full" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-[0.8125rem] text-foreground/70 hover:text-foreground transition-colors duration-400 relative group rounded-lg hover:bg-muted/20"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#kontakt"
              onClick={() => trackBookingClick("header_desktop")}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-[0.8125rem]"
            >
              <span>{t.header.cta}</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border/20 overflow-hidden">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-foreground/75 hover:text-foreground hover:bg-muted/20 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#kontakt"
                onClick={() => {
                  trackBookingClick("header_mobile");
                  setMobileOpen(false);
                }}
                className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm w-full"
              >
                <span>{t.header.cta}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
