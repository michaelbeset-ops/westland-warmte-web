import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import sfeer1 from "@/assets/sfeer-1.jpg";
import sfeer2 from "@/assets/sfeer-2.jpg";
import sfeer3 from "@/assets/sfeer-3.jpg";
import fayImg from "@/assets/fay.jpg";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";
import { Coffee, Leaf, Heart, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunchroom Rosi — Verse koffie & lunch in Monster" },
      { name: "description", content: "Een knus hoekje in het hart van Monster. Verse koffie, huisgemaakte lunch en taart, en een warm welkom." },
      { property: "og:title", content: "Lunchroom Rosi — Monster" },
      { property: "og:description", content: "Verse koffie, lunch en huisgemaakt gebak in Monster." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid gap-10 pt-10 pb-16 md:pt-16 md:pb-24 md:grid-cols-2 md:items-center">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
              Lunchroom · Monster sinds 2026
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Een warm hoekje{" "}
              <span className="italic text-primary">in het hart</span> van Monster.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Verse koffie, broodjes van de bakker om de hoek en taart die we
              die ochtend nog uit de oven haalden. Loop binnen, schuif aan,
              blijf even.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors"
              >
                Bekijk de kaart
              </Link>
              <Link
                to="/reserveren"
                className="inline-flex items-center rounded-full border border-primary/30 bg-card px-6 py-3 text-sm text-foreground hover:border-primary transition-colors"
              >
                Reserveer een tafel
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="blob bg-secondary/35 -left-6 -top-6 h-40 w-40 hidden md:block" />
            <div className="blob bg-[color:var(--terracotta)]/20 -right-4 -bottom-6 h-32 w-32 hidden md:block" />
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_-30px_rgba(60,55,30,0.45)]">
              <img
                src={heroImg}
                alt="Vers brood en een kop koffie op een houten tafel in Lunchroom Rosi"
                width={1600}
                height={1100}
                className="h-[460px] w-full object-cover sm:h-[560px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color:var(--background)]/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="container-prose grid gap-8 py-12 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Vers & lokaal", text: "Groente van Westlandse telers, brood van de bakker uit de straat." },
            { icon: Heart, title: "Met de hand", text: "Soep, taart en limonade — alles huisgemaakt in onze keuken." },
            { icon: Coffee, title: "Goede koffie", text: "Bonen van branderij Stielman, gezet door iemand die er om geeft." },
          ].map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center rounded-full bg-primary/10 p-3 text-primary">
                  <u.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{u.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{u.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO + FOTO GRID */}
      <section className="container-prose py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Sfeerimpressie</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              Even <span className="italic text-primary">stilstaan</span> tussen de boodschappen door.
            </h2>
            <WaveDivider className="mt-6 mx-auto max-w-[180px]" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: food1, alt: "Avocado toast met gepocheerd ei", tall: true },
            { src: sfeer1, alt: "Barista zet een flat white" },
            { src: food3, alt: "Broodje carpaccio met rucola en parmezaan" },
            { src: sfeer2, alt: "Bloemen op een tafel in de lunchroom", tall: true },
            { src: food2, alt: "Huisgemaakte taart met koffie" },
            { src: sfeer3, alt: "Verse jus d'orange en croissant" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 60} className={img.tall ? "row-span-2" : ""}>
              <div className="overflow-hidden rounded-2xl bg-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1000}
                  height={img.tall ? 1400 : 800}
                  className={`w-full object-cover transition-transform duration-700 hover:scale-[1.04] ${
                    img.tall ? "h-full min-h-[300px]" : "h-48 md:h-56"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OVER FAY (kort) */}
      <section className="bg-card/60 border-y border-border/60">
        <div className="container-prose grid gap-12 py-20 md:grid-cols-[5fr_7fr] md:items-center">
          <Reveal>
            <div className="relative">
              <div className="blob bg-secondary/30 -left-4 -top-4 h-28 w-28" />
              <img
                src={fayImg}
                alt="Fay Roos, eigenaresse van Lunchroom Rosi"
                loading="lazy"
                width={1000}
                height={1200}
                className="relative w-full rounded-[28px] object-cover h-[440px] md:h-[520px]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Even kennismaken</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              Fay achter de toonbank.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Op Koningsdag 2026 opende Fay (23) de deuren van Rosi. Opgegroeid
              in Monster, altijd al gek op koken voor anderen. Geen ingewikkelde
              concepten — gewoon goede ingrediënten, een fijne plek en de tijd
              nemen voor iedereen die binnenkomt.
            </p>
            <blockquote className="mt-8 border-l-2 border-primary/60 pl-5 font-serif italic text-xl text-foreground">
              "Ik wilde de plek zijn waar je tussen de middag écht even uit de
              ren stapt."
              <footer className="mt-2 text-sm not-italic font-sans text-muted-foreground">
                — Fay Roos
              </footer>
            </blockquote>
            <Link
              to="/over"
              className="mt-8 inline-flex items-center text-sm text-primary hover:text-[color:var(--terracotta)] transition-colors"
            >
              Lees haar verhaal →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OPENINGSTIJDEN + CTA */}
      <section className="container-prose py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Open deuren</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">Wanneer je langs kunt komen</h2>
            <ul className="mt-6 divide-y divide-border/60 text-base">
              {[
                ["Maandag", "08:30 – 17:00"],
                ["Dinsdag", "08:30 – 17:00"],
                ["Woensdag", "08:30 – 17:00"],
                ["Donderdag", "08:30 – 17:00"],
                ["Vrijdag", "08:30 – 17:00"],
                ["Zaterdag", "09:00 – 17:00"],
                ["Zondag", "10:00 – 16:00"],
              ].map(([d, h]) => (
                <li key={d} className="flex items-center justify-between py-3">
                  <span>{d}</span>
                  <span className="font-serif tabular-nums text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] bg-primary p-10 text-primary-foreground">
              <h3 className="font-serif text-3xl">Kom langs in Monster</h3>
              <p className="mt-3 text-primary-foreground/85">
                Choorstraat 12, Monster. Geen reservering nodig — maar wel zo
                fijn als je met meer dan vier mensen komt.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/reserveren"
                  className="rounded-full bg-card px-5 py-2.5 text-sm text-foreground hover:bg-background transition-colors"
                >
                  Reserveer een tafel
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  Route & contact
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="container-prose pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Volg ons</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground">@lunchroomrosi</h2>
            </div>
            <a
              href="https://instagram.com/lunchroomrosi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-[color:var(--terracotta)]"
            >
              <Instagram className="h-4 w-4" /> Volgen
            </a>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-6">
          {[food1, sfeer1, food2, sfeer2, food3, sfeer3].map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/lunchroomrosi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl bg-card"
            >
              <img
                src={src}
                alt="Sfeerfoto Lunchroom Rosi"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
