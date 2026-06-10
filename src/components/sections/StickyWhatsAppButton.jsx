import { MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";

function StickyWhatsAppButton({ brand, content, whatsappMessage }) {
  return (
    <a
      aria-label={content.ariaLabel}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 border border-[var(--color-gold)] bg-[var(--color-gold)] px-4 py-3 text-sm font-semibold text-[var(--color-surface)] shadow-[0_4px_8px_rgba(64,45,23,0.18)] transition-colors duration-300 hover:border-[var(--color-olive)] hover:bg-[var(--color-olive)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] sm:bottom-6 sm:right-6"
      href={getWhatsAppHref(brand.whatsapp, whatsappMessage)}
    >
      <MessageCircle aria-hidden="true" size={18} />
      <span>{content.label}</span>
    </a>
  );
}

export default StickyWhatsAppButton;
