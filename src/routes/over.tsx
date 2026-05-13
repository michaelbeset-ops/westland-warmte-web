import { createFileRoute, Link } from "@tanstack/react-router";
import fayImg from "@/assets/fay.jpg";
import sfeer1 from "@/assets/sfeer-1.jpg";
import sfeer2 from "@/assets/sfeer-2.jpg";
import food2 from "@/assets/food-2.jpg";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";

export const Route = createFileRoute("/over")({
  head: () => ({
    meta: [
      { title: "Over Rosi — Het verhaal van Fay" },
      { name: "description", content: "Fay Roos opende Lunchroom Rosi op Koningsdag 2026 in haar geboorteplaats Monster. Lees hoe het begon en waar de naam vandaan komt." },
      { property: "og:title", content: "Over Rosi — Het verhaal van Fay" },
      { property: "og:description", content: "Het verhaal achter Lunchroom Rosi in Monster." },
      { property: "og:url", content: "/over" },
    ],
    links: [{ rel: "canonical", href: "/over" }],
  }),
  component: OverPage,
});

function OverPage() {
  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Het verhaal</p>
          <h1 className="mt-3 font-serif text-5xl text-foreground sm:text-6xl">
            Begonnen op <span className="italic text-primary">Koningsdag</span>, in het dorp waar ik opgroeide.
          </h1>
        </div>
      </section>

      <section className="container-prose grid gap-12 pb-20 md:grid-cols-[5fr_7fr]">
        <Reveal>
          <img
            src={fayImg}
            alt="Fay Roos in haar lunchroom"
            loading="lazy"
            width={1000}
            height={1200}
            className="w-full rounded-[28px] object-cover h-[480px] md:h-[600px]"
          />
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Mijn naam is Fay. Ik ben drieëntwintig, geboren en getogen in
            Monster, en ik heb altijd al iets met eten gehad. Niet ingewikkeld
            of chef-achtig — gewoon: koken voor mensen die ik leuk vind.
          </p>
          <p>
            Op Koningsdag 2026 opende ik de deuren van Rosi. Een knus pand aan
            de Choorstraat dat al jaren leeg stond. Mijn moeder en ik hebben
            er weken geschuurd, geverfd en getimmerd. Mijn opa kwam elke dag
            koffie brengen. Het is écht ons hoekje geworden.
          </p>
          <p>
            De naam? Rosi was de hond van mijn oma. Een trouwe, gezellige
            schat die altijd in de keuken lag, hopend op een korstje brood.
            Het voelde gewoon goed om de zaak naar haar te noemen.
          </p>
          <p>
            Wat ik wil bieden is simpel: vers eten, goede koffie, en vooral
            de tijd. Tijd om je krant uit te lezen, tijd om met je vriendin
            te kletsen, tijd om gewoon even niets te doen.
          </p>
        </Reveal>
      </section>

      <section className="bg-card/60 border-y border-border/60">
        <div className="container-prose py-20 text-center">
          <Reveal>
            <WaveDivider className="mx-auto max-w-[160px]" />
            <blockquote className="mx-auto mt-6 max-w-3xl font-serif italic text-2xl leading-relaxed text-foreground sm:text-3xl">
              "Ik kook niet omdat het indrukwekkend moet zijn. Ik kook omdat
              ik wil dat mensen even thuiskomen, ook als ze net binnen zijn."
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">— Fay Roos</p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose grid gap-6 py-20 md:grid-cols-3">
        {[
          { src: sfeer1, alt: "Koffie wordt gezet aan de bar" },
          { src: food2, alt: "Huisgemaakte taart en koffie" },
          { src: sfeer2, alt: "Bloemen op tafel" },
        ].map((img, i) => (
          <Reveal key={img.src} delay={i * 80}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </Reveal>
        ))}
      </section>

      <section className="container-prose pb-20 text-center">
        <h2 className="font-serif text-4xl text-foreground">Kom een keer kennismaken</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Loop binnen voor een koffie, of reserveer een tafeltje voor de lunch.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/reserveren" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors">
            Reserveer een tafel
          </Link>
          <Link to="/menu" className="rounded-full border border-primary/30 bg-card px-6 py-3 text-sm text-foreground hover:border-primary transition-colors">
            Bekijk de kaart
          </Link>
        </div>
      </section>
    </>
  );
}
