import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bgDashboard from "@/assets/bg-dashboard.jpg";

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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 section-glow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgDashboard} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            Časté{" "}
            <span className="gradient-text-primary">otázky</span>
          </h2>
          <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
            Odpovede na to, čo nás klienti pýtajú najčastejšie pred spoluprácou.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card-static px-7 border-none data-[state=open]:glow-subtle transition-shadow duration-500"
              >
                <AccordionTrigger className="text-[0.9375rem] font-semibold text-white hover:text-primary transition-colors py-6 hover:no-underline gap-4 [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9rem] text-foreground/85 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Transition text */}
        <p
          className="text-center text-foreground/75 text-[0.875rem] mt-12 max-w-xl mx-auto"
        >
          Ak máte otázky špecifické pre vašu firmu, najrýchlejšie ich zodpovie úvodný AI audit.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
