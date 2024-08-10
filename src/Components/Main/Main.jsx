import React from 'react'
import './main.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { FaGripLinesVertical } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

//Here I will import the images===========>//
import img4 from '../../Assets/img (4).jpg'
import img1 from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'

/*Here Am going to use a high order array to display all the destinations 
using Map. To do so I need to list all the destinations in one array "Data" 
and later I shall call each destination by index id*/

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Eiffel Tower',
    location: 'France',
    grade: '❤️ The Perfect Romantic Adventure! 🌹',
    writeUp: "Experience love like never before at the iconic Eiffel Tower! Create unforgettable memories with breathtaking views and enchanting moments. Whether it’s a sunset dinner or a stroll along the Seine, make your romantic getaway truly special! Book your adventure today!"
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: '🏖️ Your Ultimate Beach Escape! 🌅',
    writeUp: "Discover the breathtaking beauty of Santorini! Relax on stunning beaches, soak in crystal-clear waters, and enjoy spectacular sunsets. Experience the perfect getaway filled with sun, sea, and serenity. Book your Santorini escape today!"
  },
  
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Grand Canyon',
    location: 'USA',
    grade: "🌄 Nature's Wonder Awaits! 🌟",
    writeUp: "Experience the awe-inspiring beauty of the Grand Canyon! Explore breathtaking vistas, hike scenic trails, and connect with nature in one of the world's most iconic landscapes. Discover the wonder that awaits you! Plan your visit today!"
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Oculus, World Trade Center',
    location: 'New York',
    grade: '🏙️ An Architectural Marvel! ✨',
    writeUp: "Discover the stunning design of the Oculus at the World Trade Center! Experience its breathtaking architecture, unique light-filled spaces, and vibrant atmosphere. A must-visit destination for art and architecture lovers alike! Visit today and be amazed!"
  }
];


const Main = () => {
  return (
    <section className='main section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              🌍 Explore the Most Visited Destinations! ✨
            </h2>
            <p>
            From historic cities to the magnificence of nature, immerse yourself in the wonders of the world! 
            Discover breathtaking landscapes, rich cultures, and unforgettable experiences. 
            Your adventure awaits—come and explore! Book your journey today!
            </p>
          </div>
        </div>

        <div className="iconsDiv flex">
          <BsArrowLeftShort className='icon leftIcon' />
          <BsArrowRightShort className='icon' />
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade, writeUp}) => {
              return (
                <div className="singleDestination">
                  <div className="destImage">

                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>
                        <MdLocationOn className='con' /> {/* Add the icon here */}
                        {location}
                      </p>
                      <a href='#' className='flex'>
                        Book Now
                      </a>
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>
                        {grade}
                      </h6>
                      <span className='flex'>
                        <span className='slash'>
                          {/*<BsDot className='icon'/>*/}
                          <FaGripLinesVertical className='icon' />
                        </span>
                        BonVoyage.
                      </span>
                    </div>

                    <p>
                      {writeUp}
                    </p>
                    
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}


export default Main