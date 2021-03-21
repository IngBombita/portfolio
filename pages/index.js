import React from "react";
import Head from "next/head";

export default class Home extends React.Component {
  componentDidMount() {
    if (!process.browser) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-167230578-1");
  }

  render() {
    return (
      <>
        <Head>
          <title>Fika - Excelencia en su casa</title>
        </Head>
      </>
    );
  }
}
