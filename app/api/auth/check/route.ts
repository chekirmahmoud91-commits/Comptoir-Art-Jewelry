import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get("admin_authenticated")?.value === "true"

    return NextResponse.json({ authenticated: isAuthenticated })
  } catch (error) {
    console.error("[v0] Auth check error:", error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}
