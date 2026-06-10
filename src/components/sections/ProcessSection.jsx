import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function ProcessSection({ header, process }) {
  return (
    <section
      className="luxury-section relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="process"
    >
      <div className="luxury-ambient luxury-ambient-left" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            className="lg:sticky lg:top-24"
            eyebrow={header.eyebrow}
            intro={header.intro}
            title={header.title}
          />

          <ol className="relative grid gap-5 before:absolute before:left-[1.18rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(200,164,93,0),rgba(200,164,93,0.5),rgba(200,164,93,0))] sm:gap-6">
            {process.map((item) => (
              <li
                className="relative grid grid-cols-[2.4rem_1fr] gap-4 sm:grid-cols-[4.5rem_1fr]"
                key={item.step}
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#C8A45D]/45 bg-[#070605] font-display text-xl text-[#C8A45D] shadow-[0_0_8px_rgba(200,164,93,0.14)] sm:h-14 sm:w-14 sm:text-2xl">
                  {item.step}
                </span>
                <div className="luxury-panel p-5 sm:p-6">
                  <h3 className="font-display text-[2.15rem] leading-none text-[#F7F1E7] sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-8 text-[#D8C3A5]">
                    {item.description}
                  </p>
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
