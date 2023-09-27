import React from 'react'
import './styles.css'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BsQuote } from "react-icons/bs";

const Home = () => {
  return (
   <div className="home d-flex flex-column justify-content-between w-100 align-items-center">
     <div className='home__container w-100 m-0'>
      <div className='home__header-container d-flex flex-column justify-content-center align-items-start'>
      <h1 className="home__header">
            HOME
      </h1>
      <div className="d-flex justify-content-between align-items-start mt-2">
      <div className="d-flex flex-column justify-content-between align-items-start"  style={{maxWidth:"502px"}}>
      <p className="home__header-text">
      With over 5+ years experience and a team dedicated to bringing the best possible outcomes.
      </p>
      <Link to="/about" className="home__header-btn text-decoration-none my-2">
        Learn More
      </Link>
      </div>
      <IoIosArrowForward size={30} color='#fff'/>
     </div>
      </div>
    </div>
    <div className="home__main w-100 py-4">
    <div className="">
      <h1 className="home__main-header">Tride & Square Construction Masonry <br /> Contractor LTD</h1>
      <h2 className="home__sub-header">Building your future, together</h2>
      </div>
      <div className="m-4">
      <p className="home__main-paragraph">
      Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
      </p>
      <p className="home__main-paragraph">
      Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
      </p>
      <p className="home__main-paragraph">
      Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
      </p>
      <p className="home__main-paragraph">
      Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
      </p>
      </div>
      <div className="home__quote d-flex flex-column justify-content-between align-items-center mt-2">
        <BsQuote size={50} color='#000'/>
      <p className="home__quote-paragraph">
      Our company has been built with a passion for construction and masonry. We strive to deliver the best results possible with a real care for your projects
      </p>
      <div className="d-flex flex-column justify-content-between align-items-center">
   <span className="quoted__by">Lewis Richardson</span>
   <span className="quoter__position">Founder/Managing Director</span>
      </div>
      </div>
      </div>
    <p className="home__footer-text">
    Property of MDRN Group Limited
      </p>
   </div>
  )
}

export default Home