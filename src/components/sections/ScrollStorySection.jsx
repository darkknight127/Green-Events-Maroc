import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ScrollStorySection({ content }) {
  const scopeRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = content.steps;
  const activeStep = steps[activeIndex] ?? steps[0];
  const total = steps.length;
  const totalLabel = String(total).padStart(2, "0");

  useGSAP(
    () => {
      activeIndexRef.current = 0;
      setActiveIndex(0);

      const setStep = (index) => {
        const nextIndex = Math.max(0, Math.min(total - 1, index));

        if (nextIndex !== activeIndexRef.current) {
          activeIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
        }
      };

      const matchMedia = gsap.matchMedia();

      matchMedia.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          const section = mobileRef.current;

          if (!section) {
            return undefined;
          }

          const images = gsap.utils.toArray(
            section.querySelectorAll(".scroll-story-mobile-image"),
          );
          const triggers = gsap.utils.toArray(
            section.querySelectorAll(".scroll-story-mobile-step"),
          );
          const progressFill = section.querySelector(
            ".scroll-story-mobile-progress-fill",
          );

          if (!images.length || !triggers.length || !progressFill) {
            return undefined;
          }

          gsap.set(images, {
            autoAlpha: 0,
            scale: 1.06,
            transformOrigin: "center center",
          });
          gsap.set(images[0], { autoAlpha: 1, scale: 1.02 });
          gsap.set(progressFill, {
            scaleX: 0,
            transformOrigin: "left center",
          });
          setStep(0);

          const refreshOnImageLoad = () => ScrollTrigger.refresh();

          images.forEach((image) => {
            if (!image.complete) {
              image.addEventListener("load", refreshOnImageLoad, {
                once: true,
              });
            }
          });

          const showImage = (index) => {
            setStep(index);

            gsap.to(images, {
              autoAlpha: (imageIndex) => (imageIndex === index ? 1 : 0),
              scale: (imageIndex) => (imageIndex === index ? 1.02 : 1.065),
              duration: 0.75,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          triggers.forEach((trigger, index) => {
            ScrollTrigger.create({
              trigger,
              start: "top center",
              end: "bottom center",
              onEnter: () => showImage(index),
              onEnterBack: () => showImage(index),
            });
          });

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              gsap.set(progressFill, { scaleX: self.progress });
            },
          });

          const refreshFrame = requestAnimationFrame(() =>
            ScrollTrigger.refresh(),
          );

          return () => {
            cancelAnimationFrame(refreshFrame);
            images.forEach((image) => {
              image.removeEventListener("load", refreshOnImageLoad);
            });
          };
        },
      );

      matchMedia.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const section = desktopRef.current;

          if (!section) {
            return undefined;
          }

          const images = gsap.utils.toArray(
            section.querySelectorAll(".scroll-story-desktop-image"),
          );
          const progressFill = section.querySelector(
            ".scroll-story-desktop-progress-fill",
          );

          if (images.length < 2 || !progressFill) {
            return undefined;
          }

          gsap.set(images, {
            autoAlpha: 0,
            scale: 1.06,
            transformOrigin: "center center",
          });
          gsap.set(images[0], { autoAlpha: 1, scale: 1.02 });
          gsap.set(progressFill, {
            scaleX: 0,
            transformOrigin: "left center",
          });
          setStep(0);

          const refreshOnImageLoad = () => ScrollTrigger.refresh();

          images.forEach((image) => {
            if (!image.complete) {
              image.addEventListener("load", refreshOnImageLoad, {
                once: true,
              });
            }
          });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * (total - 1)}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 1,
              onUpdate: (self) => {
                const nextIndex = Math.min(
                  total - 1,
                  Math.floor(self.progress * total),
                );

                gsap.set(progressFill, { scaleX: self.progress });
                setStep(nextIndex);
              },
            },
          });

          images.forEach((_, index) => {
            if (index === 0) {
              return;
            }

            const position = index - 1;

            timeline
              .to(
                images[index - 1],
                {
                  autoAlpha: 0,
                  scale: 1,
                  duration: 0.9,
                },
                position,
              )
              .to(
                images[index],
                {
                  autoAlpha: 1,
                  scale: 1.02,
                  duration: 0.9,
                },
                position,
              );
          });

          timeline.to(
            images[total - 1],
            {
              scale: 1.06,
              duration: 0.75,
            },
            total - 1,
          );

          const refreshFrame = requestAnimationFrame(() =>
            ScrollTrigger.refresh(),
          );

          return () => {
            cancelAnimationFrame(refreshFrame);
            images.forEach((image) => {
              image.removeEventListener("load", refreshOnImageLoad);
            });
          };
        },
      );

      return () => matchMedia.revert();
    },
    { dependencies: [content], revertOnUpdate: true, scope: scopeRef },
  );

  return (
    <div id="scroll-story" ref={scopeRef}>
      <section
        aria-label={content.title}
        className="scroll-story-mobile relative bg-[#070605]"
        ref={mobileRef}
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          <div className="absolute inset-0">
            {steps.map((step, index) => (
              <img
                alt=""
                aria-hidden="true"
                className="scroll-story-mobile-image absolute inset-0 h-full w-full object-cover opacity-0"
                decoding="async"
                key={step.number}
                loading={index === 0 ? "eager" : "lazy"}
                src={step.image.src}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-[#070605]/16" />
          <div className="hero-bottom-blur absolute inset-x-0 bottom-0 h-[58svh] opacity-90" />

          <Container className="relative z-10 flex h-svh flex-col justify-end pb-5 pt-12 min-[380px]:pb-6">
            <div className="mb-auto max-w-xs pt-2">
              <p className="mb-3 text-xs font-medium text-[#C8A45D] text-shadow-soft">
                {content.progressLabel} {activeStep.number} / {totalLabel}
              </p>
              <h2 className="font-display text-[2.25rem] font-normal leading-[1.05] text-[#F7F1E7] text-shadow-soft">
                {content.title}
              </h2>
            </div>

            <div className="liquid-glass scroll-story-mobile-panel p-5 text-[#F7F1E7]">
              <div className="flex items-center justify-between gap-5 text-xs text-[#D8C3A5]">
                <span>{content.progressLabel}</span>
                <span>
                  {activeStep.number} / {totalLabel}
                </span>
              </div>

              <div className="mt-4 h-px overflow-hidden bg-[#F7F1E7]/18">
                <span className="scroll-story-mobile-progress-fill block h-px w-full origin-left scale-x-0 bg-[#C8A45D]" />
              </div>

              <div
                aria-live="polite"
                className="scroll-story-copy animate-blur-fade-up mt-5"
                key={`mobile-${activeStep.number}`}
              >
                <p className="text-sm text-[#C8A45D]">{activeStep.number}</p>
                <h3 className="mt-2 font-display text-[1.75rem] leading-tight text-[#F7F1E7]">
                  {activeStep.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#F7F1E7]/78">
                  {content.subtitle}
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div aria-hidden="true" className="relative z-0">
          {steps.map((step) => (
            <div
              className="scroll-story-mobile-step min-h-[78svh]"
              key={step.number}
            />
          ))}
        </div>
      </section>

      <section className="scroll-story-reduced bg-[#070605] py-16 sm:py-24">
        <Container>
          <div className="mb-9 max-w-3xl">
            <p className="mb-4 text-sm font-medium text-[#C8A45D]">
              {content.progressLabel} 01 / {totalLabel}
            </p>
            <h2 className="font-display text-[2.5rem] font-normal leading-[1.05] text-[#F7F1E7] sm:text-[3.25rem]">
              {content.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#D8C3A5] sm:text-lg">
              {content.subtitle}
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <article
                className="overflow-hidden border border-[#F7F1E7]/12 bg-[#15110D]"
                key={step.number}
              >
                <img
                  alt={step.image.alt}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[16/10]"
                  decoding="async"
                  loading={index === 0 ? "eager" : "lazy"}
                  src={step.image.src}
                />
                <div className="liquid-glass scroll-story-reduced-panel m-3 p-5">
                  <p className="text-sm font-medium text-[#C8A45D]">
                    {step.number} / {totalLabel}
                  </p>
                  <h3 className="mt-2 font-display text-[1.75rem] leading-tight text-[#F7F1E7]">
                    {step.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-label={content.title}
        className="scroll-story-pinned relative min-h-svh overflow-hidden bg-[#070605]"
        ref={desktopRef}
      >
        <div className="absolute inset-0">
          {steps.map((step, index) => (
            <img
              alt=""
              aria-hidden="true"
              className="scroll-story-desktop-image absolute inset-0 h-full w-full object-cover opacity-0"
              decoding="async"
              key={step.number}
              loading={index === 0 ? "eager" : "lazy"}
              src={step.image.src}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[#070605]/24" />
        <div className="hero-bottom-blur absolute inset-x-0 bottom-0 h-[54svh] opacity-90" />

        <Container className="relative z-10 flex min-h-svh items-end pb-10 pt-20 lg:pb-14">
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.54fr] lg:items-end">
            <div className="max-w-3xl pb-2">
              <p className="mb-5 text-sm font-medium text-[#C8A45D] text-shadow-soft">
                {content.progressLabel} {activeStep.number} / {totalLabel}
              </p>
              <h2 className="font-display text-[2.5rem] font-normal leading-[1.05] text-[#F7F1E7] text-shadow-soft sm:text-[3.25rem] lg:text-[4.25rem]">
                {content.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#F7F1E7]/86 text-shadow-soft sm:text-lg">
                {content.subtitle}
              </p>
            </div>

            <aside className="liquid-glass scroll-story-panel p-5 text-[#F7F1E7] sm:p-6">
              <div className="flex items-center justify-between gap-5 text-sm text-[#D8C3A5]">
                <span>{content.progressLabel}</span>
                <span>
                  {activeStep.number} / {totalLabel}
                </span>
              </div>

              <div className="mt-4 h-px overflow-hidden bg-[#F7F1E7]/18">
                <span className="scroll-story-desktop-progress-fill block h-px w-full origin-left scale-x-0 bg-[#C8A45D]" />
              </div>

              <div
                aria-live="polite"
                className="scroll-story-copy animate-blur-fade-up mt-6"
                key={activeStep.number}
              >
                <p className="text-sm text-[#C8A45D]">{activeStep.number}</p>
                <h3 className="mt-2 font-display text-[1.75rem] leading-tight text-[#F7F1E7] sm:text-[2rem]">
                  {activeStep.title}
                </h3>
              </div>

              <ol className="mt-7 grid gap-2">
                {steps.map((step, index) => (
                  <li
                    className={`flex items-center gap-3 text-sm transition-colors duration-500 ${
                      index === activeIndex
                        ? "text-[#F7F1E7]"
                        : "text-[#F7F1E7]/45"
                    }`}
                    key={step.number}
                  >
                    <span
                      className={`h-px w-8 transition-colors duration-500 ${
                        index === activeIndex
                          ? "bg-[#C8A45D]"
                          : "bg-[#F7F1E7]/22"
                      }`}
                    />
                    <span>{step.number}</span>
                    <span>{step.title}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ScrollStorySection;
