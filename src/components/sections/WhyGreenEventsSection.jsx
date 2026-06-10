import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function WhyGreenEventsSection({ content }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="why-green-events"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-left" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="story-reveal">
            <figure className="luxury-image-shell image-arch relative min-h-[31rem] overflow-hidden sm:min-h-[39rem] lg:min-h-[46rem]">
              <img
                alt={content.image.alt}
                className="h-full min-h-[31rem] w-full object-cover sm:min-h-[39rem] lg:min-h-[46rem]"
                decoding="async"
                loading="lazy"
                src={content.image.src}
              />
            </figure>
          </div>

          <div className="lg:-ml-20">
            <div className="luxury-panel editorial-panel story-reveal p-5 sm:p-7 lg:p-8">
              <p className="mb-4 text-sm font-medium text-[var(--color-gold)]">
                {content.eyebrow}
              </p>
              <h2 className="font-display text-[2.7rem] font-normal leading-[0.98] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                {content.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {content.intro}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:ml-12">
              {content.highlights.map((item) => (
                <article
                  className="story-reveal border-t border-[rgb(33_29_22_/_0.14)] pt-5"
                  key={item.title}
                >
                  <h3 className="font-display text-3xl leading-none text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyGreenEventsSection;
