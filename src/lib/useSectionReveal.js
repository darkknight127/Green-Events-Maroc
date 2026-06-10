import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useSectionReveal(selector = ".story-reveal") {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      const section = scopeRef.current;

      if (!section) {
        return undefined;
      }

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const elements = gsap.utils.toArray(section.querySelectorAll(selector));

        elements.forEach((element, index) => {
          gsap.fromTo(
            element,
            {
              autoAlpha: 0.86,
              filter: "blur(8px)",
              y: 32,
            },
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.95,
              delay: Math.min(index * 0.06, 0.18),
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        return undefined;
      });

      return () => matchMedia.revert();
    },
    { scope: scopeRef },
  );

  return scopeRef;
}
