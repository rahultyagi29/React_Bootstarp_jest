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

function Ecommerce_solution() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/ecommerce_banner.jpg" Banner_title="eCommerce Solution" />
      <main id="main">
        <section className="page_info">
          <div className="container">
            <div class="section-title">
              <Heading_2 h2="eCommerce Solution" />
              <Heading_4 className="lh-base" h4="Rackron is a distinguished global provider of e-commerce services, boasting a proven track record in designing and developing highly prosperous websites and web stores. With our expertise, we empower businesses to captivate their target audience, optimize user experience, and drive substantial growth in the competitive e-commerce landscape." />
            </div>   </div>
        </section>
        {/* About section */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <Image src="assets/img/ecommerce_img.jpg" className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content ">
                <Heading_3 h3="eCommerce Solution" />
                <Paragraph P="Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores. Our e-commerce solutions connect buyers and sellers through B2C and B2B online business channels; integrate back-end applications as well as payment solutions. Our clients benefit from our expertise ranging from strategy through design and implementation based on all the major e-commerce platforms." />
              </div>
            </div>

          </div>
        </section>
        {/* services section start */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <Heading_2 h2="OUR eCOMMERCE SERVICES" />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-file-code-fill"></i></div>
                  <h4><Link href="" Link_text="Custom E-Commerce Solutions" /></h4>
                  <Paragraph P="With more and more businesses going online, the e-commerce marketplace has become highly competitive. A standard off-the-shelf solution does not give the flexibility you require to enhance conversions and drive profit. Experienced RACKRON e-commerce design specialists and developers can create a custom e-commerce solution that works just right for your customers and maximizes conversions."/>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-phone-fill"></i></div>
                  <h4><Link href="" Link_text="Mobile E-Commerce Solutions" /></h4>
                  <Paragraph P="Over the past few years, mobile commerce has emerged as the fastest growing retail channel and is expected to grow even bigger. RACKRON realizes the potential of the ubiquitous mobile channel, and offers rich mobile applications along with end-to-end mobile commerce solutions for merchants. We assist you to reach global customers, and tap the potential of this powerful channel." />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-bar-chart-fill"></i></div>
                  <h4><Link href="" Link_text="Payment Solutions" /></h4>
                  <Paragraph P="To drive sales across multiple channels, retailers not only need to accept multiple instruments like cash, credit/debit/gift cards, but also offer payment services, such as instant credit, bill me later, etc. RACKRON, with its deep understanding of retail payments, offers wide range of solutions – be it developing a PCI compliant solution or implementing a new payment instrument at POS." />
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

export default Ecommerce_solution;