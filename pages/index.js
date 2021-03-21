import React from 'react';
import Head from 'next/head';
import { Header } from '../views/sections/header';
import { Navbar } from '../views/sections/navbar';
import { About } from '../views/sections/about';
import { Services } from '../views/sections/services';
import { Products } from '../views/sections/products';
import { Contact } from '../views/sections/contact';

export default class Home extends React.Component {

  componentDidMount(){
    if (!process.browser) return;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'UA-167230578-1');
  }

  render () {
    return (
      <>
        <Head>
          <title>Fika - Excelencia en su casa</title>
        </ Head>
        <Navbar />
        <Header />
        <Services />
        <Products />
        <About />
        <Contact />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167230578-1"></script>
      </>
    );
  }
}
