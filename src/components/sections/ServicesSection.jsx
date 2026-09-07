import OptimizedImage from "../ui/OptimizedImage";
import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function ServicesSection({ header, services }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-surface)] py-16 text-[var(--color-ink)] sm:py-20 lg:py-24"
      id="services"
      ref={sectionRef}
    >
      <Container className="relative z-10">
        <header className="story-reveal max-w-5xl border-t border-[rgb(33_29_22_/_0.16)] pt-5">
          <p className="mb-4 text-sm font-medium text-[var(--color-gold)]">
            {header.eyebrow}
          </p>
          <h2 className="max-w-[28ch] font-display text-[2.15rem] font-normal leading-[1.1] sm:text-[2.6rem] lg:text-[3rem]">
            {header.title}
          </h2>
          <p className="font-copy mt-4 max-w-4xl text-lg leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
            {header.intro}
          </p>
        </header>

        <div className="mt-12 border-b border-[rgb(33_29_22_/_0.14)] sm:mt-14 lg:mt-16">
          {services.map((service, index) => {
            const imageOnRight = index % 2 === 0;

            return (
              <article
                className="story-reveal grid gap-7 border-t border-[rgb(33_29_22_/_0.14)] py-10 sm:gap-9 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20"
                key={service.title}
              >
                <figure
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e7ddce] lg:col-span-7 lg:row-start-1 lg:aspect-[16/11] ${
                    imageOnRight
                      ? "lg:col-start-6"
                      : "lg:col-start-1"
                  }`}
                >
                  <OptimizedImage
                    alt={service.image.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={service.image.src}
                  />
                </figure>

                <div
                  className={`lg:col-span-5 lg:row-start-1 ${
                    imageOnRight
                      ? "lg:col-start-1 lg:pr-8"
                      : "lg:col-start-8 lg:pl-8"
                  }`}
                >
                  <p className="mb-5 flex items-center gap-3 text-sm font-medium text-[var(--color-gold)]">
                    <span
                      aria-hidden="true"
                      className="h-px w-8 bg-[rgb(138_98_31_/_0.55)]"
                    />
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="max-w-[20ch] font-display text-[2rem] leading-[1.08] sm:text-[2.35rem] lg:text-[2.65rem]">
                    {service.title}
                  </h3>
                  <p className="font-copy mt-5 max-w-[38rem] text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
