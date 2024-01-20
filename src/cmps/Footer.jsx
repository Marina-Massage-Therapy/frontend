import React from "react";
import FooterPic from "../assets/img/footerPic.png";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-photo">
        <img
          src={FooterPic}
          alt="footerPic"
        />
      </div>
    </div>
  );
};

export default Footer;
