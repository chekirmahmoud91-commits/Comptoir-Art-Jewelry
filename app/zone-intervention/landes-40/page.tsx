import type { Metadata } from "next"
import LandesClientPage from "./landes-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités dans les Landes (40) | Expert Agréé",
  description:
    "Expert en rachat d'antiquités dans les Landes : Mont-de-Marsan, Dax, Biscarrosse. Estimation gratuite et paiement immédiat pour vos objets d'art, meubles anciens et collections.",
  keywords:
    "rachat antiquités Landes, expert Mont-de-Marsan, estimation Dax, achat objets art Biscarrosse, antiquaire Landes 40",
}

export default function LandesPage() {
  return <LandesClientPage />
}
