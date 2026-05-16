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

/* ───────────────────────────────────────────────
   Structured Data — JSON-LD for maximum SEO
   ─────────────────────────────────────────────── */

// 1) Medical Business (primary)
const medicalBusinessLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://holisticcure.in/#business",
  name: "Dr. Anisa's Holistic Cure",
  alternateName: [
    "Holistic Cure Homeopathy Clinic",
    "Best Homeopathy Doctor in Mumbai",
    "Best Homeopathy Doctor in Indore",
    "Dr Anisa Homeopathy Clinic",
  ],
  description:
    "Dr. Anisa Shaikh's Holistic Cure is the best homeopathy clinic in Mumbai (Chembur) and Indore, providing natural, side-effect-free treatments for PCOS, thyroid disorders, diabetes, skin diseases (eczema, psoriasis, acne), migraine, arthritis, spondylitis, kidney stones, depression, anxiety, insomnia, infertility, asthma, allergies, child health (ADHD, autism), piles, fissures, hair fall, and more.",
  url: "https://holisticcure.in",
  telephone: "+919324625457",
  email: "holistic.cure26@gmail.com",
  image: "https://holisticcure.in/og-image.jpg",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Online Payment",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "Ground floor, Manju Nursing Home, opposite Bhakti Bhavan next to Sitla Hospital, Sindhi society Chembur",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400071",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "G-04, Om Gurudev Complex, Scheme no 54, Opposite Apollo Hospital, below SBI bank",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: "19.0528",
      longitude: "72.8912",
      name: "Holistic Cure Mumbai Clinic, Chembur",
    },
    {
      "@type": "GeoCoordinates",
      latitude: "22.7196",
      longitude: "75.8577",
      name: "Holistic Cure Indore Clinic",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Indore" },
    { "@type": "City", name: "Chembur" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "City", name: "Thane" },
    { "@type": "Country", name: "India" },
  ],
  medicalSpecialty: "Homeopathy",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/holisticure_/",
    "https://www.facebook.com/people/Dr-Anisas-Holistic-Cure/100089554737013/",
  ],
};

// 2) Physician Schema — Dr. Anisa as best doctor
const physicianLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://holisticcure.in/#doctor",
  name: "Dr. Anisa Shaikh",
  alternateName: [
    "Best Homeopathy Doctor Mumbai",
    "Best Homeopathy Doctor Indore",
    "Dr Anisa Homeopath",
    "Best Lady Homeopath Mumbai",
  ],
  description:
    "Dr. Anisa Shaikh (MD Homeopathy, BHMS, IACH Greece Diploma, MCAH HHF Mumbai) is the best homeopathy doctor in Mumbai and Indore. She specializes in treating PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, depression, anxiety, infertility, asthma, kidney stones, and children's health with holistic homeopathic medicine.",
  image: "https://holisticcure.in/doctor.jpg",
  url: "https://holisticcure.in/#doctor",
  telephone: "+919324625457",
  email: "holistic.cure26@gmail.com",
  medicalSpecialty: "Homeopathy",
  qualifications: "MD (Homeopathy), BHMS, IACH Greece Diploma, MCAH (HHF Mumbai), Certified Graphologist",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Maharashtra University of Health Sciences" },
    { "@type": "EducationalOrganization", name: "International Academy of Classical Homeopathy (IACH), Greece" },
    { "@type": "EducationalOrganization", name: "Hahnemannian Homeopathy Forum (HHF), Mumbai" },
  ],
  worksFor: { "@id": "https://holisticcure.in/#business" },
  availableService: [
    { "@type": "MedicalProcedure", name: "PCOS / PCOD Homeopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Thyroid Disorder Homeopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Diabetes Management Homeopathy" },
    { "@type": "MedicalProcedure", name: "Skin Disease Treatment (Eczema, Psoriasis, Acne)" },
    { "@type": "MedicalProcedure", name: "Migraine & Headache Homeopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Arthritis & Joint Pain Homeopathy" },
    { "@type": "MedicalProcedure", name: "Depression & Anxiety Homeopathy" },
    { "@type": "MedicalProcedure", name: "Infertility Treatment Homeopathy" },
    { "@type": "MedicalProcedure", name: "Asthma & Respiratory Homeopathy" },
    { "@type": "MedicalProcedure", name: "Kidney Stones Homeopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Piles, Fissures & Fistula Homeopathy" },
    { "@type": "MedicalProcedure", name: "Child Care & Pediatric Homeopathy" },
    { "@type": "MedicalProcedure", name: "ADHD & Autism Homeopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Hair Fall & Alopecia Homeopathy" },
    { "@type": "MedicalProcedure", name: "Insomnia & Sleep Disorder Homeopathy" },
    { "@type": "MedicalProcedure", name: "Allergy & Immunity Homeopathy" },
    { "@type": "MedicalProcedure", name: "Spondylitis & Back Pain Homeopathy" },
    { "@type": "MedicalProcedure", name: "IBS & Digestive Disorder Homeopathy" },
    { "@type": "MedicalProcedure", name: "Cancer Supportive Homeopathy" },
    { "@type": "MedicalProcedure", name: "Hypertension Homeopathy Treatment" },
  ],
};

