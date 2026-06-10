import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const defaultLabels = {
  previous: "Previous",
  next: "Next",
};

function getStackState(position, isMobile, total) {
  if (position === 0) {
    return {
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      x: 0,
      y: 0,
      zIndex: total + 6,
    };
  }

  if (position === 1) {
    return {
      autoAlpha: 0.58,
      rotate: isMobile ? -4.5 : -7,
      scale: isMobile ? 0.955 : 0.94,
      x: isMobile ? -24 : -56,
      y: isMobile ? 18 : 34,
      zIndex: total + 4,
    };
  }

  if (position === 2) {
    return {
      autoAlpha: 0.42,
      rotate: isMobile ? 4 : 6.5,
      scale: isMobile ? 0.95 : 0.925,
      x: isMobile ? 24 : 54,
      y: isMobile ? 14 : 24,
      zIndex: total + 3,
    };
  }

  if (position === 3) {
    return {
      autoAlpha: 0.24,
      rotate: isMobile ? 1.5 : 3,
      scale: isMobile ? 0.93 : 0.9,
      x: isMobile ? 4 : 18,
      y: isMobile ? -12 : -22,
      zIndex: total + 2,
    };
  }

  return {
    autoAlpha: 0,
    rotate: 0,
    scale: 0.88,
    x: 0,
    y: 42,
    zIndex: 0,
  };
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  labels = defaultLabels,
}) {
  const [active, setActive] = useState(0);
  const scopeRef = useRef(null);
  const total = testimonials.length;
  const activeItem = testimonials[active] ?? testimonials[0];
  const activeWords = useMemo(
    () => (activeItem?.quote ?? "").split(/\s+/).filter(Boolean),
    [activeItem?.quote],
  );
  const mergedLabels = { ...defaultLabels, ...labels };

  useEffect(() => {
    if (!autoplay || total < 2) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [autoplay, total]);

  useGSAP(
    () => {
      const section = scopeRef.current;

      if (!section || !activeItem) {
        return undefined;
      }

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        const cards = gsap.utils.toArray(".portfolio-stack-card", section);

        cards.forEach((card, index) => {
          gsap.set(card, {
            autoAlpha: index === active ? 1 : 0,
            rotate: 0,
            scale: 1,
            x: 0,
            y: 0,
            zIndex: index === active ? total + 6 : 0,
          });
        });

        gsap.set(".portfolio-active-copy", {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
        });
        gsap.set(".portfolio-word", {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
        });

        return undefined;
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const cards = gsap.utils.toArray(".portfolio-stack-card", section);
        const timeline = gsap.timeline({
          defaults: { duration: 0.68, ease: "power3.out" },
        });

        cards.forEach((card, index) => {
          const position = (index - active + total) % total;
          const state = getStackState(position, isMobile, total);
          card.style.pointerEvents = index === active ? "auto" : "none";

          timeline.to(card, { ...state, overwrite: true }, 0);
        });

        const activeCard = cards[active];
        const activeImage = activeCard?.querySelector("img");

        if (activeImage) {
          timeline.fromTo(
            activeImage,
            { scale: 1.045 },
            { scale: 1.015, duration: 1.25, ease: "power2.out" },
            0,
          );
        }

        timeline
          .fromTo(
            ".portfolio-active-copy",
            { autoAlpha: 0, filter: "blur(10px)", y: 18 },
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.58,
            },
            0.08,
          )
          .fromTo(
            ".portfolio-word",
            { autoAlpha: 0, filter: "blur(7px)", y: 6 },
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.32,
              stagger: 0.018,
            },
            0.24,
          );

        return () => timeline.kill();
      });

      return () => matchMedia.revert();
    },
    {
      dependencies: [active, activeItem, total],
      revertOnUpdate: true,
      scope: scopeRef,
    },
  );

  if (!activeItem) {
    return null;
  }

  const goTo = (index) => {
    setActive((index + total) % total);
  };

  return (
    <div
      className="story-reveal portfolio-showcase mx-auto grid min-h-[36rem] w-full items-center gap-10 py-4 sm:min-h-[42rem] lg:grid-cols-[minmax(24rem,0.95fr)_minmax(24rem,0.78fr)] lg:gap-24 lg:py-10 xl:min-h-[46rem]"
      ref={scopeRef}
    >
      <div className="portfolio-stage relative mx-auto aspect-[1.08/1] w-[min(88vw,28rem)] sm:w-[min(76vw,36rem)] lg:mx-0 lg:ml-auto lg:w-[min(44vw,38rem)]">
        {testimonials.map((testimonial, index) => (
          <figure
            className="portfolio-stack-card absolute inset-0 overflow-hidden rounded-[1.35rem] bg-[var(--color-surface-strong)] shadow-[0_24px_60px_rgb(64_45_23_/_0.24)]"
            key={testimonial.src}
            style={{
              opacity: index === active ? 1 : index < 4 ? 0.28 : 0,
              transform: index === active ? "none" : "scale(0.94)",
              zIndex: index === active ? total + 6 : total - index,
            }}
          >
            <img
              alt={testimonial.alt ?? testimonial.name}
              className="h-full w-full object-cover"
              decoding="async"
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              src={testimonial.src}
            />
            <span
              className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_6_5_/_0)_0%,rgb(7_6_5_/_0.08)_60%,rgb(7_6_5_/_0.18)_100%)]"
              aria-hidden="true"
            />
          </figure>
        ))}
      </div>

      <aside className="portfolio-active-copy mx-auto w-full max-w-[35rem] lg:mx-0 lg:pt-6">
        <h3 className="max-w-[13ch] font-display text-[2.6rem] font-normal leading-[1.02] text-[var(--color-ink)] sm:text-5xl lg:text-[3.7rem]">
          {activeItem.name}
        </h3>
        <p className="mt-3 text-base font-medium leading-7 text-[var(--color-gold)] sm:text-lg">
          {activeItem.designation}
        </p>

        <blockquote className="mt-10 max-w-[33rem] text-[1.35rem] font-normal leading-[1.6] text-[var(--color-muted)] sm:text-[1.65rem] sm:leading-[1.58] lg:mt-14 lg:text-[1.82rem]">
          {activeWords.map((word, index) => (
            <span className="portfolio-word inline-block" key={`${word}-${index}`}>
              {word}
              {index < activeWords.length - 1 ? "\u00a0" : ""}
            </span>
          ))}
        </blockquote>

        <div className="mt-14 flex gap-4 lg:mt-20">
          <button
            aria-label={mergedLabels.previous}
            className="portfolio-nav-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(138_98_31_/_0.42)] bg-[rgb(255_253_248_/_0.84)] text-[var(--color-gold)] transition duration-300 ease-out hover:border-[var(--color-olive)] hover:bg-[var(--color-surface)] hover:text-[var(--color-olive)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            onClick={() => goTo(active - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            aria-label={mergedLabels.next}
            className="portfolio-nav-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(138_98_31_/_0.42)] bg-[rgb(255_253_248_/_0.84)] text-[var(--color-gold)] transition duration-300 ease-out hover:border-[var(--color-olive)] hover:bg-[var(--color-surface)] hover:text-[var(--color-olive)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            onClick={() => goTo(active + 1)}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </aside>
    </div>
  );
}
