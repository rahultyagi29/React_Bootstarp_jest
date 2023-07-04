import React from "react";
import Header from "../Components/Header.jsx";
import Page_banner from "../Components/Page_banner.jsx";
import Paragraph from '../Components/Paragraph.jsx'
import Heading_1 from '../Components/Heading_1.jsx';
import Heading_2 from '../Components/Heading_2.jsx';
import Heading_3 from '../Components/Heading_3.jsx';
import Heading_4 from '../Components/Heading_4.jsx';
import Link from "../Components/Link.jsx";
import Image from "../Components/Image.jsx";
import Footer from "../Components/Footer.jsx";

function Webdevelopment() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/Web_banner.jpg" Banner_title="Web Development" />
      <main id="main">

        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="Web Development" />
              <Heading_4 className="lh-base" h4="At Rackron, we are dedicated to providing timely support for urgent tasks and projects. Our commitment to delivering and maintaining high-quality services remains unwavering, ensuring consistent excellence in every endeavor we undertake." />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/web_development.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="Websites Development" />
                <Paragraph P="RACKRON prides itself in successfully creating portals, websites, web applications as well as widgets and plugins for some of the top B2B and B2C companies. Whilst there is no dearth of web development services providers in today’s times, our USP lies in the custom pre-development process. We partner with our clients to provide the best suited solutions for their business. Your technical teams put forth the expectations and our seasoned analysts take it from there." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="WHAT WE DO?" />
              <Paragraph P="OUR SERVICES ARE DELIVERED BY OUR TEAM WITH YEARS OF EXPERIENCE ARE PASSIONATE ABOUT DEVELOPING BUSINESS." />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-circle-square"></i></div>
                  <h4><Link href="" Link_text="LAMP Development" /></h4>
                  <Paragraph P="Our talented programmers live up to mark all your LAMP (Linux, Apache, MySql,PHP) web development requirements including website development, corporate website development, etc. We make complete use of this open source scripting language to create lively web pages.Our experts follow proper documentation for every code and try to keep the codes simple as it proves to be time-saving." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-exclude"></i></div>
                  <h4><Link href="" Link_text="ReactJs & HTML5 Development" /></h4>
                  <Paragraph P="We have the expertise to design and develop cross platform compatible rich internet applications. Our team works closely with our customers to understand the requirements and then define a user interface which is rich in navigation, visualization and interaction yet simple in terms of layout and usability." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-file-earmark-check-fill"></i></div>
                  <h4><Link href="" Link_text="MERN Development" /></h4>
                  <Paragraph P="Rackron is a MERN (MongoDB, ExpressJs, ReactJs, NodeJs) development company, that run deep in MERN technologies and provides premium solutions to all clients. We have tremendous experience in developing, Websites, VOIP systems and plugins, Set Top box plugins, Enigma OS plugins, hardware integration, backend web services and API, and much more." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-cart-check-fill"></i></div>
                  <h4><Link href="" Link_text="eCommerce Solutions Development" /></h4>
                  <Paragraph P="With more and more businesses going online, the e-commerce marketplace has become highly competitive. A standard off-the-shelf solution does not give the flexibility you require to enhance conversions and drive profit. Experienced RACKRON e-commerce design specialists and developers can create a custom e-commerce solution that works just right for your customers and maximizes conversions." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-patch-check-fill"></i></div>
                  <h4><Link href="" Link_text="Framework" /></h4>
                  <Paragraph P="Framework becomes intimately involved in the management and control of each property as we believe important information is often lost due to the finer details not being understood or acted upon. In addition, our employees and senior management regularly visit all properties to ensure that the management and administration of every site is handled with equal attention." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-file-earmark-zip"></i></div>
                  <h4><Link href="" Link_text="Shell Scripting" /></h4>
                  <Paragraph P="Like other UNIX operating systems and Linux, the IBM AIX operating system has several powerful tools that arm systems administrators, developers, and users to tackle day-to-day tasks and to simplify their or their customers’ business and life." />
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

export default Webdevelopment;