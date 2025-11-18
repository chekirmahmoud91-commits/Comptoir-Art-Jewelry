import type { Metadata } from "next"
import InstrumentsMusiqueClientPage from "./_client/page"

export const metadata: Metadata = {
  title: "Achat Instruments de Musique Anciens | Estimation Gratuite",
  description:
    "Expert en achat d'instruments de musique anciens et de collection. Violons, pianos, guitares, instruments à vent. Estimation gratuite et paiement immédiat.",
  keywords:
    "achat instruments musique, violon ancien, piano ancien, guitare collection, instruments vent, estimation instruments musique",
}

export default function InstrumentsMusiquePage() {
  return <InstrumentsMusiqueClientPage />
}
