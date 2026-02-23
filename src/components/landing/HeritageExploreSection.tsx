"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorldIcon, UserCheckIcon } from "@/components/icons";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const CARDS = [
  {
    id: "ancestry-map",
    image: "/images/Ancestry Map.png",
    icon: WorldIcon,
    title: "Ancestry Map",
    description:
      "Explore an interactive map powered by Mapbox that visualizes your family's journey across continents. Each pin represents an ancestral location, complete with historical photos, population data, and cultural insights.",
    stats: [
      { value: "156", label: "Countries in Database" },
      { value: "12,000+", label: "Historical Photos" },
    ],
  },
  {
    id: "dna-matches",
    image: "/images/DNA Matches.jpg",
    icon: WorldIcon,
    title: "DNA Matches",
    description:
      "Connect with living relatives through our secure matching system. Send connection requests, share stories, and collaborate on building your family tree together.",
    stats: [
      { value: "847K*", label: "Active Members" },
      { value: "98%", label: "Match Accuracy" },
    ],
  },
];

export function HeritageExploreSection() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
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
        <motion.header className="text-center" variants={fadeInUp}>
          <h2 className="font-merriweather text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            Everything You Need to Explore Your Heritage
          </h2>
          <p className="mt-3 text-base font-normal text-primary sm:text-lg">
            Comprehensive tools and insights designed for meaningful discovery
          </p>
        </motion.header>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2 lg:gap-8">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                variants={fadeInUp}
                className="overflow-hidden rounded-xl bg-white shadow-md"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-xl bg-[#E5E7EB] sm:aspect-video">
                  {imgErrors[card.id] ? (
                    <div
                      className="absolute inset-0 bg-linear-to-br from-landing-badge-bg to-landing-pattern"
                      aria-hidden
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [card.id]: true }))
                      }
                    />
                  )}
                </div>
                <div className="p-5 sm:p-6">

                  <h3 className="mt-3 font-merriweather text-lg font-bold text-secondary sm:text-xl flex items-center gap-3">
                  <Icon size={40} />
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-primary sm:text-base">
                    {card.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-5">
                    {card.stats.map((stat) => (
                      <div className="bg-[#F9F7F2] p-4 rounded-lg" key={stat.label}>
                        <p className="text-xl font-bold text-secondary sm:text-2xl">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-xs text-[#9CA3AF] sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
