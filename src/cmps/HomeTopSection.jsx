import "../assets/css/HomeTopSection.css";
import { t } from "i18next";
import Background from "../assets/img/background.png";
import stoneBackground from "../assets/img/stoneBackground.jpg";
import deepBackground from "../assets/img/deepBackground.jpg";
import sport from "../assets/img/sport.jpg";
import Carousel from "./Carousel";
import Typewriter from "typewriter-effect";

const IMAGES = [Background, stoneBackground, deepBackground, sport];

const HomeTopSection = () => {
  return (
    <div className="background-photo">
      <Carousel imageUrls={IMAGES} />

      <div className="overlay-text">
        <h1>{t("cmps.homeTopSection.title")}</h1>
        <h4>
          {" "}
          <Typewriter
            options={{
              strings: [t("cmps.homeTopSection.subtitle")],
              loop: true,
              autoStart: true,
              delay: 75,
            }}
          />
        </h4>
      </div>
    </div>
  );
};

export default HomeTopSection;
