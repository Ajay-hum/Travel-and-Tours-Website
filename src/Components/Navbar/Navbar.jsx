import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importing from react-scroll
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    // Function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    // Function to close navBar
    const removeNav = () => {
        setActive('navBar');
    };

    // This is the code to add background color to the header
    const [transparent, setTransparent] = useState('header');
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader');
        } else {
            setTransparent('header');
        }
    };
    window.addEventListener('scroll', addBg);

    return (
        <section className="navBarSection">
            <div className={transparent}>
                <div className="logoDiv">
                    <Link to="home" smooth={true} duration={500} className="logo">
                        <h1>
                            <MdOutlineTravelExplore className='icon' /> BonVoyage.
                        </h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="home" smooth={true} duration={500} className='navLink'>Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="main" smooth={true} duration={500} className='navLink'>Packages</Link>
                        </li>
                        <li className="navItem">
                            <Link to="offers" smooth={true} duration={500} className='navLink'>Offers</Link>
                        </li>
                        <li className="navItem">
                            <Link to="blog" smooth={true} duration={500} className='navLink'>Blog</Link>
                        </li>
                        <li className="navItem">
                            <Link to="about" smooth={true} duration={500} className='navLink'>About</Link>
                        </li>

                        <div className="headerBtns flex">
                            <button className='btn'>
                                <Link to="/book" className='navLink'>Book Now</Link>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className='icon' />
                </div>
            </div>
        </section>
    );
};

export default Navbar;


