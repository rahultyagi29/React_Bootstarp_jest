import React from "react";

function Page_banner(props) {
    return (
    <section id="page_banner" class="page_banner">
	    <img src={props.Banner_img} class="img-fluid" alt="" />
      <div class="page_head">
	    <div class="container">
        <h2>{props.Banner_title}</h2>
        <p>{props.Banner_tagline} </p>
      </div>
      </div>
    </section>
    );
}
export default Page_banner;
