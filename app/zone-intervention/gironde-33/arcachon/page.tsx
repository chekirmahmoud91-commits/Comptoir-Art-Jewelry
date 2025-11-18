import type { Metadata } from "next"
import ArcachonClientPage from "./arcachon-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités à Arcachon (33) | Expert Agréé - Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités à Arcachon : meubles anciens, tableaux, bijoux, objets d'art. Estimation gratuite, déplacement offert. Intervention Ville d'Hiver, centre-ville. ☎ 06 25 63 76 58",
  keywords:
    "rachat antiquités Arcachon, expert antiquités Arcachon 33, estimation gratuite Arcachon, achat meubles anciens Arcachon, rachat tableaux Arcachon, antiquaire Arcachon, Ville d'Hiver, Bassin d'Arcachon",
  openGraph: {
    title: "Rachat d'Antiquités à Arcachon (33) | Expert Agréé",
    description:
      "Expert en rachat d'antiquités à Arcachon. Estimation gratuite et déplacement offert dans toute la ville.",
    type: "website",
  },
}

export default function ArcachonPage() {
  return <ArcachonClientPage />
}
