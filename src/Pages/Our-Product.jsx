import React from "react";
import Header from "../Components/Header.jsx";
import Page_banner from "../Components/Page_banner.jsx";
import Heading_2 from '../Components/Heading_2.jsx';
import Paragraph from '../Components/Paragraph.jsx';
import Image from "../Components/Image.jsx";
import Footer from "../Components/Footer.jsx";
import Our_Products_card from "../Components/Our_product_card.jsx";

function Our_Products() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/product_banner.jpg" Banner_title="Our Products" />

      <section id="services" className="services product">
        <div className="container">
          <div className="row">
            <Our_Products_card product_img="assets/img/product_img1.jpg" product_title="Checktolet.com" product_info="Checktolet.com is India’s fastest growing rent space website that helps people to search space like Rooms, PG, Flats, Office, and Shops for rent. Checktolet.com helps people to search rental space without cost." product_link="http://checktolet.com/" />
            <Our_Products_card product_img="assets/img/product_img2.jpg" product_title="6 Months Training" product_info="Rackron offers various PHP-Traning programs. Rackron offers 6 Months training programs to make IT students perfect. Rackron is a Company not a Institute. Give experience to work on live project." product_link="http://rackron.com/Contactus" />
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


export default Our_Products;