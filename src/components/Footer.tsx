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
    <footer className="relative border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display font-bold text-xl mb-3">
              <span className="text-foreground">ai.</span>
              <span className="gradient-text-primary">mercatores</span>
              <span className="text-muted-foreground">.sk</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI transformačná platforma pre firmy, ktoré chcú riadený výkon namiesto chaosu.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Navigácia</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ai.mercatores.sk</li>
              <li>info@mercatores.sk</li>
            </ul>
            <a
              href="#kontakt"
              className="inline-flex items-center mt-6 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Dohodnúť konzultáciu
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ai.mercatores.sk. Všetky práva vyhradené.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Ochrana súkromia</a>
            <a href="#" className="hover:text-foreground transition-colors">Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
