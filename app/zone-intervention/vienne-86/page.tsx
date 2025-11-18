import type { Metadata } from "next"
import VienneClientPage from "./vienne-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Vienne (86) - Poitiers, Châtellerault | Expert Agréé",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens dans la Vienne (86). Estimation gratuite à Poitiers, Châtellerault, Loudun. Déplacement gratuit, paiement immédiat.",
  keywords:
    "rachat antiquités Vienne, expert antiquités Poitiers, estimation objets art Châtellerault, achat meubles anciens Vienne 86, brocanteur Poitiers, rachat bijoux Loudun, expert agréé Vienne",
  openGraph: {
    title: "Rachat Antiquités Vienne (86) - Expert Agréé | Estimation Gratuite",
    description:
      "Expert en rachat d'antiquités dans la Vienne. Déplacement gratuit à Poitiers, Châtellerault, Loudun. Estimation professionnelle et paiement immédiat.",
    type: "website",
  },
}

export default function ViennePage() {
  return <VienneClientPage />
}
