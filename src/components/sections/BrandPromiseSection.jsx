import OptimizedImage from "../ui/OptimizedImage";
import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function BrandPromiseSection({ content }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-page)] py-20 sm:py-28 lg:py-36"
      ref={sectionRef}
    >
      <Container className="relative z-10">
        <p className="story-reveal border-t border-[rgb(33_29_22_/_0.16)] pt-5 text-sm font-medium text-[var(--color-gold)]">
          {content.eyebrow}
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
          <div className="story-reveal lg:pt-6">
            <h2 className="max-w-[30ch] font-display text-[1.85rem] font-normal leading-[1.18] text-[var(--color-ink)] sm:text-[2.1rem] lg:max-w-none lg:text-[2.25rem] xl:text-[2.4rem]">
              {content.title}
            </h2>

            <div className="font-copy mt-8 max-w-[42rem] space-y-4 text-lg leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
              <p>
                {content.introPrefix}
                <strong className="font-semibold text-[var(--color-ink)]">
                  {content.introBrand}
                </strong>
                {content.introSuffix}
              </p>
              <p>{content.introBody}</p>
              <p className="font-semibold text-[var(--color-ink)]">
                {content.introGoal}
              </p>
            </div>

            <p className="mt-9 max-w-lg border-t border-[rgb(155_114_40_/_0.32)] pt-5 font-display text-[1.35rem] leading-[1.3] text-[var(--color-gold)] sm:text-[1.5rem]">
              {content.statement}
            </p>
          </div>

          <div className="story-reveal lg:justify-self-end lg:w-full lg:max-w-[50rem]">
            <figure className="relative min-h-[38rem] overflow-hidden rounded-sm bg-[#e7ddce] sm:min-h-[42rem] lg:min-h-[46rem]">
              <OptimizedImage
                alt={content.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
                loading="lazy"
                src={content.image.src}
              />
            </figure>
          </div>

          <div className="story-reveal bg-[var(--color-surface)] p-5 text-[var(--color-ink)] shadow-[0_4px_12px_rgb(33_29_22_/_0.1)] sm:p-6 md:grid md:grid-cols-3 md:gap-6 lg:col-span-2">
            {content.pillars.map((pillar) => (
              <div
                className="border-t border-[rgb(155_114_40_/_0.38)] py-4 md:pb-0"
                key={pillar.title}
              >
                <h3 className="text-center font-display text-base font-bold leading-5 text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="font-copy mt-2 text-base leading-[1.5] text-[var(--color-muted)] sm:text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BrandPromiseSection;
