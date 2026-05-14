import { motion } from "framer-motion";
import drImg from "../../assets/Doctor.jpg";

const credentials = [
  "BHMS Graduate",
  "IACH Greece Diploma",
  "Certified Graphologist",
  "Mind-Body-Soul Specialist",
];

export function Doctor() {
  return (
    <section
      id="doctor"
      className="py-20 sm:py-24 lg:py-[8rem]"
      style={{ backgroundColor: "var(--color-ivory)", color: "var(--color-ink)" }}
    >
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Corner accents — smaller on mobile */}
          {[
            "top-0 left-0 border-t border-l",
            "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((cls, i) => (
            <span
              key={i}
              className={`absolute w-5 h-5 sm:w-7 sm:h-7 ${cls} z-10`}
              style={{ borderColor: "rgba(26, 122, 110, 0.4)" }}
            />
          ))}
          <div className="overflow-hidden relative aspect-[2/3] sm:aspect-[3/4.5] rounded-sm shadow-soft ring-1 ring-emerald-900/5">
            <img
              src={drImg}
              alt="Dr. Anisa Shaikh — Best Homeopathy Doctor in Mumbai and Indore"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p
            className="mb-4 sm:mb-6"
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-emerald-main)",
            }}
          >
            — Our Doctor
          </p>
          <h2
            className="font-serif leading-[1.05]"
            style={{ fontSize: "clamp(30px, 6vw, 76px)", color: "var(--color-ink)" }}
          >
            Meet <span className="font-bold">Dr. Anisa</span>
            <br />
            <em className="italic opacity-80">Shaikh.</em>
          </h2>

          <p
            className="mt-6 sm:mt-8 max-w-xl"
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: 1.85,
              color: "var(--color-ink-soft)",
            }}
          >
            Dr. Anisa is a passionate Homeopath trained under some of the most affluent and
            experienced Homeopaths worldwide. Holding a Diploma from the{" "}
            <strong style={{ color: "var(--color-emerald-main)" }}>
              International Academy of Classical Homeopathy in Greece
            </strong>
            , she firmly believes Homeopathy is the best method of treatment as it works on the
            Mind-Body-Soul axis &amp; cures the disease from the root.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-3 max-w-md">
            {credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs"
                style={{
                  background: "rgba(26, 122, 110, 0.08)",
                  border: "1px solid rgba(26, 122, 110, 0.2)",
                  color: "var(--color-emerald-main)",
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <div
            className="mt-8 sm:mt-10 pt-6 sm:pt-8 space-y-6"
            style={{ borderTop: "1px solid rgba(26, 122, 110, 0.15)" }}
          >
            {/* Mumbai Section */}
            <div className="flex items-start gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ background: "var(--color-emerald-main)" }}
              />
              <div>
                <p
                  className="text-[11px] uppercase tracking-wider font-semibold mb-1"
                  style={{ color: "var(--color-emerald-main)" }}
                >
                  Mumbai Clinic
                </p>
                <p className="text-xs sm:text-sm" style={{ color: "var(--color-ink-soft)" }}>
                  Ground floor, Manju Nursing Home, opposite Bhakti Bhavan next to Sitla Hospital,
                  Sindhi society Chembur Mumbai - 400071
                </p>
              </div>
            </div>

            {/* Indore Section */}
            <div className="flex items-start gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ background: "var(--color-emerald-main)" }}
              />
              <div>
                <p
                  className="text-[11px] uppercase tracking-wider font-semibold mb-1"
                  style={{ color: "var(--color-emerald-main)" }}
                >
                  Indore Clinic
                </p>
                <p className="text-xs sm:text-sm" style={{ color: "var(--color-ink-soft)" }}>
                  G -04, Om Gurudev Complex, Scheme no 54, Oppo Appolo Hospital, below SBI bank,
                  Indore (MP)
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex items-start gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ background: "var(--color-emerald-main)" }}
              />
              <div>
                <p
                  className="text-[11px] uppercase tracking-wider font-semibold mb-1"
                  style={{ color: "var(--color-emerald-main)" }}
                >
                  Contact Info
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a
                    href="mailto:holistic.cure26@gmail.com"
                    className="text-xs sm:text-sm hover:text-emerald-600 transition-colors underline decoration-emerald-200"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    holistic.cure26@gmail.com
                  </a>
                  <span className="hidden sm:inline text-emerald-200">|</span>
                  <a
                    href="tel:+919324625457"
                    className="text-xs sm:text-sm hover:text-emerald-600 transition-colors font-medium"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    +91 93246 25457
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs ml-5" style={{ color: "var(--color-ink-faint)" }}>
              Consultations available by appointment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
