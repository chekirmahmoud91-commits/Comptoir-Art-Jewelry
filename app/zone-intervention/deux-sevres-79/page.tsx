import type { Metadata } from "next"
import DeuxSevresClientPage from "./deux-sevres-client-page"

export const metadata: Metadata = {
  title: "Expert Antiquités Deux-Sèvres (79) | Estimation & Rachat",
  description:
    "Expert en antiquités dans les Deux-Sèvres (79). Estimation gratuite et rachat d'objets d'art à Niort, Bressuire, Thouars. Service professionnel et confidentiel.",
  keywords:
    "expert antiquités Deux-Sèvres, estimation Niort, rachat objets art Bressuire, expert Thouars, antiquaire 79",
}

export default function DeuxSevresPage() {
  return <DeuxSevresClientPage />
}
