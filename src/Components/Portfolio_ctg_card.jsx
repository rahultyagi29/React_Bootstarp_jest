import React from "react";

function Portfolio_ctg_card(props) {
    return (
        <section className={props.ctg_class}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"><img src={props.ctg_img} className="img-fluid"
                        alt={props.ctg_src} /></div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h2 className="text-bold">{props.ctg_title}</h2>
                        <p><a className="btn-read-more" href={props.btn_link}>View Portfolio</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio_ctg_card;
