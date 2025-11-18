import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    // Simple password check - you can change this password in environment variables
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "CA&J"

    if (password === ADMIN_PASSWORD) {
      // Set a secure cookie for authentication
      const cookieStore = await cookies()
      cookieStore.set("admin_authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: "Mot de passe incorrect" }, { status: 401 })
    }
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 })
  }
}
