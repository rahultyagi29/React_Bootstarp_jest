import React from "react";
import Header from "../Components/Header.jsx";
import Portfolio_ctg_card from "../Components/Portfolio_ctg_card.jsx";
import Heading_1 from "../Components/Heading_1.jsx";
import Heading_4 from "../Components/Heading_4.jsx";
import Footer from "../Components/Footer.jsx";

import Footer from "../Components/Footer.jsx";

function Home() {
    return (
        <React.Fragment>
            <Header />
            <main id="main">
                <section className="page_info">
                    <div className="container">
                        <Heading_1 className="page_title" h1="Portfolio" />
                        <Heading_4 className="lh-base" h4="We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world." />
                    </div>
                </section>
                <Portfolio_ctg_card ctg_class="portfolio portfolio_sec1" ctg_img="assets/img/portfolio/portfolio-03.png" ctg_src="" ctg_title="Logo & Branding" btn_link="" />
                <Portfolio_ctg_card ctg_class="portfolio portfolio_sec2" ctg_img="assets/img/portfolio/portfolio-03.png" ctg_src="" ctg_title="Mobile Apps" btn_link="" />
                <Portfolio_ctg_card ctg_class="portfolio portfolio_sec3" ctg_img="assets/img/portfolio/portfolio-03.png" ctg_src="" ctg_title="eCommerce" btn_link="" />
                <Portfolio_ctg_card ctg_class="portfolio portfolio_sec4" ctg_img="assets/img/portfolio/portfolio-03.png" ctg_src="" ctg_title="Web Design" btn_link="" />
                <Portfolio_ctg_card ctg_class="portfolio portfolio_sec5" ctg_img="assets/img/portfolio/portfolio-03.png" ctg_src="" ctg_title="Content Management System" btn_link="" />

            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Home;