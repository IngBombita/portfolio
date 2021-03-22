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
                                        <span className="time">November 2018 - March 2019</span>
                                        <h3 className="title">Jugaad</h3>
                                        <p>My trainee project, a simple tool to help a recruitment startup to store and
                                            track its candidates. This was my very first experience working in Rooftop
                                            Dev Labs.
                                            <br/>
                                            <strong>Technologies:</strong> It was developed in PHP + Laravel + MySQL.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">March 2019 - June 2019</span>
                                        <h3 className="title">Internal project at Roooftop</h3>
                                        <p>
                                            I helped development an experimental tool to an area of Rooftop Dev Labs.
                                            <br/>
                                            <strong>Technologies:</strong> Node.js applying Websockets and consuming a
                                            external HTTP API.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">June 2019 - December 2019</span>
                                        <h3 className="title"><a href="https://axionlift.com.ar">Axion Lift S.A.</a>
                                        </h3>
                                        <p>
                                            This one was a short but really interesting project for a big lift factory
                                            in San Francisco, Argentina. They needed a solution to keep their
                                            blueprints updated for who make them. <br/>
                                            I had to work with Google Drive API and listen to changes in document to
                                            send notifications.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Beanstalkd + MySQL applying
                                            Webhooks and a Google API.
                                        </p>
                                    </div>
                                </div>

                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="content">
                                        <span className="time">December 2019 - February 2020</span>
                                        <h3 className="title">Unilever</h3>
                                        <p>
                                            Unfortunately this project was cancelled before finished. It was a
                                            "e-commerce" like system, part of a write-off management. I developed only
                                            the
                                            API that an app used it.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Redis + MySQL.
                                        </p>
                                    </div>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">

                                <div className="timeline-container wow fadeInUp">
                                    <div className="content">
                                        <span className="time">February 2020 - June 2020</span>
                                        <h3 className="title"><a href="https://friscop.com/">Friscop</a></h3>
                                        <p>
                                            A landing and a small project wordpress like system. I didnt like the result
                                            of this system actually. If I had the opportunity I would do it again with
                                            big changes. It was a multi-tenant landing system for a marketing company.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Doctrine + MySQL + Redis.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">June 2020 - January 2021</span>
                                        <h3 className="title"><a href="https://teenhire.co/">Teen Hire</a></h3>
                                        <p>
                                            The most ambitious project I had ever done. An automatic recruitment tool
                                            for companies. It analyze thousand of profiles and gives you the best ten
                                            candidates per day according to the company stack and needs. I really
                                            enjoyed taking part on the first steps of Teen.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + MySQL + Redis + Beanstalkd.
                                            <br/>
                                            This project helped me to understand lot of concepts, like managing heavy
                                            background jobs, scrap tons of data from different sources or the OODA cycle
                                            in business data. Unfortunately we couldn't put into practice most of the
                                            ideas that we wanted because the time wasn't enough, but we could try some
                                            amazing technologies like Neo4j and Elasticsearch's stack.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">January 2021 - Present</span>
                                        <h3 className="title">Internal project at Roooftop</h3>
                                        <p>
                                            My current project at Rooftop is another recruitment tool, nowadays we are
                                            developing a very first alpha version with bounded behavior.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + MySQL + Beanstalkd.
                                            <br/>
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