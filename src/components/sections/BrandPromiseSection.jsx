import Container from "../ui/Container";

function BrandPromiseSection({ content }) {
  return (
    <section className="bg-[#070605] py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-medium uppercase text-[#C8A45D]">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-normal leading-tight text-[#F7F1E7] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#D8C3A5] sm:text-lg">
              {content.intro}
            </p>
            <p className="mt-8 font-display text-3xl leading-tight text-[#C8A45D]">
              {content.statement}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[0.88fr_1.12fr] sm:items-end">
            <figure className="relative min-h-80 overflow-hidden bg-[#15110D] sm:min-h-[34rem]">
              <img
                alt={content.image.alt}
                className="h-full min-h-80 w-full object-cover sm:min-h-[34rem]"
                loading="lazy"
                src={content.image.src}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.86)_100%)] p-5 text-sm leading-6 text-[#F7F1E7]">
                {content.caption}
              </figcaption>
            </figure>

            <div className="border-y border-[#F7F1E7]/16">
              {content.pillars.map((pillar) => (
                <div
                  className="border-b border-[#F7F1E7]/16 py-6 last:border-b-0"
                  key={pillar.title}
                >
                  <h3 className="font-display text-2xl text-[#F7F1E7]">
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
