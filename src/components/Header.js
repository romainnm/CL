import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { links } from "../helpers/constants";
import { navScroll } from "../helpers/utils";

const Header = () => {
  const {
    currentNav,
    onNavClick,
    toggleMobileNav,
    showMobileNav,
    navOverlayContainer,
  } = useGlobalContext();
  const headerContainer = useRef();
 

  useEffect(() => {
    navScroll(headerContainer);
  }, []);

  return (
    <>
      <div className="center-content">
        <header ref={headerContainer}>
          <h1>
            <Link
              to="/CL"
              onClick={(e) =>
                onNavClick(e.target.innerText, navOverlayContainer)
              }
            >
              Cindy Lung
            </Link>
          </h1>
          <nav className="mobile-nav">
            <Link
              to="#"
              id="toggle"
              onClick={() => toggleMobileNav(navOverlayContainer)}
              className={`${showMobileNav ? "on" : null}`}
            >
              <span></span>
            </Link>
          </nav>
          <nav className="web-nav">
            <ul>
              {links.map((link, index) => {
                const { path, text } = link;
                return (
                  <li
                    key={index}
                    className={`${currentNav === text ? "active-nav" : null}`}
                  >
                    <Link
                      to={path}
                      onClick={(e) => onNavClick(e.target.innerText, null)}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
