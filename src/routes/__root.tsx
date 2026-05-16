import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoUrl from "../assets/HC HOMEOPATHY LOGO FINAL-Photoroom.png?url";
import faviconUrl from "../assets/HC-HOMEOPATHY.svg?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Best Homeopathy Doctor in Mumbai & Indore | Dr. Anisa Shaikh — Holistic Cure Clinic" },
      {
        name: "description",
        content:
          "Dr. Anisa Shaikh is the best homeopathy doctor in Mumbai (Chembur) & Indore. Holistic Cure clinic offers natural, side-effect-free homeopathic treatments for PCOS, thyroid, diabetes, skin diseases (eczema, psoriasis, acne), migraine, arthritis, depression, anxiety, asthma, kidney stones, infertility, child care & more. Book your appointment today.",
      },
      {
        name: "keywords",
        content:
          "best homeopathy doctor Mumbai, best homeopathy doctor Indore, Dr Anisa Shaikh homeopathy, best homeopath in Chembur, homeopathy clinic Mumbai, homeopathy clinic Indore, Holistic Cure, PCOS homeopathy treatment Mumbai, thyroid homeopathy Indore, diabetes homeopathy treatment, skin disease homeopathy, eczema treatment homeopathy, psoriasis homeopathy Mumbai, acne homeopathy treatment, migraine homeopathy doctor, arthritis homeopathy Indore, depression anxiety homeopathy, asthma homeopathy treatment Mumbai, kidney stones homeopathy, infertility homeopathy treatment, child care homeopathy, ADHD homeopathy, autism homeopathy treatment, hair fall homeopathy, piles fissure homeopathy, spondylitis homeopathy, IBS homeopathy treatment, insomnia homeopathy, allergy treatment homeopathy, tonsillitis homeopathy, bronchitis homeopathy, women wellness homeopathy, pediatric homeopathy Mumbai, homeopathy near me Mumbai, homeopathy near me Indore, best lady homeopath Mumbai, female homeopathy doctor Indore, natural healing Mumbai, holistic treatment Indore, homeopathic medicine courier India",
      },
      { name: "author", content: "Dr. Anisa Shaikh — MD (Homeopathy), BHMS, IACH Greece" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#040f0c" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "distribution", content: "global" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Mumbai, Chembur" },
      { name: "geo.position", content: "19.0528;72.8912" },
      { name: "ICBM", content: "19.0528, 72.8912" },
      {
        property: "og:title",
        content: "Best Homeopathy Doctor in Mumbai & Indore — Dr. Anisa Shaikh | Holistic Cure",
      },
      {
        property: "og:description",
        content:
          "Dr. Anisa Shaikh offers the best homeopathic treatment for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, anxiety & more at Holistic Cure clinics in Mumbai (Chembur) and Indore. Natural healing with zero side effects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://holisticcure.in" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Dr. Anisa's Holistic Cure — Best Homeopathy Clinic" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Homeopathy Doctor Mumbai & Indore — Dr. Anisa Shaikh | Holistic Cure" },
      {
        name: "twitter:description",
        content:
          "Top-rated homeopathy clinic by Dr. Anisa Shaikh. Treating PCOS, thyroid, skin diseases, migraine, diabetes & more naturally. Clinics in Mumbai (Chembur) & Indore. Book now.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: faviconUrl,
      },
      {
        rel: "apple-touch-icon",
        href: logoUrl,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
