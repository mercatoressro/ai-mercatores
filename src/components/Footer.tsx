const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2.5">
              <span className="text-[1.1rem] font-extrabold tracking-tight text-foreground">Mercatores</span>
              <span className="text-[0.8rem] font-medium text-muted-foreground">Rastový audit</span>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Diagnostika obchodu, dopytu a procesov pre firmy, ktoré už predávajú,
              ale rastú chaoticky.
            </p>
            <div className="mt-4 space-y-1">
              <a href="mailto:info@mercatores.sk" className="block text-[0.95rem] font-medium text-primary hover:underline">
                info@mercatores.sk
              </a>
              <a href="tel:+421905600095" className="block text-[0.95rem] text-muted-foreground hover:text-foreground">
                0905 600 095
              </a>
              <p className="text-[0.9rem] text-muted-foreground">Slovensko</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Odkazy
            </span>
            <a href="https://www.mercatores.sk" className="text-[0.95rem] text-foreground hover:text-primary">
              Služby
            </a>
            <a href="/#kontakt" className="text-[0.95rem] text-foreground hover:text-primary">
              Kontakt
            </a>
            <a
              href="https://www.mercatores.sk/ochrana-osobnych-udajov/"
              className="text-[0.95rem] text-foreground hover:text-primary"
            >
              Ochrana osobných údajov
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-[0.85rem] text-muted-foreground">
          © {year} Mercatores. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
