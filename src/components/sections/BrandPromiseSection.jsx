import Container from "../ui/Container";

function BrandPromiseSection({ content }) {
  return (
    <section className="luxury-section relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="luxury-ambient luxury-ambient-left" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-[#C8A45D]">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-[2.7rem] font-normal leading-[0.98] text-[#F7F1E7] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#D8C3A5] sm:text-lg">
              {content.intro}
            </p>

            <div className="luxury-panel mt-7 p-5 sm:p-6 lg:max-w-lg">
              <p className="font-display text-3xl leading-tight text-[#C8A45D] sm:text-4xl">
                {content.statement}
              </p>
            </div>
          </div>

          <div className="relative">
            <figure className="luxury-image-shell relative min-h-[25rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[39rem]">
              <img
                alt={content.image.alt}
                className="h-full min-h-[25rem] w-full object-cover sm:min-h-[34rem] lg:min-h-[39rem]"
                decoding="async"
                loading="lazy"
                src={content.image.src}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.82)_100%)] p-5 text-sm leading-6 text-[#F7F1E7] sm:p-6">
                {content.caption}
              </figcaption>
            </figure>

            <div className="luxury-panel relative z-10 mx-3 -mt-8 p-5 sm:mx-6 sm:-mt-12 sm:p-6 lg:absolute lg:bottom-8 lg:right-8 lg:mx-0 lg:mt-0 lg:max-w-md">
              {content.pillars.map((pillar) => (
                <div
                  className="border-b border-[#F7F1E7]/12 py-5 first:pt-0 last:border-b-0 last:pb-0"
                  key={pillar.title}
                >
                  <h3 className="font-display text-[1.7rem] leading-tight text-[#F7F1E7]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#D8C3A5]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BrandPromiseSection;
