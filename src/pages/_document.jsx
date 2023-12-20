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
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  )
}