import Script from "next/script";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

const validGoogleAnalyticsId =
  googleAnalyticsId && /^G-[A-Z0-9]+$/i.test(googleAnalyticsId)
    ? googleAnalyticsId.toUpperCase()
    : null;
const validClarityProjectId =
  clarityProjectId && /^[A-Z0-9]+$/i.test(clarityProjectId)
    ? clarityProjectId.toLowerCase()
    : null;

export function SiteAnalytics() {
  if (!validGoogleAnalyticsId && !validClarityProjectId) {
    return null;
  }

  return (
    <>
      {validGoogleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${validGoogleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(validGoogleAnalyticsId)});
            `}
          </Script>
        </>
      ) : null}

      {validClarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", ${JSON.stringify(validClarityProjectId)});
          `}
        </Script>
      ) : null}
    </>
  );
}
