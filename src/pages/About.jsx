import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='d-flex flex-column justify-content-between w-100 align-items-center' style={{height:"100%"}}>
      <div className='about__container p-0' style={{maxWidth:"814px",marginLeft:"60px"}}>
      <h1 className="about__header mb-3 m-0 ">
          ABOUT US
      </h1>
      <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex flex-column justify-content-between align-items-start"  style={{maxWidth:"502px"}}>
      <p className="about__header-text">
      Founded in 2023 by Lewis Richardson an mansory and bricklaying expert with a passion for building the best solutions for clients. Tride & Square boast a team of experts that are dedicated to delivering the highest quality results for your project.
      </p>
      <Link to="/about" className="about__header-btn text-decoration-none my-3">
      BOOK A FREE 30 MIN CONSULTATION NOW
      </Link>
      </div>
     </div>
      </div>
      <p className="home__footer-text">
    Property of MDRN Group Limited
      </p>
    </div>
  )
}

export default About