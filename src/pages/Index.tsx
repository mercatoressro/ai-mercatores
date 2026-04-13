import {
  Users,
  Brain,
  Heart,
  Briefcase,
  Target,
  GraduationCap,
  Settings,
  FileText,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-ai-room.jpg";
import photoAi1 from "@/assets/photo-ai-1.png";
import photoAi2 from "@/assets/photo-ai-2.png";
import photoAi3 from "@/assets/photo-ai-3.png";
import photoAi4 from "@/assets/photo-ai-4.png";
import logoGHL from "@/assets/logo-gohighlevel.png";
import logoOpenClaw from "@/assets/logo-openclaw.png";
import logoOpenAI from "@/assets/logo-openai.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — text */}
              <div className="animate-[heroFadeUp_0.7s_ease-out]">
                <h1 className="font-display text-hero mb-8 text-foreground">
                  Posúvame váš B2B obchod vpred.{" "}
                  <span className="gradient-text-primary">S podporou AI.</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
                  V Mercatores sme profesionáli na B2B predaj a outsourcing obchodu.
                  Kombinujeme dlhoročné obchodné skúsenosti s inováciami a umelou
                  inteligenciou pre dosiahnutie maximálnych výsledkov.
                </p>

                <a
                  href="#sluzby"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  <span>NAŠE SLUŽBY</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Right — hero image with gradient border */}
              <div className="relative flex justify-center lg:justify-end animate-[heroFadeUp_0.7s_ease-out_0.2s_both]">
                {/* Gradient circle behind image */}
                <div
                  className="absolute -inset-8 rounded-full opacity-60 blur-2xl"
                  style={{
                    background: "conic-gradient(from 180deg, hsl(186 100% 50%), hsl(262 83% 58%), hsl(186 100% 50%))",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-[560px] w-full">
                  <img
                    src={photoAi1}
                    alt="AI boardroom s holografickými displejmi"
                    className="w-full h-auto object-cover"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="relative py-12 overflow-hidden bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain size={24} className="text-primary" />
                </div>
                <p className="text-lg md:text-xl font-display font-bold text-foreground max-w-lg">
                  Zistite, ako môžeme zvýšiť vaše tržby vďaka modernému prístupu k obchodu
                </p>
              </div>
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap"
              >
                BEZPLATNÁ KONZULTÁCIA
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-14 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-mono mb-10">
              Dôverujú nám:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                { src: logoGHL, alt: "GoHighLevel", width: 140 },
                { src: logoOpenClaw, alt: "OpenClaw", width: 130 },
                { src: logoOpenAI, alt: "OpenAI", width: 120 },
              ].map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale"
                  style={{ maxWidth: logo.width }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quote */}
            <div className="max-w-3xl mx-auto mb-20">
              <div className="glass-card-static p-10 md:p-14 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <Heart size={24} className="text-primary" />
                </div>
                <blockquote className="text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed mb-6">
                  "Moderný obchod už nie je len o telefonátoch. Je o dátach, automatizácii a budovaní dlhodobých vzťahov."
                </blockquote>
                <p className="text-sm text-muted-foreground">— Tím Mercatores</p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-section mb-6 text-foreground">
                Sme obchodníci s <span className="gradient-text-primary">vášňou pre inovácie</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Jadrom DNA spoločnosti Mercatores je B2B obchod. Pomáhame firmám rásť, získavať nových klientov a budovať silné obchodné oddelenia. Naše skúsenosti z terénu nám umožňujú prinášať reálne výsledky, nie len teóriu.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Uvedomujeme si však, že obchod sa vyvíja. Preto do našich procesov aktívne zapájame umelú inteligenciu. AI nám neslúži ako náhrada za ľudský kontakt, ale ako silný nástroj na automatizáciu rutiny, presnejšie cielenie a analytiku, vďaka čomu predávame efektívnejšie.
              </p>
              <a href="#sluzby" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider">
                <span>VIAC O NÁS</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative py-24 md:py-32 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-section mb-16 text-center text-foreground">
              Prečo práve <span className="gradient-text-primary">my</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Brain,
                  image: photoAi2,
                  title: "Technologická expertíza",
                  desc: "Sme špecialisti na implementáciu AI riešení. Pomohli sme už desiatkam firiem zautomatizovať ich procesy a zaviesť moderné technológie do každodennej praxe.",
                },
                {
                  icon: Target,
                  image: photoAi3,
                  title: "Neustála inovácia",
                  desc: "Sledujeme najnovšie trendy v oblasti umelej inteligencie a strojového učenia. Všetky nové poznatky okamžite testujeme a prinášame priamo do vašej firmy.",
                },
                {
                  icon: Settings,
                  image: photoAi4,
                  title: "Hladká integrácia",
                  desc: "AI nevnímame ako izolovaný nástroj, ale ako súčasť celého ekosystému firmy. Zabezpečujeme plynulú integráciu s vašimi existujúcimi systémami a procesmi.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-0 group overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
              <h2 className="font-display text-section text-foreground">
                Čomu sa <span className="gradient-text-primary">venujeme</span>
              </h2>
              <a href="#kontakt" className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold uppercase tracking-wider">
                VŠETKY SLUŽBY →
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "AI Audit a Stratégia",
                  desc: "Zanalyzujeme vaše firemné procesy a navrhneme konkrétne oblasti, kde vám umelá inteligencia môže ušetriť čas a peniaze.",
                },
                {
                  icon: Settings,
                  title: "Automatizácia procesov",
                  desc: "Odstránime manuálnu prácu. Prepojíme vaše systémy a vytvoríme inteligentné automatizácie, ktoré pracujú 24/7 bez chýb.",
                },
                {
                  icon: Users,
                  title: "AI Asistenti a Chatboti",
                  desc: "Vytvoríme vám interných asistentov vyškolených na vašich dátach, alebo inteligentných chatbotov pre zákaznícku podporu.",
                },
                {
                  icon: Target,
                  title: "AI v Obchode a Marketingu",
                  desc: "Implementujeme nástroje pre personalizáciu oslovovania, analýzu hovorov a automatické generovanie obsahu.",
                },
                {
                  icon: GraduationCap,
                  title: "Školenia pre AI transformáciu",
                  desc: "Naučíme váš tím efektívne využívať ChatGPT, Copilot a ďalšie nástroje v ich každodennej práci.",
                },
                {
                  icon: FileText,
                  title: "Analýza dát pomocou AI",
                  desc: "Získajte hlboké insighty z vašich firemných dát pomocou pokročilých modelov strojového učenia.",
                },
              ].map((service) => (
                <div key={service.title} className="glass-card p-8 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-primary/30 to-accent/30 mb-5 rounded-full" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="referencie" className="relative py-24 md:py-32 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-section mb-16 text-center text-foreground">
              Výsledky našej <span className="gradient-text-primary">práce</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="glass-card-static p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono font-semibold">Certifikovaný partner</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Oficiálny partner OpenAI
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sme certifikovaným integračným partnerom a pomáhame firmám bezpečne nasadzovať veľké jazykové modely (LLMs) do ich internej infraštruktúry.
                </p>
                <a href="#kontakt" className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold uppercase tracking-wider">
                  POZRIEŤ REFERENCIE →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-section mb-5 text-foreground">
                Na čo sa nás najčastejšie <span className="gradient-text-primary">pýtate</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
                Nenašli ste, čo ste hľadali? Je to úplne v poriadku. Vieme, že každá firma je iná, má svoje vlastné výzvy a ciele.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Je AI bezpečná pre naše firemné dáta?",
                    a: "Absolútne. Pri implementácii využívame enterprise riešenia (napr. Azure OpenAI alebo privátne modely), ktoré garantujú, že vaše dáta sa nepoužijú na trénovanie verejných modelov a zostanú plne pod vašou kontrolou.",
                  },
                  {
                    q: "Nahradí AI našich zamestnancov?",
                    a: "Našou filozofiou je augmentácia, nie nahradzovanie. AI preberá rutinnú a opakujúcu sa prácu, čím uvoľňuje ruky vašim ľuďom, aby sa mohli venovať kreatívnej a strategickej činnosti.",
                  },
                  {
                    q: "Ako prebieha začiatok spolupráce?",
                    a: "Všetko začína bezplatným AI auditom. Zanalyzujeme vaše procesy a identifikujeme príležitosti pre automatizáciu. Následne navrhneme pilotný projekt s jasne merateľnou návratnosťou investície (ROI).",
                  },
                  {
                    q: "Ako rýchlo uvidím prvé výsledky?",
                    a: "Pri pilotných projektoch vidíte výsledky zvyčajne do 2 až 4 týždňov. Komplexnejšie automatizácie procesov trvajú 2 až 3 mesiace.",
                  },
                  {
                    q: "Potrebujeme vo firme vlastných IT špecialistov?",
                    a: "Nie. Dodávame riešenia na kľúč. Postaráme sa o vývoj, nasadenie, údržbu a taktiež zaškolíme vašich bežných zamestnancov.",
                  },
                  {
                    q: "Koľko takáto implementácia stojí?",
                    a: "Závisí to od rozsahu riešenia. Vždy ale začíname menším pilotným projektom, ktorý sa rýchlo zaplatí z ušetreného času a až následne škálujeme AI do ďalších oddelení.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card-static px-7 border-none"
                  >
                    <AccordionTrigger className="text-[0.9375rem] font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline gap-4 [&[data-state=open]]:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[0.9rem] text-muted-foreground pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center">
              <a href="#kontakt" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider">
                <span>KONTAKTUJTE NÁS</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="relative py-24 md:py-32 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card-static p-10 md:p-16 text-center relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-lg" />
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <Brain size={32} className="text-primary" />
                </div>
                <h2 className="font-display text-section mb-5 text-foreground">
                  Neviete, kde začať <span className="gradient-text-primary">s AI?</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mb-10">
                  Nechajte si spraviť bezplatný AI audit. Počas úvodnej konzultácie zistíme, aké procesy vo vašej firme sa dajú automatizovať a akú úsporu by vám to prinieslo.
                </p>
                <a
                  href="mailto:ai@mercatores.sk"
                  className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  <span>AI AUDIT ZDARMA</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
