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

function Creative_design() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/creative_design_banner.jpg" Banner_title="Creative Design" />
      <main id="main">


        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="Creative Design" />
              <Heading_4 className="lh-base" h4="Rackron is a dynamic full-service creative designs company, specializing in crafting visually stunning websites, captivating logo and landing pages, engaging mobile apps, and impactful seller banner ads. With our expertise and artistic flair, we bring your ideas to life, leaving a lasting impression on your audience. " />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/creative_design_img.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="Interactive Design" />
                <Paragraph P="RACKRON is a full service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps and seller banner ads. When it comes to creative designing, our aim is to deliver services that are well aligned with your business objectives and brand messaging. We are highly passionate about our creative designing services and strive for innovation and uniqueness in whatever we deliver. It is our utmost priority to engage with our clients and develop designs that are quick to appeal and captivate." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR INTERACTIVE DESIGN SERVICES" />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-file-image-fill"></i></div>
                  <h4><Link href="" Link_text="Website Design" /></h4>
                  <Paragraph P="Every business is unique – whether you need an innovative and interactive website or prefer a formal, traditional approach – we have experience that speaks for itself. Our USP lies in providing design mocks, wireframes, etc. until we ensure definitive client satisfaction. We also take customer feedback at every stage to design scalable websites optimized for the best desktop and mobile experiences whilst being easy to maintain." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-phone-fill"></i></div>
                  <h4><Link href="" Link_text="Mobile APP Design" /></h4>
                  <Paragraph P="In the “mobile first” world of today, it is increasingly important to create mobile app designs that engage, delight and retain users by providing a holistic, intuitive and easy to use interface. We design mobile apps for a remarkable user experience and do our best to ensure the app we develop for you is one of the most sought after in the targeted industry and has multiple downloads." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-palette-fill"></i></div>
                  <h4><Link href="" Link_text="LOGO & Landing Page Design" /></h4>
                  <Paragraph P="Logo & Landing pages require strategic design that is targeted at providing all important information at one glance. Instant user engagement can also be achieved through an immensely captivating design. We have managed to do so successfully for several of our clients and continue to do so. We can create landing page designs with relevant content, impactful calls to action and highly user friendly layout customized for lead generation and sign-ups" />
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

export default Creative_design;