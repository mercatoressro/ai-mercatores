import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/i18n/LanguageContext";
import bgDashboard from "@/assets/bg-dashboard.jpg";

const FAQSection = () => {
  const t = useT();
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 section-glow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bgDashboard} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary font-mono font-medium mb-4">
            {t.faq.eyebrow}
          </span>
          <h2 className="font-display text-section mb-5 text-white">
            {t.faq.title1}{" "}
            <span className="gradient-text-primary">{t.faq.titleAccent}</span>
          </h2>
          <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
            {t.faq.sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((faq, i) => (
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

        <p className="text-center text-foreground/75 text-[0.875rem] mt-12 max-w-xl mx-auto">
          {t.faq.transition}
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
