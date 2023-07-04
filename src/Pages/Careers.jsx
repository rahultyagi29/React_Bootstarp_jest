import React from "react";
import Header from "../Components/Header.jsx";
import Page_banner from "../Components/Page_banner.jsx";
import Heading_2 from '../Components/Heading_2.jsx';
import Paragraph from '../Components/Paragraph.jsx';
import Unordered_list from "../Components/Unordered_list.jsx";
import Image from "../Components/Image.jsx";
import Link from "../Components/Link.jsx";
import Footer from "../Components/Footer.jsx";


function Careers() {
  return (
    <React.Fragment>
      <Header />
      <Page_banner Banner_img="assets/img/career_banner.jpg" Banner_title="Career at Rackron" />
      <section id="careers" className="services careers">
        <div className="container">
          <div className="section-title">
            <Heading_2 h2="REQUIREMENTS" />
            <Paragraph P="We are looking for individuals who want to take responsibility, deliver results, &amp; make a difference. Think you’re a good match?" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <h4> <Link href="#" Link_text="LAMP Stack Developers" /></h4>
                <ul>
                  <Unordered_list li="– CMS: Drupal, Magento, Joomla, WordPress (any 2 of them)" />
                  <Unordered_list li="– Framework: Codiegnitor/ Cake php/ Laravel/ Yii/ Smarty (any 1 of them)" />
                  <Unordered_list li="– Javascript, HTML5, CSS3" />
                  <Unordered_list li="– SQL Server / MYSQL" />
                  <Unordered_list li="– You will be in charge of web sites front end and back-end development." />
                  <Unordered_list li="– Capacity to understand requirements. Exploring new technologies." />
                  <Unordered_list li="– Work independently and in team" />
                  <Unordered_list li="– Good problem solving ability" />
                  <Unordered_list li="– Meet deadlines" />
                </ul>
                <p>
                  <Link href="mailto:hr@rackron.com" className="btn-read-more" Link_text="Send your CV at hr@rackron.com" /></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <h4> <Link href="#" Link_text="MERN Stack Developers"/></h4>
                <ul>
                  <Unordered_list li="– NodeJs: ExpressJs OR any NodeJs Framework" />
                  <Unordered_list li="– Database: MongoDB, MySQl, SQL Server (any 1 of them)" />
                  <Unordered_list li="– TypeScript, BootStap, HTML5, CSS3" />
                  <Unordered_list li="" />
                  <Unordered_list li="– ReactJs / AngularJs" />
                  <Unordered_list li="– You will be in charge of web sites front end and back-end development." />
                  <Unordered_list li="– Capacity to understand requirements. Exploring new technologies." />
                  <Unordered_list li="– Work independently and in team" />
                  <Unordered_list li="– Good problem solving ability" />
                  <Unordered_list li="– Meet deadlines" />
                </ul>
                <p>
                  <Link href="mailto:hr@rackron.com" className="btn-read-more" Link_text="Send your CV at hr@rackron.com" /></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <h4> <Link href="#" Link_text="Online Bidder / Business Developer" /></h4>
                <ul>
                  <Unordered_list li="– Generate new business from Online Bidding portals like UPWORK (formerly ODESK), GURU, etc, for IT Projects Requirements" />
                  <Unordered_list li="– Handle the complete IT sales cycle – Bidding, negotiating & deal closure" />
                  <Unordered_list li="– Proficiency in writing & reviewing proposals" />
                  <Unordered_list li="– Creating Wire-frames and Data Flow Diagrams" />
                  <Unordered_list li="– Good Communication is a must" />
                  <Unordered_list li="– Capacity to understand Client's requirements. " />
                  <Unordered_list li="– Work independently and in team" />
                  <Unordered_list li="– Meet deadlines" />
                </ul>
                <p>
                  <Link href="mailto:hr@rackron.com" className="btn-read-more" Link_text="Send your CV at hr@rackron.com" /></p>
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
      <Footer />
    </React.Fragment>
  );
}


export default Careers;