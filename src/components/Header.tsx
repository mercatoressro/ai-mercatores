import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Domov", href: "#" },
  { label: "Riešenia", href: "#riesenia" },
  { label: "Ako to funguje", href: "#ako-to-funguje" },
  { label: "Pre koho", href: "#pre-koho" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/30 shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-tight">
          <span className="text-foreground">ai.</span>
          <span className="gradient-text-primary">mercatores</span>
          <span className="text-muted-foreground">.sk</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#kontakt"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-primary"
          >
            Dohodnúť AI audit
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border/30 px-6 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground"
          >
            Dohodnúť AI audit
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
