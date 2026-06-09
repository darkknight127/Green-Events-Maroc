import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";

function FinalCtaSection({ brand, content, whatsappMessage }) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);

  return (
    <section
      className="relative overflow-hidden bg-[#D8C3A5] py-20 text-[#070605] sm:py-28 lg:py-36"
      id="contact"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#070605]/20" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-medium uppercase text-[#4F5A3A]">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-5xl font-normal leading-none text-[#070605] sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-[#30281F] sm:text-lg">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" href={whatsappHref}>
                {content.primaryCta}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Button>
              <Button
                className="w-full border-[#070605]/30 text-[#070605] hover:border-[#4F5A3A] hover:text-[#4F5A3A] sm:w-auto"
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
      </Container>
    </section>
  );
}

export default FinalCtaSection;
