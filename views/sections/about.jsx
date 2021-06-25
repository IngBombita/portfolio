import * as React from "react";

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">About Me</h2>
                    <div className="spacer" data-height="60"></div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center text-md-left">

                                <img src="img/avatar300x300.jpg" alt="Eddie"/>
                            </div>
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        </div>
                        <div className="col-md-9 triangle-left-md triangle-top-sm">
                            <div className="rounded bg-white shadow-dark padding-30">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>I'm Edu, a 23 year-old web developer from Rafaela, Argentina. Apart of
                                            coding, my passions are riding horses and drinking coffee. I consider myself
                                            an energetic, proactive and rational person.
                                        </p>
                                        <div className="mt-3">
                                            <a href="/EduCulasso-Resume-EN.pdf" className="btn btn-default"
                                               target='_blank'>Resume</a>
                                            <a href="/EduCulasso-Resume-ES.pdf" className="btn btn-default"
                                               style={{'margin-left': '10px'}}
                                               target='_blank'>Curriculum</a>
                                        </div>
                                        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="skill-item">
                                            <div className="skill-info clearfix">
                                                <h4 className="float-left mb-3 mt-0">Logical Thinking</h4>
                                                <span className="float-right">95%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar data-background" role="progressbar"
                                                     aria-valuemin="0" aria-valuemax="100" aria-valuenow="95"
                                                     data-color="#6C6CE5">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" data-height="20"></div>
                                        <div className="skill-item">
                                            <div className="skill-info clearfix">
                                                <h4 className="float-left mb-3 mt-0">Clean code & good practices</h4>
                                                <span className="float-right">85%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar data-background" role="progressbar"
                                                     aria-valuemin="0" aria-valuemax="100" aria-valuenow="88"
                                                     data-color="#FF4C60">
                                                </div>
                                            </div>
                                            <div className="spacer" data-height="20"></div>
                                        </div>
                                        <div className="skill-item">
                                            <div className="skill-info clearfix">
                                                <h4 className="float-left mb-3 mt-0">Teamwork & Adaptability</h4>
                                                <span className="float-right">80%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar data-background" role="progressbar"
                                                     aria-valuemin="0" aria-valuemax="100" aria-valuenow="95"
                                                     data-color="#FFD15C">
                                                </div>
                                            </div>
                                            <div className="spacer" data-height="20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer" data-height="70"></div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="fact-item">
                                <span className="icon icon-briefcase"></span>
                                <div className="details">
                                    <h3 className="mb-0 mt-0 number"><em className="count">3</em></h3>
                                    <p className="mb-0">years of experience</p>
                                </div>
                            </div>
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="fact-item">
                                <span className="icon icon-chart"></span>
                                <div className="details">
                                    <h3 className="mb-0 mt-0 number"><em className="count">1709</em></h3>
                                    <p className="mb-0">Commis pushed</p>
                                </div>
                            </div>
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="fact-item">
                                <span className="icon icon-cup"></span>
                                <div className="details">
                                    <h3 className="mb-0 mt-0 number"><em className="count">9876</em></h3>
                                    <p className="mb-0">Drunk coffee cups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}