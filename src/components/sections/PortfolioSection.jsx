import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { useSectionReveal } from "../../lib/useSectionReveal";

function PortfolioSection({ content }) {
  const sectionRef = useSectionReveal();
  const portfolioItems = content.items.map((item) => ({
    alt: item.image.alt,
    designation: item.label,
    name: item.title,
    quote: item.quote,
    src: item.image.src,
  }));

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="realisations"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-right" aria-hidden="true" />

      <Container className="relative z-10 max-w-[86rem]">
        <div className="story-reveal mb-10 sm:mb-14 lg:mb-4">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} />
        </div>

        <AnimatedTestimonials
          labels={content.controls}
          testimonials={portfolioItems}
        />
      </Container>
    </section>
  );
}

export default PortfolioSection;
