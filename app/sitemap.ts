import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://comptoir-art-jewelry.fr" // Updated domain to comptoir-art-jewelry.fr

  // Pages principales
  const routes = ["", "/a-propos", "/categories", "/contact", "/processus", "/zone-intervention"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Pages légales
  const legalPages = ["/mentions-legales", "/politique-confidentialite", "/cgv"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  // Pages de spécialités avec toutes les 12 catégories
  const specialties = [
    "/bijoux-montres",
    "/meubles-anciens",
    "/tableaux-peintures",
    "/argenterie-orfevrerie",
    "/ceramiques-porcelaines",
    "/sculptures-bronzes",
    "/objets-art-asiatiques",
    "/horlogerie",
    "/verrerie-cristal",
    "/tapis-tapisseries",
    "/livres-anciens",
    "/vins-spiritueux",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Pages de catégories
  const categories = [
    "/bijoux-montres",
    "/meubles-anciens",
    "/tableaux-sculptures",
    "/argenterie-porcelaine",
    "/objets-art-asiatique",
    "/instruments-musique",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Pages de départements
  const departments = [
    "/zone-intervention/charente-16",
    "/zone-intervention/charente-maritime-17",
    "/zone-intervention/correze-19",
    "/zone-intervention/creuse-23",
    "/zone-intervention/dordogne-24",
    "/zone-intervention/gironde-33",
    "/zone-intervention/landes-40",
    "/zone-intervention/lot-et-garonne-47",
    "/zone-intervention/pyrenees-atlantiques-64",
    "/zone-intervention/deux-sevres-79",
    "/zone-intervention/vienne-86",
    "/zone-intervention/haute-vienne-87",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Pages de villes pour Gironde
  const girondeCity = [
    "/zone-intervention/gironde-33/bordeaux",
    "/zone-intervention/gironde-33/arcachon",
    "/zone-intervention/gironde-33/libourne",
    "/zone-intervention/gironde-33/merignac",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const rachatPages = ["/rachat-antiquites-bordeaux"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...routes, ...legalPages, ...rachatPages, ...specialties, ...categories, ...girondeCity]
}
