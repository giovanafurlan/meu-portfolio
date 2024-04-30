import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFE5CDFLM5"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-GFE5CDFLM5');
      </script>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  )
}