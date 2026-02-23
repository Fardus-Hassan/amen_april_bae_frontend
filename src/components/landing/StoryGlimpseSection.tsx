"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";
import { QuoteIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const NARRATIVE_INCLUDES = [
  "12-15 detailed chapters spanning 4+ generations",
  "Historical photographs and documents",
  "Interactive timeline with key events",
  "Verified source citations for every claim",
  "Cultural context and traditions explained",
  "DNA match insights and relative connections",
];

export function StoryGlimpseSection() {
  const [avatarError, setAvatarError] = useState(false);
  return (
    <motion.section
      className="bg-[#162A45] py-14 sm:py-16 lg:py-20"
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
        <motion.header className="text-center" variants={fadeInUp}>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-merriweather">
            A Glimpse Into Your Story
          </h2>
          <p className="mt-2 text-sm font-normal text-primary sm:text-base lg:text-lg">
            See how we transform data into narrative
          </p>
        </motion.header>

        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left: Narrative card */}
          <motion.article
            variants={fadeInUp}
            className="flex-1 overflow-hidden rounded-xl bg-[#F9FAFB] shadow-lg"
          >
            <div className="flex p-5 sm:p-6 lg:p-8">
              <div className="mr-4 h-10 w-0.5 shrink-0 rounded-full bg-[#F59E0B] sm:mr-5" />
              <div className="min-w-0 flex-1">
                <h3 className="font-merriweather text-lg font-bold text-[#1F2937] sm:text-xl">
                  Chapter Three: The Crossing
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  1892 - Ellis Island, New York
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#374151] sm:text-base">
                  In the autumn of 1892, your great-great-grandmother Sofia
                  Kowalski stood on the deck of the SS Rhein, clutching her
                  daughter&apos;s hand as the outline of New York Harbor emerged
                  from the morning mist. She had left behind the only life she
                  had ever known in a small village near Krakow, driven by hope
                  and the promise of a new beginning.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#374151] sm:text-base">
                  Behind her lay the village of Krakow, the familiar faces of
                  neighbors, and the grave of her husband. Ahead lay Ellis Island,
                  a place of both fear and possibility. Her journey would become
                  the foundation upon which your family&apos;s American story was
                  built.
                </p>
                <p className="mt-4 font-merriweather text-sm italic leading-relaxed text-[#374151] sm:text-base">
                  &quot;This is where your American story begins.&quot;
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#E5E7EB] pt-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 10V14C1.75 16.829 1.75 18.243 2.629 19.122C2.846 19.339 3.096 19.502 3.392 19.626L3.373 19.492C3.25 18.574 3.25 17.429 3.25 16.099V7.902C3.25 6.572 3.25 5.426 3.373 4.509L3.393 4.375C3.10714 4.49012 2.84733 4.66151 2.629 4.879C1.75 5.758 1.75 7.172 1.75 10ZM21.75 10V14C21.75 16.829 21.75 18.243 20.871 19.122C20.654 19.339 20.404 19.502 20.108 19.626L20.127 19.492C20.25 18.574 20.25 17.429 20.25 16.099V7.902C20.25 6.572 20.25 5.426 20.127 4.509L20.107 4.375C20.404 4.498 20.654 4.662 20.871 4.879C21.75 5.758 21.75 7.172 21.75 10Z" fill="#C5A065"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8V16C4.75 18.828 4.75 20.243 5.629 21.121C6.507 22 7.922 22 10.75 22H12.75C15.578 22 16.993 22 17.871 21.121C18.75 20.243 18.75 18.828 18.75 16V8C18.75 5.172 18.75 3.757 17.871 2.879C16.993 2 15.578 2 12.75 2H10.75C7.922 2 6.507 2 5.629 2.879ZM8 17C8 16.8011 8.07902 16.6103 8.21967 16.4697C8.36032 16.329 8.55109 16.25 8.75 16.25H11.75C11.9489 16.25 12.1397 16.329 12.2803 16.4697C12.421 16.6103 12.5 16.8011 12.5 17C12.5 17.1989 12.421 17.3897 12.2803 17.5303C12.1397 17.671 11.9489 17.75 11.75 17.75H8.75C8.55109 17.75 8.36032 17.671 8.21967 17.5303C8.07902 17.3897 8 17.1989 8 17ZM8.75 12.25C8.55109 12.25 8.36032 12.329 8.21967 12.4697C8.07902 12.6103 8 12.8011 8 13C8 13.1989 8.07902 13.3897 8.21967 13.5303C8.36032 13.671 8.55109 13.75 8.75 13.75H14.75C14.9489 13.75 15.1397 13.671 15.2803 13.5303C15.421 13.3897 15.5 13.1989 15.5 13C15.5 12.8011 15.421 12.6103 15.2803 12.4697C15.1397 12.329 14.9489 12.25 14.75 12.25H8.75ZM8 9C8 8.80109 8.07902 8.61032 8.21967 8.46967C8.36032 8.32902 8.55109 8.25 8.75 8.25H14.75C14.9489 8.25 15.1397 8.32902 15.2803 8.46967C15.421 8.61032 15.5 8.80109 15.5 9C15.5 9.19891 15.421 9.38968 15.2803 9.53033C15.1397 9.67098 14.9489 9.75 14.75 9.75H8.75C8.55109 9.75 8.36032 9.67098 8.21967 9.53033C8.07902 9.38968 8 9.19891 8 9Z" fill="#C5A065"/>
</svg>

                    <span className="text-xs sm:text-sm">
                      <strong>Source:</strong> Ellis Island Records, 1892
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-text-secondary font-semibold sm:text-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9502 12.7L9.5002 11.275C9.31686 11.0917 9.08786 11 8.8132 11C8.53853 11 8.30086 11.1 8.1002 11.3C7.91686 11.4834 7.8252 11.7167 7.8252 12C7.8252 12.2834 7.91686 12.5167 8.1002 12.7L10.2502 14.85C10.4502 15.05 10.6835 15.15 10.9502 15.15C11.2169 15.15 11.4502 15.05 11.6502 14.85L15.9002 10.6C16.1002 10.4 16.1959 10.1667 16.1872 9.90004C16.1785 9.63337 16.0829 9.40004 15.9002 9.20004C15.7002 9.00004 15.4629 8.89604 15.1882 8.88804C14.9135 8.88004 14.6759 8.97571 14.4752 9.17504L10.9502 12.7ZM8.1502 21.75L6.7002 19.3L3.9502 18.7C3.7002 18.65 3.5002 18.521 3.3502 18.313C3.2002 18.105 3.14186 17.8757 3.1752 17.625L3.4502 14.8L1.5752 12.65C1.40853 12.4667 1.3252 12.25 1.3252 12C1.3252 11.75 1.40853 11.5334 1.5752 11.35L3.4502 9.20004L3.1752 6.37504C3.14186 6.12504 3.2002 5.89571 3.3502 5.68704C3.5002 5.47837 3.7002 5.34937 3.9502 5.30004L6.7002 4.70004L8.1502 2.25004C8.28353 2.03337 8.46686 1.88737 8.7002 1.81204C8.93353 1.73671 9.16686 1.74937 9.4002 1.85004L12.0002 2.95004L14.6002 1.85004C14.8335 1.75004 15.0669 1.73737 15.3002 1.81204C15.5335 1.88671 15.7169 2.03271 15.8502 2.25004L17.3002 4.70004L20.0502 5.30004C20.3002 5.35004 20.5002 5.47937 20.6502 5.68804C20.8002 5.89671 20.8585 6.12571 20.8252 6.37504L20.5502 9.20004L22.4252 11.35C22.5919 11.5334 22.6752 11.75 22.6752 12C22.6752 12.25 22.5919 12.4667 22.4252 12.65L20.5502 14.8L20.8252 17.625C20.8585 17.875 20.8002 18.1044 20.6502 18.313C20.5002 18.5217 20.3002 18.6507 20.0502 18.7L17.3002 19.3L15.8502 21.75C15.7169 21.9667 15.5335 22.1127 15.3002 22.188C15.0669 22.2634 14.8335 22.2507 14.6002 22.15L12.0002 21.05L9.4002 22.15C9.16686 22.25 8.93353 22.2627 8.7002 22.188C8.46686 22.1134 8.28353 21.9674 8.1502 21.75Z" fill="#C5A065"/>
</svg>

                    Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Right: Narrative includes + Testimonial */}
          <div className="flex flex-col gap-6 lg:max-w-[380px] lg:shrink-0">
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-xl bg-[#374151] p-5 sm:p-6"
            >
              <h4 className="text-base font-semibold text-white sm:text-lg">
                Your Narrative Includes:
              </h4>
              <ul className="mt-4 space-y-3">
                {NARRATIVE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white sm:text-base"
                  >
                    <span className="mt-0.5 shrink-0 text-[#F59E0B]">
                      <CheckIcon size={18} />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-xl bg-[#4B5563] p-5 sm:p-6"
            >
              <QuoteIcon size={40} className="text-[#9CA3AF] opacity-80" />
              <blockquote className="mt-2 font-merriweather text-sm italic leading-relaxed text-white sm:text-base">
                &quot;Reading my family&apos;s story felt like discovering a
                treasure chest in my own home. Every page brought tears and
                smiles.&quot;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#6B7280] text-sm font-semibold text-white">
                  {avatarError ? (
                    "MC"
                  ) : (
                    <Image
                      src="/images/avatar-margaret.png"
                      alt="Margaret Chen"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Margaret Chen
                  </p>
                  <p className="text-xs text-[#D1D5DB]">
                    Premium Heritage Package
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
