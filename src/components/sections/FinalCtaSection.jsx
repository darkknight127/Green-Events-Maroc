import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function FinalCtaSection({ brand, content, whatsappMessage }) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden pb-24 pt-16 text-[#F7F1E7] sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32"
      id="contact"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-center" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="story-reveal relative overflow-hidden rounded-[1rem] border border-[#F7F1E7]/14 bg-[#0A0806]">
          {content.image ? (
            <img
              alt={content.image.alt}
              className="absolute inset-0 h-full w-full object-cover opacity-[0.54]"
              decoding="async"
              loading="lazy"
              src={content.image.src}
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,0.94)_0%,rgba(7,6,5,0.72)_48%,rgba(7,6,5,0.28)_100%)]" />
          <div className="hero-bottom-blur absolute inset-x-0 bottom-0 h-1/2 opacity-80" />

          <div className="relative grid min-h-[34rem] gap-9 p-6 sm:p-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-end lg:p-10">
            <div className="story-reveal max-w-3xl">
              <p className="mb-4 text-sm font-medium text-[#C8A45D]">
                {content.eyebrow}
              </p>
              <h2 className="font-display text-[3rem] font-normal leading-[0.92] text-[#F7F1E7] text-shadow-soft sm:text-6xl lg:text-7xl">
                {content.title}
              </h2>
            </div>

            <div className="story-reveal lg:justify-self-end">
              <p className="max-w-xl text-base leading-8 text-[#F7F1E7]/86 text-shadow-soft sm:text-lg">
                {content.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="w-full sm:w-auto" href={whatsappHref}>
                  {content.primaryCta}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </Button>
                <Button
                  className="w-full border-[#F7F1E7]/35 text-[#F7F1E7] hover:border-[#C8A45D] hover:text-[#C8A45D] sm:w-auto"
                  href={brand.instagram}
                  rel="noreferrer"
                  target="_blank"
                  variant="outline"
                >
                  {content.instagramCta}
                  <ExternalLink aria-hidden="true" size={17} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCtaSection;
