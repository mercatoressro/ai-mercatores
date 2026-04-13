import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Brain,
  Heart,
  Briefcase,
  Target,
  GraduationCap,
  UserPlus,
  Settings,
  FileText,
  ChevronDown,
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
import bgMeeting from "@/assets/bg-meeting.jpg";
import bgDashboard from "@/assets/bg-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={bgMeeting} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.25]" fetchPriority="high" />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-30%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px]" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-primary font-mono font-semibold mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                B2B Obchod · AI · Outsourcing
              </span>

              <h1 className="font-display text-hero mb-8 text-foreground">
                Posúvame váš B2B obchod vpred.{" "}
                <span className="gradient-text-primary">S podporou AI.</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-12">
                V Mercatores sme profesionáli na B2B predaj a outsourcing obchodu.
                Kombinujeme dlhoročné obchodné skúsenosti s inováciami a umelou
                inteligenciou pre dosiahnutie maximálnych výsledkov.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#sluzby"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  <span>NAŠE SLUŽBY</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#o-nas"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors border border-border/40 rounded-xl hover:border-border/60"
                >
                  Zistiť viac
                </a>
              </div>

              <div className="mt-16 animate-bounce">
                <ChevronDown size={24} className="mx-auto text-foreground/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
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
        <section className="py-16 border-y border-border/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-mono mb-10">
              Dôverujú nám:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-28 h-10 rounded bg-foreground/5 flex items-center justify-center text-xs text-foreground/30 font-mono"
                >
                  Partner {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="relative py-28 md:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quote */}
            <div className="max-w-3xl mx-auto mb-20">
              <div className="glass-card-static p-10 md:p-14 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
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
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                Jadrom DNA spoločnosti Mercatores je B2B obchod. Pomáhame firmám rásť, získavať nových klientov a budovať silné obchodné oddelenia. Naše skúsenosti z terénu nám umožňujú prinášať reálne výsledky, nie len teóriu.
              </p>
              <p className="text-foreground/80 text-base leading-relaxed mb-10">
                Uvedomujeme si však, že obchod sa vyvíja. Preto do našich procesov aktívne zapájame umelú inteligenciu. AI nám neslúži ako náhrada za ľudský kontakt, ale ako silný nástroj na automatizáciu rutiny, presnejšie cielenie a analytiku, vďaka čomu predávame efektívnejšie.
              </p>
              <a href="#sluzby" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider">
                VIAC O NÁS
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative py-28 md:py-36 section-glow">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src={bgDashboard} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.15]" />
            <div className="absolute inset-0 bg-background/90" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-display text-section mb-16 text-center text-foreground">
              Prečo práve <span className="gradient-text-primary">my</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "Technologická expertíza",
                  desc: "Sme špecialisti na implementáciu AI riešení. Pomohli sme už desiatkam firiem zautomatizovať ich procesy a zaviesť moderné technológie do každodennej praxe.",
                },
                {
                  icon: Target,
                  title: "Neustála inovácia",
                  desc: "Sledujeme najnovšie trendy v oblasti umelej inteligencie a strojového učenia. Všetky nové poznatky okamžite testujeme a prinášame priamo do vašej firmy.",
                },
                {
                  icon: Settings,
                  title: "Hladká integrácia",
                  desc: "AI nevnímame ako izolovaný nástroj, ale ako súčasť celého ekosystému firmy. Zabezpečujeme plynulú integráciu s vašimi existujúcimi systémami a procesmi.",
                },
              ].map((item) => (
                <div key={item.title} className="gradient-border-card">
                  <div className="gradient-border-inner p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="relative py-28 md:py-36">
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="h-[1px] w-12 bg-primary/20 mb-5" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="relative py-28 md:py-36 section-glow">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-display text-section mb-16 text-center text-foreground">
              Výsledky našej <span className="gradient-text-primary">práce</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="glass-card-static p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono font-semibold">Certifikovaný partner</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Oficiálny partner OpenAI
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-8">
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
        <section id="faq" className="relative py-28 md:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-section mb-5 text-foreground">
                Na čo sa nás najčastejšie <span className="gradient-text-primary">pýtate</span>
              </h2>
              <p className="text-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
                Nenašli ste, čo ste hľadali? Je to úplne v poriadku. Vieme, že každá firma je iná, má svoje vlastné výzvy a ciele, ktoré sa nedajú zhrnúť do pár všeobecných odpovedí.
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
                    a: "Pri pilotných projektoch (napríklad nasadenie interného chatbota na znalostnú bázu) vidíte výsledky zvyčajne do 2 až 4 týždňov. Komplexnejšie automatizácie procesov trvajú 2 až 3 mesiace.",
                  },
                  {
                    q: "Potrebujeme vo firme vlastných IT špecialistov?",
                    a: "Nie. Dodávame riešenia na kľúč. Postaráme sa o vývoj, nasadenie, údržbu a taktiež zaškolíme vašich bežných zamestnancov, aby vedeli nástroje bez problémov používať.",
                  },
                  {
                    q: "Koľko takáto implementácia stojí?",
                    a: "Závisí to od rozsahu riešenia. Vždy ale začíname menším pilotným projektom, ktorý sa rýchlo zaplatí z ušetreného času a až následne škálujeme AI do ďalších oddelení.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card-static px-7 border-none data-[state=open]:glow-subtle transition-shadow duration-500"
                  >
                    <AccordionTrigger className="text-[0.9375rem] font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline gap-4 [&[data-state=open]]:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[0.9rem] text-foreground/85 pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center">
              <a href="#kontakt" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider">
                KONTAKTUJTE NÁS
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />
            <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card-static p-10 md:p-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
                  <Brain size={32} className="text-primary" />
                </div>
                <h2 className="font-display text-section mb-5 text-foreground">
                  Neviete, kde začať <span className="gradient-text-primary">s AI?</span>
                </h2>
                <p className="text-foreground/80 text-base leading-relaxed max-w-xl mx-auto mb-10">
                  Nechajte si spraviť bezplatný AI audit. Počas úvodnej konzultácie zistíme, aké procesy vo vašej firme sa dajú automatizovať a akú úsporu by vám to prinieslo.
                </p>
                <a
                  href="mailto:ai@mercatores.sk"
                  className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  AI AUDIT ZDARMA
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
