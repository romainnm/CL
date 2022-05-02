import React from "react";
import { Link } from "react-router-dom";
import errorimg from "./23.svg";

const Error = () => {
  return (
    <div className="center-content error">
      <h2 className="page-title">Oops! Page Not Found</h2>
      <div className="btn-container">
        <Link to="/CL" className="back">
          Go Back
        </Link>
      </div>
      <div className="error__imgcontainer">
        <img src={errorimg} alt="error" />
      </div>
    </div>
  );
};

export default Error;
