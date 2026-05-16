import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    quote:
      "I had a wonderful experience with Dr. Anisa. During my pregnancy, I was struggling with severe migraines and piles, which made things very uncomfortable. Dr. Anisa was extremely understanding and provided safe and effective treatment options that gave me real relief without affecting my baby’s health. She also closely monitored my baby's growth and always explained everything clearly, which gave me so much confidence and peace of mind. Her caring nature and professional expertise truly made a big difference in my pregnancy journey. Highly recommended for any expecting mother!",
    name: "Akshata Tawade",
  },
  {
    quote:
      "I had a beautiful experience with Dr. Anisa. Such a calm and relaxed personality. Very composed and genuine Dr. I got an instant feeling that my gynaecological issue will be resolved when I met her the first time itself. She got to the root cause and now with her medication I am cured. Thanks so much Dr. Keep up the good work. God bless 😇🙏",
    name: "Latha",
    role: "Local Guide",
  },
  {
    quote:
      "I had been struggling to do my daily activities due to fingers and all joints swelling which had started 5 years back, I had no strength to move or lift things and it got worse day by day as it kept reoccuring with any simple physical work I did. I had a 1.5 year old child and I was not able to hold or lift him with this pain. A friend suggested to try homeopathy as she had similar problems and found cure. I met Dr. Anisa, who was a very smart, patient and kind person who understood my health issues. She went through my detailed health history to find the cause of my pain, I had skin enzymes on my fingers and feet which I had ignored as my swellings in joints were my biggest hurdle but Dr. Anisa herself noticed my skin that had cuts and rough dark patches due to bleeding a layer of skin was lost which never grew and within just 1 month the results of treatment started showing. I continued treatment for another 2 months and got back my original strength and found cure, the swellings dint reappear with any work I did and my skin got back to normal without any external efforts. The doctor not just focused on my joints related pain but she gave priority to my overall mental health, sleep and to build physical strength. I would sincerely thank the doctor. I hope whoever is in pain finds their cure here with homeopathy treatment.",
    name: "Chaand Ckd",
  },
  {
    quote:
      "Dr. Anisa is incredible. Not only has she taken great care of my health, but she is also lovely to speak with at every appointment. It's rare to find a doctor who combines such personal touches and genuine care for a patient as a person with outstanding medical expertise. I had a nerve compression problem and was advised to undergo surgery by a spine surgeon. However, after showing my reports to Dr. Anisa, she successfully cured my condition without any surgery. I am very happy and highly recommend her!",
    name: "Sunita Bhelarao",
  },
  {
    quote:
      "Just had my first session with Dr. Anisa. For the first time ever I felt like my issue was fully addressed. Dr. Anisa asked me many questions to understand the root cause of my problem. No other doctor has tried to understand my problem this way. I've been experiencing back since 9 years now, been to more than 20-30 doctors during this time, not once did I feel satisfied with the doctors. Only if there was an option to give 100 stars!",
    name: "Akhila Vishnu",
  },
  {
    quote:
      "Excellent Doctor! Dr. Anisa is very humble and polite. Initially, we visited her clinic for my mother's acidity and stomach-related problems. My mom had been suffering for the last 10–12 years. Many lakhs of rupees were spent in big hospitals such as Jaslok Hospital, Bombay Hospital, and Sushrut Hospital, but there was no permanent relief from such big hospitals. After taking homeopathy pills and medicines from Dr. Anisa, my mom got complete relief. She cured my mom in a short period. My mom is feeling very well now. It's really AMAZING..! Of course, our family was impressed by this treatment, the doctor's knowledge, expertise, and professionalism throughout my mom's treatment, and then started homeopathy treatment for all family members—my sister, my father, and myself too. It would not be an exaggeration to say that she is a magic doctor who has magic in her hands to heal patients quickly. Dr. Anisa ma'am has now become our family doctor! She has been a real problem solver and helped us a lot. There is so much power in her counseling that depression is reduced tremendously and the patient becomes energetic and positive. She is understanding, talented, and the best homeopathy doctor in Mumbai. Highly recommended for any health-related problems.",
    name: "ADV. ABHIJIT MILIND TOPKAR",
  },
  {
    quote:
      "I am very glad to mention about my diagnosis of Hair fall problems with extreme severity that I was almost in depression , then I came to know about Dr. Anisa Shaikh & her Modern homeopathy cure for hair loss problems & in just almost 2 months my hairfall rate decreased dramatically, I was just surprised looking at the results. Also she treated my depression issues simultaneously and also improved my immune system by her best medicines. Now Dr. Anisa is just like our Family doctor as my parents are also planning for their Diabetes treatment from her.",
    name: "Mukesh Walunj",
  },
  {
    quote:
      "I was initially advised to undergo spinal surgery for a chronic condition that had been causing me persistent pain and discomfort. I was understandably apprehensive about the prospect of surgery and decided to seek a second opinion. That's when I found Dr. Anisa, and I'm so grateful that I did. Dr. Anisa Shaikh is an exceptional lady who is not only knowledgeable and skilled in her field but also genuinely caring and compassionate. From the moment I met her, I felt reassured and confident in her ability to help me. She took the time to listen to my concerns, thoroughly evaluate my condition, and develop a personalized treatment plan that addressed my specific needs. Over the course of just one month of treatment, I experienced a remarkable improvement in my condition. The pain and discomfort that had plagued me for so long began to subside, and I was able to resume many of the activities that had previously been challenging or impossible. One aspect i would like to share, medication were small in quantity and no side effect. Thanks to Dr. Anisa's expertise and care, I was able to avoid surgery and achieve a level of health and wellness that I never thought possible. I would highly recommend her to anyone in need of spinal care or treatment.",
    name: "Shankar Bhole",
  },
  {
    quote:
      "I had consulted Dr. Anisa for two of my health problems. First being migraine and second one was I had developed some rashes on my skin, cause being unknown. For several years I tried to resolve my skin issue and consulted various dermatologist for the same. But none of their treatments helped even reduce the rash. I had given up to be honest. Also I have migraine since more than 15 years now. Whenever I had an episode I use to end up vomiting and my day use to crash down with zero productivity. I was taking allopathy pain killers which only helped once I got migraine. There was literally no solution to my unbearable headaches. As I consulted Dr. Anisa she invested alot of her valuable time to understand my case and note down my history. She gave me homeopathic medicine and asked to take it only for a couple of weeks. The results were unimaginable, my rashes on the skin completely disappeared and my migraine episodes have reduced drastically. I no longer get severe headaches. I don't end up throwing up as well. I am so thankful to Dr. Anisa for all the help and value she has added for improving my health. She's truly one of the Best Homeopath in Chembur. I will surely recommend her to anyone who is looking forward for a good homeopathic doctor.",
    name: "Saima Shaikh",
  },
  {
    quote:
      "Great experience as a first timer. The medication that I received from Dr. Anisa were very helpful to me. She's lovely to speak with at every appointment getting a proper informed about my diagnosis. She really strives to give the best care possible to each of her patients. I would have no qualms recommending her",
    name: "Sanjivani Makasare",
  },
  {
    quote:
      "Get Treatment to child can't speak clear voice. I am so happy to share the honest review. I am very glad to mention about my daughter diagnosis of she can't speak clear age of 15 moths after started treatment by Dr. Anisa she is getting cure and clear speaking voice after treatment of 6 months . she is very good Doctor to understand child behavior & Growth.",
    name: "Narsingh Sharma",
  },
  {
    quote:
      "I highly recommend Dr. Anisa Shaikh, I had begun my journey with her for my PCOS and i have seen significant improvement with treatment which includes significant reduction in facial hair... Healthy weight loss and regular and normal menstrual cycle. I have never been this healthy. I used to have migraine issues , which is completely gone. Her treatment also helped me when i had gotten COVID-19. I have acute cold during weather change, homeopathy has helped to treat this as well. I completely rely on homeopathy.",
    name: "Nadia D'souza",
  },
  {
    quote:
      "I have been treated by Dr. Anisa for last 8 months for my acid reflux and low immunity problems. I feel I benefit greatly from homeopathy medication prescribed by her. Continual support I received from Dr. Anisa over phone as well is very beneficial to me and I hope to continue seeing her. I throughly recommend Dr. Anisa's Homeopathic practice. I am really grateful! THANK YOU!!!",
    name: "Mangesh Salunke",
  },
];

