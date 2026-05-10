const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XTwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768" />
    <path d="M20 4l-7.364 7.364" />
  </svg>
);

export function Footer() {
  return (
    <footer
      className="relative pt-4 sm:pt-8 lg:pt-12 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12"
      style={{ backgroundColor: "var(--color-emerald-deep)" }}
    >
      <div className="container-luxe grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
        <div>
          <h3
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "0.15em" }}
          >
            HOLISTIC CURE
          </h3>
          <p
            className="mt-2 text-white/40"
            style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" }}
          >
            Dr. Anisa Shaikh's Clinic
          </p>
          <p className="mt-6 sm:mt-8 text-white/40 text-sm leading-relaxed max-w-xs">
            Healing naturally. Healing completely. Providing world-class homeopathic care in the
            heart of Mumbai.
          </p>

          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://instagram.com/holisticcure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2 -ml-2"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://facebook.com/holisticcure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://twitter.com/holisticcure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors p-2"
              aria-label="Follow us on Twitter"
            >
              <XTwitterIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <p
            className="mb-4 sm:mb-6"
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-emerald-light)",
            }}
          >
            Contact
          </p>
          <p className="text-white/40 text-sm leading-relaxed">
            Manju Nursing Home, Shubh Sadan 18B,
            <br />
            Sindhi Society, Chembur,
            <br />
            Mumbai 400071
          </p>
          <a
            href="tel:+919324625457"
            className="block mt-4 sm:mt-6 font-serif text-white hover:text-emerald-light transition-colors"
            style={{ fontSize: "clamp(20px, 3vw, 40px)" }}
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
