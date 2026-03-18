"use client";
import { useEffect } from "react";

/**
 * GsapStack
 *
 * Pins #stack-panels for (n-1) full viewport heights.
 * Each card slides up via yPercent 100 → 0 in sequence.
 * Previous card dims and scales back.
 */
export default function GsapStack({ selector = "#stack-panels .stack-panel" }: { selector?: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: any;

    (async () => {
      try {
        const gsap = (await import("gsap")).default;
        let ScrollTrigger: any;
        try {
          ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
        } catch {
          ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        }
        gsap.registerPlugin(ScrollTrigger);

        const container = document.querySelector("#stack-panels") as HTMLElement | null;
        if (!container) return;

        const panels = gsap.utils.toArray<HTMLElement>(selector);
        if (!panels || panels.length < 2) return;

        ctx = gsap.context(() => {
          // Layer panels so each incoming card sits on top
          panels.forEach((p, i) => gsap.set(p, { zIndex: i + 1 }));

          // Push all panels except the first off-screen below
          gsap.set(panels.slice(1), { yPercent: 100 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${window.innerHeight * (panels.length - 1)}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          panels.forEach((panel, i) => {
            if (i === 0) return;
            const offset = i - 1; // timeline position (0, 1, 2 …)

            // Slide incoming panel up — ease:none keeps it 1:1 with scroll
            tl.to(panel, { yPercent: 0, ease: "none", duration: 1 }, offset);

            // Dim and scale back the panel being covered
            tl.to(panels[i - 1], { scale: 0.95, opacity: 0.5, ease: "none", duration: 1 }, offset);
          });
        }, container);

      } catch (e) {
        console.warn("GsapStack init failed:", e);
      }
    })();

    return () => {
      try { ctx?.revert(); } catch (_) {}
    };
  }, [selector]);

  return null;
}
