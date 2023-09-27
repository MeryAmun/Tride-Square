import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center w-100 align-items-start"
      style={{ height: "100%", padding: "0 25px" }}
    >
      <div className="services__header my-2">
        <h1 className="home__main-header">Services</h1>
      </div>
      <div className="services__container">
        <div className="brickwork">
          <div className="brick__textContainer d-flex flex-column justify-content-center align-items-start">
            <h1 className="brick__header">Brickwork</h1>
            <p className="brick__text">
              With over 5+ years experience and a team dedicated to bringing the
              best possible outcomes.
            </p>
            <Link to="/about" className="brick__btn text-decoration-none my-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="block_work">
          <div className="brick__textContainer d-flex flex-column justify-content-center align-items-start">
            <h1 className="brick__header">Blockwork</h1>
            <p className="brick__text">
              Our core service. Brickwork remains at the heart of everything we
              do.
            </p>
            <Link to="/about" className="brick__btn text-decoration-none my-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="stone__work">
          <div className="brick__textContainer d-flex flex-column justify-content-center align-items-start">
            <h1 className="brick__header">Stonework</h1>
            <p className="brick__text">
              Our core service. Brickwork remains at the heart of everything we
              do.
            </p>
            <Link to="/about" className="brick__btn text-decoration-none my-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="discussion">
          <h1 className="brick__header pt-3">Want to discuss your project us?</h1>
          <p className="brick__text">
            Feel free to drop us an email: info@trideandsqaure.com
            Alternatively,
            <b /> give us a call on +447500906705
          </p>
          <Link
            to="/contact"
            className="discussion__btn text-decoration-none my-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
