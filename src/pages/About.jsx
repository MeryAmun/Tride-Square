import React from "react";
import { Link } from "react-router-dom";
import { BsQuote } from "react-icons/bs";

const About = () => {
  return (
    <div className="about d-flex flex-column justify-content-between w-100 align-items-center p-0">
      <div
        className="about__container w-100 p-0">
        <div className="about__quote d-flex flex-column justify-content-center align-items-center mb-4">
      <BsQuote size={50} color="#000" />
      <p className="about__quote-paragraph">
        Our company has been built with a passion for construction and
        masonry. We strive to deliver the best results possible with a real
        care for your projects
      </p>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <span className="quoted__by">Lewis Richardson</span>
        <span className="quoter__position">Founder/Managing Director</span>
      </div>
    </div>

        <div className="d-flex flex-column justify-content-between w-100 align-items-start my-3">
          <h1 className="about__main-header">
            Tride & Square Construction Masonry <br /> Contractor LTD
          </h1>
          <h2 className="about__sub-header">Building your future, together</h2>
        </div>
        <div className="m-4 d-flex flex-column justify-content-center align-items-start">
          <p className="home__main-paragraph">
            Tride & Square Construction Ltd With a quick turnaround time, we offer
            you the best value for your investment. As a new contractor based in
            Surrey and Kent, we aim to establish trusted relationships with our
            clients. Our experienced team boasts over 30 years of expertise.
          </p>
          <p className="home__main-paragraph">
            We specialize in handling small commercial and domestic projects with
            liability and indemnity coverage of up to 2 million. Our dedicated
            tradespeople excel in their respective fields:
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
            At Tride & Square Construction Ltd, we are committed to achieving
            excellence and being at the forefront of our industry.
          </p>
        </div>
      </div>
      <Link
          to="/about"
          className="about__header-btn text-decoration-none my-3"
        >
          BOOK A FREE 30 MIN CONSULTATION NOW
        </Link>
        <div className="about__quote_mobile d-flex flex-column justify-content-center align-items-center">
      <BsQuote size={50} color="#000" />
      <p className="about__quote-paragraph">
        Our company has been built with a passion for construction and
        masonry. We strive to deliver the best results possible with a real
        care for your projects
      </p>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <span className="quoted__by">Lewis Richardson</span>
        <span className="quoter__position">Founder/Managing Director</span>
      </div>
    </div>
    </div>
  );
};

export default About;
