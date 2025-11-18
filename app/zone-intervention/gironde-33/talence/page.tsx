import type { Metadata } from "next"
import TalenceClientPage from "./talence-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités à Talence (33) | Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités à Talence. Estimation gratuite de vos objets d'art, meubles anciens, tableaux et bijoux. Déplacement gratuit dans tous les quartiers de Talence.",
  keywords:
    "rachat antiquités Talence, estimation gratuite Talence 33, achat objets art Talence, expert antiquités Talence, rachat meubles anciens Talence, estimation tableaux Talence, rachat bijoux anciens Talence, brocanteur Talence, Thouars, Peixotto, Forum",
  openGraph: {
    title: "Rachat d'Antiquités à Talence (33) | Estimation Gratuite",
    description: "Expert en rachat d'antiquités à Talence. Estimation gratuite et déplacement dans tous les quartiers.",
    type: "website",
  },
}

export default function TalencePage() {
  return <TalenceClientPage />
}
