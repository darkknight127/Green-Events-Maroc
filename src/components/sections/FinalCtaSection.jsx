import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";

function FinalCtaSection({ brand, content, whatsappMessage }) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);

  return (
    <section
      className="luxury-section relative overflow-hidden pb-24 pt-16 text-[#F7F1E7] sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32"
      id="contact"
    >
      <div className="luxury-ambient luxury-ambient-center" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="luxury-cta-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C8A45D]/10 blur-3xl"
          />

          <div className="relative grid gap-9 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-medium text-[#C8A45D]">
                {content.eyebrow}
              </p>
              <h2 className="font-display text-[3rem] font-normal leading-[0.92] text-[#F7F1E7] sm:text-6xl lg:text-7xl">
                {content.title}
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#D8C3A5] sm:text-lg">
                {content.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="w-full sm:w-auto" href={whatsappHref}>
                  {content.primaryCta}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </Button>
                <Button
                  className="w-full sm:w-auto"
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
