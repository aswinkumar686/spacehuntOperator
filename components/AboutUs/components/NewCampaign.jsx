import React from 'react';
import { Link } from 'react-router-dom';

const NewCampaign = () => {
  return (
    <>
      <div className="campaingn-sec">
        <div className="container custom-container">
          <div className="campaingn-wrapper d-flex">
            <div className="text-col">
              <div className="text-block">
                <h2 className="sub-head">Create a New Campaign</h2>
                <h4>Tell us what type of project you're starting</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div className="btn-col">
              <div className="btn-wrapper d-flex">
                <Link to="/campaigns" className="camp-btn">
                  <div className="camp-btn-cover">
                    <div className="img-block">
                      <img src="../../../assets/img/charity.svg" alt="" />
                    </div>
                    <h4>
                      Charity
                      <img
                        src="../../../assets/img/arrw-rgt-grn-lgt.svg"
                        alt=""
                      />
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </Link>
                <Link to="/campaigns" className="camp-btn">
                  <div className="camp-btn-cover">
                    <div className="img-block">
                      <img src="../../../assets/img/start_up.svg" alt="" />
                    </div>
                    <h4>
                      Projects
                      <img
                        src="../../../assets/img/arrw-rgt-grn-lgt.svg"
                        alt=""
                      />
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCampaign;
