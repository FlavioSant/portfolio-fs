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
          <meta
            name="keywords"
            content="Flavio Santos, porfolio, Portfolio Flavio Santos, flavio santos dev, developer, web developer, react, nextjs, CSS3"
          />
          <meta name="title" content="Flávio Santos Dev" />
          <meta
            name="description"
            content="Contrate um desenvolvedor web profissional. Criando layouts modernos, soluções interativas e manutenção de sites."
          />

          <meta property="og:site_name" content="Portfolio Flávio Santos" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://www.flaviosantos.dev/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Flávio Santos Dev" />
          <meta
            property="og:description"
            content="Contrate um desenvolvedor web profissional. Criando layouts modernos, soluções interativas e manutenção de sites."
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="flaviosantos.dev" />
          <meta
            property="twitter:url"
            content="https://www.flaviosantos.dev/"
          />
          <meta name="twitter:title" content="Flávio Santos Dev" />
          <meta
            name="twitter:description"
            content="Contrate um desenvolvedor web profissional. Criando layouts modernos, soluções interativas e manutenção de sites."
          />
          <meta
            name="twitter:image"
            content="https://flaviosantos.dev/_next/image?url=%2Fphoto.jpg&w=384&q=75"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
