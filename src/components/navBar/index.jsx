import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { Link as scrollLink, animateScroll as scroll } from 'react-scroll';
import { HiX } from 'react-icons/hi';
import './style.scss';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import './style.scss';

const data = [
    {
        label: 'HOME',
        to: 'home', 
    },
    {
        label: 'SERVICES',
        to: 'service',
    },
    {
        label: 'ABOUT',
        to: 'about', 
    },
    {
        label: 'CONTACT',
        to: 'contact', 
    },
];

const Navbar = () => {
    const [toggleIcons, setToggleIcons] = useState(false);

    const handleToggleIcons = () => {
        setToggleIcons(!toggleIcons);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <ScrollLink to='home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}>
                        <h3>FSH.</h3>
                    </ScrollLink>
                </div>
                <ul className={`navbar_container_menu ${toggleIcons ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar_container_menu_item'>
                            <ScrollLink
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='navbar_container_menu_item_links'
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
                <div className='nav-icon' onClick={handleToggleIcons}>
                    {toggleIcons ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
