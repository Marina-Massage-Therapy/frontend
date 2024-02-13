import { NavLink, useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import logo18 from "../assets/img/logo18.png";
import { useState } from "react";
// import { t } from "i18next";
import BurgerMenu from "./BurgerMenu";
import SwitchLang from "./SwitchLang";
import { useTranslation } from "react-i18next";

const Header = ({ onChangeLang }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const [hoverLink, setHoverLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const fontSizeClass = i18n.language === "Hebrew" ? "hebrew-nav-links" : "";

  const toggleHover = (linkName) => {
    setHoverLink(linkName);
  };

  const linkStyle = (linkName) => ({
    color: isHome ? "white" : "black",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: isHome ? "transparent" : "#f4f4f4",
    textDecoration: "none",
    ...(hoverLink === linkName && {
      color: isHome ? "whitesmoke" : "#9d467e",
    }),
  });

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="header"
      style={{ backgroundColor: isHome ? "transparent" : "#f4f4f4" }}
    >
      <div className="header-content">
        <div className="header-left">
          <img
            src={logo18}
            alt="logo"
            style={{ objectFit: "cover" }}
          />
          <SwitchLang onChangeLang={onChangeLang} />
        </div>
        <div className="header-right">
          <BurgerMenu />
          <div
            className={`nav-links ${menuOpen ? "open" : ""} ${fontSizeClass}`}
          >
            <NavLink
              to={"/home"}
              style={linkStyle("home")}
              onClick={() => setMenuOpen(false)}
            >
              {t("cmps.header.home")}
            </NavLink>
            <NavLink
              to={"/about"}
              style={linkStyle("about")}
              onClick={() => setMenuOpen(false)}
            >
              {t("cmps.header.about")}
            </NavLink>
            <NavLink
              to={"/massages"}
              style={linkStyle("massages")}
              onClick={() => setMenuOpen(false)}
            >
              {t("cmps.header.massages")}
            </NavLink>
            <NavLink
              to={"/testimonials"}
              style={linkStyle("testimonials")}
              onClick={() => setMenuOpen(false)}
            >
              {t("cmps.header.testimonials")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
