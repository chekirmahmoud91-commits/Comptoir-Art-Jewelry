"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Phone, FileText, Eye, LogOut, TrendingUp, Users, Calendar, MapPin } from "lucide-react"

interface Stats {
  total_visits: number
  unique_visitors: number
  total_call_clicks: number
  total_estimation_clicks: number
  total_form_submits: number
  top_pages: Array<{ url: string; count: number }>
  actions: Array<{
    id: string
    action_type: string
    page_url: string
    created_at: string
  }>
  contacts: Array<{
    id: string
    name: string
    email: string
    phone: string
    message: string
    object_type: string
    created_at: string
  }>
}

interface LocationData {
  city: string
  region: string
  country: string
  count: number
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  author: string
  published: boolean
  published_at: string
  created_at: string
}

export default function DashboardClient({ userEmail }: { userEmail: string }) {
  const [stats, setStats] = useState<Stats | null>(null)
  const [locations, setLocations] = useState<LocationData[]>([])
  const [loading, setLoading] = useState(true)
  const [dateFilter, setDateFilter] = useState<"today" | "yesterday" | "range" | "custom">("today")
  const [days, setDays] = useState(1)
  const [customStartDate, setCustomStartDate] = useState("")
  const [customEndDate, setCustomEndDate] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchStats()
    fetchLocations()
  }, [dateFilter, days, customStartDate, customEndDate])

  const fetchStats = async () => {
    setLoading(true)
    try {
      let url = `/api/stats?dateFilter=${dateFilter}`
      if (dateFilter === "range") {
        url += `&days=${days}`
      } else if (dateFilter === "custom" && customStartDate && customEndDate) {
        url += `&startDate=${customStartDate}&endDate=${customEndDate}`
      }
      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch stats")
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("[v0] Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchLocations = async () => {
    try {
      let url = `/api/stats/locations?dateFilter=${dateFilter}`
      if (dateFilter === "range") {
        url += `&days=${days}`
      } else if (dateFilter === "custom" && customStartDate && customEndDate) {
        url += `&startDate=${customStartDate}&endDate=${customEndDate}`
      }
      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch locations")
      const data = await response.json()
      setLocations(data.locations || [])
    } catch (error) {
      console.error("[v0] Error fetching locations:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/auth/login")
      router.refresh()
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
  }

  const formatPageName = (url: string) => {
    if (url === "/" || url === "") return "Page d'accueil"
    return url
  }

  // Prepare chart data - group by date
  const getChartData = () => {
    if (!stats) return []

    const dateMap = new Map<string, { date: string; visits: number; calls: number; forms: number }>()

    stats.actions.forEach((action) => {
      const date = new Date(action.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })
      if (!dateMap.has(date)) {
        dateMap.set(date, { date, visits: 0, calls: 0, forms: 0 })
      }
      const entry = dateMap.get(date)!
      if (action.action_type === "page_view") entry.visits++
      if (action.action_type === "click_call") entry.calls++
      if (action.action_type === "form_submit") entry.forms++
    })

    return Array.from(dateMap.values()).slice(-14) // Last 14 days
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#C4A053] border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Chargement des statistiques...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c]">
      <div className="bg-gradient-to-r from-[#0f1338] via-[#1a1f5c] to-[#0f1338] text-white py-8 px-4 md:px-8 shadow-2xl border-b-4 border-[#C4A053]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-[#C4A053]" />
              Dashboard Admin
            </h1>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <Users className="w-4 h-4" />
              {userEmail}
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-white border-2 border-[#C4A053] hover:bg-[#C4A053] hover:text-[#1a1f5c] bg-transparent transition-all duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => {}} // Blog tab button removed
            variant={"default"} // Now always default as only stats tab exists
            className={
              "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]" // Styling for active stats tab
            }
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Statistiques
          </Button>
        </div>

        <>
          <Card className="mb-8 shadow-2xl border-2 border-[#C4A053] bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
            <CardHeader className="border-b-2 border-[#C4A053]/30">
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5 text-[#C4A053]" />
                Période d'analyse
              </CardTitle>
              <CardDescription className="text-gray-300">
                Sélectionnez la période pour filtrer les statistiques
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-4">
                <Button
                  onClick={() => setDateFilter("today")}
                  variant={dateFilter === "today" ? "default" : "outline"}
                  className={
                    dateFilter === "today"
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Aujourd'hui
                </Button>
                <Button
                  onClick={() => setDateFilter("yesterday")}
                  variant={dateFilter === "yesterday" ? "default" : "outline"}
                  className={
                    dateFilter === "yesterday"
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  Hier
                </Button>
                <Button
                  onClick={() => {
                    setDateFilter("range")
                    setDays(7)
                  }}
                  variant={dateFilter === "range" && days === 7 ? "default" : "outline"}
                  className={
                    dateFilter === "range" && days === 7
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  7 jours
                </Button>
                <Button
                  onClick={() => {
                    setDateFilter("range")
                    setDays(30)
                  }}
                  variant={dateFilter === "range" && days === 30 ? "default" : "outline"}
                  className={
                    dateFilter === "range" && days === 30
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  30 jours
                </Button>
                <Button
                  onClick={() => {
                    setDateFilter("range")
                    setDays(90)
                  }}
                  variant={dateFilter === "range" && days === 90 ? "default" : "outline"}
                  className={
                    dateFilter === "range" && days === 90
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  90 jours
                </Button>
                <Button
                  onClick={() => setDateFilter("custom")}
                  variant={dateFilter === "custom" ? "default" : "outline"}
                  className={
                    dateFilter === "custom"
                      ? "bg-[#C4A053] hover:bg-[#b39048] text-white shadow-lg border-2 border-[#C4A053]"
                      : "bg-transparent border-2 border-[#C4A053] text-[#C4A053] hover:bg-[#C4A053] hover:text-white"
                  }
                >
                  Personnalisé
                </Button>
              </div>

              {dateFilter === "custom" && (
                <div className="flex flex-col sm:flex-row gap-3 items-center bg-[#1a1f5c]/50 p-4 rounded-lg border-2 border-[#C4A053]/30">
                  <Input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="max-w-xs border-2 border-[#C4A053] bg-white/10 text-white focus:border-[#C4A053]"
                  />
                  <span className="text-[#C4A053] font-medium">à</span>
                  <Input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="max-w-xs border-2 border-[#C4A053] bg-white/10 text-white focus:border-[#C4A053]"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#C4A053] shadow-2xl hover:shadow-[0_0_30px_rgba(196,160,83,0.3)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  Visites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-1">{stats?.total_visits || 0}</div>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#C4A053]" />
                  Pages vues
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#C4A053] shadow-2xl hover:shadow-[0_0_30px_rgba(196,160,83,0.3)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  Visiteurs uniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-1">{stats?.unique_visitors || 0}</div>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#C4A053]" />
                  Utilisateurs différents
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#C4A053] shadow-2xl hover:shadow-[0_0_30px_rgba(196,160,83,0.3)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  Appels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-1">{stats?.total_call_clicks || 0}</div>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#C4A053]" />
                  Clics sur le numéro
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#C4A053] shadow-2xl hover:shadow-[0_0_30px_rgba(196,160,83,0.3)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  Formulaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-1">{stats?.total_form_submits || 0}</div>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#C4A053]" />
                  Demandes d'estimation
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 shadow-2xl border-2 border-[#C4A053] bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
            <CardHeader className="border-b-2 border-[#C4A053]/30">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="p-2 bg-[#C4A053] rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                Localisation des visiteurs
              </CardTitle>
              <CardDescription className="text-gray-300">
                Départements et villes d'où proviennent vos visiteurs
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {locations && locations.length > 0 ? (
                  locations.slice(0, 10).map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-[#1a1f5c] to-[#252b6e] rounded-xl border-2 border-[#C4A053]/30 hover:border-[#C4A053] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4A053] text-white text-lg font-bold shadow-md">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">{location.city}</p>
                          <p className="text-sm text-gray-300">
                            {location.region}, {location.country}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-[#C4A053]">{location.count}</p>
                        <p className="text-xs text-gray-300 font-medium">visiteurs</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-[#1a1f5c]/50 rounded-xl border-2 border-dashed border-[#C4A053]/30">
                    <MapPin className="w-12 h-12 text-[#C4A053] mx-auto mb-3" />
                    <p className="text-gray-300 font-medium">
                      Aucune donnée de localisation disponible pour cette période
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-2xl border-2 border-[#C4A053] bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
            <CardHeader className="border-b-2 border-[#C4A053]/30">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="p-2 bg-[#C4A053] rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Top Pages
              </CardTitle>
              <CardDescription className="text-gray-300">
                Pages les plus visitées pendant la période sélectionnée
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {stats?.top_pages && stats.top_pages.length > 0 ? (
                  stats.top_pages.map((page, index) => (
                    <div
                      key={page.url}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-[#1a1f5c] to-[#252b6e] rounded-xl border-2 border-[#C4A053]/30 hover:border-[#C4A053] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4A053] text-white text-lg font-bold shadow-md">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">{formatPageName(page.url)}</p>
                          <p className="text-sm text-gray-300">Page visitée</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-[#C4A053]">{page.count}</p>
                        <p className="text-xs text-gray-300 font-medium">vues</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-[#1a1f5c]/50 rounded-xl border-2 border-dashed border-[#C4A053]/30">
                    <Eye className="w-12 h-12 text-[#C4A053] mx-auto mb-3" />
                    <p className="text-gray-300 font-medium">Aucune donnée disponible pour cette période</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-2xl border-2 border-[#C4A053] bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="border-b-2 border-[#C4A053]/30">
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Évolution des visites
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Nombre de pages vues par jour (14 derniers jours)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#C4A053" opacity={0.2} />
                    <XAxis dataKey="date" stroke="#C4A053" />
                    <YAxis stroke="#C4A053" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1f5c",
                        border: "2px solid #C4A053",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                        color: "white",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="visits"
                      stroke="#C4A053"
                      strokeWidth={3}
                      name="Visites"
                      dot={{ r: 4, fill: "#C4A053" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-2 border-[#C4A053] bg-gradient-to-br from-[#252b6e] to-[#1a1f5c]">
              <CardHeader className="border-b-2 border-[#C4A053]/30">
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="p-2 bg-[#C4A053] rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Actions utilisateurs
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Répartition des actions par jour (14 derniers jours)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#C4A053" opacity={0.2} />
                    <XAxis dataKey="date" stroke="#C4A053" />
                    <YAxis stroke="#C4A053" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1f5c",
                        border: "2px solid #C4A053",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                        color: "white",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="calls" fill="#10b981" name="Appels" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="forms" fill="#8b5cf6" name="Formulaires" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </>
      </div>
    </div>
  )
}
