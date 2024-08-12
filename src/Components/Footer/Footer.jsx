import React, {useEffect} from 'react'
import './footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Importing icons=================>
import { MdOutlineTravelExplore } from 'react-icons/md'
import { ImLinkedin } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='footer'>
      <div className="secContainer container grid">

        <div className="logoDiv">
          <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <a href='#' className='logo'>
              <h2 className='flex'><MdOutlineTravelExplore className='icon'/>
              BonVoyage.</h2>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="socials flex">
            <a href='https://www.linkedin.com/in/justus-asogwa-726427293' className='flex'>
              <ImLinkedin className='icon'/>
            </a>
            <a href='https://twitter.com/Gentle_soul_26' className='flex'>
              <BsTwitter className='icon'/>
            </a>
            <a href='https://instagram.com/gentle_soul_26' className='flex'>
              <AiFillInstagram className='icon'/>
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">
            Informations
          </span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Packages</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className='phone'> via phone: +234 817 377 1791</span>
          <span className='E-mail'> or via email: justuschimeremueze@gmail.com</span>
        </div>

      </div>
    </div>
  )
}

export default Footer