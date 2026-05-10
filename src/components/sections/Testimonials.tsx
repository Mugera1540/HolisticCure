import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reviews = [
  { quote: "Dr. Anisa healed my 7-year chronic skin condition in 4 months. No steroids, no side effects. Truly miraculous.", name: "Nadia" },
  { quote: "My son's recurring respiratory infections stopped completely. We haven't visited a hospital in 2 years.", name: "Vaishali" },
  { quote: "My anxiety and sleep issues resolved naturally. Dr. Anisa listens deeply and treats the whole person.", name: "Tayyab" },
  { quote: "After years of hormonal issues, I finally found balance. Dr. Anisa's approach changed my life.", name: "Arsh" },
];

const StarIcon = ({ size = 14, fill = "none", stroke = "currentColor" }: { size?: number; fill?: string; stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = ({ size = 20, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to disable auto-scroll
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return; // Don't auto-scroll on touch devices
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
  }, [paused, isTouchDevice]);

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
          <div className="w-10 h-px mb-4 sm:mb-6" style={{ background: "var(--color-emerald-main)" }} />
          <h2
            className="font-serif leading-[1.05]"
            style={{ fontSize: "clamp(36px, 6vw, 84px)", color: "var(--color-ink)" }}
          >
            Real{" "}
            <em
              className="italic font-bold"
              style={{ color: "var(--color-emerald-main)" }}
            >
              Healing.
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
            className={`glass-light shrink-0 p-6 sm:p-8 lg:p-10 group transition-all duration-500 hover:-translate-y-1 relative ${
              isTouchDevice ? "snap-center" : ""
            }`}
            style={{
              width: "min(500px, 85vw)",
              minHeight: "260px",
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
            <p
              className="font-serif"
              style={{ fontSize: "clamp(16px, 3.5vw, 22px)", color: "var(--color-ink)", lineHeight: 1.55 }}
            >
              "{r.quote}"
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
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
    </section>
  );
}
