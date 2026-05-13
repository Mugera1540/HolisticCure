import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import dropletImg from "../../assets/droplet.jpg";

const CLINIC_PHONE = "919324625457";

const PhoneIcon = ({ size = 12 }: { size?: number }) => (
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
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = ({ size = 14 }: { size?: number }) => (
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
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ChevronDownIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const TIME_SLOTS = [
  "Morning (11:00 AM – 1:00 PM)",
  "Evening (6:00 PM – 9:00 PM)",
  "Flexible / Doctor's choice",
];

const CONSULTATION_TYPES = ["Online Consultation", "In-person Visit"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Only digits, spaces and + - ( ) allowed"),
  type: z
    .string({ required_error: "Please select consultation mode" })
    .min(1, "Please select consultation mode"),
  slot: z
    .string({ required_error: "Please select preferred time" })
    .min(1, "Please select preferred time"),
  note: z.string().trim().max(500, "Please keep under 500 characters").optional(),
});

type FormState = z.infer<typeof schema>;

export function Booking() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    type: "",
    slot: "",
    note: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const buildMessage = (d: FormState) =>
    `Appointment Request — Dr. Anisa's Holistic Cure%0A%0A` +
    `Name: ${encodeURIComponent(d.name)}%0A` +
    `Phone: ${encodeURIComponent(d.phone)}%0A` +
    `Type: ${encodeURIComponent(d.type)}%0A` +
    `Preferred time: ${encodeURIComponent(d.slot)}%0A` +
    `Symptoms / Notes: ${encodeURIComponent(d.note || "—")}`;

  const validate = (): FormState | null => {
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return null;
    }
    setErrors({});
    return result.data;
  };

  const submitWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    window.open(
      `https://wa.me/${CLINIC_PHONE}?text=${buildMessage(data)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const fieldBase =
    "w-full bg-transparent border-b border-white/20 focus:border-[var(--color-gold)] outline-none text-white placeholder-white/40 py-3 transition-colors text-base";
  const labelBase = "block text-white/60 mb-2";
  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-4 sm:pb-8 lg:pb-12"
      style={{ backgroundColor: "var(--color-emerald-deep)" }}
    >
      {/* Droplet background — blurred */}
      <img
        src={dropletImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(8px)", opacity: 0.35, transform: "scale(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,15,12,0.85) 0%, rgba(4,15,12,0.5) 50%, rgba(4,15,12,0.9) 100%)",
        }}
      />
      <div
        className="absolute top-1/4 -left-20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full opacity-30 animate-drift"
        style={{ background: "var(--color-emerald-glow)", filter: "blur(120px)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full opacity-20 animate-drift"
        style={{
          background: "var(--color-gold)",
          filter: "blur(120px)",
          animationDelay: "-7s",
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 sm:h-16"
        style={{ background: "linear-gradient(180deg, transparent, rgba(61,184,159,0.5))" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="container-luxe relative z-10 max-w-3xl"
      >
        <div className="text-center">
          <h2
            className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(32px, 7vw, 84px)" }}
          >
            Request Your{" "}
            <em className="italic font-bold" style={{ color: "var(--color-gold)" }}>
              Appointment.
            </em>
          </h2>
          <p className="mt-4 text-white/40 uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-bold">
            Online or In-Person
          </p>
          <p
            className="mt-6 sm:mt-8 text-white/60 max-w-xl mx-auto text-sm sm:text-base"
            style={{ lineHeight: 1.7 }}
          >
            Share a few details and Dr. Anisa's team will confirm your consultation within hours —
            via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={submitWhatsApp}
          noValidate
          className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-6 sm:gap-y-8"
        >
          <div>
            <label htmlFor="name" className={labelBase} style={labelStyle}>
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={fieldBase}
              placeholder="Anisa Shaikh"
              maxLength={80}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="mt-2 text-xs text-red-300/90">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className={labelBase} style={labelStyle}>
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={fieldBase}
              placeholder="+91 98765 43210"
              maxLength={20}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="mt-2 text-xs text-red-300/90">{errors.phone}</p>}
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div>
              <label htmlFor="type" className={labelBase} style={labelStyle}>
                Consultation Mode *
              </label>
              <div className="relative">
                <select
                  id="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={`${fieldBase} appearance-none cursor-pointer pr-8`}
                  style={{ colorScheme: "dark" }}
                  aria-invalid={!!errors.type}
                >
                  <option value="" disabled className="text-white/20">
                    Select Mode...
                  </option>
                  {CONSULTATION_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[var(--color-emerald-deep)]">
                      {t}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <ChevronDownIcon />
                </div>
              </div>
              {errors.type && <p className="mt-2 text-xs text-red-300/90">{errors.type}</p>}
            </div>

            <div>
              <label htmlFor="slot" className={labelBase} style={labelStyle}>
                Preferred Time *
              </label>
              <div className="relative">
                <select
                  id="slot"
                  value={form.slot}
                  onChange={(e) => setForm({ ...form, slot: e.target.value })}
                  className={`${fieldBase} appearance-none cursor-pointer pr-8`}
                  style={{ colorScheme: "dark" }}
                  aria-invalid={!!errors.slot}
                >
                  <option value="" disabled className="text-white/20">
                    Select Time...
                  </option>
                  {TIME_SLOTS.map((s) => (
                    <option key={s} value={s} className="bg-[var(--color-emerald-deep)]">
                      {s}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <ChevronDownIcon />
                </div>
              </div>
              {errors.slot && <p className="mt-2 text-xs text-red-300/90">{errors.slot}</p>}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="note" className={labelBase} style={labelStyle}>
              Symptoms / Notes
            </label>
            <textarea
              id="note"
              rows={3}
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className={`${fieldBase} resize-none`}
              placeholder="Briefly describe what brings you to the clinic…"
              maxLength={500}
              aria-invalid={!!errors.note}
            />
            {errors.note && <p className="mt-2 text-xs text-red-300/90">{errors.note}</p>}
            <p className="mt-2 text-right text-white/30 text-xs">{form.note?.length ?? 0}/500</p>
          </div>

          <div className="md:col-span-2 mt-2 sm:mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 text-white transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto"
              style={{
                backgroundColor: "#25D366",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#128C7E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
            >
              <WhatsAppIcon size={14} /> Send via WhatsApp
            </button>
          </div>

          <div className="md:col-span-2 mt-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white/5 backdrop-blur-sm rounded-sm border border-white/5">
            <div className="flex items-center gap-3 text-white/60 text-[11px] sm:text-xs uppercase tracking-wider font-medium">
              <div className="w-8 h-8 rounded-full bg-[var(--color-berry)]/20 flex items-center justify-center text-[var(--color-berry)]">
                <PhoneIcon size={14} />
              </div>
              <span>
                Call directly: <br />
                <a
                  href={`tel:+${CLINIC_PHONE}`}
                  className="text-white font-bold hover:text-[var(--color-gold)] transition-colors text-sm sm:text-base tracking-normal"
                >
                  +91 93246 25457
                </a>
              </span>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-3 text-white/60 text-[11px] sm:text-xs uppercase tracking-wider font-medium">
              <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)]">
                <MailIcon size={14} />
              </div>
              <span>
                Official Email: <br />
                <a
                  href="mailto:holistic.cure26@gmail.com"
                  className="text-white font-bold hover:text-[var(--color-gold)] transition-colors text-sm sm:text-base tracking-normal"
                >
                  holistic.cure26@gmail.com
                </a>
              </span>
            </div>
          </div>
        </form>

        <MapSection />
      </motion.div>
    </section>
  );
}

function MapSection() {
  return (
    <div className="mt-24 sm:mt-32 border-t border-white/5 pt-20 sm:pt-24">
      <div className="text-center mb-12 sm:mb-16">
        <h3
          className="font-serif font-light text-white mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
        >
          Our{" "}
          <em className="italic font-bold" style={{ color: "var(--color-gold)" }}>
            Locations.
          </em>
        </h3>
        <p className="text-white/40 uppercase tracking-[0.3em] text-[10px]">Mumbai & Indore</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Mumbai Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Manju+Nursing+Home+Chembur+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/[0.03] p-5 sm:p-6 rounded-sm border border-white/10 hover:border-[var(--color-gold)]/50 transition-all duration-500 hover:bg-white/[0.05]"
          >
            <div className="aspect-[16/10] sm:aspect-video w-full rounded-sm overflow-hidden grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 transition-all duration-1000 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.852494056247!2d72.88470777595568!3d19.060173382133276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c93673751%3A0x6e76cf0bc6488d7!2sManju%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1715574400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                title="Mumbai Clinic Location"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h4 className="text-white font-medium mb-2 tracking-wide group-hover:text-[var(--color-gold)] transition-colors">
                  Mumbai Clinic
                </h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[240px]">
                  Ground floor, Manju Nursing Home, opposite Bhakti Bhavan next to Sitla Hospital, Sindhi society Chembur Mumbai - 400071
                </p>
              </div>
              <span className="text-[10px] text-[var(--color-gold)] uppercase tracking-[0.2em] border-b border-[var(--color-gold)]/30 pb-1 group-hover:border-[var(--color-gold)] transition-colors">
                Get Directions
              </span>
            </div>
          </a>
        </motion.div>

        {/* Indore Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Om+Gurudev+Complex+Scheme+no+54+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/[0.03] p-5 sm:p-6 rounded-sm border border-white/10 hover:border-[var(--color-gold)]/50 transition-all duration-500 hover:bg-white/[0.05]"
          >
            <div className="aspect-[16/10] sm:aspect-video w-full rounded-sm overflow-hidden grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 transition-all duration-1000 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.529241957241!2d75.89389277592473!3d22.755225182183276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0012345678%3A0x1234567890abcdef!2sOm%20Gurudev%20Complex!5e0!3m2!1sen!2sin!4v1715574500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                title="Indore Clinic Location"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h4 className="text-white font-medium mb-2 tracking-wide group-hover:text-[var(--color-gold)] transition-colors">
                  Indore Clinic
                </h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[240px]">
                  G -04, Om Gurudev Complex, Scheme no 54, Oppo Appolo Hospital, below SBI bank, Indore (MP)
                </p>
              </div>
              <span className="text-[10px] text-[var(--color-gold)] uppercase tracking-[0.2em] border-b border-[var(--color-gold)]/30 pb-1 group-hover:border-[var(--color-gold)] transition-colors">
                Get Directions
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
