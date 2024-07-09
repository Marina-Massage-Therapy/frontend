import React from "react";
import "../assets/css/Welcome.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const textAlignmentClass =
    i18n.language === "Hebrew" ? "text-right" : "text-left";

  return (
    <div className="welcome-container">
      <div className="title-wrap">
        <h6>{t("cmps.welcome.welcomeTitle")}</h6>
        <h2>{t("cmps.welcome.words")}</h2>
      </div>
      <div className={`content-wrap ${textAlignmentClass}`}>
        <p>{t("cmps.welcome.p1")}</p>
        <br />
        <br />
        <p>{t("cmps.welcome.p2")}</p>
      </div>
      <div className="read-more-btn">
        <button onClick={() => navigate("/about")}>
          {t("cmps.welcome.read")}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
