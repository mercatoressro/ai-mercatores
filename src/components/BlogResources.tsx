import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Čo je sales outsourcing a kedy sa oplatí?",
    description:
      "Porovnanie nákladov, výhody a nevýhody, kedy outsourcing funguje a kedy nie. Praktický sprievodca pre B2B firmy.",
    url: "https://www.mercatores.sk/co-je-sales-outsourcing-a-kedy-sa-oplati/",
  },
  {
    title: "AI v B2B obchode: ako transformovať predaj",
    description:
      "Kde konkrétne AI v obchode funguje, ktoré nástroje použiť a ako začať bez veľkých investícií.",
    url: "https://www.mercatores.sk/ai-v-b2b-obchode-transformacia-predaja/",
  },
  {
    title: "Go High Level: automatizácia obchodu na Slovensku",
    description:
      "All-in-one platforma pre CRM, email marketing, AI agenta a automatizácie. Kedy sa oplatí pre B2B firmy.",
    url: "https://www.mercatores.sk/go-high-level-automatizacia-obchodu-slovensko/",
  },
];

const BlogResources = () => {
  return (
    <section
      id="blog-resources"
      className="relative py-24 md:py-32 px-4"
      aria-labelledby="blog-resources-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog & Resources</span>
          </div>
          <h2
            id="blog-resources-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Užitočné články a zdroje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
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
  );
};

export default BlogResources;
