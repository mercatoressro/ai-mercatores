import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling
  };

  return (
    <section id="kontakt" className="relative py-24 md:py-32 section-gradient-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Zistite, kde vám AI prinesie{" "}
            <span className="gradient-text">najväčší reálny dopad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pozrieme sa na vaše obchodné, marketingové a prevádzkové procesy a navrhneme konkrétne miesta, kde AI a automatizácia prinesú najvyšší efekt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Meno</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Vaše meno"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Firma</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Názov firmy"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-2">E-mail</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="email@firma.sk"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Telefón</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="+421 ..."
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Stručný opis situácie</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Popíšte vašu situáciu, výzvy alebo čo riešite..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-primary"
            >
              Chcem AI audit
              <ArrowRight size={18} />
            </button>
            <p className="text-xs text-muted-foreground/50 text-center">
              Bezplatná úvodná konzultácia. Žiadne záväzky.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            {/* AI Platform Visual */}
            <div className="relative w-full max-w-sm">
              <div className="glass-card p-6 mb-4">
                <div className="text-xs text-muted-foreground mb-3 font-mono">AI Audit Overview</div>
                <div className="space-y-3">
                  {["Obchod", "Marketing", "Operatíva"].map((area, i) => (
                    <div key={area} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                      <span className="text-sm text-foreground/70">{area}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${60 + i * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-xs text-muted-foreground">Priemerný čas do prvých výsledkov</p>
                <p className="font-display text-2xl font-bold gradient-text-primary mt-1">2–4 týždne</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
