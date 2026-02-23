"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  BadgeCheckIcon,
  ClockIcon,
} from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const INDICATORS = [
  {
    id: "delivery",
    icon: ClockIcon,
    label: "48-Hour Delivery",
  },
  {
    id: "secure",
    icon: ShieldCheckIcon,
    label: "100% Secure",
  },
  {
    id: "verified",
    icon: BadgeCheckIcon,
    label: "Expert Verified",
  },
];

export function CTASection() {
  return (
    <motion.section
      className="cta-section py-16 sm:py-20 lg:py-24 bg-white"
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
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
        >
          <h2 className="font-merriweather text-2xl font-bold tracking-tight text-[#1A2B4C] sm:text-3xl lg:text-4xl lg:leading-[1.2]">
            Your Story Begins Today
          </h2>
          <p className="mt-5 mx-auto text-[15px] leading-[1.6] text-[#6b7280] sm:text-base sm:mt-6">
            Join thousands who&apos;ve discovered the extraordinary in their
            ordinary family history
          </p>
        </motion.header>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center sm:gap-5"
          variants={fadeInUp}
        >
          <a
            href="#"
            className="inline-flex w-full min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#C5A065] px-5 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B8935A] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Start Your Journey
            <ArrowRightIcon size={18} className="shrink-0" />
          </a>
          <a
            href="#"
            className="inline-flex w-full min-w-[150px] items-center justify-center rounded-full border-2 border-[#1A2B4C] bg-white px-5 py-3.5 text-sm font-medium text-[#1A2B4C] transition-colors hover:bg-[#1A2B4C] hover:text-white sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            Schedule a Demo
          </a>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:mt-16 lg:gap-12"
          variants={fadeInUp}
        >
          {INDICATORS.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className="flex items-center gap-3"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white"
                style={{ borderColor: "#DDC49A" }}
              >
                <span className="cta-indicator-icon text-[#1A2B4C]">
                  <Icon size={20} />
                </span>
              </span>
              <span className="text-[14px] font-normal text-[#1A2B4C] sm:text-[15px]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
