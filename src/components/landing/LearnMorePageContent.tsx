"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { SparkIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const STEPS = [
  {
    step: 1,
    title: "Upload Your Data",
    description:
      "Securely upload your DNA results from AncestryDNA, 23andMe, or upload family documents and photos.",
  },
  {
    step: 2,
    title: "AI Analysis",
    description:
      "Our AI analyzes your genetic data and family history to uncover ancestral connections and migration patterns. Root to your Connections.",
  },
  {
    step: 3,
    title: "Discover Your Story",
    description:
      "Explore your personalized heritage report with interactive maps, family history timelines, and ancestral narratives to connect with your heritage.",
  },
  {
    step: 4,
    title: "Plan Your Journey",
    description:
      "Get customized travel recommendations to visit ancestral homelands and connect with your heritage.",
  },
];

export function LearnMorePageContent() {
  return (
    <div className="bg-white">
      {/* Section 1: Learn More About Your Heritage */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-merriweather text-2xl font-bold tracking-tight text-[#1A2B4C] sm:text-3xl lg:text-4xl">
            Learn More About Your Heritage
          </h1>
          <p className="mt-4 text-[15px] mx-auto max-w-2xl leading-[1.65] text-[#4A5565] sm:text-base">
            Discover how DNA Time Machine works, how your data is handled
            securely, and how we transform your DNA and family history into
            meaningful stories, maps, and heritage experiences.
          </p>
        </div>
      </section>

      {/* Section 2: Your Journey in Four Simple Steps */}
      <section className="border-t border-[#E5E7EB] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.0013 26.6654V21.6654C35.0013 19.8154 33.518 18.332 31.668 18.332H21.668V13.332H25.0013V3.33203H15.0013V13.332H18.3346V18.332H8.33464C6.48464 18.332 5.0013 19.8154 5.0013 21.6654V26.6654H1.66797V36.6654H11.668V26.6654H8.33464V21.6654H18.3346V26.6654H15.0013V36.6654H25.0013V26.6654H21.668V21.6654H31.668V26.6654H28.3346V36.6654H38.3346V26.6654H35.0013ZM18.3346 6.66536H21.668V9.9987H18.3346V6.66536ZM8.33464 33.332H5.0013V29.9987H8.33464V33.332ZM21.668 33.332H18.3346V29.9987H21.668V33.332ZM35.0013 33.332H31.668V29.9987H35.0013V33.332Z" fill="#111111"/>
</svg>

            <h2 className="mt-4 font-merriweather text-2xl font-bold tracking-tight text-[#1A2B4C] sm:text-3xl lg:text-[2rem]">
              Your Journey in{" "}
              <span className="text-[#1A2B4C]">Four Simple Steps</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-[#4A5565] sm:text-base">
              We make it easy to transform your genetic data into a rich,
              personalized heritage experience.
            </p>
          </motion.header>

          <div className="mt-12 flex flex-col gap-6 sm:mt-14 lg:mt-16 lg:flex-row lg:items-end lg:justify-center lg:gap-0">
            {STEPS.map((item, index) => (
              <div key={item.step} className="flex flex-1 flex-col items-center lg:flex-row lg:flex-initial lg:items-end">
                <motion.article
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={defaultViewport}
                  className="relative flex w-full flex-col rounded-xl bg-[#F5F5F5] p-5 shadow-sm sm:p-6 lg:w-[300px]"
                >
                  <span
                    className="mb-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold text-[#1A2B4C] mx-auto"
                    style={{ backgroundColor: "#E8DFD0" }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-merriweather text-lg font-bold text-[#1A2B4C] text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center text-[14px] leading-[1.6] text-[#4A5565] sm:text-[15px]">
                    {item.description}
                  </p>
                </motion.article>
                {index < STEPS.length - 1 && (
                  <div
                    className="hidden h-px min-w-[16px] flex-1 max-w-[32px] mb-[100px] self-end lg:block"
                    style={{ backgroundColor: "#9CA3AF" }}
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Discover Your Story & CTA + Image */}
      <section className="border-t border-[#E5E7EB] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <h2 className="font-merriweather text-2xl font-bold tracking-tight max-w-sm text-[#1A2B4C] sm:text-3xl lg:text-[2rem]">
              Discover Your Story & Plan Your Journey
            </h2>
            <Link
              href="/dna/step-1"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C5A065] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#B8935A] sm:text-base"
            >
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.98407 16.9109L8.94157 16.9809C8.91811 17.0087 8.88883 17.0311 8.85579 17.0465C8.82276 17.0619 8.78676 17.0698 8.75032 17.0698C8.71389 17.0698 8.67789 17.0619 8.64485 17.0465C8.61182 17.0311 8.58254 17.0087 8.55907 16.9809L8.51657 16.9109L8.43032 16.6921L8.75032 16.8184L9.06907 16.6934L8.98407 16.9109ZM8.51657 3.09085C8.53456 3.04342 8.56656 3.00258 8.60831 2.97376C8.65006 2.94495 8.69959 2.92951 8.75032 2.92951C8.80105 2.92951 8.85058 2.94495 8.89233 2.97376C8.93409 3.00258 8.96608 3.04342 8.98407 3.09085L10.2741 6.36335C10.4626 6.84143 10.7475 7.27565 11.1109 7.63905C11.4743 8.00246 11.9085 8.28728 12.3866 8.47585L15.4416 9.6796L15.5678 9.9996L15.4428 10.3184L12.3866 11.5234L12.2078 11.5984C11.3236 12.0013 10.6303 12.7318 10.2741 13.6359L9.06907 16.6909L8.75032 16.8171L8.43032 16.6921L7.22657 13.6359C6.87032 12.7318 6.17704 12.0013 5.29282 11.5984L5.11407 11.5234L1.83907 10.2334C1.79164 10.2154 1.7508 10.1834 1.72199 10.1416C1.69317 10.0999 1.67773 10.0503 1.67773 9.9996C1.67773 9.94887 1.69317 9.89934 1.72199 9.85759C1.7508 9.81584 1.79164 9.78384 1.83907 9.76585L2.05782 9.6796L5.11407 8.47585C6.01813 8.1196 6.7486 7.42632 7.15157 6.5421L7.22657 6.36335L8.51657 3.09085ZM8.38907 6.82335C7.91361 8.02821 6.98913 9.00153 5.81032 9.53835L5.57282 9.63835L4.65657 10.0009L5.57282 10.3621C6.21015 10.6135 6.789 10.9933 7.27346 11.4777C7.75792 11.9622 8.13764 12.541 8.38907 13.1784L8.75032 14.0934L9.11282 13.1784C9.36411 12.5411 9.74364 11.9624 10.2279 11.4779C10.7121 10.9935 11.2907 10.6137 11.9278 10.3621L12.8428 10.0009L11.9278 9.63835C10.7234 9.16348 9.75016 8.23996 9.21282 7.0621L9.11282 6.8246L8.75032 5.9071L8.38907 6.82335ZM15.6603 9.7671C15.7078 9.78509 15.7486 9.81709 15.7774 9.85884C15.8062 9.90059 15.8217 9.95012 15.8217 10.0009C15.8217 10.0516 15.8062 10.1011 15.7774 10.1429C15.7486 10.1846 15.7078 10.2166 15.6603 10.2346L15.4416 10.3196L15.5678 9.9996L15.4428 9.68085L15.6603 9.7671ZM15.4541 3.58335C15.7341 4.0846 16.1778 4.47835 16.7178 4.6921L17.2053 4.8846C17.2286 4.89382 17.2486 4.90983 17.2627 4.93056C17.2768 4.95129 17.2844 4.97578 17.2844 5.00085C17.2844 5.02592 17.2768 5.05041 17.2627 5.07114C17.2486 5.09187 17.2286 5.10789 17.2053 5.1171L17.0966 5.1596L16.7178 5.3096L16.4828 5.4171C15.9474 5.69503 15.5305 6.15719 15.3091 6.71835L15.1591 7.0971L15.1166 7.20585L15.0966 7.24085C15.0848 7.25501 15.0701 7.2664 15.0535 7.27422C15.0369 7.28204 15.0187 7.2861 15.0003 7.2861C14.9819 7.2861 14.9638 7.28204 14.9471 7.27422C14.9305 7.2664 14.9158 7.25501 14.9041 7.24085L14.8841 7.20585L14.8403 7.0971L14.6903 6.71835C14.4695 6.15761 14.0536 5.6955 13.5191 5.4171L13.2828 5.3096L12.7953 5.1171C12.772 5.10789 12.752 5.09187 12.7379 5.07114C12.7238 5.05041 12.7163 5.02592 12.7163 5.00085C12.7163 4.97578 12.7238 4.95129 12.7379 4.93056C12.752 4.90983 12.772 4.89382 12.7953 4.8846L12.9028 4.84085L13.2828 4.69085C13.8228 4.47835 14.2653 4.0846 14.5453 3.58335L15.0003 3.4046L15.4541 3.58335ZM14.8841 2.79585C14.8933 2.77254 14.9093 2.75253 14.93 2.73843C14.9508 2.72434 14.9753 2.7168 15.0003 2.7168C15.0254 2.7168 15.0499 2.72434 15.0706 2.73843C15.0913 2.75253 15.1074 2.77254 15.1166 2.79585L15.3091 3.28335C15.3507 3.38669 15.3991 3.48669 15.4541 3.58335L15.0003 3.4046L14.5453 3.58335L14.5841 3.51835L14.6916 3.28335L14.8841 2.79585ZM15.5328 11.4846C15.5404 11.4663 15.5532 11.4506 15.5696 11.4395C15.5861 11.4285 15.6055 11.4226 15.6253 11.4226C15.6452 11.4226 15.6645 11.4285 15.681 11.4395C15.6975 11.4506 15.7103 11.4663 15.7178 11.4846C15.9674 12.1182 16.3446 12.6936 16.8261 13.1751C17.3076 13.6566 17.883 14.0338 18.5166 14.2834C18.5349 14.2909 18.5506 14.3037 18.5616 14.3202C18.5727 14.3366 18.5786 14.356 18.5786 14.3759C18.5786 14.3957 18.5727 14.4151 18.5616 14.4315C18.5506 14.448 18.5349 14.4608 18.5166 14.4684L18.4291 14.5059C17.8152 14.761 17.2589 15.137 16.7932 15.6113C16.3275 16.0856 15.9618 16.6487 15.7178 17.2671L15.7028 17.2946C15.6934 17.3059 15.6817 17.315 15.6684 17.3212C15.6551 17.3274 15.6406 17.3306 15.6259 17.3306C15.6113 17.3306 15.5968 17.3274 15.5835 17.3212C15.5702 17.315 15.5585 17.3059 15.5491 17.2946L15.5328 17.2659C15.0611 16.0686 14.1428 15.1014 12.9716 14.5684L12.7341 14.4684C12.7157 14.4608 12.7 14.448 12.689 14.4315C12.678 14.4151 12.6721 14.3957 12.6721 14.3759C12.6721 14.356 12.678 14.3366 12.689 14.3202C12.7 14.3037 12.7157 14.2909 12.7341 14.2834C13.3676 14.0338 13.9431 13.6566 14.4246 13.1751C14.906 12.6936 15.2833 12.1182 15.5328 11.4846ZM15.6253 13.7146C15.4212 13.9521 15.2003 14.1725 14.9628 14.3759C15.2003 14.58 15.4212 14.8 15.6253 15.0359C15.8295 14.7992 16.0495 14.5792 16.2853 14.3759C16.0491 14.1718 15.8285 13.9516 15.6253 13.7146Z" fill="#FEFEFE"/>
</svg>

              Generate Heritage Story
            </Link>
          </motion.div>
          <motion.div
            className="relative aspect-4/3 w-full overflow-hidden rounded-lg lg:aspect-auto lg:min-h-[320px]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <Image
              src="/images/learn_more.png"
              alt="Discover your heritage with DNA Time Machine"
              fill
              className="object-contain object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
