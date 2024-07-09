import { t } from "i18next";
import { massagesData } from "../massagesData";
import Card from "../cmps/Card";
import "../assets/css/Massages.css";
import "../assets/css/Card.css";
import massagesBackground from "../assets/img/massagesBackground.jpg";

const Massages = () => {
  return (
    <div className="massages">
      <div className="massages-background">
        <img
          src={massagesBackground}
          alt="massagesBacground"
        />

        <div className="progress">
          <h1>{t("pages.massages.title")}</h1>
        </div>
      </div>
      <div className="massages-content">
        <div className="massage-content-wrap">
          <h6>{t("pages.massages.subtitle")}</h6>
          <h2>{t("pages.massages.techniques")}</h2>
        </div>
        <div className="massage-cards">
          {massagesData.map(({ id, title, imgURL, desc }) => (
            <Card
              key={title}
              titleKey={title}
              id={id}
              imgURL={imgURL}
              descKey={desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Massages;
