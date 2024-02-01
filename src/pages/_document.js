import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
