import * as React from "react";

export default class Experience extends React.Component{
    render(){
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
                                        <span className="time">2019 - Present</span>
                                        <h3 className="title">Academic Degree</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="content">
                                        <span className="time">2017 - 2013</span>
                                        <h3 className="title">Bachelor’s Degree</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
                                    </div>
                                </div>
                                <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="content">
                                        <span className="time">2013 - 2009</span>
                                        <h3 className="title">Honours Degree</h3>
                                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                                            perfecto.</p>
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
                                        <span className="time">2019 - Present</span>
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