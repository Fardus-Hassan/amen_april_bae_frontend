"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  UploadIcon,
  BarChartIcon,
  UserCheckIcon,
  BookOpenIcon,
} from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const STEPS = [
  {
    id: "upload",
    icon: UploadIcon,
    title: "Upload Your Data",
    description:
      "Securely upload your DNA results from AncestryDNA, 23andMe, or MyHeritage. Add photos, documents, and any family stories you know.",
  },
  {
    id: "analysis",
    icon: BarChartIcon,
    title: "AI Analysis",
    description:
      "Our AI engine processes your genetic markers, cross-references historical records, and identifies migration patterns spanning centuries.",
  },
  {
    id: "verification",
    icon: UserCheckIcon,
    title: "Expert Verification",
    description:
      "Professional genealogists review findings, verify sources, and craft your narrative with historical context and emotional resonance.",
  },
  {
    id: "legacy",
    icon: BookOpenIcon,
    title: "Receive Your Legacy",
    description:
      "Access your interactive digital archive, download beautifully designed reports, and start planning your heritage journey.",
  },
];

const VECTOR_17_SRC = "/images/Vector%2017.png";

export function JourneySection() {
  return (
    <motion.section
      className="bg-white py-14 sm:py-16 lg:py-24"
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
          <h2 className="font-merriweather text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-[2.5rem]">
            Your Journey in Four Steps
          </h2>
          <p className="mt-3 text-sm font-normal text-secondary/90 sm:text-base lg:text-lg">
            From raw data to rich narrative in just 48 hours
          </p>
        </motion.header>

        {/* Steps with Vector 17 connecting lines (desktop) */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          {/* Desktop: row with Vector 17 between each step */}
          <div className="hidden lg:flex lg:items-flex-start lg:justify-center lg:gap-0">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-1 flex-row items-flex-start justify-center">
                  <motion.article
                    variants={fadeInUp}
                    className="flex max-w-[220px] flex-col items-center"
                  >
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#B89B65]">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="mt-4 font-merriweather text-lg font-bold leading-tight text-secondary">
                      {step.title}
                    </h3>
                    <p className="mt-2 w-full text-center text-sm leading-relaxed text-text-primary">
                      {step.description}
                    </p>
                  </motion.article>
                  {index < STEPS.length -1 && (
                    <div className="" aria-hidden>
                      <Image
                        src={VECTOR_17_SRC}
                        alt=""
                        width={225}
                        height={31}
                        className="object-contain -mt-5 min-w-[225px] absolute -translate-x-[32%]"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile & tablet: grid without connectors */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
            {STEPS.map(({ id, icon: Icon, title, description }) => (
              <motion.article
                key={id}
                variants={fadeInUp}
                className="flex flex-col items-center sm:items-center"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#B89B65] sm:h-[72px] sm:w-[72px]">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="mt-4 font-merriweather text-base font-bold leading-tight text-secondary sm:text-lg">
                  {title}
                </h3>
                <p className="mt-2 w-full text-center text-sm leading-relaxed text-text-primary">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
