import { motion } from "framer-motion";
import { TrendingDown, Target, Settings } from "lucide-react";

const cards = [
  {
    title: "Obchod",
    icon: TrendingDown,
    color: "primary",
    items: [
      "Leady sa strácajú",
      "Follow-up je slabý",
      "Obchod nie je riadený systémovo",
      "Chýba prioritizácia a konzistencia",
    ],
  },
  {
    title: "Marketing",
    icon: Target,
    color: "secondary",
    items: [
      "Kampane neprinášajú obchodný efekt",
      "Slabá personalizácia",
      "Pomalá exekúcia",
      "Marketing nie je prepojený s predajom",
    ],
  },
  {
    title: "Operatíva",
    icon: Settings,
    color: "accent",
    items: [
      "Veľa ručnej práce",
      "Chaos medzi tímami",
      "Oneskorené reakcie",
      "Slabý reporting a workflow",
    ],
  },
];

const PainPoints = () => {
  return (
    <section className="relative py-24 md:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kde firmy <span className="gradient-text">strácajú výkon</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tri oblasti, kde bez systému a AI vzniká najväčší chaos a straty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative glass-card p-6 hover:bg-muted/20 transition-all duration-500"
            >
              <div className="glow-border rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center ${
                  card.color === "primary" ? "bg-primary/10" : card.color === "secondary" ? "bg-secondary/10" : "bg-accent/10"
                }`}>
                  <card.icon size={22} className={
                    card.color === "primary" ? "text-primary" : card.color === "secondary" ? "text-secondary" : "text-accent"
                  } />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
