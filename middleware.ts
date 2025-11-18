import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Only protect /admin routes (except /admin/login)
  if (path.startsWith("/admin") && !path.startsWith("/auth/login")) {
    const authCookie = request.cookies.get("admin_authenticated")

    if (!authCookie || authCookie.value !== "true") {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
