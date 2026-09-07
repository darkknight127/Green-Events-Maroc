import OptimizedImage from "../ui/OptimizedImage";
import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function ProcessSection({ header, process }) {
  const sectionRef = useSectionReveal();

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-24" id="process" ref={sectionRef}>
      <Container>
        <header className="story-reveal border-t border-[rgb(33_29_22_/_0.16)] pt-5">
          <p className="mb-3 text-sm font-medium text-[var(--color-gold)]">{header.eyebrow}</p>
          <h2 className="max-w-[30ch] font-display text-[2rem] font-normal leading-[1.12] text-[var(--color-ink)] sm:text-[2.6rem] lg:text-[3rem]">{header.title}</h2>
          <p className="font-copy mt-4 max-w-3xl text-lg leading-7 text-[var(--color-muted)] sm:text-xl">{header.intro}</p>
        </header>
        <div className="mt-8 grid items-center gap-7 sm:mt-10 md:grid-cols-2 md:gap-8 lg:gap-16">
          {header.image ? (
            <figure className="story-reveal aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-surface-strong)]">
              <OptimizedImage alt={header.image.alt} className="h-full w-full object-cover" decoding="async" loading="lazy" width={1440} height={1080} src={header.image.src} />
            </figure>
          ) : null}
          <ol className="border-y border-[rgb(33_29_22_/_0.14)]">
            {process.map((item) => (
              <li className="story-reveal grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-[rgb(33_29_22_/_0.14)] py-5 first:border-t-0 lg:gap-5 lg:py-6" key={item.step}>
                <span className="pt-1 text-xs font-medium tabular-nums text-[var(--color-gold)]">{item.step}</span>
                <div>
                  <h3 className="font-display text-[1.45rem] font-normal leading-tight text-[var(--color-ink)] lg:text-[1.7rem]">{item.title}</h3>
                  <p className="font-copy mt-2 max-w-xl text-base leading-6 text-[var(--color-muted)] lg:text-lg lg:leading-7">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
