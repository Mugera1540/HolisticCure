import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const bookingJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dr. Anisa's Holistic Cure — Book Appointment",
  description:
    "Book your homeopathy consultation with Dr. Anisa Shaikh, the best homeopathy doctor in Mumbai (Chembur) and Indore. Expert treatment for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, depression, anxiety, asthma, kidney stones, infertility, and more.",
  url: "https://holisticcure.in/booking",
  telephone: "+919324625457",
  medicalSpecialty: "Homeopathy",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Ground floor, Manju Nursing Home, opposite Bhakti Bhavan next to Sitla Hospital, Sindhi society Chembur",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400071",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "G-04, Om Gurudev Complex, Scheme no 54, Opposite Apollo Hospital, below SBI bank",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  ],
};

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      {
        title: "Book Appointment — Best Homeopathy Doctor Mumbai & Indore | Dr. Anisa Shaikh",
      },
      {
        name: "description",
        content:
          "Book your homeopathy consultation with Dr. Anisa Shaikh at Holistic Cure clinics in Mumbai (Chembur) and Indore. Expert treatment for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, depression, asthma, kidney stones, infertility & more. Request appointment via WhatsApp or email.",
      },
      {
        name: "keywords",
        content:
          "book homeopathy appointment Mumbai, book homeopathy consultation Indore, Dr Anisa Shaikh appointment, best homeopathy doctor booking, homeopathy clinic Chembur appointment, PCOS doctor appointment Mumbai, thyroid specialist Indore, skin disease doctor Mumbai",
      },
      { name: "theme-color", content: "#040f0c" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Book Appointment — Best Homeopathy Doctor Dr. Anisa Shaikh | Mumbai & Indore",
      },
      {
        property: "og:description",
        content:
          "Request your homeopathy appointment with Dr. Anisa Shaikh at Holistic Cure. Premium homeopathy clinic in Mumbai (Chembur) & Indore treating PCOS, thyroid, diabetes, skin diseases & 50+ conditions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: "https://holisticcure.in/booking" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Book Appointment — Dr. Anisa's Holistic Cure | Mumbai & Indore",
      },
      {
        name: "twitter:description",
        content: "Book your consultation with the best homeopathy doctor in Mumbai & Indore. Natural healing for chronic diseases, skin disorders & more.",
      },
    ],
    links: [{ rel: "canonical", href: "https://holisticcure.in/booking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(bookingJsonLd),
      },
    ],
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
