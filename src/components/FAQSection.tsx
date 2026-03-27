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
    <section id="faq" className="relative py-24 md:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Časté <span className="gradient-text-primary">otázky</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5">
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
