import React from 'react';
import Navbar from './Navbar.jsx';
import Paragraph from './Paragraph.jsx'
import Heading_3 from './Heading_3.jsx';
import Heading_4 from './Heading_4.jsx';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-links">
                            <Heading_4 h4="Useful Links" />
                            <ul>
                                <Navbar menu_icon="" PageLink="" Pagename="Home" />
                                <Navbar menu_icon="" PageLink="" Pagename="About us" />
                                <Navbar menu_icon="" PageLink="" Pagename="Portfolio" />
                                <Navbar menu_icon="" PageLink="" Pagename="Our Products" />
                                <Navbar menu_icon="" PageLink="" Pagename="Careers" />
                                <Navbar menu_icon="" PageLink="" Pagename="Contact Us" />
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <Heading_4 h4="Our Services" />
                            <ul>
                                <Navbar menu_icon="" PageLink="" Pagename="Web Development" />
                                <Navbar menu_icon="" PageLink="" Pagename="Creative Designs" />
                                <Navbar menu_icon="" PageLink="" Pagename="Mobile Development" />
                                <Navbar menu_icon="" PageLink="" Pagename="Digital Marketing" />
                                <Navbar menu_icon="" PageLink="" Pagename="Quality Testing" />
                                <Navbar menu_icon="" PageLink="" Pagename="E-commerce Solution" />
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <Heading_4 h4="Contact Us" />
                            <p>C-133, Third Floor,<br /> Industrial Area, Phase-8,<br /> SAS Nagar, Mohali - 160072 <br /><br />
                                <strong>Phone:</strong> +91-172-4005931<br />
                                <strong>Email:</strong> info@rackron.com<br />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-info">
                            <Heading_3 h3="ABOUT RACKRON" />
                            <Paragraph P="We are a full service development and design company located in India. Our team of talented designers and
                                    developers has been providing custom design and application development to clients in USA, UK, Australia
                                    and around the world." />
                            <div className="social-links mt-3">
                                <a href="" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">© Copyright 2021 | Rackron Technologies Pvt. Ltd. All Rights Reseverd </div>
            </div>
        </footer>
    );
}

export default Footer;
