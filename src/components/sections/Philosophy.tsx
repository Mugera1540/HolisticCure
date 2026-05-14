import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import philosophyBg from "../../assets/philosophy-bg.jpg";
import homeopathyDetails from "../../assets/homeopathy-details.png";

export function Philosophy() {
  const [isExpanded, setIsExpanded] = useState(false);

  const detailedPillars = [
    {
      title: "The Law of Similars",
      desc: "Based on 'Similia Similibus Curentur'—the principle that a substance that can cause symptoms in a healthy person can, in minute doses, treat similar symptoms in a sick person.",
    },
    {
      title: "Individualization",
      desc: "Every patient is unique. We consider your emotional state, lifestyle, and physical symptoms to find a remedy that resonates with your entire being, not just the diagnosis.",
    },
    {
      title: "Potentization",
      desc: "Our medicines undergo a unique process of serial dilution and succussion (vigorous shaking), which awakens the energetic footprint of the substance while removing all toxicity.",
    },
    {
      title: "Vital Force",
      desc: "Homeopathy works by stimulating your body's inherent 'Vital Force'—the self-healing mechanism that maintains balance and harmony within your system.",
    },
  ];

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 sm:py-32"
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
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(4,15,12,0.85) 100%)",
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-20 sm:h-32"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(61,184,159,0.6), transparent)",
        }}
      />

      <div className="container-luxe relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto px-4"
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
                body: "Our signature lactose-free globules are the carrier for high-potency energy remedies, ensuring deep absorption.",
              },
              {
                title: "Dynamic Healing",
                body: "We focus on the 'Vital Force'—addressing the root energetic imbalance rather than just suppressing symptoms.",
              },
            ].map((c) => (
              <div key={c.title} className="glass-dark rounded-sm p-6 sm:p-8 text-left shadow-2xl">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white">{c.title}</h3>
                <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-12 sm:mt-16 group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white overflow-hidden transition-all duration-500"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
            <span className="relative font-medium tracking-widest text-[10px] uppercase">
              {isExpanded ? "Show Less" : "Know more about homeopathy"}
            </span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="relative text-emerald-400"
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-20 lg:mt-32 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 space-y-10">
                  {detailedPillars.map((pillar, idx) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="relative pl-6"
                    >
                      <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <h4 className="text-white font-serif italic text-xl mb-2">{pillar.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="lg:col-span-7 relative"
                >
                  <div className="aspect-[4/5] sm:aspect-square rounded-sm overflow-hidden shadow-2xl relative group">
                    <img
                      src={homeopathyDetails}
                      alt="Homeopathic Remedies"
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-2">
                        Potentized Energy
                      </p>
                      <p className="text-white/80 text-sm font-serif italic">
                        Pure, natural healing that respects your body's innate wisdom.
                      </p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 border border-emerald-500/20 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-white/5 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-20 sm:h-32"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(61,184,159,0.6), transparent)",
        }}
      />
    </section>
  );
}
