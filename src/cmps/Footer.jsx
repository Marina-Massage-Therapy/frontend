import React from "react";
import FooterPic from "../assets/img/footerPic.png";
import "../assets/css/Footer.css";
import Contact from "../cmps/Contact";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-photo">
        <img
          src={FooterPic}
          alt="footerPic"
        />
        <div className="footer-wrap-contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
