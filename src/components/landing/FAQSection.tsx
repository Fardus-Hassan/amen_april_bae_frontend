"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const FAQ_ITEMS = [
  {
    id: "dna-support",
    question: "What DNA test companies do you support?",
    answer:
      "We accept raw DNA data from AncestryDNA, 23andMe, MyHeritage, FamilyTreeDNA, and Living DNA. Simply download your raw data file from their website and upload it to our secure platform. We support all standard file formats (.txt, .zip, .csv).",
  },
  {
    id: "process-time",
    question: "How long does the process take?",
    answer:
      "Our Heritage Complete package guarantees delivery within 48 hours of data upload. The Heritage Starter takes up to 72 hours, while Premium packages are typically completed within 36 hours. You'll receive email updates at each stage of the process.",
  },
  {
    id: "update-story",
    question: "Can I update my story with new information?",
    answer:
      "Yes! Your Heritage Archive is a living document. You can add new photos, documents, and family stories at any time. Premium members receive one free narrative update per year, while Complete members can request updates for a small fee.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

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
          transition: { staggerChildren: 0.06, delayChildren: 0.05 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-14 lg:items-start">
          {/* Left: Sticky header */}
          <motion.aside
            className="lg:sticky lg:top-20 lg:shrink-0 lg:w-[50%]"
            variants={fadeInUp}
          >
            <span
              className="inline-block rounded-md px-4 py-2 text-xs font-semibold tracking-wide bg-landing-bg text-primary"
            >
              FAQ
            </span>
            <h2 className="mt-5 font-merriweather text-2xl font-bold tracking-tight text-[#1A2B4C] sm:text-3xl lg:text-[32px] lg:leading-[1.2]">
              <span className="text-[#1A2B4C]">Common </span>
              <span className="text-[#C5A065]">Questions</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#4A5565] sm:text-base">
              Everything you need to know before starting your journey
            </p>
          </motion.aside>

          {/* Right: Accordion */}
          <div className="mt-12 flex flex-col gap-5 lg:mt-0 lg:flex-1 lg:min-w-0">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="overflow-hidden rounded-lg bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId((prev) => (prev === item.id ? null : item.id))
                    }
                    className="flex w-full items-center gap-4 rounded-lg px-5 py-4 text-left transition-colors hover:bg-white sm:px-6 sm:py-5 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        className="h-5 w-5 text-[#374151]"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-text-primary sm:text-base">
                      {item.question}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-[14px] leading-[1.65] text-[#4A5565] text-justify sm:text-[15px] ml-9">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
