import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileMenuButton } from "@/components/mobile-menu-button"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { JsonLdSchema } from "@/components/json-ld-schema"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-tag-manager"
import { GoogleAnalytics } from "@/components/google-analytics"
import { GoogleAds } from "@/components/google-ads"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Comptoir Art Jewelry - Achat d'Antiquités en Nouvelle-Aquitaine",
    template: "%s | Comptoir Art Jewelry",
  },
  description:
    "Achat d'objets d'art, bijoux, montres et antiquités en Nouvelle-Aquitaine. Estimation gratuite et déplacement à domicile.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "achat antiquités",
    "rachat objets d'art",
    "estimation gratuite",
    "bijoux anciens",
    "montres de collection",
    "meubles anciens",
    "tableaux",
    "argenterie",
    "porcelaine",
    "Nouvelle-Aquitaine",
    "Gironde",
    "Bordeaux",
    "Limoges",
  ],
  authors: [{ name: "Comptoir Art Jewelry" }],
  creator: "Comptoir Art Jewelry",
  publisher: "Comptoir Art Jewelry",
  metadataBase: new URL("https://comptoir-art-jewelry.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://comptoir-art-jewelry.fr",
    title: "Comptoir Art Jewelry - Achat d'Antiquités en Nouvelle-Aquitaine",
    description:
      "Achat d'objets d'art, bijoux, montres et antiquités en Nouvelle-Aquitaine. Estimation gratuite et déplacement à domicile.",
    siteName: "Comptoir Art Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comptoir Art Jewelry - Achat d'Antiquités",
    description: "Achat d'objets d'art et antiquités en Nouvelle-Aquitaine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOVklqTQZWC5qQ62DjI-3pqemBuYT9czgsdMVofKA10",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLdSchema />
        <GoogleTagManager />
        <GoogleAnalytics />
        <GoogleAds />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${crimsonPro.variable}`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
        <AnalyticsTracker />
        <MobileMenuButton />
        <WhatsAppButton />
      </body>
    </html>
  )
}
