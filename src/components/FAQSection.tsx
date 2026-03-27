import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Pre aké firmy je riešenie vhodné?", a: "Pre malé a stredné B2B firmy, služby, retail, zdravotníctvo a firmy v raste, ktoré chcú systémovo riadiť obchod, marketing a operatívu pomocou AI." },
  { q: "Musíme mať už svoje systémy?", a: "Nie nevyhnutne. Dokážeme pracovať s existujúcimi nástrojmi aj navrhnúť riešenie od nuly. Počas auditu zmapujeme váš aktuálny stav." },
  { q: "Viete sa napojiť na CRM a ďalšie nástroje?", a: "Áno. Integrujeme sa s bežnými CRM, marketingovými a prevádzkovými nástrojmi. Konkrétne integrácie riešime v rámci návrhu architektúry." },
  { q: "Koľko trvá nasadenie?", a: "Závisí od rozsahu. Prvé výsledky vidíte typicky v priebehu týždňov. Kompletná transformácia prebieha postupne, v riadených fázach." },
  { q: "Robíte aj správu po spustení?", a: "Áno. Správa a optimalizácia je kľúčová časť nášho modelu. Nepustíme riešenie do sveta a neodídeme." },
  { q: "Je to vhodné aj pre menšie tímy?", a: "Áno. AI a automatizácia sú práve pre menšie tímy mimoriadne efektívne — dokážu nahradiť manuálnu prácu a zvýšiť výkon bez nutnosti prijímať." },
  { q: "Čo ak nevieme, kde začať?", a: "Presne na to slúži náš AI audit. Pozrieme sa na vaše procesy a navrhneme konkrétne miesta, kde AI prinesie najvyšší efekt." },
  { q: "Ako vyzerá prvý krok spolupráce?", a: "Vyplníte krátky formulár, dohodneme si úvodnú konzultáciu a prejdeme diagnostikou vašich procesov." },
  { q: "Viete riešiť obchod, marketing aj operatívu naraz?", a: "Áno, a presne v tom je naša pridaná hodnota. Nepracujeme v izolovaných silách, ale prepájame všetky tri oblasti do jedného riadeného systému." },
  { q: "Čo ak už máme časť nástrojov zavedenú?", a: "Budeme na nich stavať. Nenahrádzame funkčné veci — doplníme chýbajúce časti a prepojíme ich do uceleného systému." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-28 md:py-36 section-glow">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">FAQ</span>
          <h2 className="font-display text-section mb-5">
            Časté <span className="gradient-text-primary">otázky</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card-static px-7 border-none data-[state=open]:glow-subtle transition-shadow duration-500"
              >
                <AccordionTrigger className="text-[0.875rem] font-medium text-foreground/90 hover:text-primary transition-colors py-6 hover:no-underline gap-4 [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.8125rem] text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
