import OptimizedImage from "../ui/OptimizedImage";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function SocialProofSection({ brand, content }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-surface)] py-14 sm:py-20 lg:py-24"
      ref={sectionRef}
    >
      <Container>
        <header className="story-reveal border-t border-[rgb(33_29_22_/_0.16)] pt-5">
          <p className="mb-3 text-sm font-medium text-[var(--color-gold)]">
            {content.eyebrow}
          </p>
          <h2 className="max-w-[30ch] font-display text-[2rem] font-normal leading-[1.12] text-[var(--color-ink)] sm:text-[2.6rem] lg:text-[3rem]">
            {content.title}
          </h2>
          <p className="font-copy mt-4 max-w-3xl text-lg leading-7 text-[var(--color-muted)] sm:text-xl">
            {content.intro}
          </p>
        </header>

        <div className="mt-8 grid gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <a
              aria-label={`${content.cta}: ${item.label}`}
              className="story-reveal group block min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              href={brand.instagram}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <figure>
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-surface-strong)] sm:aspect-[4/5]">
                  <OptimizedImage
                    alt={item.alt}
                    className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                    width={1200}
                    height={1200}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-3 border-t border-[rgb(33_29_22_/_0.16)] pt-3">
                  <span className="text-xs tabular-nums text-[var(--color-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-tight text-[var(--color-ink)] sm:text-[1.4rem]">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>

        <div className="story-reveal mt-8">
          <a
            className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--color-gold)] text-sm font-medium text-[var(--color-gold)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            href={brand.instagram}
            rel="noreferrer"
            target="_blank"
          >
            {content.cta}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default SocialProofSection;
