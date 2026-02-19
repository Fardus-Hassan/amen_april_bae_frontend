"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, ShieldCheckIcon, LockIcon, BadgeCheckIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const FEATURES = [
  { icon: ShieldCheckIcon, label: "GDPR Ready" },
  { icon: LockIcon, label: "US Secure Storage" },
  { icon: BadgeCheckIcon, label: "ISO Certified" },
];

export function Banner() {
  return (
    <motion.section
      className="relative overflow-hidden bg-landing-bg"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
      }}
    >
      {/* Subtle pattern on right (desktop) */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-60 lg:block"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--landing-navy) 0.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 flex flex-col-reverse lg:flex-row lg:gap-12 lg:px-8 lg:py-20">
        {/* Left content */}
        <motion.div className="flex flex-col justify-center" variants={fadeInUp}>
          <motion.span variants={fadeInUp} className="mb-4 lg:mt-0 mt-5 inline-block lg:text-base sm:text-sm text-xs w-fit rounded-[20px] bg-white/50 px-3 py-1.5 font-bold uppercase text-primary">
            Verified by professional genealogists
          </motion.span>

          <motion.h1 variants={fadeInUp} className="text-3xl font-bold leading-tight tracking-tight text-landing-navy sm:text-4xl lg:text-[50px] xl:text-[60px] font-merriweather">
            <span className="text-secondary text-nowrap">Your DNA is the Ink.</span>
            <br />
            <span className="text-primary text-nowrap">We Write the Story.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-4 max-w-lg lg:text-base text-sm text-text-primary sm:text-lg">
            Turn raw data into a verified family legacy in 48 hours.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 md:text-sm text-xs font-semibold text-white transition hover:opacity-90"
            >
              Start Your Journey
              <ArrowRightIcon size={18} />
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center rounded-full border border-secondary  bg-white px-5 py-3 md:text-sm text-xs font-semibold text-secondary hover:bg-(--landing-navy)/5"
            >
              Watch Demo
            </Link>
          </motion.div>

          {/* Feature badges */}
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-6">
            {FEATURES.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <span className="flex p-[10px] shrink-0 items-center shadow justify-center rounded-full bg-white">
                  <Icon size={24} />
                </span>
                <span className="sm:text-sm text-xs font-semibold text-secondary">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: banner image */}
        <motion.div
          variants={fadeInUp}
          className="relative lg:mt-[-100px] mt-[-70px] lg:-mr-[200px] mr-[-50px] xl:-mr-[500px]"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0" />
            <Image
              src="/images/banner.png"
              alt="Family looking at photo album together"
              width={900}
              height={700}
              className="object-cover object-center w-full lg:h-[700px] md:h-[500px] sm:h-[400px] h-[300px]"
              sizes=""
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
