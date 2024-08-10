import React from 'react'
import './offers.css'
import { MdKingBed, MdBathtub, MdLocationOn } from 'react-icons/md'
import { CgGym  } from 'react-icons/cg'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaKitchenSet } from 'react-icons/fa6'


//Importing images=========>
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).jpg'

//Here I will also use high array method(MAP) to import the offers

const Offs = [
  {
    id: 1,
    imgSrc: img10,
    destTitle: 'Well Structured Home',
    location: '11 St.Louis #3, France',
    price: '$8,700'
  },

  {
    id: 2,
    imgSrc: img11,
    destTitle: 'Comfortable House with complete utilities',
    location: '120 Maryland #15, London',
    price: '$5,500'
  },
  
  {
    id: 3,
    imgSrc: img12,
    destTitle: 'Decent Home in a nice enviroment',
    location: '52 Johnson #12, USA',
    price: '$6,200'
  },
];

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h1 className="secTitle">
          🏡 Special Offers 🌟
          </h1>
          <p>
          Enjoy 20% off on comfortable, well-structured homes, exclusively at <h4>BonVoyage.</h4> 
          Book your getaway today!
          </p>
        </div>

        <div className="mainContent grid">

          {
            Offs.map(({ id, imgSrc, destTitle, location, price }) =>{
              return(
                <div className="singleOffers">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                    <span className="discount">
                      20% Off
                    </span>
                  </div>
    
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>
    
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon' />
                        <small>2 Bedrooms</small>
                      </div>
      
                      <div className="singleAmenity flex">
                        <MdBathtub className='icon' />
                        <small>2 Bathrooms</small>
                      </div>
      
                      <div className="singleAmenity flex">
                        <CgGym  className='icon' />
                        <small>Gym Room</small>
                      </div>
    
                      <div className="singleAmenity flex">
                        <FaKitchenSet className='icon' />
                        <small>Spacious kitchen</small>
                      </div>
                    </div>
    
                    <div className="location flex">
                      <MdLocationOn className='icon' />
                      <small>{location}</small>
                    </div>
      
                    <button className="btn flex">
                      <a href='#'>Book Now</a>
                    </button>
    
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

export default Offers;