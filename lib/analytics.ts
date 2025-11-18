// Analytics utility functions for tracking user actions

export async function trackAction(action_type: string, page_url?: string) {
  try {
    await fetch("/api/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action_type,
        page_url: page_url || window.location.pathname,
      }),
    })
  } catch (error) {
    console.error("[v0] Error tracking action:", error)
  }
}

export async function trackPageView() {
  await trackAction("page_view")
}

export async function trackCallClick() {
  await trackAction("click_call")
}

export async function trackEstimationClick() {
  await trackAction("click_estimation")
}

export { trackCallClick as trackCall }
