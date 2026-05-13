import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/over", label: "Over" },
  { to: "/reserveren", label: "Reserveren" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-primary">Rosi</span>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground hidden sm:inline">
            Lunchroom · Monster
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/reserveren"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors"
          >
            Reserveer een tafel
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-card"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <nav className="container-prose flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/85 border-b border-border/40 last:border-0"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
