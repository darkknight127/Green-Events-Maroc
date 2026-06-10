import { useState } from "react";
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
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);
  const menuLabel = isMenuOpen ? content.closeMenuLabel : content.menuLabel;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#070605]">
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
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster={content.image.desktopSrc}
        >
          <source src={content.videoSrc} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[#070605]/18" />
      <div className="hero-bottom-blur absolute inset-x-0 bottom-0 h-[48svh]" />

      <Container className="relative z-10 flex min-h-svh flex-col justify-between pb-8 pt-5 sm:pb-10 sm:pt-7 lg:pb-12">
        <header className="animate-blur-fade-up flex items-center justify-between gap-4 [animation-delay:80ms]">
          <a
            aria-label="Green Events Maroc"
            className="font-display text-[1.7rem] leading-none text-[#F7F1E7] text-shadow-soft"
            href="#top"
            onClick={closeMenu}
          >
            {brand.name}
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm text-[#F7F1E7]/86 lg:flex"
          >
            {content.navigation.map((item) => (
              <a
                className="transition-colors duration-300 hover:text-[#C8A45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D]"
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
            <Button className="min-h-11 px-5 py-2.5" href={whatsappHref}>
              {content.primaryCta}
            </Button>
          </div>

          <button
            aria-controls="hero-mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={menuLabel}
            className="liquid-glass inline-flex h-11 w-11 items-center justify-center text-[#F7F1E7] transition-colors duration-300 hover:text-[#C8A45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D] lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={19} strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" size={19} strokeWidth={1.75} />
            )}
          </button>
        </header>

        <div
          className={`liquid-glass liquid-glass-panel absolute left-5 right-5 top-[4.75rem] z-20 overflow-hidden p-4 transition-all duration-500 ease-out sm:left-8 sm:right-8 lg:hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
          id="hero-mobile-menu"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {content.navigation.map((item) => (
              <a
                className="px-2 py-3 text-base text-[#F7F1E7] transition-colors duration-300 hover:text-[#C8A45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D]"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid gap-3 border-t border-[#F7F1E7]/14 pt-4">
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

        <div className="mb-2 mt-auto max-w-5xl pt-28 sm:pt-36">
          <p className="animate-blur-fade-up mb-5 text-sm font-medium uppercase text-[#C8A45D] text-shadow-soft [animation-delay:220ms]">
            {content.eyebrow}
          </p>

          <h1 className="animate-blur-fade-up max-w-4xl font-display text-5xl font-normal leading-[0.95] text-[#F7F1E7] text-shadow-soft [animation-delay:360ms] sm:text-7xl lg:text-8xl">
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
              className="liquid-glass w-full border-[#F7F1E7]/24 bg-transparent sm:w-auto"
              href="#realisations"
              variant="outline"
            >
              {content.secondaryCta}
            </Button>
          </div>

          <div className="animate-blur-fade-up mt-6 flex flex-wrap gap-2 [animation-delay:840ms]">
            {content.highlights.map((item) => (
              <span
                className="liquid-glass px-3.5 py-2 text-xs font-medium text-[#F7F1E7]/90"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
