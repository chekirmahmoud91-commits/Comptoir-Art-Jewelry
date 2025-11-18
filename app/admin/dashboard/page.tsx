import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import DashboardClient from "./dashboard-client"

export const metadata = {
  title: "Dashboard Admin - Comptoir Art & Jewelry",
  description: "Tableau de bord des statistiques",
}

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_authenticated")?.value === "true"

  if (!isAuthenticated) {
    redirect("/auth/login")
  }

  return <DashboardClient userEmail="contact@comptoirartjewelry.fr" />
}
