import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <div className="sidebar">
        <div className="sidebar__head">head</div>
        <div className="sidebar__body">body</div>
        <div className="sidebar__footer">
          <div className="sidebar__footer-links"></div>
          <p className="copyright">
            Tride & Square LTD, 2023, All Rights Reserved
          </p>
        </div>
      </div>
      <div className="main__section">main section</div>
    </div>
  );
};

export default LandingPage;
