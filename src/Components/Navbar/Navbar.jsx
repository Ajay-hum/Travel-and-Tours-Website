import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    // Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    // Function to close navBar
    const removeNav = ()=>{
        setActive('navBar')
    }

    //This is the code to add background color to  the header
    const [transparent, setTransparent] = useState('header')
    const addBg = ()=>{
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)


  return (
    <section className="navBarSection">
        <div className={transparent}>

            <div className="logoDiv">
                <a href="#" className="logo">
                <h1>
                    <MdOutlineTravelExplore className='icon' /> BonVoyage.
                </h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href='#' className='navLink'>Home</a>
                    </li>

                    <li className="navItem">
                        <a href='#' className='navLink'>Packages</a>
                    </li>

                    <li className="navItem">
                        <a href='#' className='navLink'>About</a>
                    </li>

                    <li className="navItem">
                        <a href='#' className='navLink'>Blog</a>
                    </li>

                    <li className="navItem">
                        <a href='#' className='navLink'>Contacts</a>
                    </li>

                    <div className="headerBtns flex">
                        {/*<button className='btn loginBtn'>
                            <a href='#'>Login</a>
                        </button>*/}
                        <button className='btn'>
                            <a href='#'>Book Now</a>
                        </button>
                    </div>

                </ul>

                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className='toggleNavbar'>
                <TbGridDots className='icon'/>
            </div>

        </div>
    </section>
  )
}

export default Navbar