// 3) FAQ Schema — boosts featured snippets
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best homeopathy doctor in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Anisa Shaikh at Holistic Cure clinic in Chembur, Mumbai is rated 4.9/5 stars with over 900+ patients healed. She holds an MD in Homeopathy and international credentials from IACH Greece.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best homeopathy doctor in Indore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Anisa Shaikh runs Holistic Cure clinic in Indore (Scheme no 54, opposite Apollo Hospital) providing expert homeopathic treatment for all chronic and acute diseases.",
      },
    },
    {
      "@type": "Question",
      name: "Can homeopathy cure PCOS permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, homeopathy can effectively treat PCOS by addressing the root hormonal imbalance. Dr. Anisa Shaikh at Holistic Cure specializes in PCOS treatment with personalized homeopathic medicines that regulate menstrual cycles and restore hormonal balance naturally.",
      },
    },
    {
      "@type": "Question",
      name: "Is homeopathy effective for skin diseases like eczema and psoriasis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Homeopathy treats skin diseases from within by addressing the root cause. Dr. Anisa at Holistic Cure has successfully treated hundreds of eczema, psoriasis, acne, and skin allergy cases in Mumbai and Indore.",
      },
    },
    {
      "@type": "Question",
      name: "Can homeopathy help with thyroid disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, homeopathy is highly effective for both hypothyroidism and hyperthyroidism. Dr. Anisa Shaikh provides personalized thyroid treatment that restores endocrine harmony naturally without side effects.",
      },
    },
    {
      "@type": "Question",
      name: "Does Holistic Cure provide medicine delivery across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Holistic Cure offers homeopathic medicine courier service across India. Existing patients can request medicine refills for doorstep delivery from Mumbai and Indore clinics.",
      },
    },
    {
      "@type": "Question",
      name: "What diseases does Dr. Anisa treat at Holistic Cure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Anisa treats PCOS, thyroid disorders, diabetes, skin diseases (eczema, psoriasis, acne), migraine, arthritis, spondylitis, kidney stones, gallbladder stones, depression, anxiety, insomnia, infertility, asthma, bronchitis, allergies, piles, fissures, fistula, IBS, GERD, hair fall, ADHD, autism, tonsillitis, hypertension, cancer support, and many more conditions.",
      },
    },
  ],
};

// 4) Website Schema with SearchAction
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Anisa's Holistic Cure — Best Homeopathy Clinic Mumbai & Indore",
  url: "https://holisticcure.in",
  description:
    "Best homeopathy clinic in Mumbai and Indore by Dr. Anisa Shaikh. Natural treatment for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, and more.",
  publisher: { "@id": "https://holisticcure.in/#business" },
};

// 5) BreadcrumbList Schema
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://holisticcure.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book Appointment",
      item: "https://holisticcure.in/booking",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicine Courier",
      item: "https://holisticcure.in/courier",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Best Homeopathy Doctor in Mumbai & Indore | Dr. Anisa Shaikh — Holistic Cure",
      },
      {
        name: "description",
        content:
          "Dr. Anisa Shaikh is the best homeopathy doctor in Mumbai (Chembur) & Indore. Expert homeopathic treatment for PCOS, thyroid, diabetes, eczema, psoriasis, migraine, arthritis, depression, anxiety, asthma, kidney stones, infertility, piles, ADHD, autism & more. Natural healing with zero side effects. Book your appointment today.",
      },
      {
        name: "keywords",
        content:
          "best homeopathy doctor Mumbai, best homeopathy doctor Indore, Dr Anisa Shaikh, homeopathy clinic Chembur Mumbai, PCOS treatment homeopathy, thyroid homeopathy, diabetes homeopathy, eczema psoriasis homeopathy, migraine doctor Mumbai, arthritis homeopathy Indore, depression anxiety homeopathy, asthma treatment homeopathy, kidney stones homeopathy, infertility homeopathy, piles homeopathy, ADHD autism homeopathy, hair fall homeopathy, best lady homeopath, natural healing, holistic treatment",
      },
      { name: "theme-color", content: "#040f0c" },
      {
        property: "og:title",
        content: "Best Homeopathy Doctor Mumbai & Indore — Dr. Anisa Shaikh | Holistic Cure",
      },
      {
        property: "og:description",
        content:
          "Dr. Anisa Shaikh offers expert homeopathic treatment for PCOS, thyroid, diabetes, skin diseases, migraine, arthritis, anxiety & 50+ conditions. Clinics in Mumbai (Chembur) & Indore. 900+ patients healed. Book now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: "https://holisticcure.in/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Best Homeopathy Doctor Mumbai & Indore — Dr. Anisa Shaikh | Holistic Cure",
      },
      {
        name: "twitter:description",
        content:
          "Top-rated homeopathy by Dr. Anisa Shaikh. Treating PCOS, thyroid, skin diseases, migraine, diabetes & more. Mumbai (Chembur) & Indore clinics. Book now.",
      },
    ],
    links: [{ rel: "canonical", href: "https://holisticcure.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([medicalBusinessLd, physicianLd, faqLd, websiteLd, breadcrumbLd]),
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
