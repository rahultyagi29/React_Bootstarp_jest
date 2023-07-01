import React from "react";
import Header from "../Components/Header.jsx";
import Page_banner from "../Components/Page_banner.jsx";
import Stat_card from "../Components/Statistics.jsx"
import Heading_2 from '../Components/Heading_2.jsx';
import Heading_3 from '../Components/Heading_3.jsx';
import Paragraph from '../Components/Paragraph.jsx'
import Link from "../Components/Link.jsx";
import Image from "../Components/Image.jsx";
import Why_choose_card from "../Components/Why_choose_us_card.jsx";
import Footer from "../Components/Footer.jsx";

function About() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/about_banner.jpg" Banner_title="About Us" />
      {/* About us section */}
      <section id="about" className="about">
        <div className="container">

          <div className="row">
            <div className="col-lg-6">
              <Image src="assets/img/about.jpg" className="img-fluid" alt="Image" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <Paragraph P="We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world." />
              <Heading_3 h3="Creating a More Engaging Business Website" />
              <Paragraph P="Business websites have to have high quality content to be successful, but when you make the effort to design a visually engaging site, you’ll make that content more enjoyable, capture new visitors’ attention, and keep them around longer.We develop long-term, successful business partnerships. When we complete your digital project, our desired result is that you naturally consider us to be part of your team." />
            </div>
          </div>

        </div>
      </section>
      {/* What we do section */}
      <section id="what-we-do" className="what-we-do services">
        <div className="container">

          <div className="section-title">
            <Heading_2 h2="WHAT WE DO?" />
            <Paragraph P="POWERFUL WEBSITES THAT LOOK BEAUTIFUL." />
          </div>
          <div className="row">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-lightbulb-fill"></i></div>
                <h4> <Link href="" Link_text="Innovative" /> </h4>
                <Paragraph P="We aim to build long term relationships with our clients even while fulfilling their software development needs." />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-file-earmark-easel-fill"></i></div>
                <h4> <Link href="" Link_text="Experimental" /> </h4>
                <Paragraph P="We use an open source Moodle LMS for developing backend and Joomla or WP for front end designing." />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-check-circle-fill"></i></div>
                <h4> <Link href="" Link_text="Perfect" /> </h4>
                <Paragraph P="Rackron is committed to delivering high quality products to clients helping them in this constantly changing and challenging biz world." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section id="why-choose" class="why-choose">
        <div class="container">

          <div class="section-title">
            <Heading_2 h2="Why choose Us" />
            <Paragraph P="With so many agencies out there, here’s why our offering stands head and shoulders above the competition:" />
          </div>
          <div class="row">
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Full-service digital Company" text="We look at all aspects of your web presence, so that we can deliver both short-term and long-term solutions." />
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Results" text="We excel at delivering results and pride ourselves on our successful track record. Check out our case studies." />
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Value" text="Total service transparency and affordable rates. We provide a India company service at a regional rate." />
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Small Company service" text="Big enough to get the job done and small enough to care. We are passionate about your business success!" />
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Hertfordshire-based team" text="Communication is paramount to the success of any project. We are always available to meet in person." />
            <Why_choose_card icon_class="bi bi-check-circle-fill" title="Easy to work with" text="We’re professional, enthusiastic and great fun to work with!" />
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



      <Footer />
    </React.Fragment>
  );
}


export default About;