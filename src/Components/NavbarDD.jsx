import React from 'react';
import Navbar from './Navbar';

function NavbarDD(props) {
    return (
        <li className={props.listclass}>
            <a className={props.class} href={props.PageLink}>
                {props.Pagename}
            </a>
            <ul>
                <Navbar PageLink="/Webdevelopment" Pagename="Web Development" />
                <Navbar PageLink="/Creative_design" Pagename="Creative Designs" />
                <Navbar PageLink="/Mobile_Development" Pagename="Mobile Development" />
                <Navbar PageLink="/Digital_marketing" Pagename="Digital Marketing" />
                <Navbar PageLink="/Quality_testing" Pagename="Quality Testing" />
                <Navbar PageLink="/Ecommerce_solution" Pagename="E-commerce Solution" />
            </ul>
        </li>
    );
}

export default NavbarDD;
