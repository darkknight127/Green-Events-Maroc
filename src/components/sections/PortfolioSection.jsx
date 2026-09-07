import Container from "../ui/Container";
import { CoverflowCarousel } from "../ui/coverflow-carousel";
import { useSectionReveal } from "../../lib/useSectionReveal";

function PortfolioSection({ content }) {
  const sectionRef = useSectionReveal();
  const slides = content.gallery.map((image) => {
    const story = image.story ?? content.items[image.storyIndex];

    return {
      alt: image.alt,
      description: story.quote,
      src: image.src,
      subtitle: story.label,
      title: story.title,
    };
  });

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-surface)] py-16 sm:py-24 lg:py-32"
      id="realisations"
      ref={sectionRef}
    >
      <Container className="relative z-10 max-w-[86rem]">
        <header className="story-reveal border-y border-[rgb(138_98_31_/_0.2)] py-5 sm:py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
            {content.eyebrow}
          </p>
          <div>
            <h2 className="max-w-[28ch] font-display text-[2.25rem] font-normal leading-[1.04] text-[var(--color-ink)] sm:text-[2.8rem] lg:text-[3.35rem]">
              {content.title}
            </h2>
            <p className="font-copy mt-4 max-w-[44rem] text-lg leading-7 text-[var(--color-muted)] sm:text-xl">
              {content.intro}
            </p>
          </div>
        </header>
      </Container>

        <div className="story-reveal relative z-10 mt-8 sm:mt-10 lg:mt-12">
          <CoverflowCarousel
            cardWidth="clamp(13rem, 62vw, 25rem)"
            className="mx-auto"
            label={`${content.eyebrow}: ${content.title}`}
            labels={content.controls}
            showNavigation={false}
            slides={slides}
          />
        </div>
    </section>
  );
}

export default PortfolioSection;
