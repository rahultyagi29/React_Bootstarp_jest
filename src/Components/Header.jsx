import React from 'react';
import Navbar from './Navbar';
import NavbarDD from './NavbarDD';

function Header() {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="assets/img/logo.png" className="img-fluid" alt="" />
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                    <Navbar class="active" Pagename="Home" />
                    <NavbarDD PageLink="" listclass="dropdown" Pagename="Services" dropdown="Web Development" />
                    <Navbar PageLink="" Pagename="About Us" />
                    <Navbar PageLink="" Pagename="Portfolio" />
                    <Navbar PageLink="" Pagename="Our Product" />
                    <Navbar PageLink="" Pagename="Careers" />
                    <Navbar listclass="headerContactCTA" PageLink="" Pagename="Contact" />
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
