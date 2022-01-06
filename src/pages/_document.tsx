import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta name="theme-color" content="#f59e0b" />
          <meta name="keywords" content="Flavio Santos" />
          <meta name="title" content="Flavio Santos" />
          <meta name="description" content="Portfolio Flávio Santos | Dev" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Flavio Santos" />
          <meta property="og:title" content="Flavio Santos" />
          <meta property="og:description" content="Flavio Santos Portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
