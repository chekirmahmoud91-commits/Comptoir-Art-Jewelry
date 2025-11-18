import type { Metadata } from "next"
import GirondeClientPage from "./gironde-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Gironde (33) - Bordeaux, Arcachon | Expert Agréé",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens en Gironde (33). Estimation gratuite à Bordeaux, Arcachon, Libourne. Déplacement gratuit, paiement immédiat.",
  keywords:
    "rachat antiquités Gironde, expert antiquités Bordeaux, estimation objets art Arcachon, achat meubles anciens Gironde 33, brocanteur Bordeaux, rachat bijoux Libourne, expert agréé Gironde",
  openGraph: {
    title: "Rachat Antiquités Gironde (33) - Expert Agréé | Estimation Gratuite",
    description:
      "Expert en rachat d'antiquités en Gironde. Déplacement gratuit à Bordeaux, Arcachon, Libourne. Estimation professionnelle et paiement immédiat.",
    type: "website",
  },
}

export default function GirondePage() {
  return <GirondeClientPage />
}
