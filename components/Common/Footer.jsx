import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-sec">
          <div className="footer-top-cover">
            <div className="container custom-container">
              <div className="footer-top-wrapper d-flex">
                <div className="f-logo-block">
                  <div className="f-logo-block">
                    <Link className="f-logo" to="/">
                      <img src="../../../assets/img/f-logo.svg" alt="" />
                    </Link>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                </div>
                <div className="f-nav-block">
                  <Link className="f-nav-link" to="/">
                    HOME
                  </Link>
                  <Link className="f-nav-link" to="/aboutus">
                    ABOUT US
                  </Link>
                  <Link className="f-nav-link" to="/supporter">
                    SUPPORTER
                  </Link>
                  <Link className="f-nav-link" to="/campaigns">
                    CAMPAIGNS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-soc-cover">
            <div className="container custom-container">
              <div className="footer-soc-wrapper d-flex">
                <div className="soc-block">
                  <Link className="soc-btn" to="/">
                    <img src="../../../assets/img/facebook.svg" alt="" />
                  </Link>
                  <Link className="soc-btn" to="/">
                    <img src="../../../assets/img/twitter.svg" alt="" />
                  </Link>
                  <Link className="soc-btn" to="/">
                    <img src="../../../assets/img/in.svg" alt="" />
                  </Link>
                  <Link className="soc-btn" to="/">
                    <img src="../../../assets/img/instagram.svg" alt="" />
                  </Link>
                </div>

                <div className="f-terms-block">
                  <Link to="/" className="f-terms-link">
                    TERMS AND CONDITIONS
                  </Link>
                  <Link to="/" className="f-terms-link">
                    PRIVACY POLICY
                  </Link>
                  <Link to="/" className="f-terms-link">
                    HELP
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-rights-cover">
            <div className="container custom-container">
              <p>Copyright © 2022 Decrowd. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
