import type { Metadata } from "next"
import LotEtGaronneClientPage from "./lot-et-garonne-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités en Lot-et-Garonne (47) | Expert Agréé",
  description:
    "Expert en rachat d'antiquités et objets d'art en Lot-et-Garonne. Estimation gratuite à Agen, Villeneuve-sur-Lot, Marmande. Déplacement gratuit dans tout le 47.",
  keywords:
    "rachat antiquités Lot-et-Garonne, expert antiquités 47, estimation gratuite Agen, achat objets art Villeneuve-sur-Lot, antiquaire Marmande",
}

export default function LotEtGaronnePage() {
  return <LotEtGaronneClientPage />
}
