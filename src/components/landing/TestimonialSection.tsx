"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
  QuoteMarkIcon,
} from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

function useVisibleCards() {
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (lg.matches) setVisible(3);
      else if (md.matches) setVisible(2);
      else setVisible(1);
    };
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);
  return visible;
}

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I had my DNA results for years but never truly understood them. This platform turned everything into a clear story.",
    name: "Danish Slavska",
    title: "CEO | ATIK Co.",
    location: "Atlanice, New York, USA",
    rating: "4/5",
    avatar: "/images/testimonial-avatar.jpg",
    initials: "DS",
  },
  {
    id: 2,
    quote:
      "The narrative biography brought our family history to life. We finally understood where we came from and could share it with our children.",
    name: "Sarah Mitchell",
    title: "Marketing Director | Heritage Co.",
    location: "Boston, Massachusetts, USA",
    rating: "5/5",
    avatar: "/images/testimonial-avatar.jpg",
    initials: "SM",
  },
  {
    id: 3,
    quote:
      "From DNA data to a beautiful story in 48 hours. The ancestry map and travel itinerary made our trip to Ireland unforgettable.",
    name: "James O'Brien",
    title: "Founder | TechStart",
    location: "Dublin, Ireland",
    rating: "5/5",
    avatar: "/images/testimonial-avatar.jpg",
    initials: "JO",
  },
];

const SLIDE_DURATION = 0.35;
const AUTO_SLIDE_INTERVAL = 3000;
const SWIPE_THRESHOLD = 50;

export function TestimonialSection() {
  const [avatarError, setAvatarError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = TESTIMONIALS.length;
  const mouseUpRef = useRef<(() => void) | null>(null);

  const handleSliderMouseDown = useCallback(() => {
    setIsPaused(true);
    mouseUpRef.current?.();
    const onMouseUp = () => {
      setIsPaused(false);
      document.removeEventListener("mouseup", onMouseUp);
      mouseUpRef.current = null;
    };
    mouseUpRef.current = onMouseUp;
    document.addEventListener("mouseup", onMouseUp);
  }, []);
  const visibleCards = useVisibleCards();
  const maxIndex = Math.max(0, total - visibleCards);
  const displayIndex = Math.min(currentIndex, maxIndex);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex < 1) return;
    const id = setInterval(goNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, goNext, maxIndex]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const x = e.changedTouches[0].clientX;
      if (touchStartX == null) return;
      const diff = touchStartX - x;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) goNext();
        else goPrev();
      }
      setTouchStartX(null);
      setIsPaused(false);
    },
    [touchStartX, goPrev, goNext]
  );

  return (
    <motion.section
      className="py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#F9F7F2" }}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeInUp}
        >
          <div>
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold bg-landing-bg text-primary"
            >
              Testimonial
            </span>
            <h2 className="mt-3 font-merriweather text-2xl font-bold tracking-tight text-[#374151] sm:text-3xl lg:text-4xl">
              What our{" "}
              <span style={{ color: "#C5A065" }}>clients</span> say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1F2937] transition-colors hover:bg-[#1F2937] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B4C]/20 focus:ring-offset-2 focus:ring-offset-[#F9F7F2]"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1F2937] transition-colors hover:border-[#1F2937] hover:bg-[#1F2937] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B4C]/20 focus:ring-offset-2 focus:ring-offset-[#F9F7F2]"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon size={20} className="group-hover:text-white" />
            </button>
          </div>
        </motion.header>

        <div
          className="mt-8 overflow-hidden sm:mt-10 lg:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={handleSliderMouseDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex touch-pan-y"
            style={{
              width: `${(100 * total) / visibleCards}%`,
              transform: `translateX(-${displayIndex * (100 / total)}%)`,
              transition: `transform ${SLIDE_DURATION}s ease-in-out`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex shrink-0 basis-1/3 px-2 sm:px-3 lg:px-4"
              >
                <motion.article
                  layout
                  variants={fadeInUp}
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-md sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E5E7EB]">
                      {!avatarError ? (
                        <Image
                          src={t.avatar}
                          alt=""
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                          onError={() => setAvatarError(true)}
                        />
                      ) : null}
                      <span
                        className={
                          avatarError
                            ? "text-sm font-semibold text-[#4A5565]"
                            : "absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#4A5565]"
                        }
                        aria-hidden
                      >
                        {t.initials}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F2937] bg-white px-3 py-1.5 text-sm font-medium text-[#374151]">
                      <StarIcon size={16} className="text-[#EAB308]" />
                      {t.rating}
                    </span>
                  </div>

                  <div className="mt-5">
                    <QuoteMarkIcon
                      size={20}
                      className="mb-3 h-7 w-7 shrink-0 text-[#B4B4B4] sm:h-8 sm:w-5"
                    />
                    <p className="text-sm leading-relaxed text-[#4A5565] sm:text-base">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-6 flex border-l-2 border-[#E5E7EB] pl-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-[#1F2937]">
                        {t.name}
                      </span>
                      <span className="text-sm text-[#4A5565]">{t.title}</span>
                      <span className="text-sm text-[#4A5565]">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === displayIndex
                    ? "w-6 bg-[#1A2B4C]"
                    : "w-2 bg-[#E5E7EB] hover:bg-[#D1D5DB]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
