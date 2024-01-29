import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React from "react";
import "../assets/css/AboutMe.css";
import Marina from "../assets/img/marina.jpg";
import { t } from "i18next";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <p>{t("pages.about.title")} </p>
      </div>

      <div className="content-container">
        <div className="content-container-left">
          <p>{t("pages.about.p1")}</p>
          <p>{t("pages.about.p2")}</p>
          <p>{t("pages.about.p3")}</p>
          <p>{t("pages.about.p4")}</p>
        </div>
        <div className="content-container-right">
          <img
            src={Marina}
            alt="MarinaPic"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
