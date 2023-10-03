import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaTiktok,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const notify = () => {
    toast.info("Thanks for contacting Tride and Square! your message has been received :)", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    emailjs
      .sendForm(
        "service_5jadrxr",
        "template_hnez3az",
        formRef.current,
        "x_hwX49Ss0w32t96B"
      )
      .then(
        (result) => {
          if (result.status === 200) {
           notify()
            setFormData({
              fullName: "",
              email: "",
              mobileNumber: "",
              message: "",
            });
            
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__header  w-100">
        <h2 className="contact__text w-100">CONTACT US</h2>
      </div>
   
        <form
          onSubmit={handleSubmit}
          className="contact__main d-flex  flex-column justify-content-center  align-items-center"
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
              name="mobileNumber"
              value={formData.mobileNumber}
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
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      
      <div className="w-100 my-4 contact__socials">
        <div
          className="d-flex justify-content-start w-100 align-items-center my-3"
          style={{ paddingLeft: "40px" }}
        >
          <h2 className="contact__clientText">Follow us on socials</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center my-3">
          <Link
            to="https://www.facebook.com/profile.php?id=61551543377790"
            className=""
          >
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
          <Link
            to="https://instagram.com/trideandsqaureltd?igshid=MzMyNGUyNmU2YQ=="
            className=""
          >
            <FaInstagramSquare size={35} color="#000" className="mx-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
