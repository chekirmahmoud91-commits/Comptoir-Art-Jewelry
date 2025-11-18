import Script from "next/script"

export function GoogleAds() {
  return (
    <>
      {/* Google Ads (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17682916704" strategy="afterInteractive" />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17682916704');
        `}
      </Script>
    </>
  )
}
