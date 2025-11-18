import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// GET /api/stats/locations - Get visitor locations from IPs
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get("admin_authenticated")?.value === "true"

    if (!isAuthenticated) {
      console.log("[v0] Locations API: Unauthorized access attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = await createClient()

    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "30")
    const dateFilter = searchParams.get("dateFilter") || "range"
    const customStart = searchParams.get("startDate")
    const customEnd = searchParams.get("endDate")

    let startDate = new Date()
    let endDate = new Date()

    if (dateFilter === "today") {
      startDate.setHours(0, 0, 0, 0)
      endDate.setHours(23, 59, 59, 999)
    } else if (dateFilter === "yesterday") {
      startDate.setDate(startDate.getDate() - 1)
      startDate.setHours(0, 0, 0, 0)
      endDate.setDate(endDate.getDate() - 1)
      endDate.setHours(23, 59, 59, 999)
    } else if (dateFilter === "custom" && customStart && customEnd) {
      startDate = new Date(customStart)
      endDate = new Date(customEnd)
      endDate.setHours(23, 59, 59, 999)
    } else {
      startDate.setDate(startDate.getDate() - days)
    }

    // Get all unique IPs from stats_actions
    const { data: actions, error } = await supabase
      .from("stats_actions")
      .select("ip_address")
      .gte("created_at", startDate.toISOString())
      .lte("created_at", endDate.toISOString())

    if (error) {
      console.error("[v0] Error fetching IPs:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Total actions fetched:", actions?.length || 0)

    // Count occurrences of each IP
    const ipCounts = new Map<string, number>()
    actions?.forEach((action) => {
      if (action.ip_address && action.ip_address !== "unknown") {
        ipCounts.set(action.ip_address, (ipCounts.get(action.ip_address) || 0) + 1)
      }
    })

    const uniqueIPs = Array.from(ipCounts.keys())

    console.log("[v0] Found", uniqueIPs.length, "unique IPs to geolocate")
    console.log("[v0] Sample IPs:", uniqueIPs.slice(0, 3))

    const locationMap = new Map<string, { city: string; region: string; country: string; count: number }>()

    for (const ip of uniqueIPs.slice(0, 50)) {
      try {
        console.log(`[v0] Geolocating IP: ${ip}`)
        const response = await fetch(`https://ipapi.co/${ip}/json/`)
        if (!response.ok) {
          console.log(`[v0] Failed to geolocate ${ip}: ${response.status}`)
          continue
        }

        const data = await response.json()
        console.log(`[v0] Geolocation result for ${ip}:`, data)

        const city = data.city || "Ville inconnue"
        const region = data.region || "Région inconnue"
        const country = data.country_name || "Pays inconnu"
        const count = ipCounts.get(ip) || 1

        const key = `${city}-${region}`
        if (locationMap.has(key)) {
          const existing = locationMap.get(key)!
          existing.count += count
        } else {
          locationMap.set(key, { city, region, country, count })
        }

        // Add delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 150))
      } catch (error) {
        console.error(`[v0] Error geolocating IP ${ip}:`, error)
      }
    }

    const locations = Array.from(locationMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 15)

    console.log("[v0] Final locations to return:", locations)
    console.log("[v0] Total unique locations:", locations.length)

    return NextResponse.json({
      locations,
      totalLocations: locations.length,
    })
  } catch (error) {
    console.error("[v0] Error in GET /api/stats/locations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
