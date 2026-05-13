import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/60">
      <div className="container-prose py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-primary">Lunchroom Rosi</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Een knus hoekje in het hart van Monster. Verse koffie, huisgemaakte
            lekkernijen en een warm welkom van Fay.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Openingstijden</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li className="flex justify-between"><span>Ma – Vr</span><span>08:30 – 17:00</span></li>
            <li className="flex justify-between"><span>Zaterdag</span><span>09:00 – 17:00</span></li>
            <li className="flex justify-between"><span>Zondag</span><span>10:00 – 16:00</span></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bezoek</p>
          <address className="not-italic mt-3 text-sm leading-relaxed">
            Choorstraat 12<br />
            2681 AR Monster<br />
            <a href="tel:+31174123456" className="hover:text-primary">0174 – 12 34 56</a><br />
            <a href="mailto:hallo@lunchroomrosi.nl" className="hover:text-primary">hallo@lunchroomrosi.nl</a>
          </address>
          <a
            href="https://instagram.com/lunchroomrosi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-[color:var(--terracotta)]"
            aria-label="Volg Rosi op Instagram"
          >
            <Instagram className="h-4 w-4" /> @lunchroomrosi
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-muted-foreground">
          <p>© {year} Lunchroom Rosi · Monster</p>
          <div className="flex items-center gap-4">
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <a href="https://sitefront.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              Gemaakt door Sitefront
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
