"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  LockIcon,
  EyeIcon,
  ShieldLockIcon,
} from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const PRIVACY_CARDS = [
  {
    id: "secure",
    icon: ShieldCheckIcon,
    title: "Secure Storage",
    description:
      "All data is encrypted using military-grade AES-256 encryption, both in transit and at rest.",
  },
  {
    id: "own",
    icon: LockIcon,
    title: "You Own Your Data",
    description:
      "Your genetic information belongs to you. Download or delete it anytime, no questions asked.",
  },
  {
    id: "discover",
    icon: EyeIcon,
    title: "Discover Your Story",
    description:
      "Explore your personalized heritage report with interactive maps, family history timelines, and ancestral narratives.",
  },
];

export function PrivacySection() {
  return (
    <motion.section
      className="privacy-section py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#F9F7F2" }}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
        >
          <div className="flex justify-center">
            <ShieldLockIcon
              size={32}
              className="text-[#1A2B4C]"
            />
          </div>
          <h2 className="mt-4 font-merriweather text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span style={{ color: "#1A2B4C" }}>Your </span>
            <span style={{ color: "#C5A065" }}>Privacy</span>
            <span style={{ color: "#1A2B4C" }}> is Our Priority</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4A5565] sm:text-lg">
            We use bank-level encryption and never sell your data. You maintain
            complete control and ownership.
          </p>
        </motion.header>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {PRIVACY_CARDS.map(({ id, icon: Icon, title, description }) => (
            <motion.article
              key={id}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md sm:p-8"
            >
              <div
                className="flex justify-center"
                data-icon-wrap
                aria-hidden
              >
                <span className="inline-flex h-12 w-12 items-center justify-center">
                  <Icon size={40} className="" />
                </span>
              </div>
              <h3 className="mt-4 text-center font-merriweather text-lg font-bold text-[#1A2B4C] sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-[#4A5565] sm:text-base">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
