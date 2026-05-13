import { motion } from "framer-motion";
import aboutImg from "../../assets/about-healing.jpg";

const pills = ["🌿 No Side Effects", "💧 100% Natural"];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-[8rem]"
      style={{ backgroundColor: "var(--color-cream)", color: "var(--color-ink)" }}
    >
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm group aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5]"
        >
          <img
            src={aboutImg}
            alt="Hands holding fresh herbs and homeopathic vials"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p
            className="mb-4 sm:mb-6"
            style={{
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-emerald-main)",
            }}
          >
            — Our Philosophy
          </p>
          <h2
            className="font-serif leading-[1.05]"
            style={{ fontSize: "clamp(32px, 6vw, 72px)", color: "var(--color-ink)" }}
          >
            Nature's <span className="font-bold">Own</span>
            <br />
            <em className="italic opacity-80">Medicine.</em>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="my-6 sm:my-8 h-px origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-emerald-light), transparent)",
            }}
          />

          <p
            className="max-w-xl"
            style={{ fontSize: "clamp(14px, 2.5vw, 16px)", lineHeight: 1.85, color: "var(--color-ink-soft)" }}
          >
            Homeopathy is a precise science that stimulates the body's own healing response.
            Dr. Anisa believes in the Mind-Body-Soul axis — treating the individual as a whole
            to restore balance and vitality from the root.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
            {pills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-transform hover:scale-105"
                style={{
                  background: "rgba(26, 122, 110, 0.08)",
                  border: "1px solid rgba(26, 122, 110, 0.2)",
                  color: "var(--color-emerald-main)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
