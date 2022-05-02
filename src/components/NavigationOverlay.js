import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../helpers/constants";
import { useGlobalContext } from "../context/context";
const NavigationOverlay = () => {
  const { currentNav, onNavClick, resizeWindow, navOverlayContainer } =
    useGlobalContext();

  useEffect(() => {
    const handleResize = () => {
      resizeWindow(navOverlayContainer);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="nav-overlay" ref={navOverlayContainer}>
      <ul className="mobile-nav__content">
        {links.map((link, index) => {
          const { path, text } = link;
          return (
            <li key={index}>
              <Link
                to={path}
                onClick={(e) =>
                  onNavClick(e.target.innerText, navOverlayContainer)
                }
                className={`${currentNav === text ? "active-nav" : null}`}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationOverlay;
