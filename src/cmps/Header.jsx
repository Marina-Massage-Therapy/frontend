import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/Header.css";
// import { Center, Chakra} from "@chakra-ui/react";

const Header = ({ onChangeLang }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-left-logo">
            <span>logo</span>
            <div className="header-left-name">
              <span>MARINA</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/massages"}>MASSAGES</NavLink>
          <NavLink to={"/testimonials"}>TESTIMONIALS</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
