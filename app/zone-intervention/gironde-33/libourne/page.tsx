import type { Metadata } from "next"
import LibourneClientPage from "./libourne-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Libourne (33) | Expert Objets d'Art | Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités à Libourne et ses quartiers. Estimation gratuite de vos objets d'art, meubles anciens, tableaux. Déplacement gratuit à Libourne 33500.",
  keywords:
    "rachat antiquités Libourne, expert objets art Libourne 33, estimation gratuite Libourne, achat meubles anciens Libourne, rachat tableaux Libourne, antiquaire Libourne",
  openGraph: {
    title: "Rachat Antiquités Libourne (33) | Estimation Gratuite",
    description: "Expert en rachat d'antiquités à Libourne. Estimation gratuite et déplacement offert.",
    type: "website",
  },
}

export default function LibournePage() {
  return <LibourneClientPage />
}
