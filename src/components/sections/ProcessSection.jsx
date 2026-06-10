import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { useSectionReveal } from "../../lib/useSectionReveal";

function ProcessSection({ header, process }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="process"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-left" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="story-reveal lg:sticky lg:top-24">
            <SectionHeader
              eyebrow={header.eyebrow}
              intro={header.intro}
              title={header.title}
            />

            {header.image ? (
              <figure className="luxury-image-shell image-arch-soft mt-8 hidden min-h-[28rem] overflow-hidden lg:block">
                <img
                  alt={header.image.alt}
                  className="h-full min-h-[28rem] w-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={header.image.src}
                />
              </figure>
            ) : null}
          </div>

          <ol className="grid border-y border-[rgb(33_29_22_/_0.12)]">
            {process.map((item) => (
              <li
                className="story-reveal grid grid-cols-[4.25rem_1fr] gap-4 border-t border-[rgb(33_29_22_/_0.12)] py-6 first:border-t-0 sm:grid-cols-[6rem_1fr] sm:gap-7 sm:py-8"
                key={item.step}
              >
                <span className="font-display text-4xl leading-none text-[var(--color-gold)] sm:text-5xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-[2.15rem] leading-none text-[var(--color-ink)] sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
