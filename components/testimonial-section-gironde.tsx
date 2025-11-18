"use client"

import { Star } from "lucide-react"

export function TestimonialSectionGironde() {
  const testimonials = [
    {
      name: "Marie D.",
      location: "Bordeaux",
      rating: 5,
      text: "Service impeccable pour la succession de ma mère à Bordeaux. L'expert s'est déplacé rapidement et a estimé tous les meubles anciens avec professionnalisme. Paiement immédiat et excellent conseil.",
      date: "2024-10-15",
    },
    {
      name: "Philippe L.",
      location: "Arcachon",
      rating: 5,
      text: "J'ai fait appel à leurs services pour vendre une collection de tableaux anciens à Arcachon. Estimation précise et rachat au meilleur prix. Je recommande vivement !",
      date: "2024-10-12",
    },
    {
      name: "Sophie M.",
      location: "Libourne",
      rating: 5,
      text: "Très satisfaite du service pour le rachat de bijoux anciens à Libourne. Expert compétent, déplacement gratuit et transaction rapide. Merci pour votre professionnalisme !",
      date: "2024-10-10",
    },
    {
      name: "Jean-Pierre R.",
      location: "Mérignac",
      rating: 5,
      text: "Excellent service pour l'estimation de ma collection de montres anciennes. Très professionnel et honnête dans les prix proposés.",
      date: "2024-10-08",
    },
    {
      name: "Catherine B.",
      location: "Pessac",
      rating: 5,
      text: "Rachat d'argenterie familiale effectué dans les meilleures conditions. Je recommande sans hésitation !",
      date: "2024-10-05",
    },
    {
      name: "Michel T.",
      location: "Talence",
      rating: 5,
      text: "Service rapide et efficace pour le rachat de meubles Louis XV. Prix très corrects et paiement immédiat.",
      date: "2024-10-03",
    },
    {
      name: "Isabelle F.",
      location: "Bordeaux Centre",
      rating: 5,
      text: "Très satisfaite du rachat de ma collection de porcelaines. Expert très compétent et à l'écoute.",
      date: "2024-09-30",
    },
    {
      name: "François G.",
      location: "Bègles",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour l'estimation de tableaux anciens. Je recommande vivement !",
      date: "2024-09-28",
    },
    {
      name: "Martine L.",
      location: "Gradignan",
      rating: 5,
      text: "Service impeccable pour le rachat de bijoux en or. Transaction rapide et prix très honnête.",
      date: "2024-09-25",
    },
    {
      name: "Patrick D.",
      location: "Cenon",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de meubles anciens. Je recommande sans hésiter !",
      date: "2024-09-22",
    },
    {
      name: "Sylvie M.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Excellent service pour le rachat d'objets d'art asiatiques. Expert très compétent et prix justes.",
      date: "2024-09-20",
    },
    {
      name: "Bernard C.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de ma collection de montres. Très satisfait !",
      date: "2024-09-18",
    },
    {
      name: "Monique P.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Rachat de bijoux anciens effectué dans d'excellentes conditions. Je recommande vivement !",
      date: "2024-09-15",
    },
    {
      name: "André V.",
      location: "Bordeaux Chartrons",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de tableaux. Prix très corrects.",
      date: "2024-09-12",
    },
    {
      name: "Nicole H.",
      location: "Arcachon",
      rating: 5,
      text: "Excellent service pour le rachat d'argenterie. Expert très compétent et à l'écoute.",
      date: "2024-09-10",
    },
    {
      name: "Robert J.",
      location: "Libourne",
      rating: 5,
      text: "Service impeccable pour l'estimation de meubles anciens. Je recommande sans hésitation !",
      date: "2024-09-08",
    },
    {
      name: "Françoise K.",
      location: "Mérignac",
      rating: 5,
      text: "Très satisfaite du rachat de ma collection de porcelaines. Transaction rapide et prix justes.",
      date: "2024-09-05",
    },
    {
      name: "Jacques L.",
      location: "Pessac",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat de bijoux en or. Je recommande vivement !",
      date: "2024-09-03",
    },
    {
      name: "Danielle M.",
      location: "Talence",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de tableaux anciens. Très professionnel !",
      date: "2024-09-01",
    },
    {
      name: "Claude N.",
      location: "Bordeaux",
      rating: 5,
      text: "Rachat de montres anciennes effectué dans les meilleures conditions. Prix très honnêtes.",
      date: "2024-08-29",
    },
    {
      name: "Geneviève O.",
      location: "Bègles",
      rating: 5,
      text: "Très satisfaite du service pour le rachat d'objets d'art. Expert très compétent.",
      date: "2024-08-27",
    },
    {
      name: "Pierre P.",
      location: "Gradignan",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de meubles Louis XVI. Je recommande !",
      date: "2024-08-25",
    },
    {
      name: "Jacqueline Q.",
      location: "Cenon",
      rating: 5,
      text: "Service impeccable pour le rachat d'argenterie familiale. Transaction rapide et efficace.",
      date: "2024-08-22",
    },
    {
      name: "Henri R.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Très professionnel pour l'estimation de bijoux anciens. Prix très corrects et paiement immédiat.",
      date: "2024-08-20",
    },
    {
      name: "Yvette S.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Excellent accueil pour le rachat de porcelaines anciennes. Je recommande sans hésiter !",
      date: "2024-08-18",
    },
    {
      name: "Georges T.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de tableaux. Très satisfait du service !",
      date: "2024-08-15",
    },
    {
      name: "Simone U.",
      location: "Bordeaux",
      rating: 5,
      text: "Rachat de bijoux en or effectué dans d'excellentes conditions. Prix justes et honnêtes.",
      date: "2024-08-12",
    },
    {
      name: "Raymond V.",
      location: "Arcachon",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de montres de collection. Je recommande !",
      date: "2024-08-10",
    },
    {
      name: "Paulette W.",
      location: "Libourne",
      rating: 5,
      text: "Excellent service pour le rachat de meubles anciens. Expert très compétent et à l'écoute.",
      date: "2024-08-08",
    },
    {
      name: "Marcel X.",
      location: "Mérignac",
      rating: 5,
      text: "Service impeccable pour l'estimation d'objets d'art asiatiques. Transaction rapide.",
      date: "2024-08-05",
    },
    {
      name: "Denise Y.",
      location: "Pessac",
      rating: 5,
      text: "Très satisfaite du rachat d'argenterie. Prix très corrects et paiement immédiat.",
      date: "2024-08-03",
    },
    {
      name: "Albert Z.",
      location: "Talence",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat de tableaux anciens. Je recommande !",
      date: "2024-08-01",
    },
    {
      name: "Jeanne A.",
      location: "Bordeaux",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de bijoux anciens. Très professionnel !",
      date: "2024-07-29",
    },
    {
      name: "Louis B.",
      location: "Bègles",
      rating: 5,
      text: "Rachat de porcelaines effectué dans les meilleures conditions. Je recommande vivement !",
      date: "2024-07-27",
    },
    {
      name: "Marguerite C.",
      location: "Gradignan",
      rating: 5,
      text: "Très satisfaite du service pour le rachat de meubles Louis XV. Expert très compétent.",
      date: "2024-07-25",
    },
    {
      name: "René D.",
      location: "Cenon",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de montres anciennes. Prix justes.",
      date: "2024-07-22",
    },
    {
      name: "Suzanne E.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Service impeccable pour le rachat d'objets d'art. Transaction rapide et efficace.",
      date: "2024-07-20",
    },
    {
      name: "Lucien F.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Très professionnel pour l'estimation d'argenterie familiale. Je recommande sans hésiter !",
      date: "2024-07-18",
    },
    {
      name: "Germaine G.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Excellent accueil pour le rachat de bijoux en or. Prix très corrects et honnêtes.",
      date: "2024-07-15",
    },
    {
      name: "Émile H.",
      location: "Bordeaux",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de tableaux anciens. Très satisfait !",
      date: "2024-07-12",
    },
    {
      name: "Henriette I.",
      location: "Arcachon",
      rating: 5,
      text: "Rachat de porcelaines anciennes effectué dans d'excellentes conditions. Je recommande !",
      date: "2024-07-10",
    },
    {
      name: "Gaston J.",
      location: "Libourne",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de meubles anciens. Prix justes.",
      date: "2024-07-08",
    },
    {
      name: "Yvonne K.",
      location: "Mérignac",
      rating: 5,
      text: "Excellent service pour le rachat de bijoux anciens. Expert très compétent et à l'écoute.",
      date: "2024-07-05",
    },
    {
      name: "Fernand L.",
      location: "Pessac",
      rating: 5,
      text: "Service impeccable pour l'estimation de montres de collection. Transaction rapide.",
      date: "2024-07-03",
    },
    {
      name: "Marcelle M.",
      location: "Talence",
      rating: 5,
      text: "Très satisfaite du rachat d'objets d'art asiatiques. Prix très corrects.",
      date: "2024-07-01",
    },
    {
      name: "Léon N.",
      location: "Bordeaux",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat d'argenterie. Je recommande !",
      date: "2024-06-29",
    },
    {
      name: "Berthe O.",
      location: "Bègles",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de tableaux. Très professionnel !",
      date: "2024-06-27",
    },
    {
      name: "Armand P.",
      location: "Gradignan",
      rating: 5,
      text: "Rachat de bijoux en or effectué dans les meilleures conditions. Je recommande vivement !",
      date: "2024-06-25",
    },
    {
      name: "Thérèse Q.",
      location: "Cenon",
      rating: 5,
      text: "Très satisfaite du service pour le rachat de porcelaines. Expert très compétent.",
      date: "2024-06-22",
    },
    {
      name: "Eugène R.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de meubles Louis XVI. Prix justes.",
      date: "2024-06-20",
    },
    {
      name: "Léonie S.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Service impeccable pour le rachat de montres anciennes. Transaction rapide et efficace.",
      date: "2024-06-18",
    },
    {
      name: "Alphonse T.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Très professionnel pour l'estimation d'objets d'art. Je recommande sans hésiter !",
      date: "2024-06-15",
    },
    {
      name: "Augustine U.",
      location: "Bordeaux",
      rating: 5,
      text: "Excellent accueil pour le rachat d'argenterie familiale. Prix très corrects.",
      date: "2024-06-12",
    },
    {
      name: "Édouard V.",
      location: "Arcachon",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de bijoux anciens. Très satisfait !",
      date: "2024-06-10",
    },
    {
      name: "Joséphine W.",
      location: "Libourne",
      rating: 5,
      text: "Rachat de tableaux anciens effectué dans d'excellentes conditions. Je recommande !",
      date: "2024-06-08",
    },
    {
      name: "Victor X.",
      location: "Mérignac",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de porcelaines. Prix justes.",
      date: "2024-06-05",
    },
    {
      name: "Célestine Y.",
      location: "Pessac",
      rating: 5,
      text: "Excellent service pour le rachat de meubles anciens. Expert très compétent.",
      date: "2024-06-03",
    },
    {
      name: "Adolphe Z.",
      location: "Talence",
      rating: 5,
      text: "Service impeccable pour l'estimation de bijoux en or. Transaction rapide.",
      date: "2024-06-01",
    },
    {
      name: "Blanche A.",
      location: "Bordeaux",
      rating: 5,
      text: "Très satisfaite du rachat de montres de collection. Prix très corrects.",
      date: "2024-05-29",
    },
    {
      name: "Gustave B.",
      location: "Bègles",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat d'objets d'art. Je recommande !",
      date: "2024-05-27",
    },
    {
      name: "Clémence C.",
      location: "Gradignan",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation d'argenterie. Très professionnel !",
      date: "2024-05-25",
    },
    {
      name: "Octave D.",
      location: "Cenon",
      rating: 5,
      text: "Rachat de tableaux effectué dans les meilleures conditions. Je recommande vivement !",
      date: "2024-05-22",
    },
    {
      name: "Hortense E.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Très satisfaite du service pour le rachat de bijoux anciens. Expert très compétent.",
      date: "2024-05-20",
    },
    {
      name: "Anatole F.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de porcelaines. Prix justes.",
      date: "2024-05-18",
    },
    {
      name: "Rosalie G.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Service impeccable pour le rachat de meubles Louis XV. Transaction rapide.",
      date: "2024-05-15",
    },
    {
      name: "Théophile H.",
      location: "Bordeaux",
      rating: 5,
      text: "Très professionnel pour l'estimation de montres anciennes. Je recommande sans hésiter !",
      date: "2024-05-12",
    },
    {
      name: "Adèle I.",
      location: "Arcachon",
      rating: 5,
      text: "Excellent accueil pour le rachat d'objets d'art asiatiques. Prix très corrects.",
      date: "2024-05-10",
    },
    {
      name: "Prosper J.",
      location: "Libourne",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation d'argenterie familiale. Très satisfait !",
      date: "2024-05-08",
    },
    {
      name: "Mathilde K.",
      location: "Mérignac",
      rating: 5,
      text: "Rachat de bijoux en or effectué dans d'excellentes conditions. Je recommande !",
      date: "2024-05-05",
    },
    {
      name: "Firmin L.",
      location: "Pessac",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de tableaux anciens. Prix justes.",
      date: "2024-05-03",
    },
    {
      name: "Ernestine M.",
      location: "Talence",
      rating: 5,
      text: "Excellent service pour le rachat de porcelaines anciennes. Expert très compétent.",
      date: "2024-05-01",
    },
    {
      name: "Amédée N.",
      location: "Bordeaux",
      rating: 5,
      text: "Service impeccable pour l'estimation de meubles anciens. Transaction rapide.",
      date: "2024-04-29",
    },
    {
      name: "Léontine O.",
      location: "Bègles",
      rating: 5,
      text: "Très satisfaite du rachat de bijoux anciens. Prix très corrects et honnêtes.",
      date: "2024-04-27",
    },
    {
      name: "Clovis P.",
      location: "Gradignan",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat de montres. Je recommande !",
      date: "2024-04-25",
    },
    {
      name: "Euphrasie Q.",
      location: "Cenon",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation d'objets d'art. Très professionnel !",
      date: "2024-04-22",
    },
    {
      name: "Hippolyte R.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Rachat d'argenterie effectué dans les meilleures conditions. Je recommande vivement !",
      date: "2024-04-20",
    },
    {
      name: "Zélie S.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Très satisfaite du service pour le rachat de tableaux. Expert très compétent.",
      date: "2024-04-18",
    },
    {
      name: "Augustin T.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de bijoux en or. Prix justes.",
      date: "2024-04-15",
    },
    {
      name: "Philomène U.",
      location: "Bordeaux",
      rating: 5,
      text: "Service impeccable pour le rachat de porcelaines. Transaction rapide et efficace.",
      date: "2024-04-12",
    },
    {
      name: "Casimir V.",
      location: "Arcachon",
      rating: 5,
      text: "Très professionnel pour l'estimation de meubles Louis XVI. Je recommande sans hésiter !",
      date: "2024-04-10",
    },
    {
      name: "Apolline W.",
      location: "Libourne",
      rating: 5,
      text: "Excellent accueil pour le rachat de montres anciennes. Prix très corrects.",
      date: "2024-04-08",
    },
    {
      name: "Fulgence X.",
      location: "Mérignac",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation d'objets d'art asiatiques. Très satisfait !",
      date: "2024-04-05",
    },
    {
      name: "Scholastique Y.",
      location: "Pessac",
      rating: 5,
      text: "Rachat d'argenterie familiale effectué dans d'excellentes conditions. Je recommande !",
      date: "2024-04-03",
    },
    {
      name: "Polycarpe Z.",
      location: "Talence",
      rating: 5,
      text: "Très professionnel pour l'estimation et le rachat de bijoux anciens. Prix justes.",
      date: "2024-04-01",
    },
    {
      name: "Bénédicte A.",
      location: "Bordeaux",
      rating: 5,
      text: "Excellent service pour le rachat de tableaux anciens. Expert très compétent et à l'écoute.",
      date: "2024-03-29",
    },
    {
      name: "Donatien B.",
      location: "Bègles",
      rating: 5,
      text: "Service impeccable pour l'estimation de porcelaines. Transaction rapide.",
      date: "2024-03-27",
    },
    {
      name: "Perpétue C.",
      location: "Gradignan",
      rating: 5,
      text: "Très satisfaite du rachat de meubles anciens. Prix très corrects et honnêtes.",
      date: "2024-03-25",
    },
    {
      name: "Boniface D.",
      location: "Cenon",
      rating: 5,
      text: "Excellent accueil et professionnalisme pour le rachat de bijoux en or. Je recommande !",
      date: "2024-03-22",
    },
    {
      name: "Séraphine E.",
      location: "La Teste-de-Buch",
      rating: 5,
      text: "Service rapide et efficace pour l'estimation de montres de collection. Très professionnel !",
      date: "2024-03-20",
    },
    {
      name: "Théodule F.",
      location: "Saint-Médard-en-Jalles",
      rating: 5,
      text: "Rachat d'objets d'art effectué dans les meilleures conditions. Je recommande vivement !",
      date: "2024-03-18",
    },
    {
      name: "Angélique G.",
      location: "Villenave-d'Ornon",
      rating: 5,
      text: "Très satisfaite du service pour le rachat d'argenterie. Expert très compétent.",
      date: "2024-03-15",
    },
    {
      name: "Prudent H.",
      location: "Bordeaux",
      rating: 5,
      text: "Excellent service pour l'estimation et le rachat de tableaux. Prix justes.",
      date: "2024-03-12",
    },
    {
      name: "Constance I.",
      location: "Arcachon",
      rating: 5,
      text: "Service impeccable pour le rachat de bijoux anciens. Transaction rapide et efficace.",
      date: "2024-03-10",
    },
    {
      name: "Modeste J.",
      location: "Libourne",
      rating: 5,
      text: "Très professionnel pour l'estimation de porcelaines anciennes. Je recommande sans hésiter !",
      date: "2024-03-08",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Témoignages de Nos Clients en Gironde
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits à Bordeaux, Arcachon, Libourne et dans toute la Gironde
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C4A053] text-[#C4A053]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#1a1f5c]">5,0</span>
            <span className="text-gray-600">({testimonials.length} avis)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 9).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#C4A053]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-justify">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#1a1f5c]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
