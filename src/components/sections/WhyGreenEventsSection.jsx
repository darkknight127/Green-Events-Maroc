import Container from "../ui/Container";
import { useSectionReveal } from "../../lib/useSectionReveal";

function WhyGreenEventsSection({ content }) {
  const sectionRef = useSectionReveal();

  return (
    <section className="relative bg-[var(--color-surface)] pb-16 sm:pb-20 lg:pb-24" id="why-green-events" ref={sectionRef}>
      <Container>
        <div className="story-reveal border-y border-[rgb(33_29_22_/_0.16)] py-8 sm:py-10">
          <p className="mb-3 text-sm font-medium text-[var(--color-gold)]">{content.eyebrow}</p>
          <h2 className="max-w-[34ch] font-display text-[1.8rem] font-normal leading-[1.15] text-[var(--color-ink)] sm:text-[2.3rem] lg:text-[2.65rem]">
            {content.title.split(/(Green Events Maroc)/).map((part, index) =>
              part === "Green Events Maroc" ? <span className="font-brand" key={index}>{part}</span> : part
            )}
          </h2>
          <div className="mt-6 max-w-4xl border-l-2 border-[var(--color-gold-soft)] pl-5 sm:pl-7">
            <p className="font-copy text-lg leading-7 text-[var(--color-ink)] sm:text-xl sm:leading-8">
              <strong className="font-semibold">{content.statement}</strong>
            </p>
            <p className="font-copy mt-3 text-lg leading-7 text-[var(--color-muted)] sm:text-xl">{content.intro}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {content.highlights.map((item) => (
            <article className="story-reveal" key={item.title}>
              <h3 className="font-display text-xl font-normal leading-tight text-[var(--color-ink)]">{item.title}</h3>
              <p className="font-copy mt-2 text-base leading-6 text-[var(--color-muted)] sm:text-lg">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyGreenEventsSection;
