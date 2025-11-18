import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// POST /api/stats - Record a user action
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action_type, page_url } = body

    if (!action_type) {
      return NextResponse.json({ error: "action_type is required" }, { status: 400 })
    }

    const supabase = await createClient()

    // Get user agent and IP from request headers
    const user_agent = request.headers.get("user-agent") || "unknown"
    const ip_address = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    console.log("[v0] Inserting stats action:", { action_type, page_url })

    const { data, error } = await supabase.from("stats_actions").insert({
      action_type,
      page_url: page_url || request.nextUrl.pathname,
      user_agent,
      ip_address,
    })

    if (error) {
      console.error("[v0] Error inserting stats:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Stats action inserted successfully")
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error in POST /api/stats:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET /api/stats - Get statistics (requires authentication)
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get("admin_authenticated")?.value === "true"

    if (!isAuthenticated) {
      console.log("[v0] Unauthorized access attempt to /api/stats")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("[v0] Fetching stats from database...")
    const supabase = await createClient()

    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "30")
    const dateFilter = searchParams.get("dateFilter") || "range" // 'today', 'yesterday', 'range', 'custom'
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
      // Default range
      startDate.setDate(startDate.getDate() - days)
    }

    console.log("[v0] Fetching actions from", startDate.toISOString(), "to", endDate.toISOString())

    // Get all stats actions
    const { data: actions, error: actionsError } = await supabase
      .from("stats_actions")
      .select("*")
      .gte("created_at", startDate.toISOString())
      .lte("created_at", endDate.toISOString())
      .order("created_at", { ascending: false })

    if (actionsError) {
      console.error("[v0] Error fetching stats:", actionsError)
      return NextResponse.json({ error: actionsError.message }, { status: 500 })
    }

    console.log("[v0] Found", actions?.length || 0, "actions")

    // Get contact requests
    const { data: contacts, error: contactsError } = await supabase
      .from("contact_requests")
      .select("*")
      .gte("created_at", startDate.toISOString())
      .lte("created_at", endDate.toISOString())
      .order("created_at", { ascending: false })

    if (contactsError) {
      console.error("[v0] Error fetching contacts:", contactsError)
      return NextResponse.json({ error: contactsError.message }, { status: 500 })
    }

    console.log("[v0] Found", contacts?.length || 0, "contacts")

    const uniqueIPs = new Set(actions?.map((a) => a.ip_address).filter(Boolean))
    const uniqueVisitors = uniqueIPs.size

    const pageViews = actions?.filter((a) => a.action_type === "page_view") || []
    const pageViewMap = new Map<string, number>()
    pageViews.forEach((action) => {
      const url = action.page_url || "/"
      pageViewMap.set(url, (pageViewMap.get(url) || 0) + 1)
    })
    const topPages = Array.from(pageViewMap.entries())
      .map(([url, count]) => ({ url, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)

    // Calculate statistics
    const stats = {
      total_visits: pageViews.length,
      unique_visitors: uniqueVisitors,
      total_call_clicks: actions?.filter((a) => a.action_type === "click_call").length || 0,
      total_estimation_clicks: actions?.filter((a) => a.action_type === "click_estimation").length || 0,
      total_form_submits: contacts?.length || 0, // Use contacts length instead of form_submit actions
      top_pages: topPages,
      actions: actions || [],
      contacts: contacts || [],
    }

    console.log("[v0] Returning stats:", {
      total_visits: stats.total_visits,
      unique_visitors: stats.unique_visitors,
      total_call_clicks: stats.total_call_clicks,
      total_estimation_clicks: stats.total_estimation_clicks,
      total_form_submits: stats.total_form_submits,
      top_pages_count: stats.top_pages.length,
    })

    return NextResponse.json(stats)
  } catch (error) {
    console.error("[v0] Error in GET /api/stats:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
