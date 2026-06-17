import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { trackFormSubmit } from "@/lib/analytics";

const REVENUE_OPTIONS = [
  "Do 5 000 € / mesiac",
  "5 000 – 20 000 € / mesiac",
  "20 000 – 50 000 € / mesiac",
  "50 000 – 150 000 € / mesiac",
  "Viac ako 150 000 € / mesiac",
];

const TEAM_OPTIONS = ["1 (len ja)", "2 – 5", "6 – 15", "16 – 50", "Viac ako 50"];

const fieldClass =
  "w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-[0.95rem] text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass = "mb-1.5 block text-[0.85rem] font-semibold text-foreground";

const DiagnosticForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSubmitting(true);

    // Odoslanie diagnostiky — napojenie na CRM/backend endpoint sa dopĺňa neskôr.
    trackFormSubmit("rastovy_audit", {
      revenue: data.revenue,
      team: data.team,
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Diagnostika odoslaná. Ozveme sa vám čo najskôr.");
    }, 400);
  };

  if (submitted) {
    return (
      <section id="kontakt" className="border-t border-border bg-[hsl(var(--surface))]">
        <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="mt-6 text-[1.6rem] font-extrabold tracking-tight text-foreground">Ďakujeme</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-muted-foreground">
            Diagnostiku sme prijali. Pozrieme sa na vašu firmu cez obchod, dopyt a procesy
            a ozveme sa vám s ďalším krokom.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="border-t border-border bg-[hsl(var(--surface))]">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Kontakt</span>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem]">
            Zisti, kde ti uniká rast
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            Vyplň krátku diagnostiku. Pozrieme sa na tvoju firmu cez obchod, dopyt a procesy.
            Následne ti povieme, ktorý problém má najvyššiu prioritu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Meno</label>
              <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Vaše meno" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>E-mail</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="vas@email.sk" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Telefón</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+421 …" />
            </div>
            <div>
              <label htmlFor="website" className={labelClass}>Web firmy</label>
              <input id="website" name="website" className={fieldClass} placeholder="https://…" />
            </div>
            <div>
              <label htmlFor="revenue" className={labelClass}>Mesačný obrat</label>
              <select id="revenue" name="revenue" defaultValue="" required className={fieldClass}>
                <option value="" disabled>Vyberte…</option>
                {REVENUE_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="team" className={labelClass}>Počet ľudí vo firme</label>
              <select id="team" name="team" defaultValue="" required className={fieldClass}>
                <option value="" disabled>Vyberte…</option>
                {TEAM_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="acquisition" className={labelClass}>Ako dnes získavate zákazníkov?</label>
            <textarea id="acquisition" name="acquisition" rows={3} className={fieldClass} placeholder="Odporúčania, reklama, studené oslovenie…" />
          </div>

          <div className="mt-5">
            <label htmlFor="blocker" className={labelClass}>Čo vás aktuálne najviac brzdí?</label>
            <textarea id="blocker" name="blocker" rows={3} className={fieldClass} placeholder="Stručne opíšte hlavnú prekážku" />
          </div>

          <button type="submit" disabled={submitting} className="btn-primary mt-7 w-full disabled:opacity-60">
            {submitting ? "Odosielam…" : "Odoslať diagnostiku"}
          </button>

          <p className="mt-4 text-[0.85rem] leading-relaxed text-muted-foreground">
            Odoslaním súhlasíš so spracovaním osobných údajov pre účely vyhodnotenia
            diagnostiky a spätného kontaktovania.
          </p>
        </form>
      </div>
    </section>
  );
};

export default DiagnosticForm;
