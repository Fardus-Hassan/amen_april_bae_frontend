"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    id: "users",
    value: 1.2,
    suffix: "K+",
    label: null,
    format: "decimal" as const,
  },
  {
    id: "stories",
    value: 12847,
    suffix: "",
    label: "Stories Written",
    format: "integer" as const,
  },
  {
    id: "delivery",
    value: 48,
    suffix: " hrs",
    label: "Average Delivery",
    format: "integer" as const,
  },
  {
    id: "countries",
    value: 156,
    suffix: "",
    label: "Countries Covered",
    format: "integer" as const,
  },
  {
    id: "support",
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    format: "integer" as const,
    isFraction: true,
  },
];

const DURATION_MS = 1800;
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function useCountUp(
  target: number,
  format: "integer" | "decimal",
  isVisible: boolean,
  options?: { suffix?: string; isFraction?: boolean }
) {
  const suffix = options?.suffix ?? "";
  const [display, setDisplay] = useState(
    format === "decimal" ? `0.0${suffix}` : `0${suffix}`
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = target * eased;

      if (format === "integer") {
        const val = Math.round(current);
        setDisplay(
          options?.isFraction ? `${val}${suffix}` : val.toLocaleString() + suffix
        );
      } else {
        setDisplay(current.toFixed(1) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        if (format === "integer") {
          setDisplay(
            options?.isFraction ? `${target}${suffix}` : target.toLocaleString() + suffix
          );
        } else {
          setDisplay(target.toFixed(1) + suffix);
        }
      }
    };

    requestAnimationFrame(tick);
  }, [target, format, isVisible, options?.suffix, options?.isFraction]);

  return display;
}

function StatCounter({
  item,
  isVisible,
}: {
  item: (typeof STATS)[number];
  isVisible: boolean;
}) {
  const display = useCountUp(
    item.value,
    item.format,
    isVisible,
    item.format === "decimal"
      ? { suffix: item.suffix }
      : item.isFraction
        ? { suffix: item.suffix, isFraction: true }
        : { suffix: item.suffix }
  );

  if (item.id === "users") {
    return (
      <div className="flex flex-col items-center sm:items-start text-center">
        <span className="font-merriweather text-2xl font-bold text-secondary sm:text-3xl lg:text-4xl">
          {display}
        </span>
        <div className="mt-2 flex items-center gap-1">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-gray-200 ring-2 ring-white"
                title=""
              >
                <div className="flex h-full w-full items-center justify-center bg-secondary/20 text-xs font-semibold text-secondary">
                  {i}
                </div>
              </div>
            ))}
          </div>
          <span className="ml-1 text-lg font-semibold text-secondary">+</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="font-merriweather text-2xl font-bold text-secondary sm:text-3xl lg:text-4xl">
        {display}
      </span>
      {item.label && (
        <span className="mt-1 font-merriweather text-sm font-normal text-text-primary">
          {item.label}
        </span>
      )}
    </div>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-8">
          {STATS.map((item) => (
            <div
              key={item.id}
              className="flex justify-center border-0 border-gray-100 sm:justify-start lg:border-r lg:pr-8 last:border-r-0 last:pr-0 mx-auto text-center"
            >
              <StatCounter item={item} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
