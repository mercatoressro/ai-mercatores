import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { trackBookingClick } from "@/lib/analytics";

const NAV = [
  { label: "Problém", href: "/#problem" },
  { label: "Audit", href: "/#audit" },
  { label: "Metodika", href: "/#metodika" },
  { label: "Výstup", href: "/#vystup" },
  { label: "Kontakt", href: "/#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "border-b border-border shadow-[0_1px_3px_rgba(17,24,39,0.04)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/#" aria-label="Mercatores — Rastový audit" className="flex items-baseline gap-2.5">
          <span className="text-[1.15rem] font-extrabold tracking-tight text-foreground">Mercatores</span>
          <span className="hidden text-[0.8rem] font-medium text-muted-foreground sm:inline">Rastový audit</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-[0.9rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="/#kontakt" onClick={() => trackBookingClick("header_desktop")} className="btn-primary px-5 py-2.5 text-[0.9rem]">
            Zistiť úniky v obchode
          </a>
        </div>

        <button
          className="p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Otvoriť menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="space-y-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-3 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-[hsl(var(--surface))] hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => {
                trackBookingClick("header_mobile");
                setMobileOpen(false);
              }}
              className="btn-primary mt-2 w-full"
            >
              Zistiť úniky v obchode
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
