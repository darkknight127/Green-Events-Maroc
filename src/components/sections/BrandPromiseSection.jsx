import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function BrandPromiseSection({ content }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-left" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-11 lg:grid-cols-[0.82fr_1.18fr] lg:items-center xl:gap-16">
          <div className="story-reveal max-w-2xl">
            <p className="mb-4 text-sm font-medium text-[var(--color-gold)]">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-[2.7rem] font-normal leading-[0.98] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {content.intro}
            </p>

            <div className="mt-8 border-l border-[rgb(155_114_40_/_0.45)] pl-5 sm:pl-6 lg:max-w-lg">
              <p className="font-display text-3xl leading-tight text-[var(--color-gold)] sm:text-4xl">
                {content.statement}
              </p>
            </div>
          </div>

          <div className="story-reveal relative lg:justify-self-center lg:w-full lg:max-w-[48rem] xl:max-w-[52rem]">
            <figure className="luxury-image-shell image-arch relative min-h-[28rem] overflow-hidden sm:min-h-[36rem] lg:min-h-[40rem] xl:min-h-[42rem]">
              <img
                alt={content.image.alt}
                className="h-full min-h-[28rem] w-full object-cover sm:min-h-[36rem] lg:min-h-[40rem] xl:min-h-[42rem]"
                decoding="async"
                loading="lazy"
                src={content.image.src}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.84)_100%)] p-5 text-sm leading-6 text-[#F7F1E7] sm:p-7">
                {content.caption}
              </figcaption>
            </figure>

            <div className="luxury-panel editorial-panel relative z-10 mx-3 -mt-10 p-5 sm:mx-8 sm:-mt-14 sm:p-6 lg:absolute lg:bottom-10 lg:right-10 lg:mx-0 lg:mt-0 lg:max-w-md">
              {content.pillars.map((pillar) => (
                <div
                  className="story-reveal border-b border-[rgb(33_29_22_/_0.12)] py-5 first:pt-0 last:border-b-0 last:pb-0"
                  key={pillar.title}
                >
                  <h3 className="font-display text-[1.7rem] leading-tight text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BrandPromiseSection;
