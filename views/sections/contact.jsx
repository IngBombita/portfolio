import * as React from "react";

export default class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        this.contact = this.contact.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async contact() {
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
    }

    render() {
        return (
            <section id="contact">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">Get In Touch</h2>
                    <div className="spacer" data-height="60"/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info">
                                <h3 className="wow fadeInUp">Let's talk about everything!</h3>
                                <p className="wow fadeInUp">Don't like forms? Send me an <a
                                    href="mailto:name@example.com">email</a>. 👋</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <from className="contact-form mt-6">
                                <div className="messages"></div>
                                <div className="row">
                                    <div className="column col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name"
                                                   value={this.state.name} onChange={this.handleChange}
                                                   placeholder="Your name" required="required"
                                                   data-error="Name is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="column col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" value={this.state.email}
                                                   onChange={this.handleChange}
                                                   name="email"
                                                   placeholder="Email address" required="required"
                                                   data-error="Email is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="column col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.subject}
                                                   onChange={this.handleChange}
                                                   name="subject" placeholder="Subject" required="required"
                                                   data-error="Subject is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="column col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" value={this.state.message}
                                                      onChange={this.handleChange} className="form-control"
                                                      rows="5" placeholder="Message" required="required"
                                                      data-error="Message is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-default" onClick={this.contact}>Send Message
                                </button>
                            </from>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}