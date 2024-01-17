import React from "react";
import FooterPic from "../assets/img/footerPic.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="background-photo">
        <img
          src={FooterPic}
          alt="footerPic"
        />
      </div>
    </div>
  );
};

export default Footer;
