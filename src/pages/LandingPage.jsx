import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTiktok,
  FaInstagramSquare,
  FaTwitter,
  FaBars 
} from "react-icons/fa";
import { sideHeader } from "../assets/index";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { About, Home, WorkWithUs, Contact, Services, Projects } from "./index";


const LandingPage = () => {
  const [active, setActive] = useState(false);
  const targetRef = useRef();
  


  const changeWidth = () => {
    targetRef.current.style.width = '220px'
    targetRef.current.style.right = '0%'
    targetRef.current.style.transition = 'width 0.5s ease-in-out';
    targetRef.current.style.transition = 'right 0.5s ease-in-out';

      }
      const prevWidth = () => {
        targetRef.current.style.width = '0px'
        targetRef.current.style.right = '-50%'
        targetRef.current.style.transition = 'width 0.5s ease-in-out';
        targetRef.current.style.transition = 'right 0.5s ease-in-out';
      
      }

const toggleActive = () => {
  if(active){
    changeWidth()
   setActive((prev) => !prev)
  }else{
    prevWidth()
   setActive((prev) => !prev)
  }

}
  return (
    <div className="w-100 d-flex justify-content-between align-items-start landing">
      <div className="sidebar  d-flex flex-column justify-content-center align-items-center">
        <div className="sidebar__head">
          <img src={sideHeader} alt="" />
    <FaBars size={35} color="#fff" className="sidebar__headIcon" onClick={toggleActive}/>
        </div>

        <div className="sidebar__body d-flex flex-column justify-content-center align-items-center">
          <Link to="/" className="sidebar__link">
            Home
          </Link>
          <Link to="/about" className="sidebar__link">
            About Us
          </Link>
          <Link className="dropdown">
            <button
              className="btn sidebar__link dropdown-toggle border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services" className="sidebar__link dropdown-item">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="sidebar__link dropdown-item">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link to="/services" className="sidebar__link dropdown-item">
                  Reviews
                </Link>
              </li>
            </ul>
          </Link>
          <Link className="dropdown">
            <button
              className="btn sidebar__link dropdown-toggle border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item">
                  Pending Projects
                </Link>
              </li>
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item">
                  Clients
                </Link>
              </li>
            </ul>
          </Link>
          <Link to="/work-with-us" className="sidebar__link">
            Work With Us
          </Link>
          <Link to="/contact" className="sidebar__link">
            Contact
          </Link>
        </div>
        <div className="sidebar__footer w-100  d-flex flex-column justify-content-between align-items-center">
          <div className="sidebar__footer-links  d-flex justify-content-between align-items-center my-2">
            <Link to="https://www.facebook.com/profile.php?id=61551543377790" className="">
              <FaFacebook size={20} color="#000" className="mx-2" />
            </Link>
            <Link
              to="https://x.com/trideandsquare?s=21&t=yl0EkoCTJ16MwsNAH6z8SA"
              className=""
            >
              <FaTwitter size={20} color="#000" className="mx-2" />
            </Link>
            <Link
              to="https://www.tiktok.com/@tridesquareconstr?_t=8g47l0mGC4v&_r=1"
              className=""
            >
              <FaTiktok size={20} color="#000" className="mx-2" />
            </Link>
            <Link to="https://instagram.com/trideandsqaureltd?igshid=MzMyNGUyNmU2YQ==" className="">
              <FaInstagramSquare size={20} color="#000" className="mx-2" />
            </Link>
          </div>
          <p className="copyright">
            Tride & Square LTD, 2023, All Rights Reserved
          </p>
        </div>
      </div>
      <div className="main__section w-100 d-flex justify-content-between align-items-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/work-with-us" element={<WorkWithUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div className="sidebar__mobile  d-flex flex-column justify-content-center align-items-center" ref={targetRef}>
        <div className="sidebar__mobileBody d-flex flex-column justify-content-center align-items-center">
          <Link to="/" className="sidebar__link" onClick={toggleActive}>
            Home
          </Link>
          <Link to="/about" className="sidebar__link" onClick={toggleActive}>
            About Us
          </Link>
          <Link className="dropdown">
            <button
              className="btn sidebar__link dropdown-toggle border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link to="/services" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  Reviews
                </Link>
              </li>
            </ul>
          </Link>
          <Link className="dropdown">
            <button
              className="btn sidebar__link dropdown-toggle border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  Pending Projects
                </Link>
              </li>
              <li>
                <Link to="/projects" className="sidebar__link dropdown-item" onClick={toggleActive}>
                  Clients
                </Link>
              </li>
            </ul>
          </Link>
          <Link to="/work-with-us" className="sidebar__link" onClick={toggleActive}>
            Work With Us
          </Link>
          <Link to="/contact" className="sidebar__link" onClick={toggleActive}>
            Contact
          </Link>
        </div>
        <div className="sidebar__mobileFooter  d-flex flex-column justify-content-between align-items-center">
          <div className="sidebar__footer-links  d-flex justify-content-between align-items-center mb-3">
            <Link to="https://www.facebook.com/profile.php?id=61551543377790" className="">
              <FaFacebook size={25} color="#000" className="mx-2" />
            </Link>
            <Link
              to="https://x.com/trideandsquare?s=21&t=yl0EkoCTJ16MwsNAH6z8SA"
              className=""
            >
              <FaTwitter size={25} color="#000" className="mx-2" />
            </Link>
            <Link
              to="https://www.tiktok.com/@tridesquareconstr?_t=8g47l0mGC4v&_r=1"
              className=""
            >
              <FaTiktok size={25} color="#000" className="mx-2" />
            </Link>
            <Link to="https://instagram.com/trideandsqaureltd?igshid=MzMyNGUyNmU2YQ==" className="">
              <FaInstagramSquare size={25} color="#000" className="mx-2" />
            </Link>
          </div>
          <p className="copyright__mobile">
            Tride & Square LTD, 2023, All Rights Reserved
          </p>
        </div>
      </div> 
    </div>
  );
};

export default LandingPage;
