import type { Metadata } from "next"
import RachatAntiquitesClient from "./rachat-antiquites-client"

export const metadata: Metadata = {
  title: "Rachat Antiquités Bordeaux – Estimation gratuite & paiement immédiat",
  description:
    "Vous souhaitez vendre vos antiquités à Bordeaux ou dans toute la Gironde ? Estimation gratuite, déplacement rapide, paiement instantané. Contactez-nous aujourd'hui !",
  keywords:
    "rachat antiquités bordeaux, vendre antiquités bordeaux, estimation gratuite bordeaux, achat meubles anciens bordeaux, rachat objets art bordeaux",
  authors: [{ name: "Comptoir Art & Jewelry" }],
  openGraph: {
    type: "website",
    title: "Rachat Antiquités à Bordeaux – Estimation Gratuite & Paiement Comptant",
    description: "Vendez vos antiquités à Bordeaux. Estimation gratuite, déplacement rapide et paiement comptant.",
    url: "https://comptoir-art-jewelry.fr/rachat-antiquites-bordeaux",
    images: [
      {
        url: "https://comptoir-art-jewelry.fr/images/rachat-antiquites-bordeaux.jpg",
        width: 1200,
        height: 630,
        alt: "Rachat Antiquités Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachat Antiquités à Bordeaux – Estimation Gratuite",
    description: "Expert en rachat d'antiquités à Bordeaux, estimation gratuite, paiement immédiat.",
    images: ["https://comptoir-art-jewelry.fr/images/antiquites-bordeaux.jpg"],
  },
  other: {
    "geo.region": "FR-33",
    "geo.placename": "Bordeaux",
    "geo.position": "44.8378;-0.5792",
    ICBM: "44.8378, -0.5792",
  },
}

export default function RachatAntiquitesBordeauxPage() {
  return <RachatAntiquitesClient />
}
