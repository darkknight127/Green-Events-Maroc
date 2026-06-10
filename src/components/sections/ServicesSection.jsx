import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { useSectionReveal } from "../../lib/useSectionReveal";

function ServicesSection({ header, services }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="luxury-section wedding-flow-section relative overflow-hidden py-16 text-[var(--color-ink)] sm:py-24 lg:py-32"
      id="services"
      ref={sectionRef}
    >
      <div className="luxury-ambient luxury-ambient-right" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionHeader
            className="story-reveal lg:sticky lg:top-24"
            eyebrow={header.eyebrow}
            intro={header.intro}
            title={header.title}
          />

          <div className="grid gap-10 sm:gap-12">
            {services.map((service, index) => (
              <article
                className={`service-editorial-row story-reveal group relative lg:grid lg:grid-cols-[0.9fr_0.62fr] lg:items-center lg:gap-0 ${
                  index % 2 === 1 ? "lg:[&>figure]:col-start-2" : ""
                }`}
                key={service.title}
              >
                <figure className="luxury-image-shell image-arch-soft min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:row-start-1 lg:min-h-[32rem]">
                  <img
                    alt={service.image.alt}
                    className="h-full min-h-[22rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] sm:min-h-[28rem] lg:min-h-[32rem]"
                    decoding="async"
                    loading="lazy"
                    src={service.image.src}
                  />
                </figure>

                <div
                  className={`luxury-panel editorial-panel relative z-10 mx-3 -mt-10 p-5 sm:mx-8 sm:-mt-14 sm:p-7 lg:row-start-1 lg:mx-0 lg:mt-0 lg:min-h-[22rem] lg:max-w-md lg:self-center ${
                    index % 2 === 1
                      ? "lg:col-start-1 lg:justify-self-end lg:-mr-12"
                      : "lg:col-start-2 lg:-ml-12"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4 lg:block">
                    <span className="font-display text-4xl leading-none text-[var(--color-gold)] lg:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium text-[var(--color-gold)] lg:flex lg:items-center lg:gap-3">
                      <span className="hidden font-display text-3xl leading-none lg:inline">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{service.label}</span>
                    </p>
                  </div>

                  <h3 className="font-display text-[2.35rem] leading-[0.98] text-[var(--color-ink)] sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
