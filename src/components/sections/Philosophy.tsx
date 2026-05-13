import { motion } from "framer-motion";
import philosophyBg from "../../assets/philosophy-bg.jpg";

export function Philosophy() {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32"
      style={{ backgroundColor: "var(--color-emerald-deep)" }}
    >
      <img
        src={philosophyBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ filter: "grayscale(20%)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,15,12,0.92) 0%, rgba(4,15,12,0.4) 50%, rgba(4,15,12,0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(4,15,12,0.85) 100%)",
        }}
      />

      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-20 sm:h-32"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(61,184,159,0.6), transparent)",
        }}
      />
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-20 sm:h-32"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(61,184,159,0.6), transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="container-luxe relative z-10 text-center max-w-4xl px-4 shadow-soft"
      >
        <h2
          className="font-serif font-light text-white leading-[1.05]"
          style={{ fontSize: "clamp(28px, 7vw, 92px)" }}
        >
          Choose <em className="italic font-light opacity-80">Wellness</em>
          <br />
          <span className="font-bold">Choose Homeopathy.</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-white/60 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
          Holistic Cure is the premier homeopathy provider that offers excellent medical care,
          with personalized attention &amp; consultation with the highest quality medicines.
        </p>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "The Globule",
              body:
                "Our signature lactose-free globules are the carrier for high-potency energy remedies, ensuring deep absorption.",
            },
            {
              title: "Dynamic Healing",
              body:
                "We focus on the 'Vital Force'—addressing the root energetic imbalance rather than just suppressing symptoms.",
            },
          ].map((c) => (
            <div key={c.title} className="glass-dark rounded-sm p-6 sm:p-8 text-left shadow-2xl">
              <h3 className="font-serif italic text-2xl sm:text-3xl text-white">{c.title}</h3>
              <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
