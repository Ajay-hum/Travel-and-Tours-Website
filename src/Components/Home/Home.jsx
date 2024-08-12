import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


  return (
   <section className='home'>

    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type='video/mp4'></video>

    <div className="secContainer container">
        <div className="homeText">
            <h1 data-aos="fade-up" className='title'>
                Enjoy Your GetAway With BonVoyage
            </h1>

            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                Let us guide you to extraordinary places!
            </p>

            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                <a href="#">Find your Destination</a>
            </button>

        </div>

        <div className="homeCard grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
                <label htmlFor="location">Location of your choice:</label>
                <input type="text" placeholder='Enter name here...'/>
            </div>

            <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
                <label htmlFor="distance">Distance From You:</label>
                <input type="text" placeholder='5-Kilometers'/>
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
                <label htmlFor="price">Price Choice:</label>
                <input type="text" placeholder='$500 - $5000'/>
            </div>
            
            <button data-aos="fade-left" data-aos-duration="3500" className='btn'>
                <a href='#'>Search</a>
            </button>

        </div>
    </div>
   </section>
  )
}

export default Home