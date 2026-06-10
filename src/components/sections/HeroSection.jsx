import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";
import LanguageSwitcher from "../ui/LanguageSwitcher";

function HeroSection({
  brand,
  content,
  language,
  languageLabel,
  onLanguageChange,
  whatsappMessage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavCompact, setIsNavCompact] = useState(false);
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);
  const menuLabel = isMenuOpen ? content.closeMenuLabel : content.menuLabel;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateNav = () => {
      setIsNavCompact(window.scrollY > 32);
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[120] transition-all duration-500 ease-out ${
          isNavCompact ? "pt-3" : "pt-5 sm:pt-6"
        }`}
      >
        <div
          className={`mx-auto w-full px-5 transition-[max-width,padding] duration-500 ease-out sm:px-8 lg:px-12 ${
            isNavCompact ? "max-w-5xl" : "max-w-7xl"
          }`}
        >
          <div
            className={`relative flex items-center justify-between gap-4 transition-all duration-500 ease-out ${
              isNavCompact
                ? "liquid-glass px-4 py-2.5 sm:px-5"
                : "px-0 py-0"
            }`}
          >
            <a
              aria-label="Green Events Maroc"
              className={`font-display leading-none transition-[font-size,color] duration-500 ${
                isNavCompact ? "text-[1.35rem]" : "text-[1.7rem]"
              } ${
                isNavCompact
                  ? "text-[var(--color-ink)]"
                  : "text-[#F7F1E7] text-shadow-soft"
              }`}
              href="#top"
              onClick={closeMenu}
            >
              {brand.name}
            </a>

            <nav
              aria-label="Main navigation"
              className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm lg:flex ${
                isNavCompact
                  ? "text-[rgb(33_29_22_/_0.78)]"
                  : "text-[#F7F1E7]/86"
              }`}
            >
              {content.navigation.map((item) => (
                <a
                  className="transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher
                activeLanguage={language}
                ariaLabel={languageLabel}
                onChange={onLanguageChange}
              />
              <Button
                className={`transition-[min-height,padding] duration-500 ${
                  isNavCompact ? "min-h-10 px-4 py-2" : "min-h-11 px-5 py-2.5"
                }`}
                href={whatsappHref}
              >
                {content.primaryCta}
              </Button>
            </div>

            <button
              aria-controls="hero-mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={menuLabel}
              className="liquid-glass inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" size={19} strokeWidth={1.75} />
              ) : (
                <Menu aria-hidden="true" size={19} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`liquid-glass liquid-glass-panel fixed left-5 right-5 z-[130] overflow-hidden p-4 transition-all duration-500 ease-out sm:left-8 sm:right-8 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        } ${isNavCompact ? "top-[4.25rem]" : "top-[4.75rem]"}`}
        id="hero-mobile-menu"
      >
        <nav aria-label="Mobile navigation" className="grid gap-1">
          {content.navigation.map((item) => (
            <a
              className="px-2 py-3 text-base text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-4 grid gap-3 border-t border-[rgb(33_29_22_/_0.14)] pt-4">
          <LanguageSwitcher
            activeLanguage={language}
            ariaLabel={languageLabel}
            onChange={(nextLanguage) => {
              onLanguageChange(nextLanguage);
              closeMenu();
            }}
          />
          <Button href={whatsappHref} onClick={closeMenu}>
            {content.primaryCta}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Button>
        </div>
      </div>

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

        <Container className="relative z-10 flex h-full flex-col justify-end pb-7 pt-28 sm:pb-10 lg:pb-14">
          <div className="max-w-4xl">
            <p className="animate-blur-fade-up mb-5 text-sm font-medium uppercase text-[#C8A45D] text-shadow-soft [animation-delay:220ms]">
              {content.eyebrow}
            </p>

            <h1 className="animate-blur-fade-up max-w-4xl font-display text-5xl font-normal leading-[0.95] text-[#F7F1E7] text-shadow-soft [animation-delay:360ms] sm:text-7xl lg:text-[5.75rem]">
              {content.title}
            </h1>

            <p className="animate-blur-fade-up mt-6 max-w-2xl text-base leading-8 text-[#F7F1E7]/88 text-shadow-soft [animation-delay:520ms] sm:text-lg">
              {content.subtitle}
            </p>

            <div className="animate-blur-fade-up mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:680ms]">
              <Button className="w-full sm:w-auto" href={whatsappHref}>
                {content.primaryCta}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Button>
              <Button
                className="liquid-glass w-full border-[#F7F1E7]/24 bg-transparent text-[#F7F1E7] hover:border-[#C8A45D] hover:text-[#C8A45D] sm:w-auto"
                href="#realisations"
                variant="outline"
              >
                {content.secondaryCta}
              </Button>
            </div>

            <div className="animate-blur-fade-up mt-6 flex flex-wrap gap-2 [animation-delay:840ms]">
              {content.highlights.map((item) => (
                <span
                  className="liquid-glass px-3.5 py-2 text-xs font-medium text-[var(--color-ink)]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
