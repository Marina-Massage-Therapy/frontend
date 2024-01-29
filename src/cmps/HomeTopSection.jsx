import Background from "../assets/img/background.png";
import "../assets/css/HomeTopSection.css";
import { t } from "i18next";

const HomeTopSection = () => {
  return (
    <div className="background-photo">
      <img
        src={Background}
        alt="backgroundPic"
        style={{ opacity: 0.7 }}
      />
      <div className="overlay-text">
        <h1>{t("cmps.homeTopSection.title")}</h1>
        <h4>{t("cmps.homeTopSection.subtitle")}</h4>
      </div>
    </div>
  );
};

export default HomeTopSection;
