import { motion } from "framer-motion";
import dropletImg from "@/assets/droplet.jpg";

export function Droplet() {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-emerald-darkest)" }}
    >
      <motion.img
        src={dropletImg}
        alt=""
        aria-hidden
        loading="lazy"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,21,18,0.8) 0%, rgba(2,21,18,0.2) 50%, rgba(2,21,18,0.95) 100%)",
        }}
      />

      {/* Ripple rings — responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1.2, 2.4].map((delay) => (
          <span
            key={delay}
            className="absolute w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[400px] md:h-[400px] rounded-full border animate-ripple"
            style={{ borderColor: "rgba(255,255,255,0.25)", animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4 }}
        className="container-luxe relative z-10 text-center px-4"
      >
        <h2
          className="font-serif font-light text-white leading-[0.95]"
          style={{ fontSize: "clamp(36px, 10vw, 120px)" }}
        >
          ONE DROP.
          <br />
          <em
            className="italic font-bold"
            style={{ color: "var(--color-emerald-glow)" }}
          >
            INFINITE HEALING.
          </em>
        </h2>
        <div
          className="mx-auto mt-8 sm:mt-12 w-20 sm:w-32 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-emerald-glow), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
