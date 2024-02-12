import React, { useState } from "react";
import "../assets/css/Card.css";

const Card = ({ imgURL, title, desc }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    console.log("Button clicked!");
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src={imgURL}
            alt="img"
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className={`text ${showMore ? "show-more" : ""}`}>{desc}</p>
        </div>
        <div className="see-more-btn">
          <button
            onClick={toggleShowMore}
            className="see-button"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
