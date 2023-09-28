import React from "react";
import { Link } from "react-router-dom";
import { 
  //client, 
  people } from "../assets/index";

const WorkWithUs = () => {
  return (
    <div className="work d-flex flex-column justify-content-center w-100 align-items-center">
      <div
        className="work__with_us d-flex flex-column justify-content-center w-100 align-items-center"
        style={{ height: "850px" }}
      >
        <div className="work__main w-100" style={{ height: "100%" }}>
          <div className="main__container w-100">
            <div className="main__left">
              <div className="main__leftHeader">
                <h2 className="main__headerOne mb-2">Working with us</h2>
                <h2 className="main__headerTwo my-4">
                  Our team is the driving force behind our business.
                </h2>
              </div>
              <p className="main__leftParagraph my-2">
                Joining our team, is like joining a family. We are a strong
                force that work together to produce the possible results for our
                clients
              </p>
              <Link
                to="/about"
                className="main__leftbtn text-decoration-none my-3"
              >
                See Vacancies
              </Link>
            </div>
            <div className="main__right">
              <div className="main__rightImage">
                <img src={people} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" work__clientsSection d-flex flex-column justify-content-center w-100 align-items-center py-3">
      <div className="work__clients">
        <h2 className="work__clientText">Our Clients</h2>
      </div>
      <div className="work__clientsContainer w-100 my-3">
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      <div className="work__client">
       <img src={client} alt="" />
      </div>
      </div>
      </div> */}
    </div>
  );
};

export default WorkWithUs;
