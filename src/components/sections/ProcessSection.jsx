import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function ProcessSection({ header, process }) {
  return (
    <section className="bg-[#10120C] py-20 sm:py-28 lg:py-36" id="process">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeader
            eyebrow={header.eyebrow}
            intro={header.intro}
            title={header.title}
          />

          <ol className="border-t border-[#F7F1E7]/16">
            {process.map((item) => (
              <li
                className="grid gap-4 border-b border-[#F7F1E7]/16 py-7 sm:grid-cols-[7rem_1fr]"
                key={item.step}
              >
                <span className="font-display text-4xl text-[#C8A45D]">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-[#F7F1E7]">
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
