import React from "react";
import { Link } from "react-router-dom";
import mockimg from "./mock-img.jpg";

const DataVisualisationCard = () => {
  return (
    <article className="data-card">
      <Link to="/CL/data-visualisation/1" className="data-card__img-container">
        <h3>Project Name</h3>
        <img src={mockimg} alt="data-project" />
      </Link>
    </article>
  );
};

export default DataVisualisationCard;
