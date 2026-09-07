import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppHref } from "../../lib/utils";
import Container from "../ui/Container";

function FooterSection({ brand, content, whatsappMessage }) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);

  return (
    <footer className="relative overflow-hidden bg-[var(--color-surface-strong)] py-12 text-[var(--color-ink)] sm:py-16 lg:pt-20">
      <Container className="relative z-10">
        <div className="grid gap-12 border-t border-[rgb(33_29_22_/_0.14)] pt-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(30rem,0.85fr)] lg:gap-20 lg:pt-12">
          <div className="max-w-2xl">
            <Link
              aria-label="Green Events Maroc"
              className="inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              to="/#top"
            >
              <img
                alt="Monogramme Green Events Maroc"
                className="h-16 w-auto sm:h-20"
                decoding="async"
                height="272"
                loading="lazy"
                src={brand.logo}
                width="421"
              />
            </Link>
            <h2 className="mt-7 max-w-[22ch] font-display text-[1.8rem] font-normal leading-[1.12] text-[var(--color-ink)] sm:text-[2.2rem]">
              {content.title}
            </h2>
            <p className="font-copy mt-5 max-w-xl text-lg leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
              {content.descriptionStart}
              <strong className="font-semibold text-[var(--color-ink)]">
                {content.descriptionEmphasis}
              </strong>
              {content.descriptionEnd}
            </p>
            {content.location ? (
              <p className="mt-4 text-sm leading-6 text-[rgb(33_29_22_/_0.72)]">
                {content.location}
              </p>
            ) : null}
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] [&>*]:min-w-0 [&_a]:[overflow-wrap:anywhere]">
            <nav aria-label={content.navigationTitle}>
              <h2 className="text-sm text-[rgb(33_29_22_/_0.56)]">
                {content.navigationTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {content.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-[0.95rem] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm text-[rgb(33_29_22_/_0.56)]">
                {content.contactTitle}
              </h2>
              <div className="mt-5 grid gap-3">
                <a
                  className="inline-flex items-start gap-2 text-[0.95rem] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  href={whatsappHref}
                >
                  {content.whatsappLabel}
                  <ArrowUpRight aria-hidden="true" className="mt-0.5 shrink-0" size={15} />
                </a>
                <a
                  className="text-[0.95rem] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  href={`tel:${brand.whatsapp}`}
                >
                  {content.phoneLabel}: {brand.phone}
                </a>
                <a
                  className="break-words text-[0.95rem] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  href={`mailto:${brand.email}`}
                >
                  {content.emailLabel}: {brand.email}
                </a>
                <a
                  className="text-[0.95rem] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                  href={brand.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.instagramLabel}: {brand.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[rgb(33_29_22_/_0.14)] pt-10 text-center sm:mt-20 lg:mt-24 lg:pt-12">
          <Link
            aria-label="Retour en haut de la page"
            className="font-brand text-[clamp(3rem,9.5vw,10rem)] leading-[0.85] text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--color-gold)]"
            to="/#top"
          >
            {brand.name}
          </Link>

          <div className="mt-9 flex flex-col items-center justify-center gap-2 text-xs text-[rgb(33_29_22_/_0.6)] sm:flex-row sm:gap-3">
            <p>{content.legal}</p>
            <span aria-hidden="true" className="hidden sm:inline">•</span>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
