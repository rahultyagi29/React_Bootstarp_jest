import React from 'react';

function Navbar(props) {
    return (
        <li className={props.listclass}>
            {props.menu_icon} <a id={props.id} href={props.PageLink}>
                {props.Pagename}
            </a>
        </li>
    );
}

export default Navbar;
