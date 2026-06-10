import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { useSectionReveal } from "../../lib/useSectionReveal";

function SocialProofSection({ brand, content }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-right" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="story-reveal mb-10 grid gap-6 lg:grid-cols-[0.86fr_0.5fr] lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={content.eyebrow}
            intro={content.intro}
            title={content.title}
          />

          <div className="lg:justify-self-end">
            <Button href={brand.instagram} rel="noreferrer" target="_blank">
              {content.cta}
              <ArrowUpRight aria-hidden="true" size={17} />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.82fr_0.92fr_1.05fr] lg:items-end">
          {content.items.map((item, index) => (
            <a
              aria-label={`${content.cta}: ${item.label}`}
              className={`luxury-image-shell story-reveal group relative block min-h-[21rem] overflow-hidden ${
                index === 0
                  ? "image-arch sm:min-h-[30rem] lg:min-h-[38rem]"
                  : "image-arch-soft sm:min-h-[25rem] lg:min-h-[30rem]"
              } ${index === 2 ? "lg:translate-y-10" : ""}`}
              href={brand.instagram}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt={item.alt}
                className="h-full min-h-[inherit] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                decoding="async"
                loading="lazy"
                src={item.image}
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-[#F7F1E7]/18 bg-[#070605]/52 px-3 py-2 text-sm font-medium text-[#F7F1E7]">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProofSection;
