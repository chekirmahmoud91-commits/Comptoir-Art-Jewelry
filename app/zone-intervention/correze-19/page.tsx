import type { Metadata } from "next"
import CorrezeClientPage from "./correze-client-page"

export const metadata: Metadata = {
  title: "Rachat d'Antiquités en Corrèze (19) | Expert Agréé | Estimation Gratuite",
  description:
    "Expert en antiquités et objets d'art en Corrèze. Estimation gratuite à Tulle, Brive-la-Gaillarde, Ussel. Déplacement offert dans tout le département 19.",
  keywords:
    "rachat antiquités Corrèze, expert antiquités Tulle, estimation objets art Brive-la-Gaillarde, achat meubles anciens Ussel, antiquaire Corrèze 19",
}

export default function CorrezePage() {
  return <CorrezeClientPage />
}
