import React from 'react';
import { Link } from 'react-router-dom';

const Decrowd = () => {
  return (
    <>
      <div className="home-abt-sec abt-banner-sec">
        <div className="container custom-container">
          <div className="abt-sec-wrapper d-flex">
            <div className="text-col">
              <h2 className="sub-head">
                About <span>DeCROWD</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="btn-block">
                <Link to="/supporter" className="btn-1">
                  Learn More
                  <img src="../../../assets/img/arrw-rgt.svg" alt="" />
                </Link>
              </div>
            </div>

            <div className="img-col">
              <div className="img-block">
                <img src="../../../assets/img/home-abt-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrap supporters-sec">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-auto">
              <h2 className="sub-head">Our Supporters</h2>
            </div>

            <div className="col supporter-logo">
              <div className="row">
                <div className="col-sm">
                  <img src="../../../assets/img/logo-news-com.png" alt="" />
                </div>
                <div className="col-sm">
                  <img
                    src="../../../assets/img/logo-bussiness-insider.png"
                    alt=""
                  />
                </div>
                <div className="col-sm">
                  <img src="../../../assets/img/logo-envato.png" alt="" />
                </div>
                <div className="col-sm">
                  <img src="../../../assets/img/logo-midweek.png" alt="" />
                </div>
                <div className="col-sm">
                  <img src="../../../assets/img/logo-wired.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Decrowd;
