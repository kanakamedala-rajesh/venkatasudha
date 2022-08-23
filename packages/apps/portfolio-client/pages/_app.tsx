import '../styles/globals.css';

import { Navbar } from '@venkatasudha/core-components';
import { isActiveLink, NAVBAR_ITEMS } from '@venkatasudha/portfolio-core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar iconString={'RK'}>
        {NAVBAR_ITEMS.map((item) => {
          return (
            <li
              key={item._id}
              className={
                isActiveLink(item.url, router.pathname)
                  ? 'gradient-underlined-text font-arimaMadurai p-4 text-lg font-extrabold'
                  : 'navlink font-spinnaker text-primary hover:text-secondary transform cursor-pointer p-4 text-lg font-extrabold outline-hidden transition-all duration-300'
              }
            >
              <Link href={item.url}>
                <a
                  // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="cursor-pointer"
                >
                  {item.navbarItem}
                </a>
              </Link>
            </li>
          );
        })}
      </Navbar>
      <Component {...pageProps} />
    </>
  );
}
