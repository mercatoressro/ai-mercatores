import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Domov", href: "#" },
  { label: "O nás", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Referencie", href: "#referencie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="font-display font-bold text-xl tracking-tight mb-4 text-foreground">
              ai.mercatores<span className="text-primary">.sk</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              B2B obchod a AI transformácia pre firmy, ktoré chcú rásť.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-muted-foreground font-bold mb-5">Navigácia</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-muted-foreground font-bold mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li>
                <a href="mailto:ai@mercatores.sk" className="hover:text-primary transition-colors">ai@mercatores.sk</a>
              </li>
              <li>
                <a href="tel:+421905600095" className="hover:text-primary transition-colors">0905 600 095</a>
              </li>
              <li>
                <a href="https://wa.me/421905600095" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp: 0905 600 095</a>
              </li>
            </ul>
            <a href="#kontakt" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider">
              <span>Bezplatná konzultácia</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mercatores. Všetky práva vyhradené.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">Ochrana súkromia</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
