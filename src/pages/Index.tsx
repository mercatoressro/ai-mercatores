import {
  BarChart3,
  GitBranch,
  Users,
  Settings,
  Target,
  ArrowRight,
  CheckCircle2,
  Layers,
  LineChart,
  Bot,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import photoAi1 from "@/assets/photo-ai-1.png";
import photoAi2 from "@/assets/photo-ai-2.png";
import photoAi3 from "@/assets/photo-ai-3.png";
import photoAi4 from "@/assets/photo-ai-4.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        {/* ═══════ HERO ═══════ */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-[heroFadeUp_0.6s_ease-out]">
                <div className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-6">
                  Mercatores · AI & Growth Division
                </div>
                <h1 className="font-display text-hero mb-6 text-foreground">
                  Obchodný systém, AI nástroje a exekúcia v praxi.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
                  Pomáhame firmám rásť cez funkčný obchodný systém, nasadenie AI agentov do procesov a riadenie výkonu. Nie teória — implementácia, podpora a merateľné výsledky.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                  >
                    Dohodnúť konzultáciu
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#system"
                    className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                  >
                    Pozrieť riešenie
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end animate-[heroFadeUp_0.6s_ease-out_0.15s_both]">
                <div className="relative rounded-xl overflow-hidden max-w-[520px] w-full border border-border">
                  <img
                    src={photoAi1}
                    alt="Executive AI control room"
                    className="w-full h-auto object-cover"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ ČO RIEŠIME — Systém ═══════ */}
        <section id="system" className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-section mb-5 text-foreground">
                Čo dodávame
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Jeden ucelený systém — od obchodnej stratégie cez CRM a AI agentov až po reporting a riadenie výkonu. Nie katalóg služieb, ale funkčný celok.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Obchodný systém",
                  desc: "Pipeline, CRM, follow-up a štruktúra obchodu. Nastavíme proces, ktorý tím dokáže opakovať a škálovať.",
                },
                {
                  icon: Bot,
                  title: "AI agenti a automatizácie",
                  desc: "Nasadíme AI agentov na rutinnú prácu — kvalifikácia leadov, príprava ponúk, interná komunikácia, zákaznícka podpora.",
                },
                {
                  icon: LineChart,
                  title: "Reporting a riadenie výkonu",
                  desc: "Executive prehľad v reálnom čase. KPI, pipeline stav, konverzie a výkon tímu na jednom mieste.",
                },
                {
                  icon: Settings,
                  title: "Integrácia do existujúcich nástrojov",
                  desc: "Prepojenie s vašim CRM, e-mailom, kalendárom a internými systémami. Žiadne duplikovanie práce.",
                },
                {
                  icon: Users,
                  title: "Podpora tímu a onboarding",
                  desc: "Zaškolíme tím na nové nástroje a procesy. Dodáme dokumentáciu a priebežnú podporu.",
                },
                {
                  icon: Layers,
                  title: "AI CEO — rozhodovacia podpora",
                  desc: "Koncept executive reportingu: prioritizácia, kontrola pipeline, workflow prehľad a podpora rozhodovania pre vedenie firmy.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-7">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ AKO TO FUNGUJE ═══════ */}
        <section id="proces" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-section mb-5 text-foreground">
                Ako to funguje
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Štyri kroky od diagnostiky po riadený výkon. Každý krok má jasný výstup.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {[
                {
                  num: "01",
                  title: "Diagnostika",
                  desc: "Zmapujeme obchodné a prevádzkové procesy. Identifikujeme, kde vznikajú straty a kde má AI reálny prínos.",
                },
                {
                  num: "02",
                  title: "Návrh systému",
                  desc: "Navrhneme obchodný systém, AI workflow a integrácie. Definujeme KPI a merateľné výstupy.",
                },
                {
                  num: "03",
                  title: "Implementácia",
                  desc: "Nasadíme CRM, AI agentov a automatizácie. Prepojíme s existujúcimi nástrojmi a zaškolíme tím.",
                },
                {
                  num: "04",
                  title: "Správa a optimalizácia",
                  desc: "Priebežne sledujeme výkon, upravujeme logiku a optimalizujeme dopad. Dlhodobá podpora.",
                },
              ].map((step) => (
                <div key={step.num} className="glass-card-static p-7 relative">
                  <span className="text-[2rem] font-display font-bold text-primary/10 absolute top-5 right-6">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground mb-2 mt-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ PREČO MERCATORES ═══════ */}
        <section className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-section mb-6 text-foreground">
                  Prečo Mercatores
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  Nie sme AI agentúra. Sme obchodníci, ktorí rozumejú procesom, riadeniu a implementácii. AI je nástroj výkonu — nie marketingová ozdoba.
                </p>
                <ul className="space-y-4">
                  {[
                    "Dlhoročné skúsenosti v B2B obchode a riadení tímov",
                    "Vlastná metodika nasadenia AI do obchodných procesov",
                    "Dodávame systém, nie izolované nástroje",
                    "Dlhodobá podpora a priebežná optimalizácia",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src={photoAi2} alt="Obchodný tím" className="rounded-lg w-full h-44 object-cover border border-border" />
                <img src={photoAi3} alt="AI implementácia" className="rounded-lg w-full h-44 object-cover border border-border mt-6" />
                <img src={photoAi4} alt="Riadenie výkonu" className="rounded-lg w-full h-44 object-cover border border-border" />
                <div className="rounded-lg w-full h-44 bg-primary/5 border border-border flex items-center justify-center mt-6 p-6">
                  <div className="text-center">
                    <BarChart3 size={28} className="text-primary mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground font-medium">Merateľný dopad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ PRE KOHO ═══════ */}
        <section id="pre-koho" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-section mb-5 text-foreground">
                Pre koho je to
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Spolupracujeme s firmami, ktoré chcú riadený rast — nie experimenty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                {
                  icon: GitBranch,
                  title: "Firmy bez funkčného obchodného systému",
                  desc: "Máte obchodníkov, ale chýba pipeline, follow-up a reporting. Výkon nie je riadený, ale náhodný.",
                },
                {
                  icon: Settings,
                  title: "Firmy, ktoré chcú nasadiť AI do procesov",
                  desc: "Viete, že AI môže pomôcť, ale neviete kde začať. Potrebujete partnera na implementáciu, nie prezentáciu.",
                },
                {
                  icon: BarChart3,
                  title: "Vedenie, ktoré chce kontrolu nad výkonom",
                  desc: "Chcete executive prehľad, funkčné KPI a rozhodovaciu podporu — nie ďalšie tabuľky v Exceli.",
                },
                {
                  icon: Users,
                  title: "Tímy, ktoré strácajú čas na rutine",
                  desc: "Opakujúce sa úlohy, manuálne procesy a neefektívna komunikácia. AI agenti to vyriešia.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-7">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ FAQ ═══════ */}
        <section id="faq" className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-section mb-5 text-foreground">
                Časté otázky
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-2">
                {[
                  {
                    q: "Čo presne dostaneme?",
                    a: "Funkčný obchodný systém prispôsobený vašej firme — CRM nastavenie, AI agentov, automatizácie, reporting a dlhodobú podporu. Rozsah závisí od diagnostiky.",
                  },
                  {
                    q: "Nahradí AI našich ľudí?",
                    a: "Nie. AI preberá rutinnú prácu — kvalifikáciu, prípravu podkladov, follow-up. Ľudia sa vďaka tomu sústredia na uzatváranie obchodov a strategické rozhodnutia.",
                  },
                  {
                    q: "Ako rýchlo uvidíme výsledky?",
                    a: "Prvé nasadenia sú funkčné do 2–4 týždňov. Komplexnejšie systémy do 2–3 mesiacov. Vždy začíname tým, čo prinesie najrýchlejší dopad.",
                  },
                  {
                    q: "Potrebujeme vlastných IT ľudí?",
                    a: "Nie. Dodávame riešenie na kľúč — návrh, implementáciu, zaškolenie aj priebežnú správu.",
                  },
                  {
                    q: "Čo je AI CEO?",
                    a: "Koncept executive reportingu a rozhodovacej podpory. Automatizovaný prehľad pipeline, priorít, workflow stavu a KPI pre vedenie firmy. Nie náhrada človeka — nástroj pre rýchlejšie a presnejšie rozhodnutia.",
                  },
                  {
                    q: "Ako začať spoluprácu?",
                    a: "Úvodná konzultácia je bezplatná. Zmapujeme vaše procesy, identifikujeme príležitosti a navrhneme konkrétny plán s merateľným výstupom.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card-static px-6 border-none"
                  >
                    <AccordionTrigger className="text-[0.9375rem] font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline gap-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ═══════ CTA ═══════ */}
        <section id="kontakt" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-section mb-5 text-foreground">
                Zistite, kde vašej firme uniká výkon
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl mx-auto">
                Počas úvodnej konzultácie zmapujeme vaše obchodné a prevádzkové procesy a identifikujeme konkrétne miesta, kde systém a AI prinesú najväčší efekt.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:ai@mercatores.sk"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm"
                >
                  Dohodnúť konzultáciu
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+421905600095"
                  className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-sm"
                >
                  +421 905 600 095
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Úvodná konzultácia je bezplatná a nezáväzná.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;