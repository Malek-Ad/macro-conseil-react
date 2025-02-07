import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="ftnt-navigation" role="banner">
            <nav id="top-nav" aria-label="Main Navigation">
                <div className="container">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="MACRO Consulting & Assistance Logo" className="logo" width="150" height="50" />
                    </Link>
                    <div className="mobile-nav">
                        <button 
                            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            aria-label="Toggle mobile menu" 
                            aria-controls="top-toolbar" 
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <ul className={`top-toolbar ${isMenuOpen ? 'show' : ''}`} id="top-toolbar">
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
