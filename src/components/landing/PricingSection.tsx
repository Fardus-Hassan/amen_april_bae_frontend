"use client";

import { motion } from "framer-motion";
import { CheckIcon, CrownIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const PLANS = [
  {
    id: "starter",
    title: "Heritage Starter",
    subtitle: "Perfect for curious beginners",
    price: "$299",
    cta: "Get Started",
    featured: false,
    features: [
      "5-chapter narrative biography",
      "Basic ancestry map (2 generations)",
      "DNA match notifications",
      "PDF report download",
      "72-hour delivery",
      "Email support",
    ],
  },
  {
    id: "complete",
    title: "Heritage Complete",
    subtitle: "The full story experience",
    price: "$999",
    cta: "Start Your Journey",
    featured: true,
    badge: "Most Popular",
    features: [
      "12-chapter narrative biography",
      "Interactive ancestry map (4 generations)",
      "Advanced DNA match system",
      "Heritage travel itinerary (1 location)",
      "Premium PDF + interactive web archive",
      "48-hour delivery guarantee",
      "Priority phone & chat support",
      "Genealogist consultation (30 min)",
    ],
  },
  {
    id: "premium",
    title: "Heritage Premium",
    subtitle: "The ultimate legacy package",
    // intro: "Everything in Complete, plus:",
    price: "$2,500",
    cta: "Get Premium",
    featured: false,
    features: [
      "20-chapter comprehensive biography",
      "Full ancestry map (6+ generations)",
      "Heritage travel itinerary (3 locations)",
      "Hardcover printed book",
      "Custom family crest design",
      "Genealogist consultation (90 min)",
      "24/7 dedicated concierge",
      "Lifetime archive access",
    ],
  },
];

export function PricingSection() {
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
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header className="text-center" variants={fadeInUp}>
          <h2 className="font-merriweather text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span style={{ color: "#1A2B4C" }}>Choose Your </span>
            <span style={{ color: "#C5A065" }}>Heritage</span>
            <span style={{ color: "#1A2B4C" }}> Journey</span>
          </h2>
          <p className="mt-3 text-base text-[#4A5565] sm:text-lg">
            Flexible packages designed to match your curiosity and budget
          </p>
        </motion.header>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {PLANS.map((plan) => (
            <motion.article
              key={plan.id}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-2xl shadow-md overflow-visible ${
                plan.featured
                  ? "bg-primary"
                  : "border border-[#E0E0E0] bg-white"
              }`}
              style={
                plan.featured
                  ? { backgroundColor: "#C5A065" }
                  : undefined
              }
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 right-0 rounded-full bg-[#1A2B4C] px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm sm:px-5"
                  aria-hidden
                >
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3
                  className={`font-merriweather text-xl font-bold ${
                    plan.featured ? "text-white" : "text-secondary"
                  }`}
                  style={!plan.featured ? { color: "#1A2B4C" } : undefined}
                >
                  {plan.title}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.featured ? "text-white/95" : "text-text-primary"
                  }`}
                  style={!plan.featured ? { color: "#4A5565" } : undefined}
                >
                  {plan.subtitle}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-bold sm:text-4xl ${
                      plan.featured ? "text-white" : "text-secondary"
                    }`}
                    style={!plan.featured ? { color: "#1A2B4C" } : undefined}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-white/90" : "text-text-primary"
                    }`}
                    style={!plan.featured ? { color: "#4A5565" } : undefined}
                  >
                    /one-time
                  </span>
                </div>

                <button
                  type="button"
                  className={`mt-6 w-full rounded-full py-3.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A2B4C]/30 focus:ring-offset-2 ${
                    plan.featured
                      ? " text-[#1A2B4C] hover:bg-[#1A2B4C] hover:text-white bg-white"
                      : "border-2 border-[#1A2B4C] bg-transparent text-[#1A2B4C] hover:bg-[#1A2B4C] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul
                  className={`mt-6 flex flex-1 flex-col gap-3 border-t pt-6 ${
                    plan.featured ? "border-white/20" : "border-[#E5E7EB]"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-snug"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-white/25"
                            : "bg-[#E5E7EB]"
                        }`}
                        aria-hidden
                      >
                        <CheckIcon
                          size={12}
                          className={
                            plan.featured
                              ? "text-white"
                              : "text-[#4A5565]"
                          }
                        />
                      </span>
                      <span
                        className={
                          plan.featured
                            ? "text-white/95"
                            : "text-text-primary"
                        }
                        style={!plan.featured ? { color: "#4A5565" } : undefined}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-[#4A5565] sm:mt-12 sm:text-base"
          variants={fadeInUp}
        >
          All plans include 48-hour processing, encrypted storage, and full data
          ownership. Questions?{" "}
          <a
            href="#"
            className="font-medium text-primary hover:underline"
            style={{ color: "#C5A065" }}
          >
            Chat with our team
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
}
