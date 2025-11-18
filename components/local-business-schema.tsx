"use client"

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://comptoir-art-jewelry.fr/#organization",
    name: "Comptoir Art & Jewelry",
    description:
      "Expert en estimation et achat d'objets d'art, antiquités, bijoux et montres anciennes dans toute la Nouvelle-Aquitaine",
    url: "https://comptoir-art-jewelry.fr",
    telephone: "+33625637658",
    email: "contact@comptoir-art-jewelry.fr",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressRegion: "Nouvelle-Aquitaine",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.5",
      longitude: "-0.5",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Nouvelle-Aquitaine",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.facebook.com/comptoirartjewelry", "https://www.instagram.com/comptoirartjewelry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services d'estimation et d'achat",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estimation gratuite d'objets d'art",
            description: "Estimation professionnelle et gratuite de vos objets d'art, antiquités et bijoux",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Achat d'antiquités",
            description: "Achat au meilleur prix de vos objets d'art et antiquités",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
