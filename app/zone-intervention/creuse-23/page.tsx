import type { Metadata } from "next"
import CreuseClientPage from "./creuse-client-page"

export const metadata: Metadata = {
  title: "Expert Antiquités Creuse (23) | Estimation & Rachat à Guéret, Aubusson",
  description:
    "Expert en antiquités et objets d'art dans la Creuse (23). Estimation gratuite à domicile à Guéret, Aubusson, La Souterraine. Rachat immédiat de vos antiquités.",
  keywords:
    "expert antiquités Creuse, estimation Guéret, rachat objets art Aubusson, expert Creuse 23, antiquaire La Souterraine, estimation gratuite Creuse",
}

export default function CreusePage() {
  return <CreuseClientPage />
}
