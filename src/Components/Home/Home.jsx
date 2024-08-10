import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'

const Home = () => {
  return (
   <section className='home'>

    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type='video/mp4'></video>

    <div className="secContainer container">
        <div className="homeText">
            <h1 className='title'>
                Enjoy Your GetAway With BonVoyage
            </h1>

            <p className="subTitle">
                Let us guide you to extraordinary places!
            </p>

            <button className="btn">
                <a href='#'>Find your Destination</a>
            </button>

        </div>

        <div className="homeCard grid">
            <div className="locationDiv">
                <label htmlFor="location">Search Your Destination:</label>
                <input type="text" placeholder='Enter name here...'/>
            </div>

            <div className="distDiv">
                <label htmlFor="distance">Distance From You:</label>
                <input type="text" placeholder='5-Kilometers'/>
            </div>

            <div className="priceDiv">
                <label htmlFor="price">Price Choice:</label>
                <input type="text" placeholder='$500 - $5000'/>
            </div>
            
            <button className='btn'>
                <a href='#'>Search</a>
            </button>

        </div>
    </div>
   </section>
  )
}

export default Home