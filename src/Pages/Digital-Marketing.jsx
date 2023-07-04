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

function Digital_marketing() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/digital_marketing_banner.jpg" Banner_title="Digital Marketing" />
      <main id="main">


        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="Digital Marketing" />
              <Heading_4 className="lh-base" h4="In today's fiercely competitive online landscape, success on the internet demands meticulous strategizing and planning. Businesses must dedicate significant effort to navigate this digital realm successfully. At Rackron, we provide the expertise and guidance necessary to establish a strong online presence and ensure sustainable growth in the ever-evolving virtual world." />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/digital_marketing_img.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="Digital Marketing" />
                <Paragraph P="The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning. We bring you the best of digital marketing services that are not only custom made but are also well within your budget – no matter how big or small your organization is." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR DIGITAL MARKETING SERVICES" />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-rss-fill"></i></div>
                  <h4><Link href="" Link_text="Search Engine Optimization (SEO)" /></h4>
                  <Paragraph P="SEO is a long term investment that delivers recurring benefits. Whether yours is a small, medium or large business – we can craft custom SEO strategies for you to benefit from. We have been working with large global accounts streamlining their SEO operations increasing natural traffic and reducing internal investment."/>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-phone-fill"></i></div>
                  <h4><Link href="" Link_text="Social Media Marketing" /></h4>
                  <Paragraph P="Today, brands are pressed to be highly active and involved as the world becomes increasingly social. This is one of the major challenges for any business that aims to leverage the benefits of social media marketing. We make this easier for you by identifying the hot topics around your brand, detecting sentiments, monitoring constantly, and measuring participation and hence establish thought leadership to strategize and engage for the success of your brand through social media." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-graph-up"></i></div>
                  <h4><Link href="" Link_text="Digital Analytics" /></h4>
                  <Paragraph P="With important statistics at your hand, you can easily evaluate and analyze the performance of your website. It is exactly where digital analytics come handy. RACKRON web analytics services aim to give you important insights in the form of data (traffic, visitors) so that you can tweak your strategy based on your visitors, interest and engagement with the website." />
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

export default Digital_marketing;