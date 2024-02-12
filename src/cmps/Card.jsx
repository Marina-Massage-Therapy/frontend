import React, { useState } from "react";
import "../assets/css/Card.css";
import { useTranslation } from "react-i18next"; // Importing only useTranslation

const Card = ({ imgURL, titleKey, descKey }) => {
  const { t, i18n } = useTranslation(); // Accessing the t function through useTranslation
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    console.log("Button clicked!");
  };

  const textAlignmentClass = i18n.language === "Hebrew" ? "text-right" : "";

  return (
    <div className={`card-container ${textAlignmentClass}`}>
      <div className="card">
        <div className="card-img">
          <img
            src={imgURL}
            alt="img"
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">{t(titleKey)}</h2>
          <p
            className={`text ${
              showMore ? "show-more" : ""
            } ${textAlignmentClass}`}
          >
            {t(descKey)}
          </p>
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
