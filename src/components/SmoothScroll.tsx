"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    const init = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
        autoRaf: true,
      });
      lenisRef.current = lenis;
    };

    init();
    return () => {
      if (lenisRef.current && typeof lenisRef.current.destroy === "function") {
        lenisRef.current.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
