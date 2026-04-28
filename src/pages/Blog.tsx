import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganicNetwork from "@/components/OrganicNetwork";

type Topic = "AI v obchode" | "Sales outsourcing" | "Automatizácia" | "Gastro & HoReCa" | "Prípadové štúdie" | "Dáta & analytika";

const articles: {
  title: string;
  description: string;
  url: string;
  topics: Topic[];
}[] = [
  {
    title: "Ako sme implementovali AI do obchodného procesu Magnaseal — prípadová štúdia",
    description:
      "Špecializovaný B2B produkt, fragmentovaný trh a takmer nulová znalosť na Slovensku. Ako sme pomocou AI postavili obchodný proces pre distribútora magnetických záplat Magnaseal.",
    url: "https://www.mercatores.sk/ako-sme-implementovali-ai-do-obchodneho-procesu-magnaseal-pripadova-studia/",
    topics: ["Prípadové štúdie", "AI v obchode"],
  },
  {
    title: "Na slovenský gastro trh vstupuje nový hráč: AI riadená prevádzka namiesto ďalšieho POS systému",
    description:
      "Slovenský gastro trh pozná desiatky POS systémov a QR menu nástrojov. AI riadená prevádzka prináša namiesto ďalšieho zoznamu funkcií skutočnú zmenu v každodennom chode reštaurácie.",
    url: "https://www.mercatores.sk/ai-gastro-system-slovensko/",
    topics: ["Gastro & HoReCa", "AI v obchode"],
  },
  {
    title: "AI v gastro prevádzke: ako reštaurácie a hotely zvyšujú výkon bez ďalšieho personálu",
    description:
      "Úzke marže, fluktuácia personálu a výkyvy návštevnosti. AI prináša iný prístup než ďalšieho zamestnanca — automatizáciu opakovaných úloh a lepšie rozhodovanie v reálnom čase.",
    url: "https://www.mercatores.sk/ai-v-gastro-prevadzke-ako-restauracie-a-hotely-zvysuju-vykon-bez-dalsieho-personalum/",
    topics: ["Gastro & HoReCa", "Automatizácia"],
  },
  {
    title: "Go High Level: ako automatizovať B2B obchod a marketing na Slovensku",
    description:
      "Väčšina B2B firiem používa 5–8 nástrojov, ktoré spolu nekomunikujú. Ako Go High Level zjednocuje CRM, emaily, landing pages a automatizácie do jednej platformy.",
    url: "https://www.mercatores.sk/ako-automatizovat-b2b-obchod-marketing-go-high-level-slovensko/",
    topics: ["Automatizácia", "AI v obchode"],
  },
  {
    title: "AI v B2B obchode: ako transformovať predaj pomocou umelej inteligencie",
    description:
      "AI v obchode nie je budúcnosť, ale prítomnosť. Firmy ktoré AI nasadili včas, majú dnes merateľnú výhodu. Praktický pohľad na to, kde AI v B2B predaji reálne funguje.",
    url: "https://www.mercatores.sk/transformacia-predaja-ai-v-obchode-b2b/",
    topics: ["AI v obchode"],
  },
  {
    title: "Čo je sales outsourcing a kedy sa oplatí?",
    description:
      "Hľadáte obchodníka mesiace bez výsledku? Alebo máte obchodníka s podpriemernými výsledkami? Kedy je sales outsourcing riešenie a kedy nie — porovnanie nákladov a rizík.",
    url: "https://www.mercatores.sk/co-je-sales-outsourcing-a-kedy-sa-oplati/",
    topics: ["Sales outsourcing"],
  },
  {
    title: "Inovatívne využitie open-source dát v predaji a marketingu",
    description:
      "Dáta sú hnacou silou B2B stratégií, ale bez pochopenia výhod ich integrácie ich hodnota uniká. Úvod do toho, ako open-source dáta optimalizujú predaj a marketing.",
    url: "https://www.mercatores.sk/inovativne-vyuzitie-open-source-dat-v-predaji-a-marketingu/",
    topics: ["Dáta & analytika", "AI v obchode"],
  },
  {
    title: "Go High Level: automatizácia obchodu na Slovensku",
    description:
      "All-in-one platforma pre CRM, email marketing, AI agenta a automatizácie. Kedy sa oplatí pre B2B firmy a aké sú alternatívy na slovenskom trhu.",
    url: "https://www.mercatores.sk/go-high-level-automatizacia-obchodu-slovensko/",
    topics: ["Automatizácia"],
  },
];

const relatedTopics: { name: Topic; description: string }[] = [
  { name: "AI v obchode", description: "Praktické nasadenie AI v B2B predaji a kvalifikácii leadov." },
  { name: "Sales outsourcing", description: "Kedy externý obchodný tím dáva zmysel a kedy nie." },
  { name: "Automatizácia", description: "CRM, kampane a procesy bez manuálnej rutiny." },
  { name: "Gastro & HoReCa", description: "AI riešenia pre reštaurácie, hotely a prevádzky." },
  { name: "Prípadové štúdie", description: "Reálne implementácie s merateľnými výsledkami." },
  { name: "Dáta & analytika", description: "Open-source dáta a analytika pre rast obchodu." },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog & Resources | ai.mercatores.sk";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Praktické články o B2B predaji, AI v obchode, sales outsourcingu a automatizácii pre slovenské firmy."
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <OrganicNetwork opacity={1} fadeCenterX={0.5} fadeCenterY={0.5} />
      </div>

      <div className="relative z-[1]">
        <Header />
        <main>
          <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-4">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Späť na domovskú stránku
              </Link>

              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Blog & Resources</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Užitočné články a zdroje
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Praktické know-how pre B2B firmy, ktoré chcú rásť pomocou AI a moderného obchodu.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {articles.map((article) => (
                  <article
                    key={article.url}
                    className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        {article.description}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium group/link self-start"
                        aria-label={`Čítať viac: ${article.title}`}
                      >
                        <span className="relative">
                          Čítať viac
                          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
