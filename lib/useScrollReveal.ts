"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Reveals matching descendants of the returned ref as they scroll into view,
 * batched so a group of cards animates together. Skips animation entirely
 * under prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(selector: string) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          motionOk: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          if (reduceMotion) {
            gsap.set(selector, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(selector, { autoAlpha: 0, y: 24 });

          ScrollTrigger.batch(selector, {
            start: "top 85%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
              }),
          });
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return ref;
}
