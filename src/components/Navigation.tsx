import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/HC HOMEOPATHY LOGO FINAL-Photoroom.png";

const MenuIcon = ({ size = 24 }: { size?: number }) => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ size = 24 }: { size?: number }) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const links = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Our Doctor", href: "/#doctor" },
  { label: "Medicine Courier", href: "/courier" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 safe-top ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between py-3 sm:py-4">
          <a href="/#hero" className="flex items-center gap-5 group">
            <div className="relative w-20 sm:w-28 h-12 sm:h-14 flex items-center justify-center">
              <img
                src={logo}
                alt="Holistic Cure Logo"
                className="h-28 sm:h-44 w-auto object-contain absolute top-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-serif font-bold text-white uppercase tracking-[0.2em]"
                style={{ fontSize: "18px" }}
              >
                Holistic Cure
              </span>
              <span
                className="text-white/40 mt-1 uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.3em" }}
              >
                Dr. Anisa's Clinic
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="story-link text-white/70 hover:text-white transition-colors"
                style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/booking"
              className="border border-white/50 px-5 py-2.5 text-white hover:bg-white hover:text-emerald-deep transition-all duration-300"
              style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Book Appointment
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] bg-emerald-deep flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 lg:hidden safe-bottom"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="font-serif font-light text-white min-h-[44px] flex items-center"
                  style={{ fontSize: "clamp(28px, 7vw, 48px)", lineHeight: 1.1 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 pb-4">
              <a
                href="tel:+919324625457"
                className="block font-serif text-2xl sm:text-3xl"
                style={{ color: "var(--color-gold)" }}
              >
                +91 93246 25457
              </a>
              <p
                className="text-white/30"
                style={{ fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase" }}
              >
                Mumbai &amp; Indore
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
