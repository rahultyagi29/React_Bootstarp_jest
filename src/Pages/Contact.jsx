import React from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Page_banner from "../Components/Page_banner.jsx"
import Contactmap from "../Components/Contact-map.jsx";
import Heading_2 from "../Components/Heading_2.jsx";
import Heading_3 from "../Components/Heading_3.jsx";
import Paragraph from "../Components/Paragraph.jsx";


function Contact() {
    return (
        <React.Fragment>
            <Header />
            <main id="main">
                <Page_banner Banner_title="Contact Us" Banner_img="assets/img/contect_banner.jpg" />
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="info-box mb-4">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <Heading_3 h3="Our Address" />
                                    <Paragraph P="C-133, Third Floor, Industrial Area, Phase-8, SAS Nagar Mohali- 160072" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="info-box  mb-4">
                                    <i className="bi bi-envelope-fill"></i>
                                    <Heading_3 h3="Email Us" />
                                    <Paragraph P="info@rackron.com" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="info-box  mb-4">
                                    <i className="bi bi-telephone-fill"></i>
                                    <Heading_3 h3="Call Us" />
                                    <Paragraph P="+91-172-4005931" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 ">
                                <Contactmap />
                            </div>
                            <div className="col-lg-6">
                                <form method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"> <button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </React.Fragment>
    );
}


export default Contact;