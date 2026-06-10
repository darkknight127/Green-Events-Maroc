import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function ServicesSection({ header, services }) {
  return (
    <section
      className="luxury-section relative overflow-hidden py-16 text-[#F7F1E7] sm:py-24 lg:py-32"
      id="services"
    >
      <div className="luxury-ambient luxury-ambient-right" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader
            className="lg:sticky lg:top-24"
            eyebrow={header.eyebrow}
            intro={header.intro}
            title={header.title}
          />

          <div className="grid gap-7 sm:gap-8">
            {services.map((service, index) => (
              <article
                className="service-editorial-row group relative lg:grid lg:grid-cols-[0.18fr_0.44fr_0.38fr] lg:items-stretch lg:gap-6"
                key={service.title}
              >
                <div className="luxury-index hidden lg:flex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <figure className="luxury-image-shell min-h-[18rem] overflow-hidden sm:min-h-[24rem] lg:col-start-3 lg:row-start-1 lg:min-h-[20rem]">
                  <img
                    alt={service.image.alt}
                    className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:min-h-[24rem] lg:min-h-[20rem]"
                    decoding="async"
                    loading="lazy"
                    src={service.image.src}
                  />
                </figure>

                <div className="luxury-panel relative z-10 mx-3 -mt-8 p-5 sm:mx-8 sm:-mt-12 sm:p-6 lg:col-start-2 lg:row-start-1 lg:mx-0 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
                  <div className="mb-5 flex items-center justify-between gap-4 lg:block">
                    <span className="font-display text-4xl leading-none text-[#C8A45D] lg:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium text-[#C8A45D]">
                      {service.label}
                    </p>
                  </div>

                  <h3 className="font-display text-[2.35rem] leading-[0.98] text-[#F7F1E7] sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#D8C3A5]">
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
