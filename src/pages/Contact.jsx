import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaTiktok,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  // Lewis.Richardson@trideandsquareconstruction.co.uk

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5jadrxr",
        "template_hnez3az",
        formRef.current,
        "x_hwX49Ss0w32t96B"
      )
      .then(
        (result) => {
          console.log(result);
          //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact d-flex flex-column justify-content-center w-100 align-items-center">
      <div className="work__clients d-flex justify-content-start w-100 align-items-center ps-4">
        <h2 className="work__clientText">CONTACT US</h2>
      </div>
      <div className="w-50 ">
        <form
          onSubmit={handleSubmit}
          className="contact__main d-flex  flex-column justify-content-center w-100 align-items-center"
          ref={formRef}
        >
          <div className="d-flex  flex-column justify-content-center w-100 align-items-start my-2">
            <label htmlFor="" className="form__label my-2">
              FULL NAME<sup style={{ color: "#000" }}>*</sup>
            </label>
            <input
              type="text"
              className="text__input"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex  flex-column justify-content-center w-100 align-items-start my-2">
            <label htmlFor="" className="form__label my-2">
              EMAIL<sup style={{ color: "#000" }}>*</sup>
            </label>
            <input
              type="email"
              className="text__input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex  flex-column justify-content-center w-100 align-items-start my-2">
            <label htmlFor="" className="form__label my-2">
              MOBILE PHONE (OPTIONAL)
            </label>
            <input
              type="text"
              className="text__input"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex  flex-column justify-content-center w-100 align-items-start my-2">
            <label htmlFor="" className="form__label my-2">
              MESSAGE<sup style={{ color: "#000" }}>*</sup>
            </label>
            <textarea
              type="text"
              className="textarea__input"
              cols={30}
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button className="form__btn my-3" type="submit">
            SUBMIT NOW
          </button>
        </form>
      </div>
      <div className="w-100 my-4">
        <div
          className="d-flex justify-content-start w-100 align-items-center my-3"
          style={{ paddingLeft: "40px" }}
        >
          <h2 className="contact__clientText">Follow us on socials</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center my-3">
          <Link to="https//:www.facebook.com" className="">
            <FaFacebook size={35} color="#000" className="mx-3" />
          </Link>
          <Link
            to="https://x.com/trideandsquare?s=21&t=yl0EkoCTJ16MwsNAH6z8SA"
            className=""
          >
            <FaTwitter size={35} color="#000" className="mx-3" />
          </Link>
          <Link
            to="https://www.tiktok.com/@tridesquareconstr?_t=8g47l0mGC4v&_r=1"
            className=""
          >
            <FaTiktok size={35} color="#000" className="mx-3" />
          </Link>
          <Link to="https//:www.linkedined.com" className="">
            <FaInstagramSquare size={35} color="#000" className="mx-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
