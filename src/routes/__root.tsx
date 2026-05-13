import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Hier is niets te vinden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze pagina bestaat niet (meer). Loop gerust terug naar de voordeur.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-foreground">Oeps, dat ging niet helemaal goed</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probeer het nog eens of ga terug naar de homepagina.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-[color:var(--terracotta)] transition-colors"
          >
            Probeer opnieuw
          </button>
          <a href="/" className="rounded-full border border-input bg-card px-5 py-2.5 text-sm text-foreground hover:bg-muted transition-colors">
            Naar home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lunchroom Rosi | Verse koffie & lunch in Monster" },
      { name: "description", content: "Lunchroom Rosi in het hart van Monster. Verse koffie, huisgemaakte lunch en taart, en een warm welkom." },
      { name: "theme-color", content: "#6B7A4A" },
      { property: "og:title", content: "Lunchroom Rosi | Monster" },
      { property: "og:description", content: "Een knus hoekje in Monster met verse koffie, lunch en huisgemaakt gebak." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lunchroom Rosi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Lunchroom Rosi",
          image: "/og.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Choorstraat 12",
            postalCode: "2681 AR",
            addressLocality: "Monster",
            addressCountry: "NL",
          },
          telephone: "+31174123456",
          servesCuisine: ["Lunch", "Coffee", "Pastries"],
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
