import logo from "../../assets/HC HOMEOPATHY LOGO FINAL-Photoroom.png";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export function Footer() {
  return (
    <footer
      className="relative pt-4 sm:pt-8 lg:pt-12 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12"
      style={{ backgroundColor: "var(--color-emerald-deep)" }}
    >
      <div className="container-luxe grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={logo}
              alt="Holistic Cure Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <h3
                className="font-serif font-bold text-white uppercase tracking-wider"
                style={{ fontSize: "20px" }}
              >
                Holistic Cure
              </h3>
              <p
                className="mt-1 text-white/30 uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.2em" }}
              >
                Dr. Anisa Shaikh's Clinic
              </p>
            </div>
          </div>
          <p className="mt-6 sm:mt-8 text-white/40 text-sm leading-relaxed max-w-xs">
            Healing naturally. Healing completely. Providing world-class homeopathic care in Mumbai
            and Indore.
          </p>

          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://www.instagram.com/holisticure_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2 -ml-2"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/people/Dr-Anisas-Holistic-Cure/100089554737013/?rdid=mJzPwZCaFJHeGSUc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://wa.me/919324625457"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2"
              aria-label="Contact us on WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href="mailto:holistic.cure26@gmail.com"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2"
              aria-label="Send us an Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <p
            className="mb-8 sm:mb-10"
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-emerald-light)",
            }}
          >
            Services
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="/booking"
              className="text-white/40 hover:text-white transition-colors text-sm tracking-wide"
            >
              Book Appointment
            </a>
            <a
              href="/courier"
              className="text-white/40 hover:text-white transition-colors text-sm tracking-wide"
            >
              Medicine Courier
            </a>
            <a
              href="/#services"
              className="text-white/40 hover:text-white transition-colors text-sm tracking-wide"
            >
              Treatments We Offer
            </a>
          </div>
        </div>

        <div>
          <p
            className="mb-8 sm:mb-10"
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-emerald-light)",
            }}
          >
            Our Locations
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/60 mb-3 font-medium">
                Mumbai Clinic
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Ground floor, Manju Nursing Home,
                <br />
                opposite Bhakti Bhavan, next to Sitla Hospital,
                <br />
                Sindhi Society, Chembur, Mumbai - 400071
              </p>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/60 mb-3 font-medium">
                Indore Clinic
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                LG -04, Om Gurudev Complex, Scheme no 54,
                <br />
                Oppo Appolo Hospital, below SBI bank,
                <br />
                Indore (MP)
              </p>
            </div>
          </div>

          <a
            href="tel:+919324625457"
            className="block mt-10 sm:mt-12 font-serif text-white hover:text-emerald-light transition-colors"
            style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
          >
            +91 93246 25457
          </a>
        </div>
      </div>

      <div
        className="container-luxe mt-12 sm:mt-16 lg:mt-24 pt-8 sm:pt-10 space-y-4 sm:space-y-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-white/25 text-xs leading-relaxed max-w-3xl">
          Medical Disclaimer: The information on this website is for educational purposes only and
          does not constitute medical advice. Always consult a qualified healthcare professional
          before starting any treatment. Homeopathy is a complementary medicine — results may vary.
        </p>
        <p
          className="text-white/20"
          style={{ fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase" }}
        >
          © 2026 Dr. Anisa's Holistic Cure. All rights reserved.
        </p>
      </div>

      {/* Safe-area bottom padding for notched phones */}
      <div className="safe-bottom" />
    </footer>
  );
}
