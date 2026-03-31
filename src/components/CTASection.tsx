import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import bgNetwork from "@/assets/bg-network.jpg";

const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full px-5 py-3.5 rounded-xl bg-[hsl(225_25%_8%/0.9)] border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_20px_-5px_hsl(200_100%_55%/0.15)] transition-all duration-300";

  return (
    <section
      id="kontakt"
      className="relative py-28 md:py-36 section-deep overflow-hidden"
    >
      {/* Photo background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={bgNetwork} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[hsl(200_100%_55%/0.03)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[hsl(260_70%_60%/0.02)] rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            Zistite, kde vám AI prinesie{" "}
            <span className="gradient-text-hero">najväčší reálny dopad</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-base leading-relaxed">
            Pozrieme sa na vaše obchodné, marketingové a prevádzkové procesy a
            navrhneme konkrétne miesta, kde AI a automatizácia prinesú najvyšší
            efekt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
          {/* Form — 3 cols */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="gradient-border-card">
              <div className="gradient-border-inner p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground/80 mb-2 uppercase tracking-wider font-medium">
                      Meno
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground/80 mb-2 uppercase tracking-wider font-medium">
                      Firma
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Názov firmy"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground/80 mb-2 uppercase tracking-wider font-medium">
                      E-mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="email@firma.sk"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground/80 mb-2 uppercase tracking-wider font-medium">
                      Telefón
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+421 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-foreground/80 mb-2 uppercase tracking-wider font-medium">
                    Stručný opis situácie
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Popíšte vašu situáciu, výzvy alebo čo riešite..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2.5 px-8 py-4 text-[0.9375rem]"
                >
                  <span>Chcem AI audit</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-foreground/65 text-center leading-relaxed">
                  Prvý krok nie je nákup nástroja. Prvý krok je pochopiť, kde má
                  AI vo vašej firme najväčší efekt.
                </p>
              </div>
            </div>
          </motion.form>

          {/* Side visual — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2 hidden lg:flex flex-col gap-5"
          >
            {/* AI audit overview card */}
            <div className="gradient-border-card">
              <div className="gradient-border-inner p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-foreground/75 font-mono">
                    AI Audit Overview
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Obchod", w: "85%" },
                    { label: "Marketing", w: "68%" },
                    { label: "Operatíva", w: "92%" },
                  ].map((area) => (
                    <div key={area.label} className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[11px] text-foreground/85">
                          {area.label}
                        </span>
                        <span className="text-[10px] text-primary/75 font-mono">
                          {area.w}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-accent/60"
                          style={{ width: area.w }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process card */}
            <div className="gradient-border-card">
              <div className="gradient-border-inner p-6">
                <div className="text-[10px] uppercase tracking-widest text-foreground/70 font-medium mb-3">
                  Postup
                </div>
                <div className="space-y-3">
                  {[
                    "Diagnostika procesov",
                    "Návrh architektúry",
                    "Implementácia",
                    "Správa a optimalizácia",
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 text-[0.8125rem]"
                    >
                       <span className="text-[10px] font-mono text-primary/70 w-4">
                        0{i + 1}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      <span className="text-foreground/85">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Microcopy card */}
            <div className="gradient-border-card">
              <div className="gradient-border-inner p-6 text-center">
                <p className="text-[0.875rem] text-foreground/85 leading-relaxed">
                  Bez zbytočnej vaty.
                  <br />
                  <span className="text-foreground/90 font-medium">
                    Najprv diagnostika, potom riešenie.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
