import React from "react";
import "../assets/css/AboutMe.css";
import { useTranslation } from "react-i18next";

import Marina4 from "../assets/img/Marina4.jpg";
import aboutBackground from "../assets/img/aboutBackground.jpg";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  // Conditionally determine text alignment class based on current language
  const textAlignmentClass = i18n.language === "Hebrew" ? "text-right" : "";

  return (
    <div className="about-container">
      <div className="about-background">
        <img
          src={aboutBackground}
          alt=""
        />
      </div>
      <div className="about-title">
        <h1>{t("pages.about.title")}</h1>
      </div>

      <div className="content-container">
        <h2>{t("pages.about.subtitle")}</h2>
        <div className="content-container-inner">
          <div className={`content-container-left ${textAlignmentClass}`}>
            <p>{t("pages.about.p1")}</p>
            <p>{t("pages.about.p2")}</p>
            <p>{t("pages.about.p3")}</p>
            <p>{t("pages.about.p4")}</p>
          </div>
          <div className="content-container-right">
            <img
              src={Marina4}
              alt="MarinaPic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
