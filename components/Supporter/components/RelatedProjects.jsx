import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import timegreen from '../../../assets/img/time_green.svg';
import arrow from '../../../assets/img/arrw-rgt-grn.svg';

import dummyArray from './DummyArray';

const RelatedProjects = () => {
  const { campaigns = [] } = useSelector(({ supporter }) => supporter);

  return (
    <>
      <div className="support-sec related-proj">
        <div className="container custom-container">
          <div className="title-block">
            <h2 className="sub-head mb-0 ">Related Projects</h2>
          </div>
          <div className="support-content-cover  pt-0">
            <div className="support-card-wrapper row gx-lg-4 gx-xl-5">
              {campaigns.map((card, index) => (
                <div className="col-lg-4 col-md-6" key={`${card.id}sg`}>
                  <div className="support-card">
                    <div className="img-block">
                      <img src={dummyArray[index % 6]?.image} alt="" />
                    </div>
                    <div className="text-block">
                      <div className="tech-det-wrapper d-flex">
                        <div className="tech-name">{card?.type}</div>
                        <div className="time">
                          <img src={timegreen} alt="" />
                          {card?.duration} days left
                        </div>
                      </div>
                      <h4>{card?.title}</h4>
                      <p>{dummyArray[index % 6]?.description}</p>
                      <div className="range-wrapper">
                        <div className="range-data-wrapper">
                          <span className="usd">
                            {card?.currentBalance} <span>ETH Raised</span>
                          </span>
                          <span className="per">{card?.currentBalance}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${card?.percentageContribution}%`,
                            }}
                            role="progressbar"
                            aria-valuenow={`${card?.percentageContribution}%`}
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-block">
                      <Link to="/campaigns" className="donate-btn">
                        Donate Now
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProjects;
