import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { SectionReveal } from "@/components/SectionReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Philosophy } from "@/components/sections/Philosophy";
import { Doctor } from "@/components/sections/Doctor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr. Anisa's Holistic Cure",
  alternateName: "Holistic Cure Homeopathy Clinic",
  description:
    "Premium homeopathy clinic providing natural, side-effect-free treatments for chronic diseases, skin disorders, respiratory issues, women's wellness, and mental health.",
  url: "https://holisticcure.in",
  telephone: "+919324625457",
  email: "info@holisticcure.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manju Nursing Home, Shubh Sadan 18B, Sindhi Society",
    addressLocality: "Chembur",
    addressRegion: "Maharashtra",
    postalCode: "400071",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.0522,
    longitude: 72.8994,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "21:00",
    },
  ],
  medicalSpecialty: "Homeopathy",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
  },
  hasMap: "https://maps.google.com/?q=Manju+Nursing+Home+Chembur+Mumbai",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. Anisa's Holistic Cure — Premium Homeopathy Clinic in Chembur, Mumbai",
      },
      {
        name: "description",
        content:
          "Experience world-class homeopathic healing at Dr. Anisa's Holistic Cure clinic in Chembur, Mumbai. Natural, side-effect-free treatments for chronic diseases, skin disorders, respiratory issues, women's wellness, and mental health. Book your consultation today.",
      },
      {
        name: "keywords",
        content:
          "homeopathy, homeopathy clinic Mumbai, Dr Anisa, Holistic Cure, Chembur homeopathy, natural healing, chronic disease treatment, skin disorder homeopathy, women wellness homeopathy",
      },
      { name: "theme-color", content: "#040f0c" },
      {
        property: "og:title",
        content: "Dr. Anisa's Holistic Cure — Premium Homeopathy Clinic",
      },
      {
        property: "og:description",
        content:
          "Natural healing. Precise science. Lasting wellness. Experience holistic homeopathic care in Chembur, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dr. Anisa's Holistic Cure — Premium Homeopathy Clinic",
      },
      {
        name: "twitter:description",
        content:
          "Natural healing. Precise science. Lasting wellness. Book a consultation in Chembur, Mumbai.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://holisticcure.in/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <Hero />

        <SectionReveal direction="up" delay={0.1} duration={1}>
          <About />
        </SectionReveal>

        <SectionReveal direction="up" delay={0.15} duration={1}>
          <Services />
        </SectionReveal>

        <SectionReveal direction="fade" delay={0.1} duration={1.2}>
          <Philosophy />
        </SectionReveal>

        <SectionReveal direction="up" delay={0.15} duration={1}>
          <Doctor />
        </SectionReveal>

        <SectionReveal direction="up" delay={0.2} duration={1}>
          <Testimonials />
        </SectionReveal>
      </main>

      <SectionReveal direction="fade" delay={0.1} duration={0.8}>
        <Footer />
      </SectionReveal>

      <FloatingActions />
    </>
  );
}

