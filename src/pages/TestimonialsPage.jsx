import { Link } from "react-router-dom";
import FooterSection from "../components/sections/FooterSection";
import StickyWhatsAppButton from "../components/sections/StickyWhatsAppButton";
import Container from "../components/ui/Container";
import SiteHeader from "../components/ui/SiteHeader";

function TestimonialsPage({
  brand,
  content,
  language,
  onLanguageChange,
}) {
  return (
    <main
      className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]"
      id="top"
      lang={language}
    >
      <SiteHeader
        alwaysCompact
        brand={brand}
        content={content.hero}
        language={language}
        languageLabel={content.languageLabel}
        onLanguageChange={onLanguageChange}
        whatsappMessage={content.whatsappMessage}
      />

      <section className="luxury-section relative min-h-[70svh] overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="luxury-ambient luxury-ambient-center" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-[var(--color-gold)]">
              {content.testimonialsPage.eyebrow}
            </p>
            <h1 className="font-display text-[2.65rem] font-normal leading-[1.05] sm:text-[3.5rem] lg:text-[4.25rem]">
              {content.testimonialsPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {content.testimonialsPage.intro}
            </p>
            <Link
              className="mt-9 inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-gold)] transition-colors duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              to="/"
            >
              {content.testimonialsPage.backLabel}
            </Link>
          </div>
        </Container>
      </section>

      <FooterSection
        brand={brand}
        content={content.footer}
        whatsappMessage={content.whatsappMessage}
      />
      <StickyWhatsAppButton
        brand={brand}
        content={content.stickyWhatsApp}
        whatsappMessage={content.whatsappMessage}
      />
    </main>
  );
}

export default TestimonialsPage;
