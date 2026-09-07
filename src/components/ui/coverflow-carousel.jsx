import OptimizedImage from "./OptimizedImage";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const defaultLabels = {
  previous: "Previous slide",
  next: "Next slide",
  choose: "Go to slide",
};

export function CoverflowCarousel({
  slides,
  rotate = 42,
  depth = 0.58,
  perspective = 3.2,
  falloff = 0.58,
  fade = 0.13,
  cardWidth = "clamp(12rem, 56vw, 25rem)",
  gap = 0.09,
  loop = true,
  showCaption = true,
  showPagination = true,
  showNavigation = true,
  label = "Cover carousel",
  labels = defaultLabels,
  className,
  cardClassName,
}) {
  const count = slides.length;
  const mergedLabels = { ...defaultLabels, ...labels };
  const frameRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const reduceMotionRef = React.useRef(false);
  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (position) => {
      if (!count) return 0;
      return ((Math.round(position) % count) + count) % count;
    },
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width || !count) return;

    const pitch = width * (1 + gap);
    const position = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - position;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = distance < 0.55 ? "auto" : "none";
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

      targetRef.current = target;
      setSelected(indexAt(target));

      if (reduceMotionRef.current) {
        posRef.current = target;
        paint();
        rafRef.current = null;
        return;
      }

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }

        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const clamp = React.useCallback(
    (position) =>
      loop ? position : Math.max(0, Math.min(count - 1, position)),
    [count, loop],
  );

  const nudge = React.useCallback(
    (amount) => settle(clamp(Math.round(targetRef.current) + amount)),
    [clamp, settle],
  );

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      position: posRef.current,
      velocity: 0,
      time: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(
      drag.position - (event.clientX - drag.x) / pitch,
    );
    drag.velocity =
      ((posRef.current - previous) / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.velocity * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame || !count) return undefined;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [count, paint]);

  React.useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reduceMotionRef.current = preference.matches;
    };

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  if (!count) return null;

  const active = slides[selected];
  const progress = ((selected + 1) / count) * 100;

  return (
    <div
      className={cn("w-full", className)}
      style={{ "--cf-card": cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-8 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-page)] active:cursor-grabbing sm:py-12"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <figure
                key={`${slide.src}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${count}`}
                aria-hidden={index !== selected}
                className={cn(
                  "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-[1.25rem] border border-white/50 bg-[var(--color-surface-strong)] shadow-[0_26px_55px_rgb(45_34_19_/_0.22)] will-change-transform sm:rounded-[1.75rem]",
                  cardClassName,
                )}
                style={{ width: "var(--cf-card)" }}
              >
                {(Math.min(Math.abs(index - selected), count - Math.abs(index - selected)) <= 2) && <OptimizedImage
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full select-none object-cover"
                />}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgb(22_19_14_/_0.15))]"
                />
              </figure>
            ))}
          </div>
        </div>

        {showNavigation ? (
          <div className="pointer-events-none absolute inset-x-3 top-1/2 z-[200] flex -translate-y-1/2 justify-between sm:inset-x-6 lg:inset-x-[8%]">
            <button
              type="button"
              aria-label={mergedLabels.previous}
              onClick={() => nudge(-1)}
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-[rgb(138_98_31_/_0.28)] bg-[rgb(255_253_248_/_0.88)] text-[var(--color-ink)] shadow-[0_8px_24px_rgb(45_34_19_/_0.16)] backdrop-blur-md transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-gold)] sm:size-12"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label={mergedLabels.next}
              onClick={() => nudge(1)}
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-[rgb(138_98_31_/_0.28)] bg-[rgb(255_253_248_/_0.88)] text-[var(--color-ink)] shadow-[0_8px_24px_rgb(45_34_19_/_0.16)] backdrop-blur-md transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-gold)] sm:size-12"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        ) : null}
      </div>

      {showCaption && active?.title ? (
        <div
          key={selected}
          className="mx-auto mt-2 grid w-[calc(100%-2.5rem)] max-w-[52rem] grid-cols-[auto_1fr] gap-x-4 border-t border-[rgb(138_98_31_/_0.24)] px-1 pt-5 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 sm:mt-4 sm:w-[calc(100%-4rem)] sm:gap-x-6 sm:px-6 sm:pt-7"
          aria-live="polite"
        >
          <span className="pt-1 font-display text-sm text-[var(--color-gold)] sm:text-base">
            {String(selected + 1).padStart(2, "0")}
          </span>
          <div>
            {active.subtitle ? (
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)] sm:text-xs">
                {active.subtitle}
              </p>
            ) : null}
            <h3 className="font-display text-[1.65rem] font-normal leading-[1.08] text-[var(--color-ink)] sm:text-[2.15rem]">
              {active.title}
            </h3>
            {active.description ? (
              <p className="font-copy mt-3 max-w-[43rem] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7">
                {active.description}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {showPagination ? (
        <div className="mx-auto mt-6 flex w-[calc(100%-2.5rem)] max-w-[52rem] items-center gap-4 px-1 sm:w-[calc(100%-4rem)] sm:px-6">
          <div
            className="h-px flex-1 overflow-hidden bg-[rgb(138_98_31_/_0.2)]"
            aria-hidden="true"
          >
            <span
              className="block h-full bg-[var(--color-gold)] transition-[width] duration-500 motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="min-w-[4.5rem] text-right text-xs font-medium tracking-[0.12em] text-[var(--color-muted)]">
            {String(selected + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>
      ) : null}

    </div>
  );
}
