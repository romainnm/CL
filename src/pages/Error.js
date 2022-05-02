import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="center-content error">
      <h2 className="page-title">Oops! Page Not Found</h2>
      <div className="btn-container">
        <Link to="/" className="back">
          Go Back
        </Link>
      </div>
      <div className="error__imgcontainer">
        <img src="./images/23.svg" alt="error" />
      </div>
    </div>
  );
};

export default Error;
