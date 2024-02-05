import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="rick and morty" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rick and Morty" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="shortcut icon"
          href="/images/rick-icon.png"
          type="image/png"
          sizes="240x240"
        />
        <meta name="author" content="Eduardo alves da Silva" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
