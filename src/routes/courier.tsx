import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Courier } from "@/components/sections/Courier";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/courier")({
  head: () => ({
    meta: [
      {
        title: "Medicine Courier Service — Dr. Anisa's Holistic Cure",
      },
      {
        name: "description",
        content:
          "Request doorstep delivery of your homeopathic medicines from Dr. Anisa's Holistic Cure. Medicine dispatch service for existing patients in Mumbai, Indore, and across India.",
      },
      { name: "theme-color", content: "#040f0c" },
      {
        property: "og:title",
        content: "Medicine Courier Service — Dr. Anisa's Holistic Cure",
      },
      {
        property: "og:description",
        content:
          "Order your medicine refills online. Dr. Anisa's Holistic Cure provides reliable medicine courier services across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [{ rel: "canonical", href: "https://holisticcure.in/courier" }],
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
