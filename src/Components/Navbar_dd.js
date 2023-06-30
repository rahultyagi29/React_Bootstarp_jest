import React from 'react';
import Navbar from './Navbar';

function Navbar_dd(props) {
    return (
    
                        <li className={props.listclass}>
                            <a className={props.class} href={props.PageLink}>
                                {props.Pagename}
                            </a>
                            <ul>
                                <Navbar PageLink="" Pagename="Web Development" />
                                <Navbar PageLink="" Pagename="Creative Designs" />
                                <Navbar PageLink="" Pagename="Mobile Development" />
                                <Navbar PageLink="" Pagename="Digital Marketing" />
                                <Navbar PageLink="" Pagename="Quality Testing" />
                                <Navbar PageLink="" Pagename="E-commerce Solution" />
                            </ul>
                        </li>


    );
}

export default Navbar_dd;
