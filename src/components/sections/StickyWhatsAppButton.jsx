import { MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "../../lib/utils";

function StickyWhatsAppButton({ brand, content, whatsappMessage }) {
  return (
    <a
      aria-label={content.ariaLabel}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-3 text-sm font-semibold text-[#070605] shadow-[0_18px_50px_rgba(0,0,0,0.34)] transition-colors duration-300 hover:bg-[#F7F1E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F1E7] sm:bottom-6 sm:right-6"
      href={getWhatsAppHref(brand.whatsapp, whatsappMessage)}
    >
      <MessageCircle aria-hidden="true" size={18} />
      <span>{content.label}</span>
    </a>
  );
}

export default StickyWhatsAppButton;
