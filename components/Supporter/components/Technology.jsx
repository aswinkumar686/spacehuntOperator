import React from 'react';
import { useSelector } from 'react-redux';
import ModalPayment from './ModalPayment';

const Technology = () => {
  const { campaigns = [] } = useSelector(({ supporter }) => supporter);

  return (
    <>
      <div className="support-detail-sec">
        <div className="container custom-container">
          <div className="support-card support-detail">
            <div className="img-block">
              <div className="sp-category">TECHNOLOGY</div>
              <img src="../../../assets/img/card-3.png" alt="" />
            </div>
            <div className="text-block">
              <div className="tech-det-wrapper d-flex">
                <div className="tech-name">
                  <span>KM</span> {campaigns[0]?.type}
                </div>
              </div>
              <h4>{campaigns[0]?.title}</h4>
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

              <div className="range-wrapper">
                <div className="range-data-wrapper">
                  <span className="usd">
                    {campaigns[0]?.currentBalance} <span>ETH Raised</span>
                  </span>
                  <span className="per">{campaigns[0]?.currentBalance}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${campaigns[0]?.percentageContribution}%`,
                    }}
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>

                <div className="time">
                  <img src="../../../assets/img/time_green.svg" alt="" />
                  {campaigns[0]?.duration}
                  days left
                </div>
              </div>
              <ModalPayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
