import { motion } from "framer-motion";
import { useState, type FormEvent, useEffect } from "react";
import { z } from "zod";
import courierBg from "../../assets/courier-bg.png";

const CLINIC_PHONE = "919324625457";

const TruckIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-5h-7v5a1 1 0 0 0 1 1h2" />
    <path d="M21 12l-5-5" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid 10-digit phone number")
    .regex(/^[+\d\s\-()]+$/, "Only digits and common symbols allowed"),
  medicines: z.string().trim().min(5, "Please list the medicines you need"),
  address: z.string().trim().min(10, "Please enter your full shipping address"),
  city: z.string().trim().min(2, "Enter your city"),
  state: z.string().trim().min(2, "Enter your state"),
  pincode: z
    .string()
    .trim()
    .length(6, "Pincode must be exactly 6 digits")
    .regex(/^\d+$/, "Pincode must contain only digits"),
  agreed: z.boolean().refine((val) => val === true, "You must acknowledge courier charges"),
});

type FormState = z.infer<typeof schema>;

export function Courier() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    medicines: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSearchingPincode, setIsSearchingPincode] = useState(false);

  // Auto-fill City/State based on Pincode
  useEffect(() => {
    const fetchPincodeData = async () => {
      if (form.pincode.length === 6 && /^\d+$/.test(form.pincode)) {
        setIsSearchingPincode(true);
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${form.pincode}`);
          const data = await response.json();
          if (data && data[0]?.Status === "Success") {
            const details = data[0].PostOffice[0];
            setForm((prev) => ({
              ...prev,
              city: details.Name,
              state: details.State,
            }));
            setErrors((prev) => ({ ...prev, pincode: undefined }));
          }
        } catch (err) {
          console.error("Pincode fetch failed", err);
        } finally {
          setIsSearchingPincode(false);
        }
      }
    };

    fetchPincodeData();
  }, [form.pincode]);

  const buildMessage = (d: FormState) =>
    `*Medicine Courier Request — Holistic Cure*%0A%0A` +
    `*Patient Name:* ${encodeURIComponent(d.name)}%0A` +
    `*WhatsApp:* ${encodeURIComponent(d.phone)}%0A%0A` +
    `*Medicines Required:*%0A${encodeURIComponent(d.medicines)}%0A%0A` +
    `*Shipping Address:*%0A${encodeURIComponent(d.address)}, ${encodeURIComponent(d.city)}, ${encodeURIComponent(d.state)} - ${encodeURIComponent(d.pincode)}%0A%0A` +
    `_I understand courier charges are extra depending on my location._`;

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    const whatsappUrl = `https://wa.me/${CLINIC_PHONE}?text=${buildMessage(data)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const fieldBase =
    "w-full bg-transparent border-b border-white/30 focus:border-[var(--color-berry)] outline-none text-white placeholder-white/40 py-3 transition-colors text-base";
  const labelBase = "block text-white/70 mb-2 font-medium";
  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[var(--color-emerald-deep)] relative overflow-hidden">
      {/* Background Image Overlay */}
      <img
        src={courierBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ filter: "blur(2px)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-deep)] via-[rgba(4,15,12,0.6)] to-[var(--color-emerald-deep)]" />

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-berry)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container-luxe relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-berry)]/10 border border-[var(--color-berry)]/20 text-white mb-8 drop-shadow-lg backdrop-blur-sm">
              <TruckIcon />
              <span className="uppercase tracking-[0.5em] text-[11px] font-bold">
                Courier Service
              </span>
            </div>
            <h1
              className="font-serif text-white mb-6 drop-shadow-2xl"
              style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
            >
              Medicine <em className="italic font-light opacity-80">Dispatch</em>
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              We offer doorstep delivery of prescribed medicines. Fill in
              your details below and we'll calculate the shipping for you.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[rgba(4,15,12,0.85)] backdrop-blur-xl p-8 sm:p-12 rounded-sm border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Patient Info */}
              <div className="space-y-10">
                <h3 className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-4">
                  Patient Information
                </h3>

                <div>
                  <label className={labelBase} style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldBase}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className={labelBase} style={labelStyle}>
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={fieldBase}
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className={labelBase} style={labelStyle}>
                    Medicines Required *
                  </label>
                  <textarea
                    rows={4}
                    value={form.medicines}
                    onChange={(e) => setForm({ ...form, medicines: e.target.value })}
                    className={`${fieldBase} resize-none`}
                    placeholder="List the medicines as prescribed by Dr. Anisa"
                  />
                  {errors.medicines && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.medicines}</p>
                  )}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-10">
                <h3 className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-4">
                  Shipping Destination
                </h3>

                <div>
                  <label className={labelBase} style={labelStyle}>
                    Pincode *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.pincode}
                      onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                      className={fieldBase}
                      placeholder="6 Digits"
                      maxLength={6}
                    />
                    {isSearchingPincode && (
                      <div className="absolute right-0 bottom-3">
                        <div className="w-4 h-4 border-2 border-[var(--color-berry)] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                  {errors.pincode && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.pincode}</p>
                  )}
                </div>

                <div>
                  <label className={labelBase} style={labelStyle}>
                    Full Address *
                  </label>
                  <textarea
                    rows={2}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className={`${fieldBase} resize-none`}
                    placeholder="House No, Building, Street, Landmark"
                  />
                  {errors.address && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelBase} style={labelStyle}>
                      City *
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className={`${fieldBase} ${form.pincode.length === 6 ? "opacity-50 cursor-not-allowed" : ""}`}
                      placeholder="Enter City"
                      readOnly={form.pincode.length === 6}
                    />
                    {errors.city && (
                      <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelBase} style={labelStyle}>
                      State *
                    </label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className={`${fieldBase} ${form.pincode.length === 6 ? "opacity-50 cursor-not-allowed" : ""}`}
                      placeholder="Enter State"
                      readOnly={form.pincode.length === 6}
                    />
                    {errors.state && (
                      <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.state}</p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        checked={form.agreed}
                        onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
                          form.agreed
                            ? "bg-[var(--color-berry)] border-[var(--color-berry)]"
                            : "border-white/30 group-hover:border-white/60"
                        }`}
                      >
                        {form.agreed && (
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                          >
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[13px] text-white/70 leading-relaxed select-none font-medium">
                      I understand that courier charges will be calculated and added to the total
                      cost based on my location. *
                    </span>
                  </label>
                  {errors.agreed && (
                    <p className="mt-2 text-[11px] text-red-300 font-medium">{errors.agreed}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <button
                type="submit"
                className="group relative overflow-hidden px-12 py-5 bg-white text-[color:var(--color-emerald-deep)] font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-500 hover:bg-[var(--color-berry)] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Submit & Open WhatsApp
                  <span className="transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </button>
            </div>
          </motion.form>

          <div className="mt-12 flex justify-center">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-center text-white/70 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold shadow-xl">
              Average delivery time: 2-3 days (Local) | 4-6 days (Outstation)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
