import React from 'react';


function Footer() {
    return (

            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Portfolio</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Our Products</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Careers</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Creative Designs</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Mobile Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Digital Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">Quality Testing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="">E-commerce Solution</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>C-133, Third Floor,<br /> Industrial Area, Phase-8,<br /> SAS Nagar, Mohali - 160072 <br /><br />
                                    <strong>Phone:</strong> +91-172-4005931<br />
                                    <strong>Email:</strong> info@rackron.com<br />
                                </p>

                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>ABOUT RACKRON</h3>
                                <p>We are a full service development and design company located in India. Our team of talented designers and
                                    developers has been providing custom design and application development to clients in USA, UK, Australia
                                    and around the world. </p>
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
