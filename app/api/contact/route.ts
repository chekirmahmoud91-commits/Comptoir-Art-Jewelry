import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

// POST /api/contact - Record a contact request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message, object_type } = body

    // Validation
    if (!name || !email) {
      return NextResponse.json({ error: "name and email are required" }, { status: 400 })
    }

    const supabase = await createClient()

    // Insert contact request
    const { data: contactData, error: contactError } = await supabase.from("contact_requests").insert({
      name,
      email,
      phone: phone || null,
      address: address || null,
      message: message || null,
      object_type: object_type || null,
    })

    if (contactError) {
      console.error("[v0] Error inserting contact request:", contactError)
      return NextResponse.json({ error: contactError.message }, { status: 500 })
    }

    // Also record as a stats action
    const { error: statsError } = await supabase.from("stats_actions").insert({
      action_type: "form_submit",
      page_url: request.headers.get("referer") || "/",
      user_agent: request.headers.get("user-agent") || "unknown",
      ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    })

    if (statsError) {
      console.error("[v0] Error inserting stats action:", statsError)
    }

    return NextResponse.json({ success: true, data: contactData })
  } catch (error) {
    console.error("[v0] Error in POST /api/contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
