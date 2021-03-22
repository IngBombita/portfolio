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
                                            <strong>Technologies:</strong> It was developed in PHP + Laravel + Mysql.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">March 2019 - June 2019</span>
                                        <h3 className="title">Internal project in Roooftop</h3>
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
                                        <h3 className="title"><a href="https://axionlift.com.ar">Axion Lift S.A.</a></h3>
                                        <p>
                                            This one was a short but really interesting project for a big lift factory
                                            in San Francisco, Argentina. They needed a solution to keep their
                                            blueprints updated for who make them. <br/>
                                            I had to work with Google Drive API and listen to changes in document to
                                            send
                                            notifications.
                                            <br/>
                                            <strong>Technologies:</strong> PHP + Laravel + Mysql applying Webhooks and a
                                            Google API.
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
                                        <span className="time">December 2019</span>
                                        <h3 className="title">Web Designer</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">2017 - 2013</span>
                                        <h3 className="title">Front-End Developer</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">2013 - 2009</span>
                                        <h3 className="title">Back-End Developer</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
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