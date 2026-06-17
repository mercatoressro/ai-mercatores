import { TrendingUp, Repeat, Database, Package, Users, Coins, type LucideIcon } from "lucide-react";

type Block = {
  icon: LucideIcon;
  title: string;
  question: string;
  tag: "Dôležitosť" | "Dopad" | "Riziko";
};

const BLOCKS: Block[] = [
  {
    icon: TrendingUp,
    title: "Dopyt",
    question: "Odkiaľ prichádzajú nové obchodné príležitosti a ako pravidelne?",
    tag: "Dopad",
  },
  {
    icon: Repeat,
    title: "Predaj",
    question: "Má firma opakovateľný obchodný proces alebo každý obchod vzniká inak?",
    tag: "Dôležitosť",
  },
  {
    icon: Database,
    title: "CRM a pipeline",
    question: "Vieš presne, koľko máš leadov, stretnutí, ponúk, follow-upov a prehier?",
    tag: "Riziko",
  },
  {
    icon: Package,
    title: "Ponuka",
    question: "Je služba jasne pomenovaná, nacenená a pochopiteľná pre správny segment?",
    tag: "Dopad",
  },
  {
    icon: Users,
    title: "Procesy a ľudia",
    question: "Čo stále závisí od majiteľa a čo sa dá delegovať alebo systémovo nastaviť?",
    tag: "Riziko",
  },
  {
    icon: Coins,
    title: "Financie a priorita",
    question: "Ktorý problém má najvyšší dopad na cashflow, maržu alebo rast?",
    tag: "Dopad",
  },
];

const AuditScopeSection = () => {
  return (
    <section id="audit" className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Audit</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Kde hľadáme úniky rastu
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map(({ icon: Icon, title, question, tag }) => (
            <div key={title} className="flex flex-col bg-white p-7">
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="mt-4 text-[1.15rem] font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-muted-foreground">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditScopeSection;
