import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Head from "next/head";
import { Global, css } from '@emotion/react';

const colors = {
  brand: {
    primary: '#5b1ab2',
    secondary: '#d91b67',
  },
}

const fonts = {
  fonts: {
    heading: 'Bungee Shade, cursive',
    body: 'Bungee Shade, cursive',
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

const theme = extendTheme({ colors, fonts, config, breakpoints })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Head>
        <meta name="description" content="Portfólio Giovana Nelo Furlan - Frontend Developer " />
        <meta name='viewport' content='minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <title>Portfólio Giovana Nelo Furlan</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;