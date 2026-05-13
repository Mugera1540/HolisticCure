import { lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../../assets/hero-botanical.jpg";

const Hero3D = lazy(() => import("../Hero3D"));

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "var(--color-emerald-deep)" }}
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ filter: "grayscale(20%)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,15,12,0.85) 0%, rgba(61, 26, 42, 0.2) 50%, rgba(4,15,12,1) 100%)",
        }}
      />

      {/* Floating orbs — responsive sizing */}
      <div
        className="absolute -top-32 -left-24 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full opacity-50 animate-drift"
        style={{ background: "var(--color-emerald-light)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-10 -right-24 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] rounded-full opacity-30 animate-drift"
        style={{ background: "var(--color-gold)", filter: "blur(80px)", animationDelay: "-6s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px] rounded-full opacity-40 animate-drift"
        style={{ background: "var(--color-emerald-glow)", filter: "blur(70px)", animationDelay: "-12s" }}
      />
      <div
        className="absolute top-1/4 -right-12 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full opacity-25 animate-drift"
        style={{ background: "var(--color-berry-glow)", filter: "blur(90px)", animationDelay: "-3s" }}
      />

      {/* 3D Droplet */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Floating leaf SVGs — hidden on mobile to avoid clutter */}
      <svg
        className="absolute top-24 right-12 w-16 h-16 text-emerald-glow/30 animate-float hidden sm:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1 .2 1.5.2C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
      </svg>
      <svg
        className="absolute bottom-32 left-16 w-20 h-20 text-emerald-light/20 animate-float hidden sm:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        style={{ animationDelay: "-4s" }}
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1 .2 1.5.2C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
      </svg>

      <div className="container-luxe relative z-10 text-center max-w-[860px] px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-white leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(42px, 10vw, 132px)" }}
        >
          Healing{" "}
          <em className="font-light italic" style={{ color: "var(--color-emerald-glow)" }}>
            From
          </em>
          <br />
          <span className="font-semibold">Within.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-white/60 mx-auto max-w-xl px-2"
          style={{ fontSize: "clamp(16px, 2.5vw, 22px)", lineHeight: 1.7, fontWeight: 300 }}
        >
          The white pills that lead to a colourful life
        </motion.p>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4"
        >
          <a
            href="/booking"
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-emerald-deep font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all duration-500 hover:bg-[var(--color-gold)] hover:text-white hover:-translate-y-1 shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Book Appointment
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </span>
          </a>

          <a
            href="/courier"
            className="group w-full sm:w-auto px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all duration-500 hover:bg-white/10 hover:border-white hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-3">
              Medicine Courier
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — safe area aware */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 safe-bottom hidden sm:flex">
        <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
