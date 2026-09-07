export function pageMetadata(pathname = "/", language = "fr") {
  const reviews = pathname.startsWith("/testimonials");
  const en = language === "en";
  return {
    title: reviews
      ? en ? "Client Testimonials | Green Events Maroc" : "Avis clients et témoignages | Green Events Maroc"
      : en ? "Marrakech Wedding Planner & Catering | Green Events Maroc" : "Wedding planner Marrakech & traiteur | Green Events Maroc",
    description: reviews
      ? en ? "Read our clients’ experiences of weddings and celebrations organised by Green Events Maroc in Marrakech."
        : "Découvrez les témoignages de nos clients : mariages et événements organisés à Marrakech par Green Events Maroc, de la préparation au jour J."
      : en ? "Plan your Marrakech wedding or private event with Green Events Maroc: bespoke planning, catering, floral decoration and on-the-day coordination."
        : "Organisez votre mariage ou événement à Marrakech avec Green Events Maroc : wedding planner, traiteur, décoration florale et coordination sur mesure.",
  };
}

export function businessSchema(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Green Events Maroc",
    description: "Organisation de mariages, événements privés, traiteur et décoration à Marrakech.",
    ...(siteUrl ? { url: siteUrl, "@id": siteUrl + "/#business" } : {}),
    telephone: "+212663730183",
    email: "greenevents.maroc@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: "Ksour Asni", addressLocality: "Marrakech", postalCode: "40000", addressCountry: "MA" },
    areaServed: { "@type": "City", name: "Marrakech" },
    sameAs: ["https://www.instagram.com/greenevents_maroc/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services événementiels",
      itemListElement: ["Wedding planner", "Traiteur", "Décoration florale", "Organisation d’événements privés"].map(name => ({
        "@type": "Offer", itemOffered: { "@type": "Service", name },
      })),
    },
  };
}
