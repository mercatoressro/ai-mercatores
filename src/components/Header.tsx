import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Domov", href: "#" },
  { label: "O nás", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Referencie", href: "#referencie" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-[slideDown_0.8s_ease-out] ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#" className="font-display font-bold text-[1.3rem] tracking-tight text-foreground">
            ai.mercatores<span className="text-primary">.sk</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-[0.875rem] text-muted-foreground hover:text-primary transition-colors duration-300 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-[0.8125rem] font-bold uppercase tracking-wider"
            >
              <span>AI AUDIT ZDARMA</span>
            </a>
          </div>

          <button
            className="lg:hidden text-foreground/80 hover:text-foreground transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border/50 animate-[fadeIn_0.3s_ease-out]">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider w-full"
              >
                AI AUDIT ZDARMA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
