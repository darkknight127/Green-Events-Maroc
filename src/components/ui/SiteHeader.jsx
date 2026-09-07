import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppHref } from "../../lib/utils";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

function SiteHeader({
  alwaysCompact = false,
  brand,
  content,
  language,
  languageLabel,
  onLanguageChange,
  whatsappMessage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isNavCompact = alwaysCompact || hasScrolled;
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);
  const menuLabel = isMenuOpen ? content.closeMenuLabel : content.menuLabel;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateNav = () => setHasScrolled(window.scrollY > 32);

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
          className="mx-auto w-full max-w-7xl px-5 transition-[padding] duration-500 ease-out sm:px-8 lg:px-12"
        >
          <div
            className={`relative flex items-center justify-between gap-4 transition-all duration-500 ease-out xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center ${
              isNavCompact
                ? "liquid-glass px-4 py-2.5 sm:px-5"
                : "px-0 py-0"
            }`}
          >
            <Link
              aria-label="Green Events Maroc"
              className={`inline-flex shrink-0 items-center gap-1.5 font-brand leading-none transition-[font-size,color] duration-500 ${
                isNavCompact
                  ? "text-[1.25rem] min-[360px]:text-[1.5rem] min-[400px]:text-[1.75rem]"
                  : "text-[1.35rem] min-[360px]:text-[1.75rem] min-[400px]:text-[2rem]"
              } ${
                isNavCompact
                  ? "text-[var(--color-ink)]"
                  : "text-[#F7F1E7] text-shadow-soft"
              }`}
              onClick={closeMenu}
              to="/#top"
            >
              <img
                alt=""
                aria-hidden="true"
                className={`header-brand-mark w-auto shrink-0 transition-[height,filter] duration-500 ${
                  isNavCompact
                    ? "h-7 min-[360px]:h-8 min-[400px]:h-9"
                    : "header-brand-mark-light h-8 min-[360px]:h-9 min-[400px]:h-10"
                }`}
                decoding="async"
                height="272"
                src={brand.logo}
                width="421"
              />
              <span className="whitespace-nowrap">{brand.name}</span>
            </Link>

            <nav
              aria-label="Main navigation"
              className={`hidden min-w-0 items-center justify-center justify-self-center text-sm xl:flex ${
                isNavCompact ? "gap-5 xl:gap-6" : "gap-6 xl:gap-8"
              } ${
                isNavCompact
                  ? "text-[rgb(33_29_22_/_0.78)]"
                  : "text-[#F7F1E7]/86"
              }`}
            >
              {content.navigation.map((item) => (
                <Link
                  className="transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  key={item.href}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center justify-self-end gap-3 xl:flex">
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
              aria-controls="site-mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={menuLabel}
              className="liquid-glass inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] xl:hidden"
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
        } ${isNavCompact ? "top-[4.25rem]" : "top-[4.75rem]"} xl:hidden`}
        id="site-mobile-menu"
      >
        <nav aria-label="Mobile navigation" className="grid gap-1">
          {content.navigation.map((item) => (
            <Link
              className="px-2 py-3 text-base text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              key={item.href}
              onClick={closeMenu}
              to={item.href}
            >
              {item.label}
            </Link>
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
    </>
  );
}

export default SiteHeader;
