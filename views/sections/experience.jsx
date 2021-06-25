import * as React from "react";

export default class Experience extends React.Component {
    render() {
        return (
            <section id="experience">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">Experience</h2>
                    <div className="spacer" data-height="60"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                                <div className="timeline-container wow fadeInUp">
                                    <div className="content">
                                        <span className="time">January 2021 - Present</span>
                                        <h3 className="title">Internal project at Roooftop</h3>
                                        <p>
                                            Currently at Rooftop I have been working on creating another recruitment
                                            tool. We are developing a very first alpha version with bounded behavior. It
                                            is composed of three parts: an extension for Google Chrome and two
                                            appplications where in both we are using Vue.js as Frontend technology. In
                                            one Vue.js is used as SPA, and the other with isolated componets. PHP is
                                            used as Backend for both.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + MySQL + Beanstalkd. Blade and
                                            Vue
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">June 2020 - January 2021</span>
                                        <h3 className="title">Teen Hire</h3>
                                        <p>
                                            The most ambitious project I have done so far. An automatic recruitment tool
                                            for companies. It analyzes thousands of profiles and gives you the best ten
                                            candidates per day according to the company's stack and needs. I really
                                            enjoyed taking part in the first steps of Teen.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + MySQL + Redis + Beanstalkd.
                                            <br/>This project helped me to understand lots of concepts, like managing
                                            heavy background jobs, scrapping tons of data from different sources or the
                                            OODA loop in business data. We were able to research and implement some
                                            amazing technologies like Neo4j and Elasticsearch's stack.
                                        </p>
                                    </div>
                                </div>

                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">February 2020 - June 2020</span>
                                        <h3 className="title">Friscop</h3>
                                        <p>
                                            A landing page and a WordPress like system. It is a multi-tenant landing
                                            system for a marketing company, which inspires to become a landing pages
                                            provider on the international level.
                                            <br/>
                                            <strong>Technologies:</strong>
                                            PHP + Laravel + Doctrine + MySQL + Redis. <br/>React.js + Next.js.
                                        </p>
                                    </div>
                                </div>

                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">

                                <span className="line"></span>

                                <div className="timeline-container wow fadeInUp">
                                    <div className="content">
                                        <span className="time">December 2019 - February 2020</span>
                                        <h3 className="title"><a href="https://www.unileverfoodsolutions.com.ar/"
                                                                 target={'_blank'}>Unilever
                                            Food Solutions</a></h3>
                                        <p>
                                            It was a "e-commerce" like system, part of a write-off management, when a
                                            project couldn't be sold in
                                            the traditional way on the market. I developed the API of the app that in
                                            real time provided the
                                            information to the second hand buyers about the products they could bid on.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Redis + MySQL.
                                        </p>
                                    </div>
                                </div>
                                <span className="line"></span>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">July 2019 - October 2019</span>
                                        <h3 className="title"><a href="https://axionlift.com/" target={'_blank'}>Axion
                                            Lift </a></h3>
                                        <p>
                                            This one was a short but really interesting project for a big aerial lift
                                            factory in San Francisco, Argentina. They needed a solution to keep their
                                            blueprints updated for who made them.
                                            I had to work with Google Drive API and update the changes of documents to
                                            send notifications to the suppliers of the company.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Redis + MySQL.
                                        </p>
                                    </div>
                                </div>

                                <span className="line"></span>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">Marzo 2019 - Julio 2019</span>
                                        <h3 className="title"><a href="https://axionlift.com/" target={'_blank'}>Internal
                                            project at Rooftop</a></h3>
                                        <p>
                                            I helped to develop a chatbot to enable sending multiple messages at once to
                                            different groups by just writing the message once area. It was created for
                                            Rooftop Dev Labs.
                                            <br/>
                                            <strong>Technologies:</strong> Node.js + Typescript
                                        </p>
                                    </div>
                                </div>
                                <span className="line"></span>

                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="content">
                                        <span className="time">November 2018 - Febrary 2019</span>
                                        <h3 className="title">Jugaad</h3>
                                        <p>
                                            My trainee project, a simple CRUD to
                                            help a recruitment startup to store and track the candidates.
                                            <br/>
                                            <strong>Technologies:</strong>
                                            PHP + Laravel + Doctrine + MySQL + Redis. <br/>React.js + Next.js.
                                        </p>
                                    </div>
                                </div>

                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
