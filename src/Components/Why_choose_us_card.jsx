import React from "react";

function Why_choose_card(props) {
    return (
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="info-box">
                <h3><i class={props.icon_class}></i> {props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default Why_choose_card;
