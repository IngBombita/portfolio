import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicon/android-chrome-192x192.png"/>
          <link rel="icon" type="image/png" sizes="512x512"  href="/img/favicon/android-chrome-512x512.png"/>
          <meta name="robots" content="index, follow"/>
          <meta charSet="utf-8" />
          <meta name="google-site-verification" content="_wdjhbofTnhkHs3LHcDkSkEDXJ_NXG5T1c8pezu1Az8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="title" content="Fika Coffee & Bread - San Francisco - Cordoba"/>
          <meta name="description" content="En Fika nos apasionan las tradiciones y la calidad de los productos para el regocijo de nuestros clientes.
            Tanto el café como el pan han sufrido alteraciones en su proceso a través del tiempo,
            para hacerlos más industriales, económicos y a veces, arruinándolos por completo.
            Nosotros desde lo artesanal queremos combatir esta tendencia." />
          <meta name="author" content="Fika Excelencia" />
	  <neta name="keyworda" content="Coffee & Bread, San Francisco, Cordoba, Argentina, Delivery, Cafe, Cafe de especialidad, Pan de masa madre, Pan casero" />
          <meta property="og:title" content="Fika Coffee & Bread - Excelencia en su casa" />
          <meta property="og:type" content="coffee.shop.barista" />
          <meta property="og:url" content="https://fikaexcelencia.com.ar" />
          <meta property="og:image" content="https://fikaexcelencia.com.ar/img/cafe-medialuna.jpg" />
          <link href="css/styles.css?version=3" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
          <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
          <script src="js/lazysizes.min.js" async></script>
          <script src="js/scripts.js?version=3"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
