import React from 'react'
import './styles.css'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home d-flex flex-column justify-content-between w-100 align-items-center border border-1 border-secondary'>
      <div className=' d-flex flex-column justify-content-center align-items-start' style={{width:"814px", padding:"10px 30px", marginTop:"200px"}}>
      <h1 className="home__header">
            HOME
      </h1>
      <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex flex-column justify-content-between align-items-start"  style={{width:"502px",padding:" 15px"}}>
      <p className="home__header-text">
      With over 5+ years experience and a team dedicated to bringing the best possible outcomes.
      </p>
      <Link to="/about" className="home__header-btn text-decoration-none">
        Learn More
      </Link>
      </div>
      <IoIosArrowForward size={30} color='#fff'/>
     </div>
      </div>
    <p className="home__footer-text">
    Property of MDRN Group Limited
      </p>
    </div>
  )
}

export default Home