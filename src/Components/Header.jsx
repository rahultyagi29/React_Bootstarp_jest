import React from 'react';
import Navbar from './Navbar';
import NavbarDD from './NavbarDD';
import Image from '../Components/Image.jsx'

function Header() {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <a href='/' className="logo">
                    <Image src="assets/img/logo.png" className="img-fluid" alt="Site Logo" />
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <Navbar class="active" PageLink="/" Pagename="Home" />
                        <Navbar PageLink="/about" Pagename="About Us" />
                        <NavbarDD listclass="dropdown" id="" Pagename="Services" dropdown="Web Development" />
                        <Navbar PageLink="/portfolio" Pagename="Portfolio" />
                        <Navbar PageLink="/our-products" Pagename="Our Product" />
                        <Navbar PageLink="/careers" Pagename="Careers" />
                        <Navbar listclass="headerContactCTA" PageLink="/contact" Pagename="Contact" />
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
