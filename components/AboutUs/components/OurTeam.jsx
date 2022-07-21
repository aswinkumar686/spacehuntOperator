import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const OurTeam = () => {
  const slider = {
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  return (
    <>
      <div className="about-wrap our-team-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 team-intro">
              <h3 className="subhead-title">Our Team</h3>
              <div className="title-col">
                <h2 className="sub-head">Meet Our Team Of Creative Experts.</h2>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>

              <Link to="/campaigns" className="btn-1">
                Join us <img src="../../../assets/img/arrw-rgt.svg" alt="" />
              </Link>
            </div>
            <div className="col-xl-9 team-slider">
              <div className="team-slider-wrap">
                <Slider {...slider} ref={sliderRef}>
                  <div className="team-slide">
                    <div className="slide-content">
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-wrap">
                        <h3>Mary Jennifery</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </div>

                  <div className="team-slide">
                    <div className="slide-content">
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-wrap">
                        <h3>Robert John William</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="team-slide">
                    <div className="slide-content">
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-wrap">
                        <h3>Mary Jennifery</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </div>

                  <div className="team-slide">
                    <div className="slide-content">
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-wrap">
                        <h3>Lorem Ipsum Is Simply</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="slider-buttons">
                <button
                  id="team-prev"
                  onClick={() => {
                    sliderRef.current.slickPrev();
                  }}>
                  <img src="../../../assets/img/arrow-left.svg" alt="#" />
                </button>
                <button
                  id="team-next"
                  onClick={() => {
                    sliderRef.current.slickNext();
                  }}>
                  <img src="../../../assets/img/arrow-right.svg" alt="#" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
