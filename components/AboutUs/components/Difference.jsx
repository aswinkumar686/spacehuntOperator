import React from 'react';

const Difference = () => {
  return (
    <>
      <div className="about-wrap difference-sec">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="sub-head">
                The <span>DeCROWD</span> Difference
              </h2>
            </div>

            <div className="col-lg-7 title-text text-col">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetti
              </p>
            </div>

            <div className="row count-wrap">
              <div className="col-lg-3"></div>

              <div className="col-md-4 col-lg-3">
                <div className="count-item">
                  <h3 className="count">6000</h3>
                  <p className="count-title">Lorem ipsum</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="count-item">
                  <h3 className="count">324</h3>
                  <p className="count-title">Lorem ipsum</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="count-item">
                  <h3 className="count">232</h3>
                  <p className="count-title">Lorem ipsum</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 pb-3">
                <img src="../../../assets/img/diff-1.jpg" alt="" />
              </div>
              <div className="col-md-4 pb-3">
                <img src="../../../assets/img/diff-2.jpg" alt="" />
              </div>
              <div className="col-md-4 pb-3">
                <img src="../../../assets/img/diff-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Difference;
