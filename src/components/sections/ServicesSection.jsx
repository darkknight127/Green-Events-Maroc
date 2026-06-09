import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function ServicesSection({ header, services }) {
  return (
    <section
      className="bg-[#F7F1E7] py-20 text-[#070605] sm:py-28 lg:py-36"
      id="services"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            className="[&>h2]:text-[#070605] [&>p]:text-[#4F5A3A]"
            eyebrow={header.eyebrow}
            intro={header.intro}
            title={header.title}
          />

          <div className="border-t border-[#070605]/16">
            {services.map((service, index) => (
              <article
                className="grid gap-5 border-b border-[#070605]/16 py-7 sm:grid-cols-[7rem_1fr] lg:grid-cols-[8rem_1fr_11rem] lg:items-center"
                key={service.title}
              >
                <span className="font-display text-4xl text-[#C8A45D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-2 text-sm font-medium uppercase text-[#4F5A3A]">
                    {service.label}
                  </p>
                  <h3 className="font-display text-3xl leading-tight text-[#070605] sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-8 text-[#40372E]">
                    {service.description}
                  </p>
                </div>
                <img
                  alt={service.image.alt}
                  className="hidden aspect-[4/3] w-full object-cover lg:block"
                  loading="lazy"
                  src={service.image.src}
                />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
