import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      {
        title: "Book Appointment — Dr. Anisa's Holistic Cure | Mumbai & Indore",
      },
      {
        name: "description",
        content:
          "Book your consultation at Dr. Anisa's Holistic Cure clinics in Mumbai or Indore. Request an appointment via WhatsApp or email for natural homeopathic treatments.",
      },
      { name: "theme-color", content: "#040f0c" },
      {
        property: "og:title",
        content: "Book Appointment — Dr. Anisa's Holistic Cure",
      },
      {
        property: "og:description",
        content:
          "Request your appointment at Dr. Anisa's Holistic Cure — premium homeopathy clinic in Mumbai or Indore.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [{ rel: "canonical", href: "https://holisticcure.in/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <Booking />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
