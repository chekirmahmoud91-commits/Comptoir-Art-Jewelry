import type { Metadata } from "next"
import HauteVienneClientPage from "./haute-vienne-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Haute-Vienne (87) - Limoges, Saint-Junien | Expert Agréé",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens en Haute-Vienne (87). Estimation gratuite à Limoges, Saint-Junien, Bellac. Déplacement gratuit, paiement immédiat.",
  keywords:
    "rachat antiquités Haute-Vienne, expert antiquités Limoges, estimation objets art Saint-Junien, achat meubles anciens Haute-Vienne 87, brocanteur Limoges, rachat bijoux Bellac, expert agréé Haute-Vienne",
  openGraph: {
    title: "Rachat Antiquités Haute-Vienne (87) - Expert Agréé | Estimation Gratuite",
    description:
      "Expert en rachat d'antiquités en Haute-Vienne. Déplacement gratuit à Limoges, Saint-Junien, Bellac. Estimation professionnelle et paiement immédiat.",
    type: "website",
  },
}

export default function HauteViennePage() {
  return <HauteVienneClientPage />
}
