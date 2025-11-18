import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message } = body

    // Save to Supabase
    const supabase = await createClient()
    const { error: dbError } = await supabase.from("contact_requests").insert([
      {
        name,
        email,
        phone,
        address,
        message,
        object_type: "Contact général",
      },
    ])

    if (dbError) {
      console.error("[v0] Error saving to database:", dbError)
      return NextResponse.json({ error: "Failed to save contact" }, { status: 500 })
    }

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: "Comptoir Art & Jewelry <onboarding@resend.dev>",
      to: ["chekir.mahmoud91@gmail.com"],
      subject: "Demande de contact - Comptoir Art Jewelry",
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("[v0] Error sending email:", error)
      // Don't return error if email fails, contact is already saved
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error in POST /api/send-contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
