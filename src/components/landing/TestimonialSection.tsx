"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
  QuoteMarkIcon,
} from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const TESTIMONIAL = {
  quote:
    "I had my DNA results for years but never truly understood them. This platform turned everything into a clear story.",
  name: "Danish Slavska",
  title: "CEO | ATIK Co.",
  location: "Atlanice, New York, USA",
  rating: "4/5",
  avatar: "/images/testimonial-avatar.jpg",
};

export function TestimonialSection() {
  const [avatarError, setAvatarError] = useState(false);
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-[#1A2B4C] transition-colors hover:bg-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#1A2B4C]/20 focus:ring-offset-2 focus:ring-offset-[#F9F7F2]"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A2B4C] text-white transition-colors hover:bg-[#152238] focus:outline-none focus:ring-2 focus:ring-[#1A2B4C]/30 focus:ring-offset-2 focus:ring-offset-[#F9F7F2]"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </motion.header>

        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              className="flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-md sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E5E7EB]">
                  {!avatarError ? (
                    <Image
                      src={TESTIMONIAL.avatar}
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
                        ? "text-sm font-semibold text-[#4A5565] hidden"
                        : "absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#4A5565] hidden"
                    }
                    aria-hidden
                  >
                    DS
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F2937] bg-white px-3 py-1.5 text-sm font-medium text-[#374151]">
                  <StarIcon size={16} className="text-[#EAB308]" />
                  {TESTIMONIAL.rating}
                </span>
              </div>

              <div className="mt-5">
                <QuoteMarkIcon
                  size={20}
                  className="h-7 w-7 shrink-0 text-[#B4B4B4] sm:h-8 sm:w-5 mb-3"
                />
                <p className="text-sm leading-relaxed text-[#4A5565] sm:text-base">
                  {TESTIMONIAL.quote}
                </p>
              </div>

              <div className="mt-6 flex border-l-2 border-[#E5E7EB] pl-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[#1F2937]">
                    {TESTIMONIAL.name}
                  </span>
                  <span className="text-sm text-[#4A5565]">
                    {TESTIMONIAL.title}
                  </span>
                  <span className="text-sm text-[#4A5565]">
                    {TESTIMONIAL.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
