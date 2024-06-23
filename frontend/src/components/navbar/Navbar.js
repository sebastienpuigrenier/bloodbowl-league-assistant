import React from 'react';
import { FaImages, FaCircleInfo } from "react-icons/fa6";
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to="versus-section" smooth={true} duration={500}>
                        <i><FaImages /></i>
                        <span>Versus</span>
                    </Link>
                </li>
                <li className="separator">
                    <Link to="about-section" smooth={true} duration={500}>
                        <i><FaCircleInfo /></i>
                        <span>A propos</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
