import { ArrowUpRight } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SiteHeader from "../ui/SiteHeader";

function HeroSection({
  brand,
  content,
  language,
  languageLabel,
  onLanguageChange,
  whatsappMessage,
}) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);

  return (
    <>
      <SiteHeader
        brand={brand}
        content={content}
        language={language}
        languageLabel={languageLabel}
        onLanguageChange={onLanguageChange}
        whatsappMessage={whatsappMessage}
      />

      <section className="relative isolate h-screen min-h-[100svh] overflow-hidden bg-[#070605]">
        <picture>
          <source media="(max-width: 767px)" srcSet={content.image.mobileSrc} />
          <img
            alt={content.image.alt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            src={content.image.desktopSrc}
          />
        </picture>

        {content.videoSrc ? (
          <video
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            poster={content.image.desktopSrc}
            preload="metadata"
          >
            <source src={content.videoSrc} type="video/mp4" />
          </video>
        ) : null}

        <div className="absolute inset-0 bg-[#070605]/14" />
        <div className="hero-bottom-blur absolute inset-x-0 bottom-0 h-[52vh]" />

        <Container className="relative z-10 flex h-full flex-col justify-end pb-24 pt-28 sm:pb-10 lg:pb-14">
          <div className="max-w-4xl">
            <p className="animate-blur-fade-up mb-5 text-sm font-semibold uppercase tracking-[0.04em] text-[#F7F1E7] text-shadow-soft [animation-delay:220ms]">
              {content.eyebrow}
            </p>

            <h1 className="animate-blur-fade-up max-w-4xl font-display text-[2.65rem] font-normal leading-[1] text-[#F7F1E7] text-shadow-soft [animation-delay:360ms] sm:text-[3.75rem] lg:text-[4.75rem]">
              {content.title}
            </h1>

            <p className="font-copy animate-blur-fade-up mt-6 max-w-2xl text-lg leading-8 text-[#F7F1E7]/88 text-shadow-soft [animation-delay:520ms] sm:text-xl">
              {content.subtitle}
            </p>

            <div className="animate-blur-fade-up mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:680ms]">
              <Button className="w-full sm:w-auto" href={whatsappHref}>
                {content.primaryCta}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Button>
              <Button
                className="liquid-glass w-full border-[#F7F1E7]/24 bg-transparent text-black hover:border-[#C8A45D] hover:text-[#C8A45D] sm:w-auto"
                href="#realisations"
                variant="outline"
              >
                {content.secondaryCta}
              </Button>
            </div>

            <ul
              aria-label={content.highlightsLabel}
              className="animate-blur-fade-up mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 [animation-delay:840ms]"
            >
              {content.highlights.map((item) => (
                <li
                  className="inline-flex items-center gap-2 text-xs font-medium leading-5 tracking-[0.015em] text-[#F7F1E7]/84 text-shadow-soft"
                  key={item}
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-3 shrink-0 bg-[#C8A45D]/80"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
