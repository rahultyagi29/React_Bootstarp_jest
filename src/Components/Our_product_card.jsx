import React from 'react';

function Our_Products_card(props) {
    return (
        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
                <div className="product_img"><img src={props.product_img} className="img-fluid" alt="" /></div>
                <h4><a href="">{props.product_title}</a></h4>
                <p>{props.product_info}</p>
                <p><a href={props.product_link} className="btn-read-more">Click here to Visit Site</a></p>
            </div>
        </div>
    );
}

export default Our_Products_card;
