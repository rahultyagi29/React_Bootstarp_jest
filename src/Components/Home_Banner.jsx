import React from "react";

function Home_Banner(props) {
    return (
        <section id="hero">
            <div class="banner">
                <div id="rotate-words" class="sign">
                    <div class="title">{props.title}</div>
                    <p><a href="#" class="btn-read-more btn-services">{props.btn}</a>
                        <a href="#" class="btn-read-more btn-portfolio">{props.btn2}</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Home_Banner;
