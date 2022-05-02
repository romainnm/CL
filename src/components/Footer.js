import React from "react";
import { EmailIcon, LinkedinIcon, TwitterIcon } from "../helpers/icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons__container">
        <div className="footer-icon">
          <a
            href="https://www.linkedin.com/in/cindylung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="footer-icon">
          <a
            href="mailto: lungcindy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
        <div className="footer-icon">
          <a
            href="https://twitter.com/cindylung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
