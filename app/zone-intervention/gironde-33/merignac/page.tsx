import type { Metadata } from "next"
import MerignacClientPage from "./merignac-client-page"

export const metadata: Metadata = {
  title: "Rachat Antiquités Mérignac (33) | Expert Objets d'Art | Estimation Gratuite",
  description:
    "Expert en rachat d'antiquités à Mérignac et ses quartiers. Estimation gratuite de vos objets d'art, meubles anciens, tableaux. Déplacement gratuit à Mérignac 33700.",
  keywords:
    "rachat antiquités Mérignac, expert objets art Mérignac 33, estimation gratuite Mérignac, achat meubles anciens Mérignac, rachat tableaux Mérignac, antiquaire Mérignac",
  openGraph: {
    title: "Rachat Antiquités Mérignac (33) | Estimation Gratuite",
    description: "Expert en rachat d'antiquités à Mérignac. Estimation gratuite et déplacement offert.",
    type: "website",
  },
}

export default function MerignacPage() {
  return <MerignacClientPage />
}
