import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

const Fund = () => {
  const slider = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    nextArrow: '#fund-next',
    prevArrow: '#fund-prev',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
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
      <div className="about-wrap fund-raising-sec">
        <div className="container custom-container">
          <div className="row">
            <div className="col">
              <h3 className="subhead-title">Fund raising</h3>
            </div>
          </div>
          <div className="row">
            <div className="col title-col">
              <h2 className="sub-head">
                Our aim is to bring lasting impact at scale by
              </h2>
            </div>
          </div>

          <div className="row abt-fund-list">
            <div className="col">
              <ul>
                <li>
                  Working with individuals and communities to raise
                  consciousness, self-esteem, confidence, and aspirations to
                  change their world, and provide them the knowledge, skills,
                  and capabilities to do so.
                </li>

                <li>
                  Changing relationships to address the inequality that persists
                  in intimate relations, family and social networks,
                  marketplaces, and community or citizen groups. We strive to
                  heal and activate these networks.
                </li>

                <li>
                  Strengthening systems to increase the social investment by
                  governments which offers us the opportunity to work closely
                  with systems and multiply impact at scale.
                </li>
              </ul>
            </div>
          </div>

          <div className="row abt-fund-slider">
            <div className="col">
              <div className="fund-slider-wrap">
                <Slider {...slider} ref={sliderRef}>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="text-wrap">
                        <h3>Lorem Ipsum Is Simply</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="text-wrap">
                        <h3>Lorem Ipsum Is Simply</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="text-wrap">
                        <h3>Lorem Ipsum Is Simply</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="text-wrap">
                        <h3>Lorem Ipsum Is Simply</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="img-wrap">
                        <img
                          src="../../../assets/img/sliderthumb2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <div className="slider-buttons">
              <button
                id="fund-prev"
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}>
                <img src="../../../assets/img/arrow-left.svg" alt="#" />
              </button>
              <button
                id="fund-next"
                onClick={() => {
                  sliderRef.current.slickNext();
                }}>
                <img src="../../../assets/img/arrow-right.svg" alt="#" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-class"></div>
      </div>
    </>
  );
};

export default Fund;
