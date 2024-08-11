import React, {useEffect} from 'react'
import './blog.css'

//Importing icons to use=============>
import { BsArrowRightShort } from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Importing images==============>
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

const Posts = [
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Tokyo: A Rich Cultural Experience Awaits!',
    desc: 'Immerse yourself in the vibrant culture of Tokyo! From traditional temples to modern art, savor delicious cuisine and explore bustling markets. Discover the unique blend of history and innovation in this captivating city. Plan your cultural adventure today!'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Venice: Your Perfect Romantic Getaway! ',
    desc: 'Experience the enchanting beauty of Venice! Glide through picturesque canals, savor exquisite cuisine, and stroll hand-in-hand through charming streets. Create unforgettable memories in this city of love. Book your romantic escape today!'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Sydney Opera House: An Architectural Marvel!',
    desc: 'Discover the iconic Sydney Opera House! Marvel at its stunning design and breathtaking views of the harbor. Enjoy world-class performances and immerse yourself in the vibrant cultural scene. Visit this masterpiece today!'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Reykjavik: Embrace Natural Beauty!',
    desc: "Experience the stunning landscapes of Reykjavik! From breathtaking geysers to majestic waterfalls, explore the unique beauty of Iceland's capital. Discover vibrant culture and outdoor adventures in this natural paradise. Plan your trip today!"
  },
];


const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            📚 Check Out Our Best Blogs! ✨
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
          Discover valuable ideas for enriching your life. Dive in for travel tips, 
          personal growth, and more! Check it out now!
          </p>
        </div>

        <div className="mainContainer grid">

          {
            Posts.map(({id, imgSrc, destTitle, desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={imgSrc} alt="title"/>
                  </div>
    
                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {destTitle}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="3500">
                      {desc}
                    </p>
                  </div>
    
                  <a href='#' className='flex' data-aos="fade-up" data-aos-duration="4000">
                    Book Now
                    <BsArrowRightShort className='icon' />
                  </a>
                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  )
}

export default Blog