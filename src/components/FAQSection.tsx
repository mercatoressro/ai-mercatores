import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Pre aké firmy je riešenie vhodné?",
    a: "Pre malé a stredné firmy, ktoré chcú systémovo riadiť obchod, marketing a operatívu. Najčastejšie pracujeme s B2B firmami, službami, retailom, zdravotníctvom a firmami v raste — od 10 do 500 ľudí.",
  },
  {
    q: "Musíme mať už pripravené vlastné systémy?",
    a: "Nie. Dokážeme pracovať s existujúcimi nástrojmi aj navrhnúť riešenie od nuly. V rámci auditu zmapujeme váš aktuálny stav a navrhneme, čo ponechať, čo doplniť a čo prepojiť.",
  },
  {
    q: "Viete sa napojiť na CRM, marketingové a interné nástroje?",
    a: "Áno. Integrujeme sa s bežnými CRM, e-mailovými, marketingovými a prevádzkovými nástrojmi. Konkrétne integrácie riešime v rámci návrhu architektúry — vždy podľa reality vašej firmy.",
  },
  {
    q: "Koľko zvyčajne trvá prvé nasadenie?",
    a: "Závisí od rozsahu. Prvé výsledky vidíte typicky v priebehu týždňov. Kompletná transformácia prebieha postupne, v riadených fázach — nie ako jednorazový veľký projekt.",
  },
  {
    q: "Robíte aj správu po spustení?",
    a: "Áno, a považujeme to za kľúčovú časť. AI riešenie bez priebežnej správy a optimalizácie stráca efekt. Nepustíme riešenie do sveta a neodídeme.",
  },
  {
    q: "Je riešenie vhodné aj pre menší tím?",
    a: "Áno. AI a automatizácia sú pre menšie tímy mimoriadne efektívne — dokážu nahradiť manuálnu prácu a zvýšiť výkon bez nutnosti rozširovať tím.",
  },
  {
    q: "Čo ak ešte nevieme, kde začať?",
    a: "Presne na to slúži náš AI audit. Pozrieme sa na vaše procesy v obchode, marketingu a operatíve a navrhneme konkrétne miesta, kde AI prinesie najvyšší efekt.",
  },
  {
    q: "Viete riešiť obchod, marketing aj operatívu naraz?",
    a: "Áno, a presne v tom je naša pridaná hodnota. Nepracujeme v izolovaných silách — prepájame všetky tri oblasti do jedného riadeného systému.",
  },
  {
    q: "Čo ak už máme časť nástrojov zavedenú?",
    a: "Budeme na nich stavať. Nenahrádzame funkčné veci — doplníme chýbajúce časti, prepojíme ich a zaradíme do uceleného systému.",
  },
  {
    q: "Čo je prvý krok spolupráce?",
    a: "Vyplníte krátky formulár alebo nám napíšete. Dohodneme si úvodnú konzultáciu, kde prejdeme diagnostikou vašich procesov a navrhneme ďalší postup.",
  },
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary/80 font-mono mb-4">
            FAQ
          </span>
          <h2 className="font-display text-section mb-5">
            Časté{" "}
            <span className="gradient-text-primary">otázky</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base">
            Odpovede na to, čo nás klienti pýtajú najčastejšie pred spoluprácou.
          </p>
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
                <AccordionTrigger className="text-[0.875rem] font-medium text-foreground hover:text-primary transition-colors py-6 hover:no-underline gap-4 [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.8125rem] text-muted-foreground/85 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Transition text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground/65 text-[0.8125rem] mt-12 max-w-xl mx-auto"
        >
          Ak máte otázky špecifické pre vašu firmu, najrýchlejšie ich zodpovie úvodný AI audit.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;
