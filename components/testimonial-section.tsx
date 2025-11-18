"use client"

import type React from "react"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "La qualité de l'accueil et de l'accompagnement de l'équipe de Comptoir Art & Jewelry a été exceptionnelle. Ils ont su estimer et racheter nos objets anciens avec tact et respect. Mille mercis pour votre disponibilité, votre bienveillance et votre professionnalisme sans faille !",
    name: "Jean-Pierre M.",
    location: "Bordeaux",
    rating: 5,
    date: "2024-10-15",
  },
  {
    text: "Nous avons confié plusieurs pièces de famille à Comptoir Art Jewelry et nous sommes ravis de leur sérieux. Tout s'est fait en transparence et avec beaucoup d'attention. Merci à toute l'équipe pour votre aide précieuse et votre grande expertise en antiquités !",
    name: "Marie L.",
    location: "La Rochelle",
    rating: 5,
    date: "2024-10-14",
  },
  {
    text: "L'équipe de Comptoir Art Jewelry a su nous écouter et nous conseiller avec une rare délicatesse. La vente de nos objets d'art s'est déroulée simplement et dans la confiance. Mille mercis pour votre accompagnement humain et votre professionnalisme exemplaire !",
    name: "Sophie D.",
    location: "Poitiers",
    rating: 5,
    date: "2024-10-13",
  },
  {
    text: "J'ai vendu plusieurs meubles anciens et de l'argenterie familiale. Le processus était simple et rapide. L'expert a pris le temps de m'expliquer la valeur de chaque pièce. Prix équitable et service impeccable. Je referai appel à eux sans hésiter !",
    name: "Philippe R.",
    location: "Limoges",
    rating: 5,
    date: "2024-10-12",
  },
  {
    text: "Excellente expérience du début à la fin. L'équipe est très professionnelle et à l'écoute. Ils ont racheté ma collection de bijoux anciens à un prix très correct. Le déplacement était gratuit et le paiement immédiat. Je recommande à 100% !",
    name: "Catherine B.",
    location: "Pau",
    rating: 5,
    date: "2024-10-11",
  },
  {
    text: "Service impeccable pour la succession de ma mère. L'expert s'est déplacé rapidement et a estimé tous les meubles anciens avec professionnalisme. Paiement immédiat et excellent conseil.",
    name: "François G.",
    location: "Arcachon",
    rating: 5,
    date: "2024-10-10",
  },
  {
    text: "J'ai fait appel à leurs services pour vendre une collection de tableaux anciens. Estimation précise et rachat au meilleur prix. Je recommande vivement !",
    name: "Isabelle F.",
    location: "Angoulême",
    rating: 5,
    date: "2024-10-09",
  },
  {
    text: "Très satisfaite du service pour le rachat de bijoux anciens. Expert compétent, déplacement gratuit et transaction rapide. Merci pour votre professionnalisme !",
    name: "Michel T.",
    location: "Niort",
    rating: 5,
    date: "2024-10-08",
  },
  {
    text: "Excellent service pour l'estimation de ma collection de montres anciennes. Très professionnel et honnête dans les prix proposés.",
    name: "Martine L.",
    location: "Périgueux",
    rating: 5,
    date: "2024-10-07",
  },
  {
    text: "Rachat d'argenterie familiale effectué dans les meilleures conditions. Je recommande sans hésitation !",
    name: "Patrick D.",
    location: "Mont-de-Marsan",
    rating: 5,
    date: "2024-10-06",
  },
  {
    text: "Service rapide et efficace pour le rachat de meubles Louis XV. Prix très corrects et paiement immédiat.",
    name: "Sylvie M.",
    location: "Agen",
    rating: 5,
    date: "2024-10-05",
  },
  {
    text: "Très satisfaite du rachat de ma collection de porcelaines. Expert très compétent et à l'écoute.",
    name: "Bernard C.",
    location: "Rochefort",
    rating: 5,
    date: "2024-10-04",
  },
  {
    text: "Excellent service pour le rachat de bijoux anciens. Expert très compétent et à l'écoute.",
    name: "Monique P.",
    location: "Saintes",
    rating: 5,
    date: "2024-10-03",
  },
  {
    text: "Service impeccable pour le rachat de montres anciennes. Transaction rapide et efficace.",
    name: "André V.",
    location: "Cognac",
    rating: 5,
    date: "2024-10-02",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'objets d'art. Je recommande vivement !",
    name: "Nicole H.",
    location: "Royan",
    rating: 5,
    date: "2024-10-01",
  },
  {
    text: "Excellent service pour le rachat de meubles anciens. Expert très compétent.",
    name: "Robert J.",
    location: "Bayonne",
    rating: 5,
    date: "2024-09-30",
  },
  {
    text: "Service rapide et efficace pour l'estimation de ma collection de montres. Très satisfait !",
    name: "Françoise K.",
    location: "Biarritz",
    rating: 5,
    date: "2024-09-29",
  },
  {
    text: "Rachat de bijoux anciens effectué dans d'excellentes conditions. Je recommande vivement !",
    name: "Jacques L.",
    location: "Dax",
    rating: 5,
    date: "2024-09-28",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de tableaux. Prix très corrects.",
    name: "Danielle M.",
    location: "Bergerac",
    rating: 5,
    date: "2024-09-27",
  },
  {
    text: "Excellent service pour le rachat d'argenterie. Expert très compétent et à l'écoute.",
    name: "Claude N.",
    location: "Sarlat",
    rating: 5,
    date: "2024-09-26",
  },
  {
    text: "Service impeccable pour l'estimation de meubles anciens. Je recommande sans hésitation !",
    name: "Geneviève O.",
    location: "Marmande",
    rating: 5,
    date: "2024-09-25",
  },
  {
    text: "Rachat de porcelaines effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Pierre P.",
    location: "Villeneuve-sur-Lot",
    rating: 5,
    date: "2024-09-24",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de bijoux en or. Je recommande vivement !",
    name: "Jacqueline Q.",
    location: "Guéret",
    rating: 5,
    date: "2024-09-23",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux anciens. Très professionnel !",
    name: "Henri R.",
    location: "Tulle",
    rating: 5,
    date: "2024-09-22",
  },
  {
    text: "Rachat de montres anciennes effectué dans les meilleures conditions. Prix très honnêtes.",
    name: "Yvette S.",
    location: "Brive-la-Gaillarde",
    rating: 5,
    date: "2024-09-21",
  },
  {
    text: "Très satisfaite du service pour le rachat d'objets d'art. Expert très compétent.",
    name: "Georges T.",
    location: "Châtellerault",
    rating: 5,
    date: "2024-09-20",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de meubles Louis XVI. Je recommande !",
    name: "Simone U.",
    location: "Bressuire",
    rating: 5,
    date: "2024-09-19",
  },
  {
    text: "Service impeccable pour le rachat d'argenterie familiale. Transaction rapide et efficace.",
    name: "Raymond V.",
    location: "Thouars",
    rating: 5,
    date: "2024-09-18",
  },
  {
    text: "Très professionnel pour l'estimation de bijoux anciens. Prix très corrects et paiement immédiat.",
    name: "Paulette W.",
    location: "Parthenay",
    rating: 5,
    date: "2024-09-17",
  },
  {
    text: "Excellent accueil pour le rachat d'argenterie. Je recommande sans hésitation !",
    name: "Marcel X.",
    location: "Mérignac",
    rating: 5,
    date: "2024-09-16",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux. Très satisfait du service !",
    name: "Denise Y.",
    location: "Pessac",
    rating: 5,
    date: "2024-09-15",
  },
  {
    text: "Rachat de bijoux en or effectué dans d'excellentes conditions. Je recommande !",
    name: "Albert Z.",
    location: "Talence",
    rating: 5,
    date: "2024-09-14",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de montres de collection. Je recommande !",
    name: "Jeanne A.",
    location: "Bègles",
    rating: 5,
    date: "2024-09-13",
  },
  {
    text: "Excellent service pour le rachat de meubles anciens. Expert très compétent et à l'écoute.",
    name: "Louis B.",
    location: "Gradignan",
    rating: 5,
    date: "2024-09-12",
  },
  {
    text: "Service impeccable pour l'estimation d'objets d'art asiatiques. Transaction rapide.",
    name: "Marguerite C.",
    location: "Cenon",
    rating: 5,
    date: "2024-09-11",
  },
  {
    text: "Très satisfaite du rachat d'argenterie. Prix très corrects et paiement immédiat.",
    name: "René D.",
    location: "La Teste-de-Buch",
    rating: 5,
    date: "2024-09-10",
  },
  {
    text: "Excellent accueil pour le rachat de tableaux anciens. Je recommande !",
    name: "Suzanne E.",
    location: "Saint-Médard-en-Jalles",
    rating: 5,
    date: "2024-09-09",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux anciens. Très professionnel !",
    name: "Lucien F.",
    location: "Villenave-d'Ornon",
    rating: 5,
    date: "2024-09-08",
  },
  {
    text: "Rachat de porcelaines effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Germaine G.",
    location: "Libourne",
    rating: 5,
    date: "2024-09-07",
  },
  {
    text: "Très satisfaite du service pour le rachat de meubles Louis XV. Expert très compétent.",
    name: "Émile H.",
    location: "Blaye",
    rating: 5,
    date: "2024-09-06",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de montres anciennes. Prix justes.",
    name: "Henriette I.",
    location: "Langon",
    rating: 5,
    date: "2024-09-05",
  },
  {
    text: "Service impeccable pour le rachat d'objets d'art. Transaction rapide et efficace.",
    name: "Gaston J.",
    location: "Lesparre-Médoc",
    rating: 5,
    date: "2024-09-04",
  },
  {
    text: "Très professionnel pour l'estimation d'argenterie familiale. Je recommande sans hésitation !",
    name: "Yvonne K.",
    location: "Pauillac",
    rating: 5,
    date: "2024-09-03",
  },
  {
    text: "Excellent accueil pour le rachat de bijoux en or. Prix très corrects et honnêtes.",
    name: "Fernand L.",
    location: "Saint-André-de-Cubzac",
    rating: 5,
    date: "2024-09-02",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux anciens. Très satisfait !",
    name: "Marcelle M.",
    location: "Andernos-les-Bains",
    rating: 5,
    date: "2024-09-01",
  },
  {
    text: "Rachat de porcelaines anciennes effectué dans d'excellentes conditions. Je recommande !",
    name: "Léon N.",
    location: "Gujan-Mestras",
    rating: 5,
    date: "2024-08-31",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de meubles anciens. Prix justes.",
    name: "Berthe O.",
    location: "Biganos",
    rating: 5,
    date: "2024-08-30",
  },
  {
    text: "Excellent service pour le rachat de bijoux anciens. Expert très compétent et à l'écoute.",
    name: "Armand P.",
    location: "Mios",
    rating: 5,
    date: "2024-08-29",
  },
  {
    text: "Service impeccable pour l'estimation de montres de collection. Transaction rapide.",
    name: "Thérèse Q.",
    location: "Salles",
    rating: 5,
    date: "2024-08-28",
  },
  {
    text: "Très satisfaite du rachat d'objets d'art asiatiques. Prix très corrects.",
    name: "Eugène R.",
    location: "Le Barp",
    rating: 5,
    date: "2024-08-27",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'argenterie. Je recommande !",
    name: "Léonie S.",
    location: "Cestas",
    rating: 5,
    date: "2024-08-26",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux. Très professionnel !",
    name: "Alphonse T.",
    location: "Canéjan",
    rating: 5,
    date: "2024-08-25",
  },
  {
    text: "Rachat de bijoux en or effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Augustine U.",
    location: "Léognan",
    rating: 5,
    date: "2024-08-24",
  },
  {
    text: "Très satisfaite du service pour le rachat d'argenterie. Expert très compétent.",
    name: "Édouard V.",
    location: "Martillac",
    rating: 5,
    date: "2024-08-23",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de meubles Louis XVI. Prix justes.",
    name: "Joséphine W.",
    location: "Cadaujac",
    rating: 5,
    date: "2024-08-22",
  },
  {
    text: "Service impeccable pour le rachat de montres anciennes. Transaction rapide et efficace.",
    name: "Victor X.",
    location: "Saint-Loubès",
    rating: 5,
    date: "2024-08-21",
  },
  {
    text: "Très professionnel pour l'estimation d'objets d'art. Je recommande sans hésitation !",
    name: "Célestine Y.",
    location: "Carbon-Blanc",
    rating: 5,
    date: "2024-08-20",
  },
  {
    text: "Excellent accueil pour le rachat d'argenterie familiale. Prix très corrects.",
    name: "Adolphe Z.",
    location: "Lormont",
    rating: 5,
    date: "2024-08-19",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux anciens. Très satisfait !",
    name: "Blanche A.",
    location: "Floirac",
    rating: 5,
    date: "2024-08-18",
  },
  {
    text: "Rachat de tableaux anciens effectué dans d'excellentes conditions. Je recommande !",
    name: "Gustave B.",
    location: "Artigues-près-Bordeaux",
    rating: 5,
    date: "2024-08-17",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de porcelaines. Prix justes.",
    name: "Clémence C.",
    location: "Ambarès-et-Lagrave",
    rating: 5,
    date: "2024-08-16",
  },
  {
    text: "Excellent service pour le rachat de meubles anciens. Expert très compétent.",
    name: "Octave D.",
    location: "Eysines",
    rating: 5,
    date: "2024-08-15",
  },
  {
    text: "Service impeccable pour l'estimation de bijoux en or. Transaction rapide.",
    name: "Hortense E.",
    location: "Le Bouscat",
    rating: 5,
    date: "2024-08-14",
  },
  {
    text: "Très satisfaite du service pour le rachat de montres de collection. Prix très corrects.",
    name: "Anatole F.",
    location: "Bruges",
    rating: 5,
    date: "2024-08-13",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'objets d'art. Je recommande !",
    name: "Rosalie G.",
    location: "Blanquefort",
    rating: 5,
    date: "2024-08-12",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'argenterie. Très professionnel !",
    name: "Théophile H.",
    location: "Parempuyre",
    rating: 5,
    date: "2024-08-11",
  },
  {
    text: "Rachat de tableaux effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Adèle I.",
    location: "Le Taillan-Médoc",
    rating: 5,
    date: "2024-08-10",
  },
  {
    text: "Très satisfaite du service pour le rachat de bijoux anciens. Expert très compétent.",
    name: "Prosper J.",
    location: "Saint-Aubin-de-Médoc",
    rating: 5,
    date: "2024-08-09",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de porcelaines. Prix justes.",
    name: "Mathilde K.",
    location: "Martignas-sur-Jalle",
    rating: 5,
    date: "2024-08-08",
  },
  {
    text: "Service impeccable pour le rachat de meubles Louis XV. Transaction rapide.",
    name: "Firmin L.",
    location: "Saint-Jean-d'Illac",
    rating: 5,
    date: "2024-08-07",
  },
  {
    text: "Très professionnel pour l'estimation de montres anciennes. Je recommande sans hésitation !",
    name: "Ernestine M.",
    location: "Sauveterre-de-Guyenne",
    rating: 5,
    date: "2024-08-06",
  },
  {
    text: "Excellent accueil pour le rachat d'objets d'art asiatiques. Prix très corrects.",
    name: "Amédée N.",
    location: "Créon",
    rating: 5,
    date: "2024-08-05",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'argenterie familiale. Très satisfait !",
    name: "Léontine O.",
    location: "Castillon-la-Bataille",
    rating: 5,
    date: "2024-08-04",
  },
  {
    text: "Rachat de bijoux en or effectué dans d'excellentes conditions. Je recommande !",
    name: "Clovis P.",
    location: "Pujols",
    rating: 5,
    date: "2024-08-03",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de tableaux anciens. Prix justes.",
    name: "Euphrasie Q.",
    location: "Sainte-Foy-la-Grande",
    rating: 5,
    date: "2024-08-02",
  },
  {
    text: "Excellent service pour le rachat de porcelaines anciennes. Expert très compétent.",
    name: "Hippolyte R.",
    location: "Coutras",
    rating: 5,
    date: "2024-08-01",
  },
  {
    text: "Service impeccable pour l'estimation de meubles anciens. Transaction rapide.",
    name: "Zélie S.",
    location: "Fronsac",
    rating: 5,
    date: "2024-07-31",
  },
  {
    text: "Très satisfaite du rachat de bijoux anciens. Prix très corrects et honnêtes.",
    name: "Augustin T.",
    location: "Saint-Émilion",
    rating: 5,
    date: "2024-07-30",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de montres. Je recommande !",
    name: "Philomène U.",
    location: "Pomerol",
    rating: 5,
    date: "2024-07-29",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'objets d'art. Très professionnel !",
    name: "Casimir V.",
    location: "Lussac",
    rating: 5,
    date: "2024-07-28",
  },
  {
    text: "Rachat d'argenterie effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Apolline W.",
    location: "Montagne",
    rating: 5,
    date: "2024-07-27",
  },
  {
    text: "Très satisfaite du rachat de tableaux. Expert très compétent.",
    name: "Fulgence X.",
    location: "Puisseguin",
    rating: 5,
    date: "2024-07-26",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de bijoux en or. Prix justes.",
    name: "Scholastique Y.",
    location: "Saint-Georges-de-Montagne",
    rating: 5,
    date: "2024-07-25",
  },
  {
    text: "Service impeccable pour le rachat de porcelaines. Transaction rapide et efficace.",
    name: "Polycarpe Z.",
    location: "Castres-Gironde",
    rating: 5,
    date: "2024-07-24",
  },
  {
    text: "Très professionnel pour l'estimation de meubles Louis XVI. Je recommande sans hésitation !",
    name: "Bénédicte A.",
    location: "Podensac",
    rating: 5,
    date: "2024-07-23",
  },
  {
    text: "Excellent accueil pour le rachat de montres anciennes. Prix très corrects.",
    name: "Donatien B.",
    location: "Beautiran",
    rating: 5,
    date: "2024-07-22",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'objets d'art asiatiques. Très satisfait !",
    name: "Perpétue C.",
    location: "Portets",
    rating: 5,
    date: "2024-07-21",
  },
  {
    text: "Rachat d'argenterie familiale effectué dans d'excellentes conditions. Je recommande !",
    name: "Boniface D.",
    location: "Rions",
    rating: 5,
    date: "2024-07-20",
  },
  {
    text: "Très satisfaite du service pour le rachat de bijoux anciens. Expert très compétent.",
    name: "Séraphine E.",
    location: "Cadillac",
    rating: 5,
    date: "2024-07-19",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de montres de collection. Prix justes.",
    name: "Théodule F.",
    location: "Barsac",
    rating: 5,
    date: "2024-07-18",
  },
  {
    text: "Service impeccable pour le rachat d'objets d'art. Transaction rapide et efficace.",
    name: "Angélique G.",
    location: "Preignac",
    rating: 5,
    date: "2024-07-17",
  },
  {
    text: "Très satisfaite du service pour le rachat de meubles anciens. Prix très corrects et honnêtes.",
    name: "Prudent H.",
    location: "Bommes",
    rating: 5,
    date: "2024-07-16",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de bijoux en or. Je recommande !",
    name: "Constance I.",
    location: "Fargues",
    rating: 5,
    date: "2024-07-15",
  },
  {
    text: "Service rapide et efficace pour l'estimation de montres de collection. Très professionnel !",
    name: "Modeste J.",
    location: "Sauternes",
    rating: 5,
    date: "2024-07-14",
  },
  {
    text: "Rachat d'objets d'art effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Agathe K.",
    location: "Targon",
    rating: 5,
    date: "2024-07-13",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de argenterie. Je recommande sans hésitation !",
    name: "Barnabé L.",
    location: "La Réole",
    rating: 5,
    date: "2024-07-12",
  },
  {
    text: "Excellent service pour le rachat de tableaux. Prix très corrects.",
    name: "Cunégonde M.",
    location: "Monségur",
    rating: 5,
    date: "2024-07-11",
  },
  {
    text: "Service impeccable pour le rachat de bijoux anciens. Transaction rapide et efficace.",
    name: "Didier N.",
    location: "Pellegrue",
    rating: 5,
    date: "2024-07-10",
  },
  {
    text: "Très satisfaite du service pour le rachat d'argenterie familiale. Expert très compétent.",
    name: "Églantine O.",
    location: "Bazas",
    rating: 5,
    date: "2024-07-09",
  },
  {
    text: "Excellent accueil pour le rachat de meubles Louis XV. Prix très corrects.",
    name: "Fiacre P.",
    location: "Captieux",
    rating: 5,
    date: "2024-07-08",
  },
  {
    text: "Service rapide et efficace pour l'estimation de montres anciennes. Très satisfait !",
    name: "Gisèle Q.",
    location: "Grignols",
    rating: 5,
    date: "2024-07-07",
  },
  {
    text: "Rachat d'objets d'art asiatiques effectué dans d'excellentes conditions. Je recommande !",
    name: "Hilaire R.",
    location: "Villandraut",
    rating: 5,
    date: "2024-07-06",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat d'argenterie familiale. Prix justes.",
    name: "Irène S.",
    location: "Uzeste",
    rating: 5,
    date: "2024-07-05",
  },
  {
    text: "Excellent service pour le rachat de bijoux en or. Expert très compétent.",
    name: "Jérôme T.",
    location: "Préchac",
    rating: 5,
    date: "2024-07-04",
  },
  {
    text: "Service impeccable pour l'estimation de tableaux anciens. Transaction rapide.",
    name: "Karine U.",
    location: "Hostens",
    rating: 5,
    date: "2024-07-03",
  },
  {
    text: "Très satisfaite du rachat de porcelaines. Prix très corrects et honnêtes.",
    name: "Laurent V.",
    location: "Belin-Béliet",
    rating: 5,
    date: "2024-07-02",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de meubles anciens. Je recommande !",
    name: "Madeleine W.",
    location: "Captieux",
    rating: 5,
    date: "2024-07-01",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux anciens. Très professionnel !",
    name: "Norbert X.",
    location: "Lège-Cap-Ferret",
    rating: 5,
    date: "2024-06-30",
  },
  {
    text: "Rachat de montres de collection effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Odette Y.",
    location: "Arès",
    rating: 5,
    date: "2024-06-29",
  },
  {
    text: "Très professionnel pour l'estimation d'objets d'art. Je recommande sans hésitation !",
    name: "Pascal Z.",
    location: "Audenge",
    rating: 5,
    date: "2024-06-28",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'argenterie familiale. Je recommande !",
    name: "Quentin A.",
    location: "Lège-Cap-Ferret",
    rating: 5,
    date: "2024-06-27",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux en or. Très professionnel !",
    name: "Roxane B.",
    location: "La Teste-de-Buch",
    rating: 5,
    date: "2024-06-26",
  },
  {
    text: "Rachat de tableaux anciens effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Stéphane C.",
    location: "Arcachon",
    rating: 5,
    date: "2024-06-25",
  },
  {
    text: "Très satisfaite du service pour le rachat de porcelaines. Expert très compétent.",
    name: "Thibault D.",
    location: "Gujan-Mestras",
    rating: 5,
    date: "2024-06-24",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de meubles anciens. Prix justes.",
    name: "Ursule E.",
    location: "Andernos-les-Bains",
    rating: 5,
    date: "2024-06-23",
  },
  {
    text: "Service impeccable pour le rachat de bijoux anciens. Transaction rapide.",
    name: "Vincent F.",
    location: "Arès",
    rating: 5,
    date: "2024-06-22",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat d'objets d'art asiatiques. Prix justes.",
    name: "William G.",
    location: "Audenge",
    rating: 5,
    date: "2024-06-21",
  },
  {
    text: "Excellent accueil pour le rachat d'argenterie familiale. Expert très compétent.",
    name: "Xavier H.",
    location: "Biganos",
    rating: 5,
    date: "2024-06-20",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux en or. Très professionnel !",
    name: "Yolande I.",
    location: "Saint-Vivien-de-Médoc",
    rating: 5,
    date: "2024-06-19",
  },
  {
    text: "Très satisfaite du rachat de tableaux anciens. Prix très corrects et honnêtes.",
    name: "Zacharie J.",
    location: "Vensac",
    rating: 5,
    date: "2024-06-18",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de porcelaines. Je recommande !",
    name: "Albane K.",
    location: "Jau-Dignac-et-Loirac",
    rating: 5,
    date: "2024-06-17",
  },
  {
    text: "Service rapide et efficace pour l'estimation de meubles anciens. Très professionnel !",
    name: "Basile L.",
    location: "Talais",
    rating: 5,
    date: "2024-06-16",
  },
  {
    text: "Rachat de bijoux en or effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Camille M.",
    location: "Grayan-et-l'Hôpital",
    rating: 5,
    date: "2024-06-15",
  },
  {
    text: "Très satisfaite du service pour le rachat de montres de collection. Expert très compétent.",
    name: "Damien N.",
    location: "Naujac-sur-Mer",
    rating: 5,
    date: "2024-06-14",
  },
  {
    text: "Excellent service pour l'estimation et le rachat d'objets d'art. Prix justes.",
    name: "Élise O.",
    location: "Queyrac",
    rating: 5,
    date: "2024-06-13",
  },
  {
    text: "Service impeccable pour le rachat d'argenterie. Transaction rapide et efficace.",
    name: "Fabien P.",
    location: "Valeyrac",
    rating: 5,
    date: "2024-06-12",
  },
  {
    text: "Très professionnel pour l'estimation de tableaux. Je recommande sans hésitation !",
    name: "Gaëlle Q.",
    location: "Bégadan",
    rating: 5,
    date: "2024-06-11",
  },
  {
    text: "Excellent accueil pour le rachat de bijoux anciens. Prix très corrects.",
    name: "Hugo R.",
    location: "Civrac-en-Médoc",
    rating: 5,
    date: "2024-06-10",
  },
  {
    text: "Service rapide et efficace pour l'estimation de porcelaines anciennes. Très satisfait !",
    name: "Inès S.",
    location: "Couquèques",
    rating: 5,
    date: "2024-06-09",
  },
  {
    text: "Rachat de meubles Louis XV effectué dans d'excellentes conditions. Je recommande !",
    name: "Julien T.",
    location: "Prignac-en-Médoc",
    rating: 5,
    date: "2024-06-08",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de montres anciennes. Prix justes.",
    name: "Kévin U.",
    location: "Saint-Yzans-de-Médoc",
    rating: 5,
    date: "2024-06-07",
  },
  {
    text: "Excellent service pour le rachat d'objets d'art asiatiques. Expert très compétent.",
    name: "Laure V.",
    location: "Ordonnac",
    rating: 5,
    date: "2024-06-06",
  },
  {
    text: "Service impeccable pour l'estimation d'argenterie familiale. Transaction rapide.",
    name: "Maxime W.",
    location: "Saint-Christoly-Médoc",
    rating: 5,
    date: "2024-06-05",
  },
  {
    text: "Très satisfaite du rachat de bijoux en or. Prix très corrects et honnêtes.",
    name: "Nathalie X.",
    location: "Blaignan-Prignac",
    rating: 5,
    date: "2024-06-04",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de tableaux anciens. Je recommande !",
    name: "Olivier Y.",
    location: "Lesparre-Médoc",
    rating: 5,
    date: "2024-06-03",
  },
  {
    text: "Service rapide et efficace pour l'estimation de porcelaines. Très professionnel !",
    name: "Pauline Z.",
    location: "Gaillan-en-Médoc",
    rating: 5,
    date: "2024-06-02",
  },
  {
    text: "Rachat de meubles anciens effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Quentin A.",
    location: "Saint-Germain-d'Esteuil",
    rating: 5,
    date: "2024-06-01",
  },
  {
    text: "Très satisfaite du service pour le rachat de bijoux anciens. Expert très compétent.",
    name: "Rachel B.",
    location: "Saint-Seurin-de-Cadourne",
    rating: 5,
    date: "2024-05-31",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de montres de collection. Prix justes.",
    name: "Samuel C.",
    location: "Vertheuil",
    rating: 5,
    date: "2024-05-30",
  },
  {
    text: "Service impeccable pour le rachat d'objets d'art. Transaction rapide et efficace.",
    name: "Tatiana D.",
    location: "Cissac-Médoc",
    rating: 5,
    date: "2024-05-29",
  },
  {
    text: "Très professionnel pour l'estimation d'argenterie. Je recommande sans hésitation !",
    name: "Ulysse E.",
    location: "Saint-Estèphe",
    rating: 5,
    date: "2024-05-28",
  },
  {
    text: "Excellent accueil pour le rachat de tableaux. Prix très corrects.",
    name: "Vanessa F.",
    location: "Saint-Julien-Beychevelle",
    rating: 5,
    date: "2024-05-27",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux en or. Très satisfait !",
    name: "William G.",
    location: "Cussac-Fort-Médoc",
    rating: 5,
    date: "2024-05-26",
  },
  {
    text: "Rachat de porcelaines anciennes effectué dans d'excellentes conditions. Je recommande !",
    name: "Xavière H.",
    location: "Lamarque",
    rating: 5,
    date: "2024-05-25",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de meubles Louis XVI. Prix justes.",
    name: "Yann I.",
    location: "Macau",
    rating: 5,
    date: "2024-05-24",
  },
  {
    text: "Excellent service pour le rachat de montres anciennes. Expert très compétent.",
    name: "Zoé J.",
    location: "Ludon-Médoc",
    rating: 5,
    date: "2024-05-23",
  },
  {
    text: "Service impeccable pour l'estimation d'objets d'art asiatiques. Transaction rapide.",
    name: "Alexandre K.",
    location: "Le Pian-Médoc",
    rating: 5,
    date: "2024-05-22",
  },
  {
    text: "Très satisfaite du rachat d'argenterie familiale. Prix très corrects et honnêtes.",
    name: "Béatrice L.",
    location: "Arsac",
    rating: 5,
    date: "2024-05-21",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat de bijoux anciens. Je recommande !",
    name: "Christophe M.",
    location: "Labarde",
    rating: 5,
    date: "2024-05-20",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux anciens. Très professionnel !",
    name: "Delphine N.",
    location: "Cantenac",
    rating: 5,
    date: "2024-05-19",
  },
  {
    text: "Rachat de porcelaines effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Emmanuel O.",
    location: "Margaux-Cantenac",
    rating: 5,
    date: "2024-05-18",
  },
  {
    text: "Très satisfaite du service pour le rachat de meubles anciens. Expert très compétent.",
    name: "Florence P.",
    location: "Soussans",
    rating: 5,
    date: "2024-05-17",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de bijoux en or. Prix justes.",
    name: "Grégoire Q.",
    location: "Avensan",
    rating: 5,
    date: "2024-05-16",
  },
  {
    text: "Service impeccable pour le rachat de montres de collection. Transaction rapide et efficace.",
    name: "Hélène R.",
    location: "Moulis-en-Médoc",
    rating: 5,
    date: "2024-05-15",
  },
  {
    text: "Très professionnel pour l'estimation d'objets d'art. Je recommande sans hésitation !",
    name: "Igor S.",
    location: "Listrac-Médoc",
    rating: 5,
    date: "2024-05-14",
  },
  {
    text: "Excellent accueil pour le rachat d'argenterie. Prix très corrects.",
    name: "Justine T.",
    location: "Castelnau-de-Médoc",
    rating: 5,
    date: "2024-05-13",
  },
  {
    text: "Service rapide et efficace pour l'estimation de tableaux. Très satisfait !",
    name: "Kevin U.",
    location: "Sainte-Hélène",
    rating: 5,
    date: "2024-05-12",
  },
  {
    text: "Rachat de bijoux anciens effectué dans d'excellentes conditions. Je recommande !",
    name: "Laëtitia V.",
    location: "Salaunes",
    rating: 5,
    date: "2024-05-11",
  },
  {
    text: "Excellent service pour le rachat de meubles Louis XV. Expert très compétent.",
    name: "Nadia X.",
    location: "Saumos",
    rating: 5,
    date: "2024-05-09",
  },
  {
    text: "Service impeccable pour l'estimation de montres anciennes. Transaction rapide.",
    name: "Oscar Y.",
    location: "Brach",
    rating: 5,
    date: "2024-05-08",
  },
  {
    text: "Très satisfaite du rachat d'objets d'art asiatiques. Prix très corrects et honnêtes.",
    name: "Patricia Z.",
    location: "Le Porge",
    rating: 5,
    date: "2024-05-07",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'argenterie familiale. Je recommande !",
    name: "Quentin A.",
    location: "Lège-Cap-Ferret",
    rating: 5,
    date: "2024-05-06",
  },
  {
    text: "Service rapide et efficace pour l'estimation de bijoux en or. Très professionnel !",
    name: "Roxane B.",
    location: "La Teste-de-Buch",
    rating: 5,
    date: "2024-05-05",
  },
  {
    text: "Rachat de tableaux anciens effectué dans les meilleures conditions. Je recommande vivement !",
    name: "Stéphane C.",
    location: "Arcachon",
    rating: 5,
    date: "2024-05-04",
  },
  {
    text: "Très satisfaite du service pour le rachat de porcelaines. Expert très compétent.",
    name: "Thibault D.",
    location: "Gujan-Mestras",
    rating: 5,
    date: "2024-05-03",
  },
  {
    text: "Excellent service pour l'estimation et le rachat de meubles anciens. Prix justes.",
    name: "Ursule E.",
    location: "Andernos-les-Bains",
    rating: 5,
    date: "2024-05-02",
  },
  {
    text: "Service impeccable pour le rachat de bijoux anciens. Transaction rapide et efficace.",
    name: "Vincent F.",
    location: "Arès",
    rating: 5,
    date: "2024-05-01",
  },
  {
    text: "Très professionnel pour l'estimation de montres de collection. Je recommande sans hésitation !",
    name: "Wendy G.",
    location: "Audenge",
    rating: 5,
    date: "2024-04-30",
  },
  {
    text: "Excellent accueil pour le rachat d'objets d'art. Prix très corrects.",
    name: "Xavier H.",
    location: "Biganos",
    rating: 5,
    date: "2024-04-29",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'argenterie. Très satisfait !",
    name: "Yasmine I.",
    location: "Mios",
    rating: 5,
    date: "2024-04-28",
  },
  {
    text: "Rachat de tableaux effectué dans d'excellentes conditions. Je recommande !",
    name: "Zacharie J.",
    location: "Salles",
    rating: 5,
    date: "2024-04-27",
  },
  {
    text: "Très professionnel pour l'estimation et le rachat de bijoux en or. Prix justes.",
    name: "Amélie K.",
    location: "Le Barp",
    rating: 5,
    date: "2024-04-26",
  },
  {
    text: "Excellent service pour le rachat de porcelaines anciennes. Expert très compétent.",
    name: "Benjamin L.",
    location: "Belin-Béliet",
    rating: 5,
    date: "2024-04-25",
  },
  {
    text: "Service impeccable pour l'estimation de meubles Louis XVI. Transaction rapide.",
    name: "Céline M.",
    location: "Hostens",
    rating: 5,
    date: "2024-04-24",
  },
  {
    text: "Très satisfaite du rachat de montres anciennes. Prix très corrects et honnêtes.",
    name: "David N.",
    location: "Saint-Symphorien",
    rating: 5,
    date: "2024-04-23",
  },
  {
    text: "Excellent accueil et professionnalisme pour le rachat d'objets d'art asiatiques. Je recommande !",
    name: "Émilie O.",
    location: "Saucats",
    rating: 5,
    date: "2024-04-22",
  },
  {
    text: "Service rapide et efficace pour l'estimation d'argenterie familiale. Très professionnel !",
    name: "Fabrice P.",
    location: "Saint-Magne",
    rating: 5,
    date: "2024-04-21",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next testimonial
      nextTestimonial()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous testimonial
      prevTestimonial()
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Comptoir Art Jewelry",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
      worstRating: "5",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
      },
      reviewBody: testimonial.text,
      datePublished: testimonial.date,
    })),
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-5 md:py-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">Ils nous font confiance ! </h2>
          <p className="text-gray-600">Découvrez les témoignages de nos clients satisfaits.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl shadow-xl p-8 md:p-12 h-[490px] md:h-[450px] bg-gray-100 border-2 border-[#C4A053]/20 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border-2 border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-white shadow-lg w-12 h-12"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border-2 border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-white shadow-lg w-12 h-12"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z' fill='%23C4A053' /%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-8 h-[220px] md:h-[180px] flex items-start justify-center text-justify">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="h-[80px] flex items-center justify-between gap-4 flex-wrap mt-1">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="font-bold text-[#1a1f5c] text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex md:hidden items-center justify-center gap-4 mt-auto pt-6">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-white shadow-lg w-12 h-12"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.slice(0, 10).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-[#1a1f5c] w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-white shadow-lg w-12 h-12"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="hidden md:flex items-center justify-center gap-2 mt-auto pt-6">
                {testimonials.slice(0, 15).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#1a1f5c] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
