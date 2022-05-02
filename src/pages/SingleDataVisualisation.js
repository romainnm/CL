import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "../helpers/icons";

const SingleDataVisualisation = () => {
  return (
    <div className="center-content">
      <div className="project-info">
        <h2>Project Name</h2>
        <p className="project-description">
          Sweet roll cupcake biscuit bear claw cake. Pudding soufflé pastry
          powder marzipan toffee lemon drops. Jelly beans halvah chocolate cake
          danish macaroon dessert donut pastry chocolate bar. Tart danish wafer
          pudding cotton candy dessert caramels. Tootsie roll shortbread ice
          cream oat cake dessert. Chocolate sweet roll tootsie roll sweet
          lollipop marshmallow cotton candy.
        </p>
        <div className="project-details">
          <p>Client: Jujubes candy cheesecake</p>
          <p>Studio: Cookie oat cake</p>
          <p>Role: Bonbon powder</p>
        </div>
      </div>
      <div className="project-images">
        <img src="../images/mock-img.jpg" alt="data-project" />
        <img src="../images/mock-img.jpg" alt="data-project" />
        <img src="../images/mock-img.jpg" alt="data-project" />
      </div>
      <div className="prev-next-project">
        <Link to={`/data-visualisation/2`}>
          <IoIosArrowBack /> <span>Prev Project Name</span>
        </Link>
        <Link to={`/data-visualisation/3`}>
          <span>Next Project Name</span>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default SingleDataVisualisation;
