import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganicNetwork from "@/components/OrganicNetwork";
import { useT, useLanguage } from "@/i18n/LanguageContext";

const URLS = [
  "https://www.mercatores.sk/ako-sme-implementovali-ai-do-obchodneho-procesu-magnaseal-pripadova-studia/",
  "https://www.mercatores.sk/ai-gastro-system-slovensko/",
  "https://www.mercatores.sk/ai-v-gastro-prevadzke-ako-restauracie-a-hotely-zvysuju-vykon-bez-dalsieho-personalum/",
  "https://www.mercatores.sk/ako-automatizovat-b2b-obchod-marketing-go-high-level-slovensko/",
  "https://www.mercatores.sk/transformacia-predaja-ai-v-obchode-b2b/",
  "https://www.mercatores.sk/co-je-sales-outsourcing-a-kedy-sa-oplati/",
  "https://www.mercatores.sk/inovativne-vyuzitie-open-source-dat-v-predaji-a-marketingu/",
  "https://www.mercatores.sk/go-high-level-automatizacia-obchodu-slovensko/",
];

// Topic keys per article (indices align with URLS / t.blog.articles)
type TopicKey = "ai" | "outsourcing" | "automation" | "gastro" | "cases" | "data";
const ARTICLE_TOPICS: TopicKey[][] = [
  ["cases", "ai"],
  ["gastro", "ai"],
  ["gastro", "automation"],
  ["automation", "ai"],
  ["ai"],
  ["outsourcing"],
  ["data", "ai"],
  ["automation"],
];

const TOPIC_KEYS: TopicKey[] = ["ai", "outsourcing", "automation", "gastro", "cases", "data"];

const Blog = () => {
  const t = useT();
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = t.blog.docTitle;
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute("content", t.blog.docDesc);
    if (!meta.parentElement) document.head.appendChild(meta);
  }, [t]);

  const pluralize = (n: number) => {
    if (lang === "en") return n === 1 ? t.blog.articleOne : t.blog.articleFew;
    if (n === 1) return t.blog.articleOne;
    if (n < 5) return t.blog.articleFew;
    return t.blog.articleMany;
  };

  const articles = t.blog.articles.map((a, i) => ({
    title: a.title,
    description: a.description,
    url: URLS[i],
    topics: ARTICLE_TOPICS[i],
  }));

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
                {t.blog.back}
              </Link>

              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{t.blog.pageBadge}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {t.blog.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {t.blog.sub}
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
                        {article.topics.map((tk) => (
                          <span
                            key={tk}
                            className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {t.blog.topics[tk].name}
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
                        aria-label={`${t.blog.readMoreAria} ${article.title}`}
                      >
                        <span className="relative">
                          {t.blog.readMore}
                          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <section aria-labelledby="related-topics" className="mt-24 md:mt-32">
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{t.blog.relatedBadge}</span>
                  </div>
                  <h2
                    id="related-topics"
                    className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
                  >
                    {t.blog.relatedTitle}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {t.blog.relatedSub}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {TOPIC_KEYS.map((tk) => {
                    const topic = t.blog.topics[tk];
                    const matches = articles.filter((a) => a.topics.includes(tk));
                    return (
                      <a
                        key={tk}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const first = matches[0];
                          if (first) window.open(first.url, "_blank", "noopener,noreferrer");
                        }}
                        className="group relative flex flex-col rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/70 hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {topic.name}
                          </h3>
                          <span className="text-xs font-medium text-muted-foreground px-2 py-0.5 rounded-full border border-border/60">
                            {matches.length} {pluralize(matches.length)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {topic.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                          {t.blog.readLatest}
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </section>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
