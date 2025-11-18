import type { Metadata } from "next"
import PessacClientPage from "./pessac-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités à Pessac (33) | Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités à Pessac. Estimation gratuite de vos objets d'art, meubles anciens, tableaux et bijoux. Déplacement gratuit dans tous les quartiers de Pessac.",
  keywords:
    "rachat antiquités Pessac, estimation gratuite Pessac 33, achat objets art Pessac, expert antiquités Pessac, rachat meubles anciens Pessac, estimation tableaux Pessac, rachat bijoux anciens Pessac, brocanteur Pessac, Alouette, Monteil, Cap de Bos",
  openGraph: {
    title: "Rachat d'Antiquités à Pessac (33) | Estimation Gratuite",
    description: "Expert en rachat d'antiquités à Pessac. Estimation gratuite et déplacement dans tous les quartiers.",
    type: "website",
  },
}

export default function PessacPage() {
  return <PessacClientPage />
}
