import * as React from "react";

export default class Services extends React.Component{
    render() {
        return (
            <section id="services">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">Services</h2>
                    <div className="spacer" data-height="60"></div>
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                className="service-box rounded data-background padding-30 text-center text-light shadow-blue"
                                data-color="#6C6CE5">
                                <img src="images/service-1.svg" alt="UI/UX design"/>
                                <h3 className="mb-3 mt-0">UI/UX design</h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                                    commodo
                                    ligula eget.</p>
                            </div>
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="service-box rounded data-background padding-30 text-center shadow-yellow"
                                data-color="#F9D74C">
                                <img src="images/service-2.svg" alt="UI/UX design"/>
                                <h3 className="mb-3 mt-0">Web Development</h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                                    commodo
                                    ligula eget.</p>
                            </div>
                            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="service-box rounded data-background padding-30 text-center text-light shadow-pink"
                                data-color="#F97B8B">
                                <img src="images/service-3.svg" alt="UI/UX design"/>
                                <h3 className="mb-3 mt-0">Photography</h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                                    commodo
                                    ligula eget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <p className="mb-0">Looking for a custom job? <a href="#contact">Click here</a> to contact
                            me! 👋
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}