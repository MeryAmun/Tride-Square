import React from "react";
import "./styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import { BsQuote } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home d-flex flex-column justify-content-center w-100 align-items-center">
      <div className="home__container w-100 d-flex flex-column justify-content-center w-100 align-items-center">
        <div className="home__header-container">
          <h1 className="home__header">HOME</h1>
          <div className="d-flex justify-content-between align-items-start mt-2">
            <div
              className="homeHeader__textContainer"
              style={{ maxWidth: "502px" }}
            >
              <p className="home__header-text">
              Founded in 2023  by Lewis Richardson an mansory and bricklaying expert with a passion for building the best solutions for clients. Tride & Square boast  a team  of experts that are dedicated to delivering the highest quality results for your project. 

                {/* With over 5+ years experience and a team dedicated to bringing
                the best possible outcomes. */}
              </p>
              <Link
                to="/about"
                className="home__header-btn text-decoration-none my-2"
              >
                Learn More
              </Link>
            </div>
            <IoIosArrowForward size={30} color="#fff" />
          </div>
        </div>
      </div>
      {/* <div className="home__main w-100 py-4">
    <div className="">
      <h1 className="home__main-header">Tride & Square Construction Masonry <br /> Contractor LTD</h1>
      <h2 className="home__sub-header">Building your future, together</h2>
      </div>
      <div className="m-4 d-flex flex-column justify-content-center align-items-start">
      <p className="home__main-paragraph">
      Tride & Square Construction Ltd
With a quick turnaround time, we offer you the best value for your investment. As a new contractor based in Surrey and Kent, we aim to establish trusted relationships with our clients. Our experienced team boasts over 30 years of expertise.
      </p>
      <p className="home__main-paragraph">
      We specialize in handling small commercial and domestic projects with liability and indemnity coverage of up to 2 million. Our dedicated tradespeople excel in their respective fields:
      </p>
      <ul className="home__main-paragraph">
      <li className="home__main-paragraph">Groundworks</li>
      <li className="home__main-paragraph">Block paving / Tarmacing</li>
      <li className="home__main-paragraph">Roofing</li>
      <li className="home__main-paragraph">Carpentry</li>
      <li className="home__main-paragraph">Electrical</li>
      <li className="home__main-paragraph">Plumbing</li>
      <li className="home__main-paragraph">Plastering</li>
      <li className="home__main-paragraph">Bathrooms</li>
      <li className="home__main-paragraph">Groundworks</li>
      <li className="home__main-paragraph">Kitchens</li>
      <li className="home__main-paragraph">Landscaping</li>
      </ul>
      <p className="home__main-paragraph">
      At Tride & Square Construction Ltd, we are committed to achieving excellence and being at the forefront of our industry.
      </p>
      </div>
      <div className="home__quote d-flex flex-column justify-content-center align-items-center mt-2">
        <BsQuote size={50} color='#000'/>
      <p className="home__quote-paragraph">
      Our company has been built with a passion for construction and masonry. We strive to deliver the best results possible with a real care for your projects
      </p>
      <div className="d-flex flex-column justify-content-between align-items-center">
   <span className="quoted__by">Lewis Richardson</span>
   <span className="quoter__position">Founder/Managing Director</span>
      </div>
      </div>
      </div> */}
      {/* <p className="home__footer-text">
    Property of MDRN Group Limited
      </p> */}
    </div>
  );
};

export default Home;
