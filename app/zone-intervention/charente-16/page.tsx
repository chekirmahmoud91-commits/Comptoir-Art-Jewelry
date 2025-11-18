import type { Metadata } from "next"
import CharenteClientPage from "./charente-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Charente (16) - Angoulême, Cognac | Expert Agréé",
  description:
    "Expert en rachat d'antiquités, objets d'art et meubles anciens en Charente (16). Estimation gratuite à Angoulême, Cognac, La Rochefoucauld. Déplacement gratuit, paiement immédiat.",
  keywords:
    "rachat antiquités Charente, expert antiquités Angoulême, estimation objets art Cognac, achat meubles anciens Charente 16, brocanteur Angoulême, rachat bijoux Cognac, expert agréé Charente",
  openGraph: {
    title: "Rachat Antiquités Charente (16) - Expert Agréé | Estimation Gratuite",
    description:
      "Expert en rachat d'antiquités en Charente. Déplacement gratuit à Angoulême, Cognac, La Rochefoucauld. Estimation professionnelle et paiement immédiat.",
    type: "website",
  },
}

export default function CharentePage() {
  return <CharenteClientPage />
}
