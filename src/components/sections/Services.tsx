import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = { title: string; desc: string };

const data: Record<string, Service[]> = {
  "Chronic & Internal": [
    { title: "Diabetes & Complications", desc: "Holistic regulation of blood sugar and prevention of long-term complications." },
    { title: "Hypertension & Blood Pressure", desc: "Balancing blood pressure through stress reduction and metabolic support." },
    { title: "Thyroid & Hormonal Imbalance", desc: "Restoring endocrine harmony for sustained energy and vitality." },
    { title: "Kidney & Gallbladder Stones", desc: "Natural dissolution support and targeted prevention of recurrence." },
    { title: "Comprehensive Chronic Care", desc: "Tailored holistic approaches for diverse, stubborn health challenges." },
  ],
  "Women & Children": [
    { title: "PCOS & Menstrual Health", desc: "Natural regulation of cycles, hormonal balance, and symptom relief." },
    { title: "Infertility Support", desc: "Creating an optimal internal environment to gently support conception." },
    { title: "General Women's Wellness", desc: "Comprehensive, natural support for female reproductive and intimate health." },
    { title: "Pediatric Care & Behavior", desc: "Safe, gentle remedies supporting growing bodies and developing minds." },
  ],
  "Pain & Digestion": [
    { title: "Migraine & Headaches", desc: "Addressing root triggers for lasting relief and clear-headed vitality." },
    { title: "Joint Pain & Arthritis", desc: "Reducing inflammation and restoring mobility through natural healing." },
    { title: "Acidity, GERD & IBS", desc: "Healing the gut lining and restoring optimal, pain-free digestion." },
    { title: "Piles & Constipation", desc: "Gentle, effective regulation and healing of the lower digestive tract." },
  ],
  "Mind, Skin & Immunity": [
    { title: "Sleep Disorders & Insomnia", desc: "Re-establishing natural circadian rhythms for deep, restorative rest." },
    { title: "Depression, Anxiety & Stress", desc: "Restoring emotional equilibrium and calming an overactive nervous system." },
    { title: "Skin Diseases", desc: "Healing from within to address eczema, psoriasis, acne, and rashes." },
    { title: "Allergies & Sensitivities", desc: "Strengthening the body's natural defenses without reliance on medications." },
    { title: "Tonsillitis & Sinusitis", desc: "Building resilience against acute and chronic respiratory infections." },
  ],
};

const tabs = Object.keys(data);

export function Services() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-[8rem] overflow-hidden"
      style={{ backgroundColor: "var(--color-emerald-mid)" }}
    >
      <div
        className="absolute -top-40 -right-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-20 animate-drift"
        style={{ background: "var(--color-emerald-glow)", filter: "blur(120px)" }}
      />

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="mb-4 sm:mb-6 text-emerald-glow"
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-emerald-glow)",
            }}
          >
            — Our Practice
          </p>
          <h2
            className="font-serif text-white leading-[1.05]"
            style={{ fontSize: "clamp(32px, 6vw, 84px)" }}
          >
            Treatments{" "}
            <em className="italic font-light opacity-80">We Offer</em>
          </h2>
        </motion.div>

        {/* Enhanced Tab Switcher */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <div className="inline-flex items-center p-1.5 sm:p-2 glass-dark rounded-full overflow-x-auto scrollbar-none max-w-full">
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              {tabs.map((t, i) => {
                const isActive = active === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className="relative px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 flex items-center gap-3 group outline-none"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                      />
                    )}
                    
                    <span 
                      className="relative z-10 font-mono text-[9px] sm:text-[10px] transition-colors"
                      style={{ 
                        opacity: isActive ? 1 : 0.4,
                        color: isActive ? "var(--color-emerald-glow)" : "white" 
                      }}
                    >
                      0{i + 1}
                    </span>
                    
                    <span
                      className="relative z-10 whitespace-nowrap font-medium transition-colors"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: isActive ? "white" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {t}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {data[active].map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass-dark rounded-sm p-6 sm:p-8 group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6"
                    style={{ border: "1px solid rgba(42, 140, 126, 0.5)" }}
                  >
                    <span
                      className="block w-2 h-2 rounded-full transition-transform duration-500 group-hover:scale-150"
                      style={{ background: "var(--color-emerald-glow)" }}
                    />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-white/60 text-sm leading-relaxed">{s.desc}</p>
                  <div
                    className="mt-6 sm:mt-8 flex items-center gap-2 transition-transform group-hover:translate-x-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--color-emerald-glow)",
                    }}
                  >
                    Explore <span>→</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
