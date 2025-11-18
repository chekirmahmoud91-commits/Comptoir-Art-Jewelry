import type { Metadata } from "next"
import DordogneClientPage from "./dordogne-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités en Dordogne (24) | Expert Agréé",
  description:
    "Expert en rachat d'antiquités en Dordogne : Périgueux, Bergerac, Sarlat. Estimation gratuite et paiement immédiat pour vos objets d'art, meubles anciens et collections.",
  keywords:
    "rachat antiquités Dordogne, expert Périgueux, estimation Bergerac, achat objets art Sarlat, antiquaire Dordogne 24",
}

export default function DordognePage() {
  return <DordogneClientPage />
}
