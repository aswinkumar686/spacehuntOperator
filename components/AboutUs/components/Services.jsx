import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="about-wrap abt-services-sec">
        <div className="container custom-container">
          <div className="row">
            <div className="col">
              <h3 className="subhead-title">Our Services</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 title-col">
              <h2 className="sub-head">Creative Treat with our magic</h2>
            </div>

            <div className="col-md-7 text-col">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="row abt-services-cards">
            <div className="col-lg-4 pb-3">
              <div className="services-cards">
                <h3>Lorem ipusm</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>

                <Link to="/" className="more">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 pb-3">
              <div className="services-cards">
                <h3>Lorem ipusm</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a{' '}
                </p>

                <Link to="/" className="more">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 pb-3">
              <div className="services-cards">
                <h3>Lorem ipusm</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s,
                </p>

                <Link to="/" className="more">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
