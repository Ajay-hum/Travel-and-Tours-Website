import React from 'react'
import './about.css'

//Importing images ============>
import img1 from '../../Assets/img_3.jpg'
import img2 from '../../Assets/img (5).jpg'
import img3 from '../../Assets/img_1.jpg'
import img4 from '../../Assets/img_6.jpg'
import img5 from '../../Assets/img_15.jpg'


const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">
        ✈️ Why BonVoyage? 🌍
        </h3>
        <h1>
        Choose BonVoyage for an unforgettable travel experience! Enjoy expert guidance, 
        exclusive access to unique destinations, seamless planning, and unmatched support. 
        Let us help you create memories that last a lifetime!
        </h1>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img1} alt="Image Name" />
              <h3>🌄 Explore 1000+ Hiking Adventures! 🌄</h3>
              <p>
              Are you ready to embark on your next great adventure? With over 1000 hiking trails to choose from, 
              there’s something for everyone—from serene nature walks to challenging mountain climbs. Discover breathtaking views, connect with nature, 
              and create unforgettable memories. Join us and take the first step towards your next hiking journey today!
              </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="Two Antelopes Fighting" />
              <h3>🦁 Embark on 500+ Wildlife Adventures! 🦒</h3>
              <p>
              Dive into the wild with over 500 thrilling wildlife adventures waiting for you! 
              Experience the beauty of nature up close, from majestic safaris to immersive wildlife encounters. 
              Perfect for nature lovers and thrill-seekers alike, these adventures promise unforgettable moments and breathtaking sights. 
              Join us for an adventure of a lifetime—explore the wild today!
              </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name" />
              <h3>🌲 Discover 100+ Enchanting Forest Reserves! 🌳</h3>
              <p>
              Immerse yourself in nature with access to over 100 stunning forest reserves! Experience 
              the tranquility of lush greenery, diverse wildlife, and serene trails. Perfect for hiking, picnicking, 
              or simply unwinding amidst the beauty of the great outdoors. 
              Join us and explore the wonders of our forest reserves today!
              </p>
          </div>

          <div className="singleItem">
            <img src={img5} alt="Image Name" />
              <h3>🎢 Discover the Joy of Fun Parks! 🎉</h3>
              <p>
                Unleash your inner child at our exciting Fun Parks! Experience thrilling rides, 
                entertaining shows, and unforgettable attractions for all ages. Create lasting memories with 
                family and friends in a world of adventure and excitement.
                Visit BonVoyage Fun Parks today!
              </p>
          </div>
        </div>

        <div className="imageCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>🌟 Experience the Ultimate in Comfort and Style! 🌟</h2>
              <p>
                Discover the perfect getaway at our exceptional house! Enjoy a unique blend of luxury and relaxation, 
                where every corner is designed for your comfort. Whether you're looking to unwind or explore, our house offers an unforgettable experience. 
                Book your stay today and create lasting memories!
              </p>
            </div>

            <div className="cardImage">
              <img src={img4} alt="Image Name" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About