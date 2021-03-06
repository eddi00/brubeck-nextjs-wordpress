// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Murecho&display=optional"
            rel="stylesheet"
          /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=block"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Murecho:wght@100;200;300;400;500;600;700;800&display=block"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open Sans:wght@300;400;500;600;700;800&display=block"
            rel="stylesheet"
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
