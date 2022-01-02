import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icon-512x512.png"
          />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#e43e44" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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

export default MyDocument;
