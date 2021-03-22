import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
        <Html>
          <Head />
          <body>
            <Main />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta name="description" content="Bolby - Portfolio/CV/Resume HTML Template"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <link rel="shortcut icon" type="image/x-icon" href="img/development.svg"/>

            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/all.min.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/slick.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/animate.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="css/style.css" type="text/css" media="all"/>

            <NextScript />

            <script src="js/jquery-1.12.3.min.js"></script>
            <script src="js/jquery.easing.min.js"></script>
            <script src="js/jquery.waypoints.min.js"></script>
            <script src="js/jquery.counterup.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/isotope.pkgd.min.js"></script>
            <script src="js/infinite-scroll.min.js"></script>
            <script src="js/imagesloaded.pkgd.min.js"></script>
            <script src="js/slick.min.js"></script>
            <script src="js/validator.js"></script>
            <script src="js/wow.min.js"></script>
            <script src="js/morphext.min.js"></script>
            <script src="js/parallax.min.js"></script>
            <script src="js/jquery.magnific-popup.min.js"></script>
            <script src="js/custom.js"></script>
          </body>
        </Html>
    );
  }
}

export default MyDocument;
