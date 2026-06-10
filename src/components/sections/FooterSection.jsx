import { ArrowUpRight } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";
import Container from "../ui/Container";

function FooterSection({ brand, content, whatsappMessage }) {
  const whatsappHref = getWhatsAppHref(brand.whatsapp, whatsappMessage);

  return (
    <footer className="relative overflow-hidden bg-[var(--color-surface-strong)] py-12 text-[var(--color-ink)] sm:py-16">
      <Container className="relative z-10">
        <div className="grid gap-10 border-t border-[rgb(33_29_22_/_0.12)] pt-10 lg:grid-cols-[1fr_0.42fr_0.48fr]">
          <div>
            <a
              className="font-display text-4xl leading-none text-[var(--color-ink)]"
              href="#top"
            >
              {brand.name}
            </a>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              {content.description}
            </p>
            {content.location ? (
              <p className="mt-4 text-sm leading-6 text-[rgb(33_29_22_/_0.72)]">
                {content.location}
              </p>
            ) : null}
          </div>

          <nav aria-label={content.navigationTitle}>
            <h2 className="text-sm font-medium text-[var(--color-gold)]">
              {content.navigationTitle}
            </h2>
            <ul className="mt-5 grid gap-3">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-sm text-[rgb(33_29_22_/_0.72)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-[var(--color-gold)]">
              {content.contactTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              <a
                className="inline-flex items-center gap-2 text-sm text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                href={whatsappHref}
              >
                {content.whatsappLabel}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a
                className="text-sm text-[rgb(33_29_22_/_0.72)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                href={`tel:${brand.whatsapp}`}
              >
                {content.phoneLabel}: {brand.phone}
              </a>
              <a
                className="text-sm text-[rgb(33_29_22_/_0.72)] transition-colors duration-300 hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
                href={brand.instagram}
                rel="noreferrer"
                target="_blank"
              >
                {content.instagramLabel}: {brand.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgb(33_29_22_/_0.1)] pt-6 text-xs text-[rgb(33_29_22_/_0.54)] sm:flex-row sm:items-center sm:justify-between">
          <p>{content.legal}</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
