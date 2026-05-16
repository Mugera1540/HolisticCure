import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Courier } from "@/components/sections/Courier";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const courierJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homeopathic Medicine Courier Service — Dr. Anisa's Holistic Cure",
  description:
    "Doorstep delivery of homeopathic medicines across India from Dr. Anisa Shaikh's Holistic Cure clinic. Medicine courier for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis and all homeopathic prescriptions. Available for existing patients from Mumbai and Indore clinics.",
  url: "https://holisticcure.in/courier",
  provider: {
    "@type": "MedicalBusiness",
    name: "Dr. Anisa's Holistic Cure",
    url: "https://holisticcure.in",
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Homeopathic Medicine Delivery",
};

export const Route = createFileRoute("/courier")({
  head: () => ({
    meta: [
      {
        title: "Homeopathic Medicine Courier Service — Dr. Anisa's Holistic Cure | Mumbai & Indore",
      },
      {
        name: "description",
        content:
          "Order homeopathic medicine delivery from Dr. Anisa Shaikh's Holistic Cure clinic. Doorstep courier of homeopathic medicines for PCOS, thyroid, diabetes, skin diseases, migraine & more. Medicine dispatch from Mumbai & Indore clinics across India.",
      },
      {
        name: "keywords",
        content:
          "homeopathic medicine delivery India, homeopathy medicine courier Mumbai, medicine courier Indore, Dr Anisa medicine delivery, homeopathic prescription delivery, buy homeopathic medicine online India, PCOS medicine courier, thyroid medicine delivery",
      },
      { name: "theme-color", content: "#040f0c" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Homeopathic Medicine Courier — Dr. Anisa's Holistic Cure",
      },
      {
        property: "og:description",
        content:
          "Get your homeopathic medicines delivered to your doorstep. Dr. Anisa's Holistic Cure provides reliable medicine courier services from Mumbai & Indore clinics across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: "https://holisticcure.in/courier" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Medicine Courier Service — Dr. Anisa's Holistic Cure",
      },
      {
        name: "twitter:description",
        content: "Homeopathic medicine delivery across India from Dr. Anisa's Holistic Cure clinics in Mumbai & Indore.",
      },
    ],
    links: [{ rel: "canonical", href: "https://holisticcure.in/courier" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(courierJsonLd),
      },
    ],
  }),
  component: CourierPage,
});

function CourierPage() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <Courier />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
