import type { Metadata } from "next"
import { ObjetsArtAsiatiqueClient } from "./client"

export const metadata: Metadata = {
  title: "Achat Objets d'Art Asiatique - Expert en Art Oriental | Aucties",
  description:
    "Expert en objets d'art asiatique. Nous achetons vos porcelaines chinoises, bronzes japonais, jades, laques et œuvres d'art oriental. Estimation gratuite et paiement immédiat.",
  keywords:
    "achat art asiatique, porcelaine chinoise, bronze japonais, jade, laque, netsuke, estampes japonaises, céramique asiatique, expert art oriental",
}

export default function ObjetsArtAsiatiquePage() {
  return <ObjetsArtAsiatiqueClient />
}
