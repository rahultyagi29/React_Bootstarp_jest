import React from "react";
import Header from "../Components/Header.jsx";
import Page_banner from "../Components/Page_banner.jsx";
import Paragraph from '../Components/Paragraph.jsx'
import Heading_2 from '../Components/Heading_2.jsx';
import Heading_3 from '../Components/Heading_3.jsx';
import Heading_4 from '../Components/Heading_4.jsx';
import Link from "../Components/Link.jsx";
import Image from "../Components/Image.jsx";
import Footer from "../Components/Footer.jsx";

function Quality_testing() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/testing_banner.jpg" Banner_title="Quality Testing" />
      <main id="main">


        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="Digital Marketing" />
              <Heading_4 className="lh-base" h4="Quality Testing holds immense significance, yet it often becomes a laborious undertaking for many organizations. However, at Rackron, we alleviate this burden by streamlining and simplifying the testing process. Our meticulous approach, comprehensive methodologies, and cutting-edge tools ensure that quality remains uncompromised, allowing businesses to focus on their core objectives. " />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/testing_img.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="Quality Analysis & Testing" />
                <Paragraph P="The importance of quality testing cannot be undermined but it often ends up being a rather tedious process for most organizations. This is where we help our clients by ensuring a rigorous quality testing process comprising of manual testing services, automated testing services, performance testing services and security testing services. Ours a holistic quality testing service that leaves no room for error and ensures the highest quality for your web and mobile applications." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR QA/QC SERVICES" />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-person-check-fill"></i></div>
                  <h4><Link href="" Link_text="Manual Testing" /></h4>
                  <Paragraph P="No matter how skilled your developers are, errors may still be prevalent. That is where our manual testing specialists come in. We have decades of collective experience in different areas of manual testing including use case-driven scripted approaches, freeform exploratory testing, traditional desktop platforms, mobile testing, web accessibility and system interoperability."/>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-terminal-fill"></i></div>
                  <h4><Link href="" Link_text="Automated Testing" /></h4>
                  <Paragraph P="As enterprises rush to go live in shortest possible time or look to optimize budgets, effective software testing ends up in a casualty.RACKRON provides complete suite of test automation solutions ranging from assessment and consulting to execution and innovation. Our automated testing services help clients reduce testing cycle time provide higher productivity and drive greater predictability to help minimize time to market." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-symmetry-vertical"></i></div>
                  <h4><Link href="" Link_text="Performance Testing" /></h4>
                  <Paragraph P="Performance testing’s impact on business revenue, credibility of enterprise and customer satisfaction makes it a critical part of application testing services. While traditional performance testing approaches are reactive in nature, RACKRON performance testing services are a fusion of testing and engineering methodologies to help businesses transform new and existing applications." />
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="SEE WHAT PEOPLE SAY ABOUT US" />
            </div>
            <div className="testimonial_quote">
              <blockquote>
                <Paragraph P="Rackron went above and beyond what they was supposed to do. Everything was done properly and on time, and turned out perfectly. Will definitely hire again in the future, and highly recommend him." />
              </blockquote>
              <div className="author">
                <h5><span>Bryce Papenbrook (USA)</span>
                  <Image src="assets/img/user_icon.png" className="img-fluid" alt="User Icon" />
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default Quality_testing;