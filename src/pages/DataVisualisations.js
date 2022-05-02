import React from "react";
import DataVisualisationCard from "../components/DataVisualisationCard";

const DataVisualisations = () => {
  return (
    <div className="center-content">
      <div className="data-visualisation__container">
        <h2 className="page-title">Data Visualisation</h2>
        <div className="data-visualisation-list">
          <DataVisualisationCard />
          <DataVisualisationCard />
          <DataVisualisationCard />
          <DataVisualisationCard />
          <DataVisualisationCard />
        </div>
      </div>
    </div>
  );
};

export default DataVisualisations;
