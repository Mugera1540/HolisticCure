import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = { title: string; desc: string };

const data: Record<string, Service[]> = {
  "Chronic & Internal": [
    {
      title: "Diabetes & Complications",
      desc: "Holistic regulation of blood sugar and prevention of long-term complications.",
    },
    {
      title: "Hypertension & Blood Pressure",
      desc: "Balancing blood pressure through stress reduction and metabolic support.",
    },
    {
      title: "Thyroid & Hormonal Imbalance",
      desc: "Restoring endocrine harmony for sustained energy and vitality.",
    },
    {
      title: "Comprehensive Chronic & Acute Care",
      desc: "Tailored holistic approaches for diverse, stubborn health challenges.",
    },
    {
      title: "Cancer, Tumors & Lymphoma",
      desc: "Enhancing the body’s resilience to combat and recover from cancerous conditions.",
    },
  ],
  "Women & Children": [
    {
      title: "PCOS (PCOD/PMOS) & Menstrual Health",
      desc: "Natural regulation of irregular menstrual cycles, hormonal balance, and symptom relief. Relief from symptoms of abnormal white discharge, painful periods, and other menstrual issues.",
    },
    {
      title: "Infertility Support (Male & Female)",
      desc: "Creating an optimal internal environment to gently support conception for both, viability, pregnancy, and delivery.",
    },
    {
      title: "General Women's Wellness",
      desc: "Comprehensive, natural support for female reproductive and intimate health during menarche, teenage, pregnancy, delivery, and menopause.",
    },
    {
      title: "Child Care & Behavioral Challenges",
      desc: "Safe, gentle remedies supporting growing bodies and developing minds. Gently treating conditions like recurrent coryza, asthma, tonsillitis, epilepsy, behavioral disorders etc.",
    },
    {
      title: "ADHD, ASD, Developmental Delays, Speech & Learning Disorders",
      desc: "Treating ASD, Autism, and neurodevelopmental disorders in a gentle way.",
    },
    {
      title: "Congenital Diseases & Immunity for Children",
      desc: "Gentle holistic care for conditions present since birth.",
    },
    
  ],
  "Pain & Digestion": [
    {
      title: "Migraine, Sinusitis & Headaches",
      desc: "Addressing root triggers for lasting relief and clear-headed vitality.",
    },
    {
      title: "Joint Pain, Arthritis & Spondylitis",
      desc: "Reducing inflammation and restoring mobility through natural healing.",
    },
    {
      title: "Kidney & Gallbladder Stones",
      desc: "Natural dissolution support and targeted prevention of recurrence.",
    },
    {
      title: "Piles, Fissures, Fistulas & Constipation",
      desc: "Gentle, effective regulation and healing of the lower digestive tract.",
    },
    {
      title: "Acidity, GERD, Stomach Ulcers, IBS & IBD",
      desc: "Healing the gut lining and restoring optimal, pain-free digestion.",
    },
    {
      title: "Other Painful Conditions & Digestive Issues",
      desc: "Care for other painful conditions and digestive issues.",
    },
  ],
  "Mind & Skin": [
    {
      title: "Sleep Disorders, Sleeplessness or Insomnia",
      desc: "Re-establishing natural circadian rhythms for deep, restorative rest, thereby improving the quality of sleep.",
    },
    {
      title: "Depression, Anxiety & Stress",
      desc: "Restoring emotional equilibrium and calming an overactive nervous system.",
    },
    {
      title: "Mood Disorders",
      desc: "Treating mood swings, bipolar disorder, emotional imbalances and improving general well-being.",
    },
    {
      title: "Skin Diseases",
      desc: "Healing from within to address ECZEMA, PSORIASIS, ACNE, and RASHES.",
    },
    {
      title: "Skin Allergies & Sensitivities",
      desc: "Strengthening the body's natural defenses without reliance on medications.",
    },
  ], 
  
  "Immunity & Respiratory": [
    
    {
      title: "Allergies & Sensitivities",
      desc: "Strengthening the body's natural defenses without reliance on medications. Treats Allergic rhinitis (Allergic Cold).",
    },
    {
      title: "Tonsillitis & Sinusitis",
      desc: "Building resilience against acute and chronic respiratory infections.",
    },
     {
      title: "Lower Respiratory Infections",
      desc: "Effective treatment for bronchitis, bronchiolitis, pneumonia, COPD, asthma, and other respiratory infections.",
    },
    {
      title: "Strengthening Immunity",
      desc: "Optimizing the body's natural defenses to enhance resilience against infections and health challenges.",
    },
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
            className="mb-4 sm:mb-6 text-emerald-glow font-bold"
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
            className="font-serif text-white leading-[1.05] font-bold"
            style={{ fontSize: "clamp(32px, 6vw, 84px)" }}
          >
            Treatments <em className="italic opacity-80">We Offer</em>
          </h2>
        </motion.div>

        {/* Enhanced Tab Switcher */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <div className="inline-flex items-center p-1.5 sm:p-2 glass-dark rounded-2xl sm:rounded-full overflow-x-auto scrollbar-none max-w-full">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-1 sm:gap-1.5 min-w-max">
              {tabs.map((t, i) => {
                const isActive = active === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    aria-pressed={isActive}
                    className="relative px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 sm:gap-2 group outline-none cursor-pointer min-h-[48px]"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-xl sm:rounded-full shadow-lg"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      />
                    )}

                    <span
                      className="relative z-10 font-mono text-[11px] sm:text-[12px] transition-colors font-bold"
                      style={{
                        opacity: isActive ? 1 : 0.8,
                        color: isActive ? "var(--color-emerald-deep)" : "white",
                      }}
                    >
                      0{i + 1}
                    </span>

                    <span
                      className="relative z-10 whitespace-nowrap font-bold transition-colors"
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: isActive ? "var(--color-emerald-deep)" : "white",
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
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-white/80 text-sm leading-relaxed font-bold">{s.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
