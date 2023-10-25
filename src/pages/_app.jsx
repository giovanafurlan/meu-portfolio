import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Head from "next/head";
import { Global, css } from '@emotion/react';
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import "@fontsource/roboto";
import Header from '../components/Header';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        button: {
          bg: "#5C5470",
          color: "white",
          fontWeight: "normal",
          borderRadius: "50px",
          fontSize: "14px",
          width: "min-content",
        },
        "button-outline": {
          bg: "transparent",
          color: "#5C5470",
          borderColor: "#5C5470",
          fontWeight: "normal",
          borderRadius: "50px",
          fontSize: "14px",
          width: "min-content",
          border: "1px",
        },
      },
    },
    Heading: {
      variants: {
        h1: {
          fontSize: "4xl",
          fontWeight: "bold",
        },
        h2: {
          fontSize: "3xl",
          fontWeight: "bold",
          textAlign: "center",
        },
        h3: {
          fontSize: "2xl",
          fontWeight: "normal",
        },
        h4: {
          fontSize: "2xl",
          fontWeight: "normal",
        },
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1800px",
  },
  colors: {
    primary: "#5C5470",
    secondary: "#352F44",
    tertiary: "#2A2438",
    bgClear: "#DBD8E3",
    bgDark: "#352F44",
    bgClearMedium: "#E5B299",
    bgDarkMedium: "#EDEDED",
  },
});

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Head>
          <meta
            name="description"
            content="Portfólio Giovana Nelo Furlan"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>Portfólio Giovana Furlan</title>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html:
                `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MPFQG25Q');`
            }}
          ></script>
          {/* End Google Tag Manager */}
        </Head>
      <ClerkProvider localization={ptBR} {...pageProps}>
        <Header />
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ClerkProvider>
    </ChakraProvider>
    {/* Google Tag Manager (noscript)  */}
    <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPFQG25Q"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    }}
  />
{/* End Google Tag Manager (noscript)  */}
</>
  );
}

export default MyApp;