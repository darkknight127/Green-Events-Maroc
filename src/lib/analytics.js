// GA's enhanced measurement handles SPA history changes. Do not also send
// manual page_view events, which would double-count navigation.
export function initializeAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!import.meta.env.PROD || !/^G-[A-Z0-9]+$/.test(id ?? "") || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id);
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.append(script);
  document.addEventListener("click", event => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    const channel = href.startsWith("https://wa.me/") ? "whatsapp"
      : href.startsWith("tel:") ? "phone" : href.startsWith("mailto:") ? "email" : null;
    // Never include phone numbers, email addresses or WhatsApp message text.
    if (channel) window.gtag("event", "contact_click", { contact_method: channel });
  });
}
