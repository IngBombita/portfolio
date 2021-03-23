import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="img/favicon/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="img/favicon/manifest.json"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                    <meta name="description" content="Eduardo Culasso portfolio. PHP Backend developer."/>
                </Head>
                <body>

                <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/all.min.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/slick.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/animate.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/style.css" type="text/css" media="all"/>

                <Main/>
                <NextScript/>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RG7ZEQJW9Z"/>
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
