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
      { title: "Dr. Anisa's Holistic Cure — Premium Homeopathy Clinic in Mumbai & Indore" },
      {
        name: "description",
        content:
          "Experience world-class homeopathic healing at Dr. Anisa's Holistic Cure clinics in Mumbai and Indore. Natural, side-effect-free treatments for chronic diseases, skin disorders, respiratory issues, women's wellness, and mental health.",
      },
      {
        name: "keywords",
        content:
          "homeopathy, homeopathy clinic Mumbai, homeopathy Chembur, best homeopath Mumbai, homeopathy clinic Indore, Dr Anisa, Holistic Cure, natural healing, chronic disease treatment, skin disorder homeopathy, women wellness homeopathy, PCOS homeopathy, thyroid homeopathy, pediatric homeopathy",
      },
      { name: "author", content: "Dr. Anisa Shaikh" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#040f0c" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Mumbai" },
      { name: "geo.position", content: "19.0528;72.8912" },
      { name: "ICBM", content: "19.0528, 72.8912" },
      {
        property: "og:title",
        content: "Dr. Anisa's Holistic Cure — Best Homeopathy Clinic in Mumbai & Indore",
      },
      {
        property: "og:description",
        content:
          "Natural healing. Precise science. Lasting wellness. Experience holistic homeopathic care in Mumbai and Indore.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://holisticcure.in" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Holistic Cure" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Anisa's Holistic Cure — Best Homeopathy Clinic" },
      {
        name: "twitter:description",
        content:
          "Natural healing. Precise science. Lasting wellness. Book a consultation in Mumbai or Indore.",
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
