import type { Metadata } from "next"
import CharenteMaritimeClientPage from "./charente-maritime-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Charente-Maritime (17) - La Rochelle, Rochefort | Expert Agréé",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens en Charente-Maritime (17). Estimation gratuite à La Rochelle, Rochefort, Saintes. Déplacement gratuit, paiement immédiat.",
  keywords:
    "rachat antiquités Charente-Maritime, expert antiquités La Rochelle, estimation objets art Rochefort, achat meubles anciens Charente-Maritime 17, brocanteur La Rochelle, rachat bijoux Saintes, expert agréé Charente-Maritime",
  openGraph: {
    title: "Rachat Antiquités Charente-Maritime (17) - Expert Agréé | Estimation Gratuite",
    description:
      "Expert en rachat d'antiquités en Charente-Maritime. Déplacement gratuit à La Rochelle, Rochefort, Saintes. Estimation professionnelle et paiement immédiat.",
    type: "website",
  },
}

export default function CharenteMaritimePage() {
  return <CharenteMaritimeClientPage />
}
