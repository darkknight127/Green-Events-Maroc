import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const itemClasses = [
  "min-h-[28rem] sm:min-h-[36rem] lg:col-span-7 lg:row-span-2",
  "min-h-80 lg:col-span-5",
  "min-h-80 lg:col-span-5",
  "min-h-80 lg:col-span-4",
  "min-h-80 lg:col-span-4",
  "min-h-80 lg:col-span-4",
];

function PortfolioSection({ content }) {
  return (
    <section
      className="luxury-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="realisations"
    >
      <div className="luxury-ambient luxury-ambient-right" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={content.eyebrow}
            intro={content.intro}
            title={content.title}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[18rem] lg:gap-6">
          {content.items.map((item, index) => (
            <figure
              className={`luxury-image-shell group relative ${itemClasses[index]}`}
              key={item.title}
            >
              <img
                alt={item.image.alt}
                className="h-full min-h-[inherit] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                decoding="async"
                loading="lazy"
                src={item.image.src}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.9)_100%)] p-5 sm:p-6">
                <p className="text-sm font-medium text-[#C8A45D]">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F7F1E7] sm:text-3xl">
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PortfolioSection;
