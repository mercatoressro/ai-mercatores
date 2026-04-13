import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  GitBranch,
  Users,
  Settings,
  Target,
  Bot,
  LineChart,
  Layers,
  Search,
  Rocket,
  TrendingUp,
  Shield,
  Eye,
  ListChecks,
  Workflow,
  BrainCircuit,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import aiBrainNetwork from "@/assets/ai-brain-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        {/* ═══════════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════════ */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          {/* AI Brain Network Background */}
          <div className="absolute inset-0 z-0">
            <img src={aiBrainNetwork} alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
          </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-[heroFadeUp_0.6s_ease-out]">
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-5">
                  Obchodná architektúra Mercatores · AI vrstva pre výkon a riadenie
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mb-5 text-foreground leading-[1.12]">
                  Pomáhame firmám rásť cez AI&nbsp;nástroje a&nbsp;obchodný systém.
                </h1>

                <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-xl mb-8">
                  Navrhneme obchodný model, nasadíme AI do procesov a pomôžeme vám to reálne zaviesť do praxe. Stratégia, implementácia, riadenie výkonu.
                </p>

                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href="#kontakt"
                    className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                  >
                    Dohodnúť konzultáciu
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#riesenie"
                    className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                  >
                    Pozrieť riešenie
                  </a>
                </div>

                <p className="text-xs text-muted-foreground">
                  Pre firmy, ktoré nechcú ďalší tool. Chcú systém, ktorý funguje.
                </p>
              </div>

              <div className="relative flex justify-center lg:justify-end animate-[heroFadeUp_0.6s_ease-out_0.15s_both]">
                <div className="relative rounded-xl overflow-hidden max-w-[560px] w-full shadow-2xl shadow-primary/5 border border-border">
                  <img
                    src={heroDashboard}
                    alt="Executive AI dashboard — pipeline, CRM, workflow, reporting"
                    className="w-full h-auto object-cover"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            2. KDE FIRMY STRÁCAJÚ RAST
        ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-5 text-foreground">
                Problém nie je, že firmám chýba AI.<br className="hidden sm:block" />
                Problém je, že im chýba systém.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
                Väčšina firiem dnes skúša nástroje, automatizácie a AI bez toho, aby mala zvládnutý obchodný proces, ownership, reporting a spôsob riadenia. Výsledkom je viac chaosu, nie viac výkonu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Bez systému */}
              <div className="glass-card-static p-7">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle size={18} className="text-destructive" />
                  <span className="text-sm font-semibold text-foreground">Bez systému</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Chaos v obchode",
                    "Slabý follow-up",
                    "Nejasné priority",
                    "CEO preťažený operatívou",
                    "AI bez dopadu",
                    "CRM bez disciplíny",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <XCircle size={14} className="text-destructive/60 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* S naším riešením */}
              <div className="glass-card-static p-7 border-primary/20">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">S naším riešením</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Jasný obchodný model",
                    "AI podpora pre výkon",
                    "Lepšie riadenie firmy",
                    "Menej manuálnej práce",
                    "Viac kontroly",
                    "Vyššia výkonnosť tímu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3. ČO KLIENTOM REÁLNE DODÁVAME
        ═══════════════════════════════════════════ */}
        <section id="riesenie" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
                Jedno riešenie. Tri vrstvy výkonu.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Nie tooly. Nie teória. Reálne nasadenie do fungovania firmy.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Pilier 1 */}
              <div className="glass-card p-7">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                  <Target size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Obchodný systém</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-4">Pilier 1</p>
                <ul className="space-y-2.5">
                  {[
                    "Návrh obchodného procesu",
                    "ICP a segmentácia",
                    "CRM a reporting",
                    "Sales playbook",
                    "Obchodná stratégia",
                    "Školenie tímu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pilier 2 */}
              <div className="glass-card p-7">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                  <Bot size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">AI nástroje a agenti</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-4">Pilier 2</p>
                <ul className="space-y-2.5">
                  {[
                    "AI pre obchod",
                    "AI pre marketing",
                    "AI pre operatívu",
                    "AI workflow a automatizácie",
                    "AI knowledge layer",
                    "AI follow-up a kvalifikácia leadov",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pilier 3 */}
              <div className="glass-card p-7">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                  <Rocket size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Exekúcia a riadenie</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-4">Pilier 3</p>
                <ul className="space-y-2.5">
                  {[
                    "Zavedenie do praxe",
                    "Podpora tímu",
                    "Operatívna pomoc",
                    "Kontrola výkonu",
                    "Optimalizácia podľa dát",
                    "Model AI CEO pre riadenie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            4. AI CEO
        ═══════════════════════════════════════════ */}
        <section id="ai-ceo" className="py-20 md:py-28 section-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-5 text-white">
                AI CEO nie je náhrada vedenia.<br className="hidden sm:block" />
                Je to riadiaca vrstva pre lepšie rozhodovanie.
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(230 15% 65%)" }}>
                Firmám pomáhame navrhnúť koncept AI CEO ako manažérsku vrstvu, ktorá prepája dáta, reporting, priority, obchod, operatívu a interné workflow. Cieľom nie je nahradiť človeka vo vedení. Cieľom je dať CEO a manažmentu lepší prehľad, rýchlejšie rozhodovanie a vyššiu kontrolu.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { icon: LineChart, title: "Reporting a executive prehľad" },
                { icon: GitBranch, title: "Kontrola pipeline a výkonu" },
                { icon: ListChecks, title: "Prioritizácia úloh a workflow" },
                { icon: Eye, title: "Dohľad nad operatívou" },
                { icon: BrainCircuit, title: "Rozhodovacia podpora pre manažment" },
              ].map((item) => (
                <div key={item.title} className="dark-card p-5 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mx-auto mb-3">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            5. AKO TO FUNGUJE
        ═══════════════════════════════════════════ */}
        <section id="proces" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
                Od chaosu k systému v 4 krokoch
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {[
                {
                  num: "01",
                  title: "Diagnostika",
                  desc: "Zmapujeme obchod, procesy, operatívu a miesta, kde dnes firma stráca výkon.",
                  icon: Search,
                },
                {
                  num: "02",
                  title: "Návrh riešenia",
                  desc: "Navrhneme obchodný model, AI vrstvu a spôsob riadenia podľa reality firmy.",
                  icon: Layers,
                },
                {
                  num: "03",
                  title: "Implementácia",
                  desc: "Zavedieme workflow, AI nástroje, reporting, obchodné pravidlá a interné procesy.",
                  icon: Settings,
                },
                {
                  num: "04",
                  title: "Exekúcia a optimalizácia",
                  desc: "Pomáhame firme reálne fungovať, merať výkon a ďalej systém zlepšovať.",
                  icon: TrendingUp,
                },
              ].map((step) => (
                <div key={step.num} className="glass-card-static p-7 relative">
                  <span className="text-[2.5rem] font-display font-bold text-primary/8 absolute top-4 right-5 leading-none">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                    <step.icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            6. PRE KOHO TO JE
        ═══════════════════════════════════════════ */}
        <section id="pre-koho" className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
                Pre firmy, ktoré chcú rásť riadene, nie náhodou
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* ÁNO */}
              <div className="glass-card-static p-7 border-primary/15">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">Áno — spolupráca dáva zmysel</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "B2B firmy s obchodným tímom",
                    "Majitelia a CEO, ktorí chcú systém",
                    "Firmy, ktoré chcú zaviesť AI prakticky",
                    "Firmy, ktoré chcú viac výkonu a menej chaosu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NIE */}
              <div className="glass-card-static p-7">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle size={18} className="text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">Nie — nebudeme dobrý fit</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Hľadáte len efektný chatbot",
                    "Nechcete meniť procesy",
                    "Čakáte instantný výsledok bez implementácie",
                    "Hľadáte lacný software bez podpory",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <XCircle size={14} className="text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            7. VÝSLEDOK PRE KLIENTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
                Čo klient v skutočnosti získa
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, label: "Viac obchodných príležitostí" },
                { icon: GitBranch, label: "Lepší follow-up" },
                { icon: BarChart3, label: "Lepšie využité CRM" },
                { icon: Settings, label: "Menej manuálnej operatívy" },
                { icon: Eye, label: "Vyššia kontrola nad výkonom" },
                { icon: Users, label: "Jasnejšie riadenie tímu" },
                { icon: Bot, label: "AI s reálnym dopadom" },
                { icon: Shield, label: "Systém, ktorý nestojí na jednom človeku" },
              ].map((item) => (
                <div key={item.label} className="glass-card-static p-5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium leading-snug pt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            8. PREČO MERCATORES + AI
        ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 section-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
                Prečo to dáva zmysel práve u nás
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Rozumieme obchodu aj riadeniu firmy",
                "AI nevnímame ako hračku, ale ako vrstvu výkonu",
                "Vieme navrhnúť aj zaviesť",
                "Spájame stratégiu, systém a exekúciu",
                "Klient nedostane len návrh, ale aj pomoc s realizáciou",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-[0.95rem] text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ (bonus — keeps credibility)
        ═══════════════════════════════════════════ */}
        <section id="faq" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-section mb-4 text-foreground">
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

        {/* ═══════════════════════════════════════════
            9. ZÁVEREČNÝ CTA
        ═══════════════════════════════════════════ */}
        <section id="kontakt" className="py-20 md:py-28 section-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-section mb-5 text-white">
                Keď obchod, AI a riadenie fungujú spolu, firma rastie inak.
              </h2>
              <p className="text-[0.95rem] leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "hsl(230 15% 65%)" }}>
                Ak chcete mať vo firme menej chaosu, viac kontroly a systém, ktorý podporuje rast, poďme sa pozrieť, kde vám dnes uniká výkon.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
                <a
                  href="mailto:ai@mercatores.sk"
                  className="btn-primary-dark inline-flex items-center gap-2 px-8 py-4 text-sm"
                >
                  Dohodnúť strategickú konzultáciu
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+421905600095"
                  className="btn-outline-dark inline-flex items-center gap-2 px-8 py-4 text-sm"
                >
                  +421 905 600 095
                </a>
              </div>
              <p className="text-xs" style={{ color: "hsl(230 15% 50%)" }}>
                Bez nezáväzného hype callu. Konkrétne, prakticky a podľa reality vašej firmy.
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