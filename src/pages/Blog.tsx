import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganicNetwork from "@/components/OrganicNetwork";

const articles = [
  {
    title: "AI v gastro prevádzke: ako reštaurácie a hotely zvyšujú výkon bez ďalšieho personálu",
    description:
      "Úzke marže, fluktuácia personálu a výkyvy návštevnosti. AI prináša iný prístup než ďalšieho zamestnanca — automatizáciu opakovaných úloh a lepšie rozhodovanie v reálnom čase.",
    url: "https://www.mercatores.sk/ai-v-gastro-prevadzke-ako-restauracie-a-hotely-zvysuju-vykon-bez-dalsieho-personalum/",
  },
  {
    title: "Go High Level: ako automatizovať B2B obchod a marketing na Slovensku",
    description:
      "Väčšina B2B firiem používa 5–8 nástrojov, ktoré spolu nekomunikujú. Ako Go High Level zjednocuje CRM, emaily, landing pages a automatizácie do jednej platformy.",
    url: "https://www.mercatores.sk/ako-automatizovat-b2b-obchod-marketing-go-high-level-slovensko/",
  },
  {
    title: "AI v B2B obchode: ako transformovať predaj pomocou umelej inteligencie",
    description:
      "AI v obchode nie je budúcnosť, ale prítomnosť. Firmy ktoré AI nasadili včas, majú dnes merateľnú výhodu. Praktický pohľad na to, kde AI v B2B predaji reálne funguje.",
    url: "https://www.mercatores.sk/transformacia-predaja-ai-v-obchode-b2b/",
  },
  {
    title: "Čo je sales outsourcing a kedy sa oplatí?",
    description:
      "Hľadáte obchodníka mesiace bez výsledku? Alebo máte obchodníka s podpriemernými výsledkami? Kedy je sales outsourcing riešenie a kedy nie — porovnanie nákladov a rizík.",
    url: "https://www.mercatores.sk/co-je-sales-outsourcing-a-kedy-sa-oplati/",
  },
  {
    title: "Inovatívne využitie open-source dát v predaji a marketingu",
    description:
      "Dáta sú hnacou silou B2B stratégií, ale bez pochopenia výhod ich integrácie ich hodnota uniká. Úvod do toho, ako open-source dáta optimalizujú predaj a marketing.",
    url: "https://www.mercatores.sk/inovativne-vyuzitie-open-source-dat-v-predaji-a-marketingu/",
  },
  {
    title: "Go High Level: automatizácia obchodu na Slovensku",
    description:
      "All-in-one platforma pre CRM, email marketing, AI agenta a automatizácie. Kedy sa oplatí pre B2B firmy a aké sú alternatívy na slovenskom trhu.",
    url: "https://www.mercatores.sk/go-high-level-automatizacia-obchodu-slovensko/",
  },
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
