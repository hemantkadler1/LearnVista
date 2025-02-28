import React, { useEffect, useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.png';

import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 500);
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up event listener
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu); // Simplified toggle logic
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <h1>LearnVista</h1>
            <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
