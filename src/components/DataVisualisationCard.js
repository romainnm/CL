import React from "react";
import { Link } from "react-router-dom";
const DataVisualisationCard = () => {
  return (
    <article className="data-card">
      <Link to="/data-visualisation/1" className="data-card__img-container">
        <h3>Project Name</h3>
        <img src="./images/mock-img.jpg" alt="data-project" />
      </Link>
    </article>
  );
};

export default DataVisualisationCard;
