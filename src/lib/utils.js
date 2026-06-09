import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function getWhatsAppHref(number, message = "") {
  const cleanedNumber = number?.replace(/[^\d]/g, "");

  if (!cleanedNumber) {
    return "#contact";
  }

  const text = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${cleanedNumber}${text}`;
}
