import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-ai-mercatores-transparent.png";

const navItems = [
  { label: "Riešenie", href: "#riesenie" },
  { label: "AI CEO", href: "#ai-ceo" },
  { label: "Ako to funguje", href: "#proces" },
  { label: "Pre koho", href: "#pre-koho" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-[slideDown_0.6s_ease-out] ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <a href="#" className="flex items-center">
            <img src={logo} alt="ai.mercatores.sk" className="h-[84px] w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className="btn-primary inline-flex items-center px-5 py-2.5 text-[0.8125rem]"
            >
              Dohodnúť konzultáciu
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
        <div className="lg:hidden bg-background border-t border-border animate-[fadeIn_0.2s_ease-out]">
          <div className="px-6 py-5 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-md transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="btn-primary flex items-center justify-center px-6 py-3 text-sm w-full"
              >
                Dohodnúť konzultáciu
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
