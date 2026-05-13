import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    quote:
      "Dr. Anisa healed my 7-year chronic skin condition in 4 months. No steroids, no side effects. Truly miraculous. I had tried everything from expensive specialists to home remedies, but nothing worked until I found this holistic approach. The relief of finally having clear skin and no more itching is indescribable.",
    name: "Nadia",
  },
  {
    quote:
      "My son's recurring respiratory infections stopped completely. We haven't visited a hospital in 2 years. The personalized care and attention to detail Dr. Anisa provides is unmatched in our experience. She doesn't just treat symptoms; she finds the root cause and builds immunity naturally.",
    name: "Vaishali",
  },
  {
    quote:
      "My anxiety and sleep issues resolved naturally. Dr. Anisa listens deeply and treats the whole person. I finally feel like I have control over my life again, without relying on heavy medication that previously left me feeling drained. Her calm demeanor and expertise gave me hope when I had none.",
    name: "Tayyab",
  },
  {
    quote:
      "After years of hormonal issues, I finally found balance. Dr. Anisa's approach changed my life. Her deep understanding of women's health and the gentle yet effective nature of the treatment made all the difference. I recommend her to every woman seeking natural healing.",
    name: "Arsh",
  },
];

const StarIcon = ({
  size = 14,
  fill = "none",
  stroke = "currentColor",
}: {
  size?: number;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = ({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
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
    className={className}
    style={style}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedReview, setSelectedReview] = useState<(typeof reviews)[0] | null>(null);

  useEffect(() => {
    // Detect touch device to disable auto-scroll
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice || selectedReview) return; // Don't auto-scroll on touch or when modal open
    let raf = 0;
    const tick = () => {
      const el = trackRef.current;
      if (el && !paused) {
        el.scrollLeft += 0.85;
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft -= el.scrollWidth / 3;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, isTouchDevice, selectedReview]);

  const tripled = isTouchDevice ? reviews : [...reviews, ...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-[8rem] overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)", color: "var(--color-ink)" }}
    >
      <div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 animate-drift"
        style={{ background: "var(--color-emerald-glow)", filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 animate-drift"
        style={{ background: "var(--color-gold)", filter: "blur(120px)", animationDelay: "-9s" }}
      />

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div
            className="w-10 h-px mb-4 sm:mb-6"
            style={{ background: "var(--color-emerald-main)" }}
          />
          <h2
            className="font-serif leading-[1.05]"
            style={{ fontSize: "clamp(36px, 6vw, 84px)", color: "var(--color-ink)" }}
          >
            Real{" "}
            <em className="italic font-bold" style={{ color: "var(--color-emerald-main)" }}>
              Stories.
            </em>
          </h2>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className={`mt-10 sm:mt-16 flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 ${
          isTouchDevice ? "overflow-x-auto snap-x snap-mandatory scrollbar-none" : "overflow-hidden"
        }`}
        style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch" }}
      >
        {tripled.map((r, i) => (
          <article
            key={i}
            className={`glass-light shrink-0 p-6 sm:p-8 lg:p-10 group transition-all duration-500 hover:-translate-y-1 relative flex flex-col ${
              isTouchDevice ? "snap-center" : ""
            }`}
            style={{
              width: "min(500px, 85vw)",
              minHeight: "320px",
              borderRadius: "24px",
            }}
          >
            <div className="flex items-center gap-1 mb-4 sm:mb-6">
              {Array.from({ length: 5 }).map((_, k) => (
                <StarIcon
                  key={k}
                  size={14}
                  fill="var(--color-emerald-main)"
                  stroke="var(--color-emerald-main)"
                />
              ))}
            </div>
            <div className="relative flex-grow">
              <p
                className="font-serif line-clamp-4"
                style={{
                  fontSize: "clamp(16px, 3.5vw, 20px)",
                  color: "var(--color-ink)",
                  lineHeight: 1.55,
                }}
              >
                "{r.quote}"
              </p>
              {r.quote.length > 100 && (
                <button
                  onClick={() => setSelectedReview(r)}
                  className="mt-2 text-[12px] font-bold tracking-widest uppercase text-[var(--color-emerald-main)] hover:opacity-70 transition-opacity flex items-center gap-1"
                >
                  Read Story
                  <span className="text-[16px]">→</span>
                </button>
              )}
            </div>

            <div className="mt-8 flex items-center gap-3 sm:gap-4 border-t border-emerald-main/5 pt-6">
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl"
                style={{
                  background: "rgba(26,122,110,0.12)",
                  color: "var(--color-emerald-main)",
                }}
              >
                {r.name.charAt(0)}
              </div>
              <div>
                <p
                  className="font-bold"
                  style={{ color: "var(--color-emerald-main)", fontSize: "clamp(14px, 3vw, 18px)" }}
                >
                  {r.name}
                </p>
                <p
                  className="mt-0.5"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                  }}
                >
                  Patient
                </p>
              </div>
            </div>
            <CheckIcon
              size={20}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-emerald-main)" }}
            />
          </article>
        ))}
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 lg:p-12"
            style={{
              background:
                "radial-gradient(circle at center, rgba(26, 122, 110, 0.15) 0%, rgba(10, 31, 28, 0.95) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl p-8 sm:p-12 lg:p-16 rounded-[32px] relative shadow-[0_32px_64px_-16px_rgba(4,15,12,0.6)] ring-1 ring-white/10"
              style={{ backgroundColor: "var(--color-ivory)" }}
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-main/10 hover:bg-emerald-main/20 transition-all duration-300"
                aria-label="Close review"
              >
                <X size={20} style={{ color: "var(--color-emerald-main)" }} />
              </button>

              <div className="flex items-center gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, k) => (
                  <StarIcon
                    key={k}
                    size={18}
                    fill="var(--color-emerald-main)"
                    stroke="var(--color-emerald-main)"
                  />
                ))}
              </div>

              <p
                className="font-serif leading-relaxed"
                style={{ fontSize: "clamp(20px, 4vw, 28px)", color: "var(--color-ink)" }}
              >
                "{selectedReview.quote}"
              </p>

              <div className="mt-12 flex items-center gap-4 sm:gap-6 border-t border-emerald-main/10 pt-8">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-serif text-2xl sm:text-3xl shadow-inner"
                  style={{
                    background: "rgba(26,122,110,0.12)",
                    color: "var(--color-emerald-main)",
                  }}
                >
                  {selectedReview.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-bold"
                    style={{
                      color: "var(--color-emerald-main)",
                      fontSize: "clamp(18px, 3vw, 24px)",
                    }}
                  >
                    {selectedReview.name}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-faint)",
                    }}
                  >
                    Verified Patient
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
