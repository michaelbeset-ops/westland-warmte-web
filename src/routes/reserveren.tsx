import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { Check } from "lucide-react";

export const Route = createFileRoute("/reserveren")({
  head: () => ({
    meta: [
      { title: "Reserveren — Lunchroom Rosi Monster" },
      { name: "description", content: "Reserveer eenvoudig een tafel bij Lunchroom Rosi in Monster. Voor lunch, koffie of een gezellige middag met taart." },
      { property: "og:title", content: "Reserveren — Lunchroom Rosi" },
      { property: "og:description", content: "Reserveer een tafel bij Rosi in Monster." },
      { property: "og:url", content: "/reserveren" },
    ],
    links: [{ rel: "canonical", href: "/reserveren" }],
  }),
  component: ReserverenPage,
});

const today = new Date().toISOString().split("T")[0];

function ReserverenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const date = String(f.get("date") || "");
    const time = String(f.get("time") || "");
    const guests = String(f.get("guests") || "");

    if (!name || name.length > 100) errs.name = "Vul je naam in (max. 100 tekens).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) errs.email = "Geldig e-mailadres graag.";
    if (!phone || phone.length > 30) errs.phone = "Vul een telefoonnummer in.";
    if (!date) errs.date = "Kies een datum.";
    if (!time) errs.time = "Kies een tijd.";
    if (!guests) errs.guests = "Met hoeveel personen?";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    // Mailto fallback — geen third-party widget
    const note = String(f.get("note") || "").slice(0, 500);
    const body = encodeURIComponent(
      `Naam: ${name}\nE-mail: ${email}\nTelefoon: ${phone}\nDatum: ${date}\nTijd: ${time}\nPersonen: ${guests}\nOpmerking: ${note}`
    );
    const subject = encodeURIComponent(`Reservering ${name} — ${date} ${time}`);
    window.location.href = `mailto:hallo@lunchroomrosi.nl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Reserveren</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground sm:text-6xl">
          Een tafeltje <span className="italic text-primary">voor jou</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Vul het formulier in en wij sturen je per mail of telefoon een
          bevestiging — meestal binnen een paar uur.
        </p>
        <WaveDivider className="mt-8 mx-auto max-w-[160px]" />
      </section>

      <section className="container-prose pb-20">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-[28px] bg-card p-8 sm:p-10 shadow-[0_18px_50px_-30px_rgba(60,55,30,0.35)]">
            {submitted ? (
              <div className="text-center py-10">
                <span className="inline-grid place-items-center rounded-full bg-primary/10 p-4 text-primary">
                  <Check className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-serif text-3xl text-foreground">Bedankt!</h2>
                <p className="mt-3 text-muted-foreground">
                  Je e-mailprogramma opent met de reservering. Verstuur de mail
                  even, dan zien we elkaar snel.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <Field label="Naam" id="name" error={errors.name}>
                  <input id="name" name="name" type="text" maxLength={100} required className={inputCls} />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="E-mail" id="email" error={errors.email}>
                    <input id="email" name="email" type="email" maxLength={255} required className={inputCls} />
                  </Field>
                  <Field label="Telefoon" id="phone" error={errors.phone}>
                    <input id="phone" name="phone" type="tel" maxLength={30} required className={inputCls} />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Datum" id="date" error={errors.date}>
                    <input id="date" name="date" type="date" min={today} required className={inputCls} />
                  </Field>
                  <Field label="Tijd" id="time" error={errors.time}>
                    <input id="time" name="time" type="time" min="08:30" max="16:30" required className={inputCls} />
                  </Field>
                  <Field label="Personen" id="guests" error={errors.guests}>
                    <select id="guests" name="guests" required className={inputCls} defaultValue="">
                      <option value="" disabled>Kies…</option>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                      <option value="10+">10+</option>
                    </select>
                  </Field>
                </div>

                <Field label="Opmerking (optioneel)" id="note">
                  <textarea id="note" name="note" rows={4} maxLength={500} className={`${inputCls} resize-none`} placeholder="Allergie, kinderstoel, gelegenheid…" />
                </Field>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Geen bevestiging? Bel ons gerust op <a className="text-primary hover:underline" href="tel:+31174123456">0174 – 12 34 56</a>.
                  </p>
                  <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors">
                    Verstuur reservering
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-[color:var(--terracotta)]">{error}</p>}
    </div>
  );
}
