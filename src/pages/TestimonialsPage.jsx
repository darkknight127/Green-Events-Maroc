import OptimizedImage from "../components/ui/OptimizedImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import FooterSection from "../components/sections/FooterSection";
import StickyWhatsAppButton from "../components/sections/StickyWhatsAppButton";
import Container from "../components/ui/Container";
import SiteHeader from "../components/ui/SiteHeader";
import ReviewCountries from "../components/ui/ReviewCountries";
import { testimonials, testimonialsCopy } from "../data/testimonials";
import "./testimonials.css";

// Render only the emphasis supplied in the reviews; never interpret client text as HTML.
function ReviewText({ text }) {
  return text.split(/\n\n+/).map((paragraph, index) => (
    <p className="whitespace-pre-line" key={index}>
      {paragraph.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, partIndex) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={partIndex}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </p>
  ));
}

function TestimonialEntry({ review, index, language, copy }) {
  const [showOriginal, setShowOriginal] = useState(false);
  const isTranslation = language !== review.originalLanguage;
  const text = isTranslation ? review.translation : review.original;
  const plainText = text.replace(/\*\*([^*]+)\*\*|\*([^*]+)\*/g, "$1$2");
  const excerpt = plainText.length > 540
    ? plainText.slice(0, plainText.lastIndexOf(" ", 540)) + "…"
    : plainText;
  const imageOnRight = index % 2 === 0;
  const dialogText = showOriginal ? review.original : text;

  return (
    <article className="testimonial-row">
      <figure className={`testimonial-photo ${imageOnRight ? "testimonial-photo-right" : ""}`}>
        <OptimizedImage src={review.image.src} alt={review.image.alt[language]} loading="lazy" decoding="async" width={1200} height={1200} />
      </figure>
      <div className={`testimonial-copy ${imageOnRight ? "testimonial-copy-left" : ""}`}>
        <div className="testimonial-identity">
          <h2 className="testimonial-name">{review.name}</h2>
          <ReviewCountries codes={review.countries} language={language} />
        </div>
        <p className="testimonial-tag">{review.occasion[language]}</p>
        {isTranslation ? <p className="testimonial-translation">{copy.translated}</p> : null}
        <blockquote className="testimonial-excerpt whitespace-pre-line">{excerpt}</blockquote>
        <div className="testimonial-actions">
          <Dialog.Root onOpenChange={() => setShowOriginal(false)}>
            <Dialog.Trigger className="testimonial-link">{copy.read}</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="testimonial-overlay" />
              <Dialog.Content
                className="testimonial-modal"
                lang={showOriginal ? review.originalLanguage : language}
              >
                <header className="testimonial-modal-header">
                  <div>
                    <div className="testimonial-identity">
                      <Dialog.Title className="testimonial-name">{review.name}</Dialog.Title>
                      <ReviewCountries codes={review.countries} language={language} />
                    </div>
                    <Dialog.Description className="testimonial-translation">
                      {copy.full}{isTranslation && !showOriginal ? ` · ${copy.translated}` : ""}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close className="testimonial-close" aria-label={copy.close}>
                    <X size={22} aria-hidden="true" />
                  </Dialog.Close>
                </header>
                <div className="testimonial-modal-body">
                  {isTranslation ? (
                    <button className="testimonial-link mb-6" type="button" onClick={() => setShowOriginal((value) => !value)}>
                      {showOriginal ? copy.translation : copy.original}
                    </button>
                  ) : null}
                  <div className="testimonial-story"><ReviewText text={dialogText} /></div>
                  <p className="testimonial-signature">— {review.name}</p>
                  <Dialog.Close className="testimonial-link mt-6">{copy.close}</Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <Link className="testimonial-link" to="/#contact">{copy.contact}</Link>
        </div>
      </div>
    </article>
  );
}

function TestimonialsPage({ brand, content, language, onLanguageChange }) {
  const copy = testimonialsCopy[language];

  return (
    <main className="min-h-screen bg-white text-[var(--color-ink)]" id="top" lang={language}>
      <SiteHeader
        alwaysCompact
        brand={brand}
        content={content.hero}
        language={language}
        languageLabel={content.languageLabel}
        onLanguageChange={onLanguageChange}
        whatsappMessage={content.whatsappMessage}
      />
      <section className="testimonials-page pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Container className="max-w-[88rem]">
          <header className="testimonials-intro">
            <h1 className="font-brand text-[2.25rem] font-normal leading-tight sm:text-[2.75rem]">{copy.title}</h1>
            <p className="mt-6">{copy.welcome}</p>
            <p className="mt-4">{copy.intro}</p>
            <p className="testimonials-image-note">{copy.imageNote}</p>
          </header>
          <div>
            {testimonials.map((review, index) => (
              <TestimonialEntry key={review.id} review={review} index={index} language={language} copy={copy} />
            ))}
          </div>
        </Container>
      </section>
      <FooterSection brand={brand} content={content.footer} whatsappMessage={content.whatsappMessage} />
      <StickyWhatsAppButton brand={brand} content={content.stickyWhatsApp} whatsappMessage={content.whatsappMessage} />
    </main>
  );
}

export default TestimonialsPage;
