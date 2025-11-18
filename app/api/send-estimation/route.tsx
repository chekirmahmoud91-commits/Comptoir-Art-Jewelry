import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const objectType = formData.get("objectType") as string
    const description = formData.get("description") as string
    const files = formData.getAll("files") as File[]

    // Convert files to attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        return {
          filename: file.name,
          content: buffer,
        }
      }),
    )

    const { data, error } = await resend.emails.send({
      from: "Comptoir Art & Jewelry <onboarding@resend.dev>",
      to: ["chekir.mahmoud91@gmail.com"],
      subject: "Demande d'estimation - Comptoir Art Jewelry",
      html: `
        <h2>Nouvelle demande d'estimation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>Type d'objet:</strong> ${objectType}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
        ${files.length > 0 ? `<p><strong>Photos jointes:</strong> ${files.length} fichier(s)</p>` : ""}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error("[v0] Error sending email:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error in POST /api/send-estimation:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
