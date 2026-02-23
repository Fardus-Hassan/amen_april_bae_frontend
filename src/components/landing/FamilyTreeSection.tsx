"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparkIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const COPY = {
  headingGold: "Your Family Tree,",
  headingDark: "Clearly Connected",
  body: "DNA Time Machine presents your family tree in a clear, visual format that connects generations effortlessly. Using the DNA data and family records you provide, it reveals relationships and lineage growth over time without technical complexity. The result is a calm, intuitive view of your family history that feels accessible and reassuring.",
};

export function FamilyTreeSection() {
  return (
    <motion.section
      className="bg-landing-bg py-14 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left: icon + heading + paragraph — on sm/md centered text, full width */}
          <motion.div
            variants={fadeInUp}
            className="w-full text-center md:max-w-xl md:text-left lg:max-w-[38%] lg:shrink-0"
          >
            <div className="mb-3 flex justify-center sm:mb-4 md:justify-start">
              <SparkIcon size={28} className="text-secondary sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />
            </div>
            <h2 className="font-merriweather text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem]">
              <span className="text-primary">{COPY.headingGold}</span>{" "}
              <span className="text-secondary">{COPY.headingDark}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-left text-sm leading-relaxed text-text-primary sm:mt-4 sm:text-base md:mx-0 md:max-w-none">
              {COPY.body}
            </p>
          </motion.div>

          {/* Right: tree image — responsive aspect & no overflow on sm/md */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full min-w-0 lg:flex-1 lg:max-w-[58%]"
          >
            <div className="relative aspect-4/3 w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl md:aspect-6/5 lg:mx-0 lg:max-w-[820px] lg:min-h-[600px] lg:aspect-auto">
              <Image
                src="/images/tree.png"
                alt="Family tree showing connections across generations"
                fill
                className="object-contain object-center lg:object-bottom-right lg:min-w-[820px]"
                sizes="(max-width: 820px) 100vw, (max-width: 1024px) 80vw, 58vw"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
