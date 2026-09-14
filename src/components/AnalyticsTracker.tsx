'use client';

import React from 'react';
import Script from 'next/script';

export default function AnalyticsTracker() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-INNOVATECH';
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '123456789012345';

  return (
    <>
      {/* ======================================================== */}
      {/* 📈 GOOGLE ANALYTICS 4 (GA4) - Loaded on Idle */}
      {/* ======================================================== */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* ======================================================== */}
      {/* 🎯 FACEBOOK PIXEL (META PIXEL) - Loaded on Idle */}
      {/* ======================================================== */}
      {fbPixelId && (
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
