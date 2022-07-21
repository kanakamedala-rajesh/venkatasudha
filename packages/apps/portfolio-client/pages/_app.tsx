import '../styles/globals.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {router.route === '/' && <title>Rajesh Kanakamedala Portfolio</title>}
        <meta
          name="description"
          content={
            "Rajesh Kanakamedala's Portfolio - " + router.route.replace('/', '')
          }
        />
        <meta
          name="keywords"
          content={
            'Portfolio, Rajesh, Kanakamedala, Rajesh Kanakamedala, Venkata Sudha, Personal Portfolio, Next JS Portfolio, React, GraphQL, Firebase, ' +
            router.route.replace('/', '')
          }
        />
        <link rel="canonical" href={router.route} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
