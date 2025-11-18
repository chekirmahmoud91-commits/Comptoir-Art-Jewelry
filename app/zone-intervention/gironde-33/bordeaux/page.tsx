import type { Metadata } from "next"
import BordeauxClientPage from "./bordeaux-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités à Bordeaux (33) | Expert Agréé | Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens à Bordeaux. Estimation gratuite, déplacement offert dans tous les quartiers. Paiement immédiat au meilleur prix.",
  keywords:
    "rachat antiquités Bordeaux, expert antiquités Bordeaux, estimation gratuite Bordeaux, achat objets art Bordeaux, antiquaire Bordeaux, rachat meubles anciens Bordeaux, Chartrons, Saint-Pierre, Bastide",
  openGraph: {
    title: "Rachat d'Antiquités à Bordeaux (33) | Expert Agréé",
    description:
      "Expert en rachat d'antiquités et objets d'art à Bordeaux. Estimation gratuite, déplacement offert, paiement immédiat.",
    type: "website",
  },
}

export default function BordeauxPage() {
  return <BordeauxClientPage />
}
