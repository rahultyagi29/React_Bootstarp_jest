import React from "react";

function Stat_card(props) {
    return (
          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <i class={props.icon_class}></i>
              <span data-purecounter-start="0" data-purecounter-end={props.counter_end} data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>{props.card_title}</strong></p>
            </div>
          </div>
    );
}
export default Stat_card;
