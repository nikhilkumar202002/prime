"use client";
import { useLayoutEffect, useRef } from "react";

export default function GsapStack({ selector = "#stack-panels .stack-panel" }: { selector?: string }) {
  const isInitialized = useRef(false);

  useLayoutEffect(() => {
    let ctx: any;

    const initGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        const container = document.querySelector("#stack-panels") as HTMLElement | null;
        if (!container) return;

        const panels = gsap.utils.toArray<HTMLElement>(selector);
        if (panels.length < 2) return;

        ctx = gsap.context(() => {
          
          gsap.set(panels, { zIndex: (i) => i + 1 });
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
            
            tl.to(panel, { 
              yPercent: 0, 
              ease: "none" 
            }, i - 1)
            .to(panels[i - 1], { 
              scale: 0.95, 
              opacity: 0.5, 
              ease: "none" 
            }, i - 1);
          });
        }, container);

        ScrollTrigger.refresh();

      } catch (e) {
        console.warn("GSAP Initialization failed:", e);
      }
    };

    initGSAP();

    return () => {
  
      if (ctx) ctx.revert();
      import("gsap/ScrollTrigger").then((module) => {
        const ScrollTrigger = module.default;
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      });
    };
  }, [selector]);

  return null;
}