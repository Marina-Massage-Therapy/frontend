import "../assets/css/Welcome.css";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="title-wrap">
        <h6>{t("cmps.welcome.welcomeTitle")}</h6>
        <h2>{t("cmps.welcome.words")}</h2>
      </div>
      <div className="content-wrap">
        <p>{t("cmps.welcome.p1")}</p>
        <br />
        <br />
        <p>{t("cmps.welcome.p2")}</p>
        <div className="read-more-btn">
          <button onClick={() => navigate("/about")}>
            {t("cmps.welcome.read")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
