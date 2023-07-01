import React from "react";
import Header from "../Components/Header.jsx";
import Home_Banner from "../Components/Home_Banner.jsx";
import Paragraph from '../Components/Paragraph.jsx'
import Heading_1 from '../Components/Heading_1.jsx';
import Heading_2 from '../Components/Heading_2.jsx';
import Link from "../Components/Link.jsx";
import Image from "../Components/Image.jsx";
import Stat_card from "../Components/Statistics.jsx";


import Footer from "../Components/Footer.jsx";
import Heading_3 from "../Components/Heading_3.jsx";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Home_Banner title="WE ARE CRAZY CODERS" btn="Our Services" btn2="View Portfolio" />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <Heading_1 h1="We are Rackron" />
            <Paragraph P="We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world." />
            <Link href="" className="btn-read-more" Link_text="Read More" />
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
                  <div className="icon"><i className="bi bi-file-code-fill"></i></div>
                  <h4><Link href="" Link_text="Web Development" /></h4>
                  <Paragraph P="Rackron is always on hand to act immediately with any urgent task or project, ensuring high quality services are delivered and maintained consistently." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-palette-fill"></i></div>
                  <h4><Link href="" Link_text="Creative Designs" /></h4>
                  <Paragraph P="Rackron is a full service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps and seller banner ads." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-phone-fill"></i></div>
                  <h4><Link href="" Link_text="Mobile Development" /></h4>
                  <Paragraph P="Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. The onset of mobile era has changed the way consumers communicate and businesses operate." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-megaphone-fill"></i></div>
                  <h4><Link href="" Link_text="Digital Marketing" /></h4>
                  <Paragraph P="The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-patch-check-fill"></i></div>
                  <h4><Link href="" Link_text="E-commerce Solution" /></h4>
                  <Paragraph P="Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-cart-check-fill"></i></div>
                  <h4><Link href="" Link_text="Quality Testing" /></h4>
                  <Paragraph P="The importance of quality testing cannot be undermined but it often ends up being a rather tedious process for most organizations." />
                  <p><Link className="btn-read-more" Link_text="Read More" /></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Awards Section */}
        <section id="awards" className="awards">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="Top Web Development Company in India" />
              <p>We are a full service development and design company located in India.<br /> Our team of talented designers
                and developers has been providing custom design<br /> and application development to clients in USA, UK,
                Australia and around the world.</p>
              <br />
              <br />
              <br />
              <Heading_3 h3="AWARDS AND ACCOLADES" />
              <div className="award_logo">
                <Image src="assets/img/goodfirm_logo.png" className="img-fluid" alt="Image" />
                <Image src="assets/img/upwork_logo.png" className="img-fluid" alt="Image" />
              </div>
            </div>
          </div>
        </section>
        {/* HAPPY CLIENTS */}
        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR HAPPY CLIENTS" />
              <Paragraph P="WE BELIEVE IN GOING AN EXTRA MILE FOR OUR CLIENTS" />
            </div>
            <div className="clients-slider swiper-container">
              <div className="swiper-wrapper align-items-center d-flex gap-3">
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo1.png" className="img-fluid" alt="Brand Img" /> </div>
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo2.png" className="img-fluid" alt="Brand Img" /> </div>
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo3.png" className="img-fluid" alt="Brand Img" /> </div>
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo4.png" className="img-fluid" alt="Brand Img" /> </div>
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo5.png" className="img-fluid" alt="Brand Img" /> </div>
                <div className="swiper-slide"><Image src="assets/img/clients/client_logo6.png" className="img-fluid" alt="Brand Img" /> </div>
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
        {/* Counts Section */}
        <section id="counts" className="counts mt-3 pt-5">
          <div className="container">
            <div className="row no-gutters">
            <Stat_card icon_class="bi bi-emoji-smile" counter_end="310" card_title="Happy Clients" />
            <Stat_card icon_class="bi bi-journal-richtext" counter_end="656" card_title="Projects Completed" />
            <Stat_card icon_class="bi bi-headset" counter_end="15" card_title="Hours Of Support" />
            <Stat_card icon_class="bi bi-people" counter_end="480" card_title="Hard Workers" />
            </div>
          </div>
        </section>



      </main>



      <Footer />
    </React.Fragment>
  );
}

export default Home;