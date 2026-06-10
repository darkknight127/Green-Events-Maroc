import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppHref(phoneNumber, message = "") {
  const normalizedPhone = String(phoneNumber ?? "").replace(/\D/g, "");

  if (!normalizedPhone) {
    return "#contact";
  }

  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${normalizedPhone}${encodedMessage}`;
}
