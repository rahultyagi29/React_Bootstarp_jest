import React from "react";

function Link(props) {
    return (
        <a href={props.href} class={props.className}>{props.Link_text}</a>
    );
}
export default Link;
