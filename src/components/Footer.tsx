import logo from "@/assets/logo-ai-mercatores-transparent.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="mb-4">
              <img src={logo} alt="ai.mercatores.sk" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Obchodný systém, AI nástroje a exekúcia pre firmy, ktoré chcú riadený rast pod značkou ai.mercatores.sk.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-5">Navigácia</h4>
            <ul className="space-y-3">
              {[
                { label: "Riešenie", href: "#riesenie" },
                { label: "AI CEO", href: "#ai-ceo" },
                { label: "Ako to funguje", href: "#proces" },
                { label: "Pre koho", href: "#pre-koho" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:ai@mercatores.sk" className="hover:text-foreground transition-colors">ai@mercatores.sk</a>
              </li>
              <li>
                <a href="mailto:ai@ai.mercatores.sk" className="hover:text-foreground transition-colors">ai@ai.mercatores.sk</a>
              </li>
              <li>
                <a href="tel:+421905600095" className="hover:text-foreground transition-colors">0905 600 095</a>
              </li>
              <li>
                <a href="https://wa.me/421905600095" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp: 0905 600 095
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ai.mercatores.sk — Všetky práva vyhradené.
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
