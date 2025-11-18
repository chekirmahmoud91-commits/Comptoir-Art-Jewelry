"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackPageView } from "@/lib/analytics"

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const excludedPaths = ["/admin", "/auth"]
    const shouldTrack = !excludedPaths.some((path) => pathname.startsWith(path))

    if (shouldTrack) {
      trackPageView()
    }
  }, [pathname])

  return null
}
