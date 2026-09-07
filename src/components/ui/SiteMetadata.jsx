import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMetadata } from "../../lib/seo";

export default function SiteMetadata({ language }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const metadata = pageMetadata(pathname, language);
    document.title = metadata.title;
    document.documentElement.lang = language;
    const tags = { description: metadata.description, "og:title": metadata.title,
      "og:description": metadata.description, "twitter:title": metadata.title,
      "twitter:description": metadata.description, "og:locale": language === "en" ? "en_GB" : "fr_MA" };
    for (const [name, value] of Object.entries(tags)) {
      const attr = name.startsWith("og:") ? "property" : "name";
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, name); document.head.append(tag); }
      tag.content = value;
    }
    const base = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
    if (base) {
      const url = base + (pathname.startsWith("/testimonials") ? "/testimonials/" : "/");
      const canonical = document.head.querySelector('link[rel="canonical"]');
      if (canonical) canonical.href = url;
      const ogUrl = document.head.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.content = url;
    }
  }, [pathname, language]);
  return null;
}
