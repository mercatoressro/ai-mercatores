import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Domov", href: "#" },
  { label: "Riešenia", href: "#riesenia" },
  { label: "Ako to funguje", href: "#ako-to-funguje" },
  { label: "Pre koho", href: "#pre-koho" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/25">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="font-display font-bold text-xl tracking-tight mb-4">
              <span className="text-white">ai.</span>
              <span className="gradient-text-primary">mercatores</span>
              <span className="text-foreground/70">.sk</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
              AI transformačná platforma pre firmy, ktoré chcú riadený výkon namiesto chaosu.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-foreground/75 font-bold mb-5">Navigácia</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-foreground/75 font-bold mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-foreground/80 mb-8">
              <li>
                <a href="mailto:ai@ai.mercatores.sk" className="hover:text-foreground transition-colors">ai@ai.mercatores.sk</a>
              </li>
              <li>
                <a href="mailto:ai@mercatores.sk" className="hover:text-foreground transition-colors">ai@mercatores.sk</a>
              </li>
              <li>
                <a href="tel:+421905600095" className="hover:text-foreground transition-colors">0905 600 095</a>
              </li>
              <li>
                <a href="https://wa.me/421905600095" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp: 0905 600 095</a>
              </li>
            </ul>
            <a href="#kontakt" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
              <span>Dohodnúť konzultáciu</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/60">
            © {new Date().getFullYear()} ai.mercatores.sk. Všetky práva vyhradené.
          </p>
          <div className="flex gap-8 text-xs text-foreground/60">
            <a href="#" className="hover:text-foreground/80 transition-colors duration-300">Ochrana súkromia</a>
            <a href="#" className="hover:text-foreground/80 transition-colors duration-300">Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
