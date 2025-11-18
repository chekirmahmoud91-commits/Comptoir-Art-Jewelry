import type { Metadata } from "next"
import PyreneeAtlantiquesClientPage from "./pyrenees-atlantiques-client-page"

export const metadata: Metadata = {
  title: "Expert Antiquités Pyrénées-Atlantiques (64) | Estimation & Rachat",
  description:
    "Expert en antiquités dans les Pyrénées-Atlantiques (64). Estimation gratuite et rachat d'objets d'art à Pau, Bayonne, Biarritz. Service professionnel et confidentiel.",
  keywords:
    "expert antiquités Pyrénées-Atlantiques, estimation Pau, rachat objets art Bayonne, expert Biarritz, antiquaire 64",
}

export default function PyreneeAtlantiquesPage() {
  return <PyreneeAtlantiquesClientPage />
}
