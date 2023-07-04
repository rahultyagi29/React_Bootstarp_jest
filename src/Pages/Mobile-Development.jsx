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

function Mobile_Development() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/Web_banner.jpg" Banner_title="Mobile Development" />
      <main id="main">

        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="Mobile Development" />
              <Heading_4 className="lh-base" h4="Rackron revolutionizes businesses with comprehensive end-to-end mobile solutions spanning iOS, Android, and Windows platforms. As the mobile era reshapes communication and operations, we empower businesses to adapt and thrive. Our expertise enables seamless integration of mobile technology, empowering businesses to engage consumers and achieve unprecedented success in today's dynamic landscape. " />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/mobile_development_img.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="Mobile Development" />
                <Paragraph P="The onset of mobile era has changed the way consumers communicate and businesses operate. Leading brands around the world have lately realized the importance of this new channel and seek to use it to reach current and new customers. Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. We are well versed with different mobile technologies and have developed award-winning B2B and B2C mobile applications for enterprises looking to automate mission-critical business processes." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR MOBILE DEVELOPMENT SERVICES" />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-ui-radios-grid"></i></div>
                  <h4><Link href="" Link_text="iOS APP Development" /></h4>
                  <Paragraph P="Rackron has been into iOS app development for iPhone and iPad ever since Apple made the development kit available to mobile developers. Our team of skilled and experienced mobile developers enables our clients to transform their best ideas into functional, feature-rich iPhone / iPad solutions. Ours is a promise to create an exclusive product that will strengthen your brand and cater to tastes of your end users." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-google"></i></div>
                  <h4><Link href="" Link_text="Android APP Development" /></h4>
                  <Paragraph P="The growing number of Android users all over the world testifies Android mobile platform’s rising popularity. Android app development is one of our core competencies. We have designed and developed high-quality Android smartphone and tablet applications for some of the world’s leading companies. We leverage our iterative, agile process to develop scalable and highly robust android mobile applications." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-window"></i></div>
                  <h4><Link href="" Link_text="Window APP Development" /></h4>
                  <Paragraph P="We have a strong track record in one of the latest mobile platforms – Windows Mobile. Our proficient team of mobile developers can create intuitive, reliable and well designed apps for your organization on the Windows operating system." />
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

export default Mobile_Development;