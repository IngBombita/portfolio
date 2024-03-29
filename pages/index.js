import React from "react";
import Head from "next/head";
import About from "../views/sections/about";
import Experience from "../views/sections/experience";
import Contact from "../views/sections/contact";
import HomeSection from "../views/sections/homeSection";

export default class Home extends React.Component {
    componentDidMount() {
        if (!process.browser) return;
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", "G-RG7ZEQJW9Z");
    }

    render() {
        return (
            <>
                <Head>
                    <title>Eddie's Portfolio</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                </Head>
                <div id="preloader">
                    <div className="outer">
                        <div className="infinityChrome">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="infinity">
                            <div>
                                <span></span>
                            </div>
                            <div>
                                <span></span>
                            </div>
                            <div>
                                <span></span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo-outer">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                                    <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                                   result="goo"/>
                                    <feBlend in="SourceGraphic" in2="goo"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <header className="mobile-header-1">
                    <div className="container">
                        <div className="menu-icon d-inline-flex mr-4">
                            <button>
                                <span></span>
                            </button>
                        </div>

                        <div className="site-logo">
                            <a href="index.html">
                                <img src="img/development.svg" alt="Bolby" style={{'height': "50px"}}/>
                            </a>
                        </div>
                    </div>
                </header>
                <header className="desktop-header-1 d-flex align-items-start flex-column scrollspy">
                    <div className="site-logo">
                        <a href="index.html">
                            <img src="img/development.svg" alt="Bolby" style={{'width': '200px'}}/>
                        </a>
                    </div>
                    <nav>
                        <ul className="vertical-menu">
                            <li className="active"><a href="#home"><i className="icon-home"/>Home</a></li>
                            <li><a href="#about"><i className="icon-user-following"></i>About</a></li>
                            <li><a href="#experience"><i className="icon-graduation"></i>Experience</a></li>
                            <li><a href="#contact"><i className="icon-bubbles"></i>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <span className="copyright">© 2020 Bolby Template.</span>
                    </div>
                </header>

                <main className="content">
                    <HomeSection/>
                    <About/>
                    <Experience/>
                    <Contact/>
                    <div className="spacer" data-height="96"></div>
                </main>
            </>
        );
    }
}
