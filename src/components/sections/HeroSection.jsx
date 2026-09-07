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

        <Container className="relative z-10 flex h-full flex-col justify-end pb-20 pt-28 sm:pb-10 lg:pb-14 [@media(max-width:639px)_and_(max-height:700px)]:pb-14">
          <div className="mr-auto w-[88%] max-w-[20rem] text-left sm:w-auto sm:max-w-4xl">
            <p className="animate-blur-fade-up mb-3 text-[0.65rem] font-semibold uppercase leading-4 tracking-[0.04em] text-[#F7F1E7] text-shadow-soft [animation-delay:220ms] sm:mb-5 sm:text-sm sm:leading-normal">
              {content.eyebrow}
            </p>

            <h1 className="animate-blur-fade-up max-w-4xl font-display text-[2rem] font-normal leading-[0.98] text-[#F7F1E7] text-shadow-soft [animation-delay:360ms] min-[400px]:text-[2.25rem] sm:text-[3.75rem] lg:text-[4.75rem]">
              {content.title}
            </h1>

            <p className="font-copy animate-blur-fade-up mt-3 max-w-[18rem] text-[0.95rem] leading-6 text-[#F7F1E7]/92 text-shadow-soft [animation-delay:520ms] sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8">
              {content.subtitle}
            </p>

            <div className="animate-blur-fade-up mt-5 flex flex-col items-start gap-2.5 sm:mt-8 sm:flex-row sm:items-stretch sm:gap-3 [animation-delay:680ms]">
              <Button className="min-h-11 w-fit max-w-full px-4 py-2.5 text-xs sm:min-h-12 sm:w-auto sm:px-6 sm:py-3 sm:text-sm" href={whatsappHref}>
                {content.primaryCta}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Button>
              <Button
                className="liquid-glass min-h-11 w-fit max-w-full border-[#F7F1E7]/24 bg-transparent px-4 py-2.5 text-xs text-black hover:border-[#C8A45D] hover:text-[#C8A45D] sm:min-h-12 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                href="#realisations"
                variant="outline"
              >
                {content.secondaryCta}
              </Button>
            </div>

            <ul
              aria-label={content.highlightsLabel}
              className="animate-blur-fade-up mt-4 flex flex-wrap items-center justify-start gap-x-3 gap-y-1.5 [animation-delay:840ms] sm:mt-6 sm:gap-x-5 sm:gap-y-2 [@media(max-width:639px)_and_(max-height:700px)]:hidden"
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
