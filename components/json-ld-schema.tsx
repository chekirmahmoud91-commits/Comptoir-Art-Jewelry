export function JsonLdSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Comptoir Art Jewelry",
    description: "Achat d'objets d'art, bijoux, montres et antiquités en Nouvelle-Aquitaine",
    url: "https://comptoir-art-jewelry.fr",
    telephone: "+33625637658",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.8378",
      longitude: "-0.5792",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Nouvelle-Aquitaine",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comptoir Art Jewelry",
    url: "https://comptoir-art-jewelry.fr",
    logo: "https://comptoir-art-jewelry.fr/logo.png",
    telephone: "+33625637658",
    email: "contact@comptoir-art-jewelry.fr",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33625637658",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: ["French"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: "+33625637658",
        contactType: "sales",
        areaServed: "FR",
        availableLanguage: ["French"],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "5",
    },
  }

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Qui sommes-nous",
        description: "Découvrez notre expertise en rachat d'antiquités et objets d'art",
        url: "https://comptoir-art-jewelry.fr/a-propos",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Nos catégories",
        description: "Toutes les catégories d'objets d'art que nous rachetons",
        url: "https://comptoir-art-jewelry.fr/categories",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Bijoux & Montres",
        description: "Rachat de bijoux anciens, montres de luxe et horlogerie",
        url: "https://comptoir-art-jewelry.fr/bijoux-montres",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Meubles Anciens",
        description: "Estimation et rachat de mobilier ancien et d'époque",
        url: "https://comptoir-art-jewelry.fr/meubles-anciens",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Tableaux & Peintures",
        description: "Rachat de tableaux anciens et peintures de maîtres",
        url: "https://comptoir-art-jewelry.fr/tableaux-peintures",
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Argenterie & Orfèvrerie",
        description: "Rachat d'argenterie, couverts et objets en argent massif",
        url: "https://comptoir-art-jewelry.fr/argenterie-orfevrerie",
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "Zone d'intervention",
        description: "Nos services de rachat dans toute la Nouvelle-Aquitaine",
        url: "https://comptoir-art-jewelry.fr/zone-intervention",
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Gironde (33)",
        description: "Rachat d'antiquités en Gironde - Bordeaux, Arcachon, Libourne",
        url: "https://comptoir-art-jewelry.fr/zone-intervention/gironde-33",
      },
      {
        "@type": "SiteNavigationElement",
        position: 9,
        name: "Charente-Maritime (17)",
        description: "Rachat d'antiquités en Charente-Maritime - La Rochelle, Royan",
        url: "https://comptoir-art-jewelry.fr/zone-intervention/charente-maritime-17",
      },
      {
        "@type": "SiteNavigationElement",
        position: 10,
        name: "Contact",
        description: "Contactez-nous pour une estimation gratuite",
        url: "https://comptoir-art-jewelry.fr/contact",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Comptoir Art Jewelry",
    url: "https://comptoir-art-jewelry.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://comptoir-art-jewelry.fr/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const reviewSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Comptoir Art Jewelry",
      },
      author: {
        "@type": "Person",
        name: "Marie D.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-15",
      reviewBody:
        "Service impeccable pour la succession de ma mère à Bordeaux. L'expert s'est déplacé rapidement et a estimé tous les meubles anciens avec professionnalisme. Paiement immédiat et excellent conseil.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Comptoir Art Jewelry",
      },
      author: {
        "@type": "Person",
        name: "Philippe L.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-12",
      reviewBody:
        "J'ai fait appel à leurs services pour vendre une collection de tableaux anciens à Arcachon. Estimation précise et rachat au meilleur prix. Je recommande vivement !",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Comptoir Art Jewelry",
      },
      author: {
        "@type": "Person",
        name: "Sophie M.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-10",
      reviewBody:
        "Très satisfaite du service pour le rachat de bijoux anciens à Libourne. Expert compétent, déplacement gratuit et transaction rapide. Merci pour votre professionnalisme !",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Comptoir Art Jewelry",
      },
      author: {
        "@type": "Person",
        name: "Jean-Pierre R.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-08",
      reviewBody:
        "Excellent service pour l'estimation de ma collection de montres anciennes. Très professionnel et honnête dans les prix proposés.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Comptoir Art Jewelry",
      },
      author: {
        "@type": "Person",
        name: "Catherine B.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-05",
      reviewBody:
        "Rachat d'argenterie familiale effectué dans les meilleures conditions. Je recommande sans hésitation !",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {reviewSchemas.map((review, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}
    </>
  )
}
