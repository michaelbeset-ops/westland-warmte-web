import { createFileRoute, Link } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { Reveal } from "@/components/site/Reveal";
import { WaveDivider } from "@/components/site/WaveDivider";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menukaart — Lunchroom Rosi Monster" },
      { name: "description", content: "Vers belegde broodjes, soepen, salades, huisgemaakte taart en goede koffie. Bekijk de hele menukaart van Lunchroom Rosi in Monster." },
      { property: "og:title", content: "Menukaart — Lunchroom Rosi" },
      { property: "og:description", content: "De volledige menukaart van Lunchroom Rosi in Monster." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="container-prose pt-12 pb-10 md:pt-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Onze kaart</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground sm:text-6xl">
          Vers, eerlijk, en <span className="italic text-primary">met liefde</span> gemaakt.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          De kaart wisselt mee met de seizoenen. Vraag gerust naar de specials —
          die staan vaak met krijt op het bord boven de bar.
        </p>
        <WaveDivider className="mt-8 mx-auto max-w-[200px]" />
      </section>

      {/* Categorie nav */}
      <nav aria-label="Menucategorieën" className="container-prose">
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {menu.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-prose mt-16 grid gap-16 pb-20 md:grid-cols-2 md:gap-x-16">
        {menu.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 60}>
            <article id={cat.id} className="scroll-mt-28">
              <header className="mb-6">
                <h2 className="font-serif text-3xl text-primary">{cat.title}</h2>
                {cat.subtitle && (
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {cat.subtitle}
                  </p>
                )}
                <div className="mt-3 h-px w-full bg-primary/30" />
              </header>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline">
                      <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                      <span className="menu-dots" aria-hidden="true" />
                      <span className="font-serif tabular-nums text-foreground">€ {item.price}</span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-prose pb-20">
        <div className="rounded-[28px] bg-card p-10 text-center">
          <h2 className="font-serif text-3xl text-foreground">Allergie of dieetwens?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Laat het ons weten — we doen wat we kunnen om iets lekkers voor je
            te maken. Vegan, glutenvrij of lactosevrij is bijna altijd mogelijk.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
