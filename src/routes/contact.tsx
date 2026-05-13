import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lunchroom Rosi Monster" },
      { name: "description", content: "Adres, openingstijden, telefoonnummer en route naar Lunchroom Rosi aan de Choorstraat in Monster." },
      { property: "og:title", content: "Contact — Lunchroom Rosi" },
      { property: "og:description", content: "Vind Rosi in Monster: adres, openingstijden en route." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim().slice(0, 100);
    const email = String(f.get("email") || "").trim().slice(0, 255);
    const message = String(f.get("message") || "").trim().slice(0, 1000);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) return;
    const body = encodeURIComponent(`Van: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:hallo@lunchroomrosi.nl?subject=${encodeURIComponent("Bericht via website")}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Contact</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground sm:text-6xl">
          Loop <span className="italic text-primary">binnen</span>, bel of mail.
        </h1>
        <WaveDivider className="mt-8 mx-auto max-w-[160px]" />
      </section>

      <section className="container-prose grid gap-10 pb-20 md:grid-cols-2">
        <Reveal>
          <div className="rounded-[28px] bg-card p-8 sm:p-10 h-full">
            <h2 className="font-serif text-3xl text-foreground">Bezoekadres</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  Choorstraat 12<br />
                  2681 AR Monster
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <a href="tel:+31174123456" className="hover:text-primary">0174 – 12 34 56</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <a href="mailto:hallo@lunchroomrosi.nl" className="hover:text-primary">hallo@lunchroomrosi.nl</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 text-primary" />
                <a href="https://instagram.com/lunchroomrosi" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@lunchroomrosi</a>
              </li>
            </ul>

            <h3 className="mt-10 font-serif text-2xl text-foreground">Openingstijden</h3>
            <ul className="mt-4 divide-y divide-border/60 text-sm">
              {[
                ["Maandag", "08:30 – 17:00"],
                ["Dinsdag", "08:30 – 17:00"],
                ["Woensdag", "08:30 – 17:00"],
                ["Donderdag", "08:30 – 17:00"],
                ["Vrijdag", "08:30 – 17:00"],
                ["Zaterdag", "09:00 – 17:00"],
                ["Zondag", "10:00 – 16:00"],
              ].map(([d, h]) => (
                <li key={d} className="flex items-center justify-between py-2.5">
                  <span>{d}</span>
                  <span className="font-serif tabular-nums">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-[28px] bg-card h-full">
            <iframe
              title="Locatie Lunchroom Rosi op Google Maps"
              src="https://www.google.com/maps?q=Choorstraat+Monster&output=embed"
              className="h-72 w-full md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <form onSubmit={onSubmit} className="grid gap-4 p-8">
              <h2 className="font-serif text-2xl text-foreground">Stuur een berichtje</h2>
              {sent ? (
                <p className="text-sm text-muted-foreground">
                  Je e-mailprogramma is geopend — verstuur de mail en we komen er bij je op terug.
                </p>
              ) : (
                <>
                  <input name="name" required maxLength={100} placeholder="Je naam" className={inputCls} />
                  <input name="email" type="email" required maxLength={255} placeholder="Je e-mail" className={inputCls} />
                  <textarea name="message" required maxLength={1000} rows={4} placeholder="Je bericht" className={`${inputCls} resize-none`} />
                  <button type="submit" className="justify-self-start rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors">
                    Verstuur
                  </button>
                </>
              )}
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