const StarIcon = ({
  size = 14,
  fill = "none",
  stroke = "currentColor",
}: {
  size?: number;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = ({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
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
    className={className}
    style={style}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedReview, setSelectedReview] = useState<(typeof reviews)[0] | null>(null);

  useEffect(() => {
    // Detect touch device to disable auto-scroll
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const modalScrollRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const scrollModalDown = () => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    // Hide indicator if reached near bottom
    const isBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    if (isBottom) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  useEffect(() => {
    if (selectedReview) {
      setShowScrollIndicator(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedReview]);

  const [userInteracted, setUserInteracted] = useState(false);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (trackRef.current) {
      setUserInteracted(true);
      if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
      interactionTimeout.current = setTimeout(() => setUserInteracted(false), 5000);

      const scrollAmount = direction === "left" ? -450 : 450;
      trackRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isTouchDevice || selectedReview || userInteracted) return; // Don't auto-scroll on touch, modal open, or user interaction
    let raf = 0;
    const tick = () => {
      const el = trackRef.current;
      if (el && !paused) {
        el.scrollLeft += 0.85;
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft -= el.scrollWidth / 3;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, isTouchDevice, selectedReview, userInteracted]);

  const tripled = isTouchDevice ? reviews : [...reviews, ...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-[8rem] overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)", color: "var(--color-ink)" }}
    >
      <div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 animate-drift"
        style={{ background: "var(--color-emerald-glow)", filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 animate-drift"
        style={{ background: "var(--color-gold)", filter: "blur(120px)", animationDelay: "-9s" }}
      />

      <div className="container-luxe relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div
              className="w-10 h-px mb-4 sm:mb-6"
              style={{ background: "var(--color-emerald-main)" }}
            />
            <h2
              className="font-serif leading-[1.05]"
              style={{ fontSize: "clamp(36px, 6vw, 84px)", color: "var(--color-ink)" }}
            >
              Real{" "}
              <em className="italic font-bold" style={{ color: "var(--color-emerald-main)" }}>
                Stories.
              </em>
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-16 group/slider">
        {/* Navigation Arrows on Ribbon */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scrollSlider("left")}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-emerald-main/10 flex items-center justify-center text-emerald-main hover:bg-emerald-main hover:text-white transition-all duration-300 pointer-events-auto"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scrollSlider("right")}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-emerald-main/10 flex items-center justify-center text-emerald-main hover:bg-emerald-main hover:text-white transition-all duration-300 pointer-events-auto"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 ${
            isTouchDevice
              ? "overflow-x-auto snap-x snap-mandatory scrollbar-none"
              : "overflow-hidden"
          }`}
          style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {tripled.map((r, i) => (
            <article
              key={i}
              className={`glass-light shrink-0 p-6 sm:p-8 lg:p-10 group transition-all duration-500 hover:-translate-y-1 relative flex flex-col ${
                isTouchDevice ? "snap-center" : ""
              }`}
              style={{
                width: "min(500px, 85vw)",
                minHeight: "320px",
                borderRadius: "24px",
              }}
            >
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <StarIcon
                    key={k}
                    size={14}
                    fill="var(--color-emerald-main)"
                    stroke="var(--color-emerald-main)"
                  />
                ))}
              </div>
              <div className="relative flex-grow">
                <p
                  className="font-serif line-clamp-4"
                  style={{
                    fontSize: "clamp(16px, 3.5vw, 20px)",
                    color: "var(--color-ink)",
                    lineHeight: 1.55,
                  }}
                >
                  "{r.quote}"
                </p>
                {r.quote.length > 100 && (
                  <button
                    onClick={() => setSelectedReview(r)}
                    className="mt-2 text-[12px] font-bold tracking-widest uppercase text-[var(--color-emerald-main)] hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    Read Story
                    <span className="text-[16px]">→</span>
                  </button>
                )}
              </div>

              <div className="mt-8 flex items-center gap-3 sm:gap-4 border-t border-emerald-main/5 pt-6">
                <div
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl"
                  style={{
                    background: "rgba(26,122,110,0.12)",
                    color: "var(--color-emerald-main)",
                  }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-bold"
                    style={{
                      color: "var(--color-emerald-main)",
                      fontSize: "clamp(14px, 3vw, 18px)",
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="mt-0.5"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-faint)",
                    }}
                  >
                    {r.role || "Patient"}
                  </p>
                </div>
              </div>
              <CheckIcon
                size={20}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-emerald-main)" }}
              />
            </article>
          ))}
        </div>
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <a
          href="https://www.google.com/maps/place/Dr+Anisa's+Homeopathy+Clinic+(Best+Homeopathy+doctor+in+Chembur)/@19.052829,72.8834823,15z/data=!4m8!3m7!1s0x3be7cfd5ad340673:0x6d4a06de2c63003f!8m2!3d19.0528073!4d72.8911608!9m1!1b1!16s%2Fg%2F11rxmwh9qy?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: "var(--color-emerald-main)",
            color: "#fff",
            boxShadow: "0 4px 24px rgba(26, 122, 110, 0.25)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#fff"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#fff"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#fff"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#fff"
            />
          </svg>
          See All Reviews on Google
          <span className="text-lg">→</span>
        </a>
      </motion.div>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 lg:p-12"
            style={{
              background:
                "radial-gradient(circle at center, rgba(26, 122, 110, 0.15) 0%, rgba(10, 31, 28, 0.95) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl p-6 sm:p-10 lg:p-12 rounded-[32px] relative shadow-[0_32px_64px_-16px_rgba(4,15,12,0.6)] ring-1 ring-white/10 flex flex-col max-h-[90vh]"
              style={{ backgroundColor: "var(--color-ivory)" }}
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-main/10 hover:bg-emerald-main/20 transition-all duration-300 z-20"
                aria-label="Close review"
              >
                <X size={20} style={{ color: "var(--color-emerald-main)" }} />
              </button>

              <div
                ref={modalScrollRef}
                onScroll={handleModalScroll}
                className="overflow-y-auto pr-2 sm:pr-4 scrollbar-none"
              >
                <div className="flex items-center gap-1 mb-6 sm:mb-8">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <StarIcon
                      key={k}
                      size={18}
                      fill="var(--color-emerald-main)"
                      stroke="var(--color-emerald-main)"
                    />
                  ))}
                </div>

                <p
                  className="font-serif leading-relaxed"
                  style={{ fontSize: "clamp(18px, 4vw, 26px)", color: "var(--color-ink)" }}
                >
                  "{selectedReview.quote}"
                </p>

                <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6 border-t border-emerald-main/10 pt-6 sm:pt-8 pb-40">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-serif text-xl sm:text-2xl shadow-inner shrink-0"
                    style={{
                      background: "rgba(26,122,110,0.12)",
                      color: "var(--color-emerald-main)",
                    }}
                  >
                    {selectedReview.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-bold"
                      style={{
                        color: "var(--color-emerald-main)",
                        fontSize: "clamp(16px, 3vw, 22px)",
                      }}
                    >
                      {selectedReview.name}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--color-ink-faint)",
                      }}
                    >
                      {selectedReview.role || "Verified Patient"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Fade Gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20 rounded-b-[32px]"
                style={{
                  background: "linear-gradient(to top, var(--color-ivory) 40%, transparent 100%)",
                }}
              />

              {/* Scroll Down Indicator */}
              <AnimatePresence>
                {showScrollIndicator && selectedReview.quote.length > 300 && (
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={scrollModalDown}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30 group"
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--color-emerald-main)" }}
                    >
                      Read More
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-main/10 group-hover:bg-emerald-main/20 transition-all"
                      style={{ color: "var(--color-emerald-main)" }}
                    >
                      <ChevronDown size={18} className="animate-bounce" />
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
