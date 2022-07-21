import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

import '../../assets/css/header.css';

const Header = () => {
  const headerRef = useRef();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [headerRef]);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light" ref={headerRef}>
          <div className="container custom-container">
            <Link className="navbar-brand mr-auto mr-md-3" to="/">
              <img src={logo} />
            </Link>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-toggle="offcanvas"
              onClick={() => setMenu(!menu)}>
              <div
                className={`hamburger ${(menu && 'is-active') || ''}`}
                id="hamburger-1">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
            <div
              className={`navbar-collapse offcanvas-collapse ${
                (menu && 'open') || ''
              }`}>
              <div className="navbar-collapse ">
                <div className="nav-wrapper">
                  <ul className="navbar-nav ">
                    <li className="nav-item ">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'nav-link active' : 'nav-link'
                        }
                        to="/"
                        onClick={() => setMenu(!menu)}>
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'nav-link active' : 'nav-link'
                        }
                        to="/aboutUs"
                        onClick={() => setMenu(!menu)}>
                        ABOUT US
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'nav-link active' : 'nav-link'
                        }
                        to="/supporter"
                        onClick={() => setMenu(!menu)}>
                        SUPPORTER
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'nav-link active' : 'nav-link'
                        }
                        to="/informations"
                        onClick={() => setMenu(!menu)}>
                        Informations
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="headerButton">
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
