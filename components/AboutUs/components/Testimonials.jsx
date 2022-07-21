import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
  const slider = {
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
  };
  const slider2 = {
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
  };
  const sliderThumb = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    accessibility: false,
    draggable: false,
    centerPadding: 0,
  };
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const sliderThree = useRef(null);
  const [sliderState, setSliderState] = useState({});
  useEffect(() => {
    if (sliderOne.current)
      setSliderState((state) => ({ ...state, sliderOne: sliderOne.current }));
    if (sliderTwo.current)
      setSliderState((state) => ({ ...state, sliderTwo: sliderTwo.current }));
    if (sliderThree.current)
      setSliderState((state) => ({
        ...state,
        sliderThree: sliderThree.current,
      }));
  }, [sliderOne, sliderTwo, sliderThree]);
  return (
    <>
      <div className="about-wrap testimonial-sec">
        <div className="container container-custom">
          <div className="row">
            <div className="col">
              <h3 className="subhead-title">Testimonials</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 title-col">
              <h2 className="sub-head">What thay say about us</h2>
            </div>

            <div className="col-lg-7 text-col">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 slider-images">
              <div className="slider-img-wrap">
                <Slider {...slider} ref={sliderOne}>
                  <div className="slider">
                    <div className="img-wrap">
                      <img src="../../../assets/img/testi1.jpg" alt="#" />

                      <div className="squarebg"></div>
                    </div>
                  </div>

                  <div className="slider">
                    <div className="img-wrap">
                      <img src="../../../assets/img/testi1.jpg" alt="#" />

                      <div className="squarebg"></div>
                    </div>
                  </div>

                  <div className="slider">
                    <div className="img-wrap">
                      <img src="../../../assets/img/testi1.jpg" alt="#" />

                      <div className="squarebg"></div>
                    </div>
                  </div>

                  <div className="slider">
                    <div className="img-wrap">
                      <img src="../../../assets/img/testi1.jpg" alt="#" />

                      <div className="squarebg"></div>
                    </div>
                  </div>

                  <div className="slider">
                    <div className="img-wrap">
                      <img src="../../../assets/img/testi1.jpg" alt="#" />

                      <div className="squarebg"></div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-lg-7 slider-texts">
              <div className="slider-text-wrap">
                <div className="text-slides">
                  <Slider
                    {...slider2}
                    ref={sliderTwo}
                    asNavFor={sliderState.sliderOne}>
                    <div className="slider">
                      <div className="text-wrap">
                        <img
                          src="../../../assets/img/quote.svg"
                          alt=""
                          className="quote-ico"
                        />
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,”
                        </p>

                        <h2>
                          <span>Elisa Hassle</span>- CEO of CARE India
                        </h2>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="text-wrap">
                        <img
                          src="../../../assets/img/quote.svg"
                          alt=""
                          className="quote-ico"
                        />
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,”
                        </p>

                        <h2>
                          <span>Elisa Hassle</span>- CEO of CARE India
                        </h2>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="text-wrap">
                        <img
                          src="../../../assets/img/quote.svg"
                          alt=""
                          className="quote-ico"
                        />
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,”
                        </p>

                        <h2>
                          <span>Elisa Hassle</span>- CEO of CARE India
                        </h2>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="text-wrap">
                        <img
                          src="../../../assets/img/quote.svg"
                          alt=""
                          className="quote-ico"
                        />
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,”
                        </p>

                        <h2>
                          <span>Elisa Hassle</span>- CEO of CARE India
                        </h2>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="text-wrap">
                        <img
                          src="../../../assets/img/quote.svg"
                          alt=""
                          className="quote-ico"
                        />
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,”
                        </p>

                        <h2>
                          <span>Elisa Hassle</span>- CEO of CARE India
                        </h2>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="slider-thumb-wrap">
                <button
                  className="btn-slides"
                  id="thumb_prev"
                  onClick={() => {
                    sliderOne.current.slickPrev();
                    sliderTwo.current.slickPrev();
                    sliderThree.current.slickPrev();
                  }}>
                  <img src="../../../assets/img/arrow-right.svg" alt="" />
                </button>
                <div className="thumb-slides">
                  <Slider
                    {...sliderThumb}
                    ref={sliderThree}
                    asNavFor={sliderState.sliderTwo}>
                    <div className="slider">
                      <div className="thumb-wrap">
                        <img src="../../../assets/img/testi1.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider">
                      <div className="thumb-wrap">
                        <img src="../../../assets/img/testi1.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider">
                      <div className="thumb-wrap">
                        <img src="../../../assets/img/testi1.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider">
                      <div className="thumb-wrap">
                        <img src="../../../assets/img/testi1.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider">
                      <div className="thumb-wrap">
                        <img src="../../../assets/img/testi1.jpg" alt="" />
                      </div>
                    </div>
                  </Slider>
                </div>
                <button
                  className="btn-slides"
                  id="thumb_next"
                  onClick={() => {
                    sliderOne.current.slickNext();
                    sliderTwo.current.slickNext();
                    sliderThree.current.slickNext();
                  }}>
                  <img src="../../../assets/img/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
